const url = "https://api.adviceslip.com/advice"
const adviceNum = document.querySelector('#advice-no');
const advice = document.querySelector('#advice');


const generateAdvice = () => {
    fetch(url) 
    .then(response => response.json())
    .then(data => { 
        adviceNum.innerText = data.slip.id
        advice.innerText = data.slip.advice

        // return console.log(data.slip.id)
        
    })

}




