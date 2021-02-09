import Person from "./Person";

const People = ({ people }) => (
  <ul>
    {people.map(({ id, name, img, alt, displayPhoto }) => (
      <>
        <Person
          key={id}
          name={name}
          img={img}
          alt={alt}
          displayPhoto={displayPhoto}
        />
        {/* <PersonFooter /> */}
      </>
    ))}
  </ul>
);

export default People;
