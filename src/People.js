import Person from "./Person";

const People = ({ people, removePerson }) => {
  return (
    <>
      <ul>
        {people.map(({ id, name, img, alt, displayPhoto }) => (
          <>
            <Person
              key={id.toString()}
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
    </>
  );
};

export default People;
