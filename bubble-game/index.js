//------------Bubble Game--------------
function bubblemain() {
    let a = ""
    for(i=1; i<=200 ; i++){
        let b = math.random() * 10
        let c = math.floor(b)
         a += '<div class = "bubble">${c}</div>'

    }
    document.getElementById('pbottom').innerhtml = a;

}
 // ----------------- timer-----------------------------

let x = 60
 
function box() {
    const clear = setInterval(() => {
        if ( x > 0){
        x--;
        document.getElementsByClassName('box1')[1]=x
        }

        else{
            clearInterval = clear
            box.innerhtml = "Game Over"
            
            box.innerhtml =  "your scor is ${}"


     }

    },1000)

}


function play() {
    console.log("play");
    bubblemain();
}