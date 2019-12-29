import React from "react";
import ReactDOM from "react-dom";

import HorizontalBars from "./components/hz_bars/hz_bars";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          minWidth: "250px",
          maxWidth: "800px",
          width: "50%"
        }}
      >
        <h1>Horizontal Bars</h1>
        <p>
          By <a href="https://www.darshanbaral.com/">Darshan</a>. Fork{" "}
          <a href="https://github.com/darshanbaral/react-hzbars.git">here</a>.
        </p>
        <hr />
        <HorizontalBars
          colors={{
            primary: "#f47100",
            primaryHover: "#e54304",
            secondary: "#ffddb0",
            border: "#f47100",
            hoverText: "blue"
          }}
          sizes={{
            borderThickness: "1px",
            borderRadius: "3px",
            barHeight: "25px",
            marginBottom: "15px",
            nameWidth: "85px"
          }}
          delay="0.5s"
          data={[
            { name: "R", value: 85 },
            { name: "JavaScript", value: 80 },
            { name: "Java", value: 0 },
            { name: "react", value: 60 },
            { name: "python", value: 60 },
            { name: "hugo", value: 65 }
          ]}
          sortBars={true}
          showNames={true}
          showValues={true}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
