function letter(){
    let value=document.getElementById("display").value
    let x=value.length
    document.getElementById("num").innerHTML=x+"LETTERS"

}
function word(){
    let val=document.getElementById("display").value
    let w =val.split(" ")
    let y=w.length
    document.getElementById("num2").innerHTML="NUMBER OF WORDS ="+y
    // console.log

}

