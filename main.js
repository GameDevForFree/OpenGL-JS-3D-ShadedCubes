const canvas = document.getElementById("canvas");

const width = canvas.width;
const height = canvas.height;

const gl = canvas.getContext("webgl");

if (gl == null){
    alert("Webgl doesn't work in this browser");
}

gl.clearColor(0.5, 0.5, 0.5, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);


function render()
{
    /*
    gl.clear resets the screen to a grey background

    create:
    - code that interacts with the gpu
    */ 
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function Update(delta)
{
    return 0
}

let p
function running(t)
{
    const delta = (t - p) / 1000 || 0
    Update(delta)
    render()
    requestAnimationFrame(running)
}
running()