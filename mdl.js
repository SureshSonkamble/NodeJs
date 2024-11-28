function evnod(n){
    if(n%2==0){
        console.log("Even number")
    }else{
        console.log("Odd number")
    }
}

function tbl(n){
    for(let i=1;i<=10;i++){
      console.log(i*n)
    }
}

module.exports={evnod,tbl}