const HIRAGANA_TO_MANYOGANA = {
  "あ": "安",
  "い": "以",
  "う": "宇",
  "え": "衣",
  "お": "於",
  "か": "可",
  "き": "奇",
  "く": "久",
  "け": "計",
  "こ": "己",
  "さ": "左",
  "し": "之",
  "す": "寸",
  "せ": "世",
  "そ": "曾",
  "た": "太",
  "ち": "知",
  "つ": "川",
  "て": "天",
  "と": "止",
  "な": "奈",
  "に": "二",
  "ぬ": "奴",
  "ね": "祢",
  "の": "乃",
  "は": "波",
  "ひ": "比",
  "ふ": "不",
  "へ": "部",
  "ほ": "保",
  "ま": "末",
  "み": "三",
  "む": "武",
  "め": "女",
  "も": "毛",
  "や": "也",
  "ゆ": "由",
  "よ": "与",
  "ら": "良",
  "り": "利",
  "る": "留",
  "れ": "礼",
  "ろ": "呂",
  "わ": "和",
  "ゐ": "為",
  "ゑ": "恵",
  "を": "乎",
  "ん": "无",
  "が": "我",
  "ぎ": "疑",
  "ぐ": "具",
  "げ": "下",
  "ご": "其",
  "ざ": "射",
  "じ": "自",
  "ず": "受",
  "ぜ": "是",
  "ぞ": "曽",
  "だ": "陀",
  "ぢ": "遅",
  "づ": "豆",
  "で": "代",
  "ど": "土",
  "ば": "伐",
  "び": "毘",
  "ぶ": "夫",
  "べ": "弁",
  "ぼ": "煩",
  "ぱ": "半",
  "ぴ": "比",
  "ぷ": "不",
  "ぺ": "部",
  "ぽ": "保",
  "っ": "个",
  "ゃ": "也",
  "ゅ": "由",
  "ょ": "与",
  "ぁ": "阿",
  "ぃ": "伊",
  "ぅ": "宇",
  "ぇ": "江",
  "ぉ": "於",
  "ゎ": "和"
};

const KATAKANA_TO_HIRAGANA = {
  "ア": "あ",
  "イ": "い",
  "ウ": "う",
  "エ": "え",
  "オ": "お",
  "カ": "か",
  "キ": "き",
  "ク": "く",
  "ケ": "け",
  "コ": "こ",
  "サ": "さ",
  "シ": "し",
  "ス": "す",
  "セ": "せ",
  "ソ": "そ",
  "タ": "た",
  "チ": "ち",
  "ツ": "つ",
  "テ": "て",
  "ト": "と",
  "ナ": "な",
  "ニ": "に",
  "ヌ": "ぬ",
  "ネ": "ね",
  "ノ": "の",
  "ハ": "は",
  "ヒ": "ひ",
  "フ": "ふ",
  "ヘ": "へ",
  "ホ": "ほ",
  "マ": "ま",
  "ミ": "み",
  "ム": "む",
  "メ": "め",
  "モ": "も",
  "ヤ": "や",
  "ユ": "ゆ",
  "ヨ": "よ",
  "ラ": "ら",
  "リ": "り",
  "ル": "る",
  "レ": "れ",
  "ロ": "ろ",
  "ワ": "わ",
  "ヰ": "ゐ",
  "ヱ": "ゑ",
  "ヲ": "を",
  "ン": "ん",
  "ガ": "が",
  "ギ": "ぎ",
  "グ": "ぐ",
  "ゲ": "げ",
  "ゴ": "ご",
  "ザ": "ざ",
  "ジ": "じ",
  "ズ": "ず",
  "ゼ": "ぜ",
  "ゾ": "ぞ",
  "ダ": "だ",
  "ヂ": "ぢ",
  "ヅ": "づ",
  "デ": "で",
  "ド": "ど",
  "バ": "ば",
  "ビ": "び",
  "ブ": "ぶ",
  "ベ": "べ",
  "ボ": "ぼ",
  "パ": "ぱ",
  "ピ": "ぴ",
  "プ": "ぷ",
  "ペ": "ぺ",
  "ポ": "ぽ",
  "ァ": "ぁ",
  "ィ": "ぃ",
  "ゥ": "ぅ",
  "ェ": "ぇ",
  "ォ": "ぉ",
  "ャ": "ゃ",
  "ュ": "ゅ",
  "ョ": "ょ",
  "ヮ": "ゎ",
  "ヵ": "か",
  "ヶ": "け",
  "ッ": "っ"
};

