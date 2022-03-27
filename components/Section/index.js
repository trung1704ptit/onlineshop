export default function Section({ children }) {
  return (
    <section>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
