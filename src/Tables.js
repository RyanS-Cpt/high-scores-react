import React from "react";
import allScores from "./scores.js";

const Tables = () => {
	return (
		<div className="Container">
			{allScores.map((country, index) => {
				return (
					<table key={index}>
						<thead>
							<tr>
								<th>High Scores: {country.name}</th>
							</tr>
						</thead>
						{country.scores.map((score, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>
											<span>{score.n}</span>
											<span>{score.s}</span>
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				);
			})}
		</div>
	);
};

export default Tables;
