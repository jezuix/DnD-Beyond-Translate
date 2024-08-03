<p align="center">
  <img src="https://github.com/user-attachments/assets/33be99ae-798b-49ee-ad3a-dbac530e8c4e" style="width: 20%; height: 20%;" />
</p>

Projeto para melhroar a visualização de fichas de monstros **"HOMEBREW"** no site [D&D Beyond](https://www.dndbeyond.com/homebrew/monsters) para monstros criados em Português-Brasil (PT-BR).

# Objetivo
O meu objetivo era melhorar a visualizações das minhas fichas criadas no D&D Beyond, pois me irritava as minhas fichas sendo feitas com detalhes em português, porém, na visualização final que é o que eu realmente uso durante as sessões tudo ficava meio misturado, então pensando nisso fiz esse pequeno projeto.
Espero que seja útil para mais pessoas.

## Como funciona
O projeto é simples existe um script javascript que busca alguns termos dentro de algumas classes específicas do HTML do site e traduz para português brasil se baseando em uma lista de termos e suas traduções.

**PS.:** Tentei manter os termos oficiais na hora da tradução, porém, não encontrei todos os termos em livros traduzidos então pode ser que alguma coisa ou outra fique divergente.

## Como Usar

### Direto do script
O script no arquivo **"AutoDnDBeyondTranslateScript.js"** possui um script que traduz a página apenas copie todo o arquivo, entre no modo desenvolvedor do navegador e cole o script no console que ele deverá fazer a tradução.

### Como Plug-in Chrome
1. Abra chrome://extensions/ no Chrome.
2. Ative o modo Desenvolvedor. (Canto superior direito)
3. Clique em Carregar sem compactação.
4. Selecione a pasta do projeto (DnD-Beyond-Translate).

# Exemplo de Resultado

<table>
  <thread>
    <th>Ficha Original</th>
    <th>Ficha Traduzida</th>
  </thread>  
  <tbody>
    <td><img src="https://github.com/user-attachments/assets/9a00365f-d6f9-4cb7-bc17-1a194fefc894" align="right" alt="4"></td>
    <td><img src="https://github.com/user-attachments/assets/865ced1c-a25a-4839-8670-f13c60453390" align="right" alt="4"></td>
  </tbody>
</table>
Os detalhes da ficha já estavam em português por que eu havia feito para usar nas minhas aventuras, porém, ter uma ficha semi em português me irritava ...

## Possíveis problemas
* Como é um projeto baseado em HTML e classes, caso o site do D&D Beyond se atualize e mude a forma de montar as fichas dos montros esse script provavelmente irá parar de funcionar ou funcionar de forma errada.
* O projeto não converte números, mas muda a sigla **ft.** para **m.** pois nas minhas fichas eu já utilizava a unidade de medida **metros** mesmo a ficha mostrando e **pés (feet)**.
* Não testei em outros navegaores, nem mesmo em navegadores baseados no Chrome como é o caso do Opera.
* Caso usem o scripts em páginas fora do D&D Beyond provavelmente nada acontecerá pois existe um limitador de classes, porém, nunca se sabe!
* Isso é um projeto inicial e que foi desenvolvido apenas visando as minhas necessidades e observações iniciais então pode ser que ele não cumpra com suas expectativas, mals ae!
* O ícone/logo que eu criei é uma bixera por que eu não tenho a mínima noção de desenho e arte digital, mals ae²!
