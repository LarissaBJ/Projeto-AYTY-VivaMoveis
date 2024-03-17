const express = require('express');
const router = express.Router();
const { getAllBriefings, addBriefing,removeBriefing, editeBriefing} = require('../controller/briefingController');

// Rotas
router.get('/listar', getAllBriefings);
router.post('/cadastrar', addBriefing);
router.delete('/remover/:id', removeBriefing);
router.put('/update/:id', editeBriefing);

module.exports = router;