const sideIconBtn=document.querySelector(".side-icon-btn");
const hideDiv=document.querySelector(".side-icon-details");
const sideIconImg=document.querySelector(".side-icon-img");
const topSection=document.getElementById(".top-section");

sideIconBtn.addEventListener("click",()=>{
    if(hideDiv.style.display==="none"){
        hideDiv.style.display="block";
        sideIconImg.src="images/close-img.jpg";
        hideDiv.style.position="relative";
        hideDiv.style.height="100vh";
        topSection.style.display="none";
        top
    }else{
        hideDiv.style.display="none";
        sideIconImg.src="images/side-icon.jpg";
        topSection.style.display="block";
    }
    
})