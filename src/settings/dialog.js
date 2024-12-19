Office.initialize(function (){
    getSSOToken();
});

function getSSOToken(){
    OfficeRuntime.auth.getAccessToken({allowSignInPrompt: true})
    .then((token) => {
        return fetch("link.com", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }).then(response => response.json())
}