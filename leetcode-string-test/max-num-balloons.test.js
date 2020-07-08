import maxNumberOfBalloons from '../leetcode-string/max-num-balloons';

describe('maxNumberOfBalloons()', () => {

  it(`should return 1`, () => {
    const text = "nlaebolko"
    const expected = 1;
    const actual = maxNumberOfBalloons(text);

    expect(actual).toEqual(expected);
  });


  it(`should return 2`, () => {
    const text = "loonbalxballpoon"
    const expected = 2;
    const actual = maxNumberOfBalloons(text);

    expect(actual).toEqual(expected);
  });


  it(`should return 0`, () => {
    const text = "leetcode"
    const expected = 0;
    const actual = maxNumberOfBalloons(text);

    expect(actual).toEqual(expected);
  });


  it(`should return 10`, () => {
    const text = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw";
    const expected = 10;
    const actual = maxNumberOfBalloons(text);

    expect(actual).toEqual(expected);
  });

});