
/*
$(document).ready(function() {
    // Function to open the chatbot in a new window
    function openChatBot() {
        window.open('https://web.powerva.microsoft.com/environments/Default-e048df73-e503-47f4-8ec1-d8bc54b773a5/bots/cr27d_plutoBot/webchat?__version__=2', 'ChatBot', 'width=400,height=600');
    }

    // Show the chatbot when the button is clicked
    $("#openChat").click(function() {
        openChatBot();
    });
});
*/

$(document).ready(function() {
    // Function to open the chatbot in the middle of a 1920x1080 monitor
    function openChatBot() {
        const width = 400; // Width of the chatbot window
        const height = 600; // Height of the chatbot window

        const left = (screen.width - width) / 2;
        const top = (screen.height - 1070);

        const features = `width=${width},height=${height},left=${left},top=${top}`;

        window.open('https://web.powerva.microsoft.com/environments/Default-e048df73-e503-47f4-8ec1-d8bc54b773a5/bots/cr27d_plutoBot/webchat?__version__=2', 'ChatBot', features);
    }

    // Show the chatbot when the button is clicked
    $("#openChat").click(function() {
        openChatBot();
    });
});
