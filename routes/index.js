import express from 'express'; 
import {paginaIncio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
} from '../controllers/paginasController.js';
import{
    guardarTestimoniales
}from'../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaIncio);

router.get('/hola',(req, res) =>{//req - lo que enviamos : res - lo que express nos responde
  
    res.render('hola');

});

router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);

router.get('/viajes/:viajeid',paginaDetalleViaje);

router.get('/testimoniales',paginaTestimonios);
router.post('/testimoniales',guardarTestimoniales);

export default router;   