$('#displayUser').on('click', () => {
    $.get('http://localhost:3000/profile', (resp) => {
        let userID = resp[0].user_id; 
        console.log(userID)
        alert(`Welcome, your user ID is ${userID}`)
    })
})

$('#logout').on('click', () => {
    console.log('logged out')
    $.get('http://localhost:3000/auth/logout', (req, res) => {
        alert('logged out')
    })
})

+function fadeInUser () {
    $.get('http://localhost:3000/profile', (resp) => {
        let userID = resp[0].user_id; 
        $('#username').text(`${userID}`)
    })
}(); 