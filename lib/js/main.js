const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    value = {
        NAME: username,
        Message: message
    }
    database.push(value);
    //Update database here

    
}

// Set database "child_added" event listener here
database.on('child_added', addMessage);

const msgContainer = document.querySelector('.allMessages');

function addMessage(data){
    const row = data.val();
    const name = row.NAME;
    const message = row.Message;

    const p = document.createElement('p');
    //<p>name: message</p>
    p.innerText =`${name}: ${message}`
    msgContainer.append(p);
}

