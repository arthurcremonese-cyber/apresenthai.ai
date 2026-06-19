import { useState } from "react";
import { Check, Shield, Mail, MessageSquare, ChevronDown, ChevronUp, Star, X, ArrowDown } from "lucide-react";

const CHECKOUT_URL = "https://checkout.pagtrust.com.br/ck7542cfaf?funnel=fn3e6a3282&step=2&referer=https%3A%2F%2Fwww.capschool.com.br%2F&ra=false";
const BRAND_ORANGE = "#ff4516";

const LUCAS_IMG = "https://media.base44.com/images/public/6a077789d250c4994dbdad52/73971b366_image.png";
const LUCAS_WORK_IMG = "https://media.base44.com/images/public/6a077789d250c4994dbdad52/e90475564_WhatsAppImage2026-05-15at173652.jpg";

const TESTIMONIALS = [
  { name: "Ericsson", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/ee6c8fffd_WhatsAppImage2026-05-15at173355.jpg" },
  { name: "Daniel Büll", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/dbd67c445_WhatsAppImage2026-05-15at1734491.jpg" },
  { name: "Ricardo Grube", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/9744f3893_WhatsAppImage2026-05-15at173449.jpg" },
  { name: "Fabian Lipiarski", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/7d6d262b5_WhatsAppImage2026-05-15at173511.jpg" },
  { name: "Matheus", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/31428d24b_WhatsAppImage2026-05-15at1736251.jpg" },
  { name: "Cleider Bahia", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/33df5e456_WhatsAppImage2026-05-15at1736252.jpg" },
  { name: "Felipe Augusto", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/2ad3c3439_WhatsAppImage2026-05-15at173626.jpg" },
  { name: "Durva Simão", img: "https://media.base44.com/images/public/6a077789d250c4994dbdad52/ea9d6d823_WhatsAppImage2026-05-15at173625.jpg" },
];

const FAQ_ITEMS = [
  { q: "As aulas são gravadas?", a: "Sim. Todo o processo é 100% gravado, para você assistir no seu tempo, quantas vezes precisar, dentro do período de acesso de 6 meses." },
  { q: "Preciso ter experiência prévia?", a: "Não. O método foi desenvolvido para funcionar mesmo sem nenhuma habilidade manual prévia. Alunos que nunca mexeram em capacete antes conseguiram resultados profissionais." },
  { q: "Consigo construir um capacete do zero?", a: "Sim. O processo cobre desde a escolha do casco de linha até a finalização com identidade. Você vai do zero a um capacete custom rebaixado." },
  { q: "E se eu não tiver espaço em casa?", a: "O método foi feito para ser executado em casa, sem oficina. Alunos produziram em apartamentos, garagens pequenas e bancadas simples." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não quiser continuar, é só pedir o reembolso. Sem questionamentos." },
];

const STATS_3 = [
  { v: "+2.000", l: "Capacetes" },
  { v: "15 Anos", l: "Experiência" },
  { v: "R$250", l: "Custo médio" },
];

function GreenCTA({ children }: { children: React.ReactNode }) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const anyWindow = window as any;
      anyWindow.dataLayer = anyWindow.dataLayer || [];
      anyWindow.dataLayer.push({
        event: 'click_cta_checkout',
        gtm_id: 'GTM-N8NFDWFF',
        buttonText: typeof children === 'string' ? children : 'CTA_CHECKOUT',
      });
    }
  };

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="w-full text-center py-4 px-6 bg-[#16a34a] text-white font-extrabold uppercase tracking-wider text-sm rounded-xl whitespace-nowrap overflow-hidden text-ellipsis transition-all active:scale-[0.98] shadow-lg mt-6 block"
    >
      {children}
    </a>
  );
}

function SectionTag({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}>
      <span className="h-0.5 w-6 rounded-full" style={{ backgroundColor: BRAND_ORANGE }} />
      <span className="text-xs font-black tracking-widest uppercase" style={{ color: BRAND_ORANGE }}>{children}</span>
    </div>
  );
}

function HeroSection() {
  const checks = ["Em sua casa.", "Sem oficina.", "Sem maquinário.", "Sem experiência prévia."];

  return (
    <section className="bg-black">
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "56px" }}>
        <img src={LUCAS_IMG} alt="Lucas Marinheiro" className="w-full block" style={{ objectFit: "contain", width: "100%" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% via-black/60 via-80% to-black to-90%" />
      </div>

      <div className="bg-black px-5 pb-12 max-w-7xl mx-auto">
        <div className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: BRAND_ORANGE }}>
          Método LM — Capacetes Custom
        </div>

        <h1 className="text-white uppercase leading-none mb-3" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(40px, 12vw, 90px)", fontWeight: 900 }}>
          Faça seu <span style={{ color: BRAND_ORANGE }}>capacete</span> custom.
        </h1>

        <p className="text-white text-base mb-5 leading-snug">
          O modelo que você nunca achou... <strong className="text-white font-extrabold">agora você faz.</strong>
        </p>

        <ul className="flex flex-col gap-2.5 mb-5">
          {checks.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-white font-semibold text-sm">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: BRAND_ORANGE }} />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-white/80 text-xs leading-relaxed mb-2 border-l-2 pl-3" style={{ borderColor: BRAND_ORANGE }}>
          Transforme qualquer casco comum em um capacete totalmente rebaixado, exclusivo e com a sua identidade. Método validado do absoluto zero.
        </p>

        <GreenCTA>QUERO FAZER MEU CAPACETE</GreenCTA>

        <div className="flex justify-center gap-6 mt-4">
          {["Acesso imediato", "Garantia de 7 dias"].map((pill, i) => (
            <span key={i} className="flex items-center gap-1.5 text-white/70 text-xs font-semibold">
              <Check className="w-3 h-3" style={{ color: "#16a34a" }} />
              {pill}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
          {STATS_3.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-white font-black text-xl" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif" }}>{s.v}</div>
              <div className="text-white/50 text-[9px] uppercase tracking-widest font-bold mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    { n: "01", t: "Efeito cabeção", d: "O capacete volumoso quebra toda a estética. Você sabe disso. Convive com isso. E não acha solução por um preço que faça sentido." },
    { n: "02", t: "Custom de verdade custa caro", d: "Capacetes prontos custam R$800 a R$2.000. Os de linha são genéricos. Não existe meio-termo acessível com identidade real." },
  ];
  const solutions = [
    { t: "Não é Talento, é Processo.", d: "O Método LM é a formalização de 15 anos de fabricação prática. Um passo a passo que qualquer pessoa consegue seguir." },
    { t: "Não é um Curso", d: "É acesso ao passo a passo completo. Você vai saber fazer, não vai só aprender sobre. A diferença é o resultado real que sai das suas mãos." },
    { t: "Resultado Comprovado", d: "Alunos que nunca mexeram em capacete antes estão produzindo, vendendo e gerando renda com o método. Não é promessa. São os resultados." },
  ];

  return (
    <section className="bg-white py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionTag>O Problema</SectionTag>
        <h2 className="text-slate-950 uppercase leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(28px, 9vw, 58px)", fontWeight: 900 }}>
          O mercado <span style={{ color: BRAND_ORANGE }}>não entrega</span><br />o que você quer.
        </h2>
        <p className="text-slate-950 font-extrabold uppercase text-xs tracking-widest mb-8">
          Capacetes genéricos. Efeito cabeção. Sem identidade.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {problems.map((p, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border-l-4 p-4" style={{ borderLeftColor: "rgba(239,68,68,0.4)" }}>
                <span className="inline-block bg-[#ff4516] text-white px-2.5 py-0.5 rounded-md text-xs font-bold mb-2">{p.n}</span>
                <strong className="block text-slate-950 text-base font-extrabold mb-1">{p.t}</strong>
                <p className="text-slate-700 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-100/60 rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 rounded-full" style={{ backgroundColor: BRAND_ORANGE }} />
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: BRAND_ORANGE }}>A Solução</span>
            </div>
            {solutions.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border-l-4 shadow-md p-4" style={{ borderLeftColor: BRAND_ORANGE }}>
                <div className="uppercase font-black leading-tight mb-2" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(18px, 5vw, 22px)", color: BRAND_ORANGE }}>
                  {s.t}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <GreenCTA>QUERO ACESSAR O MÉTODO</GreenCTA>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <section id="resultados" className="bg-white py-12 px-5 border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        <SectionTag>Resultados Reais</SectionTag>
        <h2 className="text-slate-950 uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(28px, 9vw, 56px)", fontWeight: 900 }}>
          O que os alunos<br /><span style={{ color: BRAND_ORANGE }}>estão fazendo.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {visible.map((t, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 cursor-pointer" onClick={() => setModalImg(t.img)}>
              <div className="bg-white px-4 pt-3 pb-2 flex items-center gap-3">
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, s) => <Star key={s} className="w-3 h-3" style={{ fill: BRAND_ORANGE, color: BRAND_ORANGE }} />)}
                  </div>
                  <p className="text-sm font-bold text-slate-950">{t.name}</p>
                </div>
              </div>
              <img src={t.img} alt={t.name} className="w-full object-cover object-top" style={{ maxHeight: 500 }} loading="lazy" />
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="flex justify-center mt-6">
            <button onClick={() => setExpanded(true)} className="flex items-center gap-2 bg-neutral-900 text-white font-bold text-sm rounded-full py-3 px-6 transition-all active:scale-[0.98] shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Ver + Resultados de alunos
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        )}

        <GreenCTA>QUERO TER ESSES RESULTADOS</GreenCTA>
      </div>

      {modalImg && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setModalImg(null)}>
          <button className="absolute top-4 right-4 text-white z-10"><X className="w-8 h-8" /></button>
          <img src={modalImg} alt="Depoimento" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
}

function ModulesSection() {
  const modules = [
    { n: "01", mod: "Módulo 1", title: "Preparação", desc: "O que comprar e por quê. Sem desperdício.", items: ["Lista de materiais com fornecedor direto", "Escolha correta do casco de linha", "Preparação inicial sem erros"] },
    { n: "02", mod: "Módulo 2", title: "Desmontagem & Modificação", desc: "Abertura e modificação estrutural do jeito certo.", items: ["Desmontagem correta por tipo de casco", "Modificação da estrutura interna", "Processo de rebaixo sem risco"] },
    { n: "03", mod: "Módulo 3", title: "Interior", desc: "Elimine o efeito cabeção sem maquinário especial.", items: ["Construção completa do interior", "Eliminação total do efeito cabeção", "Conforto real sem barulho excessivo"] },
    { n: "04", mod: "Módulo 4", title: "Finalização", desc: "Feche o processo com identidade própria.", items: ["Acabamento final profissional", "Aplicação de identidade sem pintura", "Ajustes finais de encaixe e estética"] },
  ];

  return (
    <section id="metodo" className="bg-black py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionTag>O Método</SectionTag>
        <h2 className="text-white uppercase leading-none mb-10" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(30px, 9vw, 60px)", fontWeight: 900 }}>
          4 Módulos.<br /><span style={{ color: BRAND_ORANGE }}>Do zero ao pronto.</span>
        </h2>

        <div className="space-y-4 mb-4">
          {modules.map((m, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/15 p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}>
              <span className="absolute -top-4 -right-2 font-black uppercase leading-none select-none pointer-events-none opacity-10 mix-blend-overlay" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "8rem", color: "#fff" }}>
                {m.n}
              </span>
              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: BRAND_ORANGE }}>{m.mod}</div>
                <h3 className="font-extrabold text-xl mb-2" style={{ fontFamily: "'Montserrat', system-ui, sans-serif", color: BRAND_ORANGE }}>{m.title}</h3>
                <p className="text-white text-sm mb-4 leading-relaxed">{m.desc}</p>
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {m.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_ORANGE }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 mb-0" style={{ backgroundColor: "rgba(255,69,22,0.10)", backdropFilter: "blur(24px)" }}>
          <div className="inline-block bg-black text-xs font-black uppercase tracking-widest rounded-lg px-3 py-1.5 mb-3" style={{ color: BRAND_ORANGE }}>
            Bônus Exclusivo
          </div>
          <h4 className="font-extrabold text-lg mb-1" style={{ fontFamily: "'Montserrat', system-ui, sans-serif", color: BRAND_ORANGE }}>
            Aula: "Venda seu primeiro capacete"
          </h4>
          <p className="text-white/80 text-sm">Como transformar a habilidade em uma fonte de renda real e imediata.</p>
        </div>

        <GreenCTA>QUERO ACESSAR O MÉTODO</GreenCTA>
      </div>
    </section>
  );
}

