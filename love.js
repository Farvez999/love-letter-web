document.getElementById('yes').addEventListener('click', function () {
    // document.getElementById('msg').innerText = 'I LOVE YOU 💝'
    sentMsg('msg');
})

//Handler
function ofCourse() {
    // document.getElementById('msg').innerText = 'I LOVE YOU 💝 '
    sentMsg('msg');
}

//function
function sentMsg(msgId) {
    document.getElementById('msg').innerText = 'I LOVE YOU 💝 '
}