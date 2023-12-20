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

    pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2)', [name, url], (error, result) => {
        if (error) {
            handleError(res, error);
        } else {
            res.status(201).send(`Link created`);
        }
    });
};

const updateLink = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, url } = req.body;

    pool.query('UPDATE favlinks SET name = $1, url = $2 WHERE id = $3', [name, url, id], (error, result) => {
        if (error) {
            handleError(res, error);
        } else {
            res.status(200).send(`Link updated`);
        }
    });
};

const deleteLink = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM favlinks WHERE ID = $1', [id], (error, result) => {
        if (error) {
            handleError(res, error);
        } else {
            res.status(200).send(`Link Deleted`);
        }
    });
};

const handleError = (res, error) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
};




module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
  }