function toggleDescription() {
    var outputDiv = document.getElementById("output");
    var currentContent = outputDiv.innerHTML.trim();
    var description = `
        <p><strong>Опис предметного середовища для проєкту сайту для перегляду фільмів та серіалів</strong></p>
        <p><strong>Тема:</strong><br>
        Створення веб-сайту для перегляду популярних фільмів та серіалів онлайн з можливістю сортування за категоріями, пошуку контенту та отримання інформації про кожен фільм або серіал.</p>

        <p><strong>Мета:</strong><br>
        Розробити інтерактивний веб-сайт, де користувачі зможуть переглядати популярні фільми та серіали онлайн, дізнаватися більше про кожен контент (опис, жанр, рік випуску), а також використовувати різні фільтри та категорії для зручного пошуку. Сайт повинен мати простий і зручний інтерфейс, який адаптується до різних типів пристроїв (десктопів, планшетів, смартфонів).</p>

        <p><strong>Опис бізнес-логіки:</strong></p>
        <ul>
            <li>Контент (фільми та серіали): Сайт показує користувачам список популярних фільмів та серіалів. Кожен фільм/серіал має постер, назву, рік випуску та жанр.</li>
            <li>Категорії: Фільми та серіали поділені на жанрові категорії.</li>
            <li>Пошук: Сайт надає можливість пошуку контенту за назвою.</li>
            <li>Список популярного контенту: Відображаються найпопулярніші фільми та серіали.</li>
            <li>Підтримка користувачів: Сайт надає технічну підтримку та посилання на FAQ.</li>
        </ul>

        <p><strong>Сценарій користування:</strong></p>
        <ol>
            <li>Користувач заходить на сайт і бачить категорії популярних фільмів та серіалів.</li>
            <li>Користувач може натиснути на постер фільму/серіалу для перегляду детальної інформації.</li>
            <li>Функція пошуку дозволяє знайти конкретний фільм або серіал за назвою.</li>
            <li>Користувач може сортувати контент за категоріями, як-от: Фантастика, Драма тощо.</li>
            <li>Користувач може звернутися до підтримки або переглянути FAQ.</li>
        </ol>
    `;
    outputDiv.innerHTML = (currentContent === '<p>Місце виведення інформації</p>' || currentContent === '') ? description : '<p>Місце виведення інформації</p>';
}

function showTopicDetails() {
    var outputDiv = document.getElementById("output");
    var topicDetails = `
       <p><strong>Тема:</strong> СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.<br>
        РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.<br><br>
        <strong>Мета:</strong> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.<br>
        Створити шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.<br><br>
        <strong>Місце розташування:</strong> <a href="https://github.com/klynxlx/linnyk_lab1" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://klynxlx.github.io/linnyk_lab1/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="https://github.com/klynxlx/Linnyk_Katya_IndependentWork" target="_blank">посилання на репозиторій самостійної роботи</a><br>
        <a href="https://klynxlx.github.io/Linnyk_Katya_IndependentWork/" target="_blank">посилання на живу сторінку самостійної роботи</a>
    `;
    outputDiv.innerHTML = topicDetails;
}

function showTableCode() {
    var outputDiv = document.getElementById("output");
    var tableCode = `
        <img src="./images/photo_2024-09-26_19-01-49.jpg" alt="Placeholder Image" width="300">
        <img src="./images/photo_2024-09-26_19-01-59.jpg" alt="Placeholder Image" width="1000">
    `;
    outputDiv.innerHTML = tableCode;
}

function showListCode() {
    var outputDiv = document.getElementById("output");
    var listCode = `
        <img src="./images/photo_2024-09-26_19-05-50.jpg" alt="Placeholder Image" width="300">
        <img src="./images/photo_2024-09-26_19-05-55.jpg" alt="Placeholder Image" width="300">
    `;
    outputDiv.innerHTML = listCode;
}

function showImage() {
    var outputDiv = document.getElementById("output");
    var imageCode = `
        <img src="./images/photo_2024-09-20_12-46-05.jpg" alt="Placeholder Image" width="300">
    `;
    outputDiv.innerHTML = imageCode;
}

function showConclusion() {
    var outputDiv = document.getElementById("output");
    var conclusion = `
        <p><strong>Висновок:</strong> Під час виконання ЛР №1 я набула практичних навичок зі створення структури HTML-документу та роботи з таблицями, списками, зображеннями.</p>
    `;
    outputDiv.innerHTML = conclusion;
}