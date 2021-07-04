import React from "react";
import allScores from './scores.js';

const Tables = () => {
	return (
		<div className="Container">
			{allScores.map(country =>{
				return (
					<table>
						<tr>
							<th>High Scores:{country.name}</th>
						</tr>
						{country.scores.map(score=>{
							return(
								<tr>
									<td>{score.n}<span></span>{score.s}</td>
								</tr>
							)
						})}
					</table>
				)
			})}
		</div>
	);
};

export default Tables;
