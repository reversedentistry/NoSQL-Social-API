const router = require("express").Router(); 
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    editThought, 
    deleteThought,
} = require("../../controllers/thoughtController"); 

router.route('/').get(getThoughts).post(createThought);

module.exports = router; 