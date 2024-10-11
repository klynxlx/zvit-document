function showDetails3() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
<p><strong>Тема:</strong> ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
<p><strong>Мета:</strong> ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   
</p>
<p><strong>Місце розташування:</strong></p>
<ul>
    <li>Посилання на завдання №3: 
        <a href="file:///C:/Users/20060/Desktop/web/zvit-document/task%203/task3.html">file:///C:/Users/20060/Desktop/web/zvit-document/task%203/task3.html</a>
    </li>
    <li>Посилання на живу сторінку лабораторної роботи №3: 
        <a href="https://klynxlx.github.io/linnyk_lab2/">https://klynxlx.github.io/linnyk_lab2/</a>
    </li>
    <li>Посилання на репозиторій звітного HTML документу: 
        <a href="https://github.com/klynxlx/zvit-document">https://github.com/klynxlx/zvit-document</a>
    </li>
    <li>Посилання на живу сторінку звітного HTML документу: 
        <a href="https://klynxlx.github.io/zvit-document/">https://klynxlx.github.io/zvit-document/</a>
    </li>
</ul>`
;
}
function Task1() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
            <img src="./images/maket1.jpg" alt="Placeholder Image" width="700">
            <img src="./images/maket2.jpg" alt="Placeholder Image" width="700">
            <img src="./images/code1.jpg" alt="Placeholder Image" width="700">
            <img src="./images/code2.jpg" alt="Placeholder Image" width="700">`
        ;
    }
    function showFixedTable() {
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
        <a href="file:///C:/Users/20060/Desktop/web/zvit-document/lab3task2/fixedTable.html">фіксована таблична верстка</a>
        <img src="./images/Ftable.jpg" alt="Placeholder Image" width="700">
                `
            ;
        }
    function showGumTable() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="file:///C:/Users/20060/Desktop/web/zvit-document/lab3task2/GumTable.html">гумова таблична верстка</a>
            <img src="./images/Gtable.jpg" alt="Placeholder Image" width="700">
                    `
                ;
            }
    function showFixedBlock() {
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = `
                <a href="file:///C:/Users/20060/Desktop/web/zvit-document/lab3task2/fixedBlock.html">фіксована блокова верстка</a>
                <img src="./images/Fblock.jpg" alt="Placeholder Image" width="700">
                        `
                    ;
                }
    function showGumBlock() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="file:///C:/Users/20060/Desktop/web/zvit-document/lab3task2/GumBlock.html">гумова блокова верстка</a>
            <img src="./images/Gblock.jpg" alt="Placeholder Image" width="700">
                    `
                ;
            }

            function showScreenFlexbox() {
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = `
                
                
                <img src="./images/web1.jpg" alt="Placeholder Image" width="700">
                <img src="./images/web2.jpg" alt="Placeholder Image" width="700">
                <a href="file:///C:/Users/20060/Desktop/web/zvit-document/task%203/task3.html">веб-сторінка</a>
                        `
                    ;
                }
        function shoHTMLCodeFlexbox() {
                    var outputDiv = document.getElementById("output");
                    outputDiv.innerHTML = `
                    
                    
                    <img src="./images/html1.jpg" alt="Placeholder Image" width="700">
                    <img src="./images/html2.jpg" alt="Placeholder Image" width="700">
                   
                            `
                        ;
                    }

                    function showCSSCodeFlexbox() {
                        var outputDiv = document.getElementById("output");
                        outputDiv.innerHTML = `
                        
                        
                        <img src="./images/css1.jpg" alt="Placeholder Image" width="700">
                        <img src="./images/csss2.jpg" alt="Placeholder Image" width="700">
                       <img src="./images/css3.jpg" alt="Placeholder Image" width="700">
                                `
                            ;
                        }
         function showConclusion3() {
                            var outputDiv = document.getElementById("output");
                            var conclusion = `
                                <p><strong>Висновок:</strong> Під час виконання ЛР №3 я придбала практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувала переваги та недоліки типів макетів веб-сторінок, придбала практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX.    </p>
                                <p> <b>Веб-додатки на основі таблиць: </b></p>
                            <ul>
                          <li> Переваги: простота, сумісність, легке вирівнювання.</li>
                            <li> Недоліки: погана адаптивність, складність підтримки, несемантична структура.</li>

                                <p><b> Веб-додатки на основі блоків:</b></p>

                          <li>Переваги: гнучкість, адаптивність, сучасний дизайн.</li>
                          <li>Недоліки: вимагають більше знань та часу на налаштування.</li>
                          </ul>
                                `
                            ;
                            outputDiv.innerHTML = conclusion;
                        }             