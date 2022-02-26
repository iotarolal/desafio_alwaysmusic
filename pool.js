const { Pool } = require(`pg`)

const pool = new Pool({
    User : 'postgres',
    Host: '127.0.0.1',
    Database: 'alwaysmusic',
    Password: '1234',
    Max:20,
    Min:2,
    idleTimeoutMillis:30000,
    connectionTimeoutMillis: 2000
})

async function consultar() {
    const client = await pool.connect();
    const res = await client.query(`select * from estudiante`);
    console.log(res,rows);
    client.release();
    pool.end();
}

consultar();
