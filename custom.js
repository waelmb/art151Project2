/*
var choices = document.getElementsByClassName('choice');

for(var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('mouseover', function(e) {
        var elements = document.getElementsByClassName('container');
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.animation = 'blinkAnimation 2s infinite'
        }
   })
   choices[i].addEventListener('mouseout', function(e) {
        var elements = document.getElementsByClassName('container');
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.animation = ''
        }
  })
}*/

var seconds = 13;

function countDown() {
    seconds -= 1;
    console.log(seconds)

    if(seconds < 3) {
        window.location.replace("outcome11.html");
    }
    else if(seconds < 10) {
        var elements = document.getElementsByClassName('container');
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.animation = ''
            elements[i].style.animation = 'blinkAnimation' + seconds + ' ' + seconds/10 + 's infinite'
        }
    }
}

setInterval(countDown, 1000);
