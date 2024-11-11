let btnEvent;

Office.initialize = function () {
};

let settingsDialog;

function carregarPagina(event) {
  btnEvent = event;
  // const url = new URI('dialog.html?warn=1').absoluteTo(window.location).toString();
  const url = "https://breu-app-testing-bhcmcdadfqdthzhy.brazilsouth-01.azurewebsites.net/dialog.html";
  const dialogOptions = { width: 60, height: 80 };

  Office.context.ui.displayDialogAsync(url, dialogOptions, function(result) {
    settingsDialog = result.value;
    settingsDialog.addEventHandler(Office.EventType.DialogEventReceived, dialogClosed);
  });
}

// Register the function.
Office.actions.associate("carregarPagina", carregarPagina);

function dialogClosed(message) {
  settingsDialog = null;
  btnEvent.completed();
  btnEvent = null;
}