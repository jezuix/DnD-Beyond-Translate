Projeto para melhroar a visualização de fichas de monstros **"HOMEBREW"** no site [D&D Beyond](https://www.dndbeyond.com/homebrew/monsters).

# Objetivo
O meu objetivo era melhorar a visualizações das minhas fichas criadas no D&D Beyond.

## Como funciona
O projeto é simples existe um script javascript que busca alguns termos dentro de algumas classes específicas do HTML do site e traduz para português brasil se baseando em uma lista de termos e suas traduções.

**PS.:** Tentei manter os termos oficiais na hora da tradução, porém, não encontrei todos os termos em livros traduzidos então pode ser que alguma coisa ou outra fique divergente.

## Como Usar

### Direto do script
O script no arquivo **"AutoDnDBeyondTranslateScript.js"** possui um script que traduz a página apenas copie todo o arquivo, entre no modo desenvolvedor do navegador e cole o script no console que ele deverá fazer a tradução.

### Como Plug-in Chrome
Abra chrome://extensions/ no Chrome.
Ative o modo Desenvolvedor. (Canto superior direito)
Clique em Carregar sem compactação.
Selecione a pasta do projeto (DnD-Beyond-Translate).

## Possíveis problemas
* Como é um projeto baseado em HTML e classes, caso o site do D&D Beyond se atualize e mude a forma de montar as fichas dos montros esse script provavelmente irá parar de funcionar ou funcionar de forma errada.
* Caso usem o scripts em páginas fora do D&D Beyond provavelmente nada acontecerá pois existe um limitador de classes, porém, nunca se sabe!
* Isso é um projeto inicial e que foi desenvolvido apenas visando as minhas necessidades e observações iniciais então pode ser que ele não cumpra com suas expectativas, mals ae!
