import React, { useState } from "react";
import "./App.css";
import Tables from "./Tables";

function App() {
	const [buttonSwitch, setButtonSwitch] = useState(0);
	const [tableSwitch, setTableSwitch] = useState(0);
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
			<button
				onClick={() =>
					tableSwitch === 0 ? setTableSwitch(1) : setTableSwitch(0)
				}
			>
				Display Individual/Global scores
			</button>
			<Tables stateVar={buttonSwitch} tableSelect={tableSwitch} />
		</div>
	);
}

export default App;
