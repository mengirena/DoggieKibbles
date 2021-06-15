const cardClick = Array.from(document.querySelectorAll(".card"))
const planClick = document.querySelector(".plan")
const cardPrice = Array.from(document.querySelectorAll(".card p em"))
const purchase = Array.from(document.querySelectorAll("button"))
let newPrice = [], currentPrice = []

cardClick.forEach(card => card.addEventListener("click", enlargeTheClicked))
cardClick.forEach(card => card.addEventListener("mouseleave", removeEnlarge))
planClick.addEventListener("click", rotatePlan)

cardPrice.forEach((ele, index)=>{
    currentPrice[index] = Number(ele.innerHTML.match(/\d+.\d+/)[0])
    newPrice[index] = Math.floor(currentPrice[index]*12*0.8*100)/100
})

function enlargeTheClicked(){
    let cards = ['eco', 'classic', 'lux']
    cards.forEach(card=>{
        if (card == this.id){
            this.classList.toggle("emphasis")
            
        }else{
            document.querySelector(`#${card}`).classList.toggle("defocus")
        }
    })
    cardPrice.forEach(ele =>{
        if (ele.style.color != "rgb(255, 102, 170)") {
            ele.style.color = "#ff66aa"
        } else {
            ele.style.color = "rgb(13, 13, 68)"
        }
    })
}

function removeEnlarge(){
    let cards = ['eco', 'classic', 'lux']
    cards.forEach(card=>{
        if (card == this.id){
            this.classList.remove("emphasis")
        }else{
            document.querySelector(`#${card}`).classList.remove("defocus")
        }
    })
    cardPrice.forEach(ele =>{
        ele.style.color = "rgb(13, 13, 68)"
    })
}

function rotatePlan(){
    if(this.firstElementChild.style.transform === ""){
        this.firstElementChild.style.transform = "rotateY(-180deg)"
        cardPrice.forEach((ele, index)=>{
            ele.innerHTML = `$${newPrice[index]}/year`
        })
    }else{
        this.firstElementChild.style.transform = ""
        cardPrice.forEach((ele,index)=>{
            ele.innerHTML = `$${currentPrice[index]}/month`
        })
    }
}
