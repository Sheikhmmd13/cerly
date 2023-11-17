import React, { useRef } from "react";
import ReactDOM from "react-dom";

import UserForm from "./UserForm";

const Backdrop = () => {
	return <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#33333350] z-20"></div>;
};


export default function ModalForm({closeModal}) {
	return (
		<>
			{ReactDOM.createPortal(
                <Backdrop style={{opacity: 1, visibility: 'visible'}}/>,
				document.getElementById("Form-modal-backdrop")
                )}
                {ReactDOM.createPortal(
                    <UserForm closeModal={closeModal}/>,
                    document.getElementById("Form-Modal")
                )}
		</>
	);
}
