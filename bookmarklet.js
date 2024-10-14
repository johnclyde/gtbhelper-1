if (!window.location.href.startsWith("http://sumodb.sumogames.de/gtb/GTBEntry.aspx")) {
  setTimeout(() => {
    alert("Please make sure you're on the GTB entry form page (and the URL starts with http, not https), then try again.");
  }, 1000);
}
else if (!document.querySelector("#helperFrame")) {
  var frame = document.createElement("iframe");
  var helperUrl = "https://gtbhelper.vercel.app";
  var loadingBox = document.createElement("div");

  loadingBox.innerText = "Please wait...";
  loadingBox.id = "pleaseWaitBox";
  loadingBox.style.cssText = "border-radius: 10px;position: fixed;top: 20px;width: fit-content;padding: 10px 15px;background: white;left: 50%;transform: translateX(-50%);border: 1px outset gray;box-shadow: 5px 5px 3px #0006;";
  document.body.appendChild(loadingBox);
  frame.setAttribute("src", helperUrl);
  frame.style.display = "none";
  frame.id = "helperFrame";
  frame.addEventListener("load", function() {
    document.getElementById("pleaseWaitBox").remove();
    this.contentWindow.postMessage("Requesting data", '*');
  });
  document.body.appendChild(frame);
  window.addEventListener("message", function(event) {
    if (event.origin != helperUrl) return;
    if (event.data.message == "rikishi ids") {
      var ids = event.data.ids;
      var selects = document.getElementsByTagName("select");
      var rikishiCount = 0;
      var doneBox = document.createElement("div");

      for (var i = 0; i < 58; i++) {
        selects[i].value = -1;
        for (var j = 0; j < selects[i].options.length; j++) {
          if (selects[i].options[j].value == ids[i]) {
            selects[i].value = ids[i];
            if (ids[i] != -1) rikishiCount++;
            break;
          }
        }
      }
      if (rikishiCount != 42)
        this.alert("Notice: Your entry has " + rikishiCount + " rikishi.");
      doneBox.innerText = "Done!";
      doneBox.id = "doneBox";
      doneBox.style.cssText = "border-radius: 10px;position: fixed;top: 20px;width: fit-content;padding: 10px 15px;background: lightgreen;left: 50%;transform: translateX(-50%);border: 1px outset gray;box-shadow: 5px 5px 3px #0006;";
      document.body.appendChild(doneBox);
      setTimeout(() => {
        this.document.getElementById("doneBox").remove();
      }, 1000);
    }
  });
}
else
  document.querySelector("#helperFrame").contentWindow.postMessage("Requesting data", '*');