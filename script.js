// remove '//' to remove the chat messages
//localStorage.removeItem('messages');
//document.getElementById('chatBox').innerHTML = '';
function clearChat() {
    if (confirm("Are you sure you want to clear the chat?")) {
        localStorage.removeItem('messages'); // Remove messages from localStorage
        messages.length = 0; // Clear the messages array
        renderMessages(); // Re-render the chat box
    }
}
