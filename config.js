let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = localStorage.getItem("apiKey");

if (!apiKey) {
    window.open("enter-api-key.html", "_self");
}

