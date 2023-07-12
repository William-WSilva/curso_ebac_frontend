document.addEventListener("DOMContentLoaded", function(){
    const name = document.querySelector("#name");
    const userName = document.querySelector("#username");
    const avatar = document.querySelector("#avatar");
    const repositorio = document.querySelector("#repos");
    const followers = document.querySelector("#followers");
    const following = document.querySelector("#following");
    const link = document.querySelector("#link");
    
    fetch("https://api.github.com/users/William-WSilva")
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        userName.innerText = json.login;
        avatar.src = json.avatar_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
        repositorio.innerText = json.public_repos;
        link.href = json.html_url;
    })
    .catch(function(erro){
        alert("ocorreu um erro ao buscar o endereço, tente novamente mais tarde");
    })
})