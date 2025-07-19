let btn1 = document.querySelector("#btn1");

//btn1.onclick = (evt) => {
  //  console.log(evt);
    //console.log(evt.type);
    //console.log(evt.target);
   // console.log(evt.clientX, evt.clientY);
//};

btn1.addEventListener("click", (evt) => {
    console.log('button was clicked-handler1');
});

btn1.addEventListener("click", () => {
    console.log('button was clicked-handler2');
});

//let box = document.querySelector("div");
//dispatchEvent.onmouseover = () => {
    //console.log("you are inside div");
//};



const handler3 = () => {
    console.log("button1 was clicked-handler3");
};

btn1.addEventListener("click", () => {
    console.log('button was clicked-handler4');

});

btn1.removeEventListener("click", handler3);
    