/** biome-ignore-all assist/source/organizeImports: <> */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { pillarsAbout, valuesAbout } from "@/constants";

export const metadata: Metadata = {
  title: "Sobre | Lifestyle Core",
  description:
    "Conheça a Lifestyle Core, uma marca de desenvolvimento pessoal focada em mente, corpo, rotina e evolução diária.",
};

export default function SobrePage() {
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
              Sobre a Lifestyle Core
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Uma base mais forte para uma vida melhor.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              A Lifestyle Core nasceu para unir desenvolvimento pessoal, clareza
              mental, energia física e rotina prática em uma marca simples,
              forte e aplicável.
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
                Ler conteúdos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="border-y border-white/10 bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Nossa missão
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Transformar evolução pessoal em prática diária.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              Desenvolvimento pessoal não precisa ser uma pilha infinita de
              teorias, frases bonitas e promessas impossíveis. A proposta da
              Lifestyle Core é diferente: criar conteúdos e ferramentas que
              ajudem você a aplicar mudanças reais na rotina.
            </p>

            <p>
              A marca parte de uma ideia simples: para evoluir, você precisa
              cuidar da base. Uma mente mais clara, um corpo mais ativo e uma
              rotina mais organizada mudam a forma como você vive, trabalha e
              toma decisões.
            </p>

            <div className="rounded-3xl border border-white/10 bg-[#181818] p-6">
              <p className="text-zinc-300">
                Lifestyle Core é sobre construir uma base forte. Não para viver
                no extremo, mas para viver com mais direção, presença e
                consistência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Os 3 pilares
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Mente. Corpo. Rotina.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              A marca existe para conectar esses três pontos. Porque quando um
              deles desaba, o resto sente o impacto.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillarsAbout.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black uppercase text-white">
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

      {/* ORIGEM / PRODUTO */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-linear-to-br from-[#202020] to-[#0F0F0F] p-8 shadow-2xl md:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-white to-zinc-500 text-black">
              <Target size={30} />
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Primeiro produto
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Mente em Pausa
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              O primeiro produto da Lifestyle Core foi criado para pessoas que
              vivem com a mente acelerada, sobrecarga emocional e dificuldade de
              organizar pensamentos no dia a dia.
            </p>

            <Link
              href="/mente-em-pausa"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
            >
              Ver o produto
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Por que começamos pela mente?
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Porque uma rotina forte começa por dentro.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Ansiedade, excesso de telas, cobrança, falta de foco e pensamento
              acelerado são problemas comuns da vida moderna. O Mente em Pausa
              nasce como uma resposta prática para isso: um kit digital com
              ebook, diários, checklist, planner, exercícios e plano de 21 dias.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              A ideia não é vender uma solução mágica. É entregar um caminho
              organizado para ajudar a pessoa a entender padrões, registrar
              emoções e construir mais clareza com pequenas ações.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              O que defendemos
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Menos excesso. Mais direção.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              A Lifestyle Core não existe para colocar mais cobrança na sua
              vida. Existe para organizar o caminho.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {valuesAbout.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 rounded-3xl border border-white/10 bg-[#181818] p-5"
              >
                <ShieldCheck className="mt-0.5 text-zinc-300" size={20} />
                <p className="text-sm leading-7 text-zinc-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVISO EDUCATIVO */}
      <section className="bg-[#111111] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-4xl border border-white/10 bg-[#181818] p-7 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-black uppercase text-white">
                Um aviso importante
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Os conteúdos e produtos da Lifestyle Core têm finalidade
                educativa e de desenvolvimento pessoal. Eles não substituem
                acompanhamento psicológico, psiquiátrico, médico ou qualquer
                tipo de tratamento profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#0B0B0B_100%)] p-8 text-center shadow-2xl md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-white to-zinc-500 text-black">
            <Flame size={30} />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Evoluir não precisa ser confuso.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Comece pela base: mente mais clara, corpo mais ativo e rotina mais
            consciente.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/mente-em-pausa"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
            >
              Conhecer o Mente em Pausa
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Ler conteúdos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}