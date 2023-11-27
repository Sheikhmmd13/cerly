import React from "react";

export default function ({openModal, time}) {
	return (
		<div className="btn-outline-purple flex gap-2" onClick={openModal}>
			<p>{time.start}</p>
			<p>الی</p>
			<p>{time.end}</p>
		</div>
	);
}
