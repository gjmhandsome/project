var express=require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use('/',express.static('static'));

server.listen(3333)
var i=0;
io.on('connection',function(socket){
    i++;
    // console.log(i);
    socket.on('open',function(data){
        console.log(data);
        socket.emit('opened','这是新信息')
    });
    socket.on('send',function(data){
        console.log(i);
        console.log(data);
        io.sockets.emit('get',data);
        socket.broadcast.emit('getOther',data);
    });
   
})
// var mongodb = require("mongodb").MongoClient;
// var express = require('express');
// var objectID = require("mongodb").ObjectID;
// var app = express();

// app.get('/add', function (req, res) {
//     res.header({ "Access-Control-Allow-Origin": "*" });
//     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
//         if (err) { return console.log('连接失败') }
//         else {
//             console.log('连接成功')
//             var req2 = {
//                 name: req.query.name,
//                 number: req.query.number
//             }
//             var collection = db.collection('site');
//             if(req2.name != 0 && req2.number != 0){
//                 collection.insert(req2, function (err, result) {
//                     if (err) {
//                         return res.send("fail");
//                     }
//                     else {
//                         console.log(result);
//                         res.send('ok');
//                         db.close();
//                     }
//                 })
//             }
//             else { return };
//         }


//     });
// });


// app.get('/get', function (req, res) {
//     res.header({ "Access-Control-Allow-Origin": "*" });
//     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
//         if (err) { console.log('连接失败') }
//         else {
//             console.log('连接成功');
//             var search = req.query ? req.query : {};
//             console.log(search + "sdadf");
//             var collection = db.collection('site');
//             collection.find(search).toArray(function (err, result) {
//                 if (err) {
//                     return console.log('fail');
//                 }
//                 else {
//                     console.log(result);
//                     res.send(result);
//                     db.close();
//                 }
//             });
//         }
//     });
// });
// // app.get('/dl', function (req, res) {
// //     res.header({ "Access-Control-Allow-Origin": "*" });
// //     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
// //         if (err) { console.log('连接失败') }
// //         else {
// //             console.log('连接成功');
// //             var search = [
// //                 {name:123,password:456},
// //                 {name:1234,password:456}
// //             ]
// //             // console.log(search + "sdadf");
// //              res.send(search);
// //         }
// //     });

// // });
// app.get('/dl', function (req, res) {
//     res.header({ "Access-Control-Allow-Origin": "*" });
//     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
//         if (err) { console.log('连接失败') }
//         else {
//             console.log('连接成功');
//             var search = [
//                 {name:123,password:456},
//                 {name:1234,password:456}
//             ]
//             var x={name:req.query.name,
//               password:req.query.password    
//             }
//             for(var i=0;i<search.length;i++){
//                  if(search[i].name==x.name&&search[i].password==x.password){
//                         res.send('ok');
//                        return
//                  }
//                  else{
//                      if(i==search.length-1){
                  
//                          return;
//                      }
//                  }
//             }
          
//             // console.log(search + "sdadf");
             
//         }
//     });

// });

// app.get('/remove', function (req, res) {
//     res.header({ "Access-Control-Allow-Origin": "*" });
//     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
//         if (err) {
//             return console.log(0);
//         } else {

//             console.log(1);
//             var del = req.query;
//             var count = 0;
//             for (var key in del) {
//                 count++;
//             }
//             if (count == 0) {
//                 res.send("没有查询条件");
//             }
//             var con = db.collection("site");
//             con.remove(del, function (err, result) {
//                 if (err) {
//                     return console.log('fail');
//                 }

//                 console.log(result);
//                 res.send("ok");
//                 db.close();
//             })
//         }
//     });
// });

// app.get('/removeByid', function (req, res) {
//     mongodb.connect('mongodb://localhost:27017/test', function (err, db) {
//         if (err) {
//             return console.log(0);
//         } else {
//             console.log(1);
//             var del = req.query;
//             var count = 0;
//             for (var key in del) {
//                 count++;
//             }
//             if (count == 0) {
//                 res.send("没有查询条件");
//             }
//             if (count > 1) {
//                 res.send("请逐条删除");
//             }
//             var _id = { _id: objectID(del._id) };
//             var con = db.collection("site");
//             con.remove(_id, function (err, result) {
//                 if (err) {
//                     return console, log(0);
//                 }
//                 console.log(result);
//                 res.send("ok");
//                 db.close();
//             })
//         }
//     });
// });

// app.listen(3333)

// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead({"Content-type":"text/html"});
//     res.write("hihao!");
//     res.end();

// }).listen(3333);