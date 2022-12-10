var canvas=new fabric.Canvas("myCanvas");

px=10;
py=10;

bw=30;
bh=30;

var pobj="";
var bobj="";

function pupdate()
{
    fabric.Image.fromURL ("player.png", function(Img)
    {
        pobj=Img;

        pobj.scaleToWidth(150);
        pobj.scaleToHeight(140);
        pobj.set({top:py,left:px});
    
        canvas.add(pobj);
    });
}

function newblock(bimg)
{
    fabric.Image.fromURL (bimg, function(Img)
    {
        bobj=Img;

        bobj.scaleToWidth(bw);
        bobj.scaleToHeight(bh);
        bobj.set({top:py,left:px});
    
        canvas.add(bobj);
    });
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    kp=e.keyCode;

    if(e.shiftKey==true && kp=='80')   //shift+p increase size of block
    {
        bw=bw+10; 
        bh=bh+10;
        document.getElementById("current_width").innerHTML=bw;
        document.getElementById("current_height").innerHTML=bh;
    }

    if(e.shiftKey==true && kp=='77')   //shift+m decrease size of block
    {
        bw=bw-10; 
        bh=bh-10;
        document.getElementById("current_width").innerHTML=bw;
        document.getElementById("current_height").innerHTML=bh;
    }

    if(kp=='38')
    {
        up();
    }
    if(kp=='40')
    {
        down();
    }
    if(kp=='37')
    {
        left();
    }
    if(kp=='39')
    {
        right();
    }

    if(kp=='87')
    {
        newblock("wall.jpg");
    }
    if(kp=='71')
    {
        newblock("ground.png");
    }
    if(kp=='76')
    {
        newblock("light_green.png");
    }
    if(kp=='84')
    {
        newblock("trunk.jpg");
    }
    if(kp=='82')
    {
        newblock("roof.jpg");
    }
    if(kp=='89')
    {
        newblock("yellow_wall.png");
    }
    if(kp=='68')
    {
        newblock("dark_green.png");
    }
    if(kp=='85')
    {
        newblock("unique.png");
    }
    if(kp=='67')
    {
        newblock("cloud.jpg");
    }
}

function up()
{
    if (py>=0)
    {
        py=py-bh;
        canvas.remove(pobj);
        pupdate();
    }
}

function down()
{
    if (py<=500)
    {
        py=py+bh;
        canvas.remove(pobj);
        pupdate();
    }
}

function left()
{
    if (px>=0)
    {
        px=px-bw;
        canvas.remove(pobj);
        pupdate();
    }
}

function right()
{
    if (px<=850)
    {
        px=px+bw;
        canvas.remove(pobj);
        pupdate();
    }
}