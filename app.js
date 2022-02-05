const wrapper = document.querySelector(".sliderwrapper");

const menuItems = document.querySelectorAll(".menuItems")

// for products 

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 20000,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Jordan",
      price: 25000,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Hippie",
      price:  30000,
      colors: [
        {
            code: "gray",
            img: "./img/hippie.png",
          },
          {
            code: "black",
            img: "./img/hippie2.png",
          },
      ],
    },
    {
      id: 4,
      title: "Blazer",
      price: 30500,
      colors: [
        {
            code: "lightgray",
            img: "./img/blazer.png",
          },
          {
            code: "green",
            img: "./img/blazer2.png",
          },
        
      ],
    },
    {
      id: 5,
      title: "Crater",
      price: 45000,
      colors: [
        {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          }, 
        
      ],
    },
  ];



let chosenProduct = products[0]

const currentproductImg = document.querySelector(".productimg")
const currentproductTitle = document.querySelector(".productTitle")
const currentproductPrice = document.querySelector(".productprice")
const currentproductColors= document.querySelectorAll(".color")
const currentproductSizes= document.querySelectorAll(".size")

menuItems.forEach((item, index)=> {
    item.addEventListener("click", () => {

        // change current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      // change the chosen product 

      chosenProduct = products[index];

      // change texts of current product

      currentproductTitle.textContent =  chosenProduct.title;
      currentproductPrice.textContent = "N" + chosenProduct.price;
      currentproductImg.src = chosenProduct.colors[0].img;
      
      //assaigning colors to product
      currentproductColors.forEach((color, index) => { 
      color.style.backgroundColor = chosenProduct.colors[index].code;
      });


    });
});


// to change the colors of the shoews when u click the buttons 
currentproductColors.forEach((color, index) => {
  color.addEventListener("click", ()=>{
    currentproductImg.src =  chosenProduct.colors[index].img;
  });
});

// for choosing sizes
currentproductSizes.forEach((size, index) =>{
  size.addEventListener("click", ()=> {

    // for making it choose one size at at time
    currentproductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black"
    });
size.style.backgroundColor="black"
size.style.color = "white"
  });
});


// to open and close the payment option 
const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click", () => {
  payment.style.display="flex"
})

close.addEventListener("click", () => {
  payment.style.display="none"
})