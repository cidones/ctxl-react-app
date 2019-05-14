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
    static getTitle({ title })
    {
        return new Promise((resolve, reject) =>{
            pool.query(
                'SELECT user_id, title FROM title WHERE user_id = $1',
                [title],
                (error, response) => {
                    if ( error ) return reject(error)

                    resolve({title: response.rows[0]});
                }
                
            )
        })
    }
}
module.exports	= TitleTable;