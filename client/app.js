var json =[]
async function getKandydaci(){
    const data = await fetch(`${baseurl}/kandydaci`)
    json = await data.json()
    await createKandydaci()
}
//©
function createKandydaci(){
    document.getElementById("kandydaci").innerHTML = ""
    for(var i=0;i<=json.length-1;i++){
        const div = document.createElement("div")
        div.classList.add("kand")
        div.setAttribute("onclick",`vote(${i})`)
        const bg = document.createElement("div")
        bg.classList.add("bg")
        const img = document.createElement("img")
        img.src = "contacts-64.png"
        
        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].imie +" "+json[i].nazwisko
        bg.appendChild(img)
        div.appendChild(bg)
        div.appendChild(h1)
        document.getElementById("kandydaci").appendChild(div)
    }
}
async function vote(i){
    const imie = json[i].imie
    const nazwisko = json[i].nazwisko
    const Pesel = document.getElementById("inpPesel").value
    if(Pesel=="") alert("Podaj pesel")

    else {
        await fetch(`${baseurl}/vote/${imie}/${nazwisko}/${Pesel}`)
    }
}
getKandydaci()
var l = 0
function login(){
    if(l==0){
        
        const div = document.createElement("div")
        const username = document.createElement("input")
        const password = document.createElement("input")
        
        username.id = "username"
        password.id = "password"
        div.id = "dive"
        password.type="password"

        username.placeholder = "Login"
        password.placeholder = "Password"
        
        document.getElementById("login").style.width = "195px"
        
        const button = document.createElement("button")
        
        button.setAttribute("onclick","Check()")
        button.innerHTML = "Login"
        
        setTimeout(function(){
            div.appendChild(username)
            div.appendChild(password)
            div.appendChild(button)
        },270)
        document.getElementById("login").appendChild(div)
        l=1
    }
    else{
        document.getElementById("dive").remove()
        document.getElementById("login").style.width = "64px"
        l=0
    }
}
function Check(){
    const login = document.getElementById("username").value
    const pass =document.getElementById("password").value
    if(login == "admin"&&pass=="admin") window.location.href = "admin/index.html"
}