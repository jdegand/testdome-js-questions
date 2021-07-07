function setup(){
    let upLink = Array.from(document.getElementsByTagName('button'))
    .filter(el => el.textContent === 'Up!');
    
    for(let i = 0; i < upLink.length; i++){
      upLink[i].addEventListener('click', function(){
        let wrapper = this.parentElement;
  
        if(wrapper.previousElementSibling){
          wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling)
        }
      })
    }
  
    let downLink = Array.from(document.getElementsByTagName('button'))
    .filter(el => el.textContent === 'Down!');;
  
    for(let i = 0; i < downLink.length; i++){
      downLink[i].addEventListener('click', function(){
        let wrapper = this.parentElement;
  
        if(wrapper.nextElementSibling){
          wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper) 
        }
      })
    }
  }
  
  // Example case
  document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;
  
  setup();
  document.getElementsByTagName('button')[2].click();
  
  console.log(document.body.innerHTML);



/*
//This solution relies on changing the HTML by adding classes of "up"/"down" on
//the appropriate buttons

function setup(){
  let upLink = document.querySelectorAll(".up");

  for(let i = 0; i < upLink.length; i++){
    upLink[i].addEventListener('click', function(){
      let wrapper = this.parentElement;

      if(wrapper.previousElementSibling){
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
*/
