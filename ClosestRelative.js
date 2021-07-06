function closestRelative(parent, relativeName) {
  const children = [...parent.childNodes]; 
  let c;
  
  while(children.length) {
    c = children.shift();
    if(c.tagName === relativeName.toUpperCase()) return c;
    
    for(const child of c.childNodes){
      children.push(child);
    }
  }
    return null;
}

// Example case
document.body.innerHTML = 
'<James>' +
  '<Dave></Dave>' +
  '<Mike></Mike>' +
  '<Sarah></Sarah>' +
'</James>';

let parent = document.getElementsByTagName('James')[0];
let relative = closestRelative(parent, 'Mike');
console.log(relative && relative.tagName); // prints MIKE
