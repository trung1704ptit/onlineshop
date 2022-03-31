import Link from "next/link";
import Countdown from "react-countdown";

export default function CountDownTime({
  date = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
}) {
  const Completionist = () => <Link href="#">Shop Now!</Link>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="time-counter">
          <span className="highlight">{days}</span> Days
          <span className="highlight">{hours}</span> Hours
          <span className="highlight">{minutes}</span> Minutes
          <span className="highlight">{seconds}</span> Seconds
        </div>
      );
    }
  };
  return <Countdown date={date} renderer={renderer} />;
}
