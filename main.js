Sheet = document.getElementById("my_canvas");
ctx = Sheet.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400,500,50,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.lineWidth = 5;
ctx.arc(200,600,90,0,5 * Math.PI);
ctx.stroke();






ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 10;
ctx.arc(600,500,40,0,2 * Math.PI);
ctx.stroke();
