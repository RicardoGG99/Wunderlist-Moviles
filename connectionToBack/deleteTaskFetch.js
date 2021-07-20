import { setRes } from './setGetRes';

const data = {
  method: 'DELETE',
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const deleteTaskFetch = async (item) => {
  const res = await fetch(`http://192.168.43.138:3000/task/${item}`, data).then((dog) => {
    if (dog.status == 200) {
      setRes('Success');
    } else {
      setRes('Fail');
    }
  });
  return 'Success';
};

export default deleteTaskFetch;
