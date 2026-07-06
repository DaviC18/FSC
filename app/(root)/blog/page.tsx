// src/app/blog/page.tsx
/** biome-ignore-all assist/source/organizeImports: <> */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  Sparkles,
  Tag,
} from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Lifestyle Core",
  description:
    "Conteúdos sobre ansiedade, inteligência emocional, rotina, clareza mental e desenvolvimento pessoal.",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#303030_0%,#111111_38%,#0B0B0B_75%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <Sparkles size={14} />
              Conteúdos Lifestyle Core
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Blog para mente, corpo e rotina.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Artigos práticos sobre ansiedade, inteligência emocional, hábitos,
              clareza mental e desenvolvimento pessoal sem enrolação.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="border-y border-white/10 bg-[#111111] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen size={20} className="text-zinc-400" />
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Artigo em destaque
              </p>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid gap-10 rounded-[2.5rem] border border-white/10 bg-linear-to-br from-[#202020] to-[#0F0F0F] p-7 shadow-2xl transition hover:-translate-y-1 hover:border-white/20 md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex min-h-70 items-center justify-center rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,#3A3A3A_0%,#181818_45%,#0B0B0B_100%)] p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-white to-zinc-500 text-black">
                    <Brain size={36} />
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
                    Lifestyle Core
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
                    <Tag size={14} />
                    {featuredPost.category}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-wide text-zinc-400">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  {featuredPost.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-zinc-300 transition group-hover:text-white">
                  Ler artigo
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* POSTS GRID */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Todos os artigos
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl">
                Leia, aplique, evolua.
              </h2>
            </div>

            <Link
              href="/mente-em-pausa"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              Conhecer o Kit
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-80 flex-col justify-between rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
              >
                <div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-zinc-400">
                      <Tag size={13} />
                      {post.category}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-zinc-400">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase leading-tight text-white">
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

      {/* CTA FINAL */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#0B0B0B_100%)] p-8 text-center shadow-2xl md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
            Da leitura para a prática
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Quer transformar esse conteúdo em rotina?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Conheça o Mente em Pausa, um kit prático com ebook, diários,
            checklist, planner, exercícios e plano de 21 dias para organizar
            emoções e reduzir sobrecarga mental.
          </p>

          <Link
            href="/mente-em-pausa"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
          >
            Conhecer o Mente em Pausa
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}