"use strict";

/*
var shikonaCells = document.getElementsByClassName("shikona");
var theRikishi = [], rikishiID = [];
for (var i = 0; i < 100; i++) {
  theRikishi[i] = shikonaCells[i].previousSibling.innerHTML + ' ' + shikonaCells[i].children[0].innerHTML + ' ' + shikonaCells[i].nextSibling.children[0].innerHTML;
  rikishiID[i]  = shikonaCells[i].children[0].href.split('=')[1];
} 
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Terunofuji 2-5-8", 
  "O1e Kirishima 5-10", 
  "O1w Hoshoryu 11-4 J", 
  "O2e Takakeisho 8-6-1", 
  "O2w Kotonowaka 10-5", 
  "S1e Daieisho 6-9", 
  "S1w Wakamotoharu 9-6", 
  "K1e Abi 9-6", 
  "K1w Nishikigi 3-12", 
  "M1e Ura 6-9", 
  "M1w Asanoyama 9-6", 
  "M2e Atamifuji 8-7", 
  "M2w Meisei 6-9", 
  "M3e Oho 7-8", 
  "M3w Takanosho 5-10", 
  "M4e Tobizaru 8-7", 
  "M4w Hiradoumi 9-6", 
  "M5e Midorifuji 7-8", 
  "M5w Onosato 11-4 J..", 
  "M6e Tsurugisho 2-3-10", 
  "M6w Gonoyama 10-5", 
  "M7e Kinbozan 6-7-2", 
  "M7w Tamawashi 7-8", 
  "M8e Onosho 9-6", 
  "M8w Takayasu 11-4 J", 
  "M9e Hokutofuji 6-9", 
  "M9w Kotoshoho 8-7", 
  "M10e Shodai 8-7", 
  "M10w Mitakeumi 9-6", 
  "M11e Ichiyamamoto 7-8", 
  "M11w Sadanoumi 8-7", 
  "M12e Shonannoumi 9-6", 
  "M12w Shimazuumi 0-4-11", 
  "M13e Ryuden 6-9", 
  "M13w Churanoumi 7-8", 
  "M14e Nishikifuji 8-7", 
  "M14w Kitanowaka 3-12", 
  "M15e Myogiryu 6-9", 
  "M15w Roga 7-8", 
  "M16e Endo 5-10", 
  "M16w Daiamami 7-8", 
  "M17e Takerufuji 13-2 Y...", 
  "J1e Tokihayate 8-7", 
  "J1w Takarafuji 8-7", 
  "J2e Tohakuryu 6-9", 
  "J2w Mitoryu 12-3 Y", 
  "J3e Hokuseiho 0-0", 
  "J3w Tomokaze 9-6", 
  "J4e Kagayaki 7-8", 
  "J4w Oshoma 11-4", 
  "J5e Bushozan 9-6", 
  "J5w Shirokuma 7-6-2", 
  "J6e Hakuyozan 4-11", 
  "J6w Chiyoshoma 9-6", 
  "J7e Hidenoumi 7-8", 
  "J7w Daishoho 10-5", 
  "J8e Asakoryu 9-6", 
  "J8w Shishi 8-7", 
  "J9e Shimanoumi 5-10", 
  "J9w Tamashoho 6-9", 
  "J10e Shiden 7-8", 
  "J10w Wakatakakage 9-6", 
  "J11e Oshoumi 6-9", 
  "J11w Aoiyama 7-8", 
  "J12e Kotoeko 1-14", 
  "J12w Tsushimanada 7-8", 
  "J13e Akua 6-9", 
  "J13w Hakuoho 8-7", 
  "J14e Kitaharima 4-11", 
  "J14w Chiyosakae 8-7", 
  "Ms1e Chiyomaru 4-3", 
  "Ms1w Tenshoho 3-5", 
  "Ms2e Yuma 2-5", 
  "Ms2w Onokatsu 5-2", 
  "Ms3e Tochimusashi 0-0-7", 
  "Ms3w Kayo 4-3", 
  "Ms4e Kitadaichi 3-4", 
  "Ms4w Tsukahara 5-2", 
  "Ms5e Kotodaigo 0-6-1", 
  "Ms5w Nabatame 4-3", 
  "Ms6e Kototebakari 5-2", 
  "Ms6w Hokutomaru 3-4", 
  "Ms7e Satorufuji 3-4", 
  "Ms7w Kotokuzan 4-3", 
  "Ms8e Daishomaru 4-3", 
  "Ms8w Kiryuko 5-2", 
  "Ms9e Dewanoryu 2-5", 
  "Ms9w Tokunomusashi 4-3", 
  "Ms10e Wakaikari 4-3", 
  "Ms10w Hananoumi 2-4-1", 
  "Ms11e Hokutenkai 3-4", 
  "Ms11w Chiyonoumi 4-3", 
  "Ms12e Miyagi 4-3", 
  "Ms12w Mudoho 3-4", 
  "Ms13e Daiseizan 6-1", 
  "Ms13w Kazekeno 7-0 Y", 
  "Ms14e Kotoyusho 2-4-1", 
  "Ms14w Fujiseiun 4-3", 
  "Ms15e Kairyu 3-4", 
  "Ms15w Otsuji 5-2", 
  "Ms17w Haruyama 5-2", 
  "Ms19e Mineyaiba 4-3", 
  "Ms20e Yago 5-2", 
  "Ms20w Kotokenryu 4-3", 
  "Ms21e Hitoshi 5-2", 
  "Ms22w Yoshii 6-1", 
  "Ms23e Narutaki 4-3", 
  "Ms23w Kaisho 5-2", 
  "Ms24w Obara 5-2", 
  "Ms26w Asanowaka 4-3", 
  "Ms27e Asahakuryu 6-1", 
  "Ms28e Kanzaki 4-3", 
  "Ms28w Tanji 4-3", 
  "Ms30w Fujitoshi 4-3", 
  "Ms31w Tsurubayashi 4-3", 
  "Ms33w Tochikodai 4-3", 
  "Ms34e Ryusei 4-3", 
  "Ms34w Wakanosho 5-2", 
  "Ms37e Tochiseiryu 4-3", 
  "Ms38w Hamayutaka 5-2", 
  "Ms39e Yoshiyasu 5-2", 
  "Ms40e Asakoki 5-2", 
  "Ms41e Shiroma 4-3", 
  "Ms41w Kotoozutsu 4-3", 
  "Ms43e Wakatakamoto 6-1", 
  "Ms44e Asonoyama 5-2", 
  "Ms46w Sazanami 4-3", 
  "Ms47e Oshoryu 4-3", 
  "Ms47w Kirinryu 4-3", 
  "Ms48e Anosho 5-2", 
  "Ms49e Suzaki 4-3", 
  "Ms49w Kazuto 4-3", 
  "Ms51w Nihonyanagi 5-2", 
  "Ms52e Daishoryu 5-2", 
  "Ms54e Kaizen 4-3", 
  "Ms54w Kaigo 5-2", 
  "Ms55w Kyokutaisei 6-1", 
  "Ms56e Takashoki 4-3", 
  "Ms57w Kotodairyu 5-2", 
  "Ms58e Onojo 4-3", 
  "Ms58w Kainoshima 4-3", 
  "Ms59w Kaiseijo 4-3", 
  "Ms60w Tosamidori 6-1", 
  "Ms60TD Matsui 5-2", 
  "Sd3w Nagamura 7-0 Y", 
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = ["Hokuseiho"];

/* Enable "No Rank Colouring" and "One Column" options and then open the
 * browser's inspector (F12). Find the table and copy & paste the <tbody> node.
 * The rikishi ID is located right after "Rikishi.aspx?r=". Turn the IDs into an
 * array (add the empty spots as 0). This array should have the same length as
 * theSekitori array.
 */
