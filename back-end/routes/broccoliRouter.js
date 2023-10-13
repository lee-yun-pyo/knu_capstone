const broccoliCtrl = require('../controllers/broccoliCtrl');
const router = require('express').Router();


router.route('/')
    .get(broccoliCtrl.getBroccoli)

module.exports=router;