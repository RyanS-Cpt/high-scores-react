import React from "react";
import allScores from "./scores.js";
const globalScores = [];
const sortedGlobalScores = allScores.map((country) => {
	return country.scores.map((score) => {
		if (!globalScores.includes(score)) {
			globalScores.push(score);
		}
		const sortGlobalScores = globalScores.sort(
			(scoreA, scoreB) => scoreB.s - scoreA.s
		);
		return sortGlobalScores;
	});
});
console.log("This is sorted global scores", sortedGlobalScores);
const sortedCountryScores = allScores.sort((countryA, countryB) => {
	if (countryA.name < countryB.name) {
		return -1;
	} else {
		return 1;
	}
});

const Tables = (props) => {
	if (props.tableSelect === 1) {
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
			<table>
				<thead>
					<tr>
						<th>Global scores</th>
					</tr>
				</thead>
				<tbody>
					{sortedGlobalScores.map((item, index) => {
						console.log("This is each score", item);
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