var sekitoriID = [
  11927,
  12231,
  12451,
  12191,
  12270,
  11985,
  11980,
  12094,
  6596,
  12226,
  12291,
  12664,
  11946,
  12453,
  11855,
  12203,
  12314,
  12352,
  12836,
  12113,
  12688,
  12721,
  5944,
  12043,
  6480,
  12239,
  12449,
  12130,
  12210,
  12362,
  2879,
  12162,
  12013,
  6594,
  12320,
  12351,
  12548,
  11784,
  12516,
  12055,
  12273,
  12780,
  12542,
  11728,
  12575,
  12406,
  12646,
  12427,
  11845,
  12717,
  12117,
  12773,
  11943,
  11785,
  12026,
  12040,
  12710,
  12599,
  12024,
  11976,
  12141,
  12370,
  12634,
  11786,
  7153,
  12342,
  11918,
  12796,
  1241,
  11736,
  7240,
  12709,
  12165,
  12840,
  12674,
  12774,
  12155,
  12448,
  11949,
  12597,
  12729,
  12519,
  12793,
  11809,
  12144,
  12711,
  12592,
  12333,
  12800,
  12727,
  12585,
  12255,
  12713,
  12593,
  12725,
  12767,
  12319,
  12702,
  6506,
  12561,
  12832,
  12557,
  12425,
  12724,
  12704,
  12536,
  12357,
  12075,
  12220,
  12484,
  12784,
  12733,
  12751,
  12703,
  11755,
  12373,
  2892,
  12730,
  12132,
  11936,
  12379,
  11743,
  12833,
  12316,
  11814,
  12458,
  12225,
  12587,
  12604,
  12834,
  12612,
  12776,
  12594,
  12698,
  12279,
  12488,
  8899,
  12692,
  11759,
  11942,
  12372,
  12137,
  12263,
  12876,
  12795,
];

//***** Just update the "basho" variable and you're all done. *****

let redips = {},
  rd = REDIPS.drag;

