const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mesuara',
  host: 'localhost',
  database: 'favlinks',
  password: 'password',
  port: 5432,
})


const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).json(result.rows)
    })
  }




  const createLink = (req, res) => {
    const { name, url } = req.body;

    pool.query('INSERT INTO favlinks (name, url) VALUES($1, $2)', [name, url], (error, results) => {
        if (error) {
            throw error
        } else {
            res.status(201).json(results.rows);
        }
    })
}

const updateLink = (req, res) => {
    const id = req.params.id;
    const { name, url } = req.body;

    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3', [name, url, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).jason(results.rows);
    })
}

const deleteLink = (req, res) => {
    const id = req.params.id;

    pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows);
    })
}
module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
  }