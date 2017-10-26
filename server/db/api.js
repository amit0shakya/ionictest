module.exports=function(app){
    
    var dbconfig = require('./config');
    var knex = require('knex')(dbconfig);
    var bookshelf = require('bookshelf')(knex);
    var post = require('./models/post')(bookshelf)
    
    app.post('/addpost',function(req,res){
        //res.send('Add post method responce');
        new post().save(req.body)
		.then(function(id){
			res.send(id.toJSON())
		})
		.catch(function(err){
            res.send(err)
		})
        
    })
    
    app.get('/getposts',function(req,res){
        //res.send('Get posts method responce')
        res.header('Access-Control-Allow-Origin',"*");

        new post().fetchAll()
		.then(function(post){
            res.send(post.toJSON());
			console.log(post.toJSON())
		})
		.catch(function(err){
			res.send(err)
		})
    })
    
}