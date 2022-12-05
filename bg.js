block_url = ["https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"];

var count = 0;

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log(details);
    {
      count++;

      const url = details.url;
      const domain = new URL(url).hostname.replace("www.", "");

      var table = document.getElementById("linkTable");

      //Add the data row.
      var row = table.insertRow(-1);

      //Add the data cells.
      var cell = row.insertCell(-1);
      cell.innerHTML = count;

      cell = row.insertCell(-1);
      cell.innerHTML = domain;

      // cell = row.insertCell(-1);
      // cell.innerHTML = details.type;

      cell = row.insertCell(-1);
      // cell.innerHTML = details.brand;
      cell.innerHTML =
        '<a href="' + details.url + '" target="_blank">' + "URL" + "</a>";
    }
    if (block_url.includes(details.url)) {
      return { cancel: true };
    } else {
      return { cancel: false };
    }
  },
  {
    urls: ["*://*/*"],
  },
  ["blocking"]
);
