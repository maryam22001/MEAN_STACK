db.products.find({category:"Electronics"})
db.products.find({price:{$gt:300}})
db.products.find({inStock:false})
db.products.find({quantity:{$gt:50}})
db.products.find({tag:"computer"})
db.products.find({ $or:[{brand:"Dell"},{brand:"Samsung"}]})
db.products.find({}, { name: 1, price: 1, _id: 0 })
db.products.find({price:{$gt:200,$lt:700}})
db.products.countDocuments({category:"Electronics"})
db.products.find().sort({price:-1})


db.products.updateMany({category:"Electronics"},{$mul:{ price: .1 }})
db.products.updateOne({name:"Desk Chair"},{$set:{inStock:true,quantity:25}})
db.products.updateMany({price:{$gt:500}},{$push:{tag:"premium"}}, { upsert: true }) //set add countDocuments
db.products.updateOne({name:"Wireless Mouse"},{$inc:{quantity:-1}})
db.products.updateMany({},{$set:{discount:.50}},{upsert:true})



db.products.deleteMany({quantity:0})
db.products.deleteMany({},{category:"Furniture"})// deleted all
db.products.deleteMany({category:"Furniture"})// deleted all

db.products.deleteOne({name:"Monitor"})



