const Person = ({ name, img, alt, displayPhoto }) => {
  // const imgOrNot = null;
  return (
    <li>
      <h3>{name}</h3>
      <img alt={alt} src={displayPhoto ? img : ""} />
    </li>
  );
};

export default Person;
