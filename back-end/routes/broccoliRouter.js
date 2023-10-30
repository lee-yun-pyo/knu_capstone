const broccoliCtrl = require('../controllers/broccoliCtrl');
const router = require('express').Router();


router.route('/')
    .get(broccoliCtrl.getBroccoli)
    .post(broccoliCtrl.insertBroccoli)

router.route('/log')
    .post(broccoliCtrl.insertlog)
module.exports=router;