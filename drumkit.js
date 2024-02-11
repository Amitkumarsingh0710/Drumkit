// let numberofDrums = document.querySelectorAll("button").length;
// for(let i=0 ; i < numberofDrums ; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("keypress",function()
//         {
//             console.log(this); // this here points to the element which button will tigger the function on applying event listener.
//             console.log(this.innerHTML);
//             console.log(this.style.color="white");
    
//         });
//     }
let numberofDrums = document.querySelectorAll("button");
for(drums of numberofDrums){
   drums.addEventListener("click",function()
    {
        // console.log(this); // this here points to the element which button will tigger the function on applying event listener.
        // console.log(this.innerHTML);
        //console.log(this.style.color="white");
        let innerhtml = this.innerHTML;
        makeSound(innerhtml);
        animationApperrance(innerhtml);
    });
}

       document.addEventListener( "keypress",function keyPressed(event){
             makeSound(event.value);
             animationApperrance(event.value);
       });
        function makeSound(key){
        switch(key)
        {
            case 'A' : var audio = new Audio("typical-trap-loop-140bpm-129880.mp3");
                        audio.play();
                        break;
            case 'B' : var audio = new Audio("bang-140381.mp3");
                        audio.play();
                        break;
            case 'C' : var audio = new Audio("bang-140381.mp3");
                       audio.play();
                        break;
            case 'D' : var audio = new Audio("epic-logo-6906.mp3");
                       audio.play();
                       break;
            case 'X' : var audio = new Audio("amen-break-no-copyright-remake-120bpm-25924.mp3");
                         audio.play();
                         break;
            case 'Z' : var audio = new Audio("bang-140381.mp3");
                        audio.play();
                         break; 
            default :  console.log("invalid drum is clicked");
                                
        }

    }
    function animationApperrance(press)
    {
        let btn = document.querySelector(`.${press}`);
        btn.classList.add("pressed");
    }

