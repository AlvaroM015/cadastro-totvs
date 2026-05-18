const API = "https://cadastro-totvs.onrender.com/funcionarios";

const lista = document.getElementById("lista");

let editandoId = null;

document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const funcionario = {
        nome: document.getElementById("nome").value,
        cargo: document.getElementById("cargo").value,
        idade: parseInt(document.getElementById("idade").value),
        salario: parseFloat(document.getElementById("salario").value)
    };

    // EDITAR
    if (editandoId !== null) {
        await fetch(`${API}/${editandoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(funcionario)
        });

        editandoId = null;

    } else {
        // CADASTRAR
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(funcionario)
        });
    }

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

            <button onclick="editarFuncionario(${p.id})">
                Editar
            </button>

            <button onclick="deletarFuncionario(${p.id})">
                Excluir
            </button>
        </div>
    `;
    });
}

async function deletarFuncionario(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    listarFuncionarios();
}

async function editarFuncionario(id) {
    const res = await fetch(`${API}/${id}`);
    const funcionario = await res.json();

    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("cargo").value = funcionario.cargo;
    document.getElementById("idade").value = funcionario.idade;
    document.getElementById("salario").value = funcionario.salario;

    editandoId = id;
}

listarFuncionarios();