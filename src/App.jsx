import { useState, useEffect } from 'react';
import './App.css';
import MessageBar from './components/MessageBar';
import Person from './components/Person';
import LastPerson from './components/LastPerson';
import Loading from './components/Loading';

function App() {
  const [person, setPerson] = useState(null);
  const [lastPerson, setLastPerson] = useState(null);
  const [num, setNum] = useState(1);
  const [message, setMessage] = useState(null);

  function getData(n) {
    let url = `https://jsonplaceholder.typicode.com/users/${n}`;
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error('Not a person. Sucks to be you.');
        return resp.json();
      })
      .then((data) => {
        setMessage(null);
        setPerson(data);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }

  useEffect(() => {
    getData(num);
  }, [num]);

  function updateLast(n) {
    setLastPerson({ ...person });
    if (person && person.id === n) {
      //same as previous so get a new number
      setNum(Math.floor(Math.random() * 10) + 1);
    } else {
      setNum(n);
    }
  }

  return (
    <>
      <div>
        <h1>People</h1>
        {message && <MessageBar msg={message} type="error" />}
        <div className="bar">
          {person ? <Person person={person} getNew={updateLast} /> : <Loading type="person" />}
          {lastPerson && <LastPerson person={lastPerson} />}
        </div>
      </div>
    </>
  );
}

export default App;
