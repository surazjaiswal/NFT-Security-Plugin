fetch("https://dummyjson.com/products")
  .then((data) => data.json())
  .then((productData) => {
    products = productData.products;

    //Create a HTML Table element.
    var table = document.getElementById("linkTable");

    //Add the header row.
    var row = table.insertRow(-1);

    //Add the header cells.
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "#";
    row.appendChild(headerCell);

    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Title";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Category";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Brand";
    row.appendChild(headerCell);

    //Add the data rows.
    for (var i = 0; i < products.length; i++) {
      //Add the data row.
      var row = table.insertRow(-1);

      //Add the data cells.
      var cell = row.insertCell(-1);
      cell.innerHTML = products[i].id;

      cell = row.insertCell(-1);
      cell.innerHTML = products[i].title;

      cell = row.insertCell(-1);
      cell.innerHTML = products[i].category;

      cell = row.insertCell(-1);
      // cell.innerHTML = products[i].brand;
      cell.innerHTML =
        '<a href="' +
        products[i].images[0] +
        '" target="_blank">' +
        products[i].brand +
        "</a>";
    }
  });

//   const defaultFilters = [
//     "*://*.doubleclick.net/*",
//     "*://partner.googleadservices.com/*",
//     "*://*.googlesyndication.com/*",
//     "*://*.google-analytics.com/*",
//     "*://creative.ak.fbcdn.net/*",
//     "*://*.adbrite.com/*",
//     "*://*.exponential.com/*",
//     "*://*.quantserve.com/*",
//     "*://*.scorecardresearch.com/*",
//     "*://*.zedo.com/*",
//   ]

// logs-->entries[0]-->request-->urls
