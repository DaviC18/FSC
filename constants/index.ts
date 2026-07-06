import { BookOpen, Brain, ClipboardList, Dumbbell, Flame, HelpCircle, Mail, MessageCircle, NotebookText, TimerReset } from "lucide-react";

const navLinks = [
    {
      id: "home",
      title: "Home",
      href: "/",
    },
    {
      id: "mente-em-pausa",
      title: "Mente em Pausa",
      href: "/mente-em-pausa",
    },
    {
      id: "blog",
      title: "Blog",
      href: "/blog",
    },
    {
      id: "about",
      title: "Sobre",
      href: "/sobre",
    },
    {
      id: "contact",
      title: "Contato",
      href: "/contato",
    },
]

const pillars = [
  {
    icon: Brain,
    title: "Clareza mental",
    description:
      "Conteúdos e ferramentas para organizar pensamentos, reduzir sobrecarga e desenvolver controle emocional.",
  },
  {
    icon: Dumbbell,
    title: "Energia física",
    description:
      "Hábitos simples para fortalecer corpo, disposição e consistência sem cair em extremos desnecessários.",
  },
  {
    icon: Flame,
    title: "Rotina forte",
    description:
      "Estratégias práticas para construir disciplina, foco e uma vida mais alinhada com seus objetivos.",
  },
];

const benefitsHome = [
  "Desenvolvimento pessoal sem enrolação",
  "Ferramentas práticas para usar no dia a dia",
  "Conteúdos sobre mente, corpo e rotina",
  "Produtos digitais organizados e aplicáveis",
];

const articles = [
  {
    title: "Como controlar a ansiedade em momentos difíceis",
    category: "Ansiedade",
    href: "/blog/como-controlar-ansiedade",
  },
  {
    title: "Como parar de pensar demais e organizar a mente",
    category: "Clareza mental",
    href: "/blog/como-parar-de-pensar-demais",
  },
  {
    title: "Inteligência emocional no trabalho",
    category: "Controle emocional",
    href: "/blog/inteligencia-emocional-no-trabalho",
  },
];

const essentialItems = [
  "Ebook principal",
  "Diário da Ansiedade",
  "Checklist de Gatilhos",
  "Guia rápido para momentos de ansiedade",
];

const completeItems = [
  "Ebook principal",
  "Diário da Ansiedade",
  "Diário de Emoções",
  "Checklist de Gatilhos",
  "Planner Semanal Anti-Ansiedade",
  "Exercícios Guiados",
  "Plano de 21 Dias",
  "Cartões de Calma para Imprimir",
  "Guia rápido para momentos de ansiedade",
];

const kitItems = [
  {
    icon: BookOpen,
    title: "Ebook principal",
    description:
      "O guia central para entender ansiedade, inteligência emocional e aplicar mudanças reais na rotina.",
  },
  {
    icon: NotebookText,
    title: "Diários práticos",
    description:
      "Ferramentas para registrar ansiedade, emoções, gatilhos e evolução pessoal ao longo dos dias.",
  },
  {
    icon: ClipboardList,
    title: "Checklists e planner",
    description:
      "Materiais para organizar pensamentos, prioridades e hábitos sem transformar autocuidado em cobrança.",
  },
  {
    icon: TimerReset,
    title: "Plano de 21 dias",
    description:
      "Uma jornada prática para sair do excesso mental e construir mais clareza emocional passo a passo.",
  },
];

const benefits = [
  "Identificar os principais gatilhos emocionais",
  "Organizar pensamentos acelerados",
  "Reduzir a sensação de sobrecarga mental",
  "Criar uma rotina emocional mais estável",
  "Saber o que fazer em momentos de ansiedade",
  "Desenvolver mais inteligência emocional no dia a dia",
];

