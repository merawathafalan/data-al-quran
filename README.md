# Data Al-Quran

Raw data Al-Quran yang digunakan sebagai sumber data.

## Data Tersedia

- [List Surah](./surah.json)
- [List Ayat Quran](./quran.json)

## Cara Menjalankan

Install Bun terlebih dahulu di [bun.sh](https://bun.sh/).

```bash
bun script/index.ts
```

## Sumber

- `https://api.qurancdn.com/api/qdc/chapters`
- `https://api.qurancdn.com/api/qdc/verses/by_juz/{id}`
