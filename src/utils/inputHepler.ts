import { REGEX_URL } from "@/constants/validation";

export const fullWidthToHalfWidth = () => {
  return {
    ァ: "ｧ",
    ア: "ｱ",
    ィ: "ｨ",
    イ: "ｲ",
    ゥ: "ｩ",
    ウ: "ｳ",
    ェ: "ｪ",
    エ: "ｴ",
    ォ: "ｫ",
    オ: "ｵ",
    カ: "ｶ",
    ガ: "ｶﾞ",
    キ: "ｷ",
    ギ: "ｷﾞ",
    ク: "ｸ",
    グ: "ｸﾞ",
    ケ: "ｹ",
    ゲ: "ｹﾞ",
    コ: "ｺ",
    ゴ: "ｺﾞ",
    サ: "ｻ",
    ザ: "ｻﾞ",
    シ: "ｼ",
    ジ: "ｼﾞ",
    ス: "ｽ",
    ズ: "ｽﾞ",
    セ: "ｾ",
    ゼ: "ｾﾞ",
    ソ: "ｿ",
    ゾ: "ｿﾞ",
    タ: "ﾀ",
    ダ: "ﾀﾞ",
    チ: "ﾁ",
    ヂ: "ﾁﾞ",
    ッ: "ｯ",
    ツ: "ﾂ",
    ヅ: "ﾂﾞ",
    テ: "ﾃ",
    デ: "ﾃﾞ",
    ト: "ﾄ",
    ド: "ﾄﾞ",
    ナ: "ﾅ",
    ニ: "ﾆ",
    ヌ: "ﾇ",
    ネ: "ﾈ",
    ノ: "ﾉ",
    ハ: "ﾊ",
    バ: "ﾊﾞ",
    パ: "ﾊﾟ",
    ヒ: "ﾋ",
    ビ: "ﾋﾞ",
    ピ: "ﾋﾟ",
    フ: "ﾌ",
    ブ: "ﾌﾞ",
    プ: "ﾌﾟ",
    ヘ: "ﾍ",
    ベ: "ﾍﾞ",
    ペ: "ﾍﾟ",
    ホ: "ﾎ",
    ボ: "ﾎﾞ",
    ポ: "ﾎﾟ",
    マ: "ﾏ",
    ミ: "ﾐ",
    ム: "ﾑ",
    メ: "ﾒ",
    モ: "ﾓ",
    ャ: "ｬ",
    ヤ: "ﾔ",
    ュ: "ｭ",
    ユ: "ﾕ",
    ョ: "ｮ",
    ヨ: "ﾖ",
    ラ: "ﾗ",
    リ: "ﾘ",
    ル: "ﾙ",
    レ: "ﾚ",
    ロ: "ﾛ",
    ヮ: "",
    ワ: "ﾜ",
    ヲ: "ｦ",
    ン: "ﾝ",
    ヴ: "ｳﾞ",
    "・": "･",
    ー: "-",
    "「": "｢",
    "」": "｣",
    "￥": "¥",
    "；": ";",
    "’": "’",
    "、": "､",
    "。": "｡",
  };
};

export const halfWidthToFullWidth = {
  ｧ: "ァ",
  ｱ: "ア",
  ｨ: "ィ",
  ｲ: "イ",
  ｩ: "ゥ",
  ｳ: "ウ",
  ｪ: "ェ",
  ｴ: "エ",
  ｫ: "ォ",
  ｵ: "オ",
  ｶ: "カ",
  ｶﾞ: "ガ",
  ｷ: "キ",
  ｷﾞ: "ギ",
  ｸ: "ク",
  ｸﾞ: "グ",
  ｹ: "ケ",
  ｹﾞ: "ゲ",
  ｺ: "コ",
  ｺﾞ: "ゴ",
  ｻ: "サ",
  ｻﾞ: "ザ",
  ｼ: "シ",
  ｼﾞ: "ジ",
  ｽ: "ス",
  ｽﾞ: "ズ",
  ｾ: "セ",
  ｾﾞ: "ゼ",
  ｿ: "ソ",
  ｿﾞ: "ゾ",
  ﾀ: "タ",
  ﾀﾞ: "ダ",
  ﾁ: "チ",
  ﾁﾞ: "ヂ",
  ｯ: "ッ",
  ﾂ: "ツ",
  ﾂﾞ: "ヅ",
  ﾃ: "テ",
  ﾃﾞ: "デ",
  ﾄ: "ト",
  ﾄﾞ: "ド",
  ﾅ: "ナ",
  ﾆ: "ニ",
  ﾇ: "ヌ",
  ﾈ: "ネ",
  ﾉ: "ノ",
  ﾊ: "ハ",
  ﾊﾞ: "バ",
  ﾊﾟ: "パ",
  ﾋ: "ヒ",
  ﾋﾞ: "ビ",
  ﾋﾟ: "ピ",
  ﾌ: "フ",
  ﾌﾞ: "ブ",
  ﾌﾟ: "プ",
  ﾍ: "ヘ",
  ﾍﾞ: "ベ",
  ﾍﾟ: "ペ",
  ﾎ: "ホ",
  ﾎﾞ: "ボ",
  ﾎﾟ: "ポ",
  ﾏ: "マ",
  ﾐ: "ミ",
  ﾑ: "ム",
  ﾒ: "メ",
  ﾓ: "モ",
  ｬ: "ャ",
  ﾔ: "ヤ",
  ｭ: "ュ",
  ﾕ: "ユ",
  ｮ: "ョ",
  ﾖ: "ヨ",
  ﾗ: "ラ",
  ﾘ: "リ",
  ﾙ: "ル",
  ﾚ: "レ",
  ﾛ: "ロ",
  ヮ: "ヮ",
  ﾜ: "ワ",
  ｦ: "ヲ",
  ﾝ: "ン",
  ｳﾞ: "ヴ",
  "･": "・",
  "-": "ー",
  "｢": "「",
  "｣": "」",
  "¥": "￥",
  ";": "；",
  "’": "’",
  "､": "、",
  "｡": "。",
};

