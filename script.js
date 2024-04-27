const quotes = {
    "- Walt Disney": '"A maneira de começar é parar de falar e começar a fazer."',
    "- Winston Churchill": '"O pessimista vê dificuldade em todas as oportunidades. O otimista vê oportunidade em todas as dificuldades."',
    "- Will Rogers": '"Não deixe que o ontem ocupe muito do hoje."',
    "- Desconhecido": '"Você aprende mais com o fracasso do que com o sucesso. Não deixe que isso o impeça. A falha constrói o caráter."',
    "- Vince Lombardi": '"Não é se você é derrubado, é se você se levanta."',
    "- Mahatma Gandhi": '"Viva como se fosse morrer amanhã. Aprenda como se fosse viver para sempre"',
    "- Martin Luther King Jr": '"As trevas não podem expulsar as trevas: só a luz pode fazer isso. O ódio não pode expulsar o ódio: só o amor pode fazer isso."',
    "- Albert Einstein": '"Esforce-se para não ser um sucesso, mas sim para ser de valor."',
    "- Florence Nightingale": '"Atribuo meu sucesso a isso: nunca dei ou tomei nenhuma desculpa."',
    "- Michael Jordan": '"Perdi mais de 9000 tiros na minha carreira. Perdi quase 300 jogos. 26 vezes que me confiaram para levar o jogo a tiro vencedor e errei. Eu falhei várias vezes na minha vida. E é por isso que eu consigo."',
    "- Babe Ruth": '"Cada greve me aproxima do próximo home run."',
    "- John Lennon": '"A vida é o que acontece com você enquanto você está ocupado fazendo outros planos."',
    "- Earl Nightingale": '"Nós nos tornamos o que pensamos."',
    "- Mark Twain": '"Daqui a vinte anos você ficará mais decepcionado com as coisas que não fez do que com as que fez, então jogue fora das linhas de proa, navegue longe do porto seguro, pegue os ventos alísios em suas velas.  Explorar, Sonhar, Descubra."',
    "- Charles Swindoll": '"A vida é 10% do que acontece comigo e 90% de como eu reajo a ela."',
    "- Buddah": '"A mente é tudo. O que você acha que se torna."',
    "- Chinese Proverb": '"A melhor época para plantar uma árvore foi há 20 anos. O segundo melhor momento é agora."',
    "- Woody Allen": '"Oitenta por cento do sucesso está aparecendo."',
    "- Steve Jobs": '"Seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa."',
    "- Vince Lombardi": '"Ganhar não é tudo, mas querer ganhar é."',
    "- Stephen Covey": '"Não sou produto das minhas circunstâncias. Sou um produto das minhas decisões."',
    "- Christopher Columbus": '"Você nunca pode atravessar o oceano até ter a coragem de perder de vista a costa."',
    "- Maya Angelou": '"Aprendi que as pessoas vão esquecer o que você disse, as pessoas vão esquecer o que você fez, mas as pessoas nunca vão esquecer como você as fez sentir. "',
    "- Jim Rohn": '"Ou você corre o dia, ou o dia corre você."',
    "- Henry Ford": '"Se você acha que pode ou acha que não pode, você está certo."',
    "- Frank Sinatra": '"A melhor vingança é o sucesso massivo."',
    "- Zig Ziglar": '"As pessoas costumam dizer que a motivação não dura. Bem, o banho também não.  É por isso que o recomendamos diariamente."',
    "- Aristotle": '"Só há uma maneira de evitar a crítica: não fazer nada, não dizer nada e não ser nada"',
    "- Jesus": '"Pedi e ser-vos-á dado; pesquise, e você encontrará; Bata e a porta será aberta para você."',
    "- Ralph Waldo Emerson": '"A única pessoa que você está destinado a se tornar é a pessoa que você decide ser."',
    "- Henry David Thoreau": '"Caminhai confiantes na direção dos vossos sonhos.  Viva a vida que você imaginou."',
    "- Erma Bombeck": '"Quando eu estiver diante de Deus no final da minha vida, eu esperaria que eu não tivesse um único pedaço de talento e pudesse dizer, eu usei tudo o que você me deu."',
    "- Booker T. Washington": '"Poucas coisas podem ajudar um indivíduo mais do que colocar responsabilidade sobre ele, e deixá-lo saber que você confia nele."'
  };


document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate(){
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
  generate()
}