# edu-api

API educacional para demonstração de práticas de DevSecOps.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte da **Prática 10 - Segurança em DevOps** do componente curricular "Segurança no Processo de Desenvolvimento de Software". O objetivo é demonstrar a implementação de um pipeline de CI/CD com análise estática de segurança (SAST) utilizando GitHub Actions e SonarCloud.

## 🔒 Segurança

O projeto implementa:

- **SAST (Static Application Security Testing)** via SonarCloud
- **Pipeline de CI/CD** automatizado com GitHub Actions
- **Quality Gates** para bloquear código vulnerável
- **Análise contínua** de vulnerabilidades

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **GitHub Actions** - CI/CD
- **SonarCloud** - Análise de segurança estática

## 📁 Estrutura do Projeto

```
edu-api/
├── .github/
│   └── workflows/
│       └── sast-sonarcloud.yml    # Pipeline de SAST
├── index.js                        # Código da aplicação
├── index-corrected.js              # Versão corrigida (referência)
├── package.json                    # Dependências
└── README.md                       # Este arquivo
```

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/edu-api.git

# Entre na pasta
cd edu-api

# Instale as dependências
npm install
```

## ▶️ Execução

```bash
# Inicie o servidor
node index.js
```

O servidor estará disponível em `http://localhost:3000`.

## 🧪 Testando a API

```bash
# Teste básico
curl "http://localhost:3000/calc?expr=2+2"

# Resposta esperada:
# {"result":4}
```

## 🔐 Vulnerabilidades Detectadas

Durante o desenvolvimento, o SonarCloud detectou as seguintes vulnerabilidades:

### ❌ Código Vulnerável (Bloqueado)

```javascript
// ⚠️ NUNCA USE EVAL COM ENTRADA DO USUÁRIO
const result = eval(req.query.expr);
```

**Riscos:**
- Code Injection
- Remote Code Execution (RCE)
- Severidade: Crítica

### ✅ Código Corrigido (Aprovado)

```javascript
// Validação de entrada antes do processamento
const safe = expr.match(/^[0-9+\-*/ ().]+$/) ? Function('return ' + expr)() : null;
```

**Melhorias:**
- Validação com regex
- Restrição a caracteres seguros
- Tratamento de entradas inválidas

## 📊 Pipeline de CI/CD

O workflow `.github/workflows/sast-sonarcloud.yml` executa:

1. **Checkout** do código
2. **Setup** do ambiente Node.js
3. **Cache** de dependências
4. **Instalação** de pacotes
5. **Análise SAST** com SonarCloud

### Triggers

- Push para branch `main`
- Pull Requests

## 🎯 Objetivos de Aprendizado

- [x] Configurar pipeline de CI/CD
- [x] Integrar análise SAST com SonarCloud
- [x] Detectar vulnerabilidades automaticamente
- [x] Corrigir falhas de segurança
- [x] Implementar Quality Gates

## 📝 Licença

Este projeto é apenas para fins educacionais.

## 👤 Autor

**[SEU NOME]**

Componente Curricular: Segurança no Processo de Desenvolvimento de Software
