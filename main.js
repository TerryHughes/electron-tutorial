const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const window = new BrowserWindow({
		width:  800,
		height: 600,
	});

	window.loadFile('index.html');
};

const isMacOS = () => {
	return process.platform === 'darwin';
};

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (!isMacOS()) {
		app.quit();
	}
});
