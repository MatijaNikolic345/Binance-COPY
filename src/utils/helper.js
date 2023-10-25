const languages = [
  { code: "ab", name: "Abkhazian" },
  { code: "aa", name: "Afar" },
  { code: "af", name: "Afrikaans" },
  { code: "ak", name: "Akan" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "an", name: "Aragonese" },
  { code: "hy", name: "Armenian" },
  { code: "as", name: "Assamese" },
  { code: "av", name: "Avaric" },
  { code: "ae", name: "Avestan" },
  { code: "ay", name: "Aymara" },
  { code: "az", name: "Azerbaijani" },
  { code: "bm", name: "Bambara" },
  { code: "ba", name: "Bashkir" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bh", name: "Bihari languages" },
  { code: "bi", name: "Bislama" },
  { code: "bs", name: "Bosnian" },
  { code: "br", name: "Breton" },
  { code: "bg", name: "Bulgarian" },
  { code: "my", name: "Burmese" },
  { code: "ca", name: "Catalan, Valencian" },
  { code: "km", name: "Central Khmer" },
  { code: "ch", name: "Chamorro" },
  { code: "ce", name: "Chechen" },
  { code: "ny", name: "Chichewa, Chewa, Nyanja" },
  { code: "zh", name: "Chinese" },
  { code: "cu", name: "Church Slavonic, Old Bulgarian, Old Church Slavonic" },
  { code: "cv", name: "Chuvash" },
  { code: "kw", name: "Cornish" },
  { code: "co", name: "Corsican" },
  { code: "cr", name: "Cree" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "dv", name: "Divehi, Dhivehi, Maldivian" },
  { code: "nl", name: "Dutch, Flemish" },
  { code: "dz", name: "Dzongkha" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "ee", name: "Ewe" },
  { code: "fo", name: "Faroese" },
  { code: "fj", name: "Fijian" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "ff", name: "Fulah" },
  { code: "gd", name: "Gaelic, Scottish Gaelic" },
  { code: "gl", name: "Galician" },
  { code: "lg", name: "Ganda" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "ki", name: "Gikuyu, Kikuyu" },
  { code: "el", name: "Greek (Modern)" },
  { code: "kl", name: "Greenlandic, Kalaallisut" },
  { code: "gn", name: "Guarani" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian, Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "he", name: "Hebrew" },
  { code: "hz", name: "Herero" },
  { code: "hi", name: "Hindi" },
  { code: "ho", name: "Hiri Motu" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "io", name: "Ido" },
  { code: "ig", name: "Igbo" },
  { code: "id", name: "Indonesian" },
  {
    code: "ia",
    name: "Interlingua (International Auxiliary Language Association)",
  },
  { code: "ie", name: "Interlingue" },
  { code: "iu", name: "Inuktitut" },
  { code: "ik", name: "Inupiaq" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jv", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kr", name: "Kanuri" },
  { code: "ks", name: "Kashmiri" },
  { code: "kk", name: "Kazakh" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "kv", name: "Komi" },
  { code: "kg", name: "Kongo" },
  { code: "ko", name: "Korean" },
  { code: "kj", name: "Kwanyama, Kuanyama" },
  { code: "ku", name: "Kurdish" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "lb", name: "Letzeburgesch, Luxembourgish" },
  { code: "li", name: "Limburgish, Limburgan, Limburger" },
  { code: "ln", name: "Lingala" },
  { code: "lt", name: "Lithuanian" },
  { code: "lu", name: "Luba-Katanga" },
  { code: "mk", name: "Macedonian" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "gv", name: "Manx" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mh", name: "Marshallese" },
  { code: "ro", name: "Moldovan, Moldavian, Romanian" },
  { code: "mn", name: "Mongolian" },
  { code: "na", name: "Nauru" },
  { code: "nv", name: "Navajo, Navaho" },
  { code: "nd", name: "Northern Ndebele" },
  { code: "ng", name: "Ndonga" },
  { code: "ne", name: "Nepali" },
  { code: "se", name: "Northern Sami" },
  { code: "no", name: "Norwegian" },
  { code: "nb", name: "Norwegian Bokmål" },
  { code: "nn", name: "Norwegian Nynorsk" },
  { code: "ii", name: "Nuosu, Sichuan Yi" },
  { code: "oc", name: "Occitan (post 1500)" },
  { code: "oj", name: "Ojibwa" },
  { code: "or", name: "Oriya" },
  { code: "om", name: "Oromo" },
  { code: "os", name: "Ossetian, Ossetic" },
  { code: "pi", name: "Pali" },
  { code: "pa", name: "Panjabi, Punjabi" },
  { code: "ps", name: "Pashto, Pushto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "qu", name: "Quechua" },
  { code: "rm", name: "Romansh" },
  { code: "rn", name: "Rundi" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "sg", name: "Sango" },
  { code: "sa", name: "Sanskrit" },
  { code: "sc", name: "Sardinian" },
  { code: "sr", name: "Serbian" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala, Sinhalese" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "st", name: "Sotho, Southern" },
  { code: "nr", name: "South Ndebele" },
  { code: "es", name: "Spanish, Castilian" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "ss", name: "Swati" },
  { code: "sv", name: "Swedish" },
  { code: "tl", name: "Tagalog" },
  { code: "ty", name: "Tahitian" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "bo", name: "Tibetan" },
  { code: "ti", name: "Tigrinya" },
  { code: "to", name: "Tonga (Tonga Islands)" },
  { code: "ts", name: "Tsonga" },
  { code: "tn", name: "Tswana" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "tw", name: "Twi" },
  { code: "ug", name: "Uighur, Uyghur" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "uz", name: "Uzbek" },
  { code: "ve", name: "Venda" },
  { code: "vi", name: "Vietnamese" },
  { code: "vo", name: "Volap_k" },
  { code: "wa", name: "Walloon" },
  { code: "cy", name: "Welsh" },
  { code: "fy", name: "Western Frisian" },
  { code: "wo", name: "Wolof" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "za", name: "Zhuang, Chuang" },
  { code: "zu", name: "Zulu" },
];
export function getTimeUntilDate() {
  let date1 = new Date();
  let date2 = new Date("04/07/2024");

  let differenceInTime = (date2.getTime() - date1.getTime()) / 1000;

  let days = Math.floor(differenceInTime / 86400);
  differenceInTime -= days * 86400;
  let hours = Math.floor(differenceInTime / 3600) % 24;
  differenceInTime -= hours * 3600;

  let minutes = Math.floor(differenceInTime / 60) % 60;
  differenceInTime -= minutes * 60;

  let seconds = differenceInTime % 60;
  seconds = +seconds.toFixed(0);
  return { days, hours, minutes, seconds };
}

export async function getCryptoPriceAnd24hChange(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`
  );

  const data = await res.json();

  return data[id];
}
export const TradeBasicArr = ["Spot", "Margin", "P2P", "Convert & Block Trade"];
export const TradeAdvancedArr = ["Trading Bots", "Copy Trading", "APIs"];
export const FuturesArr = ["USDs-M Futures", "Coin-M Futures", "Options"];
export const SquareArr = [
  "Square",
  "Academy (Learn & Earn)",
  "Blog",
  "Research",
];
export const MoreArr = [
  "VIP & Institutional",
  "Launchpad",
  "Mining Pool",
  "Pay",
  "Loans",
  "NFT",
  "Fan Token",
  "Web3 Wallet",
  "BNB Chain",
  "Charity",
];
export const AboutUsArr = [
  "About",
  "Business Contacts",
  "Careers",
  "Announcements",
  "News",
  "Press",
  "Legal",
  "Terms",
  "Privacy",
  "Building Trust",
  "Blog",
  "Community",
  "Sitemap",
  "Risk Warning",
  "Notices",
  "Downloads",
  "Desktop Application",
];
export const ProductsArr = [
  "Exchange",
  "Buy Crypto",
  "Leveraged Tokens",
  "TradingView",
  "Pay",
  "Academy",
  "Live",
  "Tax",
  "Gift Card",
  "Launchpad",
  "Auto-Invest",
  "ETH Staking",
  "Defi Staking",
  "NFT",
  "BNB",
  "BABT",
  "Research",
  "Charity",
];
export const BusinessArr = [
  "P2P Merchant Application",
  "P2Pro Merchant Application",
  "Listing Application",
  "Institutional & VIP Services",
  "Labs",
];
export const LearnArr = [
  "Learn & Earn",
  "Browse Crypto Prices",
  "Bitcoin Price",
  "Ethereum Price",
  "Buy Bitcoin",
  "Buy BNB",
  "Buy Ripple",
  "Buy Dogecoin",
  "Buy Ethereum",
  "Buy Tradable Altcoins",
];
export const ServiceArr = [
  "Affiliate",
  "Referral",
  "OTC Trading",
  "Historical Market Data",
  "Proof of Reserves",
];
export const SupportArr = [
  "24/7 Chat Support",
  "Support Center",
  "Request a Feature",
  "Fees",
  "APIs",
  "Binance Verify",
  "Trading Rules",
  "Binance Airdrop Portal",
  "Law Enforcement Requests",
  "Binance Legal (Court Orders)",
];
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 4,
  }).format(value);

export default languages;
