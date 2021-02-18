const AddPerson = ({ nextId, addPerson }) => {
  const person = {
    id: nextId,
    name: null,
    img: null,
    alt: null,
    displayPhoto: true,
  };
  const updateName = (e) => (person.name = e.target.value);
  const updateImage = (e) => (person.img = e.target.value);
  const updateAlt = (e) => (person.alt = e.target.value);
  return (
    <>
      Name: <input type="text" onInput={updateName} /> <br />
      Image URL: <input type="text" onInput={updateImage} /> <br />
      Image ALT: <input type="text" onInput={updateAlt} /> <br />
      <button onClick={() => addPerson(person)}>Add Person</button>
    </>
  );
};

export default AddPerson;
