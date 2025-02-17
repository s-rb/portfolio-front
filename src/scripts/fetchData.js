const fetch = require("node-fetch");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const {wait} = require("@testing-library/user-event/dist/utils");

const DATA_URL = "https://raw.githubusercontent.com/s-rb/site/refs/heads/master/_data/cv_data.yml";
const OUTPUT_PATH = path.resolve(__dirname, "../data/fetchedWorkExperience.json");

const PROJECTS_DATA_URL = "https://raw.githubusercontent.com/s-rb/site/refs/heads/master/_data/projects.yml";
const PROJECTS_OUTPUT_PATH = path.resolve(__dirname, "../data/fetchedProjects.json");
const PROJECT_IMAGES_API_URL = "https://api.github.com/repos/s-rb/site/contents/assets/images/projects";
const PROJECT_IMAGES_OUTPUT_DIR = path.resolve(__dirname, "../../public/assets/images/projects");

const TECH_STACK_URL = "https://raw.githubusercontent.com/s-rb/site/refs/heads/master/_data/tech-stack.yml";
const TECH_STACK_OUTPUT_PATH = path.resolve(__dirname, "../data/fetchedTechStack.json");
const ICONS_API_URL = "https://api.github.com/repos/s-rb/site/contents/assets/images/icons";
const ICONS_OUTPUT_DIR = path.resolve(__dirname, "../../public/assets/images/icons");

const CV_URL = "https://github.com/s-rb/site/raw/master/assets/files/cv.pdf";
const CV_OUTPUT_PATH = path.resolve(__dirname, "../../public/cv/Roman_Surkov_CV_updated.pdf");
const TEMP_CV_OUTPUT_PATH = path.resolve(__dirname, "../data/Roman_Surkov_CV_updated.pdf");
const DEFAULT_CV_PATH = path.resolve(__dirname, "../../public/cv/Roman_Surkov_CV.pdf");

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

async function fetchProjects() {
    try {
        const response = await fetch(PROJECTS_DATA_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        // Загружаем текст и парсим YAML в JavaScript объект
        const text = await response.text();
        const parsedData = yaml.load(text);

        // Сохраняем весь объект как есть, без изменений
        fs.writeFileSync(PROJECTS_OUTPUT_PATH, JSON.stringify(parsedData, null, 2));
        console.log("Data successfully fetched and saved to:", PROJECTS_OUTPUT_PATH);
    } catch (error) {
        console.log("Using default local data due to fetch error:", error.message);
    }
}

async function fetchTechStack() {
    try {
        const response = await fetch(TECH_STACK_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        // Загружаем текст и парсим YAML в JavaScript объект
        const text = await response.text();
        const parsedData = yaml.load(text);

        // Сохраняем весь объект как есть, без изменений
        fs.writeFileSync(TECH_STACK_OUTPUT_PATH, JSON.stringify(parsedData, null, 2));
        console.log("Data successfully fetched and saved to:", TECH_STACK_OUTPUT_PATH);
    } catch (error) {
        console.log("Using default local data due to fetch error:", error.message);
    }
}

// Функция для скачивания всех иконок из папки на GitHub
async function fetchIcons() {
    try {
        // Запрос к GitHub API для получения списка файлов
        const response = await fetch(ICONS_API_URL, {
            headers: { "Accept": "application/vnd.github.v3+json" } // Указываем API-версию
        });
        if (!response.ok) throw new Error("Failed to fetch icons list from GitHub");

        const files = await response.json();

        // Проверяем, существует ли директория ICONS_OUTPUT_DIR, если нет - создаем её
        if (!fs.existsSync(ICONS_OUTPUT_DIR)) fs.mkdirSync(ICONS_OUTPUT_DIR, { recursive: true });

        // Скачиваем каждый файл, если он не существует
        for (const file of files) {
            try {
                if (file.type === "file" && file.download_url) {
                    const iconPath = path.join(ICONS_OUTPUT_DIR, file.name);

                    // Проверяем, существует ли файл с таким именем
                    if (fs.existsSync(iconPath)) {
                        console.log(`Icon ${file.name} already exists, skipping download.`);
                        continue;
                    }

                    // Если файла нет, скачиваем его
                    const iconResponse = await fetch(file.download_url);
                    if (!iconResponse.ok) throw new Error(`Failed to download icon: ${file.name}`);

                    const iconBuffer = await iconResponse.buffer();
                    fs.writeFileSync(iconPath, iconBuffer);
                    console.log(`Icon ${file.name} saved to:`, iconPath);
                }
                await wait(1000);
            } catch (ex) {
                console.error("Error fetching image: ", ex.message)
            }
        }
    } catch (error) {
        console.log("Error fetching icons:", error.message);
    }
}

// Функция для скачивания всех иконок из папки на GitHub
async function fetchProjectImages() {
    try {
        // Запрос к GitHub API для получения списка файлов
        const response = await fetch(PROJECT_IMAGES_API_URL, {
            headers: { "Accept": "application/vnd.github.v3+json" } // Указываем API-версию
        });
        if (!response.ok) throw new Error("Failed to fetch icons list from GitHub");

        const files = await response.json();

        // Проверяем, существует ли директория PROJECT_IMAGES_OUTPUT_DIR, если нет - создаем её
        if (!fs.existsSync(PROJECT_IMAGES_OUTPUT_DIR)) fs.mkdirSync(PROJECT_IMAGES_OUTPUT_DIR, { recursive: true });

        // Скачиваем каждый файл, если он не существует
        for (const file of files) {
            try {
                if (file.type === "file" && file.download_url) {
                    const iconPath = path.join(PROJECT_IMAGES_OUTPUT_DIR, file.name);

                    // Проверяем, существует ли файл с таким именем
                    if (fs.existsSync(iconPath)) {
                        console.log(`Icon ${file.name} already exists, skipping download.`);
                        continue;
                    }

                    // Если файла нет, скачиваем его
                    const iconResponse = await fetch(file.download_url);
                    if (!iconResponse.ok) throw new Error(`Failed to download icon: ${file.name}`);

                    const iconBuffer = await iconResponse.buffer();
                    fs.writeFileSync(iconPath, iconBuffer);
                    console.log(`Icon ${file.name} saved to:`, iconPath);
                }
                await wait(1000);
            } catch (ex) {
                console.error("Error fetching image: ", ex.message)
            }
        }
    } catch (error) {
        console.log("Error fetching icons:", error.message);
    }
}

// Основная функция загрузки PDF с проверкой существования файла
async function fetchCV() {
    try {
        // Запрос на скачивание CV
        const response = await fetch(CV_URL);
        if (!response.ok) throw new Error("Failed to download CV");

        // Сохранение файла, если скачивание прошло успешно
        const cvBuffer = await response.buffer();
        fs.writeFileSync(CV_OUTPUT_PATH, cvBuffer);
        fs.writeFileSync(TEMP_CV_OUTPUT_PATH, cvBuffer);
        console.log("CV file successfully downloaded and saved to:", CV_OUTPUT_PATH);
    } catch (error) {
        console.log("Error downloading CV. Using default CV file:", DEFAULT_CV_PATH);
    }
}

async function fetchAll() {
    await fetchData();
    await wait(1000);
    await fetchTechStack();
    await wait(1000);
    await fetchIcons();
    await wait(1000);
    await fetchProjects();
    await wait(1000);
    await fetchProjectImages();
    await wait(1000);
    await fetchCV();
}

fetchAll();