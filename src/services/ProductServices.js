const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductDetailModel = require('../models/ProductDetailModel');
const ProductModel = require('../models/ProductDetailModel');
const ReviewModel= require('../models/ReviewModel');

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId

const BrandListService= async()=>{

}

const CategoryListService = async()=>{

}

const SliderListService= async()=>{

}

const ListByBrandService = async()=>{

}
const ListByCategoryService = async()=>{

}

const ListBySmilierService = async()=>{

}

const ListByKeywordService = async()=>{

}


const ListByRemarkService = async()=>{

}

const DetailsService = async()=>{

}

const ReviewListService = async()=>{

}
const CreateReviewService= async()=>{

}

const ListByFilterService = async()=>{

}

module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilierService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,
    ReviewListService,
    ListByFilterService,
    CreateReviewService
}