export const hiraToKana = {
  あ: "ア",
  い: "イ",
  う: "ウ",
  え: "エ",
  お: "オ",
  か: "カ",
  き: "キ",
  く: "ク",
  け: "ケ",
  こ: "コ",
  さ: "サ",
  し: "シ",
  す: "ス",
  せ: "セ",
  そ: "ソ",
  た: "タ",
  ち: "チ",
  つ: "ツ",
  て: "テ",
  と: "ト",
  な: "ナ",
  に: "ニ",
  ぬ: "ヌ",
  ね: "ネ",
  の: "ノ",
  は: "ハ",
  ひ: "ヒ",
  ふ: "フ",
  へ: "ヘ",
  ほ: "ホ",
  ま: "マ",
  み: "ミ",
  む: "ム",
  め: "メ",
  も: "モ",
  や: "ヤ",
  ゆ: "ユ",
  よ: "ヨ",
  ら: "ラ",
  り: "リ",
  る: "ル",
  れ: "レ",
  ろ: "ロ",
  わ: "ワ",
  ゐ: "ヰ",
  ゑ: "ヱ",
  を: "ヲ",
  ん: "ン",
  が: "ガ",
  ぎ: "ギ",
  ぐ: "グ",
  げ: "ゲ",
  ご: "ゴ",
  ざ: "ザ",
  じ: "ジ",
  ず: "ズ",
  ぜ: "ゼ",
  ぞ: "ゾ",
  だ: "ダ",
  ぢ: "ヂ",
  づ: "ヅ",
  で: "デ",
  ど: "ド",
  ば: "バ",
  び: "ビ",
  ぶ: "ブ",
  べ: "ベ",
  ぼ: "ボ",
  ぱ: "パ",
  ぴ: "ピ",
  ぷ: "プ",
  ぺ: "ペ",
  ぽ: "ポ",
  ゔ: "ヴ",
  ょ: "ョ",
  ゃ: "ャ",
  ゅ: "ュ",
  ぁ: "ァ",
  ぃ: "ィ",
  ぅ: "ゥ",
  ぇ: "ェ",
  ぉ: "ォ",
  ゕ: "ヵ",
  ゖ: "ヶ",
  っ: "ッ",
  ゎ: "ヮ",
  "、": "、",
  "。": "。",
  " ": "　",
};

export const fullWidthSpecialCharacters = {
  "#": "＃",
  "%": "％",
  "*": "＊",
  "?": "？",
  _: "＿",
  ";": "；",
  "~": "～",
  "`": "｀",
  "!": "！",
  "@": "＠",
  $: "＄",
  "^": "＾",
  "&": "＆",
  "(": "（",
  ")": "）",
  "-": "－",
  "=": "＝",
  "+": "＋",
  "{": "｛",
  "[": "［",
  "]": "］",
  "}": "｝",
  "|": "｜",
  ":": "：",
  "'": "＇",
  '"': "＂",
  ",": "，",
  "<": "＜",
  ".": "．",
  ">": "＞",
  "/": "／",
  "\\": "＼",
};

export const mapToHalfWidth = (character: any) => {
  const halfWidthMap: any = fullWidthToHalfWidth();
  if (typeof halfWidthMap[character] === "undefined") {
    return character;
  } else {
    return halfWidthMap[character];
  }
};

export const mapToObject = (character: any, obj: any) => {
  const _obj: any = { ...obj };
  if (typeof _obj[character] === "undefined") {
    return character;
  } else {
    return _obj[character];
  }
};

export const convertToHalfWidth = (str: string) => {
  str = str.replace(/[！-～]/g, (r) =>
    String.fromCharCode(r.charCodeAt(0) - 0xfee0),
  );
  const characters = str.split("");
  let halfWidthString = "";
  characters.forEach((character) => {
    halfWidthString += mapToHalfWidth(character);
  });

  return halfWidthString;
};

