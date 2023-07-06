import express from 'express'
import mercadoPago from './mercadoPago.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//rutas de todos los recursos
router.use('/payment', mercadoPago)

export default router
