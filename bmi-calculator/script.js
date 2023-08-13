const setClassification = (BMI) => {

 if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    return "Healthly Weight";
  } else if(BMI >= 25 && BMI < 30) {
    return "OverWeight";
  } else if (BMI >= 30 && BMI < 35) {
    return "Obesity 1st Class";
  } else if (BMI >= 35 && BMI < 40) {
    return "Obesity 2st Class";
  } else if (BMI >= 40) {
    return "Extreme Obesity 3st Class";
  }
};

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

const showResult = (result, weightRange, classification) => {
  let welcome = document.getElementById("welcome");
  let resultMessage = document.getElementById("result-message");

  //Here change the message from welcome to the result
  if(result !== 0){
   if(result != Infinity){
   welcome.classList.add("hide-form-info");
   resultMessage.classList.remove("hide-form-info");
  } else if( result === 0){
   welcome.classList.remove("hide-form-info");
   resultMessage.classList.add("hide-form-info");}
  }

  //Set result and classification message
  let resultBMI = document.getElementById("result");
  let resltClassification = document.getElementById("result-classification");
  let resultWeightRange = document.getElementById("result-range");

  resultBMI.innerText = result
  resltClassification.innerText = classification
  resultWeightRange.innerText = weightRange

};

function calcBMI(flag) {
  let mt = Number(document.getElementById(`meter`).value);

  let kg = Number(document.getElementById(`kilo`).value);

  let ft = Number(document.getElementById(`feet`).value);
  let inc = Number(document.getElementById(`inc`).value);

  let st = Number(document.getElementById(`st`).value);
  let lbs = Number(document.getElementById(`lbs`).value);

  let result;
  let idealWeight;

  if (flag === "metric") {
    result = kg / ((mt / 100) ** 2);

    idealWeight = `${Number(18.5 * ((mt/100)**2)).toFixed(1)}kgs - ${Number(24.9 * ((mt/100)**2)).toFixed(1)}kgs`;

    

  } else if (flag === "imperial") {
    let impHeight = (ft * 12) + inc;
    let impWeight = lbs + (st * 14);

    result = 703 * (impWeight / impHeight ** 2);

   //first get st and lb and the continue the calc
    idealWeight = `${Math.floor(((((impHeight)**2)/703)*18.5)/14)}st ${Math.floor(((((((impHeight)**2)/703)*18.5)/14) - Math.floor(((((impHeight)**2)/703)*18.5)/14))*14)}lbs - ${Math.floor(((((impHeight)**2)/703)*24.9)/14)}st ${Math.floor(((((((impHeight)**2)/703)*24.9)/14) - Math.floor(((((impHeight)**2)/703)*24.9)/14))*14)}lbs`;
  }   

  return {BMI: isNaN(result) ? 0 : result.toFixed(1),
   rangeResult: idealWeight,
  };
}

function setForm() {
  const chooseForm = Array.from(document.getElementsByName("set-calc"));
  let formFlag;

  for (let x = 0; x < chooseForm.length; x++) {
    if (chooseForm[x].checked === true) {
      formFlag = chooseForm[x].value;
    }
  }

  showForm(formFlag);

  let BMI = calcBMI(formFlag).BMI;
  let idealWeight = calcBMI(formFlag).rangeResult
  let classification = setClassification(BMI);

  showResult(BMI,idealWeight,classification)
}

addEventListener("input", setForm);
addEventListener("load", setForm);
