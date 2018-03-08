window.onload = function(){
  setTimeout("switchImage()", 300);
}
var current = 1;
var num_image = 4;
function switchImage(){
  current++;
  document.images['anh'].src ='anhtrangchu' + current + '.jpg';
  if(current < num_image){
    setTimeout("switchImage()", 2000);
  }
  if(current == num_image){
    current=1;
    setTimeout("switchImage()", 2000);
  }
}
