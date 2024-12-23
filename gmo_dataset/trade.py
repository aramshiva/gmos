import pandas as pd
from dotenv import load_dotenv
import os
import mysql.connector

load_dotenv()

conn = mysql.connector.connect(
    host=os.getenv('MYSQL_DB_HST'),
    user=os.getenv('MYSQL_DB_USR'),
    password=os.getenv('MYSQL_DB_PWD'),
    database=os.getenv('MYSQL_DB_NAM')
)
cursor = conn.cursor()

create_query = """
CREATE TABLE IF NOT EXISTS trade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Year INT,
    Trade_Flow VARCHAR(50),
    Reporter VARCHAR(255),
    Partner VARCHAR(255),
    Commodity VARCHAR(255),
    Volume DECIMAL(10,2),
    Value DECIMAL(10,2)
);
"""
cursor.execute(create_query)

df = pd.read_excel('gmo_data.xlsx', sheet_name='Trade Data', engine='openpyxl')

df = df[[
    'Year', 'Trade Flow', 'Reporter', 'Partner', 'Commodity', 
    'Volume (T m.)', 'Value ($ m.)'
]].copy()

df.columns = [
    'Year', 'Trade_Flow', 'Reporter', 'Partner', 'Commodity',
    'Volume', 'Value'
]

insert_query = """
INSERT INTO trade (
    Year,
    Trade_Flow,
    Reporter,
    Partner,
    Commodity,
    Volume,
    Value
) VALUES (%s, %s, %s, %s, %s, %s, %s)
"""

print("Available columns:", df.columns.tolist())

df = df.where(pd.notna(df), None)
for column in df.columns:
    if column not in ['Year', 'Volume', 'Value']:  # Skip numeric columns
        df[column] = df[column].map(lambda x: x.strip().encode('ascii', 'ignore').decode() if isinstance(x, str) else x)

values = []
for row in df.values:
    cleaned_row = []
    for val in row:
        if isinstance(val, str) and len(val) > 255:
            val = val[:255]
        cleaned_row.append(val)
    values.append(tuple(cleaned_row))

try:
    cursor.executemany(insert_query, values)
except mysql.connector.Error as err:
    print(f"Error: {err}")
    conn.rollback()

conn.commit()
cursor.close()
conn.close()
