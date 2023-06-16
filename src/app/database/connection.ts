import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'dbshaw'
})

conexao.connect()


/**
 * Executes a sql code with or without values
 * @param {string} sql sql instruction to be executes
 * @param {string=id | [infos, id]} values to be passed to sql
 * @param {string} messageReject message to be shown
 * @returns Promisse object
 */
export const sqlQuery = async (sql:string,  values:string | string[], messageReject:string) => {
    // console.log(values);
    try {
        return await new Promise((resolve, reject) => {
            conexao.query(sql, values, (error, result) => {
                // console.log(values);
                if (error) return reject(messageReject+error);
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            });
        });
    } catch (err) {
        return setImmediate(() => { throw err; });
    }

}

export default conexao
