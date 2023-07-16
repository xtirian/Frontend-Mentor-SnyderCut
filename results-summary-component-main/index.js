const data_loc = "./data.json";

async function getData() {
  const response = await fetch(data_loc);
  const data = await response.json();

  //array

  let Reaction  = new Array(data[0].score, data[0].icon);
  let Memory = new Array(data[1].score, data[1].icon);;
  let Verbal = new Array(data[2].score, data[2].icon);
  let Visual = new Array(data[3].score, data[3].icon);

  //SUMARY TEXTS

  document.getElementById('ReacScore').textContent = Reaction[0]
  document.getElementById('MemScore').textContent = Memory[0]
  document.getElementById('VerbScore').textContent = Verbal[0]
  document.getElementById('VisScore').textContent = Visual[0]  

    //SUMARY ICONS 

    document.getElementById('recIcon').src = Reaction[1]
    document.getElementById('memIcon').src = Memory[1]
    document.getElementById('verbIcon').src = Verbal[1]
    document.getElementById('visIcon').src = Visual[1]  
}

getData();


async function getResult() {
 const response = await fetch(data_loc);
 const data = await response.json();

 let Score = 0;

 for ( let x = 0; x < data.length; x++) {


  Score+=data[x].score
 }

document.getElementById("resultScore").textContent = parseInt(Score/4)
}


getResult()