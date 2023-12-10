var lista = [
    "A violência destrói o que ela pretende defender: a dignidade da vida, a liberdade do ser humano.",
    "A loucura de Deus é muito mais bonita que a sabedoria do homem.",
    "A paz exige quatro condições essenciais: verdade, justiça, amor e liberdade.",
    "Ser Santo é lutar contra o pecado de todos os Dias.",
    "A pior prisão é um coração fechado.",
    "O amor é a fundamental e originária vocação do ser humano.",
    "As armas não fazem o destino de um homem, mas podem por em risco toda a humanidade.",
    "Não existe uma carta mais poderosa que essa...",
    "Queridos jovens, ide com confiança ao encontro de Jesus, e, como os novos santos, não tenhais medo de falar d’Ele! Porque Cristo é a resposta verdadeira para todas as perguntas sobre o homem e sobre o seu destino",
    "A pessoa humana tem uma necessidade que é ainda mais profunda, uma fome que é maior que aquela que o pão pode saciar: é a fome que possui o coração humano da imensidade de Deus",
    "Queridos jovens, só Jesus conhece vosso coração, vossos desejos mais profundos. Só Ele, quem os amou até a morte (Jo 13,1), é capaz de saciar vossas aspirações. Suas palavras são de vida eterna, palavras que dão sentido à vida. Ninguém fora de Cristo poderá dar-vos a verdadeira felicidade.",
    "Jovens, ‘recebestes o Espírito que, por adoção, vos torna filhos’ (Rm 8, 15). Não desperdiceis esta grande herança",
    "Seguir Cristo não significa mortificar os dons que Ele nos concede, mas optar por uma vida de doação radical a Ele! Se Ele nos chama a isto, este “sim” torna-se necessário! Por conseguinte, não tenhais medo de vos entregar a Ele. Jesus sabe como deveis levar hoje a sua Cruz ao mundo, para encontrar as expectativas de muitos outros corações juvenis",
    "Todo ser humano, desde sua concepção, tem direito de nascer, quer dizer, a viver sua própria vida. Não só o bem-estar, mas também, de certo modo, a própria existência da sociedade, depende da salvaguarda deste direito primordial.",
    "Em uma família que reza não faltará nunca a consciência da própria vocação fundamental: a de ser um grande caminho de comunhão.",
    "A Palavra de Deus é digna de todos vossos esforços. Abraçá-la em toda sua pureza e integridade, e difundi-la com o exemplo e a pregação, é uma grande missão. Esta é vossa missão hoje, amanhã e pelo resto de vossas vidas",
    "Não temam responder generosamente ao chamado do Senhor. Deixem que sua fé brilhe no mundo, que suas ações mostrem seu compromisso com a mensagem salvadora do Evangelho!",
    "Queridos jovens, já sabeis que o cristianismo não é uma opinião e não consiste em palavras vãs. O cristianismo é Cristo! É uma Pessoa, é o que Vive! Encontrar a Jesus, amá-lo e fazê-lo amar: eis aquí a vocação cristã.",
]
var lista_imagens = [
    "./assests/papa_j_2_01.png",
    "./assests/papa_j_2_02.png",
    "./assests/papa_j_2_03.png",
    "./assests/papa_j_2_04.png",
    "./assests/papa_j_2_05.png",
    "./assests/papa_j_2_06.png"
]

lista = shuffleArray(lista)
var valor = lista.pop()

document.getElementById("texto_card").innerHTML=valor
console.log(valor)

click_ = document.getElementById("botton").addEventListener("click", change_phrase)

function change_phrase(){
    //var imagem = lista_imagens[-1]
    if (lista.length > 0){
        lista = shuffleArray(lista)
        //lista_imagens = shuffleArray(lista_imagens)
        valor = lista.pop()
    } else {
        valor = "Registre mais frases!"
    }
    document.getElementById("texto_card").innerHTML=valor
    //console.log(lista_imagens[-1])
    //document.getElementById("imagem_sj").src=imagem
    console.log(valor)
}


// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}