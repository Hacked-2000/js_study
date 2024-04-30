const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Pls Enter a Valid Height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Pls Enter a Valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);
        // show result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});