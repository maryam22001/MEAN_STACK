1-db.Products.aggregate([{ $match: { price: { $gt: 100 }, deleted: false }}])
2-db.Products.aggregate([{$group:{_id:"$category",count:{$sum:1}}}])
3-db.Products.aggregate([{$group:{_id:"$category",avg_price:{$avg:"$price"}}}])
4-db.Products.aggregate([{$group:{_id:"$category",min_price:{$min:"$price"}}}])
5-db.Products.aggregate([{$group:{_id:"$null",max_price:{$max:"$price"}}}])
6-db.Products.aggregate([{$sort:{price:-1}},{$limit:3}])
7-db.Products.aggregate([{$skip:5},{$limit:5}])
8-db.Products.aggregate([{$project:{name:1,price:1}}])
9-db.Products.aggregate([ {$group: {_id: null,count: { $sum: 1 },avg_price: { $avg: "$price" },min_price: { $min: "$price" },max_price: { $max: "$price" }}}])
10-db.Products.aggregate([ { $facet: { stats: [ { $group: {  _id: null, count: { $sum: 1 },avg_price: { $avg: "$price" }, 
            min_price: { $min: "$price" }, 
            max_price: { $max: "$price" } } } ], highestProduct: [  { $sort: { price: -1 } },  { $limit: 1 } ] } } ])

11-db.Products.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }, { $match: {  count: { $gt: 5 } } } ])
12-db.Products.aggregate([ { $sort: { price: -1, name: 1 }}])
13-db.Products.aggregate([
{ $sort: { price: -1 } }, { $group: { _id: "$category", name: { $first: "$name" }, price: { $first: "$price" } }}])
14-db.Products.aggregate([ { $sort: {  avg_price: -1 } }, { $group: { _id: "$category", avg_price: { $avg: "$price" } }} ,{ $limit: 1 }])

15-db.Products.aggregate([
    {
        $facet: {
            stats: [
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 },
                        avg_price: { $avg: "$price" },
                        min_price: { $min: "$price" },
                        max_price: { $max: "$price" }
                    }
                }
            ],
            topProducts: [
                { $sort: { price: -1 } },

                { $limit: 1 }
            ],
            cheapProducts: [
                { $sort: { price: 1 } },
                { $limit: 1 }
            ]
        }
    }
])
