const ul = document.querySelector("#chat-list");
const msg_box = document.querySelector("#msg-box");

const SEND = 0;
const RECEIVE = 1;

const contact = [{
    "name": "tuuna",
    "description": "will be..."
}, {
    "name": "kissesy",
    "description": "will be..."
}, {
    "name": "root",
    "description": "will be..."
}];

const chat_list = {
    "tuuna": [{
            "content": "i see book",
            "time": "11:01 AM",
            "date": "June 6",
            "type": SEND
        },
        {
            "content": "i see book",
            "time": "11:01 AM",
            "date": "June 6",
            "type": RECEIVE
        }
    ],
    "kissesy": [{
            "content": "i see book",
            "time": "11:01 AM",
            "date": "June 6",
            "type": RECEIVE
        },
        {
            "content": "i see book",
            "time": "11:01 AM",
            "date": "June 6",
            "type": SEND
        }
    ]
}


function init() {
    load_contact();
    load_chat();
}

function load_contact() {
    contact.forEach(function(e) {
        const li = document.createElement("li");
        const strong = document.createElement("strong");
        const p = document.createElement("p");
        const img = document.createElement("img");
        const div = document.createElement("div");

        img.setAttribute("class", "img-circle media-object pull-left");
        img.setAttribute("src", "assets/img/avatar.jpg");
        img.setAttribute("width", 32);
        img.setAttribute("height", 32);

        div.setAttribute("class", "media-body");
        li.setAttribute("class", "list-group-item");
        //li.setAttribute("id", "contact-item");
        li.addEventListener("click", do_chat);
        strong.innerText = e['name'];
        p.innerText = e['description'];
        //div.setAttribute("id", "contact");
        div.appendChild(img);
        div.appendChild(strong);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

function getElement() {
    let element = document.querySelector('li.list-group-item.select');
    return element ? element : undefined;
}

function setActive(what_element) {
    let element = getElement();
    if (element === undefined) {
        return;
    }
    element.classList.toggle("select");
    what_element.classList.toggle("select");
}

/*
<div class="outgoing_msg">
        <div class="sent_msg">
            <p>Apollo University, Delhi, India Test</p>
            <span class="time_date"> 11:01 AM    |    Today</span> </div>
    </div>
    <div class="incoming_msg">
        <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
        <div class="received_msg">
            <div class="received_withd_msg">
                <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                <span class="time_date"> 11:01 AM    |    Today</span></div>
        </div>
    </div>
 */
function load_chat() {
    chat_list['tuuna'].forEach(function(e) {
        const type_div = document.createElement("div");
        const profile_div = document.createElement("div");
        const profile = document.createElement("img");
        const msg_div = document.createElement("div");
        const msg_with_div = document.createElement("div");
        const msg = document.createElement("p");
        const date = document.createElement("span");
        date.setAttribute("class", "time_date");
        msg.innerText = e['content'];
        date.innerText = e['time'] + "    |    " + e['date'];
        if (e['type'] === SEND) {
            msg_div.appendChild(msg);
            msg_div.appendChild(date);
            type_div.setAttribute("class", "outgoing_msg");
            msg_div.setAttribute("class", "sent_msg");

            type_div.appendChild(msg_div);
        } else {
            msg_with_div.appendChild(msg);
            msg_with_div.appendChild(date);
            type_div.setAttribute("class", "incoming_msg");
            profile_div.setAttribute("class", "incoming_msg_img");
            profile.setAttribute("src", "https://ptetutorials.com/images/user-profile.png");
            profile.setAttribute("alt", "tuuna");
            msg_div.setAttribute("class", "received_msg");
            msg_with_div.setAttribute("class", "received_withd_msg");

            msg_div.appendChild(msg_with_div);
            profile_div.appendChild(profile);
            type_div.appendChild(profile_div);
            type_div.appendChild(msg_div);

        }
        msg_box.appendChild(type_div);
    });
}

function do_chat(event) {
    //console.log("Hello world");
    console.log(event.target);

}

init();