import mostSongsInPlaylist from '../bootcamp/most-songs-in-playlist';

describe('mostSongsInPlaylist', () => {
	it('should return 19 when given the array [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2]', () => {
		const arr = [
			3,
			5,
			7,
			2,
			1,
			4,
			8,
			5,
			3,
			2,
			2,
			1,
			5,
			7,
			4,
			2,
			3,
			1,
			3,
			4,
			7,
			8,
			8,
			2
		];

		const expected = 19;
		const actual = mostSongsInPlaylist(arr);

		expect(actual).toEqual(expected);
	});

	it('should return 7 when given the array [3, 4, 2, 1, 7, 5, 3]', () => {
		const arr = [3, 4, 2, 1, 7, 5, 3];

		const expected = 7;
		const actual = mostSongsInPlaylist(arr);

		expect(actual).toEqual(expected);
	});

	it('should return 0 when given the array []', () => {
		const arr = [];

		const expected = 0;
		const actual = mostSongsInPlaylist(arr);

		expect(actual).toEqual(expected);
	});
});
