import { Brain, Dumbbell, Flame } from "lucide-react";

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

const benefits = [
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


export {navLinks, pillars, benefits, articles}