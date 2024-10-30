let url = "https://gabrieups.github.io/Addin/src/taskpane/taskpane.html";
// The onReady function must be run each time a new page is loaded.
Office.initialize = function () {
};

function showError(error) {
  Office.context.mailbox.item.notificationMessages.replaceAsync('aii deu erro', {
    type: 'errorMessage',
    message: error
  });
}

function carregarPagina(event) {

  try {
    Office.context.ui.displayDialogAsync(
      url,
      { height: 50, width: 50 },
      function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.error("Erro ao carregar a página: " + asyncResult.error.message);
          event.completed();
        } else {
          console.log("Página carregada com sucesso.");
          event.completed();
        }
      }
    );
  } catch (err) {
    showError(err);
    event.completed();
  }
}

// Register the function.
Office.actions.associate("carregarPagina", carregarPagina);