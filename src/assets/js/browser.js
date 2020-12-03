const button = document.querySelector("#search-button");

const result = [{
    "Title": "[단독]백신 성공적인 접종!",
    "Content": "A기업에서 만든 백신이 성공적인 임상실험을 보여주어...",
    "Date": "2020.12.03 15:32:12",
    "Author": "kissesy"
}, {
    "Title": "[단독]백신 성공적인 접종!",
    "Content": "A기업에서 만든 백신이 성공적인 임상실험을 보여주어...",
    "Date": "2020.12.03 15:32:12",
    "Author": "kissesy"
}, {
    "Title": "[단독]백신 성공적인 접종!",
    "Content": "A기업에서 만든 백신이 성공적인 임상실험을 보여주어...",
    "Date": "2020.12.03 15:32:12",
    "Author": "kissesy"
}]

function do_search() {
    const search = document.querySelector("#search-box");
    console.log("search : " + search.value);
    fill_resultPage();
}

/*
검색결과창을 클릭하면 해당 페이지가 오픈됨. 
템플릿형식으로 진행하여야 할듯...
*/
function open_page() {
    console.log("Hello world");
}

function fill_resultPage() {
    const ul = document.querySelector("#browser-list");
    ul.innerHTML = "";
    result.forEach(function(e) {
        const li = document.createElement("li");
        const title = document.createElement("H1");
        const content = document.createElement("p");
        const date_author = document.createElement("p");

        li.addEventListener("click", open_page);

        title.setAttribute("class", "Title");
        content.setAttribute("class", "Content");
        date_author.setAttribute("class", "date_author");
        title.innerText = e['Title'];
        content.innerText = e['Content'];
        date_author.innerText = e['Date'] + " - " + e['Author'];
        li.appendChild(title);
        li.appendChild(content);
        li.appendChild(date_author);
        ul.appendChild(li);
    });
}

function init() {
    button.addEventListener("click", do_search);
}

init();