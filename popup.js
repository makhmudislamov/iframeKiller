let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function () {
    let frameKillerCode = 
    `
    if (self == top) {
    // Everything checks out, show the page.
    document.documentElement.style.display = 'block';
    } else {
    // Break out of the frame.
    top.location = self.location;
    }
    `
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            // executes frame-killing script 
            { code: frameKillerCode });
    });
    
    
    alert("Frame-Killing code is executed - this page is safe from iframe now");
};