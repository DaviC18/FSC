// src/data/blog-posts.ts

export type BlogPost = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Como controlar a ansiedade em momentos difíceis",
    description:
      "Um guia prático para desacelerar a mente, reduzir a sobrecarga emocional e recuperar clareza quando a ansiedade aparece.",
    category: "Ansiedade",
    readTime: "6 min",
    slug: "como-controlar-ansiedade",
    featured: true,
  },
  {
    title: "Como parar de pensar demais e organizar a mente",
    description:
      "Entenda por que a mente entra em looping e como usar ações simples para sair do excesso mental.",
    category: "Clareza mental",
    readTime: "5 min",
    slug: "como-parar-de-pensar-demais",
  },
  {
    title: "Inteligência emocional no trabalho",
    description:
      "Como lidar com pressão, cobranças, conflitos e decisões sem agir apenas no impulso.",
    category: "Controle emocional",
    readTime: "7 min",
    slug: "inteligencia-emocional-no-trabalho",
  },
  {
    title: "Como identificar gatilhos emocionais no dia a dia",
    description:
      "Aprenda a reconhecer situações, pensamentos e hábitos que aumentam ansiedade, irritação e estresse.",
    category: "Autoconhecimento",
    readTime: "5 min",
    slug: "como-identificar-gatilhos-emocionais",
  },
  {
    title: "Ansiedade e excesso de telas: como reduzir a sobrecarga digital",
    description:
      "Notificações, redes sociais e excesso de informação podem deixar sua mente em alerta constante.",
    category: "Vida digital",
    readTime: "6 min",
    slug: "ansiedade-e-excesso-de-telas",
  },
  {
    title: "Como criar uma rotina mais leve sem perder produtividade",
    description:
      "Organize seu dia com mais clareza, menos cobrança e mais consistência emocional.",
    category: "Rotina",
    readTime: "5 min",
    slug: "como-criar-rotina-mais-leve",
  },
];