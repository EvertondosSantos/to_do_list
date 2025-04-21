const btn_salvar = document.querySelector("#btn_salvar");
// const btn_apagar = document.querySelector(".apagar");
const padrao_tarefas = document.querySelector(".padrao_tarefas");
const lista_tarefas = document.querySelector(".lista_tarefas");

btn_salvar.addEventListener("click",function(e){
    e.preventDefault();
    adicionarTarefa();
})


function adicionarTarefa() {
    const tarefa = document.querySelector("#texto_formulario");
    if(tarefa.value){
        // console.log(tarefa.value);
        /* Clonar template */
        const nova_tarefa = padrao_tarefas.cloneNode(true);
        /* Adicionar a tarefa ao item */
        nova_tarefa.querySelector(".texto_tarefa").textContent = tarefa.value;
        /* Remover classes desnecessárias */
        nova_tarefa.classList.remove("padrao_tarefas");
        nova_tarefa.classList.remove("apagada");
        /* Adicionar tarefa na lista */
        lista_tarefas.appendChild(nova_tarefa);
        /* Evento para concluir tarefa */
        nova_tarefa.querySelector(".concluir").addEventListener("click",function(e){
            nova_tarefa.classList="concluida";
            /* Apaga botões não necessarios */
            nova_tarefa.querySelector(".concluir").classList="concluir apagada";
            nova_tarefa.querySelector(".editar").classList="editar apagada";
        })
        /* Evento para apagar tarefa */
        nova_tarefa.querySelector(".apagar").addEventListener("click",function(e){
            nova_tarefa.classList="apagada";
        })
        /* Evento para editar tarefa */
        nova_tarefa.querySelector(".editar").addEventListener("click",function(e){
            /* Texto na lista */
            const texto_antigo = nova_tarefa.querySelector(".texto_tarefa");
            /* Ocultar texto antigo e botões */
            nova_tarefa.querySelector(".texto_tarefa").classList="texto_tarefa apagada";
            nova_tarefa.querySelector(".concluir").classList="concluir apagada";
            nova_tarefa.querySelector(".editar").classList="editar apagada";
            nova_tarefa.querySelector(".apagar").classList="apagar apagada";

            /* Exibir formulário */
            nova_tarefa.querySelector(".formulario_edicao").classList.remove("apagada");
            /* Inserir texto antigo em placeholder */
            nova_tarefa.querySelector(".edicao_tarefa").setAttribute("placeholder",texto_antigo.textContent);
            /* Inserir texto do formulário no item */
            nova_tarefa.querySelector(".btn_confirmar").addEventListener("click",function(e){
                e.preventDefault();
                /* Pegar texto */
                let texto_inserido = nova_tarefa.querySelector(".edicao_tarefa");
                /* Inserir texto editado na tarefa */
                nova_tarefa.querySelector(".texto_tarefa").textContent = texto_inserido.value;
                /* Ocultar formulário e botoes */
                nova_tarefa.querySelector(".formulario_edicao").classList = "formulario_edicao apagada";
                /* Exibir item da lista novamente */
                nova_tarefa.querySelector(".texto_tarefa").classList.remove("apagada");
                nova_tarefa.querySelector(".concluir").classList.remove("apagada");
                nova_tarefa.querySelector(".editar").classList.remove("apagada");
                nova_tarefa.querySelector(".apagar").classList.remove("apagada");
            })
        })
    }
}