function exportTableToCSV($table, filename) {
  var $rows = $table.find("tr:has(td),tr:has(th)"),
    // Temporary delimiter characters unlikely to be typed by keyboard
    // This is to avoid accidentally splitting the actual contents
    tmpColDelim = String.fromCharCode(11), // vertical tab character
    tmpRowDelim = String.fromCharCode(0), // null character
    // actual delimiter characters for CSV format
    colDelim = '","',
    rowDelim = '"\r\n"',
    // Grab text from table into CSV formatted string
    csv =
      '"' +
      $rows
        .map(function (i, row) {
          var $row = $(row),
            $cols = $row.find("td,th");

          return $cols
            .map(function (j, col) {
              var $col = $(col),
                text = $col.text(),
                html = $col.html(),
                arr = [];

              if ($col.prop("tagName") == "TH" || $col.hasClass("cur")) {
                $col.contents().each(function () {
                  if (this.nodeType == 3) arr.push(this.nodeValue);
                  else if (this.tagName == "SPAN") arr.push(this.innerText);
                });
                if ($col.hasClass("cur") && $col.prop("tagName") != "TH")
                  text = arr.join("\n");
                else text = arr.join(" ");
              } else if (
                $col.hasClass("b2") ||
                $col.hasClass("rs2") ||
                $col.hasClass("ch2")
              ) {
                $col.children().each(function () {
                  if (this.tagName != "BR") arr.push(this.innerText);
                });
                text = arr.join("\n");
              } else if ($col.hasClass("nte")) {
                var temp;
                $col
                  .children("div")
                  .children()
                  .each(function () {
                    temp = this.innerText.replace("\n", "");
                    arr.push(temp);
                  });
                text = arr.join("\n");
              }

              text = text.replace(/ /g, "");
              return text.replace(/"/g, '""'); // escape double quotes
            })
            .get()
            .join(tmpColDelim);
        })
        .get()
        .join(tmpRowDelim)
        .split(tmpRowDelim)
        .join(rowDelim)
        .split(tmpColDelim)
        .join(colDelim) +
      '"',
    // Data URI
    csvData = "data:application/csv;charset=utf-8," + encodeURIComponent(csv);

  console.log(csv);

  if (window.navigator.msSaveBlob) {
    // IE 10+
    //alert('IE' + csv);
    window.navigator.msSaveOrOpenBlob(
      new Blob([csv], { type: "text/plain;charset=utf-8;" }),
      "csvname.csv",
    );
  } else {
    $(this).attr({ download: filename, href: csvData, target: "_blank" });
  }
}

window.onload = function () {
  var basho = "202403"; // The date of the basho just ended

  // This must be a hyperlink
  $("#exportToCsv1").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke1"), "banzuke1.csv"]);
  });
  $("#exportToCsv2").on("click", function (event) {
    exportTableToCSV.apply(this, [$("#banzuke2"), "banzuke2.csv"]);
  });

  // removing unused local storage names of before *****************************
  if (window.localStorage.getItem("banzuke1") !== null) {
    window.localStorage.removeItem("banzuke1");
    window.localStorage.removeItem("banzuke2");
  }
  if (window.localStorage.getItem("banzuke") !== null) {
    window.localStorage.removeItem("banzuke");
  }
  if (window.localStorage.getItem("picks") !== null) {
    window.localStorage.removeItem("picks");
  }
  // ***************************************************************************
  if (window.localStorage.getItem("savedBanzuke") !== null) {
    var saveDate = Date.parse(window.localStorage.getItem("savedBanzukeTime")),
      expireDate = new Date(Date.UTC(2024, 2, 24, 9, 10)); //UTC time

    if (saveDate < expireDate) window.localStorage.removeItem("savedBanzuke");
    else {
      document.getElementById("tableLiner").innerHTML =
        window.localStorage.getItem("savedBanzuke");
      if (document.querySelectorAll(".makushitaTable").length == 0) {
        addMakushitaTable();
        updateInfoCells();
      }
    }
  }
  if (window.localStorage.getItem("savedBanzuke") === null) {
    writeTableTitles(basho);
    addRikishi();
    addMakushitaTable();
  }

  var radioButton = document.getElementsByClassName("checkbox"),
    radioLocal = window.localStorage.getItem("radioButton"),
    radioLocalDrop = window.localStorage.getItem("radioDrop");

  if (radioLocal === null || radioLocal == "openRikishiPage")
    radioButton[0].checked = true;
  else if (radioLocal == "returnToOld") radioButton[1].checked = true;
  else radioButton[2].checked = true;

  if (radioLocalDrop === null || radioLocalDrop == "multiple")
    radioButton[3].checked = true;
  else if (radioLocalDrop == "shift") radioButton[4].checked = true;
  else radioButton[5].checked = true;

  var noteCells = document.querySelectorAll(".nte");

  for (var i = 2; i < noteCells.length; i++) {
    let time = 0;
    noteCells[i].children[0].contentEditable = "true";
    noteCells[i].children[0].addEventListener("input", function () {
      // Reset the timer
      clearTimeout(time);

      time = setTimeout(function () {
        saveBanzuke();
        showSaving();
      }, 1000);
    });
  }

  var checkbox = document.getElementById("ChangeTheme"); //get the checkbox to a variable

  //check storage if dark mode was on or off
  if (localStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
  } else {
    nodark(); //else run this funtion
  }

  checkbox.addEventListener("change", function () {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
      darkmode(); //if the checkbox is checked, run this funtion
    } else {
      nodark(); //else run this funtion
    }
    updateInfoCells();
  });

  var drafts = window.localStorage.getItem("drafts");

  if (drafts !== null) {
    var draftsTable = document.getElementById("draftsTable");
    var draftsJSON = JSON.parse(drafts);

    for (var i = 0; i < draftsJSON.length; i++) {
      var draftRow = document.createElement("tr");

      draftRow.innerHTML =
        '<td title="' +
        draftsJSON[i].name +
        '" class="dname"><b>' +
        draftsJSON[i].name +
        "</b></td><td>" +
        draftsJSON[i].date +
        '</td><td><button onclick="deleteDraft()">❌</button> <button onclick="loadDraft()">Load</button></td>';
      draftsTable.children[0].appendChild(draftRow);
    }
  }
  if (window.localStorage.getItem("colCheck1") === null) {
    var columnCheckbox = document.querySelectorAll(".checkedByDefault");

    for (var i = 0; i < columnCheckbox.length; i++)
      columnCheckbox[i].checked = true;
  } else {
    for (var i = 1; i < 8; i++) {
      var columnCheck = document.querySelectorAll(".columnCheckbox")[i - 1];
      var check = JSON.parse(
        window.localStorage.getItem("colCheck" + String(i)),
      );

      columnCheck.checked = check;
    }
  }

  var saveDialog = document.getElementById("saveDialog");

  document.getElementById("saveDraft").addEventListener("click", function () {
    saveDialog.show();
  });
  document
    .getElementById("saveDraftButton")
    .addEventListener("click", function () {
      if (window.localStorage.getItem("savedBanzuke") !== null) {
        var draftsTable = document.getElementById("draftsTable");
        var draftName = document.getElementById("draftName").value;
        var currentDate = new Date().toLocaleString();
        var draftCount = draftsTable.children[0].children.length + 1;
        var draft = {
          name: "",
          date: "",
          mainContent: "",
        };
        var draftRow = document.createElement("tr");
        var draftsString = window.localStorage.getItem("drafts");
        var draftsJSON;

        draft.name = draftName;
        draft.date = currentDate;
        draft.mainContent = window.localStorage.getItem("savedBanzuke");
        if (draftsString !== null) draftsJSON = JSON.parse(draftsString);
        else draftsJSON = [];
        draftsJSON.unshift(draft);
        window.localStorage.setItem("drafts", JSON.stringify(draftsJSON));
        draftRow.innerHTML =
          '<td title="' +
          draftName +
          '" class="dname"><b>' +
          draftName +
          "</b></td><td>" +
          currentDate +
          '</td><td><button onclick="deleteDraft()">❌</button> <button onclick="loadDraft()">Load</button></td>';
        draftsTable.children[0].prepend(draftRow);
        document.getElementById("draftName").value = "";
      }
      saveDialog.close();
    });
  document.getElementById("closeDialog").addEventListener("click", function () {
    saveDialog.close();
  });
  document
    .getElementById("draftName")
    .addEventListener("keypress", function () {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("saveDraftButton").click();
      }
    });

  function darkmode() {
    document.body.classList.add("darkm"); //add a class to the body tag
    checkbox.checked = true; //set checkbox to be checked state
    localStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
  }

  function nodark() {
    document.body.classList.remove("darkm"); //remove added class from body tag
    checkbox.checked = false; //set checkbox to be unchecked state
    localStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
  }

  function writeTableTitles(endedBashoDate) {
    var bashoYear = parseInt(endedBashoDate.substring(0, 4)),
      bashoMonth = parseInt(endedBashoDate.slice(-2)),
      tableTitle = document.getElementsByClassName("tableTitle");

    const bashoMonthLookup = {
        1: "Hatsu",
        3: "Haru",
        5: "Natsu",
        7: "Nagoya",
        9: "Aki",
        11: "Kyushu",
      },
      getBashoName = (bMonth) => bashoMonthLookup[bMonth];

    tableTitle[0].innerHTML =
      getBashoName(bashoMonth) +
      " " +
      bashoYear +
      tableTitle[0].innerHTML +
      " Result";
    if (bashoMonth > 9) {
      bashoYear++;
      bashoMonth = -1;
    }
    tableTitle[1].innerHTML =
      getBashoName(bashoMonth + 2) +
      " " +
      bashoYear +
      " Makuuchi Guess - " +
      tableTitle[1].innerHTML;
  }

  function addRikishi() {
    var table1 = document.getElementById("banzuke1"),
      cell = table1.querySelectorAll(".redips-only");

    for (var i = 0; i < cell.length; i++) {
      for (var j = 0; j < theSekitori.length; j++) {
        if (cell[i].classList.contains(theSekitori[j].split(" ")[0])) {
          var card = document.createElement("div"),
            rikiData = theSekitori[j].split(" "),
            wins = rikiData[2].split("-")[0],
            record =
              rikiData.length == 4
                ? rikiData[2] + " " + rikiData[3]
                : rikiData[2];

          if (rikiData.length > 3) rikiData[2] += " " + rikiData[3];

          card.id = rikiData[0];
          card.className = "redips-drag se";
          if (rikiData[0].startsWith("Ms") || rikiData[0].startsWith("Sd"))
            card.setAttribute("data-w", wins * 2);
          else card.setAttribute("data-w", wins);
          card.setAttribute("data-re", record);

          rikiData[1] =
            '<a href="https://sumodb.sumogames.de/Rikishi.aspx?r=' +
            sekitoriID[j] +
            '" target="_blank">' +
            rikiData[1] +
            "</a>";
          rikiData[2] =
            '<a href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=' +
            sekitoriID[j] +
            "&b=" +
            basho +
            '" target="_blank">' +
            rikiData[2] +
            "</a>";

          card.innerHTML = rikiData[1];

          if (retiredRikishi.includes(theSekitori[j].split(" ")[1])) {
            //card.innerHTML = rikiData.join(' ');
            card.style.backgroundColor = "rgb(203, 203, 203)";
            card.className = "redips-drag intai";
            card.setAttribute("title", "Retired");
            card.removeAttribute("data-ko");
          }

          //card.setAttribute("onmouseout", "unhighlight()");

          //cell[i].appendChild(holder);
          cell[i].appendChild(card);
          cell[i].classList.add("initCell");

          var resCell, newRankCell;

          if (i % 2 == 0) resCell = cell[i].previousSibling;
          else resCell = cell[i].nextSibling;

          resCell.innerHTML = rikiData[2];

          //cell[i].style.borderInline = "1px solid #929292";
        }
      }
    }
  }
};

