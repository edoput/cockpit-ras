let summaryOut = document.getElementById('summary');
let errorCountOut = document.getElementById('error-count');
let layoutOut = document.getElementById('layout');

function refresh () {
	var proc = cockpit.spawn(["ras-mc-ctl", "--summary"])
	proc.done(function (data) {
		summaryOut.innerHTML = data;
	})

	var proc = cockpit.spawn(["ras-mc-ctl", "--error-count"])
	proc.done(function (data) {
		errorCountOut.innerHTML = data;
	})

	var proc = cockpit.spawn(["ras-mc-ctl", "--layout"])
	proc.done(function (data) {
		layoutOut.innerHTML = data;
	})
}

window.onload = refresh();
