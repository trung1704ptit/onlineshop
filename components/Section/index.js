export default function Section({ children, ...props }) {
  return (
    <section {...props}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
}
