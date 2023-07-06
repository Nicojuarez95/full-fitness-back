import express from 'express'
import mercadoPago from './mercadoPago.js'

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/payment', mercadoPago)

export default router