const faqs = [
  {
    question: "O Kit Mente em Pausa substitui terapia?",
    answer:
      "Não. O kit é um material educativo e prático de desenvolvimento pessoal. Ele não substitui acompanhamento psicológico, psiquiátrico ou médico.",
  },
  {
    question: "Como eu recebo os materiais?",
    answer:
      "Após a compra, você recebe acesso aos arquivos digitais pela plataforma de checkout/entrega usada na venda.",
  },
  {
    question: "Posso imprimir os materiais?",
    answer:
      "Sim. Os diários, planner, checklist, cartões e guia rápido foram pensados para uso digital ou impressão.",
  },
  {
    question: "Qual plano vale mais a pena?",
    answer:
      "O Essencial é bom para começar. O Completo é o mais recomendado porque inclui todos os materiais e a jornada prática de 21 dias.",
  },
  {
    question: "É indicado para ansiedade intensa?",
    answer:
      "O kit pode ajudar na organização emocional, mas se a ansiedade estiver intensa, frequente ou prejudicando sua vida, procure ajuda profissional.",
  },
];

const CHECKOUT_LINKS = {
  essential: "https://pay.kiwify.com.br/seu-link-essencial",
  complete: "https://pay.kiwify.com.br/seu-link-completo",
};

const pillarsAbout = [
  {
    icon: Brain,
    title: "Mente",
    description:
      "Clareza mental, inteligência emocional, ansiedade, foco e organização interna.",
  },
  {
    icon: Dumbbell,
    title: "Corpo",
    description:
      "Energia física, movimento, disciplina, saúde e construção de hábitos sustentáveis.",
  },
  {
    icon: TimerReset,
    title: "Rotina",
    description:
      "Planejamento, consistência, produtividade saudável e evolução prática no dia a dia.",
  },
];

const valuesAbout = [
  "Desenvolvimento pessoal com aplicação prática",
  "Conteúdo direto, simples e organizado",
  "Equilíbrio entre força, clareza e constância",
  "Ferramentas digitais para facilitar a rotina",
  "Autocuidado sem promessa milagrosa",
  "Evolução diária sem pressão extrema",
];

const contactOptions = [
  {
    icon: Mail,
    title: "Suporte",
    description:
      "Dúvidas sobre acesso aos materiais, compra, entrega dos arquivos ou funcionamento do Kit Mente em Pausa.",
    href: "mailto:contato@lifestylecore.com.br?subject=Suporte%20-%20Lifestyle%20Core",
    label: "contato@lifestylecore.com.br",
  },
  {
    icon: MessageCircle,
    title: "Parcerias",
    description:
      "Propostas comerciais, colaborações, divulgação, afiliados ou projetos relacionados à marca.",
    href: "mailto:contato@lifestylecore.com.br?subject=Parceria%20-%20Lifestyle%20Core",
    label: "Enviar proposta",
  },
  {
    icon: HelpCircle,
    title: "Dúvidas gerais",
    description:
      "Perguntas sobre a Lifestyle Core, conteúdos, produtos digitais ou próximos lançamentos.",
    href: "mailto:contato@lifestylecore.com.br?subject=D%C3%BAvida%20-%20Lifestyle%20Core",
    label: "Falar com a gente",
  },
];

const faqsOptions = [
  {
    question: "Como recebo os materiais após a compra?",
    answer:
      "Após finalizar a compra, você recebe acesso aos materiais digitais pela plataforma usada no checkout.",
  },
  {
    question: "O Kit Mente em Pausa substitui terapia?",
    answer:
      "Não. O kit é um material educativo e de desenvolvimento pessoal. Ele não substitui acompanhamento psicológico, psiquiátrico ou médico.",
  },
  {
    question: "Posso imprimir os PDFs?",
    answer:
      "Sim. Os diários, planner, checklist, cartões e guia rápido foram pensados para uso digital e impressão.",
  },
  {
    question: "Em quanto tempo vocês respondem?",
    answer:
      "A ideia é responder mensagens em até 48 horas úteis. No começo, pode ser até mais rápido, porque marca pequena ainda corre atrás no braço.",
  },
];

export {navLinks, pillars, benefitsHome, articles, essentialItems, completeItems, kitItems, benefits, faqs, CHECKOUT_LINKS, pillarsAbout, valuesAbout, contactOptions, faqsOptions}