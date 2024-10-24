/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    // document.getElementById("run").onclick = run;
    run()
  }
});

export async function run() {

  console.log("heeyyy");
  // /**
  //  * Insert your Outlook code here
  //  */

  // const item = Office.context.mailbox.item;
  // let insertAt = document.getElementById("item-subject");
  // let label = document.createElement("b").appendChild(document.createTextNode("Subject: "));
  // insertAt.appendChild(label);
  // insertAt.appendChild(document.createElement("br"));
  // insertAt.appendChild(document.createTextNode(item.subject));
  // insertAt.appendChild(document.createElement("br"));
}

