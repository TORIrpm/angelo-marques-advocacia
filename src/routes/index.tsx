import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scale,
  Briefcase,
  Users,
  Gavel,
  ShoppingBag,
  Building2,
  Phone,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Handshake,
  Eye,
  Menu,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-escritorio.jpg";

const WHATSAPP = "https://wa.me/5583996533343";
const TEL = "tel:+5583996533343";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ângelo Marques Advocacia | Advogados em Santa Rita - PB" },
      {
        name: "description",
        content:
          "Escritório de advocacia em Santa Rita - PB. Atuação em Direito Civil, Trabalhista, Família, Criminal e do Consumidor. Nota 5,0 no Google. Agende sua consulta.",
      },
      { property: "og:title", content: "Ângelo Marques Advocacia" },
      {
        property: "og:description",
        content:
          "Advocacia séria e próxima em Santa Rita - PB. Direito Civil, Trabalhista, Família, Criminal e do Consumidor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const areas = [
  {
    icon: Building2,
    title: "Direito Previdenciário",
    text: "Aposentadorias (rural, especial, por idade, professores, dona de casa), auxílio-doença e acidente, pensão por morte, salário-maternidade, BPC/LOAS e revisões de benefícios.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    text: "Reclamações trabalhistas, ações e recursos na Justiça do Trabalho, rescisões, indenizações por dano moral e acidente de trabalho, acordos e homologações.",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    text: "Responsabilidade civil, contencioso, consultoria, DPVAT, planos de saúde e organização patrimonial com planejamento sucessório.",
  },
  {
    icon: Users,
    title: "Família e Sucessões",
    text: "Divórcio consensual ou litigioso, guarda e visitas, pensão alimentícia, partilha de bens, união estável, acompanhamento e condução de inventário.",
  },
  {
    icon: Gavel,
    title: "Direito Contratual",
    text: "Análise, elaboração e negociação de contratos, notificações, aditamentos, distratos e minutas padrão para contratações.",
  },
  {
    icon: ShoppingBag,
    title: "Assessoria Empresarial",
    text: "Consultoria e auditoria trabalhista, defesa em processos administrativos e judiciais e negociação coletiva perante sindicatos.",
  },
];

const diferenciais = [
  {
    icon: Eye,
    title: "Transparência total",
    text: "Você acompanha cada etapa do processo com linguagem clara, sem promessas vazias.",
  },
  {
    icon: Handshake,
    title: "Atendimento próximo",
    text: "Contato direto com o advogado responsável pelo seu caso, do início ao fim.",
  },
  {
    icon: ShieldCheck,
    title: "Ética acima de tudo",
    text: "Conduta pautada pelo Código de Ética da OAB e pelo respeito ao cliente.",
  },
  {
    icon: Clock,
    title: "Respostas ágeis",
    text: "Prazos monitorados de perto e retorno rápido às suas dúvidas.",
  },
];

