const Person = ({ id, name, img, alt, displayPhoto, removePerson }) => {
  return (
    <li>
      <h3>
        {id} : {name}
      </h3>
      <img alt={alt} src={displayPhoto ? img : ""} />
      <button onClick={() => removePerson(id)}>Remove</button>
    </li>
  );
};

export default Person;
