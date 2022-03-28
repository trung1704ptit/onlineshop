import Section from "../Section";

export default function Devider(props) {
  return (
    <Section>
      <div className="devider" style={{ ...props }} />
    </Section>
  );
}
