function setup(){
  let items = document.querySelectorAll('.remove')

  items.forEach(item => {
    item.addEventListener('click', function(){
      item.parentElement.remove()
    })
  })
    return items;
}
