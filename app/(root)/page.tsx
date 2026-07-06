/** biome-ignore-all assist/source/organizeImports: <> */
import Link from "next/link";
import {
  ArrowRight,
  NotebookText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { articles, benefits, pillars } from "@/constants";

export default function HomePage() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#303030_0%,#111111_35%,#0B0B0B_70%)]" />
        <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <Sparkles size={14} />
              Mente. Corpo. Rotina.
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Evolução pessoal com direção, força e clareza.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A Lifestyle Core é uma marca de desenvolvimento pessoal focada em
              saúde mental, energia física e construção de rotina. Ferramentas
              práticas para quem quer sair do automático e evoluir todos os dias.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/mente-em-pausa"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition hover:scale-[1.03] hover:from-white hover:to-white"
              >
                Conhecer o Kit
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Ver conteúdos
              </Link>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute inset-0 rounded-4xl bg-white/10 blur-3xl" />

            <div className="relative rounded-4xl border border-white/10 bg-[#181818]/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-3xl border border-white/10 bg-[#0F0F0F] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Lifestyle Core
                </p>

                <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-white">
                  Sua base para evoluir sem perder o próprio eixo.
                </h2>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Desenvolvimento pessoal não precisa ser confuso. A proposta é
                  simples: organizar a mente, fortalecer o corpo e construir uma
                  rotina mais consciente.
                </p>

                <div className="mt-8 grid gap-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4"
                    >
                      <ShieldCheck className="text-zinc-300" size={18} />
                      <span className="text-sm text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="border-y border-white/10 bg-[#111111] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Os pilares
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              A evolução começa pela base.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Não adianta buscar alta performance com a mente em caos, o corpo
              parado e a rotina destruída. Primeiro, a base. Depois, o avanço.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="group rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUTO EM DESTAQUE */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 rounded-[2.5rem] border border-white/10 bg-linear-to-br from-[#181818] to-[#0F0F0F] p-6 shadow-2xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-4xl border border-white/10 bg-[#0B0B0B] p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-white to-zinc-500 text-black">
                <NotebookText size={26} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Produto em destaque
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
                Mente em Pausa
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Um kit prático para aliviar a sobrecarga mental, organizar
                emoções e desenvolver controle emocional em 21 dias.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                Kit digital
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase text-white">
                Não é só leitura. É prática.
              </h3>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                O Mente em Pausa reúne ebook, diários, checklist, planner,
                exercícios guiados, plano de 21 dias e cartões de calma para
                transformar conhecimento em ação.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Ebook principal",
                  "Diário da ansiedade",
                  "Checklist de gatilhos",
                  "Plano de 21 dias",
                  "Planner semanal",
                  "Cartões para imprimir",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/mente-em-pausa"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
              >
                Ver detalhes do kit
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Para quem é
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Para quem quer parar de viver no automático.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              A Lifestyle Core é para quem sente que pode viver melhor, mas
              precisa de direção, método e ferramentas simples para começar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Quem sente a mente acelerada e precisa de mais clareza.",
              "Quem quer melhorar rotina, foco e consistência.",
              "Quem busca equilíbrio entre saúde mental e física.",
              "Quem gosta de ferramentas práticas, não teoria infinita.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-[#181818] p-6 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Conteúdos
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl">
                Leia, aplique, evolua.
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:text-white"
            >
              Ver todos os artigos
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                  {article.category}
                </p>

                <h3 className="mt-5 text-xl font-black uppercase leading-snug text-white">
                  {article.title}
                </h3>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-400 transition group-hover:text-white">
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
            Comece pela mente
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Seu próximo nível precisa de uma base mais forte.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Conheça o Mente em Pausa e comece a organizar emoções, reduzir
            sobrecarga mental e construir mais controle emocional na rotina.
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