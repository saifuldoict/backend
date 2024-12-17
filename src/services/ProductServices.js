const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel')
const ProductDetailModel = require('../models/ProductDetailModel');
const ProductModel = require('../models/productModel');
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




const ListByBrandService = async (req) => {
    try {
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        // Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
const ListByCategoryService = async(req)=>{
    try{
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        // Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }
    catch(e){
        return{status:'fail', data:e}.toString()
    }

}

const ListByRemarkService = async(req)=>{
    try{
        let Remark= req.params.Remark;
        let MatchStage={$match:{remark:Remark}};
       
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        // Query
        let data= await  ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
        return {status:"success",data:data}

    }
    catch(e){
        return{status:'fail', data:e}.toString()
    }

}




const ListBySmilierService = async()=>{

}

const ListByKeywordService = async()=>{

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