export const replaceStringToNumber = (string: string) => {
  if (/^[0]+$/g.test(string?.replace(/,/g, ""))) {
    return "0";
  }
  if (
    string !== "" &&
    /^[\d,]+$/g.test(string) &&
    typeof string === "string" &&
    !!+string?.replace(/,/g, "")
  ) {
    return string?.replace(/,/g, "").replace(/([0]*)([1-9]+[\d]*)*$/, "$2");
  }
  return string;
};

export const replaceNumberToString = (
  number: number | string,
  toFixed: number | undefined = undefined,
) => {
  if (number || number === 0) {
    let _number = replaceStringToNumber(`${number}`);
    if (`${_number}` !== "" && /^[\d.]+$/g.test(`${_number}`)) {
      if (toFixed || toFixed === 0) {
        let _number1 = /^[\d]+$/g.test(`${_number}`)
          ? _number
          : _number.replace(/([\d]+).([\d]+)/, "$1");

        const decimal = Number.parseFloat(
          /[.]/.test(_number)
            ? "1." + _number.replace(/([\d]+).([\d]+)/, "$2")
            : "1",
        ).toFixed(toFixed);

        const decimal1 = decimal.replace(/(\d)([.][\d]+)/g, "$1");
        const decimal2 = decimal.replace(/(\d)([.][\d]+)/g, "$2");
        if (+decimal1 > 1) {
          const arrNum = _number1.split("");
          let i = arrNum.length - 1;

          while (i >= 0) {
            if (+arrNum[i] !== 9) {
              arrNum[i] = `${+arrNum[i] + (+decimal1 - 1)}`;
              break;
            } else {
              arrNum[i] = i === 0 ? "10" : "0";
            }
            i--;
          }
          _number1 = arrNum.join("");
        }
        _number = _number1 + (toFixed ? decimal2 : "");
      }
      if (/^[\d]+$/g.test(`${_number}`)) {
        return `${_number}`.replace(/\d(?=(\d{3})+$)/g, "$&,");
      } else {
        return `${_number}`.replace(/\d(?=(\d{3})+([.]\d+)$)/g, "$&,");
      }
    }
    return `${_number}`;
  }
  return "";
};

export const replaceStringToDecimal = (string: string) => {
  if (/^[0]+$/g.test(string?.replace(/,/g, ""))) {
    return "0";
  }
  if (
    string !== "" &&
    /^[\d,.]+$/g.test(string) &&
    typeof string === "string" &&
    !!+string?.replace(/,/g, "")
  ) {
    if (string.includes(".")) {
      const valueDecimalSplit = string.split(".");
      const naturalPart = valueDecimalSplit[0];
      const decimalPart = valueDecimalSplit[1];

      if (
        naturalPart?.replace(/,/g, "").replace(/([0]*)([1-9]+[\d]*)*$/, "$2")
      ) {
        return (
          naturalPart
            ?.replace(/,/g, "")
            .replace(/([0]*)([1-9]+[\d]*)*$/, "$2") +
          "." +
          decimalPart
        );
      }
      return string;
    }
    return string?.replace(/,/g, "").replace(/([0]*)([1-9]+[\d]*)*$/, "$2");
  }
  return string;
};

export const replaceDecimalToString = (number: number | string) => {
  if (number || number === 0) {
    const _number = replaceStringToNumber(`${number}`);
    if (`${_number}` !== "" && /^[\d.]+$/g.test(`${_number}`)) {
      if (/^[\d]+$/g.test(`${_number}`)) {
        return `${_number}`.replace(/\d(?=(\d{3})+$)/g, "$&,") + ".000";
      } else {
        const valueDecimalSplit = `${_number}`.split(".");
        const decimalPart = valueDecimalSplit[1];
        return (
          `${_number}`.replace(/\d(?=(\d{3})+([.]\d+)$)/g, "$&,") +
          "".padEnd(3 - decimalPart.length, "0")
        );
      }
    }
    return `${_number}`;
  }
  return "";
};

export const convertZipCode = (value: string) => {
  if (value && /^(\d{3})(\d{4})$/.test(value)) {
    return value.replace(/^(\d{3})(\d{4})$/, "$1-$2");
  }
  return value;
};

export const isValidUrl = (urlString: string) => {
  const regexUrl = new RegExp(REGEX_URL);
  return regexUrl.test(urlString);
};

export const convertToKanaFullWidth = (str: string) => {
  //half to full
  str = str.replace(/[!-~]/g, (r) => {
    return String.fromCharCode(r.charCodeAt(0) + 0xfee0);
  });
  //kana half to full
  const newStr = str.split("");
  let halfWidthString = "";
  newStr.forEach((character) => {
    halfWidthString += mapToObject(character, halfWidthToFullWidth);
  });
  //hira full to kana full
  const characters = halfWidthString.split("");
  let result = "";
  characters.forEach((character) => {
    result += mapToObject(character, hiraToKana);
  });

  return result;
};

export const convertFullWidthSpecialCharacters = (str: string) => {
  const characters = str.trim().split("");
  let result = "";
  characters.forEach((character) => {
    result += mapToObject(character, fullWidthSpecialCharacters);
  });

  return result;
};
