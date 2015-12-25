function changeColor(c1, c2) {
  var color1 = document.getElementById(c1).value;
  var color2 = document.getElementById(c2).value;

  console.log(color1, color2);

  document.body.style.backgroundColor = color1;
  document.body.style.color = color2;

}