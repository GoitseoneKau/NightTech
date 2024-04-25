
   const sliders = document.querySelectorAll(".slide");
   const btnLeft = document.getElementById("left");
   const btnRight = document.getElementById("right");

   let activeSlide = 0;

   function setImageSlide(){
    sliders.forEach((slides)=>slides.classList.remove("active"));
    sliders[activeSlide].classList.add("active");
   }

   function nextSlide(){
    activeSlide++;
    if(activeSlide>sliders.length-1){
        activeSlide=0;
    }
   }

   function prevSlide(){
    activeSlide--;
    if(activeSlide<0){
        activeSlide=sliders.length-1;
    }
   }

   btnRight.onclick = ()=>{
    nextSlide();
    setImageSlide();
   }

   btnLeft.onclick = ()=>{
    prevSlide();
    setImageSlide();
   }
