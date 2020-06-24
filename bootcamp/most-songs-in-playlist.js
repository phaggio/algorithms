// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

const mostSongsInPlaylist = arr => {
  // if can use array.sort()

  const sortedArr = arr.sort();
  const max = 60;
  let accumMin = 0
  let num = 0;

  for (const songLength of sortedArr) {
    if (accumMin + songLength <= max) {
      accumMin += songLength;
      num++;
    } else {
      break;
    }
  }

  return num;
};

export default mostSongsInPlaylist