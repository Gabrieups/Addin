Office.initialize(function (){
    getSSOToken();
});

function getSSOToken(){
    OfficeRuntime.auth.getAccessToken({allowSignInPrompt: true})
    .then((token) => {
        return fetch("https://localhost:44339/api/user/user-data", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }).then(response => response.json())
}