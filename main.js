
let xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    let message= JSON.parse( this.responseText);


    document.getElementById('advice-paragraph').innerHTML= message.slip.advice;
    document.getElementById('id-number').innerHTML= message.slip.id;  
}



function giveAdvice() {

    const message = document.getElementById('advice-paragraph');
    const id = document.getElementById('id-number');
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (xhttp.status = 200) {
            const resp= JSON.parse(this.responseText);
            message.innerHTML= `"${resp.slip.advice}"`
            id.innerHTML= resp.slip.id; 
        }    
    }
    xhttp.onerror = function() {
        message.innerHTML= `Advice failed to Load. Check your internet connection`
    }
    xhttp.open('GET', 'https://api.adviceslip.com/advice');
    xhttp.send();
}

giveAdvice()