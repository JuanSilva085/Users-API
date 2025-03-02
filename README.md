# Users API 🚀



📌 Sobre

Esta API permite gerenciar usuários, incluindo a criação, leitura, atualização e exclusão de registros no banco de dados.

![Captura de tela 2025-02-27 233850(1)](https://github.com/user-attachments/assets/39c4ff13-f6f0-43f7-9b9a-e1444c9a90bb)

📡 Endpoints

GET /usuarios - Retorna a lista de usuários
![Captura de tela 2025-02-26 224125](https://github.com/user-attachments/assets/fab4dc5b-a3a0-43b7-897a-12e92587e241)


GET /usuarios/{id} - Retorna um usuário pelo ID
![Captura de tela 2025-02-26 224424](https://github.com/user-attachments/assets/770b62b6-0bfb-4834-a9fa-793496dc56a7)

POST /usuarios - Cria um novo usuário
![Captura de tela 2025-02-26 224210](https://github.com/user-attachments/assets/b3f4c78e-08ff-4b53-85c1-688dd9431fab)

PUT /usuarios/{id} - Atualiza um usuário existente
![Captura de tela 2025-02-27 222200](https://github.com/user-attachments/assets/b5f2ae88-400a-4bde-8121-4f48b4658fbb)

DELETE /usuarios/{id} - Exclui um usuário pelo ID
![Captura de tela 2025-02-26 224407](https://github.com/user-attachments/assets/946fd6c3-958c-4e03-9095-2a9be65ba096)


📥 Instalação

Clone este repositório:

- git clone [https://github.com/JuanSilva085/Users.API.git](https://github.com/JuanSilva085/Users-API)

Acesse o diretório do projeto:

- cd Users.API

Instale as dependências:

- dotnet restore

🚀 Execução

Para rodar a API localmente, utilize o seguinte comando:

- dotnet run

A API estará acessível em https://localhost:5001/swagger para testes via Swagger UI. 🧑‍💻


🛠️ Tecnologias Utilizadas

C# com ASP.NET Core

Entity Framework Core

SQLite
