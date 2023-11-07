function z1(){
    var i = 0;
    j = 0;
  // Желаемое количество строк
  var a = Array();
  var max = 10;
    star = "";
  while (i < max) {
    star = "";
    for (j = 0; j < i + 1; j++) star += "*";

    document.write(star+'<br>');
    a[i] = (star);
    i++;
  }
  document.write('<br>')
  document.write(a);
}

function z2(){
var n = ;
var a = Array();
for(var i=1;i<10;i++){
    for(var j =1;j<i+1;j++) {
        document.write(i);
        a[i-1] += i;
    }
    document.write('<br>');
    
}
document.write(a);


}