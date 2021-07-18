import React from "react";
import allScores from "./scores.js";
const sortedCountryScores = allScores.sort((countryA, countryB) => {
	// console.log("This is A", countryA.name, "This is B", countryB.name);
	if (countryA.name < countryB.name) {
		return -1;
	} else {
		return 1;
	}
});

const Tables = () => {
	return (
		<div className="Container">
			{sortedCountryScores.map((country, index) => {
				const sortedScores = country.scores.sort(
					(scoreA, scoreB) => scoreB.s - scoreA.s
				);
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
						;
					</table>
				);
			})}
		</div>
	);
};

export default Tables;
