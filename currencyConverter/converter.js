let options = document.querySelectorAll("select");
let fromvaluesel = document.getElementById("from");
let tovaluesel = document.getElementById("to");
let finalamount = document.getElementById("finalval")
let amount = document.getElementById("amount");

for (select of options) {
  for (codes in countryList) {
    let option = document.createElement("option");
    option.innerText = codes;
    option.value = codes;
    if (select.name === "From" && codes === "USD") {
        option.selected = "selected";
      } else if (select.name === "To" && codes === "INR") {
        option.selected = "selected";
      }
    select.append(option);
    
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  })
}

function updateFlag(code){
    let countrycode = countryList[code.value];
    let image = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = code.parentElement.querySelector("img");
    img.src =image;
}

const btn = document.getElementById("convertbtn");

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    calculateex();
  });

calculateex = async () => {
    let rate = await getrate();
    let amtVal = amount.value;
    let result = amtVal * rate;
    finalamount.innerHTML = `${amtVal} ${fromvaluesel.value} to ${tovaluesel.value} = ${result}`;    
}

const getrate = async () =>{
    let baseurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    let url = `${baseurl}/${fromvaluesel.value.toLowerCase()}/${tovaluesel.value.toLowerCase()}.json`
    let response = await fetch(url);
    rate = await response.json();
    return rate[tovaluesel.value.toLowerCase()];
}