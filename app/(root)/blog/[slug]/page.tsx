/** biome-ignore-all assist/source/organizeImports: <> */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { articles } from "@/constants/blogArticles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado | Lifestyle Core",
    };
  }

  return {
    title: `${article.title} | Lifestyle Core`,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((post) => post.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#303030_0%,#111111_38%,#0B0B0B_75%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar para o blog
          </Link>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            <Sparkles size={14} />
            Artigo Lifestyle Core
          </div>

          <h1 className="mt-8 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-7 text-base leading-8 text-zinc-400 sm:text-lg">
            {article.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
              <Tag size={14} />
              {article.category}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
              <Clock size={14} />
              {article.readTime}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
              <BookOpen size={14} />
              Desenvolvimento pessoal
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-6 pb-20 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-[#181818] p-6 shadow-2xl md:p-10">
            <div className="rounded-4xl border border-white/10 bg-[#0F0F0F] p-6 md:p-8">
              <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/3 p-5">
                <ShieldCheck className="mt-1 shrink-0 text-zinc-300" size={22} />

                <p className="text-sm leading-7 text-zinc-400">
                  Este conteúdo tem finalidade educativa e de desenvolvimento
                  pessoal. Não substitui acompanhamento psicológico,
                  psiquiátrico ou médico.
                </p>
              </div>

              <div className="mt-10 space-y-12">
                {article.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-zinc-400"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.list && (
                      <ul className="mt-6 grid gap-3">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 text-sm leading-7 text-zinc-300"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#0B0B0B_100%)] p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-white to-zinc-500 text-black">
            <Brain size={30} />
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
            Da leitura para a prática
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            Quer aplicar isso na sua rotina?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Conheça o Kit Mente em Pausa: ebook, diários, checklist, planner,
            exercícios guiados e plano de 21 dias para organizar emoções e
            reduzir sobrecarga mental.
          </p>

          <Link
            href="/mente-em-pausa"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
          >
            Conhecer o Kit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="border-t border-white/10 bg-[#111111] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Continue lendo
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl">
                Artigos relacionados
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:text-white"
            >
              Ver todos
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-70 flex-col justify-between rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    {post.category}
                  </p>

                  <h3 className="mt-5 text-xl font-black uppercase leading-snug text-white">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {post.description}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition group-hover:text-white">
                  Ler artigo
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}