block_url = ["https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"]

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    console.log(details);
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