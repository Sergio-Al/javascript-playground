function polygon(c, n, x, y, r, angle = 0, counterClockwise = false) {
  c.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
  let delta = (2 * Math.PI) / n;
  for (let i = 1; i < n; i++) {
    angle += counterClockwise ? -delta : delta;
    c.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
  }
  c.closePath();
}

let c = document.querySelector("canvas.first").getContext("2d");

c.beginPath();
polygon(c, 3, 50, 70, 50);
polygon(c, 4, 150, 60, 50, Math.PI / 4);
polygon(c, 5, 255, 55, 50);
polygon(c, 6, 365, 53, 50, Math.PI / 6);
polygon(c, 4, 365, 53, 20, Math.PI / 4, true);

c.fillStyle = "#00f";
c.strokeStyle = "#0f0";
c.lineWidth = 5;

c.fill();
c.stroke();
console.log("this is running");
