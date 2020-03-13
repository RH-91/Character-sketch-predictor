// Declaring variables
let input = document.getElementById('name');
let output = document.getElementById('output');
let queryParams = ['rel_jjb=man', 'rel_jjb=human', 'rel_jjb=child'];
let url = 'https://api.datamuse.com/words?';

//Response Interpreter
const interpretResponse = (res) => {
    //Handling Errors   
    if (!res) { console.log(res.status); }
    if (!res.length) { output = '<p class="lead">Please try again, no response was generated.</p>' }
    //Main
    let adjectivesList = [];
    let randomNum = Math.floor(Math.random() * 51);
    for (let i = 0; i < 100; i++) {
        adjectivesList.push(res[randomNum].word);
    }
    output.innerHTML= `Are you ${adjectivesList[randomNum]} ${input.value}?`
}



//Function for request 
async function getAdjectives() {
    let randomNum = Math.floor(Math.random() * 3);
    const endpoint = `${url}${queryParams[randomNum]}`;
    try {
        const response = await fetch(endpoint,{cache: 'no-cache'});
        if (response.ok) {
            const jsonResponse = await response.json();
            interpretResponse(jsonResponse);
        }
        else{throw new Error('Oops! Try again')}
    }
    catch (error) { console.log(error); }
}