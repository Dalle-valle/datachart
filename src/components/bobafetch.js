export function checkInfo(callback) {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then((e) => e.json())
    .then((data) => callback(data));
}
