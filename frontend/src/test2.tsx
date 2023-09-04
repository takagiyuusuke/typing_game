import { spawn } from 'child_process';
import React, {  KeyboardEvent, useState, useEffect } from 'react';
import './App.css';

const KeyPressDetector: React.FC = () => { 

  const key = [{ char: "あ", keys: ["a"] },
  { char: "い", keys: ["i", "yi"] },
  { char: "う", keys: ["u", "wu", "whu"] },
  { char: "え", keys: ["e"] },
  { char: "お", keys: ["o"] },
  { char: "か", keys: ["ka", "ca"] },
  { char: "き", keys: ["ki"] },
  { char: "く", keys: ["ku", "cu", "qu"] },
  { char: "け", keys: ["ke"] },
  { char: "こ", keys: ["ko","co"] },
  { char: "さ", keys: ["sa"] },
  { char: "し", keys: ["si", "shi", "ci"] },
  { char: "す", keys: ["su"] },
  { char: "せ", keys: ["se","ce"] },
  { char: "そ", keys: ["so"] },
  { char: "た", keys: ["ta"] },
  { char: "ち", keys: ["chi", "ti"] },
  { char: "つ", keys: ["tu", "tsu"] },
  { char: "て", keys: ["te"] },
  { char: "と", keys: ["to"] },
  { char: "な", keys: ["na"] },
  { char: "に", keys: ["ni"] },
  { char: "ぬ", keys: ["nu"] },
  { char: "ね", keys: ["ne"] },
  { char: "の", keys: ["no"] },
  { char: "は", keys: ["ha"] },
  { char: "ひ", keys: ["hi"] },
  { char: "ふ", keys: ["fu", "hu"] },
  { char: "へ", keys: ["he"] },
  { char: "ほ", keys: ["ho"] },
  { char: "ま", keys: ["ma"] },
  { char: "み", keys: ["mi"] },
  { char: "む", keys: ["mu"] },
  { char: "め", keys: ["me"] },
  { char: "も", keys: ["mo"] },
  { char: "や", keys: ["ya"] },
  { char: "ゆ", keys: ["yu"] },
  { char: "よ", keys: ["yo"] },
  { char: "ら", keys: ["ra"] },
  { char: "り", keys: ["ri"] },
  { char: "る", keys: ["ru"] },
  { char: "れ", keys: ["re"] },
  { char: "ろ", keys: ["ro"] },
  { char: "わ", keys: ["wa"] },
  { char: "を", keys: ["wo"] },
  { char: "ぁ", keys: ["la", "xa"] },
  { char: "ぃ", keys: ["li", "xi"] },
  { char: "ぅ", keys: ["lu", "xu"] },
  { char: "ぇ", keys: ["le", "xe"] },
  { char: "ぉ", keys: ["lo", "xo"] },
  { char: "ゃ", keys: ["lya", "xya"] },
  { char: "ゅ", keys: ["lyu", "xyu"] },
  { char: "ょ", keys: ["lyo", "xyo"] },
  { char: "ヵ", keys: ["lka", "xka"] },
  { char: "ヶ", keys: ["lke", "xke"] },
  { char: "っ", keys: ["ltu", "ltsu", "xtu", "xtsu"] },
  { char: "ゎ", keys: ["lwa", "xwa"] },
  { char: "が", keys: ["ga"] },
  { char: "ぎ", keys: ["gi"] },
  { char: "ぐ", keys: ["gu"] },
  { char: "げ", keys: ["ge"] },
  { char: "ご", keys: ["go"] },
  { char: "ざ", keys: ["za"] },
  { char: "じ", keys: ["ji", "zi"] },
  { char: "ず", keys: ["zu"] },
  { char: "ぜ", keys: ["ze"] },
  { char: "ぞ", keys: ["zo"] },
  { char: "だ", keys: ["da"] },
  { char: "ぢ", keys: ["di"] },
  { char: "づ", keys: ["du"] },
  { char: "で", keys: ["de"] },
  { char: "ど", keys: ["do"] },
  { char: "ば", keys: ["ba"] },
  { char: "び", keys: ["bi"] },
  { char: "ぶ", keys: ["bu"] },
  { char: "べ", keys: ["be"] },
  { char: "ぼ", keys: ["bo"] },
  { char: "ぱ", keys: ["pa"] },
  { char: "ぴ", keys: ["pi"] },
  { char: "ぷ", keys: ["pu"] },
  { char: "ぺ", keys: ["pe"] },
  { char: "ぽ", keys: ["po"] },
  { char: "ヴ", keys: ["vu"] },
  { char: "ん", keys: ["nn","xn"] },
  { char: "a", keys: ["a"] },
  { char: "b", keys: ["b"] },
  { char: "c", keys: ["c"] },
  { char: "d", keys: ["d"] },
  { char: "e", keys: ["e"] },
  { char: "f", keys: ["f"] },
  { char: "g", keys: ["g"] },
  { char: "h", keys: ["h"] },
  { char: "i", keys: ["i"] },
  { char: "j", keys: ["j"] },
  { char: "k", keys: ["k"] },
  { char: "l", keys: ["l"] },
  { char: "m", keys: ["m"] },
  { char: "n", keys: ["n"] },
  { char: "o", keys: ["o"] },
  { char: "p", keys: ["p"] },
  { char: "q", keys: ["q"] },
  { char: "r", keys: ["r"] },
  { char: "s", keys: ["s"] },
  { char: "t", keys: ["t"] },
  { char: "u", keys: ["u"] },
  { char: "v", keys: ["v"] },
  { char: "w", keys: ["w"] },
  { char: "x", keys: ["x"] },
  { char: "y", keys: ["y"] },
  { char: "z", keys: ["z"] },
  { char: "0", keys: ["0"] },
  { char: "1", keys: ["1"] },
  { char: "2", keys: ["2"] },
  { char: "3", keys: ["3"] },
  { char: "4", keys: ["4"] },
  { char: "5", keys: ["5"] },
  { char: "6", keys: ["6"] },
  { char: "7", keys: ["7"] },
  { char: "8", keys: ["8"] },
  { char: "9", keys: ["9"] },
  { char: "ー", keys: ["-"] },
  { char: "、", keys: [","] },
  { char: "。", keys: ["."] },
  { char: "<", keys: ["<"] },
  { char: ">", keys: [">"] },
  { char: ",", keys: [","] },
  { char: ".", keys: ["."] },
  { char: "{", keys: ["{"] },
  { char: "}", keys: ["}"] },
  { char: "[", keys: ["["] },
  { char: "]", keys: ["]"] },
  { char: " ", keys: [" "] },
  { char: "=", keys: ["="] },
  { char: "%", keys: ["%"] },
  { char: "+", keys: ["+"] },
  { char: "-", keys: ["-"] },
  { char: "*", keys: ["*"] },
  { char: "/", keys: ["/"] },
  { char: "_", keys: ["_"] },
  { char: "^", keys: ["^"] },
  { char: "~", keys: ["~"] },
  { char: "!", keys: ["!"] },
  { char: "&", keys: ["&"] },
  { char: "'", keys: ["'"] },
  { char: "|", keys: ["|"] },
  { char: "@", keys: ["@"] },
  { char: "`", keys: ["`"] },
  { char: "?", keys: ["?"] },
  { char: "#", keys: ["#"] },
  { char: ";", keys: [";"] },
  { char: ":", keys: [":"] },
  { char: "(", keys: ["("] },
  { char: ")", keys: [")"] }]

  const key2 = [{ char: "いぇ", keys: ["ye"] },
  { char: "うぁ", keys: ["wha"] },
  { char: "うぃ", keys: ["wi","whi"] },
  { char: "うぇ", keys: ["we","whe"] },
  { char: "うぉ", keys: ["who"] },
  { char: "ヴぁ", keys: ["va"] },
  { char: "ヴぃ", keys: ["vi", "vyi"] },
  { char: "ヴぇ", keys: ["ve", "vye"] },
  { char: "ヴぉ", keys: ["vo"] },
  { char: "ヴゃ", keys: ["vya"] },
  { char: "ヴゅ", keys: ["vyu"] },
  { char: "ヴょ", keys: ["vyo"] },
  { char: "きゃ", keys: ["kya"] },
  { char: "きぃ", keys: ["kyi"] },
  { char: "きゅ", keys: ["kyu"] },
  { char: "きぇ", keys: ["kye"] },
  { char: "きょ", keys: ["kyo"] },
  { char: "ぎゃ", keys: ["gya"] },
  { char: "ぎぃ", keys: ["gyi"] },
  { char: "ぎゅ", keys: ["gyu"] },
  { char: "ぎぇ", keys: ["gye"] },
  { char: "ぎょ", keys: ["gyo"] },
  { char: "くぁ", keys: ["qa", "qwa",] },
  { char: "くぃ", keys: ["qi", "qwi", "qyi"] },
  { char: "くぅ", keys: ["qwu"] },
  { char: "くぇ", keys: ["qe", "qwe", "qye"] },
  { char: "くぉ", keys: ["qo", "qwo"] },
  { char: "くゃ", keys: ["qya"] },
  { char: "くゅ", keys: ["qyu"] },
  { char: "くょ", keys: ["qyo"] },
  { char: "ぐぁ", keys: ["gwa"] },
  { char: "ぐぃ", keys: ["gwi"] },
  { char: "ぐぅ", keys: ["gwu"] },
  { char: "ぐぇ", keys: ["gwe"] },
  { char: "ぐぉ", keys: ["gwo"] },
  { char: "しゃ", keys: ["sha", "sya"] },
  { char: "しぃ", keys: ["syi"] },
  { char: "しゅ", keys: ["shu", "syu"] },
  { char: "しぇ", keys: ["she", "sye"] },
  { char: "しょ", keys: ["sho", "syo"] },
  { char: "じゃ", keys: ["ja", "jya", "zya"] },
  { char: "じぃ", keys: ["jyi", "zyi"] },
  { char: "じゅ", keys: ["ju", "jyu", "zyu"] },
  { char: "じぇ", keys: ["je", "jye", "zye"] },
  { char: "じょ", keys: ["jo", "jyo", "zyo"] },
  { char: "すぁ", keys: ["swa"] },
  { char: "すぃ", keys: ["swi"] },
  { char: "すぅ", keys: ["swu"] },
  { char: "すぇ", keys: ["swe"] },
  { char: "すぉ", keys: ["swo"] },
  { char: "ちゃ", keys: ["tya", "cha"] },
  { char: "ちぃ", keys: ["tyi"] },
  { char: "ちゅ", keys: ["tyu", "chu", "cyu"] },
  { char: "ちぇ", keys: ["tye", "che", "cye"] },
  { char: "ちょ", keys: ["tyo", "cho", "cyo"] },
  { char: "ぢゃ", keys: ["dya"] },
  { char: "ぢぃ", keys: ["dyi"] },
  { char: "ぢゅ", keys: ["dyu"] },
  { char: "ぢぇ", keys: ["dye"] },
  { char: "ぢょ", keys: ["dyo"] },
  { char: "つぁ", keys: ["tsa"] },
  { char: "つぃ", keys: ["tsi"] },
  { char: "つぇ", keys: ["tse"] },
  { char: "つぉ", keys: ["tso"] },
  { char: "てゃ", keys: ["tha"] },
  { char: "てぃ", keys: ["thi"] },
  { char: "てゅ", keys: ["thu"] },
  { char: "てぇ", keys: ["the"] },
  { char: "てょ", keys: ["tho"] },
  { char: "でゃ", keys: ["dha"] },
  { char: "でぃ", keys: ["dhi"] },
  { char: "でゅ", keys: ["dhu"] },
  { char: "でぇ", keys: ["dhe"] },
  { char: "でょ", keys: ["dho"] },
  { char: "とぁ", keys: ["twa"] },
  { char: "とぃ", keys: ["twi"] },
  { char: "とぅ", keys: ["twu"] },
  { char: "とぇ", keys: ["twe"] },
  { char: "とぉ", keys: ["two"] },
  { char: "どぁ", keys: ["dwa"] },
  { char: "どぃ", keys: ["dwi"] },
  { char: "どぅ", keys: ["dwu"] },
  { char: "どぇ", keys: ["dwe"] },
  { char: "どぉ", keys: ["dwo"] },
  { char: "にゃ", keys: ["nya"] },
  { char: "にぃ", keys: ["nyi"] },
  { char: "にゅ", keys: ["nyu"] },
  { char: "にぇ", keys: ["nye"] },
  { char: "にょ", keys: ["nyo"] },
  { char: "ひゃ", keys: ["hya"] },
  { char: "ひぃ", keys: ["hyi"] },
  { char: "ひゅ", keys: ["hyu"] },
  { char: "ひぇ", keys: ["hye"] },
  { char: "ひょ", keys: ["hyo"] },
  { char: "びゃ", keys: ["bya"] },
  { char: "びぃ", keys: ["byi"] },
  { char: "びゅ", keys: ["byu"] },
  { char: "びぇ", keys: ["bye"] },
  { char: "びょ", keys: ["byo"] },
  { char: "ぴゃ", keys: ["pya"] },
  { char: "ぴぃ", keys: ["pyi"] },
  { char: "ぴゅ", keys: ["pyu"] },
  { char: "ぴぇ", keys: ["pye"] },
  { char: "ぴょ", keys: ["pyo"] },
  { char: "ふぁ", keys: ["fa", "fwa"] },
  { char: "ふぃ", keys: ["fi", "fwi", "fyi"] },
  { char: "ふぅ", keys: ["fwu"] },
  { char: "ふぇ", keys: ["fe", "fwe", "fye"] },
  { char: "ふぉ", keys: ["fo", "fwo"] },
  { char: "ふゃ", keys: ["fya"] },
  { char: "ふゅ", keys: ["fyu"] },
  { char: "ふょ", keys: ["fyo"] },
  { char: "みゃ", keys: ["mya"] },
  { char: "みぃ", keys: ["myi"] },
  { char: "みゅ", keys: ["myu"] },
  { char: "みぇ", keys: ["mye"] },
  { char: "みょ", keys: ["myo"] },
  { char: "りゃ", keys: ["rya"] },
  { char: "りぃ", keys: ["ryi"] },
  { char: "りゅ", keys: ["ryu"] },
  { char: "りぇ", keys: ["rye"] },
  { char: "りょ", keys: ["ryo"] },
  { char: "っか", keys: ["kka",] },
  { char: "っき", keys: ["kki",] },
  { char: "っく", keys: ["kku", "qqu"] },
  { char: "っけ", keys: ["kke"] },
  { char: "っこ", keys: ["kko"] },
  { char: "っが", keys: ["gga",] },
  { char: "っぎ", keys: ["ggi",] },
  { char: "っぐ", keys: ["ggu"] },
  { char: "っげ", keys: ["gge"] },
  { char: "っご", keys: ["ggo"] },
  { char: "っさ", keys: ["ssa"] },
  { char: "っし", keys: ["ssi", "sshi", "cci"] },
  { char: "っす", keys: ["ssu"] },
  { char: "っせ", keys: ["sse"] },
  { char: "っそ", keys: ["sso"] },
  { char: "っざ", keys: ["zza"] },
  { char: "っじ", keys: ["jji", "zzi"] },
  { char: "っず", keys: ["zzu"] },
  { char: "っぜ", keys: ["zze"] },
  { char: "っぞ", keys: ["zzo"] },
  { char: "った", keys: ["tta"] },
  { char: "っち", keys: ["tti", "cchi"] },
  { char: "っつ", keys: ["ttu", "ttsu"] },
  { char: "って", keys: ["tte"] },
  { char: "っと", keys: ["tto"] },
  { char: "っだ", keys: ["dda"] },
  { char: "っぢ", keys: ["ddi"] },
  { char: "っづ", keys: ["ddu"] },
  { char: "っで", keys: ["dde"] },
  { char: "っど", keys: ["ddo"] },
  { char: "っは", keys: ["hha"] },
  { char: "っひ", keys: ["hhi"] },
  { char: "っふ", keys: ["ffu", "hhu"] },
  { char: "っへ", keys: ["hhe"] },
  { char: "っぱ", keys: ["ppa"] },
  { char: "っぴ", keys: ["ppi"] },
  { char: "っぷ", keys: ["ppu"] },
  { char: "っぺ", keys: ["ppe"] },
  { char: "っぽ", keys: ["ppo"] },
  { char: "っば", keys: ["pba"] },
  { char: "っび", keys: ["pbi"] },
  { char: "っぶ", keys: ["pbu"] },
  { char: "っべ", keys: ["pbe"] },
  { char: "っぼ", keys: ["pbo"] },
  { char: "っほ", keys: ["hho"] },
  { char: "っま", keys: ["mma"] },
  { char: "っみ", keys: ["mmi"] },
  { char: "っむ", keys: ["mmu"] },
  { char: "っめ", keys: ["mme"] },
  { char: "っも", keys: ["mmo"] },
  { char: "っや", keys: ["yya"] },
  { char: "っゆ", keys: ["yyu"] },
  { char: "っよ", keys: ["yyo"] },
  { char: "っら", keys: ["rra"] },
  { char: "っり", keys: ["rri"] },
  { char: "っる", keys: ["rru"] },
  { char: "っれ", keys: ["rre"] },
  { char: "っろ", keys: ["rro"] },
  { char: "っわ", keys: ["wwa"] },
  { char: "っを", keys: ["wwo"] }]

  const key3 = [{ char: "っうぁ", keys: ["wwha"] },
  { char: "っうぃ", keys: ["wwhi"] },
  { char: "っうぇ", keys: ["wwhe"] },
  { char: "っうぉ", keys: ["wwho"] },
  { char: "っヴぁ", keys: ["vva"] },
  { char: "っヴぃ", keys: ["vvi", "vvyi"] },
  { char: "っヴぇ", keys: ["vve", "vvye"] },
  { char: "っヴぉ", keys: ["vvo"] },
  { char: "っヴゃ", keys: ["vvya"] },
  { char: "っヴゅ", keys: ["vvyu"] },
  { char: "っヴょ", keys: ["vvyo"] },
  { char: "っきゃ", keys: ["kkya"] },
  { char: "っきぃ", keys: ["kkyi"] },
  { char: "っきゅ", keys: ["kkyu"] },
  { char: "っきぇ", keys: ["kkye"] },
  { char: "っきょ", keys: ["kkyo"] },
  { char: "っぎゃ", keys: ["ggya"] },
  { char: "っぎぃ", keys: ["ggyi"] },
  { char: "っぎゅ", keys: ["ggyu"] },
  { char: "っぎぇ", keys: ["ggye"] },
  { char: "っぎょ", keys: ["ggyo"] },
  { char: "っくぁ", keys: ["qqa", "qqwa",] },
  { char: "っくぃ", keys: ["qqi", "qqwi", "qqyi"] },
  { char: "っくぅ", keys: ["qqwu"] },
  { char: "っくぇ", keys: ["qqe", "qqwe", "qqye"] },
  { char: "っくぉ", keys: ["qqo", "qqwo"] },
  { char: "っくゃ", keys: ["qqya"] },
  { char: "っくゅ", keys: ["qqyu"] },
  { char: "っくょ", keys: ["qqyo"] },
  { char: "っぐぁ", keys: ["ggwa"] },
  { char: "っぐぃ", keys: ["ggwi"] },
  { char: "っぐぅ", keys: ["ggwu"] },
  { char: "っぐぇ", keys: ["ggwe"] },
  { char: "っぐぉ", keys: ["ggwo"] },
  { char: "っしゃ", keys: ["ssya", "ssha"] },
  { char: "っしぃ", keys: ["ssyi"] },
  { char: "っしゅ", keys: ["ssyu", "sshu"] },
  { char: "っしぇ", keys: ["ssye", "sshe"] },
  { char: "っしょ", keys: ["ssyo", "ssho"] },
  { char: "っじゃ", keys: ["jja", "jjya", "zzya"] },
  { char: "っじぃ", keys: ["jjyi", "zzyi"] },
  { char: "っじゅ", keys: ["jju", "jjyu", "zzyu"] },
  { char: "っじぇ", keys: ["jje", "jjye", "zzye"] },
  { char: "っじょ", keys: ["jjo", "jjyo", "zzyo"] },
  { char: "っすぁ", keys: ["sswa"] },
  { char: "っすぃ", keys: ["sswi"] },
  { char: "っすぅ", keys: ["sswu"] },
  { char: "っすぇ", keys: ["sswe"] },
  { char: "っすぉ", keys: ["sswo"] },
  { char: "っちゃ", keys: ["ttya", "ccha"] },
  { char: "っちぃ", keys: ["ttyi"] },
  { char: "っちゅ", keys: ["ttyu", "cchu", "ccyu"] },
  { char: "っちぇ", keys: ["ttye", "cche", "ccye"] },
  { char: "っちょ", keys: ["ttyo", "ccho", "ccyo"] },
  { char: "っぢゃ", keys: ["ddya"] },
  { char: "っぢぃ", keys: ["ddyi"] },
  { char: "っぢゅ", keys: ["ddyu"] },
  { char: "っぢぇ", keys: ["ddye"] },
  { char: "っぢょ", keys: ["ddyo"] },
  { char: "っつぁ", keys: ["ttsa"] },
  { char: "っつぃ", keys: ["ttsi"] },
  { char: "っつぇ", keys: ["ttse"] },
  { char: "っつぉ", keys: ["ttso"] },
  { char: "ってゃ", keys: ["ttha"] },
  { char: "ってぃ", keys: ["tthi"] },
  { char: "ってゅ", keys: ["tthu"] },
  { char: "ってぇ", keys: ["tthe"] },
  { char: "ってょ", keys: ["ttho"] },
  { char: "っでゃ", keys: ["ddha"] },
  { char: "っでぃ", keys: ["ddhi"] },
  { char: "っでゅ", keys: ["ddhu"] },
  { char: "っでぇ", keys: ["ddhe"] },
  { char: "っでょ", keys: ["ddho"] },
  { char: "っとぁ", keys: ["ttwa"] },
  { char: "っとぃ", keys: ["ttwi"] },
  { char: "っとぅ", keys: ["ttwu"] },
  { char: "っとぇ", keys: ["ttwe"] },
  { char: "っとぉ", keys: ["ttwo"] },
  { char: "っどぁ", keys: ["ddwa"] },
  { char: "っどぃ", keys: ["ddwi"] },
  { char: "っどぅ", keys: ["ddwu"] },
  { char: "っどぇ", keys: ["ddwe"] },
  { char: "っどぉ", keys: ["ddwo"] },
  { char: "っひゃ", keys: ["hhya"] },
  { char: "っひぃ", keys: ["hhyi"] },
  { char: "っひゅ", keys: ["hhyu"] },
  { char: "っひぇ", keys: ["hhye"] },
  { char: "っひょ", keys: ["hhyo"] },
  { char: "っびゃ", keys: ["bbya"] },
  { char: "っびぃ", keys: ["bbyi"] },
  { char: "っびゅ", keys: ["bbyu"] },
  { char: "っびぇ", keys: ["bbye"] },
  { char: "っびょ", keys: ["bbyo"] },
  { char: "っぴゃ", keys: ["ppya"] },
  { char: "っぴぃ", keys: ["ppyi"] },
  { char: "っぴゅ", keys: ["ppyu"] },
  { char: "っぴぇ", keys: ["ppye"] },
  { char: "っぴょ", keys: ["ppyo"] },
  { char: "っふぁ", keys: ["ffa", "ffwa"] },
  { char: "っふぃ", keys: ["ffi", "ffwi", "ffyi"] },
  { char: "っふぅ", keys: ["ffwu"] },
  { char: "っふぇ", keys: ["ffe", "ffwe", "ffye"] },
  { char: "っふぉ", keys: ["ffo", "ffwo"] },
  { char: "っふゃ", keys: ["ffya"] },
  { char: "っふゅ", keys: ["ffyu"] },
  { char: "っふょ", keys: ["ffyo"] },
  { char: "っみゃ", keys: ["mmya"] },
  { char: "っみぃ", keys: ["mmyi"] },
  { char: "っみゅ", keys: ["mmyu"] },
  { char: "っみぇ", keys: ["mmye"] },
  { char: "っみょ", keys: ["mmyo"] },
  { char: "っりゃ", keys: ["rrya"] },
  { char: "っりぃ", keys: ["rryi"] },
  { char: "っりゅ", keys: ["rryu"] },
  { char: "っりぇ", keys: ["rrye"] },
  { char: "っりょ", keys: ["rryo"] }]


  const compose = (japanese:string) => {
    let candidate = [""]
    for (let i=0;i< japanese.length;i++){
      let entry = key.find(e => e.char === japanese[i]);
      if (entry) {
        let candidate2 = []
        for (let j=0;j< entry.keys.length;j++){
          for (let k=0;k<candidate.length;k++){
            candidate2.push(candidate[k] + entry.keys[j]) 
          }
        }
        candidate = candidate2
      } 
    }
    return candidate
  }
  const compose12 = (japanese:string) => {
    let candidate = [""]
    for (let i=0;i< 2;i++){
      let entry = {char:"",keys:[""]}
      if (i===0){
        let e = key.find(e => e.char === japanese[i])
        if (e) {entry = e}
      } else if (i===1) {
        let e = key2.find(e => e.char === japanese.slice(1,3))
        if (e) {entry = e}
      };
        let candidate2 = []
        for (let j=0;j< entry.keys.length;j++){
          for (let k=0;k<candidate.length;k++){
            candidate2.push(candidate[k] + entry.keys[j]) 
          }
        }
        candidate = candidate2
    }
    return candidate
  }
  const compose21 = (japanese:string) => {
    let candidate = [""]
    for (let i=0;i< 2;i++){
      let entry = {char:"",keys:[""]}
      if (i===1){
        let e = key.find(e => e.char === japanese[2])
        if (e) {entry = e}
      } else if (i===0) {
        let e = key2.find(e => e.char === japanese.slice(0,2))
        if (e) {entry = e}
      };
        let candidate2 = []
        for (let j=0;j< entry.keys.length;j++){
          for (let k=0;k<candidate.length;k++){
            candidate2.push(candidate[k] + entry.keys[j]) 
          }
        }
        candidate = candidate2
    }
    return candidate
  }

  const construct_array = (japanese:string) => {
    let i = 0
    let array = []
    while (i<japanese.length){
      let e = key3.find(_ => _.char === japanese.slice(i,i+3))
      if (e) {
        array.push(e.char)
        i += 3
      } else {
        let f = key2.find(_ => _.char === japanese.slice(i,i+2))
        if (f) {
          array.push(f.char)
          i += 2
        } else {
          let g = key.find(_ => _.char === japanese[i])
          if (g) {
            array.push(g.char)
            i ++}
        }
      } 
    }
    return array
  }
  
  const make_all_pattern = (st:string,next:string|undefined)  => {
    let pattern:string[] = []
    if (st.length===1){
      if (st==="ん"){
        if (next) {
        if (["あ","い","う","え","お","や","ゆ","よ","な","に","ぬ","ね","の","にゃ","にぃ","にゅ","にぇ","にょ","ん"].includes(next)){
          pattern = pattern.concat(["nn","xn"])
        } else {pattern = pattern.concat(["n","nn","xn"])}} else {pattern = pattern.concat(["nn","xn"])}
      } else {
      let e = key.find(_ => _.char === st)
      if (e) {pattern = pattern.concat(e.keys)}}
    } else if (st.length === 2) {
      let e = key2.find(_ => _.char === st)
      if (e) {pattern = pattern.concat(e.keys)}
      pattern = pattern.concat(compose(st))
    } else {
      let e = key3.find(_ => _.char === st)
      if (e) {pattern = pattern.concat(e.keys)}
      pattern = pattern.concat(compose21(st))
      pattern = pattern.concat(compose12(st))
      pattern = pattern.concat(compose(st))
    }
    return pattern
  }
  // console.log(make_all_pattern("っふぁ","にゃ"))
  
  const make_goal=(array:string[])=>{
    let answer = []
    for (let i = 0 ; i < array.length ; i ++){
      if (array[i].length===1){
        if (array[i]==="ん"){
          if (array[i+1]) {
          if (["あ","い","う","え","お","や","ゆ","よ","な","に","ぬ","ね","の","にゃ","にぃ","にゅ","にぇ","にょ","ん"].includes(array[i+1])){
            answer.push("nn")
          } else {answer.push("n")}} else {answer.push("nn")}
        } else {
        let e = key.find(_ => _.char === array[i])
        if (e) {answer.push(e.keys[0])}}
      } else if (array[i].length===2){
        let e = key2.find(_ => _.char === array[i])
        if (e) {answer.push(e.keys[0])}
      } else {
        let e = key3.find(_ => _.char === array[i])
        if (e) {answer.push(e.keys[0])}
      }
    }
    return answer
  }

  // console.log(make_goal(construct_array("みゃんまー")))
  // console.log(construct_array("ばっふぁろー"))

    // const kanas = ["apple","bird","cat","dog","elephant","fish","ghost","house","icecream","juice","king","lion","monkey","nose","octopus","pig","queen","rabbit","star","telephone","utility","violin","website","xylophone","year","zoo"]
    const words = ["毎日でも食べたいということは、毎日でも食べてるというわけではないです。","約束は守るためにありますから、約束を守るために全力を尽くします。","くっきりとした姿が見えているわけではないけど、おぼろげながら浮かんできたんです。46という数字が！シルエットが浮かんできたんです。","今のままではいけないと思います。だからこそ日本は今のままではいけないと思っている。","バンコク","クルンテープ・マハーナコーン・アモーン・ラッタナ・コーシン・マヒンタラー・ユッタヤーマ・ハーディ・ロック・ポップ・ノッパラット・ラーチャタニー・ブリーロム・ウドムラー・チャニウェート・マハー・サターン・アモーン・ピマーン・アワターン・サティット・サッカタッティヤ・ウィサヌカムプラシット","パブロ・ディエゴ・ホセ・フランシスコ・デ・パウラ・ファン・ネポムセーノ・マリア・デ・ロス・レメディオス・クリスピン・クリスピアーノ・デ・ラ・サンティシマ・トリニダード・ルイス・イ・ピカソ","珪性肺塵症","メロンパンナちゃん","没収します!","アンパンマン","バッファロー","朝鮮民主主義人民共和国","アルファベット","必修","こんにちは","マサチューセッツ工科大学"]
    const kanas = ["まいにちでもたべたいということは、まいにちでもたべているというわけではないです。","やくそくはまもるためにありますから、やくそくをまもるためにぜんりょくをつくします。","くっきりとしたすがたがみえているわけではないけど、おぼろげながらうかんできたんです。46というすうじが!しるえっとがうかんできたんです。","いまのままではいけないとおもいます。だからこそにほんはいまのままではいけないとおもっている。","ばんこく","くるんてーぷまはーなこーんあもーんらったなこーしんまひんたらーゆったやーまはーでぃろっくぽっぷのっぱらっとらーちゃたにーぶりーろむうどむらーちゃにうぇーとまはーさたーんあもーんぴまーんあわたーんさてぃっとさっかたってぃやうぃさぬかむぷらしっと","ぱぶろでぃえごほせふらんしすこでぱうらふぁんねぽむせーのまりあでろすれめでぃおすくりすぴんくりすぴあーのでらさんてぃしまとりにだーどるいすいぴかそ","pneumonoultramicroscopicsilicovolcanoconiosis","めろんぱんなちゃん","ぼっしゅうします!","あんぱんまん","ばっふぁろー","ちょうせんみんしゅしゅぎじんみんきょうわこく","あるふぁべっと","ひっしゅう","こんにちは","まさちゅーせっつこうかだいがく"]
    // const [name,setName] = useState(kanas[0])
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    const [state1,setState1] = useState(0)
    const [japar,setJapar] = useState(construct_array(kanas[0]))
    const [keyar,setKeyar] = useState(make_goal(japar))
    const [allpattern,setAllpattern] = useState(make_all_pattern(japar[0],japar[1]))
    const [entered,setEntered] = useState("")
    const [entered2,setEntered2] = useState<string[]>([]);
    const [correct,setCorrect] = useState(0)
    const [wrong,setWrong] = useState(0)
    const [remaining,setRemaining] = useState(30)
    const [stateA,setStateA] = useState(keyar[0][0])
    const [stateB,setStateB] = useState("")
    const [stateC,setStateC] = useState([""])
    const [stateD,setStateD] = useState("")
    const [stateE,setStateE] = useState(false)
    const [rotate,setRotate] = useState(0)
    const [stateS,setStateS] = useState({background: `rgb(100,100,100)`})
    // const [allow_n_type,setAllaw] = useState(false)
    const changeState = (num:number,s:string) => {
        setState1(num)
        if(num===2){
        setStateB(s)
        setStateS({background: `red`})} 
        if(num===1){
          setStateD(s)
          setStateS({background: `green`})}
        setTimeout(() => {
            setState1(0)
            setStateB("")
            setStateD("")
        }, 80);
    }
   
  // alert(japar)
  // alert(keyar)
  // alert(allpattern)
  function isPrefixOf(prefix: string, arr: string[]): boolean {
    return arr.some(item => item.startsWith(prefix));
  }

  useEffect(() => {
    const i = allpattern.filter(item => item.startsWith(entered))
    if (i) {
      setStateA(i[0][entered.length])
      setAllpattern(i)
      let arrayForJ:string[] = []
      for (let j = 1 ; j < i.length ; j ++){
        if (! arrayForJ.includes(i[j][entered.length]) && i[j][entered.length] !== i[0][entered.length]){
          arrayForJ.push(i[j][entered.length])
          }
        }
      setStateC(arrayForJ)
      }
    if (allpattern.includes(entered)){
      if (count+1 < japar.length) {
        setAllpattern(make_all_pattern(japar[count+1],japar[count+2]))
        setStateA(keyar[count+1][0])
        setCount(count + 1)
        setEntered2(entered2.concat([entered]))
        setEntered("")
      } else {
        setCount(0)
        setEntered("")
        setEntered2([])
        if (count2+1 < kanas.length) {
          setCount2(count2+1)
          setJapar(construct_array(kanas[count2+1]))
        } else {
          setCount2(0)
          setJapar(construct_array(kanas[0]))
        }
      }
    }
  },[entered])

  useEffect(()=>{
    setKeyar(make_goal(japar))
    setAllpattern(make_all_pattern(japar[0],japar[1]))
    setStateA(make_goal(japar)[0][0])
  },[japar])
  
  useEffect(()=>{
    let arrayForJ:string[] = []
      for (let j = 1 ; j < allpattern.length ; j ++){
        if (! arrayForJ.includes(allpattern[j][entered.length]) && allpattern[j][entered.length] !== allpattern[0][entered.length]){
          arrayForJ.push(allpattern[j][entered.length])
        }
      }
      if (entered2[entered2.length-1] === "n" && !entered && japar[entered2.length-1]==="ん"){
        arrayForJ.push("n")
      }
    setStateC(arrayForJ)
  },[allpattern])
  
  useEffect(() => {
    if (stateE) {setRotate(359.9)} else {setRotate(0)}
  },[stateE])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // alert(event.key)
    if (event.key === "Shift") {
      setStateE(true)
    } else {  
      if (entered2[entered2.length-1] === "n" && !entered && japar[entered2.length-1]==="ん" &&event.key === "n"){
        changeState(1,event.key)
        setEntered2(entered2.slice(0,-1).concat(["nn"]))
        setStateC(stateC.filter(e=>e!=="n"))
        setCorrect(correct+1)
      } else {
        if (isPrefixOf(entered+event.key,allpattern)){
          setEntered(entered+event.key)
          changeState(1,event.key)
          setCorrect(correct+1)
        } else {
          changeState(2,event.key)
          setWrong(wrong+1)
        }
      }
    }
  } 
  
  const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Shift" ) {
      setStateE(false)
    }}
  
    return (
      <div>
        <h2>{words[count2]}</h2>
        <h3><span className='gray'>{japar.slice(0,count)}</span><span className='blue emp'>{japar[count]}</span><span>{japar.slice(count+1,japar.length)}</span></h3>
        <h3><span className='gray'>{entered2}</span><span className='darkblue'>{allpattern[0].slice(0,entered.length)}</span><span className='blue emp'>{allpattern[0].slice(entered.length)}</span><span>{keyar.slice(count+1,keyar.length)}</span></h3>
        <div>{state1===0 && <h1 className='white'>=</h1>}{state1===1 && <h1 className='blue'>○</h1>}{state1===2 && <h1 className='red'>×</h1>}</div>
        <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0} style={{ outline: 'none' }}>
          ●CLICK HERE●<br/>
          正しく打った回数{correct}<br/>
          打ち間違い回数{wrong}<br/>
          精度{Math.round(1000*correct/(correct+wrong))/10}%<br/>
          {/* 時間{remaining}秒 */}
        </div>
        <div className='keyboard'>
          <div className='q key'>Q</div>
          {stateA==="q" &&<div className='q key key2'>Q</div>}
          {stateB==="q" &&<div className='q key key3'>Q</div>}
          {stateC.includes("q") &&<div className='q key key4'>Q</div>}
          {stateD==="q" &&<div className='q key key5'>Q</div>}
          <div className='w key'>W</div>
          {stateA==="w" &&<div className='w key key2'>W</div>}
          {stateB==="w" &&<div className='w key key3'>W</div>}
          {stateC.includes("w") &&<div className='w key key4'>W</div>}
          {stateD==="w" &&<div className='w key key5'>W</div>}
          <div className='e key'>E</div>
          {stateA==="e" &&<div className='e key key2'>E</div>}
          {stateB==="e" &&<div className='e key key3'>E</div>}
          {stateC.includes("e") &&<div className='e key key4'>E</div>}
          {stateD==="e" &&<div className='e key key5'>E</div>}
          <div className='r key'>R</div>
          {stateA==="r" &&<div className='r key key2'>R</div>}
          {stateB==="r" &&<div className='r key key3'>R</div>}
          {stateC.includes("r") &&<div className='r key key4'>R</div>}
          {stateD==="r" &&<div className='r key key5'>R</div>}
          <div className='t key'>T</div>
          {stateA==="t" &&<div className='t key key2'>T</div>}
          {stateB==="t" &&<div className='t key key3'>T</div>}
          {stateC.includes("t") &&<div className='t key key4'>T</div>}
          {stateD==="t" &&<div className='t key key5'>T</div>}
          <div className='y key'>Y</div>
          {stateA==="y" &&<div className='y key key2'>Y</div>}
          {stateB==="y" &&<div className='y key key3'>Y</div>}
          {stateC.includes("y") &&<div className='y key key4'>Y</div>}
          {stateD==="y" &&<div className='y key key5'>Y</div>}
          <div className='u key'>U</div>
          {stateA==="u" &&<div className='u key key2'>U</div>}
          {stateB==="u" &&<div className='u key key3'>U</div>}
          {stateC.includes("u") &&<div className='u key key4'>U</div>}
          {stateD==="u" &&<div className='u key key5'>U</div>}
          <div className='i key'>I</div>
          {stateA==="i" &&<div className='i key key2'>I</div>}
          {stateB==="i" &&<div className='i key key3'>I</div>}
          {stateC.includes("i") &&<div className='i key key4'>I</div>}
          {stateD==="i" &&<div className='i key key5'>I</div>}
          <div className='o key'>O</div>
          {stateA==="o" &&<div className='o key key2'>O</div>}
          {stateB==="o" &&<div className='o key key3'>O</div>}
          {stateC.includes("o") &&<div className='o key key4'>O</div>}
          {stateD==="o" &&<div className='o key key5'>O</div>}
          <div className='p key'>P</div>
          {stateA==="p" &&<div className='p key key2'>P</div>}
          {stateB==="p" &&<div className='p key key3'>P</div>}
          {stateC.includes("p") &&<div className='p key key4'>P</div>}
          {stateD==="p" &&<div className='p key key5'>P</div>}
          <div className='a key'>A</div>
          {stateA==="a" &&<div className='a key key2'>A</div>}
          {stateB==="a" &&<div className='a key key3'>A</div>}
          {stateC.includes("a") &&<div className='a key key4'>A</div>}
          {stateD==="a" &&<div className='a key key5'>A</div>}
          <div className='s key'>S</div>
          {stateA==="s" &&<div className='s key key2'>S</div>}
          {stateB==="s" &&<div className='s key key3'>S</div>}
          {stateC.includes("s") &&<div className='s key key4'>S</div>}
          {stateD==="s" &&<div className='s key key5'>S</div>}
          <div className='d key'>D</div>
          {stateA==="d" &&<div className='d key key2'>D</div>}
          {stateB==="d" &&<div className='d key key3'>D</div>}
          {stateC.includes("d") &&<div className='d key key4'>D</div>}
          {stateD==="d" &&<div className='d key key5'>D</div>}
          <div className='f key'>F</div>
          {stateA==="f" &&<div className='f key key2'>F</div>}
          {stateB==="f" &&<div className='f key key3'>F</div>}
          {stateC.includes("f") &&<div className='f key key4'>F</div>}
          {stateD==="f" &&<div className='f key key5'>F</div>}
          <div className='g key'>G</div>
          {stateA==="g" &&<div className='g key key2'>G</div>}
          {stateB==="g" &&<div className='g key key3'>G</div>}
          {stateC.includes("g") &&<div className='g key key4'>G</div>}
          {stateD==="g" &&<div className='g key key5'>G</div>}
          <div className='h key'>H</div>
          {stateA==="h" &&<div className='h key key2'>H</div>}
          {stateB==="h" &&<div className='h key key3'>H</div>}
          {stateC.includes("h") &&<div className='h key key4'>H</div>}
          {stateD==="h" &&<div className='h key key5'>H</div>}
          <div className='j key'>J</div>
          {stateA==="j" &&<div className='j key key2'>J</div>}
          {stateB==="j" &&<div className='j key key3'>J</div>}
          {stateC.includes("j") &&<div className='j key key4'>J</div>}
          {stateD==="j" &&<div className='j key key5'>J</div>}
          <div className='k key'>K</div>
          {stateA==="k" &&<div className='k key key2'>K</div>}
          {stateB==="k" &&<div className='k key key3'>K</div>}
          {stateC.includes("k") &&<div className='k key key4'>K</div>}
          {stateD==="k" &&<div className='k key key5'>K</div>}
          <div className='l key'>L</div>
          {stateA==="l" &&<div className='l key key2'>L</div>}
          {stateB==="l" &&<div className='l key key3'>L</div>}
          {stateC.includes("l") &&<div className='l key key4'>L</div>}
          {stateD==="l" &&<div className='l key key5'>L</div>}
          <div className='z key'>Z</div>
          {stateA==="z" &&<div className='z key key2'>Z</div>}
          {stateB==="z" &&<div className='z key key3'>Z</div>}
          {stateC.includes("z") &&<div className='z key key4'>Z</div>}
          {stateD==="z" &&<div className='z key key5'>Z</div>}
          <div className='x key'>X</div>
          {stateA==="x" &&<div className='x key key2'>X</div>}
          {stateB==="x" &&<div className='x key key3'>X</div>}
          {stateC.includes("x") &&<div className='x key key4'>X</div>}
          {stateD==="x" &&<div className='x key key5'>X</div>}
          <div className='c key'>C</div>
          {stateA==="c" &&<div className='c key key2'>C</div>}
          {stateB==="c" &&<div className='c key key3'>C</div>}
          {stateC.includes("c") &&<div className='c key key4'>C</div>}
          {stateD==="c" &&<div className='c key key5'>C</div>}
          <div className='v key'>V</div>
          {stateA==="v" &&<div className='v key key2'>V</div>}
          {stateB==="v" &&<div className='v key key3'>V</div>}
          {stateC.includes("v") &&<div className='v key key4'>V</div>}
          {stateD==="v" &&<div className='v key key5'>V</div>}
          <div className='b key'>B</div>
          {stateA==="b" &&<div className='b key key2'>B</div>}
          {stateB==="b" &&<div className='b key key3'>B</div>}
          {stateC.includes("b") &&<div className='b key key4'>B</div>}
          {stateD==="b" &&<div className='b key key5'>B</div>}
          <div className='n key'>N</div>
          {stateA==="n" &&<div className='n key key2'>N</div>}
          {stateB==="n" &&<div className='n key key3'>N</div>}
          {stateC.includes("n") &&<div className='n key key4'>N</div>}
          {stateD==="n" &&<div className='n key key5'>N</div>}
          <div className='m key'>M</div>
          {stateA==="m" &&<div className='m key key2'>M</div>}
          {stateB==="m" &&<div className='m key key3'>M</div>}
          {stateC.includes("m") &&<div className='m key key4'>M</div>}
          {stateD==="m" &&<div className='m key key5'>M</div>}

          <div className='_1 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?"!":"1"}</div>
          {(stateE&&stateA==="!")||(!stateE && stateA==="1")? (<div className='_1 key key2'>{stateE?"!":"1"}</div>):null}
          {(stateE&&stateB==="!")||(!stateE && stateB==="1")? (<div className='_1 key key3'></div>):null}
          {(stateE&&stateD==="!")||(!stateE && stateD==="1")? (<div className='_1 key key5'>{stateE?"!":"1"}</div>):null}
          <div className='_2 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?'"':"2"}</div>
          {(stateE&&stateA==='"')||(!stateE && stateA==="2")? (<div className='_2 key key2'>{stateE?'"':"2"}</div>):null}
          {(stateE&&stateB==='"')||(!stateE && stateB==="2")? (<div className='_2 key key3'>{stateE?'"':"2"}</div>):null}
          {(stateE&&stateD==='"')||(!stateE && stateD==="2")? (<div className='_2 key key5'>{stateE?'"':"2"}</div>):null}
          <div className='_3 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?'#':"3"}</div>
          {(stateE&&stateA==='#')||(!stateE && stateA==="3")? (<div className='_3 key key2'>{stateE?'#':"3"}</div>):null}
          {(stateE&&stateB==='#')||(!stateE && stateB==="3")? (<div className='_3 key key3'>{stateE?'#':"3"}</div>):null}
          {(stateE&&stateD==='#')||(!stateE && stateD==="3")? (<div className='_3 key key5'>{stateE?'#':"3"}</div>):null}
          <div className='_4 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?'$':"4"}</div>
          {(stateE&&stateA==='$')||(!stateE && stateA==="4")? (<div className='_4 key key2'>{stateE?'$':"4"}</div>):null}
          {(stateE&&stateB==='$')||(!stateE && stateB==="4")? (<div className='_4 key key3'>{stateE?'$':"4"}</div>):null}
          {(stateE&&stateD==='$')||(!stateE && stateD==="4")? (<div className='_4 key key5'>{stateE?'$':"4"}</div>):null}
          <div className='_5 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?'%':"5"}</div>
          {stateA==="5" &&<div className='_5 key key2'>5</div>}
          {stateB==="5" &&<div className='_5 key key3'>5</div>}
          {stateC.includes("5") &&<div className='_5 key key4'>5</div>}
          {stateD==="5" &&<div className='_5 key key5'>5</div>}
          <div className='_6 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>{stateE?'&':"6"}</div>
          {stateA==="6" &&<div className='_6 key key2'>6</div>}
          {stateB==="6" &&<div className='_6 key key3'>6</div>}
          {stateC.includes("6") &&<div className='_6 key key4'>6</div>}
          {stateD==="6" &&<div className='_6 key key5'>6</div>}
          <div className='_7 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .11s'}}>{stateE?"'":"7"}</div>
          {stateA==="7" &&<div className='_7 key key2'>7</div>}
          {stateB==="7" &&<div className='_7 key key3'>7</div>}
          {stateC.includes("7") &&<div className='_7 key key4'>7</div>}
          {stateD==="7" &&<div className='_7 key key5'>7</div>}
          <div className='_8 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .12s'}}>{stateE?'(':"8"}</div>
          {stateA==="8" &&<div className='_8 key key2'>8</div>}
          {stateB==="8" &&<div className='_8 key key3'>8</div>}
          {stateC.includes("8") &&<div className='_8 key key4'>8</div>}
          {stateD==="8" &&<div className='_8 key key5'>8</div>}
          <div className='_9 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .13s'}}>{stateE?')':"9"}</div>
          {stateA==="9" &&<div className='_9 key key2'>9</div>}
          {stateB==="9" &&<div className='_9 key key3'>9</div>}
          {stateC.includes("9") &&<div className='_9 key key4'>9</div>}
          {stateD==="9" &&<div className='_9 key key5'>9</div>}
          <div className='_0 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .14s'}}>{stateE?'':"0"}</div>
          {stateA==="0" &&<div className='_0 key key2'>0</div>}
          {(stateB==='0')? (<div className='_0 key key3'>{stateE?'':"0"}</div>):null}
          {stateC.includes("0") &&<div className='_0 key key4'>0</div>}
          {stateD==="0" &&<div className='_0 key key5'>0</div>}
          <div className='_- key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .15s'}}>{stateE?'=':"-"}</div>
          {stateA==="-" &&<div className='_- key key2'>-</div>}
          {stateB==="-" &&<div className='_- key key3'>-</div>}
          {stateC.includes("-") &&<div className='_- key key4'>-</div>}
          {stateD==="-" &&<div className='_- key key5'>-</div>}
          <div className='hat key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .16s'}}>{stateE?'~':"^"}</div>
          {stateA==="^" &&<div className='hat key key2'>^</div>}
          {stateB==="^" &&<div className='hat key key3'>^</div>}
          {stateC.includes("^") &&<div className='hat key key4'>^</div>}
          {stateD==="^" &&<div className='hat key key5'>^</div>}
          {/* <div className='￥ backslash_key'>￥</div>
          {stateA==="\\" &&<div className='￥ backslash_key key2'>￥</div>}
          {stateB==="\\" &&<div className='￥ backslash_key key3'>￥</div>}
          {stateC.includes("\\") &&<div className='￥ backslash_key key4'>￥</div>}
          {stateD==="\\" &&<div className='￥ backslash_key key5'>￥</div>} */}
          <div className='＠ key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .16s'}}>{stateE?'`':"@"}</div>
          {stateA==="@" &&<div className='＠ key key2'>@</div>}
          {stateB==="@" &&<div className='＠ key key3'>@</div>}
          {stateC.includes("@") &&<div className='＠ key key4'>@</div>}
          {stateD==="@" &&<div className='＠ key key5'>@</div>}
          <div className='「 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .17s'}}>{stateE?'{':"["}</div>
          {stateA==="[" &&<div className='「 key key2'>[</div>}
          {stateB==="[" &&<div className='「 key key3'>[</div>}
          {stateC.includes("[") &&<div className='「 key key4'>[</div>}
          {stateD==="[" &&<div className='「 key key5'>[</div>}
          <div className='； key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .18s'}}>{stateE?'+':";"}</div>
          {stateA===";" &&<div className='； key key2'>;</div>}
          {stateB===";" &&<div className='； key key3'>;</div>}
          {stateC.includes(";") &&<div className='； key key4'>;</div>}
          {stateD===";" &&<div className='； key key5'>;</div>}
          <div className='： key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .17s'}}>{stateE?'*':":"}</div>
          {stateA===":" &&<div className='： key key2'>:</div>}
          {stateB===":" &&<div className='： key key3'>:</div>}
          {stateC.includes(":") &&<div className='： key key4'>:</div>}
          {stateD===":" &&<div className='： key key5'>:</div>}
          <div className='」 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .18s'}}>{stateE?'}':"]"}</div>
          {stateA==="]" &&<div className='」 key key2'>]</div>}
          {stateB==="]" &&<div className='」 key key3'>]</div>}
          {stateC.includes("]") &&<div className='」 key key4'>]</div>}
          {stateD==="]" &&<div className='」 key key5'>]</div>}
          <div className='comma key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .20s'}}>{stateE?'<':","}</div>
          {stateA==="," &&<div className='comma key key2'>,</div>}
          {stateB==="," &&<div className='comma key key3'>,</div>}
          {stateC.includes(",") &&<div className='comma key key4'>,</div>}
          {stateD==="," &&<div className='comma key key5'>,</div>}
          <div className='period key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .19s'}}>{stateE?'>':"."}</div>
          {stateA==="." &&<div className='period key key2'>.</div>}
          {stateB==="." &&<div className='period key key3'>.</div>}
          {stateC.includes(".") &&<div className='period key key4'>.</div>}
          {stateD==="." &&<div className='period key key5'>.</div>}
          <div className='・ key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .18s'}}>{stateE?'?':"/"}</div>
          {stateA==="/" &&<div className='・ key key2'>/</div>}
          {stateB==="/" &&<div className='・ key key3'>/</div>}
          {stateC.includes("/") &&<div className='・ key key4'>/</div>}
          {stateD==="/" &&<div className='・ key key5'>/</div>}
          <div className='backslash key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .18s'}}>{stateE?'_':"\\"}</div>
          {stateA==="\\" &&<div className='backslash key key2'>\</div>}
          {stateB==="\\" &&<div className='backslash key key3'>\</div>}
          {stateC.includes("\\") &&<div className='backslash key key4'>\</div>}
          {stateD==="\\" &&<div className='backslash key key5'>\</div>}
          {/* <div className='_1 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .05s'}}>!</div>
          {stateA==="!" &&<div className='_1 key key2'>!</div>}
          {stateB==="!" &&<div className='_1 key key3'>!</div>}
          {stateC.includes("!") &&<div className='_1 key key4'>!</div>}
          {stateD==="!" &&<div className='_1 key key5'>!</div>}
          <div className='_2 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .06s'}}>"</div>
          {stateA==='"' &&<div className='_2 key key2'>"</div>}
          {stateB==='"' &&<div className='_2 key key3'>"</div>}
          {stateC.includes('"') &&<div className='_2 key key4'>"</div>}
          {stateD==='"' &&<div className='_2 key key5'>"</div>}
          <div className='_3 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .07s'}}>#</div>
          {stateA==="#" &&<div className='_3 key key2'>#</div>}
          {stateB==="#" &&<div className='_3 key key3'>#</div>}
          {stateC.includes("#") &&<div className='_3 key key4'>#</div>}
          {stateD==="#" &&<div className='_3 key key5'>#</div>}
          <div className='_4 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .08s'}}>$</div>
          {stateA==="$" &&<div className='_4 key key2'>$</div>}
          {stateB==="$" &&<div className='_4 key key3'>$</div>}
          {stateC.includes("$") &&<div className='_4 key key4'>$</div>}
          {stateD==="$" &&<div className='_4 key key5'>$</div>} */}
          {/* <div className='_5 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .09s'}}>%</div> */}
          {stateA==="%" &&<div className='_5 key key2'>%</div>}
          {stateB==="%" &&<div className='_5 key key3'>%</div>}
          {/* {stateC.includes("%") &&<div className='_5 key key4'>%</div>} */}
          {stateD==="%" &&<div className='_5 key key5'>%</div>}
          {/* <div className='_6 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .1s'}}>&</div> */}
          {stateA==="&" &&<div className='_6 key key2'>&</div>}
          {stateB==="&" &&<div className='_6 key key3'>&</div>}
          {/* {stateC.includes("&") &&<div className='_6 key key4'>&</div>} */}
          {stateD==="&" &&<div className='_6 key key5'>&</div>}
          {/* <div className='_7 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .11s'}}>'</div> */}
          {stateA==="'" &&<div className='_7 key key2'>'</div>}
          {stateB==="'" &&<div className='_7 key key3'>'</div>}
          {/* {stateC.includes("'") &&<div className='_7 key key4'>'</div>} */}
          {stateD==="'" &&<div className='_7 key key5'>'</div>}
          {/* <div className='_8 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .12s'}}>(</div> */}
          {stateA==="(" &&<div className='_8 key key2'>(</div>}
          {stateB==="(" &&<div className='_8 key key3'>(</div>}
          {/* {stateC.includes("(") &&<div className='_8 key key4'>(</div>} */}
          {stateD==="(" &&<div className='_8 key key5'>(</div>}
          {/* <div className='_9 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .13s'}}>)</div> */}
          {stateA===")" &&<div className='_9 key key2'>)</div>}
          {stateB===")" &&<div className='_9 key key3'>)</div>}
          {/* {stateC.includes(")") &&<div className='_9 key key4'>)</div>} */}
          {stateD===")" &&<div className='_9 key key5'>)</div>}
          {/* <div className='_0 key' style={{transform : `rotateX(${rotate}deg)` , transition: 'all .14s'}}></div> */}
          {stateA==="0" &&<div className='_0 key key2'></div>}
          {/* {stateB==="0" &&<div className='_0 key key3'></div>} */}
          {/* {stateC.includes("0") &&<div className='_0 key key4'></div>} */}
          {stateD==="0" &&<div className='_0 key key5'></div>}
          {/* <div className='_- key'>=</div> */}
          {stateA==="=" &&<div className='_- key key2'>=</div>}
          {stateB==="=" &&<div className='_- key key3'>=</div>}
          {/* {stateC.includes("=") &&<div className='_- key key4'>=</div>} */}
          {stateD==="=" &&<div className='_- key key5'>=</div>}
          {/* <div className='hat key'>~</div> */}
          {stateA==="~" &&<div className='hat key key2'>~</div>}
          {stateB==="~" &&<div className='hat key key3'>~</div>}
          {/* {stateC.includes("~") &&<div className='hat key key4'>~</div>} */}
          {stateD==="~" &&<div className='hat key key5'>~</div>}
          {/* <div className='￥ backslash_key'>￥</div> */}
          {/* {stateA==="\\" &&<div className='￥ backslash_key key2'>￥</div>} */}
          {/* {stateB==="\\" &&<div className='￥ backslash_key key3'>￥</div>} */}
          {/* {stateC.includes("\\") &&<div className='￥ backslash_key key4'>￥</div>} */}
          {/* {stateD==="\\" &&<div className='￥ backslash_key key5'>￥</div>} */}
          {/* <div className='＠ key'>`</div> */}
          {stateA==="`" &&<div className='＠ key key2'>`</div>}
          {stateB==="`" &&<div className='＠ key key3'>`</div>}
          {/* {stateC.includes("`") &&<div className='＠ key key4'>`</div>} */}
          {stateD==="`" &&<div className='＠ key key5'>`</div>}
          {/* <div className='「 key'>{"{"}</div> */}
          {stateA==="{" &&<div className='「 key key2'>{"{"}</div>}
          {stateB==="{" &&<div className='「 key key3'>{"{"}</div>}
          {/* {stateC.includes("{") &&<div className='「 key key4'>{"{"}</div>} */}
          {stateD==="{" &&<div className='「 key key5'>{"{"}</div>}
          {/* <div className='； key'>+</div> */}
          {stateA==="+" &&<div className='； key key2'>+</div>}
          {stateB==="+" &&<div className='； key key3'>+</div>}
          {/* {stateC.includes("+") &&<div className='； key key4'>+</div>} */}
          {stateD==="+" &&<div className='； key key5'>+</div>}
          {/* <div className='： key'>*</div> */}
          {stateA==="*" &&<div className='： key key2'>*</div>}
          {stateB==="*" &&<div className='： key key3'>*</div>}
          {/* {stateC.includes("*") &&<div className='： key key4'>*</div>} */}
          {stateD==="*" &&<div className='： key key5'>*</div>}
          {/* <div className='」 key'>{"}"}</div> */}
          {stateA==="}" &&<div className='」 key key2'>{"}"}</div>}
          {stateB==="}" &&<div className='」 key key3'>{"}"}</div>}
          {/* {stateC.includes("}") &&<div className='」 key key4'>{"}"}</div>} */}
          {stateD==="}" &&<div className='」 key key5'>{"}"}</div>}
          {/* <div className='comma key'>{"<"}</div> */}
          {stateA==="<" &&<div className='comma key key2'>{"<"}</div>}
          {stateB==="<" &&<div className='comma key key3'>{"<"}</div>}
          {/* {stateC.includes("<") &&<div className='comma key key4'>{"<"}</div>} */}
          {stateD==="<" &&<div className='comma key key5'>{"<"}</div>}
          {/* <div className='period key'>{">"}</div> */}
          {stateA===">" &&<div className='period key key2'>{">"}</div>}
          {stateB===">" &&<div className='period key key3'>{">"}</div>}
          {/* {stateC.includes(">") &&<div className='period key key4'>{">"}</div>} */}
          {stateD===">" &&<div className='period key key5'>{">"}</div>}
          {/* <div className='・ key'>?</div> */}
          {stateA==="?" &&<div className='・ key key2'>?</div>}
          {stateB==="?" &&<div className='・ key key3'>?</div>}
          {/* {stateC.includes("?") &&<div className='・ key key4'>?</div>} */}
          {stateD==="?" &&<div className='・ key key5'>?</div>}
          {/* <div className='backslash key'>_</div> */}
          {stateA==="_" &&<div className='backslash key key2'>_</div>}
          {stateB==="_" &&<div className='backslash key key3'>_</div>}
          {/* {stateC.includes("_") &&<div className='backslash key key4'>_</div>} */}
          {stateD==="_" &&<div className='backslash key key5'>_</div>}
          <div style={stateS}>Hello! World!</div>
          {<div></div>}
        </div>
      </div>
    );
  }


export default KeyPressDetector;
