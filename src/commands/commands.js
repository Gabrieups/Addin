// Cria uma política de Trusted Types
if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: (input) => input,
    createScript: (input) => input
  });
}

Office.onReady(() => {
  // Se necessário, Office.js está pronto para ser chamado.
});

/**
 * Exibe uma notificação quando o comando do add-in é executado.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  const message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Ação realizada.",
    icon: "Icon.80x80",
    persistent: true,
  };

  // Exibe uma mensagem de notificação.
  Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

  // Certifique-se de indicar que a função de comando do add-in foi concluída.
  event.completed();
}

/**
 * Carrega a página principal no painel do Outlook.
 * @param event {Office.AddinCommands.Event}
 */
function loadMainPage(event) {
  // Abre a página principal em um diálogo dentro do Outlook
  Office.context.ui.displayDialogAsync(
    "https://gabrieups.github.io/Addin/src/taskpane/taskpane.html",
    { height: 50, width: 50 },
    function (asyncResult) {
      // Verifica se houve sucesso ao abrir o diálogo
      if (asyncResult.status === Office.AsyncResultStatus.Failed) {
        console.error("Erro ao abrir o diálogo: " + asyncResult.error.message);
      } else {
        console.log("Diálogo aberto com sucesso.");
      }
    }
  );
  
  // Indica que o comando foi concluído
  event.completed();
}

// Associa as funções ao Office
Office.actions.associate("action", action);
Office.actions.associate("loadMainPage", loadMainPage);
