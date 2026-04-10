import React from 'react';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-tighter text-on-surface mb-8 uppercase">
            Kde nás <span className="text-primary-container">najdete</span>
          </h1>
          <p className="text-xl text-on-surface-variant mb-16 font-body max-w-2xl leading-relaxed">
            Navštivte náš showroom v pražských Holešovicích. Rádi vám poradíme s výběrem a ukážeme vzorky vinylových podlah.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="bg-surface-container-low p-10 shadow-xl border border-surface-container/50">
                <h2 className="text-3xl font-extrabold font-headline mb-8 uppercase">Prodejna & Showroom</h2>
                <div className="space-y-6 font-body text-lg text-on-surface-variant">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">location_on</span>
                    <div>
                      <strong className="text-on-surface block mb-1">Podlahy Praha s.r.o.</strong>
                      Komunardů 1154/38<br/>
                      170 00 Praha 7 - Holešovice
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">call</span>
                    <a href="tel:+420702013119" className="hover:text-primary-container transition-colors font-bold text-on-surface">702 013 119</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">mail</span>
                    <a href="mailto:obchod@podlahypraha.cz" className="hover:text-primary-container transition-colors font-bold text-on-surface">obchod@podlahypraha.cz</a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-highest p-8 border border-outline-variant/20">
                  <h3 className="text-xl font-extrabold font-headline mb-6 uppercase">Otevírací doba</h3>
                  <ul className="text-on-surface-variant space-y-3 font-body">
                    <li className="flex justify-between"><span>Pondělí</span><span className="font-bold text-on-surface">09:00 - 17:00</span></li>
                    <li className="flex justify-between"><span>Úterý</span><span className="font-bold text-on-surface">09:00 - 17:00</span></li>
                    <li className="flex justify-between"><span>Středa</span><span className="font-bold text-on-surface">09:00 - 17:00</span></li>
                    <li className="flex justify-between"><span>Čtvrtek</span><span className="font-bold text-on-surface">09:00 - 17:00</span></li>
                    <li className="flex justify-between"><span>Pátek</span><span className="font-bold text-on-surface">09:00 - 15:00</span></li>
                    <li className="flex justify-between text-on-surface/50"><span>Sobota</span><span>ZAVŘENO</span></li>
                    <li className="flex justify-between text-on-surface/50"><span>Neděle</span><span>ZAVŘENO</span></li>
                  </ul>
                </div>
                <div className="bg-surface-container-highest p-8 border border-outline-variant/20">
                  <h3 className="text-xl font-extrabold font-headline mb-6 uppercase">Fakturační údaje</h3>
                  <p className="text-on-surface-variant font-body leading-relaxed">
                    <strong className="text-on-surface">Podlahy Praha s.r.o.</strong><br/>
                    Komunardů 1154/38<br/>
                    170 00 Praha 7 - Holešovice<br/><br/>
                    IČO: 27204910<br/>
                    DIČ: CZ27204910
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-surface-container overflow-hidden shadow-xl border border-surface-container/50 min-h-[400px] relative group">
              <iframe 
                src="https://maps.google.cz/maps?num=100&hl=cs&q=Komunard%C5%AF+38,170+00+Praha+7&ie=UTF8&hq=&hnear=Komunard%C5%AF+1154%2F38,+170+00+Praha&gl=cz&t=m&brcurrent=5,0,0&ll=50.104726,14.450197&spn=0.019268,0.048065&z=14&iwloc=A&source=embed" 
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">Galerie</span>
            <h2 className="text-4xl font-extrabold font-headline mb-4 uppercase">Fotografie prodejny</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-lg">Nahlédněte do našeho showroomu, kde si můžete prohlédnout stovky dekorů vinylových podlah naživo.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 md:col-span-2 row-span-2 bg-surface-container overflow-hidden group">
              <img src="https://www.podlahy-praha.cz/sites/default/files/prodejna-1.jpg" alt="Prodejna Podlahy Praha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-surface-container overflow-hidden group">
              <img src="https://www.podlahy-praha.cz/sites/default/files/prodejna_2.jpg" alt="Prodejna Podlahy Praha 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-surface-container overflow-hidden group">
              <img src="https://www.podlahy-praha.cz/sites/default/files/prodejna_3.jpg" alt="Prodejna Podlahy Praha 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-surface-container overflow-hidden group">
              <img src="https://www.podlahy-praha.cz/sites/default/files/prodejna_4.jpg" alt="Prodejna Podlahy Praha 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-surface-container overflow-hidden group">
              <img src="https://www.podlahy-praha.cz/sites/default/files/prodejna_5.jpg" alt="Prodejna Podlahy Praha 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-primary-container font-headline font-bold tracking-widest uppercase text-sm mb-4 block">360°</span>
          <h2 className="text-4xl font-extrabold font-headline mb-12 uppercase">Virtuální prohlídka</h2>
          <div className="aspect-video bg-surface-container-highest border border-outline-variant/30 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.podlahy-praha.cz/sites/default/files/prodejna-1.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-sm"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-4xl">360</span>
              </div>
              <span className="font-headline font-bold uppercase tracking-widest text-on-surface">Spustit prohlídku</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
