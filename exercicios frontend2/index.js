const nome = document.getElementById("name")
const endereco = document.getElementById("endereco")
const abertura = document.getElementById("abertura")
const fechamento = document.getElementById("fechamento")
const submit = document.getElementById("submit")

const elementos = [nome, endereco, abertura, fechamento]

// parte 1

elementos.forEach((elemento)=>{
    elemento.addEventListener("blur",(e)=>{
        console.log(`${elemento.id}: ${e.target.value}`)
    })
})

submit.addEventListener("click",()=>{
    console.log("preparando envio...")
})

// parte 2
elementos.forEach((elemento)=>{
    elemento.addEventListener("blur",(e)=>{
        localStorage.setItem(`${elemento.id}`,`${e.target.value}`)
    })
})

elementos.forEach((elemento)=>{
    elemento.value = localStorage.getItem(`${elemento.id}`)
})

