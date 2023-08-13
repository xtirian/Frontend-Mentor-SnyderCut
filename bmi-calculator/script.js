const setClassification = (BMI) => {
 if(BMI < 18.5){
  return {"Underweight"}
 } else if (18.5 >= BMI < 25) {
  return "Healthly Weight"
 } else if (25 >= BMI < 30){
  return "Healthly Weight"
 } else if (30 >= BMI < 35){
  return "Obesity 1st Class"
 } else if (35 >= BMI < 40){
  return "Obesity 2st Class"
 } else if (40 >= BMI){
  return "Extreme Obesity 3st Class"
 }

}



const showForm = (flag) => {
  let metricForm = document.getElementById(`metric-form`);

  let imperialForm = document.getElementById(`imperial-form`);

  if (flag === "metric") {
    metricForm.classList.remove("hide-form-info");
    imperialForm.classList.add("hide-form-info");
  } else if (flag === "imperial") {
    metricForm.classList.add("hide-form-info");
    imperialForm.classList.remove("hide-form-info");
  }
};

const showResult = (result, classification) => {
 let welcome = document.getElementById('welcome');
 let resultMessage = document.getElementById('result-message');



}



function calcBMI(flag) {
  let mt = Number(document.getElementById(`meter`).value);  

  let kg = Number(document.getElementById(`kilo`).value);

  let ft = Number(document.getElementById(`feet`).value);
  let inc = Number(document.getElementById(`inc`).value);

  let st = Number(document.getElementById(`st`).value);
  let lbs = Number(document.getElementById(`lbs`).value);

  let result;

  if (flag === "metric") {
    result = kg / (mt / 100) ** 2;
  } else if (flag === "imperial") {
    let impHeight = (ft * 12) + inc;
    let impWeight = lbs + (st * 14);    

    result = 0 + (703 * (impWeight / impHeight ** 2));

  }

  return isNaN(result) ? 0 : result.toFixed(2)
}

function setForm() {
  const chooseForm = Array.from(document.getElementsByName("set-calc"));
  let formFlag;

  for (let x = 0; x < chooseForm.length; x++) {
    if (chooseForm[x].checked === true) {
      formFlag = chooseForm[x].value;
    }
  }

  showForm(formFlag)

  let BMI = calcBMI(formFlag);
  let classification = setClassification(BMI)
 
}



 
  



addEventListener("input", setForm);
addEventListener("load", setForm);
