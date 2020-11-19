function appendChildren(decorateDivFunction){
  var allDivs = [...document.getElementsByTagName('div')];

  for(let i = 0; i < allDivs.length; i++){
    var newDiv = document.createElement('div');
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv)
  }
}
