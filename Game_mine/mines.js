window.onload = function(){
            
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle='black';
    ctx.lineWidth = 4;

    for(var x=0; x <= 500; x=x+50){
        ctx.moveTo(x,0);
        ctx.lineTo(x,500);
        ctx.stroke();
    }

    for(var y=0; y <= 500; y=y+50){
        ctx.moveTo(0,y);
        ctx.lineTo(500,y);
        ctx.stroke();
    }
}