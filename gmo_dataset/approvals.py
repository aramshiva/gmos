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
CREATE TABLE IF NOT EXISTS approvals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Country VARCHAR(255),
    Crop VARCHAR(255),
    Trait VARCHAR(255),
    Brand_Name VARCHAR(255),
    Category VARCHAR(255),
    Genes VARCHAR(255),
    Event_Name_OECD VARCHAR(255),
    Applicant VARCHAR(255),
    Date VARCHAR(255),
    Year VARCHAR(255),
    Type VARCHAR(255),
    Reported_Only VARCHAR(255),
    URL VARCHAR(255)
);
"""
cursor.execute(create_query)

df = pd.read_excel('gmo_data.xlsx', sheet_name='Approvals', engine='openpyxl')

df = df[[
    'Country', 'Crop', 'Trait', 'Brand Name', 'Category', 'Genes',
    'Event Name / OECD', 'Applicant', 'Date', 'Year', 'Type',
    'Reported Only', 'URL'
]].copy()

df.columns = [
    'Country', 'Crop', 'Trait', 'Brand_Name', 'Category', 'Genes',
    'Event_Name_OECD', 'Applicant', 'Date', 'Year', 'Type',
    'Reported_Only', 'URL'
]

insert_query = """
INSERT INTO approvals (
    Country,
    Crop,
    Trait,
    Brand_Name,
    Category,
    Genes,
    Event_Name_OECD,
    Applicant,
    Date,
    Year,
    Type,
    Reported_Only,
    URL
) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

print("Available columns:", df.columns.tolist())

df = df.where(pd.notna(df), None)
for column in df.columns:
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
