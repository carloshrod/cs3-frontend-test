export const categoriesMenu = [
	{
		id: 'cp',
		label: 'Computación',
		sub: [
			{
				id: 'lt',
				label: 'Laptops',
				sub: [
					{
						id: 'gm',
						label: 'Gaming',
					},
					{
						id: 'bs',
						label: 'Business',
					},
				],
			},
			{
				id: 'dt',
				label: 'Desktops',
			},
		],
		main: true,
	},
	{
		id: 'el',
		label: 'Electrónica',
		sub: [
			{
				id: 'ad',
				label: 'Audio',
				sub: [
					{
						id: 'au',
						label: 'Auriculares',
						sub: [
							{
								id: 'ie',
								label: 'In Ear',
							},
							{
								id: 'oe',
								label: 'On Ear',
							},
						],
					},
				],
			},
			{
				id: 'vd',
				label: 'Video',
			},
		],
		main: true,
	},
	{
		id: 'cl',
		label: 'Celulares',
		main: true,
	},
];
