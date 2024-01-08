import { useEffect, useState } from "react";
import "./style.scss";

interface ProgressBarProps {
  initial: number;
  total: number;
}

const ProgressBar = ({ initial, total }: ProgressBarProps) => {
  const [barProgress, setBarProgress] = useState(0);

  function changeBar(x: number, y: number) {
    const progressCalc = (x + 1) * y;

    setBarProgress(progressCalc);
  }

  useEffect(() => {
    changeBar(initial, total);
  }, []);

  useEffect(() => {
    changeBar(initial, total);
  }, [initial]);

  return (
    <div className="progress_bar-container">
      <span
        className="progress_bar"
        style={{ width: `${barProgress}%` }}
      ></span>
    </div>
  );
};

export default ProgressBar;
