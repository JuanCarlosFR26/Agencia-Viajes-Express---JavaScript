// Todo lo relacionado a las rutas
import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaComentarios, 
    paginaDetalleViaje } from '../controllers/paginasController.js';
import {
    guardarComentario
} from '../controllers/comentarioController.js'

const router = express.Router(); // Extendiendo las rutas del archivo principal

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes );

router.get('/viajes/:slug', paginaDetalleViaje );

router.get('/comentarios', paginaComentarios);
router.post('/comentarios', guardarComentario);
export default router;