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

function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "DIAGNOSTIKA & MĚŘENÍ",
      desc: "Digitální laserové měření rovinatosti a kontrola zbytkové vlhkosti podkladu (CM měření) jsou pro nás standardem.",
      img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-01-diagnostika-priprava.png"
    },
    {
      num: "02",
      title: "PŘÍPRAVA PODKLADU",
      desc: "Frézování nerovností, penetrace a aplikace samonivelační stěrky. Podklad musí být jako sklo.",
      img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-02-aklimatizace-vinylu.png"
    },
    {
      num: "03",
      title: "AKLIMATIZACE & ROZVRŽENÍ",
      desc: "Materiál necháváme 48h v interiéru. Plánujeme prořez tak, aby podlaha působila architektonicky vyváženě.",
      img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-03-instalace-podlozky.png"
    },
    {
      num: "04",
      title: "SAMOTNÁ POKLÁDKA",
      desc: "Čistá práce s důrazem na dilatace a napojení na ostatní povrchy bez nevzhledných přechodových lišt.",
      img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-04-plovouci-pokladka.png"
    },
    {
      num: "05",
      title: "LIŠTOVÁNÍ & ÚKLID",
      desc: "Montáž soklových lišt, tmelení rohů a kompletní předání čistého prostoru připraveného k nastěhování.",
      img: "https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/postup/Postup-pokladky-plovoucich-vinylovych-podlah-05-listovani-tmeleni.png"
    }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-4xl font-extrabold font-headline mb-16 uppercase tracking-tight text-on-surface">
              PRECIZNÍ PROCES REALIZACE
            </h2>
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-6 cursor-pointer transition-all duration-300 ${activeStep === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="text-5xl font-headline font-light text-primary-container/40 leading-none">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold font-headline uppercase mb-2 text-on-surface">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant font-body leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="relative lg:sticky lg:top-32 mt-12 lg:mt-0">
            <div className="aspect-square bg-surface-container overflow-hidden shadow-2xl relative">
              {steps.map((step, idx) => (
                <img 
                  key={idx}
                  src={step.img} 
                  alt={step.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`} 
                />
              ))}
            </div>
            {/* Overlay box */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-[#824430] text-white p-8 md:p-10 shadow-xl z-20 max-w-xs">
              <p className="text-5xl font-extrabold font-headline tracking-tighter mb-3">600m²+</p>
              <p className="text-xs font-headline font-bold tracking-widest uppercase leading-relaxed">
                MĚSÍČNĚ POLOŽENÝCH PLOCH V PRAZE A OKOLÍ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <>
      <section className="relative min-h-[921px] flex items-center pt-20 pb-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-5" alt="Profesionální pokládka vinylové podlahy Praha" src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/pokladka-podlah/vinyl/hero-vinyl-spc.jpg"/>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-primary-container">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <span className="text-on-surface-variant font-headline font-medium tracking-wide uppercase text-xs">4.8 • 320+ recenzí</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface mb-8 uppercase">
              Pokládka <span className="text-primary-container block mt-2">vinylových podlah</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-12 font-body max-w-xl leading-relaxed">
              Profesionální montáž LVT, SPC a Rigid vinylových podlah v Praze. Click (plovoucí) i celoplošné lepení. Příprava podkladu v ceně — zaměření technikem zdarma, ozveme se vám max do 3 prac dnů v závislosti na složitosti vašeho projektu na základě vašeho popisu problému a našich zkušeností.
            </p>
            <div className="flex flex-wrap gap-6 mb-16">
              <button className="bg-primary text-white px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Nezávazná poptávka
              </button>
              <button className="bg-transparent border border-on-surface/20 text-on-surface px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-on-surface/5 transition-colors">
                Zaměření zdarma
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-surface-container/50 pt-12">
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">straighten</span>
                <span className="text-sm font-headline font-bold tracking-wide uppercase text-on-surface">Click i lepení</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">verified</span>
                <span className="text-sm font-headline font-bold tracking-wide uppercase text-on-surface">Garance na materiál</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">local_shipping</span>
                <span className="text-sm font-headline font-bold tracking-wide uppercase text-on-surface">LVT, SPC, Rigid</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">receipt_long</span>
                <span className="text-sm font-headline font-bold tracking-wide uppercase text-on-surface">DPH 12 %</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent z-10"></div>
              <img className="w-full h-full object-cover relative z-0 scale-105 hover:scale-100 transition-transform duration-1000" alt="Pokládka vinylu" src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/pokladka-podlah/vinyl/hero-vinyl-spc.jpg"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-8 shadow-xl border border-surface-container/50 z-20">
              <p className="text-xs text-on-surface-variant font-headline font-bold tracking-widest uppercase mb-2">Click systém</p>
              <p className="text-4xl font-extrabold font-headline text-on-surface tracking-tighter">od 308 Kč/m²</p>
              <p className="text-xs text-on-surface-variant font-headline font-bold tracking-widest uppercase mt-4 mb-2">Lepení</p>
              <p className="text-4xl font-extrabold font-headline text-on-surface tracking-tighter">od 319 Kč/m²</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Dvě technologie</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Click nebo lepení?</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Každá metoda má své přednosti. Click je rychlejší a vhodná pro renovace — lepení nabízí maximální stabilitu a ticho. Na místě technik doporučí tu správnou.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50 group">
              <div className="aspect-video mb-8 overflow-hidden bg-surface-container">
                <img src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/pokladka-plovouci-vinyl-800.jpg" alt="Click systém" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-3xl font-extrabold font-headline mb-2 uppercase">Click systém · Plovoucí</h3>
              <p className="text-primary-container font-headline font-bold text-xl mb-6">od 308 Kč/m²</p>
              <p className="text-on-surface-variant font-body mb-8">Lamelky se zamykají zámkovým spojem bez lepidla. Ideální pro renovace bez bourání — podlaha leží na stávajícím podkladu. Při poškození lamely ji lze lokálně vyměnit.</p>
              <ul className="space-y-4 font-body text-on-surface">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Rychlejší montáž — méně rušení v bytě</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Lokální oprava při poškození jedné lamely</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Vhodné na podlahové topení (SPC, Rigid)</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Podložka v ceně pokládky</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-on-surface-variant mt-0.5">info</span> Dilatační mezery u stěn (zakryty lištami)</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-on-surface-variant mt-0.5">info</span> Méně stabilní než lepení při extrémní zátěži</li>
              </ul>
            </div>
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50 group">
              <div className="aspect-video mb-8 overflow-hidden bg-surface-container">
                <img src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/image/podkladka-vinylu/pokladka-lepeny-vinyl-800.jpg" alt="Celoplošné lepení" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-3xl font-extrabold font-headline mb-2 uppercase">Celoplošné lepení · LVT</h3>
              <p className="text-primary-container font-headline font-bold text-xl mb-6">od 319 Kč/m²</p>
              <p className="text-on-surface-variant font-body mb-8">Disperzní lepidlo bez rozpouštědel fixuje každou lamelu k podkladu. Žádný dutý zvuk, nulová deformace pod těžkým nábytkem, ideální do kanceláří a komerčních prostor.</p>
              <ul className="space-y-4 font-body text-on-surface">
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Maximální stabilita — žádné pohyby ani dutý zvuk</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Vhodné pro kolečkové židle a těžký nábytek</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Žádné dilatační mezery — čistý výsledek</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Ideální pro tenké LVT 2–3 mm</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-on-surface-variant mt-0.5">info</span> Přísné nároky na rovinnost podkladu (±2 mm/2 m)</li>
                <li className="flex items-start gap-3"><span className="material-symbols-outlined text-on-surface-variant mt-0.5">info</span> Složitější lokální oprava</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-on-surface-variant font-body mb-8 max-w-2xl mx-auto">Nevíte, která metoda je pro vás? Technik při bezplatném zaměření posoudí stav podkladu, typ provozu a doporučí optimální řešení. Zaměření zdarma, bez závazků.</p>
            <button className="bg-primary text-white px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Zaměření zdarma
            </button>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-32 bg-surface-container-highest">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Orientační kalkulátor</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Kolik stojí pokládka vinylu?</h2>
            <p className="text-on-surface-variant font-body text-lg">Cena zahrnuje práci (montáž, podložka, lišty). Materiál, nivelace a doprava jsou kalkulovány zvlášť.</p>
          </div>
          <div className="bg-surface p-12 shadow-2xl border border-surface-container/50">
            <div className="mb-12">
              <label className="text-xl font-headline font-bold block mb-6 text-center uppercase">Plocha k pokládce v m²</label>
              <div className="relative max-w-xs mx-auto">
                <input className="w-full bg-transparent border-b-2 border-outline-variant/30 focus:border-primary-container text-4xl font-extrabold font-headline py-4 outline-none text-center transition-colors" defaultValue="40" type="number"/>
                <span className="absolute right-4 bottom-4 text-2xl font-bold font-headline text-outline-variant">m²</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border border-primary-container p-6 bg-primary-container/5 cursor-pointer">
                <h4 className="font-headline font-bold uppercase mb-2">Click (plovoucí)</h4>
                <p className="text-2xl font-extrabold font-headline text-primary-container">308 Kč/m²</p>
              </div>
              <div className="border border-outline-variant/30 p-6 hover:border-primary-container/50 cursor-pointer transition-colors">
                <h4 className="font-headline font-bold uppercase mb-2">Lepení (LVT)</h4>
                <p className="text-2xl font-extrabold font-headline">319 Kč/m²</p>
              </div>
            </div>

            <div className="space-y-4 font-body text-on-surface-variant mb-12">
              <p>+ Nivelace podkladu ~90 Kč/m²</p>
              <p>+ Soklové lišty ~80 Kč/bm</p>
            </div>

            <div className="border-t border-outline-variant/30 pt-8 mb-12">
              <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-2">Odhadovaná cena práce</p>
              <p className="text-5xl font-extrabold font-headline text-on-surface mb-2">12 320 Kč</p>
              <p className="text-sm font-body text-on-surface-variant">bez DPH · práce bez materiálu</p>
            </div>

            <div className="bg-surface-container-low p-6 mb-12">
              <p className="font-body text-on-surface">Při montáži naší firmou v bytových prostorách platíte jen <strong className="text-primary-container">12 % DPH</strong> místo 21 %.</p>
            </div>

            <button className="w-full bg-primary text-white py-5 rounded-none font-headline font-bold tracking-wide uppercase text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Nezávazná poptávka
            </button>
            <p className="text-center mt-6 font-headline font-bold text-xl">
              <a href="tel:+420702013119" className="hover:text-primary-container transition-colors">702 013 119</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Proč my</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Proč pokládku svěřit nám</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Dvacet let na pražském trhu, vlastní tým montérů bez subdodavatelů a zaměření zdarma. Žádné překvapení v průběhu zakázky.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">straighten</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Zaměření zdarma</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Technik přijede, změří, posoudí podklad a připraví přesnou kalkulaci. Ozveme se vám max do 3 prac dnů v závislosti na složitosti vašeho projektu na základě vašeho popisu problému a našich zkušeností.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">engineering</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Vlastní tým montérů</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Žádní subdodavatelé. Vlastní tým profesionálů, kteří odpovídají za každou lamelu. Plná zodpovědnost za provedení.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">receipt_long</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">DPH 12 % pro byty</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Při montáži naší firmou v bytových prostorách uplatňujeme sníženou DPH 12 % na práci i materiál. Ušetříte tisíce korun.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">verified</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Garance na materiál</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Výrobce poskytuje garanci na materiál při dodržení technologického postupu. Případné dotazy řešíme okamžitě a bez průtahů.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-8">
          <div className="mb-16 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Před objednávkou</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Časté dotazy k pokládce vinylu</h2>
          </div>
          <div className="space-y-2">
            <FaqItem 
              question="Jak dlouho trvá pokládka bytu?" 
              answer="Standardní byt o ploše 60 m² realizujeme včetně přípravy podkladu obvykle během 3–4 pracovních dnů. První den probíhá diagnostika a nivelace, další dny samotná pokládka a lištování."
            />
            <FaqItem 
              question="Je vinyl vhodný pro podlahové topení?" 
              answer="Ano, vinyl má vynikající tepelnou vodivost. Zejména lepený vinyl nabízí nejnižší tepelný odpor na trhu a je pro podlahové vytápění naprosto ideální."
            />
            <FaqItem 
              question="Musím vystěhovat veškerý nábytek?" 
              answer="Pro kvalitní pokládku a zejména pro nivelaci podkladu je nutné mít místnosti zcela vyklizené. Pokud to není možné, řešíme situaci individuálně s přesunem nábytku v rámci bytu."
            />
            <FaqItem 
              question="Jak je to s garancí?" 
              answer="Výrobce poskytuje garanci na materiál. Podmínkou je dodržení námi navrženého technologického postupu, včetně přípravy podkladu."
            />
          </div>
        </div>
      </section>
    </>
  );
}
