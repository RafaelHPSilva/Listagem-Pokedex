const botaoTrocaTema = document.querySelector('#alterar_tema')
const body = document.querySelector('#corpo_pagina')
const imagemBotao = document.querySelector('.imagem_botao')

botaoTrocaTema.addEventListener('click', () => {
  const modoEscuroAtivo = body.classList.contains('modo_escuro')
  body.classList.toggle('modo_escuro')
  if (modoEscuroAtivo) {
    imagemBotao.setAttribute('src', './src/images/sun.png')
  } else {
    imagemBotao.setAttribute('src', './src/images/moon.png')
  }
})
