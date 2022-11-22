flag=0
pleyer=0
computer=0
function play(y){
    var a=document.getElementById("pim")
    var b=document.getElementById("cim")
    console.log(a)
    if(pleyer<5&&computer<5){
        x=Math.floor(Math.random()*3)+1
        if(y==1&&x==1){
            document.getElementById("result").innerHTML="Tie"
            a.src="rock.jpg"
            b.src="rock.jpg"
            check()

        }else if(y==1&&x==2){
            document.getElementById("result").innerHTML="you score +1"
            pleyer=pleyer+1
            document.getElementById("plmark").innerHTML=pleyer
            a.src="rock.jpg"
            b.src="scisor.jpg"
            check()
        }else if(y==1&&x==3){
            document.getElementById("result").innerHTML="compter score +1"
            computer=computer+1
            document.getElementById("cmark").innerHTML=computer
            a.src="rock.jpg"
            b.src="scisor.jpg"
            check()
        }else if(y==2&&x==1){
            document.getElementById("result").innerHTML="compter score +1"
            computer=computer+1
            document.getElementById("cmark").innerHTML=computer
            a.src="scisor.jpg"
            b.src="papper.jpg"
            check()
        }else if(y==2&&x==2){
            document.getElementById("result").innerHTML="Tie"
            a.src="scisor.jpg"
            b.src="scisor.jpg"
            check()
            
        }else if(y==2&&x==3){
            document.getElementById("result").innerHTML="you score +1"
            pleyer=pleyer+1
            document.getElementById("plmark").innerHTML=pleyer
            a.src="scisor.jpg"
            b.src="papper.jpg"
            check()
        }else if(y==3&&x==1){
            document.getElementById("result").innerHTML="you score +1"
            pleyer=pleyer+1
            document.getElementById("plmark").innerHTML=pleyer
            a.src="papper.jpg"
            b.src="rock.jpg"
            check()
        }else if(y==3&&x==2){
            document.getElementById("result").innerHTML="compter score +1"
            computer=computer+1
            document.getElementById("cmark").innerHTML=computer
            a.src="papper.jpg"
            b.src="scisor.jpg"
            check()
        }else if(y==3&&x==3){
            document.getElementById("result").innerHTML="Tie"
            a.src="papper.jpg"
            b.src="papper.jpg"
            check()
            
        }
    }
}
function check(){
    if(pleyer>4||computer>4){
        if(pleyer>computer){
            document.getElementById("result").innerHTML="YOU WON!!"
        }else{
            document.getElementById("result").innerHTML="YOU LOSE :)"
        }
    }
}