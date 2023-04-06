import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showBox, setShowBox] = useState(false);
  const [boxColor, setBoxColor] = useState("beige");
  const [showSurprise, setShowSurprise] = useState(false);

  const handleRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const hexColor = `#${randomColor}`;

    setBoxColor(hexColor);
  };

  const getStatus = () => {
    if (showBox) {
      return "Showing";
    }
    return "Hidden";
  };

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
      <div style={{ marginBottom: 5, marginTop: 5 }}>
        <button style={{ marginRight: 5 }} onClick={() => setShowBox(true)}>
          Show Box
        </button>
        <button style={{ marginRight: 5 }} onClick={() => setShowBox(false)}>
          Hide Box
        </button>
        <button style={{ marginRight: 5 }} onClick={handleRandomColor}>
          Set Random Color
        </button>
      </div>
      <BoxComponent hideElement={showBox} boxColor={boxColor} />
      <h1>{getStatus()}</h1>

      <div className="bordered-settings-container">
        {!showSurprise && (
          <button onClick={() => setShowSurprise((prev) => !prev)}>
            Press me for a surprise!
          </button>
        )}
        {showSurprise && (
          <div className="hello-message-container">
            <h3>WELCOME!</h3>
            <p>Welcome to our website! We hope that you will enjoy it!</p>
          </div>
        )}
      </div>
    </div>
  );
}

const BoxComponent = (props: any) => {
  if (!props.hideElement) {
    return <></>;
  }
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: props.boxColor,
      }}
    >
      <h2>Some tests</h2>
      <p>
        Looking for this?{" "}
        <Link className="youtube" href="https://youtube.com">
          Click me!
        </Link>
      </p>
    </div>
  );
};
