function onloadSetUp(){
    //sendData2();
    setUpKeyBoard();
    mouseOverPlayButton();
}
function setUpKeyBoard(){
    var body = document.body;
    body.addEventListener("keydown",function(e){
    var isInput = ~["TEXTAREA", "INPUT"].indexOf(e.target.tagName);
    if(e.key === " " && !isInput){
        document.getElementById("playButton").focus();
        location.href = '/Gen0';
    }
    });
}
function mouseOverPlayButton(){
    var button = document.getElementById('playButton');
    button.mouseIsOver = false;
    button.onmouseover = function(){
        this.mouseIsOver = true;
        setTimeout(function(){
            let isMouseOver = document.getElementById('playButton').mouseIsOver;
            if(isMouseOver == true){
                document.getElementById('playTip').style.display = 'block';
            }
        }, 500);
    }
    button.onmouseout = function(){
        this.mouseIsOver = false;
        document.getElementById('playTip').style.display = 'none';
    }
}
async function getJSON(){
    const response = await fetch("/Package.json");
    response.ok;
    response.status;
    const text = await response.text();
    return text;
}

function sendData2(){
    fetch('/api/data')
        .then(response => response.json())
        .then(data => writeData(data));
}
function writeData(data2){
    console.log(data2);
}