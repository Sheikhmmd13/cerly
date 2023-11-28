import { useRef, useState } from "react";

function UserForm({ closeModal, time }) {
	const numberRef = useRef();
	const [status, setStatus] = useState();
	const url = "./times.json";

	console.log(time);

	const numberInputOnChange = (event) => {
		const inputValue = event.target.value;

		if (inputValue <= 0) {
			numberRef.current.value = 0;
		}
	};

	async function formSubmitHandler(event) {
		event.preventDefault();

		const Data = new FormData(event.target);
		const formData = {
			id: time.id,
			formData: {
				name: Data.get("fullName"),
				phoneNum: Data.get("phoneNum"),
			},
		};

		const res = fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		}).then((res) => res);

		if ((await res).ok) {
			alert("نوبت شما با موفقیت ثبت شد");
			closeModal();
		} else {
			alert('مشکلی رخ داده است')
			closeModal();
		}
	}

	return (
		<form
			onSubmit={formSubmitHandler}
			className=" absolute top-1/2 left-1/2 px-10 -translate-x-1/2 -translate-y-1/2 w-2/6 h-2/4 bg-white rounded-xl shadow-myShadow z-50 flex flex-col gap-3 justify-center items-center max-md:w-4/5">
			<span
				className="absolute top-0 right-0 text-3xl p-5 rotate-45 text-[#7c7c7c] cursor-pointer"
				onClick={closeModal}>
				+
			</span>
			<input
				type="text"
				name="fullName"
				className="w-full border py-3 px-3 border-[#ccc] placeholder-[#ccc] outline-none focus-visible:outline-none focus-visible:border-purple focus-visible:rounded-lg focus-visible:text-purple focus-visible:placeholder-purple"
				placeholder="نام و نام خانوادگی"
			/>
			<input
				ref={numberRef}
				onChange={numberInputOnChange}
				type="number"
				name="phoneNum"
				className="w-full border py-3 px-3 border-[#ccc] placeholder-[#ccc] outline-none focus-visible:outline-none focus-visible:border-purple focus-visible:rounded-lg focus-visible:text-purple focus-visible:placeholder-purple"
				placeholder="شماره تماس"
			/>
			<input
				type="submit"
				className="btn-purple w-full "
				placeholder="شماره تماس"
			/>
		</form>
	);
}

export default UserForm;
