# 📱 Template React Native — Curso Técnico SENAI

### 🧑‍🏫 Professor: William Reis  
### 💼 Curso Técnico de Desenvolvimento de Sistemas — SENAI

---

## 🚀 Objetivo do Projeto

Este repositório é um **template base em React Native com Expo**, desenvolvido especialmente para os **alunos do curso técnico** do SENAI.  
Ele foi criado para facilitar o processo de **instalação, estruturação e organização** do ambiente de desenvolvimento, já com navegação e estilização configuradas.

---

## 🛠️ Tecnologias Utilizadas

Este projeto já vem com as dependências instaladas e pré-configuradas:

- [Expo SDK 53](https://docs.expo.dev/) — plataforma de desenvolvimento React Native
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) — navegação stack entre telas
- [Styled Components](https://styled-components.com/) — estilização por componentes
- `react-native-safe-area-context` — segurança de layout em dispositivos com notch
- `react-native-screens` — otimização da navegação
- `react-native-gesture-handler` — suporte a gestos
- `react-native-reanimated` — animações nativas modernas
- `expo-status-bar` — controle da barra de status
- `@babel/core` — configuração de build com Babel

---

## 🧾 Organização de Pastas

```bash
.
├── assets/              # Imagens, logos, fontes
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── data/            # Arquivos simulados (ex: lista de pratos)
│   ├── navigation/      # Arquivos de navegação (ex: AppNavigator.js)
│   ├── screens/         # Telas da aplicação (ex: Home, Splash)
│   └── styles/          # Tema global e estilos customizados
├── App.js               # Entrada principal da aplicação
├── index.js             # Registro do componente root
├── babel.config.js      # Configuração do Babel
├── package.json         # Gerenciador de dependências
└── README.md            # Este documento ✨
```

---

## 🧑‍💻 Como instalar o projeto na sua máquina

> ⚠️ **Pré-requisitos obrigatórios:**
> - Node.js instalado (preferencialmente v18+)
> - Git instalado
> - App [Expo Go](https://expo.dev/client) no celular (para testar sem emulador)

---

### 1️⃣ Clone o projeto

```bash
git clone https://github.com/willreis/templateMobile.git
cd templateMobile
```

### 2️⃣ Instale as dependências

```bash
npm install --legacy-peer-deps
```

> ⚠️ Use `--legacy-peer-deps` para evitar conflitos de dependência.

---

### 3️⃣ Rode o projeto

```bash
npx expo start
```

- Pressione `w` para abrir no navegador  
- Escaneie o QR Code com o **app Expo Go** para rodar no celular

---

### 📌 Dicas rápidas

- **Erro de bundle ou MIME type?** Tente rodar com cache limpo:

```bash
npx expo start --clear
```

- **Vai usar Android Studio ou emulador?** Certifique-se de que o `Android SDK` está instalado e o `adb` está no PATH.

---

## 🙌 Créditos

Este projeto foi idealizado e organizado pelo **Professor William Reis**, com foco didático, para apoiar alunos do **Curso Técnico em Desenvolvimento de Sistemas do SENAI**.

---

Se quiser ajuda para iniciar uma nova tela, criar componentes, ou integrar com uma API, este template já está pronto para isso.  
Bons estudos e bom desenvolvimento! 🚀