const depoimentos = [
  {
    nome: "Maria Fernanda L.",
    texto:
      "Fui recebida com muito respeito e atenção. Explicaram cada passo do processo e resolveram meu caso com rapidez.",
  },
  {
    nome: "José Ricardo S.",
    texto:
      "Profissionalismo do início ao fim. Senti segurança em cada orientação recebida. Recomendo de olhos fechados.",
  },
  {
    nome: "Ana Cláudia B.",
    texto:
      "Escritório sério e acolhedor. Sempre respondiam minhas dúvidas e nunca me deixaram sem resposta.",
  },
];

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", assunto: "", mensagem: "" });

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá, meu nome é ${form.nome}.%0ATelefone: ${form.telefone}%0AAssunto: ${form.assunto}%0A%0A${form.mensagem}`;
    window.open(`${WHATSAPP}?text=${texto}`, "_blank", "noopener");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
          <a href="#topo" className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-sm border border-gold/50">
              <Scale className="size-5 text-gold" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg leading-tight text-white sm:text-xl">
                Ângelo Marques
              </span>
              <span className="block text-xs uppercase tracking-[0.25em] text-gold">
                Advocacia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-white/75 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="rounded-sm bg-gold px-5 py-2.5 text-base font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
            >
              Falar no WhatsApp
            </a>
          </nav>

          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="shrink-0 p-2 text-white lg:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-navy-deep px-5 pb-6 lg:hidden">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-3 text-base text-white/80"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="mt-4 rounded-sm bg-gold px-5 py-3 text-center text-base font-semibold text-navy-deep"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative isolate bg-navy-deep pt-20">
        <img
          src={heroImg}
          alt="Escritório de advocacia com estante de livros jurídicos e mesa de madeira"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Santa Rita · Paraíba
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Defesa firme, orientação clara e respeito por cada história.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              O escritório Ângelo Marques Advocacia acompanha pessoas e empresas com
              seriedade técnica e atendimento humano, do primeiro atendimento à decisão
              final.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="rounded-sm bg-gold px-8 py-4 text-center text-base font-semibold uppercase tracking-wider text-navy-deep transition-colors hover:bg-gold-soft"
              >
                Agendar consulta
              </a>
              <a
                href={TEL}
                className="rounded-sm border border-white/25 px-8 py-4 text-center text-base font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold hover:text-gold"
              >
                (83) 99653-3343
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 text-base text-white/75">
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" />
                ))}
              </span>
              <span>
                <strong className="text-white">5,0</strong> de avaliação no Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent-foreground/60">
              O escritório
            </p>
            <h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
              Uma advocacia construída sobre confiança
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                O escritório Ângelo Marques Advocacia concilia o trabalho de
                experientes advogados e novos talentos, prestando assessoria jurídica
                a pessoas físicas e jurídicas, com observância dos deveres éticos e
                legais inerentes à advocacia — especialmente do sigilo profissional.
              </p>
              <p>
                Atuamos, administrativa ou judicialmente, nos mais variados ramos do
                Direito, em demandas da capital e demais municípios do Estado da
                Paraíba. Mantemos ainda parcerias com escritórios em todo o
                território nacional, para acompanhamento de processos e melhor
                atendimento da clientela.
              </p>
              <p>
                Dentre os nossos diferenciais, destacamos o atendimento pessoal, a
                qualidade dos serviços, a busca pelo aprimoramento e pelas melhores
                soluções e a luta para defender os interesses e direitos dos clientes.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { n: "5,0", l: "Avaliação no Google" },
              { n: "BR", l: "Atendimento em todo o país" },
              { n: "07:30", l: "Atendimento a partir de" },
              { n: "100%", l: "Sigilo e ética" },
            ].map((s) => (
              <div
                key={s.l}
                className="border border-border bg-card p-8 transition-colors hover:border-accent"
              >
                <p className="font-serif text-4xl text-primary">{s.n}</p>
                <p className="mt-2 text-base text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent-foreground/60">
              Áreas de atuação
            </p>
            <h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
              Assessoria jurídica completa para cada momento
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="group bg-card p-9 transition-colors hover:bg-primary">
                <a.icon className="size-7 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-primary transition-colors group-hover:text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent-foreground/60">
            Diferenciais
          </p>
          <h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
            Por que confiar seu caso a nós
          </h2>
        </div>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d) => (
            <div key={d.title}>
              <div className="grid size-12 place-items-center rounded-full border border-accent/40">
                <d.icon className="size-5 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary">{d.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-navy-deep py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-base uppercase tracking-[0.3em] text-gold">Depoimentos</p>
              <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                A confiança de quem já foi atendido
              </h2>
            </div>
            <div className="flex items-center gap-4 border border-gold/40 px-6 py-4">
              <p className="font-serif text-4xl text-gold">5,0</p>
              <div>
                <span className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </span>
                <p className="mt-1 text-base text-white/70">Avaliações no Google</p>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="border border-white/10 p-8">
                <span className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </span>
                <blockquote className="mt-5 font-serif text-lg leading-relaxed text-white/85">
                  “{d.texto}”
                </blockquote>
                <figcaption className="mt-6 text-base uppercase tracking-widest text-gold">
                  {d.nome}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent-foreground/60">
              Contato
            </p>
            <h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
              Agende sua consulta
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Conte-nos brevemente o seu caso. O envio abre uma conversa direta com o
              escritório no WhatsApp, com seus dados já preenchidos.
            </p>

            <form onSubmit={enviar} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="text-sm uppercase tracking-widest text-muted-foreground">
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="text-sm uppercase tracking-widest text-muted-foreground">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    inputMode="numeric"
                    pattern="\(\d{2}\) \d{5}-\d{4}"
                    maxLength={15}
                    required
                    value={form.telefone}
                    onChange={(e) =>
                      setForm({ ...form, telefone: formatPhone(e.target.value) })
                    }
                    className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="assunto" className="text-sm uppercase tracking-widest text-muted-foreground">
                  Área de interesse
                </label>
                <select
                  id="assunto"
                  required
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                  className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent"
                >
                  <option value="">Selecione</option>
                  {areas.map((a) => (
                    <option key={a.title} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="text-sm uppercase tracking-widest text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-8 py-4 text-base font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-navy-deep sm:w-auto"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 border border-border bg-card p-8">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-base leading-relaxed text-muted-foreground">
                  R. João Vitórino Raposo, 94 — Centro
                  <br />
                  Santa Rita - PB, 58300-260
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                <a href={TEL} className="text-base text-muted-foreground hover:text-primary">
                  (83) 99653-3343
                </a>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                <p className="text-base leading-relaxed text-muted-foreground">
                  Segunda a sexta, a partir das 07:30
                </p>
              </div>
            </div>
            <iframe
              title="Mapa do escritório Ângelo Marques Advocacia"
              src="https://www.google.com/maps?q=Ângelo+Marques+Advocacia,+R.+João+Vitórino+Raposo,+94+-+Centro,+Santa+Rita+-+PB&ll=-7.1256981,-34.9826954&output=embed"
              loading="lazy"
              className="h-80 w-full border border-border"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep py-16 text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="font-serif text-2xl text-white">Ângelo Marques Advocacia</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
              Santa Rita · Paraíba
            </p>
            <p className="mt-5 max-w-xs text-base leading-relaxed">
              Atuação ética e dedicada em defesa dos direitos de pessoas e empresas.
            </p>
          </div>
          <div className="text-base leading-relaxed">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gold">Contato</p>
            <p>R. João Vitórino Raposo, 94 — Centro</p>
            <p>Santa Rita - PB, 58300-260</p>
            <p className="mt-2">
              <a href={TEL} className="hover:text-gold">
                (83) 99653-3343
              </a>
            </p>
            <p className="mt-2">Segunda a sexta, a partir das 07:30</p>
          </div>
          <div className="text-base">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gold">Redes</p>
            <div className="flex flex-col gap-2">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-gold">
                WhatsApp
              </a>
              <a href="https://www.instagram.com/angelomarquesadvocacia/" target="_blank" rel="noopener" className="hover:text-gold">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-white/50 lg:px-8">
          © {new Date().getFullYear()} Ângelo Marques Advocacia. Todos os direitos
          reservados.
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.892 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
