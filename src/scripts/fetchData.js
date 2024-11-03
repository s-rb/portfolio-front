const fetch = require("node-fetch");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const DATA_URL = "https://raw.githubusercontent.com/s-rb/site/refs/heads/master/_data/work_experience.yml";
const OUTPUT_PATH = path.resolve(__dirname, "../data/fetchedWorkExperience.json");

async function fetchData() {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        // Загружаем текст и парсим YAML в JavaScript объект
        const text = await response.text();
        const parsedData = yaml.load(text);

        // Сохраняем весь объект как есть, без изменений
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(parsedData, null, 2));
        console.log("Data successfully fetched and saved to:", OUTPUT_PATH);
    } catch (error) {
        console.log("Using default local data due to fetch error:", error.message);
    }
}

fetchData();