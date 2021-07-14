const registerFetch = (username, email, password) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };

  const data = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  fetch('http://192.168.43.138:3000/create', data)
    .then((cat) => console.log(cat.json()))
    .then((dog) => console.log(dog))
    .catch((err) => console.error('soy el error de fetch' + '\n' + err));
};

export default registerFetch;
