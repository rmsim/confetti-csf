import ReactConfetti from "react-confetti";
import { useState } from "react";

import "./styles.css";

const colors = ["#62B5ED", "#DD5350", "#2D3D6C", "#D0D048", "#4CA83B"];
// const drawShape = (ctx) => {
//   ctx.beginPath();
//   for (let i = 0; i < 22; i++) {
//     const angle = 0.15 * i;
//     const x = (0.2 + 1.5 * angle) * Math.cos(angle);
//     const y = (0.2 + 1.5 * angle) * Math.sin(angle);
//     ctx.lineTo(x, y);
//   }
//   ctx.stroke();
//   ctx.closePath();
// };

const drawCircle = (ctx) => {
  ctx.beginPath();
  ctx.arc(100, 75, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};

const MyConfetti = ({ hidden = false }) => {
  return (
    <div role="presentation" aria-hidden={true}>
      <ReactConfetti
        initialVelocityX={{ min: -1, max: 1 }}
        initialVelocityY={{ min: -10, max: 10 }}
        recycle={false}
        drawShape={drawCircle}
        colors={colors}
        run={!hidden}
        onConfettiComplete={() =>
          console.log("Remember to sweep up the confetti!")
        }
      />
    </div>
  );
};

export default function App() {
  const [hidden, setHidden] = useState(true);

  const onSubmit = () => setHidden();
  const enterSubmission = (event) => {
    if (event.key === "Enter") {
      setHidden();
    }
  };

  return (
    <div className="App">
      <h1>When I grow up, I want to be</h1>
      <input onKeyUp={enterSubmission} type="text"></input>
      <button onClick={onSubmit}>submit</button>
      <MyConfetti hidden={hidden} />
    </div>
  );
}
