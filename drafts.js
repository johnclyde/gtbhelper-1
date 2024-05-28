"use strict";

function createDraftRow(draft) {
  const draftRow = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.title = draft.name;
  nameCell.classList.add("dname");
  const nameBold = document.createElement("b");
  nameBold.textContent = draft.name;
  nameCell.appendChild(nameBold);

  const dateCell = document.createElement("td");
  dateCell.textContent = draft.date;

  const actionsCell = document.createElement("td");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", deleteDraft);

  const loadButton = document.createElement("button");
  loadButton.textContent = "Load";
  loadButton.addEventListener("click", loadDraft);

  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(loadButton);

  draftRow.appendChild(nameCell);
  draftRow.appendChild(dateCell);
  draftRow.appendChild(actionsCell);

  return draftRow;
}

function loadDraft(event) {
  const draftDate = event.target.parentNode.previousElementSibling.innerText;

  if (confirm("Load draft from " + draftDate + "?")) {
    const allDrafts = JSON.parse(window.localStorage.getItem("drafts"));
    for (let draft of allDrafts) {
      if (draft.date === draftDate) {
        document.getElementById("tableLiner").innerHTML = draft.mainContent;
        break;
      }
    }
  }
}

function deleteDraft(event) {
  const draftDate = event.target.parentNode.previousElementSibling.innerText;

  if (confirm("Delete draft from " + draftDate + "?")) {
    let allDrafts = JSON.parse(window.localStorage.getItem("drafts"));
    allDrafts = allDrafts.filter(draft => draft.date !== draftDate);
    window.localStorage.setItem("drafts", JSON.stringify(allDrafts));
    event.target.parentNode.parentNode.remove();
  }
}

function saveDraft() {
  const draftsTable = document.getElementById("draftsTable");
  const draftName = document.getElementById("draftName").value;
  const currentDate = new Date().toLocaleString();
  const draft = {
    name: draftName,
    date: currentDate,
    mainContent: window.localStorage.getItem("savedBanzuke"),
  };
  const draftsString = window.localStorage.getItem("drafts");
  let draftsJSON = draftsString ? JSON.parse(draftsString) : [];

  draftsJSON.unshift(draft);
  window.localStorage.setItem("drafts", JSON.stringify(draftsJSON));

  const draftRow = createDraftRow(draft);
  draftsTable.children[0].appendChild(draftRow);
  document.getElementById("draftName").value = "";
}

function initializeDrafts() {
  const drafts = window.localStorage.getItem("drafts");

  if (drafts !== null) {
    const draftsTable = document.getElementById("draftsTable");
    const draftsJSON = JSON.parse(drafts);

    draftsJSON.forEach(draft => {
      const draftRow = createDraftRow(draft);
      draftsTable.children[0].appendChild(draftRow);
    });
  }
}
