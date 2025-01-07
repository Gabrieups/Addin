// Office.onReady((info) => {
//     if (info.host === Office.HostType.Outlook) {
//         getSSOToken();
//     }
// });


// function getSSOToken(){
//     try{
//         Office.auth.getAccessToken({allowSignInPrompt: true, forMSGraphAccess: true, allowConsentPrompt: true }, (result) => {

//             console.log("ó o resultado:", result)
//             if(result.status === Office.AsyncResultStatus.Succeeded){
//                 const accessToken = result.value;
    
//                 console.log("ó o token:", token)
                
//                 sendToken(accessToken);
//             } else {
//                 console.error(result.error.message);
//             }
//         });
//     }
//     catch (exception) {
//         console.log(`Failed to get token. Error: ${JSON.stringify(exception)}`);
//     }
// }

// async function sendToken(token) {
//     try {
//         const response = await fetch('https://localhost:44339/api/UserData/user-data', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ token }),
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log("Resposta do backend:", data);
//         } else {
//             console.error("Erro ao enviar token para o backend:", response.statusText);
//         }
//     } catch (error) {
//         console.error("Erro na requisição:", error);
//     }
// }