function addMakushitaTable() {
  var container = document.querySelectorAll(".banzukeContainer")[1];
  var table1 = document.createElement("table");
  var table2 = document.createElement("table");
  var table3 = document.createElement("table");
  var groups = [[], [], [], [], [], [], [], []];

  table1.className = "makushitaTable";
  table2.className = "makushitaTable";
  table3.className = "makushitaTable";
  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i].startsWith("Ms")) {
      var rikishiData = theSekitori[i].split(" ");

      groups[rikishiData[2].charAt(0)].push({
        rikishi: rikishiData[0] + " " + rikishiData[1],
        id: sekitoriID[i],
      });
    }
  }
  table1.appendChild(document.createElement("tbody"));
  table2.appendChild(document.createElement("tbody"));
  table3.appendChild(document.createElement("tbody"));
  for (var i = 7; i >= 0; i--) {
    if (groups[i].length > 0) {
      var headerRow = document.createElement("tr");
      var header = document.createElement("th");

      header.colSpan = 2;
      header.innerText = i + " wins";
      headerRow.appendChild(header);
      if (i > 4) table1.children[0].appendChild(headerRow);
      else if (i == 4) table2.children[0].appendChild(headerRow);
      else table3.children[0].appendChild(headerRow);
      for (var j = 0; j < groups[i].length; j++) {
        var rikishiRow = document.createElement("tr");
        var rikishiCell = document.createElement("td");
        var link = document.createElement("a");

        link.href =
          "https://sumodb.sumogames.de/Rikishi.aspx?r=" + groups[i][j].id;
        link.target = "_blank";
        link.innerText = groups[i][j].rikishi;
        rikishiCell.appendChild(link);
        rikishiCell.id = groups[i][j].rikishi.split(" ")[1].toLowerCase();
        rikishiRow.appendChild(rikishiCell);
        rikishiRow.appendChild(document.createElement("td"));
        if (i > 4) table1.children[0].appendChild(rikishiRow);
        else if (i == 4) table2.children[0].appendChild(rikishiRow);
        else table3.children[0].appendChild(rikishiRow);
      }
    }
  }
  container.appendChild(table1);
  container.appendChild(table2);
  container.appendChild(table3);
}

function loadDraft() {
  var draftDate = event.target.parentNode.previousSibling.innerText;

  if (confirm("Load draft from " + draftDate + "?")) {
    var draftsTable = document.getElementById("draftsTable");
    var allDrafts = JSON.parse(window.localStorage.getItem("drafts"));

    for (var i = 0; i < allDrafts.length; i++) {
      if (allDrafts[i].date == draftDate)
        document.getElementById("tableLiner").innerHTML =
          allDrafts[i].mainContent;
    }
    saveBanzuke();
    redips.init();
    if (window.localStorage.getItem("colCheck1") === null) {
      var columnCheckbox = document.querySelectorAll(".checkedByDefault");

      for (var i = 0; i < columnCheckbox.length; i++)
        columnCheckbox[i].checked = true;
    } else {
      for (var i = 1; i < 8; i++) {
        var columnCheck = document.querySelectorAll(".columnCheckbox")[i - 1];
        var check = JSON.parse(
          window.localStorage.getItem("colCheck" + String(i)),
        );

        columnCheck.checked = check;
      }
    }
    var noteCells = document.querySelectorAll(".nte");

    for (var i = 2; i < noteCells.length; i++) {
      let time = 0;
      noteCells[i].children[0].contentEditable = "true";
      noteCells[i].children[0].addEventListener("input", function () {
        // Reset the timer
        clearTimeout(time);

        time = setTimeout(function () {
          saveBanzuke();
          showSaving();
        }, 1000);
      });
    }
  }
}

function deleteDraft() {
  var draftDate = event.target.parentNode.previousSibling.innerText;

  if (confirm("Delete draft from " + draftDate + "?")) {
    var allDrafts = JSON.parse(window.localStorage.getItem("drafts"));

    for (var i = 0; i < allDrafts.length; i++) {
      if (allDrafts[i].date == draftDate) allDrafts.splice(i, 1);
    }
    window.localStorage.setItem("drafts", JSON.stringify(allDrafts));
    event.target.parentNode.parentNode.remove();
  }
}

function saveRadio(radioButton) {
  window.localStorage.setItem("radioButton", radioButton.value);
}

function saveDropRadio(button) {
  if (button.value == "disable") rd.dropMode = "single";
  else rd.dropMode = "multiple";

  window.localStorage.setItem("radioDrop", button.value);
}

function saveBanzuke() {
  var date = new Date();

  window.localStorage.setItem(
    "savedBanzuke",
    document.getElementById("tableLiner").innerHTML,
  );
  window.localStorage.setItem("savedBanzukeTime", date.toString());
}

