export type month = {
	[day: string]: {
		hours: { [time: string]: string };
	};
};

type TimesStructure = {
	calendar: {
		months: { [monathName: string]: month };
	};
};

export const TimesList: TimesStructure = {
	calendar: {
		months: {
			Farvardin: {
				"1": {
					hours: {
						"10:00": "Booked",
						"11:00": "Available",
						"12:00": "Booked",
					},
				},
				"2": {
					hours: {
						"10:00": "Available",
						"11:00": "Available",
						"12:00": "Booked",
					},
				},
				"3": {
					hours: {
						"10:00": "Available",
						"11:00": "Booked",
						"12:00": "Booked",
					},
				},"4": {
					hours: {
						"10:00": "Available",
						"11:00": "Booked",
						"12:00": "Booked",
					},
				},
			},
		},
	},
}