window.addEventListener('load', () => {
  const canvas = document.getElementById('example');
  const ctx = canvas.getContext('2d');

  const width = canvas.width;
  const height = canvas.height;

  ctx.beginPath();
  ctx.lineWidth = '20';
  ctx.arc(350, 300, 200, -2, 3.9, true);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = '20';
  ctx.arc(350, 180, 200, 2, 2.4, false);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = '20';
  ctx.arc(700, 300, 200, -0.4, -1, true);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = '20';
  ctx.arc(700, 180, 200, 0.5, 1, false);
  ctx.stroke();
  ctx.closePath();

  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.moveTo(260, 120);
  ctx.lineTo(730, 120);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(550, 250, 200, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();
});
