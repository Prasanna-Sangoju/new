/*const imageContainerE1 = document.querySelector(".image-container");

const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", () => {
     imageNum = 10;
    addNewImages(
        imageContainerE1.appendChild(newimgE1)
    );
    
});

function addNewImages(){
for (let index = 0; index < array.imageNum; index++) {
    const newimgE1 = document.createElement("img");
    newimgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    
    
}
}*/

const imageContainerE1 = document.querySelector(".image-container");

const btnE1 = document.querySelector(".btn");

let imageNum = 0;

btnE1.addEventListener("click", () => {
    imageNum = 10;
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newimgE1 = document.createElement("img");
        newimgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerE1.appendChild(newimgE1);
    }
}


