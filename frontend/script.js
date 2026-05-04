const API = "http://127.0.0.1:8000/funcionarios";

const lista = document.getElementById("lista");

document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // criando uma const para receber os campos digitados 
    const funcionario = {
        nome: document.getElementById("nome").value,
        cargo: document.getElementById("cargo").value,
        idade: parseInt(document.getElementById("idade").value),
        salario: parseFloat(document.getElementById("salario").value)
    };

    // criando um fetch 
    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(funcionario)
    });

    document.getElementById("form").reset();

    listarFuncionarios();
});

async function listarFuncionarios() {
    const res = await fetch(API);
    const funcionarios = await res.json();

    lista.innerHTML = "";

    funcionarios.forEach(p => {
        lista.innerHTML += `
        <div class="card">
            <h3>${p.nome}</h3>
            <p>Cargo: ${p.cargo}</p>
            <p>Idade: ${p.idade}</p>
            <p>Salário: R$ ${p.salario}</p>
        </div>
    `;
    });
}


listarFuncionarios();