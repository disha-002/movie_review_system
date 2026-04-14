import { Pool } from 'pg';

export async function GET(){
    try{
        const pool = new Pool({
            user : 'postgres',
            host : 'localhost',
            database : 'movie',
            password : 'database',
            port : 5432,
        });
        const client = await pool.connect();
        const res = await client.query('SELECT * FROM movies');
        client.release();
        return Response.json(res.rows);
    }catch(error){
        console.error('Error fetching movie details:', error);
        return Response.json({error:"Failed to fetch movie details"});
    }
}