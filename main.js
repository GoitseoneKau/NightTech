//Goitseone Kau-JS for sliding images
   const sliders = document.querySelectorAll(".slide");
   const btnLeft = document.getElementById("left");
   const btnRight = document.getElementById("right");

   let activeSlide = 0;
//Function to slide images or set the acvtive image
   function setImageSlide(){
    sliders.forEach((slides)=>slides.classList.remove("active"));//get all related elements as a list/array and clear the active class
    sliders[activeSlide].classList.add("active");//get the specific element that needs to be shown from list and add active class
   }

    //Function to increase activeSlide and navigate to next image
   //untill it reaches last index and change activeSlide to first index, to transition to next first image
   function nextSlide(){
    activeSlide++;
    if(activeSlide>sliders.length-1){
        activeSlide=0;
    }
   }

   //Function to decrease activeSlide and navigate to previous image
   //untill it reaches first index and change activeSlide to last index, to transition to previous last image
   function prevSlide(){
    activeSlide--;
    if(activeSlide<0){
        activeSlide=sliders.length-1;
    }
   }

//add onclick event for the right button
//place nextSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
   btnRight.onclick = ()=>{
    nextSlide();
    setImageSlide();
   }

//add onclick event for the left button
//place prevSlide function-N.B must be before setImageSlide function to update the activeSlide vaariable for smooth transition
   btnLeft.onclick = ()=>{
    prevSlide();
    setImageSlide();
   }
