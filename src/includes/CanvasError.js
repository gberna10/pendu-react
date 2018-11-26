

class CanvasError {

    static getCanvas(ctx, error) {
        switch(error) {
            case 7:
              console.log("kika 7");
              ctx.beginPath();
              ctx.moveTo(50, 250);
              ctx.lineTo(150, 250);
              ctx.stroke();
              ctx.closePath();
              break;
            case 6:
              console.log("kika 6");
              ctx.beginPath();
              ctx.moveTo(100, 50);
              ctx.lineTo(100, 250);
              ctx.stroke();
              ctx.closePath();
              break;
            case 5:
            console.log("kika 5");
              ctx.beginPath();
              ctx.moveTo(100, 50);
              ctx.lineTo(200, 50);
              ctx.stroke();
              ctx.closePath();
              break;
            case 4:
            console.log("kika 4");
              ctx.beginPath();
              ctx.moveTo(100,70);
              ctx.lineTo(130, 50);
              ctx.stroke();
              ctx.closePath();
              break;
            case 3:
            console.log("kika 3");
              ctx.beginPath();
              ctx.moveTo(180, 50);
              ctx.lineTo(180, 90);
              ctx.stroke();
              ctx.closePath();
              break;
            case 2:
            console.log("kika 2");
              ctx.beginPath();
              ctx.arc(180, 108, 17, 0, 2 * Math.PI);
              ctx.moveTo(180, 124);
              ctx.lineTo(180, 160);
              ctx.moveTo(200, 136);
              ctx.lineTo(160, 136);
              ctx.moveTo(200, 180);
              ctx.lineTo(180, 159);
              ctx.moveTo(160, 180);
              ctx.lineTo(180, 159);
              ctx.stroke();
              ctx.closePath();
              break;
            case 1:
            console.log("kika 1");
              ctx.beginPath();
              ctx.moveTo(176, 104);
              ctx.lineTo(171, 109);
              ctx.moveTo(171, 104);
              ctx.lineTo(176, 109);
              ctx.moveTo(184, 104);
              ctx.lineTo(189, 109);
              ctx.moveTo(189, 104);
              ctx.lineTo(184, 109);
              ctx.stroke();
              ctx.closePath();
              break;
          }
    }
}

export default CanvasError;