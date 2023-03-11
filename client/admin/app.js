var jsonk = []
var json = []
var kandydaci = []
async function getGlosy(){
    const data = await fetch(`${baseurl}/table`)
    json = await data.json()
    console.log(json)
    createTable()
//©
}
async function getKandydaci(){
    const data = await fetch(`${baseurl}/kandydaci`)
    jsonk = await data.json()
    console.log(jsonk)
}
function createTable(){
    for(var o=0;o<=jsonk.length-1;o++){
        var votes=0
        var kandydat = jsonk[o].imie+" "+jsonk[o].nazwisko
        for(var i=0;i<=json.length-1;i++){
            if(json[i].kandydat==jsonk[o].imie+" "+jsonk[o].nazwisko){
                console.log(json[i].kandydat)
                votes++
            }
        }
        kandydaci.push({kandydat:kandydat,  votes:votes})
    }
    console.log(kandydaci)
    lider()
}

function lider(){
    var lider 
    var lv = 0 
    for(var i=0;i<=kandydaci.length-1;i++){
        if(lv<kandydaci[i].votes){
            console.log("kandydat")
            lv = kandydaci[i].votes
            lider = kandydaci[i].kandydat
        }

    }
    document.getElementById("lider").innerHTML = "Lider: "+lider+" Votes: "+lv
    table(lv)
}

function table(lv){
    
    for(var f=0;f<=lv;f++){
        console.log("for")
        if(f==0){
            const tr = document.createElement("tr")
            for(var i=0;i<=kandydaci.length-1;i++){
                const th = document.createElement("th")
                th.innerHTML = kandydaci[i].kandydat
                tr.appendChild(th)
            }
            document.getElementById("table").appendChild(tr)
        }
    }
}
getKandydaci()
getGlosy()