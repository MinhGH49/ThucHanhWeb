function changeColor(background, text) {
   document.body.style.background = background;
   document.body.style.color = text;
}

window.addEventListener("load",function() { changeColor('pink', 'blue') });
