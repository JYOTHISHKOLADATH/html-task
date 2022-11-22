var a=new Date();
let w;
function cal(y){
    if(y==1){
        let d=a.getDay()
        switch(d){
            case 0:  w="sunday"
            break;
            case 1: w="monday"
            break;
            case 2: w="tuesday"
            break;
            case 3: w="wednessnday"
            break;
            case 4: w="thursday"
            break;
            case 5: w="friday"
            break;
            case 6: w="saturday"
            break;
            default: w="errorr"
        }
        document.getElementById("result").innerHTML=w

    }else if(y==2){
        let d=a.getDate()
        document.getElementById("result").innerHTML=d
    }else if(y==3){
        let d=a.getMonth()
        var m=["january","february","march","april","may","june","july","augest","september","october","november","december"]
        document.getElementById("result").innerHTML=m[d]
    }else if(y==4){
        let d=a.getFullYear()
        document.getElementById("result").innerHTML=d
    }else if(y==5){
        let d=a.getHours()
        let q=a.getMinutes()
        let w=a.getSeconds()
        document.getElementById("result").innerHTML=d+":"+q+":"+w
    }
    
}
