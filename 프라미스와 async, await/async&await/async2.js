class HttpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;

    }
}

async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
    }

    throw new HttpError(response);

}


async function demoGithubuser(){
    let user;
    while(true){
        let name = prompt("input your name",'iliakan');

        try{
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        }catch(err){
            if (err instanceof HttpError && err.response.status == 404) {
                alert("please input again");
            }else{
                throw err;
            }
        }
    }

    alert(`name:${user.name}.`);
    return user;
}

demoGithubuser();


