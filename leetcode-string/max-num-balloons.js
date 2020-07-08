// #1189

// Given a string text, you want to use the characters of text 
// to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. 
// Return the maximum number of instances that can be formed.


const maxNumberOfBalloons = text => {
  if (text.length < 7) return 0;
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;

  for (const char of text) {
    switch (char) {
      case 'b':
        b++;
        break;
      case 'a':
        a++;
        break;
      case 'l':
        l++;
        break;
      case 'o':
        o++;
        break;
      case 'n':
        n++;
        break;
    }
  }

  return (Math.min(b, a, Math.floor(l / 2), Math.floor(o / 2), n))

}

export default maxNumberOfBalloons

// Time O of n
// Space 5