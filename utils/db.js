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
export default getConnection;