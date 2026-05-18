# 📋 Cadastro TOTVS — FastAPI + JavaScript

## 📌 Descrição do Projeto

O **Cadastro TOTVS** é uma aplicação web simples desenvolvida com **FastAPI (backend)** e **HTML, CSS e JavaScript (frontend)**.
O sistema permite realizar o cadastro e gerenciamento de funcionários de forma dinâmica, sem recarregar a página.

---

## 🎯 Funcionalidades

* ✅ Cadastro de funcionários (POST)
* ✅ Listagem de todos os funcionários (GET)
* ✅ Busca de funcionário por ID (GET com Path Parameter)
* ✅ Filtro de funcionários por cargo (GET com Query Parameter)
* ✅ Atualização automática da lista no frontend
* ✅ Integração entre frontend e backend utilizando `fetch()`

---

## 🧠 Tecnologias Utilizadas

* Python
* FastAPI
* Pydantic
* HTML5
* CSS3
* JavaScript (Fetch API)

---

## 📂 Estrutura do Projeto

```
📁 projeto/
├── backend/
│   └── main.py
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── requirements.txt
└── README.md
```

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/AlvaroM015/cadastro-totvs
```

### 2. Acesse a pasta

```bash
cd cadastro-totvs
```

### 3. Crie o ambiente virtual (opcional)

```bash
python -m venv venv
```

### 4. Ative o ambiente

```bash
venv\Scripts\activate   # Windows
```

### 5. Instale as dependências

```bash
pip install -r requirements.txt
```

### 6. Execute o servidor

```bash
uvicorn main:app --reload
```

### 7. Acesse no navegador

```
http://127.0.0.1:8000/
```

---

## 🔄 Funcionamento do Sistema

O sistema funciona através da comunicação entre frontend e backend utilizando a **Fetch API**:

* O formulário HTML captura os dados do usuário
* O JavaScript envia os dados para o backend via **POST**
* O FastAPI processa e armazena os dados em memória
* O frontend realiza uma requisição **GET** para atualizar a listagem
* Os dados são exibidos dinamicamente na página

---

## 📌 Observações

* Os dados são armazenados em memória (não persistem após reiniciar o servidor)
* O projeto foi desenvolvido para fins acadêmicos
* Estrutura organizada conforme requisitos do checkpoint

---

## 👨‍💻 Desenvolvido por

* Álvaro Milantonio — RM 561652

---
