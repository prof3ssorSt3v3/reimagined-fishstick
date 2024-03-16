import './Person.css';

const Person = ({ person, getNew }) => {
  return (
    <div className="person">
      <h2>{person.name}</h2>
      <p>{person.email}</p>
      <button
        onClick={(ev) => {
          let num = Math.floor(Math.random() * 10) + 1;
          getNew(num);
        }}
      >
        Get New Person
      </button>
    </div>
  );
};

export default Person;
