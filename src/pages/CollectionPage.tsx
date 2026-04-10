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

export default function CollectionPage() {
  const decors = [
    { name: "Dub cortado", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14166-1.jpg", code: "14166-1" },
    { name: "Topol kávový", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14145-1.jpg", code: "14145-1" },
    { name: "Habr bílý", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14111-2.jpg", code: "14111-2" },
    { name: "Dub popelavý", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14146-1.jpg", code: "14146-1" },
    { name: "Habr masiv", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14113-2.jpg", code: "14113-2" },
    { name: "Dub bodamský", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14181-1.jpg", code: "14181-1" },
    { name: "Buk rustikal", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14169-1.jpg", code: "14169-1" },
    { name: "Dub valencia", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14179-1.jpg", code: "14179-1" },
    { name: "Dub bělený", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14123-2.jpg", code: "14123-2" },
    { name: "Dub luční", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14161-1.jpg", code: "14161-1" },
    { name: "Borovice sibiřská", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14128-1.jpg", code: "14128-1" },
    { name: "Dub caramel", img: "https://www.fatrafloor.cz/wp-content/uploads/2016/02/THX-PRO-WOOD-14137-1.jpg", code: "14137-1" }
  ];

  const [width, setWidth] = useState<number>(4.0);
  const [length, setLength] = useState<number>(5.0);
  const [selectedDecor, setSelectedDecor] = useState(decors[0]);

  const area = width * length;
  const areaWithWaste = area * 1.1;
  const packSize = 4.32;
  const packs = Math.ceil(areaWithWaste / packSize);
  const pricePerPack = 2875; // Odvozeno z 17250 / 6
  const totalPrice = packs * pricePerPack;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 pb-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-10" alt="Fatra Thermofix PRO Wood" src={decors[0].img}/>
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <Link to="/produkt" className="text-primary-container hover:text-primary transition-colors font-headline font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Vinylové podlahy
              </Link>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface mb-8 uppercase">
              Fatra Thermofix <span className="text-primary-container block mt-2">PRO Wood</span>
            </h1>
            <p className="text-xl text-on-surface-variant mb-8 font-body max-w-2xl leading-relaxed">
              Největší výhodou podlahy Thermofix PRO Wood je krásný vzhled dřeva a obrovská odolnost (horní vrstva 0,8 mm). Vinylová podlaha ve tvaru prken se pevně lepí k zemi a vůbec jí nevadí voda. Vydrží i velmi těžký provoz, proto se skvěle hodí domů, do kanceláří i do obchodů.
            </p>
            
            <ul className="space-y-4 font-body text-on-surface mb-12 max-w-2xl">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Vzhled dřeva s matným povrchem, který nestudí do nohou</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Silná horní vrstva (0,8 mm) snese těžký provoz i drápky zvířat</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary-container mt-0.5">check</span> Podlaha je 100% odolná proti vodě a vlhku</li>
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#decors" className="bg-primary text-white px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Prohlédnout barvy
              </a>
              <a href="#kalkulator" className="bg-transparent border border-on-surface/20 text-on-surface px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-on-surface/5 transition-colors">
                Kalkulátor ceny
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Bar */}
      <section className="bg-surface-container-highest border-y border-outline-variant/20 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant/20">
          <div className="flex flex-col px-4">
            <span className="text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">Tvar prken</span>
            <span className="text-lg font-extrabold font-headline text-on-surface">1200 × 180 mm</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">Horní vrstva</span>
            <span className="text-lg font-extrabold font-headline text-on-surface">0,8 mm PUR</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">Odolnost</span>
            <span className="text-lg font-extrabold font-headline text-on-surface">100% Voděodolná</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1">Pokládka</span>
            <span className="text-lg font-extrabold font-headline text-on-surface">Celoplošné lepení</span>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Klíčové vlastnosti</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Proč zvolit Thermofix PRO Wood</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6">forest</span>
              <h3 className="text-2xl font-extrabold font-headline uppercase mb-4">Krásný vzhled dřeva</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Prkna vypadají jako skutečné dřevo. Mají matný povrch bez odlesků a zkosené hrany, které vzhled dřeva ještě více podtrhnou.</p>
            </div>
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6">water_drop</span>
              <h3 className="text-2xl font-extrabold font-headline uppercase mb-4">Nevadí jí voda</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Vinyl nevsakuje vodu. Můžete ho bez obav položit do koupelny, do kuchyně nebo na chodbu, kam se v zimě nosí mokrý sníh.</p>
            </div>
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-5xl mb-6">cleaning_services</span>
              <h3 className="text-2xl font-extrabold font-headline uppercase mb-4">Snadný úklid</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Díky speciálnímu laku se špína nedostane do podlahy. K běžnému úklidu vám tak stačí jen mop, voda a obyčejný čistič.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Decors Gallery */}
      <section id="decors" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Katalog barev</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">12 oblíbených dekorů dřeva</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Kliknutím na barvu si ji zvolíte pro výpočet v kalkulátoru níže.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {decors.map((decor, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  setSelectedDecor(decor);
                  document.getElementById('kalkulator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-surface-container-low border border-outline-variant/30 hover:border-primary-container transition-colors shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={decor.img} alt={decor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-surface text-on-surface font-headline font-bold uppercase tracking-widest text-xs px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">Vybrat dekor</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-extrabold font-headline uppercase text-on-surface group-hover:text-primary-container transition-colors">{decor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-32 bg-surface-container-highest">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Specifikace</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Technické parametry</h2>
          </div>
          <div className="bg-surface shadow-xl border border-surface-container/50 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody className="font-body text-on-surface-variant">
                {[
                  ["Typ materiálu", "LVT (Vinylové dílce)"],
                  ["Formát a rozměry", "Prkna (1200 × 180 mm)"],
                  ["Třída zátěže", "23, 34, 43 (Nejvyšší zátěž)"],
                  ["Nášlapná vrstva", "0,8 mm"],
                  ["Celková tloušťka", "2,0 mm"],
                  ["Povrchová úprava", "PUR lak (matný vzhled)"],
                  ["Voděodolnost", "✓ Ano (100%)"],
                  ["Vhodnost pro podlahové topení", "✓ Ano"],
                  ["Odolnost vůči kolečkovým židlím", "✓ Ano"],
                  ["Hrany", "4V zkosené hrany"],
                  ["Způsob pokládky", "Celoplošné lepení"]
                ].map(([param, value], idx) => (
                  <tr key={idx} className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-on-surface w-1/2">{param}</td>
                    <td className="py-4 px-6 font-bold text-on-surface w-1/2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="kalkulator" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Kalkulátor spotřeby</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Spočítejte si materiál</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Zadejte rozměry místnosti. U lepeného vinylu je potřeba počítat s prořezem. Pro představu zde počítáme s rezervou 10 % a celými baleními (jedno balení má 4,32 m²).</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-surface-container-low p-8 border border-outline-variant/30 flex gap-6 items-center">
                <div className="w-24 h-24 shrink-0 overflow-hidden rounded-full border-4 border-surface shadow-md">
                  <img src={selectedDecor.img} alt={selectedDecor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-1 block">Zvolená barva</span>
                  <h3 className="text-2xl font-extrabold font-headline uppercase text-on-surface">{selectedDecor.name}</h3>
                  <p className="text-sm font-body text-on-surface-variant">Kód: {selectedDecor.code}</p>
                </div>
              </div>

              <div className="bg-surface-container-highest p-8 border border-outline-variant/20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-extrabold font-headline text-primary-container">12%</span>
                  <h4 className="font-headline font-bold uppercase text-on-surface">Snížená sazba DPH</h4>
                </div>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  Při instalaci naší firmou v bytech a domech ušetříte na dani (DPH 12 % místo 21 %).
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface p-10 shadow-2xl border border-surface-container/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant block mb-4">Šířka místnosti (m)</label>
                  <input 
                    type="number" 
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value) || 0)}
                    className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary-container text-3xl font-extrabold font-headline py-4 px-4 outline-none transition-colors"
                    step="0.1"
                    min="0"
                  />
                </div>
                <div>
                  <label className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant block mb-4">Délka místnosti (m)</label>
                  <input 
                    type="number" 
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value) || 0)}
                    className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary-container text-3xl font-extrabold font-headline py-4 px-4 outline-none transition-colors"
                    step="0.1"
                    min="0"
                  />
                </div>
              </div>

              <div className="space-y-4 font-body text-on-surface-variant mb-12">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                  <span>Čistá plocha</span>
                  <span className="font-bold text-on-surface">{area.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                  <span>+ orientační prořez (10 %)</span>
                  <span className="font-bold text-on-surface">{areaWithWaste.toFixed(2)} m²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                  <span>Množství balení (à 4,32 m²)</span>
                  <span className="font-bold text-on-surface">{packs} ks</span>
                </div>
              </div>

              <div className="border-t-4 border-surface-container pt-8 mb-10">
                <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-2">Orientační cena (s 21% DPH)</p>
                <p className="text-5xl font-extrabold font-headline text-on-surface">{totalPrice.toLocaleString('cs-CZ')} Kč</p>
              </div>

              <Link to="/kontakt" className="block w-full text-center bg-primary text-white py-5 rounded-none font-headline font-bold tracking-wide uppercase text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Poptat přesný výpočet a pokládku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Časté dotazy</span>
              <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Základní otázky k podlaze Wood</h2>
              <p className="text-on-surface-variant font-body text-lg">Chcete se na něco zeptat? Zavolejte nám, rádi vám se vším poradíme.</p>
            </div>
            <div className="space-y-2 mb-12">
              <FaqItem 
                question="Můžu dát podlahu Thermofix PRO Wood do koupelny?" 
                answer="Ano, bez problému. Tato podlaha je 100% voděodolná. Vůbec jí nevadí voda ani vlhko. Kolem vany a sprchy jen doporučujeme dát na okraje silikon, aby voda nezatekla pod podlahu."
              />
              <FaqItem 
                question="Můžu dát podlahu na podlahové topení?" 
                answer="Ano, je to ideální volba. Podlaha je tenká (2 mm), takže teplo z topení projde do místnosti velmi rychle a s minimálními ztrátami."
              />
              <FaqItem 
                question="Jak se podlaha lepí k zemi?" 
                answer="Podlaha se lepí celou svou plochou. Dílce se pevně přilepí na hladký a čistý podklad. Díky tomu je podlaha velmi tichá při chůzi a nijak se neposouvá."
              />
              <FaqItem 
                question="Vydrží podlaha velkou zátěž?" 
                answer="Ano, snese i velkou zátěž. Podlaha má velmi silnou horní vrstvu (0,8 mm). Je to vrstva, jaká se běžně používá v obchodech nebo firmách. Drápky domácích zvířat nebo kolečkové židle ji nezničí."
              />
            </div>
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase tracking-widest hover:text-primary transition-colors">
              <span className="material-symbols-outlined">call</span> Zavolat technikovi
            </Link>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-surface p-10 shadow-xl border border-surface-container/50 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold font-headline uppercase mb-6">Zvažujete novou podlahu?</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                Máme dlouholeté zkušenosti s instalací podlah doma i v kancelářích. Rádi vše přesně zaměříme a postaráme se o dokonalý výsledek.
              </p>
              <ul className="space-y-4 font-body text-on-surface mb-10">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary-container text-2xl">verified</span> Dlouholetá praxe</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary-container text-2xl">support_agent</span> Konzultace zdarma</li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary-container text-2xl">local_parking</span> Vlastní parkování v Praze</li>
              </ul>
              <Link to="/kontakt" className="w-full text-center bg-transparent border-2 border-primary text-primary py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary hover:text-white transition-colors">
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
