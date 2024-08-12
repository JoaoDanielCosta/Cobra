const placar = {
 largura: 800,
 altura: 60,
 cor:"black",
 corTexto:"white",
 pontos:0,
 nomeJogo:"JOAO GAME",

desenhar(){
  canvasCtx.fillStyle=this.cor;
  canvasCtx.fillRect(0,0,this.largura,this.altura);
  canvasCtx.font="20px Fantasy";
  canvasCtx.textBaseline="middle";
  canvasCtx.textAlign="center";
  canvasCtx.fillStyle=this.corTexto;
  canvasCtx.fillText(this.nomeJogo,400,30);

}


}
placar.desenhar();