//posting data to the server
import { validateUrl } from "./urlValidation";

async function postData(userInput){
    const response = await fetch("http://localhost:8081", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: userInput})
    });
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('url').value
    if(Client.validateUrl(userInput)) {
        postData(userInput)
        .then(response => {
            document.querySelector("#results").innerHTML = `
            Score Tag: ${response.score_tag}<br></br>
            Agreement: ${response.agreement}<br></br>
            Confidence: ${response.confidence}<br></br>
            Irony: ${response.irony}<br></br>
            `
        })
    }
}



export { handleSubmit }
