import "./Lorem.css";

function Lorem({ color, text, pd }) {
  return (
    <>
      <section className="lorem" style={{ padding: pd }}>
        <h1 style={{ color: color }}>{text}</h1>
      </section>
      <section></section>
    </>
  );
}

export default Lorem;
