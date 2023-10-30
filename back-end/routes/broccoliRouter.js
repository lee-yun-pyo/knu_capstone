const broccoliCtrl = require('../controllers/broccoliCtrl');
const router = require('express').Router();


router.route('/')
    .get(broccoliCtrl.getBroccoli)
    .post(broccoliCtrl.insertBroccoli)
router.route('/:id')
    .delete(broccoliCtrl.deleteBroccoli)

router.route('/like')
    .post(broccoliCtrl.addLike)

router.route('/log')
    .get(broccoliCtrl.getlog)
    .post(broccoliCtrl.insertlog)
module.exports=router;