function phone(){
    let a= document.getElementById("phone").value
    let b= /^\d{10}$/
    if(a.match(b)){
        document.getElementById("phone").style.borderColor="#008000"
        document.getElementById("t1").style.color="#008000"
        document.getElementById("t1").innerHTML="valid"

    }else{
        document.getElementById("phone").style.borderColor="#ff0000"
        document.getElementById("t1").innerHTML="*please enter a valid phone number"
    }
}
function email1(){
    let a= document.getElementById("email").value
    let b=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(b.test(a)){
        document.getElementById("email").style.borderColor="#008000"
        document.getElementById("t2").style.color="#008000"
        document.getElementById("t2").innerHTML="valid"
    }else{
        document.getElementById("email").style.borderColor="#ff0000"
        document.getElementById("t2").style.color="#ff0000"
        document.getElementById("t2").innerHTML="please enter a valid email ID"
    }
    
}
function date(){
    let a= document.getElementById("dob").value
    let b= new Date()
    console.log(a)
    console.log(b)

    
}