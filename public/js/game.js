// start setup
px = 200;
py = 200;
xv = 0;
yv = 0;
grav = 0.5;
onG = false; //ongroud
holdLeft = false;
holdRight = false;
plat = []; //platforms
platcont = 50;


window.onload = function () {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    setInterval(update, 1000 / 30);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    for (var i = 0; i < platcont; i++) {
        plat.push(
            {
                x: Math.random() * canv.width,
                y: Math.random() * canv.height,
                w: Math.random() * 100 + 30,
                h: Math.random() * 30 + 20
            }
        )
    }

}



function update() {

    // speed to move left and right
    if (holdLeft) {
        xv = -4;
    }
    if (holdRight) {
        xv = 4;
    }

    px = px + xv;
    py = py + yv;

    if (onG) {
        xv = xv * 0.8;
    } else {
        yv = yv + grav;
    }

    //consider collision on feet of players feet
    onG = false;
    for (i = 0; i < 50; i++) {
        if (px > plat[i].x && px < plat[i].x + plat[i].w && py > plat[i].y && py < plat[i].y + plat[i].h) {
            py = plat[i].y;
            onG = true;
        }
    }


    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    //char printing
    ctx.fillStyle = "yellow";
    ctx.fillRect(px - 5, py - 20, 10, 20);

    //this is printing the map (procedurelly generated as plat is random)
    ctx.fillStyle = "white";
    for (i = 0; i < platcont - 1; i++) {
        ctx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    }
    ctx.fillStyle = "red";
    for (i = platcont - 1; i < platcont; i++) {
        ctx.fillRect(plat[i].x, plat[i].y, plat[i].w, plat[i].h);
    }
}


// hold jump to jump higher
function keyDown(evt) {
    switch (evt.keyCode) {
        case 37:
            holdLeft = true;
            break;
        case 38:
            if (onG) {
                yv = - 13;
            }
            break;
        case 39:
            holdRight = true;
            break;
    }
}


// simple click jump
function keyUp(evt) {
    switch (evt.keyCode) {
        case 37:
            holdLeft = false;
            break;
        case 38:
            if (yv < -5) {
                yv = - 3;
            }
            break;
        case 39:
            holdRight = false;
            break;
    }
}