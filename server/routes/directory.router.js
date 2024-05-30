const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "employees"`)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('Error in GET /api/directory:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
