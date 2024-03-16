import './LastPerson.css';

const LastPerson = ({ person }) => {
  return (
    <div className="lastPerson">
      <h2>{person.name}</h2>
      <p>{person.email}</p>
    </div>
  );
};

export default LastPerson;
