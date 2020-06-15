<h1 align="center"> 
	Chat em tempo real com React Native
</h1>

## ⚙️  Funcionamento

A aplicação foi feita usando React Native e firebase. Na página de login você escreve seu nome 
e entrar que será redirecionado para a página de chat. Depois é só começar a digitar que quem 
estiver no chat receberá suas mensagens em tempo real.

<h1 align="center">
    <img alt="chat" title="#chat" src=".github/chat.gif" width="250px" />
</h1>


## 📱 Como usar
Para copiar e executar essa aplicação você precisa do [Git](https://git-scm.com), [Expo][expo] e [Yarn][yarn] intalados no seu computador.

```bash
# Clonar esse repositório
$ git clone https://github.com/andreocunha/Chat_Real_Time_React_Native.git

# Vá para o ropositório
$ cd Chat_Real_Time_React_Native

# Instale as dependências
$ yarn install

# Execute
$ yarn start

# O Expo vai abrir, você pode escanear o QR Code que aparecerá no terminal ou na página web usando o app da Expo no seu celular.
```
Depois de baixar os arquivos é necessário mudar os campos que estão vazios no arquivo <b>Fire.js</b> para os arquivos do seu firebase.
É só criar uma conta google, logar no firebase e criar novo projeto. Depois entre no projeto, acesse settings e navegue até Firebase SDK snippet 
para encontrar os seus dados. Copie e cole no Fire.js. Se ao mandar mensagem no chat der permissão negada, 

Feito com ♥  por André Oliveira Cunha :wave:  [Linkedin](https://www.linkedin.com/in/andr%C3%A9-oliveira-cunha-b26b3a156/)

## Licença

Dê uma olhada na licença [license file](./LICENSE) para detalhes

[expo]: https://expo.io/
[yarn]: https://yarnpkg.com/
