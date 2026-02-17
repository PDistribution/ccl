let menuToggle = document.getElementById("menuToggle")
let themeBtn = document.getElementById("themeBtn")
let Linkmenu = document.getElementById("Linkmenu")
let fon = document.getElementById("fon")


menuToggle.addEventListener("click", ()=>{
    Linkmenu.classList.toggle("active")
    fon.classList.toggle("active")
    

    if(Linkmenu.classList.contains("active")){
        menuToggle.textContent ="✖"
    }else{
        menuToggle.textContent ="☰"
    }
})

fon.addEventListener("click", ()=>{
    fon.classList.remove("active")
    Linkmenu.classList.remove("active")
})

if(themeBtn){
    themeBtn.onclick = function(){
        document.body.classList.toggle("dark")

        if(document.body.classList.contains("dark")){
            themeBtn.innerText ="Night"
        }else{
            themeBtn.innerText ="Day"
        }
    }
}