// *****************************************************************************

rd.animation = "off";

redips.init = function () {
  rd.init();
  rd.hover.colorTd = "chartreuse";
  //rd.hover.borderTd = "2px solid blue";
  //rd.dropMode = "multiple";
  rd.only.divClass.se = "b2";

  rd.enableDrag(false, ".intai");

  var radioDrop = document.getElementsByName("dropMode");

  if (radioDrop[2].checked) rd.dropMode = "single";
  else rd.dropMode = "multiple";

  for (var i = 0; i < theSekitori.length; i++) {
    if (theSekitori[i] !== "") {
      var rank = theSekitori[i].split(" ")[0];
      rd.only.div[rank] = rank;
    }
  }
  rd.hover.colorTd = "royalblue";

  var intervalID;

  rd.event.changed = function (currentCell) {
    var tooltipCheckbox = document.getElementById("tooltipCheckbox"),
      chTooltip = document.createElement("span"),
      change = currentCell.classList.contains("b2")
        ? getChange(rd.obj.id, currentCell.dataset.r)
        : "",
      prevTip = document.getElementById("chTooltip");

    if (!tooltipCheckbox.checked) {
      if (typeof prevTip != "undefined" && prevTip != null) prevTip.remove();
      chTooltip.id = "chTooltip";
      chTooltip.innerHTML = "(" + rd.obj.id + " " + rd.obj.dataset.re + ")";
      if (change != "")
        chTooltip.innerHTML = "<b>" + change + "</b> " + chTooltip.innerHTML;
      rd.obj.prepend(chTooltip);
    }
    var tip = document.getElementById("tip");

    if (typeof tip != "undefined" && tip != null) tip.remove();

    var prevShifters = document.getElementsByClassName("shifter"),
      prevShiftTo = document.getElementsByClassName("shiftTo");

    if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
      prevShiftTo[0].classList.remove("shiftTo");
    if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
      while (prevShifters.length) prevShifters[0].classList.remove("shifter");
    }
    if (typeof intervalID != "undefined" && intervalID != null)
      window.clearInterval(intervalID);

    if (
      currentCell.children.length > 0 &&
      currentCell != rd.obj.parentNode &&
      window.localStorage.getItem("radioDrop") == "shift" &&
      currentCell.classList.contains("b2")
    ) {
      var b2Cell = document.querySelectorAll(".b2"),
        targetIndex = Array.prototype.slice.call(b2Cell).indexOf(currentCell),
        originIndex = Array.prototype.slice
          .call(b2Cell)
          .indexOf(rd.obj.parentNode);

      var tooltip = document.createElement("span");
      tooltip.id = "tip";
      if (originIndex > targetIndex || originIndex < 0)
        tooltip.setAttribute("data-direction", "up");
      else if (originIndex < targetIndex)
        tooltip.setAttribute("data-direction", "down");
      if (tooltipCheckbox.checked) tooltip.style.display = "none";
      currentCell.prepend(tooltip);
      shiftDirect();
      const interval = setInterval(shiftDirect, 1000);
      intervalID = interval;
      function shiftDirect() {
        var prevShifters = document.getElementsByClassName("shifter"),
          prevShiftTo = document.getElementsByClassName("shiftTo");

        if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length)
            prevShifters[0].classList.remove("shifter");
        }
        if (tooltip.dataset.direction == "down")
          tooltip.dataset.direction = "up";
        else tooltip.dataset.direction = "down";
        if (tooltip.dataset.direction == "down") {
          tooltip.innerHTML = "⮟";
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 53 ||
              targetIndex == 81 ||
              targetIndex == 111 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === rd.obj.parentNode) ||
              ((i == 53 || i == 81 || i == 111) &&
                b2Cell[i].children.length > 0)
            ) {
              //b2Cell[i].style.border = "none";
              b2Cell[i].classList.add("shiftTo");
              for (var j = i - 1; j >= targetIndex; i--, j--) {
                for (var k = 0; k < b2Cell[j].children.length; k++)
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        } else {
          tooltip.innerHTML = "⮝";
          for (var i = targetIndex; i >= 0; i--) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 0 ||
              targetIndex == 54 ||
              targetIndex == 82 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === rd.obj.parentNode) ||
              ((i == 0 || i == 54 || i == 82) && b2Cell[i].children.length > 0)
            ) {
              //b2Cell[i].style.border = "none";
              b2Cell[i].classList.add("shiftTo");
              for (var j = i + 1; j <= targetIndex; i++, j++) {
                for (var k = 0; k < b2Cell[j].children.length; k++)
                  b2Cell[j].children[k].classList.add("shifter");
              }
              break;
            }
          }
        }
      }
    }
  };

  rd.event.dblClicked = function () {
    var radioButton = document.getElementsByTagName("input");
    var rikishiURL = rd.obj.children[0].href;
    var thisRank = rd.obj.id,
      originCell = document.querySelectorAll("." + thisRank)[0],
      currentCell = rd.findParent("TD", rd.obj),
      currentChgCell;

    if (radioButton[0].checked) window.open(rikishiURL, "_blank").focus();
    else if (radioButton[1].checked && currentCell.classList.contains("b2")) {
      rd.moveObject({
        obj: rd.obj,
        target: originCell,
        callback: function () {
          if (currentCell.dataset.r.charAt(0) == "J")
            document.getElementById("juRik").innerHTML--;
          else if (currentCell.dataset.r.startsWith("Ms"))
            document.getElementById("msRik").innerHTML--;
          else document.getElementById("makRik").innerHTML--;
          originCell.children[0].remove();
          $("#" + rd.obj.innerText.toLowerCase())
            .next()
            .html("");
          //b1Cell[i].style.removeProperty("border");
          updateInfoCells();
          saveBanzuke();
        },
      });
      showSaving();
    }
  };

  rd.event.notMoved = function () {
    var currentCell = rd.findParent("TD", rd.obj);

    //currentCell.style.removeProperty("box-shadow");
    //rd.obj.removeChild(rd.obj.childNodes[1]);
  };

  rd.event.droppedBefore = function (targetCell) {
    var makuCounter = document.getElementById("makRik"),
      juCounter = document.getElementById("juRik"),
      msCounter = document.getElementById("msRik"),
      thisCard = rd.obj,
      currentCell = rd.findParent("TD", thisCard),
      currentChgCell,
      dropRadio = document.getElementsByName("dropMode");
    var currentCellRank,
      targetCellRank,
      curCellIsOfBanzuke2 = currentCell.classList.contains("b2"),
      tarCellIsOfBanzuke2 = targetCell.classList.contains("b2");

    //currentCell.style.removeProperty("box-shadow");

    if (curCellIsOfBanzuke2) {
      currentCellRank = currentCell.dataset.r.charAt(0);
      if (currentCellRank == "J") juCounter.innerHTML--;
      else if (currentCell.dataset.r.startsWith("Ms")) msCounter.innerHTML--;
      else makuCounter.innerHTML--;
    } else if (tarCellIsOfBanzuke2) {
      var holder = document.createElement("a");

      holder.innerHTML =
        thisCard.childNodes[thisCard.childNodes.length - 1].innerText;
      holder.href = thisCard.children[thisCard.childNodes.length - 1].href;
      holder.target = "_blank";
      //if (thisCard.id.startsWith("Ms"))
      //  holder.className = "msLink";
      currentCell.appendChild(holder);
    }

    if (tarCellIsOfBanzuke2) {
      targetCellRank = targetCell.dataset.r.charAt(0);
      if (targetCellRank == "J") juCounter.innerHTML++;
      else if (targetCell.dataset.r.startsWith("Ms")) msCounter.innerHTML++;
      else makuCounter.innerHTML++;
    } else {
      targetCell.children[0].remove();
      if (rd.obj.children.length > 1)
        $("#" + rd.obj.children[1].innerText.toLowerCase())
          .next()
          .html("");
      else
        $("#" + rd.obj.innerText.toLowerCase())
          .next()
          .html("");
    }

    if (
      dropRadio[1].checked &&
      targetCell !== currentCell &&
      tarCellIsOfBanzuke2 &&
      targetCell.children.length > 0
    ) {
      var tooltip = document.getElementById("tip");

      if (typeof tooltip != "undefined" && tooltip != null) {
        var b2Cell = document.querySelectorAll(".b2"),
          targetIndex = Array.prototype.slice.call(b2Cell).indexOf(targetCell);

        if (tooltip.dataset.direction == "down") {
          for (var i = targetIndex; i < b2Cell.length; i++) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 53 ||
              targetIndex == 81 ||
              targetIndex == 111 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === thisCard.parentNode) ||
              ((i == 53 || i == 81 || i == 111) &&
                b2Cell[i].children.length > 0)
            ) {
              //b2Cell[i].style.border = "none";
              for (var j = i - 1; j >= targetIndex; i--, j--)
                rd.relocate(b2Cell[j], b2Cell[i], "instant");
              redips.init();
              break;
            }
          }
        } else {
          for (var i = targetIndex; i >= 0; i--) {
            if (
              b2Cell[i].children.length == 0 ||
              targetIndex == 0 ||
              targetIndex == 54 ||
              targetIndex == 82 ||
              (b2Cell[i].children.length == 1 &&
                b2Cell[i] === thisCard.parentNode) ||
              ((i == 0 || i == 54 || i == 82) && b2Cell[i].children.length > 0)
            ) {
              //b2Cell[i].style.border = "none";
              for (var j = i + 1; j <= targetIndex; i++, j++)
                rd.relocate(b2Cell[j], b2Cell[i], "instant");
              redips.init();
              break;
            }
          }
        }
        var prevShifters = document.getElementsByClassName("shifter"),
          prevShiftTo = document.getElementsByClassName("shiftTo");

        if (typeof prevShiftTo[0] != "undefined" && prevShiftTo[0] != null)
          prevShiftTo[0].classList.remove("shiftTo");
        if (typeof prevShifters[0] != "undefined" && prevShifters[0] != null) {
          while (prevShifters.length)
            prevShifters[0].classList.remove("shifter");
        }
        if (typeof intervalID != "undefined" && intervalID != null)
          window.clearInterval(intervalID);
        tooltip.remove();
      }
    }
    if (rd.obj.childNodes.length > 1) {
      for (var i = 0; i < rd.obj.childNodes.length; i++)
        rd.obj.removeChild(rd.obj.childNodes[i]);
    }
  };
  rd.event.dropped = function (targetCell) {
    if (targetCell.style.backgroundColor != "")
      targetCell.style.backgroundColor = "";
    updateInfoCells();
    showSaving();
  };

  rd.event.finish = function () {
    saveBanzuke();
  };
};

