import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border-b border-outline-variant/30 pb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-headline font-bold text-xl group-hover:text-primary-container transition-colors"
      >
        {question}
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      <div 
        className={`mt-4 text-on-surface-variant font-body leading-relaxed overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
}

export default function ShowroomPage() {
  const decors = [
    { name: "Dub Selský", type: "SPC Rigid", img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/pokladka-plovouci-vinyl-800.jpg" },
    { name: "Ořech Tmavý", type: "LVT Lepený", img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/pokladka-lepeny-vinyl-800.jpg" },
    { name: "Beton Světlý", type: "SPC Rigid", img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/pokladka-podlah/vinyl/hero-vinyl-spc.jpg" },
    { name: "Dub Přírodní", type: "Laminát", img: "https://www.podlahy-praha.cz/sites/default/files/prodejna_3.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-20 pb-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-5" alt="Showroom podlah Praha" src="https://www.podlahy-praha.cz/sites/default/files/prodejna-1.jpg"/>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface mb-8 uppercase">
              Showroom <span className="text-primary-container block mt-2">podlah</span> v Praze
            </h1>
            <p className="text-xl text-on-surface-variant mb-12 font-body max-w-xl leading-relaxed">
              Komunardů 38, Praha 7. Porovnejte vinyl, SPC, laminát, dřevo i Marmoleum naživo — v denním světle, v reálné velikosti. Získejte všechny informace pohodlně online nebo se zastavte osobně.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#vzornik" className="bg-primary text-white px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Virtuální vzorník
              </a>
              <a href="#konzultace" className="bg-transparent border border-on-surface/20 text-on-surface px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-on-surface/5 transition-colors">
                Napsat dotaz
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden shadow-2xl relative border border-surface-container/50">
              <img className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" alt="Detail vzorků podlah" src="https://www.podlahy-praha.cz/sites/default/files/prodejna_3.jpg"/>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-surface-container-highest border-y border-outline-variant/20 py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-headline font-bold tracking-widest uppercase text-on-surface">
          
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Otevřeno dnes do 17:00</span>
          </div>

          <div className="flex items-center gap-3 text-primary-container">
            <span className="material-symbols-outlined">layers</span>
            <span>50+ kolekcí a 500+ vzorků naživo</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">location_on</span> Komunardů 38, Praha 7
            </span>
            <a href="https://maps.google.com/?q=Komunardů+38,+Praha+7" target="_blank" rel="noreferrer" className="text-primary-container hover:text-primary transition-colors underline decoration-primary-container/30 underline-offset-4">
              Ukázat trasu
            </a>
          </div>

        </div>
      </section>

      {/* Virtual Gallery / Vzorník */}
      <section id="vzornik" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Virtuální vzorník</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Prohlédněte si dekory online</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Vybrali jsme pro vás nejoblíbenější dekory z našich kolekcí. Všechny tyto a stovky dalších si můžete prohlédnout naživo v našem showroomu v reálné velikosti lamel.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decors.map((decor, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-surface-container aspect-video shadow-xl border border-surface-container/50">
                <img src={decor.img} alt={decor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-xs mb-2 block">{decor.type}</span>
                  <h3 className="text-3xl font-extrabold font-headline text-on-surface uppercase">{decor.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/produkt" className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase tracking-widest hover:text-primary transition-colors">
              Zobrazit kompletní nabídku materiálů <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Care Products Mini-section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-square bg-surface-container overflow-hidden shadow-lg border border-outline-variant/30 relative">
              <div className="absolute inset-0 bg-primary-container/10 z-10 mix-blend-multiply"></div>
              <img src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-05-listovani-tmeleni.png" alt="Péče o podlahy" className="w-full h-full object-cover grayscale opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="material-symbols-outlined text-7xl text-primary-container drop-shadow-lg">cleaning_services</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Exkluzivně na prodejně</span>
            <h2 className="text-4xl font-extrabold font-headline mb-6 uppercase">Profesionální péče o podlahy</h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
              Správná údržba prodlužuje životnost vaší podlahy o desítky let. Přímo v našem showroomu zakoupíte specializované čisticí prostředky, ochranné emulze a profesionální mopy, které v běžných hobby marketech nenajdete.
            </p>
            <ul className="space-y-4 font-body text-on-surface mb-8">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Čističe pro LVT a SPC vinyl</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Mýdla a oleje na dřevěné podlahy</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Odstraňovače odolných skvrn</li>
            </ul>
            <Link to="/produkt" className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface hover:text-primary-container transition-colors underline decoration-outline-variant underline-offset-4">
              Více o údržbě podlah
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation & Mini-form */}
      <section id="konzultace" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Konzultace</span>
            <h2 className="text-4xl font-extrabold font-headline mb-6 uppercase">Zeptejte se nás online</h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-12">
              Máte dotaz k materiálu, potřebujete poradit s výběrem nebo si chcete domluvit přesný čas konzultace v showroomu? Napište nám. Odpovíme vám co nejdříve, abychom vám ušetřili čas.
            </p>
            
            <div className="bg-surface-container-highest p-8 border border-outline-variant/20 mb-8">
              <h3 className="text-xl font-extrabold font-headline mb-6 uppercase">Kde nás najdete</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-4">
                <strong className="text-on-surface">Podlahy Praha s.r.o.</strong><br/>
                Komunardů 1154/38<br/>
                170 00 Praha 7 - Holešovice
              </p>
              <a href="https://maps.google.com/?q=Komunardů+38,+Praha+7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">map</span> Otevřít v mapách
              </a>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-10 shadow-xl border border-surface-container/50">
            <h3 className="text-2xl font-extrabold font-headline mb-8 uppercase">Rychlý dotaz</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-2">Váš e-mail</label>
                <input 
                  type="email" 
                  placeholder="email@priklad.cz" 
                  className="w-full bg-surface border-b-2 border-outline-variant/30 focus:border-primary-container py-4 px-4 outline-none font-body text-on-surface transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-2">Váš dotaz nebo požadavek</label>
                <textarea 
                  rows={4}
                  placeholder="Zajímá mě dostupnost dekoru Dub Selský..." 
                  className="w-full bg-surface border-b-2 border-outline-variant/30 focus:border-primary-container py-4 px-4 outline-none font-body text-on-surface transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white px-8 py-5 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Odeslat dotaz
              </button>
              <p className="text-xs text-on-surface-variant font-body text-center mt-4">
                Odesláním souhlasíte se zpracováním osobních údajů pro účely vyřízení dotazu.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-surface-container-highest">
        <div className="max-w-3xl mx-auto px-8">
          <div className="mb-16 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">FAQ</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Časté dotazy k showroomu</h2>
          </div>
          <div className="space-y-2">
            <FaqItem 
              question="Musím se do showroomu objednat předem?" 
              answer="Není to nutné, můžete přijít kdykoliv během otevírací doby (Po-Pá 9:00 - 17:00, v pátek do 15:00). Pokud ale chcete mít jistotu, že se vám náš specialista bude moci věnovat bez čekání, doporučujeme využít náš kontaktní formulář výše."
            />
            <FaqItem 
              question="Půjčujete vzorky podlah domů?" 
              answer="Ano, chápeme, že barva podlahy vypadá v každém interiéru jinak. Vybrané vzorky vám rádi zapůjčíme domů, abyste si je mohli porovnat s vaším nábytkem a osvětlením."
            />
            <FaqItem 
              question="Kde mohu zaparkovat?" 
              answer="Parkování je možné přímo v ulici Komunardů na placených zónách, nebo v přilehlých ulicích. Pro naložení zakoupených čisticích prostředků nebo vrácení vzorků lze na chvíli zastavit přímo před prodejnou."
            />
            <FaqItem 
              question="Prodáváte podlahy i bez pokládky?" 
              answer="Ano, veškerý materiál z našeho showroomu si můžete zakoupit i samostatně bez naší montáže. Rádi vám poradíme se správným výběrem podložky a lišt."
            />
          </div>
        </div>
      </section>
    </>
  );
}

