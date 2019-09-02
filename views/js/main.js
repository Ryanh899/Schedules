$('#displayUser').on('click', () => {
    $.get('http://localhost:3000/profile', (resp) => {
        let userID = resp[0].user_id; 
        console.log(userID)
        alert(`Welcome, your user ID is ${userID}`)
    })
})