function toggleColumns(button) {
  var column = button.value;
  var colCell = document.getElementsByClassName(column);
  var colCheck = document.querySelectorAll(".columnCheckbox");
  var tableTitle = document.querySelectorAll(".tableTitle");

  if (button.checked) {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan += 2;
    else {
      tableTitle[1].colSpan += 2;
      tableTitle[2].colSpan += 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.remove("hid");
  } else {
    if (button.classList.contains("forB1")) tableTitle[0].colSpan -= 2;
    else {
      tableTitle[1].colSpan -= 2;
      tableTitle[2].colSpan -= 2;
    }
    for (var i = 0; i < colCell.length; i++) colCell[i].classList.add("hid");
  }
  for (var i = 1; i < 8; i++) {
    window.localStorage.setItem(
      "colCheck" + String(i),
      colCheck[i - 1].checked,
    );
  }
  saveBanzuke();
}

function updateInfoCells() {
  var b2Cell = document.querySelectorAll(".b2"),
    b1Cell = document
      .getElementById("banzuke1")
      .querySelectorAll(".redips-only"),
    originCell,
    newRankCell,
    b1Chg,
    resultLink,
    resultCell,
    currRankCell,
    targetChgCell;

  for (var i = 0; i < b1Cell.length; i++) {
    if (
      b1Cell[i].children.length > 0 &&
      b1Cell[i].children[0].tagName == "DIV"
    ) {
      newRankCell = b1Cell[i].nextSibling;
      if (i % 2 != 0) {
        newRankCell = newRankCell.nextSibling;
      }
      if (newRankCell.innerHTML != "") {
        newRankCell.innerHTML = "";
        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = "";
      }
    }
  }

  for (var i = 0; i < b2Cell.length; i++) {
    resultCell = b2Cell[i].nextSibling;
    currRankCell = b2Cell[i].previousSibling;
    targetChgCell = resultCell.nextSibling;

    if (b2Cell[i].children.length > 0) {
      for (var j = 0; j < b2Cell[i].children.length; j++) {
        var thisRank = b2Cell[i].children[j].id,
          rikishiWins = b2Cell[i].children[j].dataset.w,
          thisChg,
          targetCellRank,
          chg;

        originCell = document.querySelectorAll("." + thisRank)[0];
        newRankCell = originCell.nextSibling;
        if (thisRank.endsWith("w")) {
          newRankCell = newRankCell.nextSibling;
          resultLink = originCell.nextSibling.innerHTML;
        } else resultLink = originCell.previousSibling.innerHTML;

        targetCellRank = b2Cell[i].dataset.r;

        thisChg = getChange(thisRank, targetCellRank);

        if (thisRank.startsWith("Ms") || thisRank.startsWith("Sd")) {
          if (thisRank.endsWith("TD")) thisRank = thisRank.slice(0, -2);
          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins / 2 +
            "&form1_year=196007-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";
        } else {
          thisChg =
            '<a href="https://sumodb.sumogames.de/Query.aspx?show_form=0&form1_rank=' +
            thisRank +
            "&form1_wins=" +
            rikishiWins +
            "&form1_year=193905-194401,194905-now&form2_highlight=on&form2_rank=" +
            targetCellRank +
            '" target="_blank" title="Click to run a SumoDB query">' +
            thisChg +
            "</a>";
        }

        newRankCell.innerHTML = b2Cell[i].dataset.r;

        b1Chg = newRankCell.nextSibling;
        b1Chg.innerHTML = thisChg;

        if (j == 0) {
          targetChgCell.innerHTML = thisChg;
          resultCell.innerHTML = resultLink;
          currRankCell.innerHTML =
            "<span>" + b2Cell[i].children[j].id + "</span>";
        } else {
          targetChgCell.innerHTML += "<br>" + thisChg;
          resultCell.innerHTML += "<br>" + resultLink;
          currRankCell.innerHTML +=
            "<br><span>" + b2Cell[i].children[j].id + "</span>";
        }
        if (thisRank.startsWith("Ms"))
          $("#" + b2Cell[i].children[j].innerText.toLowerCase())
            .next()
            .html(thisChg);

        var rikishiBgColor = window
          .getComputedStyle(b2Cell[i].children[j])
          .getPropertyValue("background-color");

        currRankCell.children[j * 2].style.background = rikishiBgColor;
        resultCell.children[j * 2].style.background = rikishiBgColor;
      }
    } else {
      resultCell.innerHTML = "";
      currRankCell.innerHTML = "";
      targetChgCell.innerHTML = "";
    }
  }
}

redips.resetBanzuke = function () {
  if (confirm("Reset the banzuke?") == true) {
    var redipsCell = document.querySelectorAll(".redips-only"),
      b2Cell = document.querySelectorAll(".b2"),
      chgCell = document.getElementsByClassName("ch");
    var c1 = document.querySelectorAll(".new"),
      c2 = document.querySelectorAll(".ch1"),
      c3 = document.querySelectorAll(".rs2"),
      c4 = document.querySelectorAll(".cur"),
      c5 = document.querySelectorAll(".ch2"),
      c6 = document.querySelectorAll(".nte");

    window.localStorage.removeItem("savedBanzuke");
    document.getElementById("makRik").innerHTML = 0;
    for (var i = 1; i < 8; i++)
      window.localStorage.removeItem("colCheck" + String(i));

    for (var i = 0; i < b2Cell.length; i++) {
      if (b2Cell[i].children.length > 0) {
        //b2Cell[i].style.border = "1px dashed dimgray";
        //chgCell[i].innerHTML = ' ';
        for (var j = b2Cell[i].children.length - 1; j >= 0; j--) {
          for (var k = 0; k < 100; k++) {
            if (redipsCell[k].classList.contains(b2Cell[i].children[j].id)) {
              rd.moveObject({
                obj: b2Cell[i].children[j],
                target: redipsCell[k],
              });
              redipsCell[k].children[0].style.display = "none";
              //b1Cell[k].style.removeProperty("border");
              break;
            }
          }
        }
      }
    }
    for (var i = 2; i < c1.length; i++) {
      if (c1[i].innerHTML != "") {
        c1[i].innerHTML = "";
        c2[i].innerHTML = "";
      }
    }
    for (var i = 2; i < c3.length; i++) {
      if (c3[i].innerHTML != "") {
        c3[i].innerHTML = "";
        c4[i].innerHTML = "";
        c5[i].innerHTML = "";
      }
      if (c6[i].children[0].innerHTML != "") c6[i].children[0].innerHTML = "";
    }
    location.reload();
  }
};

redips.arrange = function () {
  if (confirm("Confirm auto-arrange?") == true) {
    var rikishi = document.querySelectorAll(".se"),
      msCounter = document.getElementById("msRik"),
      juCounter = document.getElementById("juRik"),
      makuCounter = document.getElementById("makRik");

    for (var i = 0; i < rikishi.length; i++) {
      var rikishiRank = rikishi[i].id;

      if (
        (rikishiRank.startsWith("Ms") && rikishiRank.slice(2, -1) > 15) ||
        rikishiRank.startsWith("Sd")
      ) {
        /*
        if (rikishi[i].parentNode.classList.contains("b2")) {
          rd.moveObject({
            obj: rikishi[i], 
            target: document.querySelector('.' + rikishiRank), 
            callback: function () {
              document.querySelector('.' + rikishiRank).children[0].remove();
            }
          });
        }
        */
        continue;
      }
      if (!rikishi[i].parentNode.classList.contains("b2")) {
        var holder = document.createElement("a");

        holder.innerHTML = rikishi[i].innerText;
        holder.href = rikishi[i].children[0].href;
        holder.target = "_blank";
        rikishi[i].parentNode.appendChild(holder);
      } else {
        if (rikishi[i].parentNode.dataset.r.startsWith("J"))
          juCounter.innerHTML--;
        else if (rikishi[i].parentNode.dataset.r.startsWith("Ms"))
          msCounter.innerHTML--;
        else makuCounter.innerHTML--;
      }
      if (rikishiRank.startsWith("J")) juCounter.innerHTML++;
      else if (rikishiRank.startsWith("Ms")) msCounter.innerHTML++;
      else makuCounter.innerHTML++;
      rd.moveObject({
        obj: rikishi[i],
        target: document.querySelector('[data-r="' + rikishiRank + '"]'),
      });
    }
    updateInfoCells();
  }
};

function getChange(thisRank, targetCellRank) {
  var chg;

  if (thisRank == targetCellRank) chg = "─";
  else {
    const change = [
      ["calc", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!", "!!!"],
      [" ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!", "!!!", "!!!"],
      ["!!!", " ↑ ", "calc", " ↓ ", " ↓ ", "!!!", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!", "!!!", "!!!"],
      ["!!!", "!!!", " ↑ ", " ↑ ", "calc", " ↓ ", "!!!", "!!!"],
      ["!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ ", "!!!"],
      ["!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc", " ↓ "],
      ["!!!", "!!!", "!!!", "!!!", "!!!", "!!!", " ↑ ", "calc"],
    ];
    var r1, r2;

    switch (thisRank.charAt(0)) {
      case "Y":
        r1 = 0;
        break;
      case "O":
        r1 = 1;
        break;
      case "S":
        if (!thisRank.startsWith("Sd")) r1 = 2;
        else r1 = 7;
        break;
      case "K":
        r1 = 3;
        break;
      case "M":
        if (!thisRank.startsWith("Ms")) r1 = 4;
        else r1 = 6;
        break;
      default:
        r1 = 5;
    }
    switch (targetCellRank.charAt(0)) {
      case "Y":
        r2 = 0;
        break;
      case "O":
        r2 = 1;
        break;
      case "S":
        if (!targetCellRank.startsWith("Sd")) r2 = 2;
        else r2 = 7;
        break;
      case "K":
        r2 = 3;
        break;
      case "M":
        if (!targetCellRank.startsWith("Ms")) r2 = 4;
        else r2 = 6;
        break;
      default:
        r2 = 5;
    }

    if (change[r1][r2] != "calc") chg = change[r1][r2];
    else {
      var thisRankNum =
          r1 == 6 || r1 == 7
            ? parseInt(thisRank.slice(2, -1))
            : parseInt(thisRank.slice(1, -1)),
        targetRankNum =
          r2 == 6 || r2 == 7
            ? parseInt(targetCellRank.slice(2, -1))
            : parseInt(targetCellRank.slice(1, -1));

      if (thisRank.slice(-1) == "w") thisRankNum += 0.5;
      if (targetCellRank.slice(-1) == "w") targetRankNum += 0.5;

      chg = thisRankNum - targetRankNum;

      if (chg > 0) chg = "+" + chg;
    }
  }

  return chg;
}

function showSaving() {
  var saving = document.getElementById("progressText");
  saving.innerHTML = "Saved!";
  setTimeout(function () {
    saving.innerHTML = "";
  }, 1000);
}

if (window.addEventListener)
  window.addEventListener("load", redips.init, false);
else if (window.attachEvent) window.attachEvent("onload", redips.init);

/*
var hoshitori = [], 
    rikishiTr = document.getElementsByTagName("tr");

for (var i = 1; i < rikishiTr.length; i++) {
  var recordArr = [], 
    aiteArr = [], 
    hyper = rikishiTr[i].getElementsByTagName('a');

  for (var j = 1; j < hyper.length; j++) {
    aiteArr.push(hyper[j].title.split(' ')[2]);
    if (hyper[j].children[0].getAttribute("src") == "img/w.gif") {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(3);
      else 
        recordArr.push(1);
    }
    else {
      if (hyper[j].title.split(' ')[3] == "fusen") 
        recordArr.push(2);
      else 
        recordArr.push(0);
    }
  }
  var rikishiObj = {
    record: recordArr, 
    aite: aiteArr
  }
  hoshitori.push(rikishiObj);
}

var tori = document.getElementsByClassName("rb_torikumi"), recordArr = [], aiteArr = [], record;
for (var i = 0; i < tori[0].children[0].children.length; i++) {
  record = tori[0].children[0].children[i].children[1].children[0].src.split('_')[1];
  switch (record) {
    case "kuro.gif":
      record = 0; break;
    case "shiro.gif":
      record = 1; break;
    case "fusenpai.gif":
      record = 2; break;
    case "fusensho.gif":
      record = 3; break;
  }
  recordArr.push(record);
  aiteArr.push(tori[0].children[0].children[i].children[3].children[0].innerHTML.split(' ')[1]);
}
var rikishiObj = {
  record: recordArr, 
  aite: aiteArr
}
console.log(rikishiObj);
*/

document.addEventListener('DOMContentLoaded', function() {
    const banzuke1Config = [
        { prefix: 'Y', range: [1] },
        { prefix: 'O', range: [1, 2] },
        { prefix: 'S', range: [1] },
        { prefix: 'K', range: [1] },
        { prefix: 'M', range: Array.from({length: 17}, (_, i) => i + 1) },
        { divider: true },
        { prefix: 'J', range: Array.from({length: 14}, (_, i) => i + 1) },
        { divider: true },
        { prefix: 'Ms', range: Array.from({length: 60}, (_, i) => i + 1) }
    ];

    const banzuke2Config = [
        { prefix: 'Y', range: [1, 2] },
        { prefix: 'O', range: [1, 2, 3] },
        { prefix: 'S', range: [1, 2] },
        { prefix: 'K', range: [1, 2] },
        { prefix: 'M', range: Array.from({length: 18}, (_, i) => i + 1) },
        { divider: 'Juryo Guess - <span id="juRik">0</span>/28' },
        { prefix: 'J', range: Array.from({length: 14}, (_, i) => i + 1) },
        { divider: 'Makushita Joi Guess - <span id="msRik">0</span>/30' },
        { prefix: 'Ms', range: Array.from({length: 60}, (_, i) => i + 1) }
    ];

    populateBanzukeTable('banzuke1Body', banzuke1Config, createRowBanzuke1);
    populateBanzukeTable('banzuke2Body', banzuke2Config, createRowBanzuke2);
});

function populateBanzukeTable(tableId, config, createRow) {
    const tableBody = document.getElementById(tableId);
    config.forEach(item => {
        if (item.divider) {
            const dividerRow = createDividerRow(item.divider);
            tableBody.appendChild(dividerRow);
        } else {
            item.range.forEach(num => {
                const rank = item.prefix + num;
                const row = createRow(rank);
                tableBody.appendChild(row);
            });
        }
    });
}

function createRowBanzuke1(rank) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="rs1"></td>
        <td class="redips-only ${rank}e"></td>
        <td class="new hid"></td>
        <td class="ch1 hid"></td>
        <th>${rank}</th>
        <td class="redips-only ${rank}w"></td>
        <td class="rs1"></td>
        <td class="new hid"></td>
        <td class="ch1 hid"></td>`;
    return row;
}

function createRowBanzuke2(rank) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="nte hid"><div></div></td>
        <td class="cur"></td>
        <td data-r="${rank}e" class="redips-only b2"></td>
        <td class="rs2"></td>
        <td class="ch2"></td>
        <th>${rank}</th>
        <td class="cur"></td>
        <td data-r="${rank}w" class="redips-only b2"></td>
        <td class="rs2"></td>
        <td class="ch2"></td>
        <td class="nte hid"><div></div></td>`;
    return row;
}

function createDividerRow(title) {
    const row = document.createElement('tr');
    if (title) {
        row.innerHTML = `<th colspan="9" class="tableTitle">${title}</th>`;
    } else {
        row.classList.add('divider');
        row.innerHTML = '<td colspan="9"></td>';
    }
    return row;
}
