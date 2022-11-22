 var x=Math.floor(Math.random()*9)+1
    console.log(x)
    flag=0

function check(){
    if(flag<=5){
        y=document.getElementById("inp").value
        if(y==x){
            document.getElementById("feedback").innerHTML="YOU WIN!!!!"
            document.getElementById("inp").value=""
            document.getElementById("check").disabled=true;
        }else if(y<x){
            document.getElementById("feedback").innerHTML="GUSS LARGER NUMBER"
            flag=flag+1
            document.getElementById("inp").value=""
        }else if(y>x){
            document.getElementById("feedback").innerHTML="GUSS A SMALLER NUMBER"
            flag=flag+1
            document.getElementById("inp").value=""
        }
    }else if(flag>5){
        document.getElementById("feedback").innerHTML="YOU LOSE...  THE NUMBER WAS "+" "+x
        document.getElementById("inp").value=""
        document.getElementById("check").disabled=true;
    }
}