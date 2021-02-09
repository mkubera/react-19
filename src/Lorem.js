import "./Lorem.css";

function Lorem({ testFunction, color, text, pd }) {
  return (
    <>
      <section>
        <input type="text" onInput={(e) => testFunction(e.target.value)} />
      </section>
      <section className="lorem" style={{ padding: pd }}>
        <h1 style={{ color: color }}>{text}</h1>
      </section>
    </>
  );
}

export default Lorem;
