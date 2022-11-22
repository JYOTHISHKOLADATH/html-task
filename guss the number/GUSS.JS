var x=0
function start(){
     
     x=Math.floor(Math.random()*4)+1;
    console.log(x)
    flag=0
}

function play(y){
if(flag==0){
    console.log(x)
    if(x==0){
        alert("Please start the game")
    }else if(y==x){
        alert("wooooh!!! you win")
        document.getElementById("player").innerHTML=x;
        flag=1
    }else if(y!=x){
        alert("you missed :(")
        flag=1
    }
}else{
    alert("START THE GAME")
}

}