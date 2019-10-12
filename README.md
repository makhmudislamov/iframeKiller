# iframeKiller

### Anti-clickjacking Google Chrome extension.

#### Current status

The extension executes frame-killing script:
` if (self == top) {`
`    // Everything checks out, show the page.`
`    document.documentElement.style.display = 'block';`
`  } else {`
`    // Break out of the frame.`
`    top.location = self.location;`
`  }`

Further testing and imporvement is needed

#### Description

iframeKiller scans users' webpage for invisbly framed malicious links and notifies the users about the potential harm.

#### How to install this extension locally:

1. Download this repo.
2. Open the Extension Management page by navigating to `chrome://extensions`.
3. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
4. Click the **LOAD UNPACKED** button and select the extension directory.

#### How to use this extension locally:

1. Click the extension icon on your Chrome browser on top right corner, Green button will pop up.
2. Push `Click to execute iframe-killing script` button. (the script will run on current tab in the background)
3. After clicking confirmation window will pop up.


