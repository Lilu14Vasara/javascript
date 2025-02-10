const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const heightInput = document.querySelector('#height').value.trim();
    const weightInput = document.querySelector('#weight').value.trim();
    const result = document.querySelector('#result');

    // Convert inputs to numbers
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    // Validation for height
    if (heightInput === '' || isNaN(height) || height <= 0) {
        result.innerHTML = `Please provide a valid height ${height}.`;
        return; // Exit the function if height is invalid
    }
    
    // Validation for weight
    if (weightInput === '' || isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please provide a valid weight ${weight}.`;
        return; // Exit the function if weight is invalid
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span> ${bmi} </span>`;
    }
    
    // Calculate BMI
    // const heightInMeters = height / 100;
    // const bmi = weight / (heightInMeters * heightInMeters);
    
    // // Determine BMI category
    // let bmiCategory = '';
    // if (bmi < 18.6) {
    //     bmiCategory = 'Underweight';
    // } else if (bmi >= 18.6 && bmi <= 24.9) {
    //     bmiCategory = 'Normal weight';
    // } else {
    //     bmiCategory = 'Overweight';
    // }
    
    // // Display result
    // result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
});
