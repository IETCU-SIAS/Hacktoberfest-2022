const root = document.getElementById("root");

function makeCard(dp,login,name)
{
    return( 
        `<a class="card" href="https://github.com/${login}">
            <img src="${dp}" width="230px" ></img>
            <h4>${name || login}</h4>
        </a>
        `
    )
}

async function getData(usersIDs)
{
    root.innerHTML = "";

    for(const userID of usersIDs)
    {
        const data = await fetch(`https://api.github.com/users/${userID}`);
        const user = await data.json();
        
        const card = makeCard(user.avatar_url, user.login, user.name)
        root.innerHTML += card;
    }
}

getData(GitHubIds);
