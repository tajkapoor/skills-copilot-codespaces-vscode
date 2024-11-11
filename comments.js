// create a web server
// create a route for the comments
// create a route for the comments/:id
// create a route for the comments/:id/edit
// create a route for the comments/:id/delete
// create a route for the comments/:id/edit
// create a route for the comments/:id/update

const express = require('express');
const router = express.Router();

router.get('/comments', (req, res) => {
  res.send('comments');
});

router.get('/comments/:id', (req, res) => {
  res.send('comments/:id');
});

router.get('/comments/:id/edit', (req, res) => {
  res.send('comments/:id/edit');
});

router.get('/comments/:id/delete', (req, res) => {
  res.send('comments/:id/delete');
});

router.get('/comments/:id/update', (req, res) => {
  res.send('comments/:id/update');
});

module.exports = router;


