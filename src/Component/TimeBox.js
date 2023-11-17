import React from "react";

export default function ({openModal}) {
	return (
		<div className="btn-outline-purple flex gap-2" onClick={openModal}>
			<p>11:00</p>
			<p>الی</p>
			<p>12:30</p>
		</div>
	);
}
