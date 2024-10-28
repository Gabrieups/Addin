Office.onReady(function (info) {
  // Verifica se o add-in está carregado e pronto
  if (info.host === Office.HostType.Outlook) {
    console.log("Add-in carregado!");
  }
});

// Define a função para carregar a página
function carregarPagina() {
    Office.context.ui.displayDialogAsync('https://gabrieups.github.io/Addin/src/taskpane/taskpane.html',
      {height: 30, width: 20, promptBeforeOpen: false, displayInIframe: true}
  );
}


