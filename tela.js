const Tela = {
    largura:800,
    Altura:400,
    Cor:"Green",
    desenhar(){
        canvasCtx.fillStyle=this.Cor;
        canvasCtx.fillRect(0,60,this.largura,this.Altura)



    }

     


}
Tela.desenhar();