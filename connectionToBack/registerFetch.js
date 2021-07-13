const registerFetch = async (username, email, password, req, res) => {

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

        await fetch("http://192.168.0.100:3000/create", data)
        
    } catch (error) {
        console.log(error)
    }

    

    }

export default registerFetch;