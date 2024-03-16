// ================================================== Animations (framer-motion)
export const transition = { type: "sparing", duration: 0.5 };
export function sideAnimation(direction: "left" | "right" | "up" | "down") {
	return {
		initial: {
			x:
				direction === "left"
					? -100
					: direction === "right"
					? 100
					: 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
			transition: { ...transition, delay: 0.5 },
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { ...transition, delay: 0 },
		},
		exit: {
			x:
				direction === "left"
					? -100
					: direction === "right"
					? 100
					: 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			transition: { ...transition, delay: 0 },
		},
	};
}
