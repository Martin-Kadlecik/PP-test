import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductPage() {
  return (
    <>
      <section className="relative min-h-[600px] flex items-center pt-20 pb-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-5" alt="Vinylové podlahy" src="https://copy-c1dpodlahy-praha.instawp.site/wp-content/uploads/pokladka-podlah/vinyl/hero-vinyl-spc.jpg"/>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 text-center">
          <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-6 block">Produkt</span>
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface mb-8 uppercase">
            Vinylové <span className="text-primary-container">podlahy</span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-12 font-body max-w-2xl mx-auto leading-relaxed">
            LVT, SPC a Rigid. Nejoblíbenější podlahová krytina současnosti. 100% voděodolná, extrémně odolná a ideální pro podlahové topení.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-primary text-white px-10 py-4 rounded-none font-headline font-bold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Prohlédnout sortiment
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Proč vinyl?</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">6 důvodů pro vinylovou podlahu</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Vinyl je dnes nejoblíbenější podlahová krytina v českých domácnostech — a to z dobrých důvodů.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">water_drop</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">100% voděodolný</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">SPC a Rigid jádro nepropustí vodu ani při stálé zátěži. Vhodné do koupelny, kuchyně, suterénu. Bez bobtnání a deformace při vlhkosti.</p>
            </div>
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">thermostat</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Podlahové topení</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Nízký tepelný odpor — vinyl propouští teplo lépe než dřevo nebo laminát. Kompatibilní s vodním i elektrickým systémem, max. 27 °C.</p>
            </div>
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">pets</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Odolnost AC4/AC5</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Nášlapná vrstva 0,3–0,8 mm odolá škrábancům od domácích mazlíčků, kolečkovým kancelářským židlím i intenzivnímu dennímu provozu.</p>
            </div>
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">cleaning_services</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Snadná údržba</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Stačí vlhký mop. Vinyl nevyžaduje olejování, voskování ani speciální přípravky. Uzavřený povrch zabraňuje pronikání nečistot do materiálu.</p>
            </div>
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">layers</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Tloušťka 2–8 mm</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Tenký LVT (2 mm) ideální pro renovace bez úpravy dveří. Silný SPC Rigid (6–8 mm) zakryje drobné nerovnosti podkladu bez nivelace.</p>
            </div>
            <div className="bg-surface p-8 shadow-xl border border-surface-container/50">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">health_and_safety</span>
              <h3 className="text-xl font-extrabold font-headline uppercase mb-4">Zdravotně nezávadný</h3>
              <p className="text-on-surface-variant font-body leading-relaxed">Moderní vinyl je bez ftalátů a těžkých kovů. Certifikace Greenguard Gold, FloorScore a Eurofins Indoor Air Comfort — bezpečný pro dětské pokoje i nemocnice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Terminologie</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">LVT, SPC, Rigid — co pokládáme</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Přehled čtyř typů vinylových krytin, které pokládáme — jejich složení, vlastnosti a typické použití.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <span className="font-headline font-extrabold text-xl text-primary-container">LVT</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-headline uppercase mb-2">Luxury Vinyl Tile</h3>
                <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-4">Lepení · 2–3,5 mm · Komerce</p>
                <p className="text-on-surface-variant font-body leading-relaxed">Tenká flexibilní vrstva 2–3,5 mm. Celoplošné lepení — maximální stabilita, žádný dutý zvuk. 4V fazeta pro realistický vzhled dřeva nebo kamene.</p>
                <Link to="/produkt/thermofix-pro-wood" className="inline-block mt-4 text-primary-container font-headline font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors underline decoration-outline-variant underline-offset-4">Ukázka kolekce: Thermofix PRO Wood</Link>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <span className="font-headline font-extrabold text-xl text-primary-container">SPC</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-headline uppercase mb-2">Stone Plastic Composite</h3>
                <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-4">Click · 4–8 mm · Koupelna</p>
                <p className="text-on-surface-variant font-body leading-relaxed">Tuhé jádro z kamenné pryskyřice. 100% voděodolné, vynikající stabilita při teplotních změnách. Click systém. Vhodné do koupelny, kuchyně i suterénu.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <span className="font-headline font-extrabold text-xl text-primary-container">RIG</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-headline uppercase mb-2">Rigid Core Vinyl</h3>
                <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-4">Click · 6–8 mm · Nerovný podklad</p>
                <p className="text-on-surface-variant font-body leading-relaxed">Zesílené tuhé jádro zakryje nerovnosti podkladu až ±3 mm. Click systém s integrovanou podložkou. Nejméně náročný na přípravu podkladu ze všech variant.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-16 h-16 shrink-0 bg-surface-container-low flex items-center justify-center border border-outline-variant/30">
                <span className="font-headline font-extrabold text-xl text-primary-container">PVC</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold font-headline uppercase mb-2">PVC role</h3>
                <p className="text-sm font-headline font-bold tracking-widest uppercase text-on-surface-variant mb-4">Lepení · Role · Hygiena</p>
                <p className="text-on-surface-variant font-body leading-relaxed">Vinylová krytina v rolích — minimum spár, nejvyšší hygieničnost. Bytové s filcovou podložkou nebo komerční zátěžové 0,55–0,70 mm nášlap.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 bg-surface-container-low p-8 border-l-4 border-primary-container">
            <h4 className="font-headline font-bold uppercase mb-2">Jaký typ je pro vás správný?</h4>
            <p className="font-body text-on-surface-variant">Závisí na stavu podkladu, intenzitě provozu a místnosti. LVT do komerce, SPC do vlhkých prostor, Rigid tam, kde nechcete nivelaci. Technik při zaměření posoudí všechny faktory a doporučí konkrétní řešení — zaměření zdarma.</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Přehledné srovnání</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Vinyl vs. ostatní podlahové krytiny</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Jak se vinyl (Click, LVT) porovnává s konkurencí v klíčových vlastnostech?</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-outline-variant/50">
                  <th className="py-6 px-4 font-headline font-bold uppercase text-on-surface">Vlastnost</th>
                  <th className="py-6 px-4 font-headline font-bold uppercase text-primary-container bg-surface-container-low">Vinyl (LVT/SPC)</th>
                  <th className="py-6 px-4 font-headline font-bold uppercase text-on-surface">Laminát</th>
                  <th className="py-6 px-4 font-headline font-bold uppercase text-on-surface">Dřevo masiv</th>
                  <th className="py-6 px-4 font-headline font-bold uppercase text-on-surface">PVC role</th>
                </tr>
              </thead>
              <tbody className="font-body text-on-surface-variant">
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Voděodolnost</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-green-600 mr-2">✓</span>100 %</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Citlivý</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Bobtnání</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>100 %</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Do koupelny</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-green-600 mr-2">✓</span>Ano</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Ne</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Ne</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Ano</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Podlahové topení</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-green-600 mr-2">✓</span>Ideální</td>
                  <td className="py-4 px-4">Dobrý</td>
                  <td className="py-4 px-4">Omezené</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Ideální</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Oprava lamely</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-green-600 mr-2">✓</span>Click: snadná</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Snadná</td>
                  <td className="py-4 px-4">Broušení</td>
                  <td className="py-4 px-4">Obtížná</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Nároky na podklad</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface">Střední (Rigid mírnější)</td>
                  <td className="py-4 px-4">Střední</td>
                  <td className="py-4 px-4">Přísné</td>
                  <td className="py-4 px-4">Přísné</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Renovace povrchu</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-red-500 mr-2">✗</span>Ne</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Ne</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Broušení</td>
                  <td className="py-4 px-4"><span className="text-red-500 mr-2">✗</span>Ne</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Cena pokládky</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface">od 308 Kč/m²</td>
                  <td className="py-4 px-4">od 308 Kč/m²</td>
                  <td className="py-4 px-4">od 353 Kč/m²</td>
                  <td className="py-4 px-4">od 213 Kč/m²</td>
                </tr>
                <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Životnost</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface">15–25 let</td>
                  <td className="py-4 px-4">10–15 let</td>
                  <td className="py-4 px-4">50+ let</td>
                  <td className="py-4 px-4">10–15 let</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-on-surface">Bez ftalátů / zdravé</td>
                  <td className="py-4 px-4 bg-surface-container-low font-bold text-on-surface"><span className="text-green-600 mr-2">✓</span>Greenguard</td>
                  <td className="py-4 px-4">E1 standard</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Přírodní</td>
                  <td className="py-4 px-4"><span className="text-green-600 mr-2">✓</span>Bez ftalátů</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
