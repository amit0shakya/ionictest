module.exports=function(bookshelf){
	
	var post = bookshelf.Model.extend({
		tableName:'post'
	})

	return post;
}