const pool = require('../../databasePool');

class TitleTable {
    static storeTitle({user_id, title})
    {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO title(user_id, title) VALUES($1, $2)',
                [user_id, title],
                (error, response) => {
                    if (error) return reject(error)

                    resolve();
                }
            )
        });
    }
    static getTitle({ user_id })
    { // Prepared statments PostgreSQL concept
        return new Promise((resolve, reject) =>{
            pool.query(
                'SELECT * FROM title WHERE user_id = $1',
                [user_id],
                (error, response) => {
                    if ( error ) return reject(error)

                    resolve(response.rows[0]);
                }
                
            )
        })
    }
}
module.exports	= TitleTable;