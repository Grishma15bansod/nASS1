const http=require('http'); // imported 
    http.createServer(function(req,res){  //create a server 
        res.write('<h1>HELLO WORLD THIS IS MY FIRST NODE JS SERVER</h1>')  //we are sending  html   
        const user={        //passing a data in json formate
            name:"GRISHMA",
            age:23,
            email: "bansodgrishma@gmail.com",
            contact: 8698105861,
            DOJ: "JAN-2022",
            roll: "MERN STACK"
        }
        res.write('HELLO WORLD THIS IS MY FIRST NODE JS SERVER')  // we are sending plain text 
        res.end(JSON.stringify(user));
        //res.end()
    })
    .listen(4000)