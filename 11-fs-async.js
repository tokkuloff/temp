const {readFile , writeFile} = require('fs')

readFile('./cont/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
   const first = result;
   readFile('./cont/second.txt' , 'utf8' , (err,result) => {
    if(err){
        console.log(err);
        return
    }
   const second = result;
   writeFile('./cont/result-async.txt' , 
   `I am here to clarify that ${second} and make sure everyone knows that ${first}.` , (err,result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
   })
   })
})