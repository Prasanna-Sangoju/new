const testimonials = [
    {
       name: "Natasha Romanoff",
       photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       text : "I have been a loyal customer of Apple for years and their mobile products are truly reliable. The sleek design and cutting-edge technology are unmatched. I highly recommend Apple to anyone in need of a quality mobile device."
    },
    {
       name: "Black Panther",
       photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
       text : "Everyone’s on the same page. Many of our people are not very organized naturally, so Vivo is a godsend!"
    },

    {
       name: "Tom Cruise",
       photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
       text : "I highly recommend Samsung. It has been so important for us as we continue to grow our company."
    },

];

const imgE1 = document.querySelector("img");
const textE1 =  document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} = 
    testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
       updateTestimonial()
    }, 10000)

}