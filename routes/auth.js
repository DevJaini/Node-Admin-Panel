const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');

router.post('/add',authController.add)
router.post('/auth/update',authController.update)

router.get('/index',authController.index)
router.get('/',authController.index)

router.get('/add_user',authController.add_user)

router.get('/user-details',authController.user_details)

router.get('/edit',authController.edit)

router.get('/delete',authController.delete_detail)

router.get('/user',authController.user)

router.get('/email',authController.email)

router.get('/chat',authController.chat)

router.get('/change-password',authController.change_password)

router.get('/compose-email',authController.compose_email)

router.get('/profile',authController.profile)

router.get('/read',authController.read)

router.get('/user_add',authController.user_add)

router.get('/footer',authController.footer)

router.get('/header',authController.header)

router.get('/navbar',authController.navbar)

router.get('/sidebar',authController.sidebar)


router.get('/currency_ratio',authController.currency_ratio)

router.get('/currency_ratio_add',authController.currency_ratio_add)



module.exports = router;