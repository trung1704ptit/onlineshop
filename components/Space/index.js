import cx from "classnames";
import Section from "../Section";

export default function Devider(props) {
  const { height = 15, className } = props;
  return (
    <Section>
      <div className={cx("devider", className)} style={{ height }} />
    </Section>
  );
}
