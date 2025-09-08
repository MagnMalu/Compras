import verificarListaVazia from "./verificarListaVazia.js";
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

export const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

export function criarItemDaLista() {
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const ItemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    inputCheckBox.addEventListener("click", function () {
        nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
    });
    containerItemDaLista.appendChild(inputCheckBox);

    // Botão excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.style.cursor = "pointer";

    const iconeExcluir = document.createElement("i");
    iconeExcluir.className = "bi bi-trash3";

    botaoExcluir.appendChild(iconeExcluir);
    botaoExcluir.addEventListener("click", function () {
        const confirmacao = confirm("Deseja realmente deletar esse item?");
        if (confirmacao) {
            ItemDaLista.remove();
            alert("Item deletado");
            verificarListaVazia(listaDeCompras);
        }
    });

    // Botão editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.style.cursor = "pointer";

    const iconeEditar = document.createElement("i");
    iconeEditar.className = "bi bi-bluesky"; // Use um ícone de lápis para edição
    botaoEditar.appendChild(iconeEditar);

    botaoEditar.addEventListener("click", function () {
        const novoTexto = prompt("Editar item:", nomeItem.innerText);
        if (novoTexto !== null && novoTexto.trim() !== "") {
            nomeItem.innerText = novoTexto.trim();
        }
    });

    // Adiciona elementos no container
    containerItemDaLista.appendChild(botaoEditar);
    containerItemDaLista.appendChild(botaoExcluir);
    containerItemDaLista.appendChild(nomeItem);

    ItemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("text-data");

    ItemDaLista.appendChild(itemData);

    return ItemDaLista;
}
