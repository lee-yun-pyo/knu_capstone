const broccoliCtrl = require('../controllers/broccoliCtrl');
const router = require('express').Router();


router.route('/')
    .get(broccoliCtrl.getBroccoli)
    .post(broccoliCtrl.insertBroccoli)

router.route('/log')
    .get(broccoliCtrl.getlog)
module.exports=router;