
window.addEventListener('load', function () {
  this.setTimeout(function(){
  document.getElementById('logo')?.style.setProperty('display', 'none');
  document.getElementById('loader-text')?.style.setProperty('display', 'none');
  document.getElementById('loader')?.style.setProperty('display', 'none');
  document.getElementById('content')?.style.setProperty('display', 'block');
  },2500);  
});
