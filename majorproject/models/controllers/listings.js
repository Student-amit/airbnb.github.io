//  const Listing=require("../models/listing");

// module.exports.index=async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
// };

// module.exports.renderNewForm=async(req,res)=>{
//     res.render("listings/new.ejs");
// };

// module.exports.showListing=async(req,res)=>{
//     let{id}=req.params;
//     const listing =await Listing.findById(id)
//     .populate({path: "reviews",populate:{path:"author"}})
//     .populate("owner");
//     if(!listing){
//         req.flash("error","Listing you requested for does not exist!");
//         res.redirect("/listings");
//     }

//     res.render("listings/show.ejs",{listing});
// };

// module.exports.createListing=async(req,res,next)=>{
//     const newListing=new Listing(req.body.listing);
//     newListing.owner=req.user._id; 
//     await newListing.save();
//     req.flash("success","New Listing Created!");
//     res.redirect("/listings");

// };

// module.exports.renderEditForm=async(req,res)=>{
//     let{id}=req.params;
//     let listing= await Listing.findById(id);
//     if( !listing.owner.equals(res.locals.currUser._id)){
//         req.flash("error","You don't have permission to update");
//        return res.redirect(`/listings/${id}`);
//     };
//     if(!listing){
//         req.flash("error","Listing you requested for does not exist!");
//         res.redirect("/listings");
//     }
//     res.render("listings/edit.ejs",{listing});
// };

// module.exports.updateListing=async(req,res)=>{
//     if(!req.isAuthenticated()){
//         req.flash("error","you must be logged in to create listing");
//         return res.redirect("/login");
//     }
//     next();
// let{id}=req.params;
// let listing= await Listing.findById(id);
// if( !listing.owner.equals(res.locals.currUser._id)){
//     req.flash("error","You don't have permission to update");
//    return res.redirect(`/listings/${id}`);
// };
// await Listing.findByIdAndUpdate(id,{...req.body.listing});
// req.flash("success","Listing Updated!");
// res.redirect(`/listings/${id}`);
// };

// module.exports.destoyListing=async(req,res)=>{
//     if(!req.isAuthenticated()){
//         req.flash("error","you must be logged in to delete listing");
//         return res.redirect("/login");
//     }
//     next();
//     let {id}=req.params;
//    let listing= await Listing.findById(id);
//     if(!listing.owner.equals(res.locals.currUser._id)){
//         req.flash("error","You don't have permission to delete");
//        return res.redirect(`/listings/${id}`);
//     };

//     let deleteListing=await Listing.findByIdAndDelete(id);
//     console.log(deleteListing);
//     req.flash("success","Listing Deleted Succesfully!");
//     res.redirect("/listings");
// };