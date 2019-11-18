// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { ipcRenderer } = require('electron');

console.log('renderer.js loaded');

module.exports.clearAuth = function () {
  const clientView = document.getElementById('clientView')
  clientView.src = 'data:text/html,Cleared....'
  ipcRenderer.send('clear-auth')
}

module.exports.reload = function () {
  const clientView = document.getElementById('clientView')
  clientView.src = 'data:text/html,Loading....'
  setTimeout(() => clientView.src = 'https://localhost:8443/', 1000)
}
