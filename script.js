var jogador;
var paredes = createGroup();
var caixas = createGroup();
var bombas = createGroup();
var tempoParaNovaBomba = 0;

var velocidadeJogador = 2.5;
var inicioJogadorX = 37.5;
var inicioJogadorY = 62.5;

criarCenario();
criarJogador();

function draw() {
  background("green");
  atualizarBombas();
  controlarJogador();
  drawSprites();
}

function criarJogador() {
  jogador = createSprite(
    inicioJogadorX,
    inicioJogadorY,
    25,
    25
  );

  jogador.setAnimation("bomberman-frente");
  jogador.scale = 0.2;
}

function controlarJogador() {
  jogador.velocityX = 0;
  jogador.velocityY = 0;

  if (keyDown("left")) {
    jogador.velocityX = -velocidadeJogador;
    jogador.setAnimation("bomberman-esquerda");
  }

  if (keyDown("right")) {
    jogador.velocityX = velocidadeJogador;
    jogador.setAnimation("bomberman-direita");
  }

  if (keyDown("up")) {
    jogador.velocityY = -velocidadeJogador;
    jogador.setAnimation("bomberman-costas");
  }

  if (keyDown("down")) {
    jogador.velocityY = velocidadeJogador;
    jogador.setAnimation("bomberman-frente");
  }

  jogador.collide(paredes);
  jogador.collide(caixas);
  
  controlarBombaDoJogador();
}

function adicionarParede(x, y) {
  var parede = createSprite(x, y, 25, 25);
  parede.setAnimation("wall");
  parede.scale = 0.25;
  paredes.add(parede);
}

function adicionarCaixa(x, y) {
  var caixa = createSprite(x, y, 25, 25);
  caixa.setAnimation("box");
  caixa.scale = 0.25;
  caixas.add(caixa);
}

function criarCenario() {
  for (var x = 12.5; x <= 387.5; x = x + 25) {
    adicionarParede(x, 37.5);
    adicionarParede(x, 387.5);
  }

  for (var y = 62.5; y <= 362.5; y = y + 25) {
    adicionarParede(12.5, y);
    adicionarParede(387.5, y);
  }

  for (var y = 87.5; y <= 337.5; y = y + 50) {
    for (var x = 62.5; x <= 337.5; x = x + 50) {
      adicionarParede(x, y);
    }
  }

  criarCaixas();
}

function criarCaixas() {
  adicionarCaixa(112.5, 62.5);
  adicionarCaixa(37.5, 137.5);
  adicionarCaixa(137.5, 112.5);
  adicionarCaixa(237.5, 212.5);
  adicionarCaixa(337.5, 312.5);
}

function controlarBombaDoJogador() {
  var apertouEspaco = keyWentDown("space");

  if (tempoParaNovaBomba > 0) {
    tempoParaNovaBomba = tempoParaNovaBomba - 1;
  }

  if (apertouEspaco && tempoParaNovaBomba == 0) {
    if (criarBomba()) {
      tempoParaNovaBomba = 25;
    }
  }
}

function criarBomba() {
  // Vamos usar a posição do jogador para criar a bomba.
  return false;
}

function atualizarBombas() {
  // Vamos atualizar o pavio de cada bomba.
}
