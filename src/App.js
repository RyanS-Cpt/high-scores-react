import React, { useState } from "react";
import "./App.css";
import Tables from "./Tables";

function App() {
	const [buttonSwitch, setButtonSwitch] = useState(0);
	return (
		<div className="Main-container">
			<header className="App-header">
				<h1>High Scores per Country</h1>
			</header>
			<button
				onClick={() =>
					buttonSwitch === 0 ? setButtonSwitch(1) : setButtonSwitch(0)
				}
			>
				Rearrange scores
			</button>
			<Tables stateVar={buttonSwitch} />
		</div>
	);
}

export default App;
