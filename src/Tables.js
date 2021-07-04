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
					</table>
				)
			})}
		</div>
	);
};

export default Tables;
