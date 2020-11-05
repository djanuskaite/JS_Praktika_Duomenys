"use strict"

let duomenys ={
             "id": "0001",
             "type": "donut",
             "name": "Cake",
             "ppu": 0.55,
             "topping":
              [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" },
              ]
}

for (let pirmas in duomenys) { 
  //Patikrinami gaunamu duomenu tipai, kad butu aisku, ar reikia dar sukurti cikla.
  //ar pasiekiamos visos reiksmes.
  //console.log(typeof(duomenys[pirmas]));

  if(typeof duomenys[pirmas] !="object"){
    
    //tuo atveju jei duomenys NĖRA dar vienas objektas objekte.
    //galiu spausdinti savybe ir jos reiksme (properties&value).

    console.log(pirmas + " : "+ duomenys[pirmas]);
  }
  else {
    for (let antras of duomenys[pirmas]) {

      //patikrinam ar pasiekiamos visos reiksmes.
      // console.log(pirmas + " : " + antras);
      // console.log(duomenys[pirmas]);
      // console.log(antras);

      console.log(pirmas+" : ");
        for(let trecias in antras) {
          console.log(trecias+" "+antras[trecias]);
        }

    }
  }
}

