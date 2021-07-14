const registerFetch = async (username, email, password) => {

    try {

        const body = {
            username: username,
            email: email,
            password: password
        }

        const data = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
         }

        await fetch("http://186.185.175.10:3000/create", data)
        // .then(response => response.json())
        // .then(newResponse => {
        //     console.log(newResponse)
        // })

    } catch (error) {
        console.log('Soy el error del fetch' + '\n' + error)
    }

    

    }

export default registerFetch;