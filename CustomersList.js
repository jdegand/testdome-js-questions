function showCustomers(customers, targetList){
  for(let item of customers){
    let clicked = false;
    let childElement = document.createElement('li');
    let appendChildElement = targetList.appendChild(childElement);
    appendChildElement.innerHTML = `<p> ${item.name} </p>`;

    appendChildElement.addEventListener('click', ()=> {
      if(!clicked){
        appendChildElement.innerHTML = `<p>${item.name}</p>
                                        <p>${item.email}</p>`;
        clicked = true;
      } else {
        appendChildElement.innerHTML = `<p>${item.name}</p>`;
        clicked = false;
      }
    })
  }
}
