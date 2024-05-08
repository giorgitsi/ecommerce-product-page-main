const imgs = document.querySelectorAll(".small-imgs-container img")
const bigImg = document.querySelector(".shoes-img")

imgs.forEach(img => {

    img.addEventListener("click", function (){

        const activeImg = document.querySelector(".img-active")
        activeImg.classList.remove("img-active")

        

        img.classList.add("img-active")

        // console.log(img.src)
        bigImg.src = img.src

    })

});









// ----------- plus minus logic - +  --------------
const btnMinus = document.querySelector(".btn-minus")
const btnPlus = document.querySelector(".btn-plus")
const plusMinusP = document.querySelector(".minus-plus-p")

let num = 0

btnMinus.addEventListener("click", () => {
    num -= 1
    plusMinusP.textContent = num 
})

btnPlus.addEventListener("click", () => {
    num += 1
    plusMinusP.textContent = num 
})


// -------------------- cart logic -----------------------
const delet = document.querySelector(".delete")
const contentBox = document.querySelector(".content-box")
const cartBox = document.querySelector(".cart-box")
const cartBtn = document.querySelector(".cart-btn")

cartBtn.addEventListener("click", () =>{
    
    cartBox.classList.toggle("cart-box-block")
    
})

delet.addEventListener("click", function (){
    contentBox.classList.add("deletContent")
    const p = document.createElement("p")
    p.textContent = "Your cart is empty."
    p.classList.add("empty-cart-text")
    cartBox.append(p)
})




const arr = [3, 2, 5, 6]
console.log(arr[arr.length - 1])

arr.forEach((num) => {
    if (num%2===0){
        console.log(num)
    }
});



