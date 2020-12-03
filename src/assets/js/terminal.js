const terminal_input = document.querySelector("#terminal-input");
terminal_input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const ul = document.querySelector("#top-bar-ul");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.setAttribute("class", "terminal-content");
        p.innerText = "tuuna@tuuna#" + terminal_input.value;
        li.appendChild(p);
        ul.appendChild(li);
        terminal_input.value = "";
    }
});