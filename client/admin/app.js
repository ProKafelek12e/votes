var json = []
async function getData(){
    const data = await fetch(`${baseurl}/table`)
    json = await data.json()
    console.log(json)
    createTable()
//©
}
function createTable(){
    for(var i=0;i<=json.length-1;i++){
        
    }
}
getData()
