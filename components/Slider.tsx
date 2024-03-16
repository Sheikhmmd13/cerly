import Image from "next/image";

// import Swiper core and required modules
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//images
import barberImage from "@/app/assets/imgs/img1.jpg";
import barberImage2 from "@/app/assets/imgs/img2.jpg";
import barberImage3 from "@/app/assets/imgs/img3.jpg";
import barberImage5 from "@/app/assets/imgs/img5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

function Slider() {
	return (
		<Swiper
			className="w-full h-[full]"
			effect={"cards"}
			grabCursor
                  loop
			modules={[EffectCards]}>
			<SwiperSlide className="w-[500px] h-[400px]">
				<Image
					src={barberImage}
					alt="hero-image"
					className="w-full h-full object-cover rounded-3xl"
				/>
			</SwiperSlide>
			<SwiperSlide className="w-[500px] h-[400px]">
				<Image
					src={barberImage2}
					alt="hero-image"
					className=" w-full h-full object-cover rounded-3xl"
				/>
			</SwiperSlide>
			<SwiperSlide className="w-[500px] h-[400px]">
				<Image
					src={barberImage3}
					alt="hero-image"
					className=" w-full h-full object-cover rounded-3xl"
				/>
			</SwiperSlide>
			<SwiperSlide className="w-[500px] h-[400px]">
				<Image
					src={barberImage5}
					alt="hero-image"
					className=" w-full h-full object-cover rounded-3xl"
				/>
			</SwiperSlide>
		</Swiper>
	);
}

export default Slider;
