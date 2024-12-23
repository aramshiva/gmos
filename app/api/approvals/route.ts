import { createPool, RowDataPacket } from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

const pool = createPool({
    host: process.env.MYSQL_DB_HST,
    user: process.env.MYSQL_DB_USR,
    password: process.env.MYSQL_DB_PWD,
    database: process.env.MYSQL_DB_NAM,
});

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const country = searchParams.get('country');
        const crop = searchParams.get('crop');
        const year = searchParams.get('year');

        const conditions: string[] = [];
        const values: (string | number)[] = [];

        if (country) {
            conditions.push('country = ?');
            values.push(country);
        }
        if (crop) {
            conditions.push('crop = ?');
            values.push(crop);
        }
        if (year) {
            conditions.push('year = ?');
            values.push(parseInt(year));
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
        const query = `SELECT * FROM approvals ${whereClause}`;

        const connection = await pool.getConnection();
        const [rows] = await connection.execute<RowDataPacket[]>(query, values);
        connection.release();

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch' },
            { status: 500 }
        );
    }
}