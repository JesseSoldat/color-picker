//Change colors
function changeColor(c1, c2) {
  var color1 = document.getElementById(c1).value;
  var color2 = document.getElementById(c2).value;

  document.body.style.backgroundColor = color1;
  document.body.style.color = color2;
}
//Pick the date
function pickDate(date, time){
  var date = document.getElementById(date).value;
  var time = document.getElementById(time).value;
  console.log(date, time);
}
//Status Bar


function getStatus(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  
  status.innerHTML = al +'%';
  bar.value = al;
  al++
  var loader = setTimeout("getStatus("+al+")", 20);
  if(al == 100) {
    status.innerHTML = "100%";
    bar.value = 100;
    clearTimeout(loader);
    document.getElementById('finalMessage').innerHTML = "The file is ready";
  }
}
var amountLoaded = 0;
getStatus(amountLoaded);

//Number of boxes
var anchor = document.getElementById('anchor');

function pickNumber(number) {
  var num = document.getElementById(number).value;
  
  for (i = 1; i <= num; i++) {
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