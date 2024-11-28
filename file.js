const { error } = require('console');
var fs = require('fs');
fs.writeFileSync("./text.txt","Suresh Sonkamble")

var data=fs.readFileSync("./text.txt","utf-8")
console.log(data)

fs.readFile("./text.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error") 
    }else{
        console.log(result) 
    }
})