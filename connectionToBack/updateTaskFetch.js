import { setRes } from './setGetRes';

const updateTaskFetch = async (title, desc, tag, dt, id) => {
  try {
    const body = {
      title: title,
      desc: desc,
      tag: tag,
      dt: dt,
    };

    const data = {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return await fetch(`https://p2moviles.herokuapp.com/task/${id}`, data)
      .then((cat) => {
        if (cat.status == 200) {
          setRes('Success');
        } else {
          setRes('Fail');
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      })
      .then((response) => {
        console.log('Success: ', response);
      });
  } catch (error) {
    console.log(error);
  }
};
export default updateTaskFetch;
