//This solution relies on changing the HTML by adding classes of "up"/"down" on
//the appropriate buttons

function setup(){
  let upLink = document.querySelectorAll(".up");

  for(let i = 0; i < upLink.length; i++){
    upLink[i].addEventListener('click', function(){
      let wrapper = this.parentElement;

      if(wrapper.previewElementSibling){
        wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling)
      }
    })
  }

  let downLink = document.querySelectorAll(".down");

  for(let i = 0; i < downLink.length; i++){
    downLink[i].addEventListener('click', function(){
      let wrapper = this.parentElement;

      if(wrapper.nextElementSibling){
        wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper)
      }
    })
  }
}
