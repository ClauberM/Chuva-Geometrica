let borda1 = 200
var borda2 = 20
var estado

var math
var quadrado
var dima

var x = 200
var y = 300

var xq
var yq

var xd
var yd

var xt
var yt

var xc
var yc

var xr
var yr

var xl
var yl

var xq2
var yq2

var pontos = 0

n_da_fase = 0


function preload(){
  math = loadImage('assets/math.png')
  quadrado = loadImage('assets/quadrado40.png')
  eu = loadImage('assets/eu2.jpg')
  dima = loadImage('assets/diamante40.png')
  troll = loadImage('assets/troll40.png')
  cubo = loadImage('assets/cubo40.png')
  ret = loadImage('assets/retângulo40.png')
  losan = loadImage('assets/losango40.png')
  quadrado2 = loadImage('assets/quadrado2.png')

  soundFormats('mp3', 'ogg', 'wav')
  som = loadSound('assets/open.wav', loadOpen)
}

function loadOpen(){
  som.play()
}

function setup(){
  createCanvas(400,400)
  imagem1 = loadImage('céu.png')
  
  estado = 1
  
  xq = 50
  yq = -100
  
  xd = 300
  yd = -200
  
  xt = 200
  yt = -290
  
  xr = 50
  yr = -400
  
  xc = -600
  yc = 300
  
  xl = 850
  yl = 50
  
  xq2 = 100
  yq2 = -50
    
}


function draw(){
  if(estado==1){
    menu()
  }else if(estado==2){
    jogar()
  }else if(estado==3){
    instruções()
  }else if(estado==4){
    créditos()
  }else if(estado==5){
    fase1()
  }else if(estado==6){
    fase2()
  }else if(estado==7){
    derrota()
  }else if(estado==8){
    vitória()
  }
}
 

function keyPressed(){
  if(keyCode === DOWN_ARROW && borda1 < 300){
    borda1 = borda1+60
  }
  
  if(keyCode === UP_ARROW && borda1 != 200){
    borda1 = borda1-60
    

  } 
  
  if(keyCode == ENTER && borda1 == 200){
    estado = 2

  }  
  
  if(keyCode == ENTER && borda1 == 260){
    estado = 3
  }
  
  if(keyCode == ENTER && borda1 == 320){
    estado = 4

  }  
  
  if(keyCode == ESCAPE){
    estado = 1
  }
}


function menu(){
  background(imagem1)
  
  xd = 300
  yd = -300
  
  noStroke()
  
  fill(211,211,211)
  rect(100,200,200,50,10)
  rect(100,260,200,50,10)
  rect(100,320,200,50,10)
  
  textSize(28)
  textAlign(CENTER)
  fill(0,0,255)
  text("Chuva Geométrica", 200, 80)
  text("Jogar", 200, 235)
  text("Instruções", 200, 295)
  text("Créditos", 200, 355)
  
  noFill()
  stroke(0,0,255)
  rect(100,borda1,200,50,10)
  
  
}


function jogar(){
  background(imagem1)
  image(math, x, y)
  image(quadrado, xq, yq, 50, 50)
  image(dima, xd, yd)
  image(troll, xt, yt)
  image(ret, xr, yr)
  image(cubo, xc, yc)
  image(losan, xl, yl)
  image(quadrado2, xq2, yq2)
  
  if(keyIsDown(LEFT_ARROW)){
    x-=5
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    x+=5
  }
  
  if(keyIsDown(UP_ARROW)){
    y-=5
  }
  
  if(keyIsDown(DOWN_ARROW)){
    y+=5
  }

  
  if(yq == 400 && yq == x){
    yq = 0
  }else{
    yq = yq+2.5
  }
    
  if(yd == 400 && yd == x){
    yd = 0
  }else{
    yd = yd+3
  }
  
   if(yt == 400 && yt == x){
    yt = 0
  }else{
    yt = yt+2.7
  }
  
  if(yr == 400 && yr == x){
    yr = 0
  }else{
    yr = yr+3
  }
  
  if(xc == 400 && xc == y){
    xc = 0
  }else{
    xc = xc+3
  }
  
  if(xl == 400 && xl == y){
    xl = 0
  }else{
    xl = xl-3
  }
  
  if(y <= yd+50 && y > yd && x <= xd+50 && x >= xd){
    estado = 7
  } 
  
  if(yd == 399){
    yd = -300
  }
  
  if(y <= yt+50 && y > yt && x <= xt+50 && x >= xt){
    estado = 7
  } 
  
  if(yt == 398){
    yt = -290
  }
  
  if(y <= yc+50 && y > yc && x <= xc+50 && x >= xc){
    estado = 7
  } 
  
  if(xc == 399){
    xc = -600
  }
  
  if(y <= yr+50 && y > yr && x <= xr+50 && x >= xr){
    pontos = pontos+1
    yr = -400
  } 
  
  if(y <= yq+50 && y > yq && x <= xq+50 && x >= xq){
    pontos = pontos+1
    yq = -100
  }
  
  if(yq == 399){
    yq = -100
  }
  
  if(y <= yl+50 && y > yl && x <= xl+50 && x >= xl){
    pontos = pontos+1
    yl = 50
  } 
  
  if(y <= yq2+50 && y >= yq2 && x <= xq2+50 && x >= xq2){
    pontos = pontos+1
    yq2 = 400
  } 
  
  
  
  textSize(20)
  fill(0,0,255)
  text("Pontos:"+" "+pontos, 195, 390)
    
  if(pontos==10){
    estado = 6
  }
  }
  

