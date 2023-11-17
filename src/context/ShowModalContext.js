import React, { useState } from "react";

const ShowModalContext = React.createContext({
	IsShownModal: false,
	CloseModal: () => {},
	OpenModal: () => {},
});

export default ShowModalContext;

export function ShowModalContextProvider(props) {
	const [IsShowModal, setIsShowModal] = useState(false);

	function OpenModal() {
		setIsShowModal(true);
	}

	function CloseModal() {
		setIsShowModal(false);
	}

	const valueOfContext = {
		IsShownModal: IsShowModal,
		CloseModal: CloseModal,
		OpenModal: OpenModal,
	};

	return (
		<ShowModalContext.Provider value={valueOfContext}>
			{props.children}
		</ShowModalContext.Provider>
	);
}
