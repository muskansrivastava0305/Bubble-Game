let Score = 0
let x = 60
let Y
//------------Bubble Game--------------
function bubblemain() {
    let a = ""
    for (i = 1; i <= 200; i++) {
        let b = Math.random() * 10
        let c = Math.floor(b)
        a += `<div class="bubble">${c}</div>`

    }
    document.getElementById('pbottom').innerHTML = a;

}
// ----------------- timer-----------------------------


function box() {
    let clear = setInterval(() => {
        if (x > 0) {
            x--
            document.getElementsByClassName('box1')[1].innerHTML = x
        }
        else {
            clearInterval(clear)
            document.getElementById('pbottom').innerHTML = `<div>Game Over</div>`

            setTimeout(() => {
                document.getElementById('pbottom').innerHTML = `<div>Your Score is : ${Score} </div>`
            }, 1000);
        }
    }, 1000);
}

//-------------hit---------------------------------


function randomHit() {
    Y = Math.floor(Math.random() * 10)
    document.getElementsByClassName('box1')[0].innerHTML = Y
}

//---------------Bubble-Hit-------------------------

function bubbleHit() {
    let bubhit = document.getElementById('pbottom')
    bubhit.addEventListener('click', function (data) {
        const hit = Number(data.target.innerHTML)
        if (hit == Y) {
            scorehit()
            randomHit()
            bubblemain()

            console.log(data.target.innerHTML)
        }
        else {
            randomHit()
            bubblemain()
        }

    })

}


function scorehit() {
    Score +=10
    document.getElementsByClassName('box1')[2].innerHTML = Score;
}



bubblemain()
randomHit()


function play() {
    //console.log("play");
    bubblemain();
    randomHit();
    bubbleHit()
    box()
}