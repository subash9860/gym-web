function navigationToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const error = document.querySelector('#error');
  if ((height === '') || (height < 0) || (isNaN(height))) {
    //NaN !== NaN
    error.innerHTML = "Please provide a valid height";

  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    error.innerHTML = "Please provide a valid weight";
  } else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
  }
});