let btnEvent;

Office.initialize = function () {
};

let settingsDialog;

function carregarPagina(event) {
  getSSOToken().then((token) =>{
    btnEvent = event;
    const url = new URI(`dialog.html?warn=1`).absoluteTo(window.location).toString();
    const dialogOptions = { width: 60, height: 80 };
  
    Office.context.ui.displayDialogAsync(url, dialogOptions, function(result) {
      settingsDialog = result.value;
      settingsDialog.addEventHandler(Office.EventType.DialogEventReceived, dialogClosed);
    })
  });
}

// Register the function.
Office.actions.associate("carregarPagina", carregarPagina);

function dialogClosed(message) {
  settingsDialog = null;
  btnEvent.completed();
  btnEvent = null;
}

async function getSSOToken(){
  try {
    const accessToken = await OfficeRuntime.auth.getAccessToken({allowConsentPrompt: true, allowSignInPrompt: true, forMSGraphAccess: true});
    console.log("Token obtido com sucesso:", accessToken);
    return accessToken;

  } catch (exception) {
    console.log(`Failed to get token. Error: ${JSON.stringify(exception)}`);
  }
}

// async function sendToken(token) {
//   try {
//       const response = await fetch('https://localhost:44339/api/UserData/user-data', {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }),
//       });

//       if (response.ok) {
//           const data = await response.json();
//           console.log("Resposta do backend:", data);
//       } else {
//           console.error("Erro ao enviar token para o backend:", response.statusText);
//       }
//   } catch (error) {
//       console.error("Erro na requisição:", error);
//   }
// }