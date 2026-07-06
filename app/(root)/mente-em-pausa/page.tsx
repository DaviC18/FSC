/** biome-ignore-all assist/source/organizeImports: <> */
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Check,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { benefits, CHECKOUT_LINKS, completeItems, essentialItems, faqs, kitItems } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mente me Pausa | Lifestyle Core",
  description: "Ebook para controlar a sua mente"
}
export default function MenteEmPausaPage() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#343434_0%,#111111_38%,#0B0B0B_75%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              <Sparkles size={14} />
              Kit digital de inteligência emocional
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Mente em Pausa
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              Um kit prático para aliviar a sobrecarga mental, organizar
              emoções e desenvolver controle emocional em 21 dias.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[
                "Ebook + ferramentas práticas",
                "Plano de 21 dias",
                "Materiais para imprimir",
                "Acesso digital",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-zinc-300"
                >
                  <Check size={17} className="text-zinc-200" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={CHECKOUT_LINKS.complete}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition hover:scale-[1.03] hover:from-white hover:to-white"
              >
                Quero o Kit Completo
                <ArrowRight size={18} />
              </a>

              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Comparar planos
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-zinc-500">
              Material educativo. Não substitui acompanhamento profissional.
            </p>
          </div>

          {/* HERO PRODUCT CARD */}
          <div className="relative">
            <div className="absolute inset-0 rounded-4xl bg-white/10 blur-3xl" />

            <div className="relative rounded-4xl border border-white/10 bg-[#181818]/90 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-3xl border border-white/10 bg-[#0F0F0F] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                  Dentro do kit
                </p>

                <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-white">
                  Uma caixa de ferramentas para dias de mente acelerada.
                </h2>

                <div className="mt-8 grid gap-3">
                  {completeItems.slice(0, 6).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4"
                    >
                      <BadgeCheck className="text-zinc-300" size={18} />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p className="text-sm font-bold text-white">
                    + plano completo com 9 materiais digitais
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Organizado para leitura, prática diária, planejamento e
                    consulta rápida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="border-y border-white/10 bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              O problema
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Sua mente parece não desligar?
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              Pensar demais, se cobrar demais, viver reagindo a mensagens,
              problemas, prazos e expectativas cansa. Aos poucos, a mente entra
              em modo alerta e até tarefas simples começam a parecer pesadas.
            </p>

            <p>
              O problema nem sempre é falta de força. Muitas vezes é falta de
              clareza, método e ferramentas simples para entender o que está
              acontecendo por dentro.
            </p>

            <p className="rounded-3xl border border-white/10 bg-[#181818] p-6 text-zinc-300">
              O Mente em Pausa foi criado para transformar conteúdo em prática:
              registrar, organizar, respirar, refletir e agir com mais controle.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO / KIT */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              A solução
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Não é só um ebook. É um método prático.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              O kit reúne materiais com funções diferentes: leitura, registro,
              planejamento, exercícios e consulta rápida. Cada peça tem um papel
              na sua jornada de 21 dias.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kitItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Benefícios
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              O objetivo é clareza, não perfeição.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Você não precisa virar uma pessoa perfeita. Precisa entender seus
              padrões, reduzir o excesso e aprender a responder melhor ao que
              sente.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-3xl border border-white/10 bg-[#181818] p-5"
              >
                <ShieldCheck className="mt-0.5 text-zinc-300" size={20} />
                <p className="text-sm leading-7 text-zinc-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Escolha seu acesso
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Dois planos. Uma direção.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Comece com o essencial ou siga a jornada completa com todos os
              materiais do Kit Mente em Pausa.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* ESSENCIAL */}
            <article className="rounded-[2.5rem] border border-white/10 bg-[#181818] p-7 md:p-9">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Plano Essencial
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase text-white">
                Mente em Pausa Essencial
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Para quem quer começar com as ferramentas principais para
                entender gatilhos e organizar ansiedade.
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black text-white">R$27</span>
                <span className="pb-2 text-sm text-zinc-500">pagamento único</span>
              </div>

              <div className="mt-8 grid gap-3">
                {essentialItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={18} className="text-zinc-300" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={CHECKOUT_LINKS.essential}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Escolher Essencial
              </a>
            </article>

            {/* COMPLETO */}
            <article className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-linear-to-br from-[#232323] to-[#0F0F0F] p-7 shadow-[0_0_60px_rgba(255,255,255,0.08)] md:p-9">
              <div className="absolute right-6 top-6 rounded-full bg-linear-to-r from-white to-zinc-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
                Mais recomendado
              </div>

              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
                Plano Completo
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-black uppercase text-white">
                Kit Mente em Pausa Completo
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Para quem quer todos os materiais, plano de 21 dias, exercícios,
                planner, cartões e ferramentas práticas.
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-black text-white">R$47</span>
                <span className="pb-2 text-sm text-zinc-500">pagamento único</span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {completeItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={18} className="text-zinc-300" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={CHECKOUT_LINKS.complete}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:from-white hover:to-white"
              >
                Quero o Kit Completo
                <ArrowRight size={18} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Como funciona
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Simples, direto e digital.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              "Escolha seu plano",
              "Finalize a compra",
              "Receba os materiais",
              "Comece pelo guia rápido",
            ].map((step, index) => (
              <article
                key={step}
                className="rounded-4xl border border-white/10 bg-[#181818] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-white to-zinc-500 text-sm font-black text-black">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-lg font-black uppercase text-white">
                  {step}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Um processo simples para você acessar os arquivos e começar a
                  usar sem complicação.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Perguntas frequentes
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Antes de começar
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-[#181818] p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="mt-1 shrink-0 text-zinc-400" size={20} />

                  <div>
                    <h3 className="font-black uppercase text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,#2A2A2A_0%,#111111_45%,#0B0B0B_100%)] p-8 text-center shadow-2xl md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-white to-zinc-500 text-black">
            <Brain size={30} />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Comece hoje a organizar sua mente com mais clareza.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            O Mente em Pausa foi criado para quem quer sair do excesso mental e
            construir mais controle emocional na rotina, uma prática por vez.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={CHECKOUT_LINKS.complete}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
            >
              Quero o Kit Completo
              <ArrowRight size={18} />
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
            >
              Voltar para Lifestyle Core
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-xs leading-6 text-zinc-500">
            Este material tem finalidade educativa e não substitui
            acompanhamento psicológico, psiquiátrico ou médico.
          </p>
        </div>
      </section>
    </main>
  );
}