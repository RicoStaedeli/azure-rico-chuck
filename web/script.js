async function getSentiment(event, text) {
    if (!text || event.key !== "Enter") {
        answer.innerHTML = '';
        return;
    }
    answerPart.style.visibility = "visible";
    // Get Sentiment
    await fetch("https://api.chucknorris.io/jokes/random").then(
        response => {
            console.log(response)
            response.json().then(function (text) {
                answer.innerHTML = text.value;
            });
        }
    ).then(
        success => console.log(success)
    ).catch(
        error => console.log(error)
    );
}
