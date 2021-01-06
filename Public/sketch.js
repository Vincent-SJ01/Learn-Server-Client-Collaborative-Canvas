let r;
let g;
let b;
let r_input;
let g_input;
let b_input;

let sambung;


function setup(){
    createCanvas(720,720);
    background(0);

    let cls = createButton("Clear Me!");
    cls.mousePressed(ClearCanvas);

    r = createSlider(0,255,100,1);
    r.changed(changeInput);
    r_input = createInput("");
    r_input.style("width","50px");
    r_input.changed(changeSlider);

    g = createSlider(0,255,100,1);
    g.changed(changeInput);
    g_input = createInput("");
    g_input.style("width","50px");
    g_input.changed(changeSlider);

    b = createSlider(0,255,100,1);
    b.changed(changeInput);
    b_input = createInput("");
    b_input.style("width","50px");
    b_input.changed(changeSlider);

    //sambungkan ke ip addres punyaku
    sambung = io.connect(`http://xxx.xxx.x.xx:8000`);

    sambung.on("DataServer", GambarLain);

}


function draw(){

}


function mouseDragged(){

    noStroke();
    fill(r.value(),g.value(),b.value());
    if(mouseX <= width && mouseY <= height){
        ellipse(mouseX,mouseY,25);

        let data = {
            x : mouseX,
            y : mouseY,

            r : r.value(),
            g : g.value(),
            b : b.value()
        }

        sambung.emit("DataClient",data);


    }

}

function ClearCanvas(){
    background(0);
}

function changeInput(){
    r_input.value(r.value());
    g_input.value(g.value());
    b_input.value(b.value());


}

function changeSlider(){
    r.value(r_input.value());
    g.value(g_input.value());
    b.value(b_input.value());

}


function GambarLain(data){

    noStroke();
    fill(data.r,data.g,data.b);
    ellipse(data.x,data.y,25);

}
