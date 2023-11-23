# Projeto back end ODAPP

Para rodar o projeto, é necessário ter instalado na sua máquina:
- Node.js 18+
- Banco PostgreSQL

Para popular o banco, basta rodar a rota:

**GET /patients/populate**

Deixei também o arquivo JSON que pode ser importado no Postman ou outros softwares para consumo de rotas.

Arquivo: insomnia.json

## Rotas

### GET /patients

Retorna todos os pacientes.

### POST /patients
body
{
	"name":string
	"age":number,
	"city":string,
	"state":string
}
Cria um novo paciente com os dados fornecidos no corpo da requisição.

### GET /patients/:id

Retorna um paciente específico com o ID fornecido.

### PUT /patients/:id

Atualiza um paciente existente com o ID fornecido, usando os dados fornecidos no corpo da requisição.
{
	"name":string
	"age":number,
	"city":string,
	"state":string
}
### DELETE /patients/:id

Remove um paciente com o ID fornecido.

## Comandos

```bash
yarn
npx prisma migrate dev
yarn dev
