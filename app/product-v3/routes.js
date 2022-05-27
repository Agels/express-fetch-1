const router = require('express').Router();
const Productcontroller = require('./controller');

router.get('/product',Productcontroller.index);
router.get('/product/:id', Productcontroller.detail);
router.post('/product', Productcontroller.store);
router.put('/product/:id', Productcontroller.update);
router.delete('/product/:id', Productcontroller.deleted);
module.exports = router;