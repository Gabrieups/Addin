Office.onReady(function () {
  // Verifica se o add-in está carregado
  console.log("Add-in carregado!");
  
  // Carrega a página web no painel principal
  Office.context.ui.displayMessage("Carregando página...");
  var url = "https://gabrieups.github.io/Addin/src/taskpane/taskpane.html";
  Office.ui.frame.open(url, { width: 400, height: 300 });
});


