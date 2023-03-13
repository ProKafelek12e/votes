var glosyna = []
var jsonk = []
var json = []
var kandydaci = []
var char
var k = []
var d = []
//Pobiera całą tabelke glosujacy
async function getGlosy(){
    const data = await fetch(`${baseurl}/table`)
    json = await data.json()
    //console.log(json)

    countVotes()
//©
}
//pobiera tabelke kandydaci
async function getKandydaci(){
    const data = await fetch(`${baseurl}/kandydaci`)
    jsonk = await data.json()
    //console.log(jsonk)
}
//podlicza głosy
async function countVotes(){
    for(var o=0;o<=jsonk.length-1;o++){
        var votes=0
        var kandydat = jsonk[o].imie+" "+jsonk[o].nazwisko
        for(var i=0;i<=json.length-1;i++){
            if(json[i].kandydat==jsonk[o].imie+" "+jsonk[o].nazwisko){
                votes++
            }
        }
        kandydaci.push({kandydat:kandydat,  votes:votes})
    }
    for(var i = 0;i<=kandydaci.length-1;i++){
        k.push(kandydaci[i].kandydat)
        d.push(kandydaci[i].votes)
    }
    console.log(kandydaci)
    await getGlosyNa()
    await lider()

}
//sprawdza kto ma najwiencej głosów i ile
function lider(){
    var lider 
    var lv = 0 
    for(var i=0;i<=kandydaci.length-1;i++){
        if(lv<kandydaci[i].votes){
            lv = kandydaci[i].votes
            lider = kandydaci[i].kandydat
        }

    }
    document.getElementById("lider").innerHTML = "Lider: "+lider+" Votes: "+lv
    table(lv)
}
//tworzy tablice z peselami glosujacymi za danym kandydatem
async function getGlosyNa(){
    for(var i =0;i<=kandydaci.length-1;i++){
        const data= await fetch(`${baseurl}/glosy/${jsonk[i].imie}/${jsonk[i].nazwisko}`)
        const jsong = await data.json()
        glosyna.push({Kandydat:jsong})
    }
}
//tworzy tabelke
function table(lv){
    
    for(var f=0;f<=lv-1;f++){
        if(f==0){
            const tr = document.createElement("tr")
            for(var i=0;i<=kandydaci.length-1;i++){
                const th = document.createElement("th")
                th.innerHTML = kandydaci[i].kandydat
                tr.appendChild(th)
            }
            document.getElementById("table").appendChild(tr)
        }   
            const tr1 = document.createElement("tr")
            for(var i=0;i<=kandydaci.length-1;i++){
                
                var kandydat = glosyna[i]
                var pesel = kandydat.Kandydat.pesele[f]
                
                const td = document.createElement("td")
                
                if(pesel == undefined)  td.innerHTML=""
                else if(pesel != undefined) td.innerHTML = kandydat.Kandydat.pesele[f].pesel
                tr1.appendChild(td)
            }
            document.getElementById("table").appendChild(tr1)
        }
        if(char !=undefined){
            dCharte()
        }
        Charte()
    }
    
    getKandydaci()
    getGlosy()
    function Charte(){
        const ctx = document.getElementById('myChart');
    char = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: k,
        datasets: [{
          label: 'Votes',
          data: d,
          /*backgroundColor: [
            'green',
            'red',],*/
          borderColor: [
            'black',
            'black'],
          borderWidth: 2
        }]
      },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Votes',
                    color:"black"
                },
                tooltip:{
                    enabled:false
                },
                label:{
                    color:"black"
                }
            }
        }
    });
    
    }
    function dCharte(){
        char.destroy()
    }





