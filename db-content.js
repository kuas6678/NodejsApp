require('./lib/db');
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Comment = mongoose.model('Comment');
// 連接 MongoDB

mongoose.connect('mongodb://localhost/blog', function(err, db) {

        // 取得 contact 資料表裡所有資料
        Blog.find(function(err, rows) {
			console.log("-----------------------------------------------------------------------------");
			console.log("文章內容:");
			console.log("");
            // 印出 contact 資料表裡所有資料
            for (var index in rows)
                console.log(rows[index]);
			console.log("-----------------------------------------------------------------------------");
        });
		
		 Comment.find(function(err, rows) {
			console.log("-----------------------------------------------------------------------------");
			console.log("訪客留言:");
			console.log("");
            // 印出 contact 資料表裡所有資料
            for (var index in rows)
                console.log(rows[index]);
			console.log("-----------------------------------------------------------------------------");
        }); 
}); 
        