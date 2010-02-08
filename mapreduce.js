(function(){
var but = document.getElementById('reduce');
but.onclick = function(){
  var map = document.getElementById('map');
  var out = document.createElement('span');
  this.parentNode.appendChild(out);
  function mapreduce(){
    var x = map.offsetHeight;
    map.style.height = (x - 5) + 'px';
    map.style.width = (x - 5) + 'px';
    if(x < 300){
      clearInterval(s);
      out.appendChild(document.createTextNode('successfully reduced map!'));
      but.innerHTML = 'Reset';
      but.onclick = function(){
        window.location = 'mapreduce.html';
      };
    };
  };
  var s = window.setInterval(mapreduce,50);
};
})();
