

const btnEle = document.querySelector(".btn");
const resEle = document.querySelector(".result");
const legendEle =  document.querySelector("#legend");
const h2Ele = document.querySelector(".h2");




/* The Text Above My Button that changes when reached required click amount*/

let clickCount = 0;
btnEle.addEventListener("click", () => {
  clickCount++;
  resEle.innerHTML = "The button has been clicked " + clickCount + " times ";

  if (clickCount > 20) {
    h2Ele.innerHTML = "Click Faster!!";
    
    if (clickCount > 50) {
    h2Ele.innerHTML = "Lets Gooo!!";
        
    } else {
        
    }

    if (clickCount > 100) {
    h2Ele.innerHTML = "Your almost there!!";
        
    } else {
        
    }

    if (clickCount > 200) {
    h2Ele.innerHTML = "...";
      
    } else {
      
    }

    


}

/* Text inside button changing when reached required amount*/

if (clickCount > 200){
btnEle.innerHTML = "CONGRATS!";
}

/* The background color of the webpage that changes on required click amount*/
  
  if (clickCount > 20) {
    document.body.style.backgroundColor ='blue';

    if (clickCount > 30) {
    document.body.style.backgroundColor ='yellow';
    
        
    } else {
        
    }

    if (clickCount > 50) {
    document.body.style.backgroundColor ='green';
        
    } else {
        
    }

    if (clickCount > 100) {
    document.body.style.backgroundColor ='pink';
        
    } else {
        
    }

    /* The text under the button and the background image surprize*/

    if (clickCount > 200) {

      document.body.style.backgroundImage = "url('https://media.giphy.com/media/bKBM7H63PIykM/giphy.gif')";
      
    } else {
      
    }
    legendEle.style.color = '#000';
    if (clickCount > 200) {
     
    legendEle.innerHTML = "wow you did it.."
    document.getElementById("legend").style.color = "red";
    
    }
    
  }
});