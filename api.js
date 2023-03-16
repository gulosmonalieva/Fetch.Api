const output = document.querySelector(".output");

function get() {
  fetch("https://api.github.com/users")
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((users) => {
      users.forEach((user) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const a = document.createElement("a");
        const button = document.createElement("button");

        output.appendChild(div);
        div.appendChild(img);
        div.appendChild(title);

        div.appendChild(button);
        button.appendChild(a);

        img.setAttribute("src", user.avatar_url);
        title.innerText = `${
          user.login[1].toUpperCase() + user.login.slice(1)
        }`;
        a.innerText = "Visit ";
        a.setAttribute("href", user.html_url);

        output.style.display = "grid";
        output.style.gridTemplateColumns = " 1fr 1fr 1fr 1fr";
        div.style.margin = "0 auto";
        div.style.backgroundColor = "#00ffff";
        div.style.padding = "20px";
        div.style.marginBottom = "20px";
        div.style.textAlign = "center";
        div.style.width = "200px";
        div.style.border = "1px solid black";
        img.style.width = "150px";
        img.style.borderRadius = "50%";
        button.style.padding = "3px 35px 3px 35px";
        button.style.fontWeight = "700";
        a.style.textDecoration = "none";
        a.style.color = "black";
        a.style.fontSize = "18px";
      });
    });
}
get();
