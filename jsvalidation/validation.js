function validate(){
    var a=document.getElementById("inp").value
    var b=/^\d{10}$/;
    if(a.match(b)){
        document.getElementById("f").style.color="#008000"
        document.getElementById("f").innerHTML="valid"

    }else{
        document.getElementById("f").style.color="#ff0000"
        document.getElementById("f").innerHTML="invalid"
    }
}
function valid2(){
    var c=document.getElementById("inp2").value
    var q=
}