function ForWhoSection() {
  const checks = [
    "Se incomoda com o efeito cabeção do seu capacete",
    "Cansou de capacetes genéricos sem identidade",
    "Quer aprender o processo completo do zero",
    "Quer fazer em casa, sem oficina e sem maquinário",
    "Quer dar vida nova a um capacete antigo",
    "Quer dominar uma habilidade que poucos têm",
    "Quer transformar isso em fonte de renda real",
    "Quer a satisfação de ter feito com as próprias mãos",
  ];

  return (
    <section className="bg-black py-12 px-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTag>Para Quem É</SectionTag>
        <h2 className="text-white uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(30px, 9vw, 60px)", fontWeight: 900 }}>
          A CAP SCHOOL<br /><span style={{ color: BRAND_ORANGE }}>é pra você.</span>
        </h2>
        <div className="flex flex-col divide-y divide-white/10 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
          {checks.map((c, i) => (
            <div key={i} className="flex gap-3 items-center px-4 py-3.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,69,22,0.15)" }}>
                <Check className="w-3.5 h-3.5" style={{ color: BRAND_ORANGE }} />
              </div>
              <span className="text-white text-sm font-medium">{c}</span>
            </div>
          ))}
        </div>
        <GreenCTA>QUERO ACESSAR O MÉTODO</GreenCTA>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    { label: "Visual", market: "Genérico, igual a todos", method: "Custom com identidade" },
    { label: "Conforto", market: "Alto e barulhento", method: "Rebaixado, silencioso" },
    { label: "Investimento", market: "R$800–R$2.000", method: "Abaixo de R$250" },
    { label: "Identidade", market: "De prateleira", method: "Feito por você" },
    { label: "Processo", market: "Fechado", method: "Claro + suporte" },
    { label: "Renda extra", market: "Impossível", method: "Desde o 1º casco" },
  ];

  return (
    <section className="bg-white py-12 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <SectionTag centered>Comparação</SectionTag>
          <h2 className="text-slate-950 uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(24px, 8vw, 50px)", fontWeight: 900 }}>
            Mercado Atual <span style={{ color: BRAND_ORANGE }}>VS.</span><br />Método LM
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <div className="flex">
            <div className="bg-gray-50 px-2 py-3 flex items-center" style={{ width: "28%" }}>
              <span className="text-xs font-bold uppercase tracking-tighter text-gray-400">Pilar</span>
            </div>
            <div className="bg-gray-50 px-2 py-3 flex items-center justify-center text-center border-l border-gray-200" style={{ width: "32%" }}>
              <span className="text-xs font-bold uppercase tracking-tighter text-gray-400">Mercado Atual</span>
            </div>
            <div className="px-2 py-3 flex items-center justify-center text-center" style={{ width: "40%", backgroundColor: BRAND_ORANGE }}>
              <span className="text-xs font-black uppercase tracking-tighter text-white">Com a CAP SCHOOL</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {rows.map((r, i) => (
              <div key={i} className="flex" style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                <div className="px-2 py-3 flex items-center border-r border-slate-100" style={{ width: "28%" }}>
                  <span className="text-slate-600 text-xs font-bold tracking-tighter">{r.label}</span>
                </div>
                <div className="px-2 py-3 flex items-center justify-center text-center border-r border-slate-100" style={{ width: "32%" }}>
                  <span className="text-gray-400 text-xs tracking-tighter leading-tight">{r.market}</span>
                </div>
                <div className="px-2 py-3 flex items-center justify-center text-center" style={{ width: "40%", backgroundColor: "rgba(255,69,22,0.05)", borderLeft: "3px solid rgba(255,69,22,0.5)" }}>
                  <span className="font-black text-xs text-slate-900 tracking-tighter leading-tight">{r.method}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GreenCTA>QUERO ACESSAR O MÉTODO</GreenCTA>
      </div>
    </section>
  );
}

function InstructorSection() {
  return (
    <section className="bg-black py-12 px-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <SectionTag>O Idealizador</SectionTag>
        <h2 className="text-white uppercase leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(30px, 9vw, 60px)", fontWeight: 900 }}>
          Fundador da <span style={{ color: BRAND_ORANGE }}>LM Helmet</span>
        </h2>
        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-6">Seu Professor</p>

        <div className="grid grid-cols-3 gap-3 mb-7 max-w-sm">
          {[{ v: "15+", l: "Anos de exp." }, { v: "2.000+", l: "Capacetes" }, { v: "100%", l: "Autoral" }].map((s, i) => (
            <div key={i} className="p-3 text-center rounded-xl border border-white/15 bg-white/5">
              <div className="text-white font-black text-xl" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif" }}>{s.v}</div>
              <div className="text-[9px] uppercase tracking-widest font-bold leading-tight mt-0.5" style={{ color: BRAND_ORANGE }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-white text-sm leading-relaxed mb-10 max-w-xl">
          <p>Lucas Marinheiro começou em 2010 a partir de uma insatisfação real: <strong>não encontrar no mercado um capacete custom que realmente atendesse suas expectativas.</strong></p>
          <p>Sem método pronto, sem curso — foi na tentativa, erro e repetição que o processo foi sendo desenvolvido. <strong>Foi algo construído na prática.</strong></p>
          <p>Depois de mais de 2.000 capacetes, nasce o <strong style={{ color: BRAND_ORANGE }}>Método LM</strong> — um processo replicável que não depende de talento prévio.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden" style={{ maxHeight: 480 }}>
          <img src={LUCAS_WORK_IMG} alt="Lucas Marinheiro" className="w-full object-cover object-top" style={{ maxHeight: 480 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const items = [
    ["CAP SCHOOL completo", "Método LM do início ao fim, em 4 módulos estruturados"],
    ["Acesso por 6 meses", "Aulas gravadas, assista quando e quantas vezes quiser"],
    ["Aplicável em qualquer casco", "Não fica restrito a um modelo ou marca"],
    ["Materiais de apoio completos", "Tudo que você precisa para não travar"],
    ["Lista de materiais + links", "Sem ficar perdido procurando fornecedor"],
    ["Comunidade exclusiva", "Suporte direto, troca de experiência"],
    ['Bônus: "Venda seu primeiro capacete"', "Aula exclusiva sobre como transformar em renda"],
  ];

  return (
    <section className="bg-black py-12 px-5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <SectionTag>A Oferta</SectionTag>
            <h2 className="text-white uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(30px, 9vw, 60px)", fontWeight: 900 }}>
              Tudo que você<br /><span style={{ color: BRAND_ORANGE }}>recebe hoje.</span>
            </h2>
            <div className="space-y-3">
              {items.map(([title, desc], i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="mt-1 w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,69,22,0.15)" }}>
                    <Check className="w-3 h-3" style={{ color: BRAND_ORANGE }} />
                  </div>
                  <div>
                    <strong className="block text-white text-sm font-bold mb-0.5">{title}</strong>
                    <span className="text-white/50 text-xs">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white/5 border border-white/15 rounded-2xl overflow-hidden">
              <div className="h-1.5 w-full" style={{ backgroundColor: BRAND_ORANGE }} />
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-center" style={{ color: BRAND_ORANGE }}>Acesso Completo</div>
                <div className="text-white font-black text-2xl uppercase text-center mb-6" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif" }}>Método LM</div>
                <div className="border-y border-white/10 py-6 mb-6 flex flex-col items-center">
                  <div className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">12x de</div>
                  <div className="flex items-start gap-1">
                    <span className="text-2xl font-bold mt-2" style={{ color: BRAND_ORANGE }}>R$</span>
                    <span className="font-black leading-none text-white" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: 68 }}>29</span>
                    <span className="text-2xl font-bold mt-2" style={{ color: BRAND_ORANGE }}>,70</span>
                  </div>
                  <div className="text-white/40 text-xs mt-1">No cartão de crédito</div>
                </div>
                <div className="text-center mb-2">
                  <div className="text-white/40 text-sm">ou R$ 297,00 à vista</div>
                </div>
                <GreenCTA>QUERO ACESSAR AGORA</GreenCTA>
                <div className="flex items-center justify-center gap-2 text-white/40 text-xs mt-4">
                  <Shield className="w-4 h-4" style={{ color: BRAND_ORANGE }} />
                  Garantia incondicional de 7 dias
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black py-12 px-5 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <SectionTag centered>Dúvidas Frequentes</SectionTag>
          <h2 className="text-white uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(26px, 8vw, 50px)", fontWeight: 900 }}>
            Perguntas <span style={{ color: BRAND_ORANGE }}>Respondidas.</span>
          </h2>
        </div>
        <div className="space-y-2">
          {FAQ_ITEMS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border transition-all duration-200"
              style={open === i ? { borderColor: "rgba(255,69,22,0.5)", backgroundColor: "rgba(255,69,22,0.04)" } : { borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 outline-none">
                <span className="font-bold text-sm uppercase tracking-wide" style={{ color: open === i ? BRAND_ORANGE : "white" }}>{faq.q}</span>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={open === i ? { backgroundColor: BRAND_ORANGE, color: "#fff" } : { backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}>
                  {open === i ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </div>
              </button>
              <div className={`px-5 overflow-hidden transition-all duration-200 ${open === i ? "max-h-64 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="bg-black py-12 px-5 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="w-10 h-10 mx-auto mb-5" style={{ color: BRAND_ORANGE }} />
        <h2 className="text-white uppercase leading-none mb-4" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(26px, 8vw, 46px)", fontWeight: 900 }}>
          Ainda tem <span style={{ color: BRAND_ORANGE }}>dúvidas?</span>
        </h2>
        <p className="text-white/60 text-sm mb-8 leading-relaxed">
          Fale com nossa equipe de suporte. Estamos prontos para te ajudar a tomar a melhor decision.
        </p>
        <a href="https://wa.me/5551995813830" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 border border-white/15 hover:border-orange-500/40 text-white px-7 py-4 font-bold text-sm uppercase tracking-widest transition-all rounded-xl">
          <MessageSquare className="w-4 h-4" style={{ color: BRAND_ORANGE }} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-white py-12 px-5 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-slate-950 uppercase leading-none mb-6" style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontSize: "clamp(28px, 9vw, 60px)", fontWeight: 900 }}>
          O capacete que você sempre quis<br /><span style={{ color: BRAND_ORANGE }}>sai da sua mesa.</span>
        </h2>
        <p className="text-slate-700 text-sm mb-2 leading-relaxed max-w-lg mx-auto">
          O mercado não entrega o que você quer. Então faz você mesmo. Do seu jeito. Com o método que já formou mais de 2.000 capacetes.
        </p>
        <GreenCTA>QUERO FAZER MEU CAPACETE</GreenCTA>
        <p className="text-xs font-bold uppercase tracking-widest mt-5 text-slate-400">
          Garantia de 7 dias • Acesso imediato • 100% online
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <TestimonialsSection />
      <ModulesSection />
      <ForWhoSection />
      <ComparisonSection />
      <InstructorSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </div>
  );
}