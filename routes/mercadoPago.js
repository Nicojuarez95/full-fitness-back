import mercadopago from 'mercadopago';
import express from 'express';
import cors from 'cors';

const router = express.Router();

// Configurar Mercado Pago
mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

router.post('/', cors(), async (req, res) => {
  const { basket, shippingData } = req.body;

  if (!Array.isArray(basket) || basket.length === 0) {
    return res.status(400).json({ error: 'Invalid basket format' });
  }

  // Accede a los datos del formulario
  const { address, city, postalCode } = shippingData;

  const items = await Promise.all(
    basket.map(async (item) => {
      return {
        id: item.id,
        title: `${item.name} - Dirección: "${address}", Ciudad: "${city}", Código postal: "${postalCode}" `, 
        currency_id: 'ARS',
        unit_price: item.price,
        picture_url: item.image,
        quantity: 1,
      };
    })
  );

  const preference = {
    items,
    back_urls: {
      success: 'http://localhost:8000/',
      failure: '',
      pending: '',
    },
    auto_return: 'approved',
    binary_mode: true,
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).json({ init_point: response.body.init_point });
    })
    .catch((error) => {
      console.log('Error:', error);
      res.status(400).json({ error: error.message });
    });
    
});

export default router;