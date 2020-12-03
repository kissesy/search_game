const table = document.querySelector(".table-striped");
const tbody = table.querySelector("tbody");

const send = document.querySelector("#send");
const receive = document.querySelector("#receive");
const download = document.querySelector("#download");


function init() {
    if (send) {
        send.addEventListener("click", SendMail);
    }
    if (receive) {
        receive.addEventListener("click", ReceiveMail);
    }
    if (download) {
        download.addEventListener("click", DownloadMail);
    }

}

const sendMail = [{
    "Title": "Start Tutorial",
    "Data": "Oct 13, 2015",
    "Author": "tuuna",
    "Read": "Oct 15, 2015"
}, {
    "Title": "Start Tutorial",
    "Data": "Oct 13, 2015",
    "Author": "tuuna",
    "Read": "Oct 15, 2015"
}];

const receiveMail = [];

const Download = [];

const Chatting = [];



function getElement() {
    let element = document.querySelector('span.nav-group-item.active');
    return element ? element : undefined;
}

function setActive(what_element) {
    let element = getElement();
    if (element === undefined) {
        return;
    }
    element.classList.toggle("active");
    what_element.classList.toggle("active");
    /*
        4개의 태그에서 active 클래스가 있는 것을 찾아서 빼고 
        클릭한 태그에 추가함.
    */
}

function SendMail() {
    setActive(send);
    tbody.innerHTML = "";
    sendMail.forEach(function(e) {
        const tr = document.createElement('tr'); //tr addEventListener
        tr.addEventListener("click", ShowDetail);
        for (let key in e) {
            const tmp = document.createElement('td');
            tmp.innerText = e[key];
            tr.appendChild(tmp);
        }
        tbody.appendChild(tr);
    });

}

function ReceiveMail() {
    setActive(receive);
}

function DownloadMail() {
    setActive(download);
}

// 보여주고 뒤로가기 버튼도 만들어야 함. 
function ShowDetail() {
    console.log("Hello World");
}

init();