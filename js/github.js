/*=========================================
GitHub Repository Fetch
=========================================*/

const username = "rangaprasadalumolu"; // Change if needed

const repoContainer = document.getElementById("githubRepos");

if(repoContainer){

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)

.then(res=>res.json())

.then(repos=>{

repoContainer.innerHTML="";

repos.forEach(repo=>{

const card=document.createElement("div");

card.className="repo-card";

card.innerHTML=`

<h3>${repo.name}</h3>

<p>

${repo.description || "No description available."}

</p>

<div class="repo-info">

<span>

⭐ ${repo.stargazers_count}

</span>

<span>

🍴 ${repo.forks_count}

</span>

</div>

<div class="repo-language">

${repo.language || "Unknown"}

</div>

<a href="${repo.html_url}"

target="_blank"

class="btn">

View Repository

</a>

`;

repoContainer.appendChild(card);

});

})

.catch(()=>{

repoContainer.innerHTML=

"<h3>Unable to load repositories.</h3>";

});

}