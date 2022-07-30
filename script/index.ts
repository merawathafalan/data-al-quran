import * as fs from "fs";

interface Quran {
  verses: any[];
}

async function getJuz() {
  const quran: Quran = {
    verses: [],
  };
  for (let juz = 1; juz <= 30; juz++) {
    console.log(`Fetch data juz ${juz}`);
    const data = await fetch(
      `https://api.qurancdn.com/api/qdc/verses/by_juz/${juz.toString()}?fields=chapter_id,text_imlaei,text_uthmani,verse_key&per_page=100000`,
    ).then((resp) => resp.json());
    quran.verses.push(...data.verses);
  }

  fs.writeFileSync("./quran.json", JSON.stringify(quran, null, 2), "utf8");
}

async function getSurah() {
  console.log(`Fetch data list surah`);
  const data = await fetch("https://api.qurancdn.com/api/qdc/chapters").then(
    (resp) => resp.json(),
  );
  fs.writeFileSync("./surah.json", JSON.stringify(data, null, 2), "utf8");
}

getSurah();
getJuz();
