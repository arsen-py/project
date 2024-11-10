const select = document.querySelector("select");
const allLang = ["en", "ru", "arm"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

// Changes the language
function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1); // Gets hash(ru,arm,en)
    if (!allLang.includes(hash)) {
        // If anything except (en,ru,arm) --> go to #en
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector("#lng-" + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
            // Changes our element to "hash" language
        }
    }
}

changeLanguage();
