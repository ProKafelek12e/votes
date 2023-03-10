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
        div.setAttribute("onclick",`vote(${i})`)
        const h1 = document.createElement("h1")
        h1.innerHTML = "Kandydat nr. "+(i+1)+": "
        const p = document.createElement("P")
        p.innerHTML = json[i].imie +" "+json[i].nazwisko
        div.appendChild(h1)
        div.appendChild(p)
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
