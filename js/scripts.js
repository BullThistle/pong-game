class Vec
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }
}

class Rect
{
    constructor(w,h)
    {
        this.pos = new Vec;
        this.size = new Vec(w,h);
    }
    get left()
    {
        return this.pos.x - this.size.x /2;
    }
    get right()
    {
        return this.pos.x - this.size /2;
    }
}

class Ball extends Rect
{
    constructor()
    {
        super(10, 10)
        this.vel = new Vec;
    }
}

const ball = new Ball;
console.log(ball);

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.pos.x = Ball;
ball.pos.y = 100;
ball.pos.y = 50;

ball.vel.x = 100;
ball.vel.y = 100;


let lastTime;
function callback(millis){
    if(lastTime){
        update(millis - lastTime) / 1000;
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

function update(dt){
    context.fillStyle = '#000';
    context.fillRect( 0, 0, canvas.width, canvas.height);

    if(ball.x < 0 || ball.y > canvas.width){
        ball.vel.x = -ball.vel.x;
    }
    if(ball.y < 0 || ball.y > canvas.width){
        ball.vel.y = -ball.vel.y;
    }


    context.fillStyle = '#fff';
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

callback();
