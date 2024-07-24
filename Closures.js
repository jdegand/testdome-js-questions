function registerHandlers(){
  const as = document.getElementsByTagName('a');
  for(let i = 0;  i < as.length; i++){
    as[i].onclick = function(){
      alert(i);
      return false;
    }
  }
}
