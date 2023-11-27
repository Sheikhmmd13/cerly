import React from "react";

export default function ({openModal, getTime ,time}) {
	const onClickHandler = () => {
		openModal();
		getTime(time);
	}

	return (
		<button className={`${time.isTacken ? "btn-outline-disable" : "btn-outline-purple"} flex gap-2`} onClick={onClickHandler} disabled={time.isTacken}>
			<p>{time.start}</p>
			<p>الی</p>
			<p>{time.end}</p>
		</button>
	);
}
