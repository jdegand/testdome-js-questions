function appendChildren(decorateDivFunction){
  const allDivs = [...document.getElementsByTagName('div')];

  for(let i = 0; i < allDivs.length; i++){
    const newDiv = document.createElement('div');
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv)
  }
}
