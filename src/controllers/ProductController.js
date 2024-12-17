

const {BrandListService, CategoryListService, SliderListService, ListByBrandService, ListByCategoryService, ListBySmilierService, ListByKeywordService, ListByRemarkService, ListByFilterService, DetailsService, ReviewListService, CreateReviewService}= require('../services/ProductServices')

 



exports.ProductBrandList = async(req, res)=>{
   let result = await BrandListService();
   return res.status(200).json(result)
}

exports.ProductCategoryList = async(req, res)=>{
    let result = await CategoryListService();
    return res.status(200).json(result)
    
}

exports.ProductSliderList = async(req, res)=>{
 let result = await SliderListService();
 return res.status(200).json(result)
}

exports.ProductListByBrand = async(req,res)=>{
    let result = await ListByBrandService(req);
    return res.status(200).json(result)

}

exports.ProductListByCategory = async(req, res)=>{
    let result = await ListByCategoryService (req);
    return res.status(200).json(result)
 
}

exports.ProductListByRemark = async(req, res)=>{
    let result = await ListByRemarkService (req);
    return res.status(200).json(result)
 
}



exports.ProductListBySmilier = async(req, res)=>{
    let result = await ListBySmilierService(req);
    return res.status(200).json(result)
 
}

exports.ProductDetails = async(req, res)=>{
    let result = await DetailsService (req);
    return res.status(200).json(result)
 
}



exports.ProductListByKeyword = async(req, res)=>{
let result = await ListByKeywordService(req);
return res.status(200).json(result)
 
}


exports.ProductListByFilter = async(req, res)=>{
    let result = await ListByFilterService ();
    return res.status(200).json(result)
 
}


exports.ProductReviewList = async(req, res)=>{
    let result = await ReviewListService(req);
    return res.status(200).json(result)
 
}

exports.CreateReview = async(req, res)=>{
    let result = await CreateReviewService ();
    return res.status(200).json(result)
 
}