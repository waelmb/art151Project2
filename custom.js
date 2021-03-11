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
}