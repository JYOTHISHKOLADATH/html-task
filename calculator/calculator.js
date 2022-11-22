function clr(){
    document.getElementById("screen").value="";
}
function display(value){
    document.getElementById("screen").value +=value;
}
function calculate(){
    var p=document.getElementById("screen").value;
    var q=eval(p);
    document.getElementById("screen").value=q;
}
function dlt(){
    // let r=document.getElementById("screen").value;
    // console.log(r);
    // delete r;
    // let w=document.getElementById("screen").value;
    // w = w.slice(0, -1)
    // document.getElementById("screen")=w
    // // display.
    // function back() {
        var value = document.getElementById("screen").value;
        document.getElementById("screen").value = value.substr(0, value.length - 1);
    
    // }

}