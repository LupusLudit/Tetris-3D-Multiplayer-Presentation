let translations = {};

async function loadTranslations() {
    const response = await fetch("../assets/data/translations.json");
    translations = await response.json();
}

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[lang][key];
    });
}

async function initLanguage() {
    await loadTranslations();
    
    const savedLang = localStorage.getItem("lang") || (navigator.language.startsWith("cs") ? "cz" : "en");
    setLanguage(savedLang);
}

document.addEventListener("DOMContentLoaded", initLanguage);