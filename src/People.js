import Person from "./Person";

const People = ({ nextId, people, addPerson, removePerson }) => {
  const person = {
    id: nextId,
    name: "TestPerson " + String(Math.random()),
    img: "https://unsplash.com/photos/_9a-3NO5KJE/download?w=320",
    alt: "Mr or Miss Panda!",
    displayPhoto: true,
  };
  return (
    <>
      <ul>
        {people.map(({ id, name, img, alt, displayPhoto }) => (
          <>
            <Person
              key={id}
              id={id}
              name={name}
              img={img}
              alt={alt}
              displayPhoto={displayPhoto}
              removePerson={removePerson}
            />
          </>
        ))}
      </ul>
      <button onClick={() => addPerson(person)}>Add Person</button>
    </>
  );
};

export default People;
