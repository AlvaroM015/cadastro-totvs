from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.responses import FileResponse

app = FastAPI()

class Funcionario(BaseModel):
    nome: str
    cargo: str
    idade: int
    salario: float

funcionarios = []
contador_id = 1

# Criando rotas para o main reconhcer os arquivos, pois estava dando erro

# HTML
@app.get("/")
def home():
    return FileResponse("frontend/index.html")

# CSS
@app.get("/style.css")
def css_file():
    return FileResponse("frontend/style.css")

# JS
@app.get("/script.js")
def js_file():
    return FileResponse("frontend/script.js")

# POST
@app.post("/funcionarios")
def criar_funcionario(funcionario: Funcionario):
    global contador_id

    novo = funcionario.dict()
    novo["id"] = contador_id
    contador_id += 1

    funcionarios.append(novo)
    return novo

# Criando um endpoint GET para a lista e filtro
@app.get("/funcionarios")
def listar_funcionarios(cargo: str = None):
    if cargo:
        return [f for f in funcionarios if f["cargo"].lower() == cargo.lower()]
    return funcionarios

# GET por ID
@app.get("/funcionarios/{id}")
def buscar_funcionario(id: int):
    for f in funcionarios:
        if f["id"] == id:
            return f

    raise HTTPException(status_code=404, detail="Funcionário não encontrado")

# Checkpoint 3 - PUT e DELETE 

# PUT
@app.put("/funcionarios/{id}")
def atualizar_funcionario(id: int, funcionario: Funcionario):
    for f in funcionarios:
        if f["id"] == id:
            f["nome"] = funcionario.nome
            f["cargo"] = funcionario.cargo
            f["idade"] = funcionario.idade
            f["salario"] = funcionario.salario

            return f

    raise HTTPException(status_code=404, detail="Funcionário não encontrado")


# DELETE
@app.delete("/funcionarios/{id}")
def deletar_funcionario(id: int):
    for i, f in enumerate(funcionarios):
        if f["id"] == id:
            funcionarios.pop(i)
            return {"mensagem": "Funcionário removido"}

    raise HTTPException(status_code=404, detail="Funcionário não encontrado")