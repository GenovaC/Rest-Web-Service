const router = require('express').Router();
const { Pet } = require('../../db')

router.get('/', async (req, res) => {
    const pets = await Pet.findAll();
    res.json(pets);
})

router.post('/', async (req, res) => {
    const pet = await Pet.create(req.body);
    res.json(pet);
})

router.put('/:petId', async (req, res) => {
    await Pet.update(req.body, {
        where: {id: req.params.petId }
    });
    res.json({sucess: 'Se ha modificado correctamente'});
})

router.delete('/:petId', async (req, res) => {
    await Pet.destroy( {
        where: {id: req.params.petId }
    });
    res.json({sucess: 'Se ha eliminado correctamente'});
})

module.exports = router;