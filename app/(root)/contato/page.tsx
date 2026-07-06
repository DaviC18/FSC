/** biome-ignore-all assist/source/organizeImports: <> */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  Clock,
  HelpCircle,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { contactOptions, faqsOptions } from "@/constants";

export const metadata: Metadata = {
  title: "Contato | Lifestyle Core",
  description:
    "Entre em contato com a Lifestyle Core para dúvidas sobre produtos, suporte, parcerias e desenvolvimento pessoal.",
};

export default function ContatoPage() {
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
              Contato Lifestyle Core
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fale com a gente.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Tem dúvidas sobre o Kit Mente em Pausa, produtos digitais,
              parcerias ou suporte? Use um dos canais abaixo para entrar em
              contato.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:contato@lifestylecore.com.br?subject=Contato%20-%20Lifestyle%20Core"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition hover:scale-[1.03] hover:from-white hover:to-white"
              >
                Enviar e-mail
                <ArrowRight size={18} />
              </a>

              <Link
                href="/mente-em-pausa"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Ver o Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="border-y border-white/10 bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Canais de contato
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Escolha o melhor caminho.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Para agilizar a resposta, escolha o assunto mais próximo da sua
              necessidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <a
                  key={option.title}
                  href={option.href}
                  className="group rounded-4xl border border-white/10 bg-[#181818] p-7 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#202020]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black uppercase text-white">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {option.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition group-hover:text-white">
                    {option.label}
                    <ArrowRight size={16} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM VISUAL */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Mensagem
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Envie sua dúvida com clareza.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Por enquanto, o contato principal funciona por e-mail. Esse
              formulário já deixa o layout pronto para quando você quiser
              conectar com uma API, Resend, EmailJS ou outro serviço.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#181818] p-6">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0 text-zinc-300" size={22} />

                <div>
                  <h3 className="font-black uppercase text-white">
                    Tempo de resposta
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Normalmente respondemos em até 48 horas úteis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[2.5rem] border border-white/10 bg-[#181818] p-6 shadow-2xl md:p-8">
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-wide text-zinc-300"
                >
                  Nome
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0F0F0F] px-5 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-wide text-zinc-300"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0F0F0F] px-5 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-wide text-zinc-300"
                >
                  Assunto
                </label>

                <select
                  id="subject"
                  name="subject"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0F0F0F] px-5 py-4 text-sm text-white outline-none transition focus:border-white/30"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>
                  <option value="suporte">Suporte</option>
                  <option value="compra">Dúvida sobre compra</option>
                  <option value="produto">Dúvida sobre produto</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-wide text-zinc-300"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Escreva sua mensagem..."
                  className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-[#0F0F0F] px-5 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
                />
              </div>

              <a
                href="mailto:contato@lifestylecore.com.br?subject=Contato%20-%20Lifestyle%20Core"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:from-white hover:to-white"
              >
                Enviar mensagem por e-mail
                <ArrowRight size={18} />
              </a>

              <p className="text-center text-xs leading-6 text-zinc-500">
                O botão abre seu aplicativo de e-mail. Depois você pode conectar
                esse formulário com uma API real.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-[#111111] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl border border-white/10 bg-[#181818] p-7">
              <AtSign className="text-zinc-300" size={28} />

              <h3 className="mt-6 text-xl font-black uppercase text-white">
                E-mail oficial
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Use sempre o e-mail oficial da marca para dúvidas sobre suporte,
                produtos e parcerias.
              </p>

              <a
                href="mailto:contato@lifestylecore.com.br"
                className="mt-6 inline-block text-sm font-bold text-zinc-300 transition hover:text-white"
              >
                contato@lifestylecore.com.br
              </a>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[#181818] p-7">
              <ShieldCheck className="text-zinc-300" size={28} />

              <h3 className="mt-6 text-xl font-black uppercase text-white">
                Compra segura
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                A compra dos produtos digitais é feita por uma plataforma de
                checkout externa, com entrega digital dos materiais.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[#181818] p-7">
              <Mail className="text-zinc-300" size={28} />

              <h3 className="mt-6 text-xl font-black uppercase text-white">
                Suporte ao produto
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Se você comprou algum produto e teve problema de acesso, informe
                o e-mail usado na compra para facilitar a verificação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Perguntas rápidas
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Antes de chamar.
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {faqsOptions.map((faq) => (
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
          <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
            Produto principal
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Conheça o Kit Mente em Pausa.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Um kit prático para aliviar a sobrecarga mental, organizar emoções
            e desenvolver controle emocional em 21 dias.
          </p>

          <Link
            href="/mente-em-pausa"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-white to-zinc-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.03] hover:from-white hover:to-white"
          >
            Ver o Kit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}