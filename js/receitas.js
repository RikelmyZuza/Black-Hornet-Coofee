/* ==============================
1) Pegar o elemento[TAG] do html
=================================*/

//Onde os cards vão aparecer
const listaReceitas = document.querySelector("#listaReceitas");

/* ==============================
2) Criar variável para guardar os cursos
=================================*/
let Receitas = []; /* recebe uma  lista vazia */
    // aqui vai ficar a lista carregada do JSON

/* ==============================
3) Criar variável para guardar os cursos
=================================*/
async function carregarReceitas(){
    // buscar o arquivo cursos.json 
    //  (como se fosse uma mini API)
    const resposta = await fetch("..\data\receitas.json");
    //tranforma o JSON em dados que o JS entende
    Receitas = await resposta.json();

    // depois de carregar, já renderiza na tela
    renderizarReceitas(receitas);
};

/* ==============================
4) Função para criar os cards na tela (DOM)
=================================*/
function renderizarReceitas(lista){
    // limpa o conteúdo antes de desenhar de novo
    listaReceitas.innerHTML = "";
    
    // para cada curso da lista, cria um card
    lista.forEach((Receitas) => {
        // cria um elemento <div> para container
        const card = document.createElement("div");

        // coloca uma class para o CSS estilizar
        card.classList.add("card-receitas");

        // coloca o conteúdo do card
        card.innerHTML = `
            <h3> ${receitas.título} </h3>
            <img src=${receitas.img} width="250" height="250">
            <p> ${Receitas.descricao} </p>
           
        `;

        // coloca o card dentro da lista
        listaReceitas.appendChild(card);

        // evento do botão "Ver detalhes"
        const btn = card.querySelector(".btn-detalhes");
        btn.addEventListener("click",function(){
            alert("Você escolheu: " + Receitas.título);
        });

    });
    
};

/* ==============================
5) BUSCA: Filtrar a Lista de Cursos quado digitar
=================================*/
buscaReceitas.addEventListener("input", function(){
    const texto = buscaReceitas.value.toLowerCase();

    const filtrados = Receitas.filter( (Receitas)=>
        Receitas.título.toLowerCase().includes(texto)
    );

     renderizarReceitas(filtrados); /* construi a lista de  cursos */

    });

/* ==============================
6) CARREGA OS CURSOS
=================================*/
carregarReceitas();