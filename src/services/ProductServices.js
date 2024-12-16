const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductDetailModel = require('../models/ProductDetailModel');
const ProductModel = require('../models/ProductDetailModel');
const ReviewModel= require('../models/ReviewModel');

const mongoose = require('mongoose');
const { from } = require('form-data');

const ObjectId = mongoose.Types.ObjectId

const BrandListService= async()=>{
    try{
        let data= await BrandModel.find();
        return {status:'success', data: data}
    }
    catch(e){
        return{status:'fail', data:e}.toString()
    }
}

const CategoryListService = async()=>{
    try{
        let data= await CategoryModel.find();
        return {status:'success', data: data}
    }
    catch(e){
        return{status:'fail', data:e}.toString()
    }
}

const SliderListService= async()=>{
    try{
        let data= await ProductSliderModel.find();
        return {status:'success', data: data}
    }
    catch(e){
        return{status:'fail', data:e}.toString()
    }
}

const ListByBrandService = async(res)=>{
    try{
        let BrandID= new ObjectId(req.params.BrandID);
        let MatchStage={$match:{BrandID:BrandID}}
        let JoinWithBrandStage={$lookup:{from:'Brands',localField:"BrandID",foreignField:"_id",as:brands}};
        let JoinWithCategoriesStage={$lookup:{from:'categories',localField:"categoryID",foreignField:"_id",as:Categories}};
        
        let data= await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoriesStage
        ])
        return {status:"success", data:data}

    }
catch(e){
    return{status:'fail', data:e}.toString()
}
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