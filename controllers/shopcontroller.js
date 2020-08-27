
var allproducts =[];

exports.addpro = (req,res,next)=>{
    allproducts.push(req.body.proname);
    res.redirect("/products");
}


exports.showproducts = (req,res,next)=>{
    res.render('products',{"allproducts":allproducts, "title":"Our Products..."});
}

exports.addproduct = (req,res,next)=>{
    res.render('addproduct');
}