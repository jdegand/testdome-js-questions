function initialize() {
    const buttons = document.querySelectorAll("button");
    for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(){
        if(this.classList.contains('downButton')){

            // down button clicked next to this span
            const span = this.previousElementSibling;
            const spanTextContent = span.textContent;

            const below = this.parentNode.nextElementSibling;
          
            if(below){
              const spanToSwap = below.querySelector('span');
              const spanToSwapTextContent = spanToSwap.textContent;
              span.textContent = spanToSwapTextContent;
              spanToSwap.textContent = spanTextContent;
            } 
              
           
        } else { // upButton functionality here 
          
            // up button clicked next to this span
            let span = this.previousElementSibling;
            
            // have to change span for double button row
            if(span.classList.contains('downButton')){
              span = this.previousElementSibling.previousElementSibling;
            }
          
            let spanTextContent = span.textContent;

            const above = this.parentNode.previousElementSibling;
    
            if(above){
              const spanToSwap = above.querySelector('span');
              const spanToSwapTextContent = spanToSwap.textContent;
              span.textContent = spanToSwapTextContent;
              spanToSwap.textContent = spanTextContent;
            } 
        }   
      })
    }
  }

document.body.innerHTML = `
<div>
    <span>Read emails</span>
    <button class="downButton" type="button">&darr;</button>
</div>
<div>
    <span>Prepare presentation</span>
    <button class="downButton" type="button">&darr;</button>
    <button class="upButton" type="button">&uarr;</button></div>
<div>
    <span>Monthly report</span>
    <button class="upButton" type="button">&uarr;</button>
</div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);
