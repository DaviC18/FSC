type ArticleSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

type ArticleContent = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  sections: ArticleSection[];
};

const articles: ArticleContent[] = [
  {
    title: "Como controlar a ansiedade em momentos difíceis",
    description:
      "Um guia prático para desacelerar a mente, reduzir a sobrecarga emocional e recuperar clareza quando a ansiedade aparece.",
    category: "Ansiedade",
    readTime: "6 min",
    slug: "como-controlar-ansiedade",
    sections: [
      {
        title: "Quando a ansiedade aparece, o primeiro passo não é lutar",
        paragraphs: [
          "A ansiedade costuma chegar como uma onda: pensamentos acelerados, respiração curta, tensão no corpo e sensação de urgência. Nessa hora, tentar brigar com o que você sente pode aumentar ainda mais o desconforto.",
          "O objetivo inicial não é eliminar tudo em segundos. O objetivo é reduzir a intensidade para recuperar clareza. Quando a mente está em alerta, decisões simples parecem enormes. Por isso, antes de resolver o problema, você precisa regular o corpo.",
        ],
      },
      {
        title: "Comece pela respiração",
        paragraphs: [
          "A respiração é uma das ferramentas mais simples para sinalizar ao corpo que não existe uma ameaça imediata. Ela não resolve todos os problemas, mas ajuda a baixar o volume da reação.",
          "Use uma respiração lenta e controlada por alguns ciclos.",
        ],
        list: [
          "Inspire pelo nariz por 4 segundos.",
          "Segure o ar por 2 segundos.",
          "Solte lentamente pela boca por 6 segundos.",
          "Repita por 5 ciclos.",
        ],
      },
      {
        title: "Nomeie o que está acontecendo",
        paragraphs: [
          "Dar nome à emoção ajuda a mente a sair do caos. Em vez de pensar apenas “está tudo errado”, experimente dizer: “estou ansioso”, “estou sobrecarregado” ou “estou antecipando um problema”.",
          "Quando você nomeia o que sente, deixa de ser engolido por uma sensação sem forma. O sentimento continua ali, mas fica mais compreensível.",
        ],
      },
      {
        title: "Volte para o presente",
        paragraphs: [
          "A ansiedade vive muito no futuro. Ela pega possibilidades e transforma em certezas assustadoras. Para interromper esse ciclo, traga a atenção para o agora.",
          "Pergunte a si mesmo:",
        ],
        list: [
          "O que está acontecendo agora, de fato?",
          "O que é realidade e o que é suposição?",
          "Qual pequeno passo posso tomar nos próximos minutos?",
        ],
      },
      {
        title: "Uma ação pequena vale mais que mil pensamentos",
        paragraphs: [
          "Depois de respirar e organizar a mente, escolha uma ação simples: beber água, escrever o pensamento principal, caminhar por dois minutos ou organizar uma tarefa pequena.",
          "A mente ansiosa quer resolver a vida inteira de uma vez. Mas o controle volta quando você escolhe apenas o próximo passo.",
        ],
      },
    ],
  },
  {
    title: "Como parar de pensar demais e organizar a mente",
    description:
      "Entenda por que a mente entra em looping e como usar ações simples para sair do excesso mental.",
    category: "Clareza mental",
    readTime: "5 min",
    slug: "como-parar-de-pensar-demais",
    sections: [
      {
        title: "Pensar demais nem sempre é pensar melhor",
        paragraphs: [
          "Existe uma diferença grande entre refletir e ruminar. Refletir ajuda você a entender uma situação e tomar uma decisão. Ruminar é repetir o mesmo pensamento várias vezes sem avançar.",
          "Quando a mente entra em looping, ela cria a sensação de que você está resolvendo algo. Mas, na prática, muitas vezes você está apenas gastando energia mental.",
        ],
      },
      {
        title: "Escreva para tirar da cabeça",
        paragraphs: [
          "Uma das formas mais rápidas de organizar pensamentos é colocá-los no papel ou em um bloco de notas. A mente fica tentando segurar tudo ao mesmo tempo. Quando você escreve, transforma névoa em informação.",
          "Comece despejando tudo sem filtro. Depois, organize.",
        ],
        list: [
          "O que estou pensando?",
          "O que realmente preciso resolver?",
          "O que depende de mim?",
          "O que não posso controlar agora?",
        ],
      },
      {
        title: "Separe fato, medo e possibilidade",
        paragraphs: [
          "Pensamentos ansiosos costumam misturar realidade com hipótese. Algo que pode acontecer começa a parecer algo que certamente vai acontecer.",
          "Uma pergunta simples ajuda: isso é um fato, um medo ou uma possibilidade? Essa separação reduz o drama mental e devolve clareza.",
        ],
      },
      {
        title: "Defina o próximo passo",
        paragraphs: [
          "A mente acelerada quer respostas completas. Mas a vida real costuma melhorar com passos pequenos.",
          "Em vez de perguntar “como resolvo tudo?”, pergunte: “qual é a próxima ação concreta?”.",
        ],
        list: [
          "Enviar uma mensagem.",
          "Organizar uma lista.",
          "Separar uma tarefa.",
          "Descansar antes de decidir.",
          "Pedir ajuda quando necessário.",
        ],
      },
      {
        title: "Menos consumo, mais direção",
        paragraphs: [
          "Excesso de conteúdo também alimenta pensamento demais. Vídeos, posts, notícias e opiniões criam camadas de ruído.",
          "Nem toda informação merece sua atenção. Uma mente mais clara começa quando você aprende a escolher o que entra nela.",
        ],
      },
    ],
  },
  {
    title: "Inteligência emocional no trabalho",
    description:
      "Como lidar com pressão, cobranças, conflitos e decisões sem agir apenas no impulso.",
    category: "Controle emocional",
    readTime: "7 min",
    slug: "inteligencia-emocional-no-trabalho",
    sections: [
      {
        title: "O trabalho testa sua maturidade emocional",
        paragraphs: [
          "Pressão, prazos, críticas, mensagens urgentes e conflitos fazem parte da rotina profissional. O problema é quando cada situação vira uma reação automática.",
          "Inteligência emocional no trabalho não significa aceitar tudo calado. Significa perceber o que você sente, entender o contexto e responder com mais estratégia.",
        ],
      },
      {
        title: "Não responda no pico da emoção",
        paragraphs: [
          "Uma mensagem atravessada, uma cobrança injusta ou uma reunião tensa podem gerar vontade de responder na hora. Só que o pico emocional raramente é um bom conselheiro.",
          "Antes de responder, respire, releia e pergunte: essa resposta melhora a situação ou só descarrega minha irritação?",
        ],
      },
      {
        title: "Separe pessoa, problema e processo",
        paragraphs: [
          "Muitos conflitos crescem porque tudo vira pessoal. Mas, no trabalho, é importante separar camadas.",
        ],
        list: [
          "Pessoa: quem está envolvido.",
          "Problema: o que precisa ser resolvido.",
          "Processo: como evitar que aconteça novamente.",
        ],
      },
      {
        title: "Comunicação clara evita desgaste",
        paragraphs: [
          "Boa parte do estresse profissional nasce de expectativa mal combinada. Prazos confusos, tarefas abertas demais e falta de alinhamento geram ansiedade.",
          "Uma comunicação emocionalmente inteligente é direta, respeitosa e específica.",
        ],
        list: [
          "O que precisa ser feito?",
          "Até quando?",
          "Com qual prioridade?",
          "Quem é responsável?",
        ],
      },
      {
        title: "Limites também são parte da inteligência emocional",
        paragraphs: [
          "Dizer sim para tudo pode parecer comprometimento, mas também pode virar sobrecarga. Limites saudáveis protegem sua energia e melhoram sua entrega.",
          "Um profissional equilibrado não é quem aguenta tudo. É quem aprende a sustentar performance sem destruir a própria base.",
        ],
      },
    ],
  },
  {
    title: "Como identificar gatilhos emocionais no dia a dia",
    description:
      "Aprenda a reconhecer situações, pensamentos e hábitos que aumentam ansiedade, irritação e estresse.",
    category: "Autoconhecimento",
    readTime: "5 min",
    slug: "como-identificar-gatilhos-emocionais",
    sections: [
      {
        title: "Gatilhos são sinais, não inimigos",
        paragraphs: [
          "Um gatilho emocional é algo que ativa uma reação interna com intensidade. Pode ser uma situação, uma pessoa, uma lembrança, uma cobrança ou até um hábito repetido.",
          "Identificar gatilhos não serve para viver fugindo de tudo. Serve para entender seus padrões e responder melhor quando eles aparecem.",
        ],
      },
      {
        title: "Observe o que acontece antes da reação",
        paragraphs: [
          "Muita gente só percebe a emoção quando ela já explodiu. O segredo é olhar para o momento anterior.",
          "Depois de um pico de ansiedade, irritação ou tristeza, pergunte:",
        ],
        list: [
          "O que aconteceu antes?",
          "Quem estava envolvido?",
          "Qual pensamento apareceu?",
          "O que senti no corpo?",
          "Que atitude tomei em seguida?",
        ],
      },
      {
        title: "Tipos comuns de gatilhos",
        paragraphs: [
          "Os gatilhos variam de pessoa para pessoa, mas alguns aparecem com muita frequência na rotina moderna.",
        ],
        list: [
          "Excesso de notificações.",
          "Comparação nas redes sociais.",
          "Críticas ou medo de julgamento.",
          "Ambientes desorganizados.",
          "Sono ruim e cansaço acumulado.",
          "Perfeccionismo e cobrança excessiva.",
        ],
      },
      {
        title: "Registre padrões por alguns dias",
        paragraphs: [
          "Você não precisa entender tudo de uma vez. Durante uma semana, registre os momentos em que se sentiu desregulado.",
          "Com o tempo, padrões começam a aparecer. E quando um padrão aparece, ele deixa de ser uma armadilha invisível.",
        ],
      },
      {
        title: "Transforme gatilhos em plano de ação",
        paragraphs: [
          "Depois de identificar seus gatilhos principais, escolha respostas simples para cada um deles. Se notificações te aceleram, defina horários para olhar mensagens. Se falta de sono te desregula, trate descanso como prioridade real.",
          "Autoconhecimento bom não fica só na teoria. Ele muda escolhas pequenas.",
        ],
      },
    ],
  },
  {
    title: "Ansiedade e excesso de telas: como reduzir a sobrecarga digital",
    description:
      "Notificações, redes sociais e excesso de informação podem deixar sua mente em alerta constante.",
    category: "Vida digital",
    readTime: "6 min",
    slug: "ansiedade-e-excesso-de-telas",
    sections: [
      {
        title: "A mente não descansa quando tudo chama atenção",
        paragraphs: [
          "Celular, redes sociais, notícias, mensagens e vídeos curtos criam uma rotina de estímulo constante. O cérebro pula de uma coisa para outra sem tempo para processar.",
          "Esse excesso pode aumentar a sensação de urgência, comparação, irritação e dificuldade de foco. Não é frescura. É sobrecarga.",
        ],
      },
      {
        title: "Notificação é interrupção disfarçada",
        paragraphs: [
          "Cada notificação quebra uma linha de pensamento. Mesmo quando você não responde, sua atenção já foi puxada.",
          "Se sua mente vive cansada, comece reduzindo entradas desnecessárias.",
        ],
        list: [
          "Silencie aplicativos que não são urgentes.",
          "Desative notificações de redes sociais.",
          "Defina horários para checar mensagens.",
          "Evite tela logo antes de dormir.",
        ],
      },
      {
        title: "Comparação digital aumenta pressão interna",
        paragraphs: [
          "Nas redes sociais, você vê recortes editados da vida dos outros e compara com seus bastidores. Essa conta nunca fecha.",
          "Consumir esse tipo de conteúdo sem limite pode alimentar sensação de atraso, inadequação e cobrança constante.",
        ],
      },
      {
        title: "Crie zonas sem tela",
        paragraphs: [
          "Você não precisa abandonar a tecnologia. Precisa criar limites. Zonas sem tela ajudam o corpo e a mente a voltarem para o presente.",
        ],
        list: [
          "Primeiros 20 minutos da manhã sem celular.",
          "Refeições sem rolagem infinita.",
          "Últimos 30 minutos antes de dormir longe das redes.",
          "Pausas curtas olhando para fora da tela.",
        ],
      },
      {
        title: "Use a tecnologia como ferramenta, não como piloto",
        paragraphs: [
          "A tecnologia é excelente quando serve ao seu objetivo. O problema começa quando ela decide seu humor, sua atenção e sua rotina.",
          "Reduzir telas não é voltar para a caverna. É recuperar comando.",
        ],
      },
    ],
  },
  {
    title: "Como criar uma rotina mais leve sem perder produtividade",
    description:
      "Organize seu dia com mais clareza, menos cobrança e mais consistência emocional.",
    category: "Rotina",
    readTime: "5 min",
    slug: "como-criar-rotina-mais-leve",
    sections: [
      {
        title: "Rotina leve não é rotina fraca",
        paragraphs: [
          "Muita gente confunde rotina leve com falta de ambição. Na prática, uma rotina mais leve é aquela que permite consistência sem destruir sua energia.",
          "Produtividade real não é fazer tudo. É fazer o que importa com clareza suficiente para continuar amanhã.",
        ],
      },
      {
        title: "Escolha três prioridades",
        paragraphs: [
          "Uma lista infinita de tarefas pode virar combustível para ansiedade. Em vez de tentar carregar o mundo nas costas, escolha três prioridades reais para o dia.",
          "Pergunte: se eu fizer apenas essas três coisas, meu dia já terá avançado?",
        ],
      },
      {
        title: "Separe essencial, importante e pode esperar",
        paragraphs: [
          "Nem tudo tem o mesmo peso. Quando tudo parece urgente, a mente trava. Dividir tarefas em categorias ajuda a reduzir ruído.",
        ],
        list: [
          "Essencial: precisa ser feito hoje.",
          "Importante: ajuda seus objetivos, mas pode ser organizado.",
          "Pode esperar: não merece sua ansiedade agora.",
        ],
      },
      {
        title: "Inclua pausas sem culpa",
        paragraphs: [
          "Pausa não é desperdício. É manutenção. Uma mente cansada demora mais, erra mais e se irrita mais.",
          "Pausas pequenas ao longo do dia ajudam a manter clareza e evitam que você só perceba o cansaço quando já passou do limite.",
        ],
      },
      {
        title: "Finalize o dia com fechamento mental",
        paragraphs: [
          "Antes de encerrar o dia, anote o que ficou pendente e o primeiro passo de amanhã. Isso ajuda a mente a parar de tentar lembrar tudo durante a noite.",
          "Uma rotina melhor não precisa ser perfeita. Precisa ser sustentável.",
        ],
      },
    ],
  },
];

export {articles}