const YOON_MAPPING = {
  "きゃ": "枳也",
  "きゅ": "枳由",
  "きょ": "枳与",
  "しゃ": "之也",
  "しゅ": "之由",
  "しょ": "之与",
  "ちゃ": "知也",
  "ちゅ": "知由",
  "ちょ": "知与",
  "にゃ": "二也",
  "にゅ": "二由",
  "にょ": "二与",
  "ひゃ": "比也",
  "ひゅ": "比由",
  "ひょ": "比与",
  "みゃ": "三也",
  "みゅ": "三由",
  "みょ": "三与",
  "りゃ": "利也",
  "りゅ": "利由",
  "りょ": "利与",
  "ぎゃ": "疑也",
  "ぎゅ": "疑由",
  "ぎょ": "疑与",
  "じゃ": "自也",
  "じゅ": "自由",
  "じょ": "自与",
  "ぢゃ": "遅也",
  "ぢゅ": "遅由",
  "ぢょ": "遅与",
  "びゃ": "毘也",
  "びゅ": "毘由",
  "びょ": "毘与",
  "ぴゃ": "比也",
  "ぴゅ": "比由",
  "ぴょ": "比与"
};

const EXAMPLES = [
  "こんにちは、元気ですか。\n私は東南大学の学生です。",
  "日本語の勉強はとても楽しいです。\n万葉仮名の歴史に興味があります。",
  "今日は良い天気ですね。\n一緒に勉強しましょう。"
];

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const statusLabel = document.getElementById("status");
const liveToggle = document.getElementById("liveToggle");

const exampleBtn = document.getElementById("exampleBtn");
const clearBtn = document.getElementById("clearBtn");
const convertBtn = document.getElementById("convertBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

const YOON_BASE = new Set(Object.keys(YOON_MAPPING).map((key) => key[0]));

const isKanji = (char) => {
  const code = char.codePointAt(0);
  return (code >= 0x4e00 && code <= 0x9fff) || (code >= 0x3400 && code <= 0x4dbf);
};

const toHiragana = (char) => KATAKANA_TO_HIRAGANA[char] || char;

const convertToManyogana = (text) => {
  const result = [];
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (isKanji(char)) {
      result.push(char);
      continue;
    }

    const hiraChar = toHiragana(char);
    if (hiraChar === char && !HIRAGANA_TO_MANYOGANA[hiraChar]) {
      result.push(char);
      continue;
    }

    const nextChar = text[i + 1];
    if (nextChar) {
      const nextHira = toHiragana(nextChar);
      if (["ゃ", "ゅ", "ょ"].includes(nextHira) && YOON_BASE.has(hiraChar)) {
        const yoon = hiraChar + nextHira;
        if (YOON_MAPPING[yoon]) {
          result.push(YOON_MAPPING[yoon]);
          i += 1;
          continue;
        }
      }
    }

    if (HIRAGANA_TO_MANYOGANA[hiraChar]) {
      result.push(HIRAGANA_TO_MANYOGANA[hiraChar]);
    } else {
      result.push(char);
    }
  }

  return result.join("");
};

const updateOutput = () => {
  const text = inputText.value;
  if (!text.trim()) {
    outputText.textContent = "";
    statusLabel.textContent = "Ready.";
    return;
  }

  const result = convertToManyogana(text);
  outputText.textContent = result;
  statusLabel.textContent = `Converted ${text.length} chars to ${result.length} chars.`;
};

exampleBtn.addEventListener("click", () => {
  inputText.value = EXAMPLES[Math.floor(Math.random() * EXAMPLES.length)];
  updateOutput();
});

clearBtn.addEventListener("click", () => {
  inputText.value = "";
  updateOutput();
});

convertBtn.addEventListener("click", updateOutput);

inputText.addEventListener("input", () => {
  if (liveToggle.checked) {
    updateOutput();
  }
});

copyBtn.addEventListener("click", async () => {
  const text = outputText.textContent;
  if (!text.trim()) {
    statusLabel.textContent = "Nothing to copy.";
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    statusLabel.textContent = "Copied to clipboard.";
  } catch (error) {
    statusLabel.textContent = "Clipboard blocked. Use manual copy.";
  }
});

downloadBtn.addEventListener("click", () => {
  const text = outputText.textContent;
  if (!text.trim()) {
    statusLabel.textContent = "Nothing to download.";
    return;
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "manyogana.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  statusLabel.textContent = "Download started.";
});

updateOutput();