function fase2(){
  background(imagem1)
  image(math, x, y)
  image(quadrado, xq, yq, 50, 50)
  image(dima, xd, yd)
  image(troll, xt, yt)
  image(ret, xr, yr)
  image(cubo, xc, yc)
  image(losan, xl, yl)
  image(quadrado2, xq2, yq2)
  
  if(keyIsDown(LEFT_ARROW)){
    x-=5
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    x+=5
  }
  
  if(keyIsDown(UP_ARROW)){
    y-=5
  }
  
  if(keyIsDown(DOWN_ARROW)){
    y+=5
  }

  
  if(yq == 400 && yq == x){
    yq = 0
  }else{
    yq = yq+3
  }
    
  if(yd == 400 && yd == x){
    yd = 0
  }else{
    yd = yd+4
  }
  
   if(yt == 400 && yt == x){
    yt = 0
  }else{
    yt = yt+3
  }
  
  if(yr == 400 && yr == x){
    yr = 0
  }else{
    yr = yr+4
  }
  
  if(xc == 400 && xc == y){
    xc = 0
  }else{
    xc = xc+4
  }
  
  if(xl == 400 && xl == y){
    xl = 0
  }else{
    xl = xl-4
  }
  
  if(y <= yd+50 && y > yd && x <= xd+50 && x >= xd){
    estado = 7
  } 
  
  if(yd == 399){
    yd = -300
  }
  
  if(y <= yt+50 && y > yt && x <= xt+50 && x >= xt){
    estado = 7
  } 
  
  if(yt == 398){
    yt = -290
  }
  
  if(y <= yc+50 && y > yc && x <= xc+50 && x >= xc){
    estado = 7
  } 
  
  if(xc == 399){
    xc = -600
  }
  
  if(y <= yr+50 && y > yr && x <= xr+50 && x >= xr){
    pontos = pontos+1
    yr = -400
  } 
  
  if(y <= yq+50 && y > yq && x <= xq+50 && x >= xq){
    pontos = pontos+1
    yq = -100
  }
  
  if(yq == 399){
    yq = -100
  }
  
  if(y <= yl+50 && y > yl && x <= xl+50 && x >= xl){
    pontos = pontos+1
    yl = 50
  } 
  
  if(y <= yq2+50 && y >= yq2 && x <= xq2+50 && x >= xq2){
    pontos = pontos+1
    yq2 = 400
  } 
  
  
  
  textSize(20)
  fill(0,0,255)
  text("Pontos:"+" "+pontos, 195, 390)
    
  if(pontos==25){
    estado = 8
  }
  
  textSize(20)
  fill(0,0,255)
  text("Fase 2", 195, 20)
}

function instruções(){
  background(imagem1)
  
  noStroke()
  
  fill(211,211,211)
  rect(80,20,250,360,10)
  
  stroke(0,0,255)
  rect(40,borda2,320,360,10)
  
  textSize(15)
  fill(0,0,255)
  text('CHUVA GEOMÉTRICA', 122, 62)
  text('é um jogo educacional', 282, 62)
  text('desenvolvido para alunos do 6º ano', 162, 82)
  text('do Ensino', 320, 82)
  text('Fundamental II. Em cada fase, o jogo irá fazer', 198, 102)
  text('"chover" quadriláteros do céu enquanto ele', 188, 121)
  text('solicita um tipo de quadrilátero específico. O', 193, 140)
  text('objetivo do jogo é fazer com que o matemático', 200, 160)
  text('(personagem do jogo) acerte a maior quantidade', 205, 180)
  text('de quadriláteros possíveis. Ao avançar de fase a', 205, 200)
  text('velocidade de queda dos quadriláteros aumenta.', 205, 220)
  text('Habilidades: Identificar características dos', 185, 280)
  text('quadriláteros, classificá-los em relação a lados', 200, 300)
  text('e a ângulos e reconhecer a inclusão e a', 178, 320)
  text('intersecção de classes entre eles. (EF06MA20)', 201, 340)
  
  fill(0,0,0)
  noStroke()
  text('>> Volte ao menu apertando a tecla "ESC" <<', 195, 395)
}


function créditos(){
  background(imagem1)
  
  noStroke()
  
  fill(211,211,211)
  rect(80,20,250,360,10)
  
  stroke(0,0,255)
  rect(40,borda2,320,360,10)
  
  textSize(15)
  fill(0,0,255)
  text('Programador: Cláuber Medeiros', 155, 62)
  text('◆ Bacharelando em Ciências e Tecnologia', 190, 280)
  text('◆ Universidade Federal do Rio Grande do Norte', 209, 300)
  
  
  fill(0,0,0)
  noStroke()
  text('>> Volte ao menu apertando a tecla "ESC" <<', 195, 395)
 
  
  image(eu,80,72)
  

}

function vitória(){
  background(imagem1)
  
  textSize(20)
  fill(0,0,255)
  text('Parabéns! você concluiu o jogo 🥳', 200, 200)
  
  textSize(15)
  fill(0,0,0)
  noStroke()
  text('>> Volte ao menu apertando a tecla "ESC" <<', 195, 300)
  text('Caso dê algum problema reinicie a página', 195, 320)

}


function derrota(){
  background(imagem1)
  
  textSize(30)
  fill(0,0,255)
  text('Derrota 😔', 200, 200)
  
  textSize(15)
  fill(0,0,0)
  noStroke()
  text('>> Volte ao menu apertando a tecla "ESC" <<', 195, 300)
  text('Caso dê algum problema reinicie a página', 195, 320)
}

