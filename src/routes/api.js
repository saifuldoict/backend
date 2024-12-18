const express = require ('express');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const WishListController = require('../controllers/WishListController');
const CartListController = require('../controllers/CartListController');
const InvoiceController = require('../controllers/InvoiceController');
const FeaturesController = require('../controllers/FeaturesController');
const { Route } = require('express');

const router = express.Router();


//Product

router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID', ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)


router.post('/ProductListByFilter', ProductController.ProductListByFilter)


//Users
router.get('/UserOTP/:email', UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)

module.exports = router;