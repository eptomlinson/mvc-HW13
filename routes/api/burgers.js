const router = require('express').Router();

const burgersControllers = require('../../controllers/burgersControllers');


//     function(req, res){
//     if(req.params.id){
//         burgersController.smashSpecificBurger(res, req)
//     }

// }

router.route('/:id?')
.get(req.params.id ? burgersController.smashSpecificBurger : burgersController.smashAllBurgs)
.post(burgersController.addBurger)
.update(burgersController.updBurger)
.delete(burgersController.delBurger)

module.exports = router;