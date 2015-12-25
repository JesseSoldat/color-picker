function changeColor(c1, c2) {
  var color1 = document.getElementById(c1).value;
  var color2 = document.getElementById(c2).value;

  console.log(color1, color2);

  document.body.style.backgroundColor = color1;
  document.body.style.color = color2;

}
var anchor = document.getElementById('anchor');

function pickNumber(number) {
  var num = document.getElementById(number).value;
  
  for (i = 1; i <= num; i++) {
    console.log(i);
    var box = document.createElement('div');
    var text = document.createTextNode('This is box ' + i);
    box.appendChild(text);
    anchor.appendChild(box);

    if (i % 2) {
      box.classList.add("odd");
    } else {
      box.classList.add("even");
    }

  }
} 