import mysql from 'mysql';
import config from '../configs/db_config.json';

let pool = mysql.createPool(config);

async function getConnection() {
    const promise = new Promise( (resolve, reject) => {
        pool.getConnection( (err, conn) => {
            if (err) {
                reject(err);
            } else {
                resolve(conn);
            }
        });
    });
    return promise;
}

function releaseConnection(conn) {
    if (pool._freeConnections.indexOf(conn) === -1){
        conn.release();
    }
}

async function executeQuery(query){
    const connection = await getConnection()
        .catch( (err) => {
            throw err;
        });
    const promise = new Promise( (resolve, reject) => {
        connection.query( query, (err, rows) => {
            err ? reject(err) : resolve(rows);
        });
        releaseConnection(connection);
    }).catch( (err) => {
        throw err;
    });
    return promise;
}
export default executeQuery;