const opn = require('opn');
console.log("Started");
  function myFunction() {
    var x =  Math.floor(Math.random() * 10000000000);
    opn('https://www.bing.com/search?q='+ x +'&go=Search&qs=n&form=QBRE&sp=-1&pq=6&sc=8-1&sk=&cvid=F19FA4C7A31141928385C4DC1574C7BF');
    console.log("Your welcome, Support me please, Enjoy!");
  }
  var n = 0;
  function increment(){
    n++;
    return n;
  }
  for (var i = 0; i < 32; i++) {
      setTimeout(function() {
        increment();
        myFunction();
          console.log(n);
      }, 500 * i);
  }
