let out = document.getElementById("out")
let valuttaInn = "DKK"
let valuttaUt = "NOK"


function konverter(){
    fetch ("https://v6.exchangerate-api.com/v6/9908ce7a58dfc49dfa84da97/latest/"+valuttaInn)
    .then(respons =>{
        out.textContent = respons.status
        return respons.json()
     })
    .then(data=>{
        let amount = parseInt(document.getElementById("amount").value)
        let text = amount+" "+valuttaInn+" = "
        let conversion = data.conversion_rates[valuttaUt]
        text += (conversion*amount) + valuttaUt
        out.textContent = text
    })

}

let output = document.getElementById('output');
function selectionOption(){
    let dropdown = document.getElementById('dropdown');
    let selectedIndex = dropdown.selectedIndex;
    let selectedValue = dropdown.options[selectedIndex].text;
    output.innerHTML = "the selected value is " + selectedValue;
}