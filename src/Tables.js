import React from "react";
import allScores from "./scores.js";
const globalScores = [];

//embedded for loop to extract score data
for (let country of allScores) {
	for (let score of country.scores) {
		if (!globalScores.includes(score)) {
			globalScores.push(score);
		}
	}
}

//Sort and store extracted data in a variable
const sortedGlobalScores = globalScores.sort(
	(scoreA, scoreB) => scoreB.s - scoreA.s
);

//Sort and store all data in a variable for individual tables
const sortedCountryScores = allScores.sort((countryA, countryB) => {
	if (countryA.name < countryB.name) {
		return -1;
	} else {
		return 1;
	}
});

const Tables = (props) => {
	if (props.tableSelect === 1) {
		//render one table per country
		return (
			<div className="Container">
				{sortedCountryScores.map((country, index) => {
					const sortedScores = country.scores.sort((scoreA, scoreB) => {
						if (props.stateVar === 0) {
							return scoreB.s - scoreA.s;
						} else {
							return scoreA.s - scoreB.s;
						}
					});
					return (
						<table key={index}>
							<thead>
								<tr>
									<th>High Scores: {country.name}</th>
								</tr>
							</thead>
							<tbody>
								{sortedScores.map((score, index) => {
									return (
										<tr key={index}>
											<td>
												<span>{score.n}</span>
												<span>{score.s}</span>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					);
				})}
			</div>
		);
	} else {
		return (
			//Render global table ? move into separate component and render here
			<table>
				<thead>
					<tr>
						<th>Global scores</th>
					</tr>
				</thead>
				<tbody>
					{sortedGlobalScores.map((item, index) => {
						return (
							<tr key={index}>
								<td>
									<span>{item.n}</span>
									<span>{item.s}</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
};

export default Tables;
