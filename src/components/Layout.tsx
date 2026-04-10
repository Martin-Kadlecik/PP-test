import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export function TopNavBar() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container/30">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-on-surface font-headline uppercase">Podlahy Praha</Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/sluzba" className={`font-headline font-medium tracking-wide uppercase text-sm pb-1 ${location.pathname === '/sluzba' || location.pathname === '/' ? 'text-on-surface border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}>Služba (Pokládka)</Link>
          <Link to="/produkt" className={`font-headline font-medium tracking-wide uppercase text-sm pb-1 ${location.pathname === '/produkt' ? 'text-on-surface border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}>Produkt (Vinyl)</Link>
          <Link to="/showroom" className={`font-headline font-medium tracking-wide uppercase text-sm pb-1 ${location.pathname === '/showroom' ? 'text-on-surface border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}>Showroom</Link>
          <Link to="/kontakt" className={`font-headline font-medium tracking-wide uppercase text-sm pb-1 ${location.pathname === '/kontakt' ? 'text-on-surface border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}>Kontakt</Link>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-headline font-medium tracking-wide uppercase text-sm" href="#">Galerie</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-headline font-medium tracking-wide uppercase text-sm" href="#">O nás</a>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-none font-headline font-bold tracking-wide uppercase text-sm transition-all duration-300 shadow-sm hover:shadow-md">
          Nezávazná poptávka
        </button>
      </div>
    </nav>
  );
}

export function SideNavBar() {
  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 bg-surface/90 backdrop-blur-lg shadow-2xl z-40 flex flex-col p-4 gap-8 w-16 hover:w-64 overflow-hidden transition-all group cubic-bezier(0.4,0,0.2,1) duration-500 border-y border-l border-surface-container/50">
      <Link to="/kontakt" className="flex items-center gap-6 text-on-surface px-2 cursor-pointer group/item">
        <span className="material-symbols-outlined shrink-0 text-primary-container group-hover/item:scale-110 transition-transform">call</span>
        <span className="whitespace-nowrap font-headline font-bold tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Kontakt</span>
      </Link>
      <Link to="/showroom" className="flex items-center gap-6 text-on-surface-variant px-2 hover:translate-x-[-4px] transition-transform cursor-pointer group/item">
        <span className="material-symbols-outlined shrink-0 group-hover/item:text-primary transition-colors">location_on</span>
        <span className="whitespace-nowrap font-headline font-medium tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Showroom</span>
      </Link>
      <div className="flex items-center gap-6 text-on-surface-variant px-2 hover:translate-x-[-4px] transition-transform cursor-pointer group/item">
        <span className="material-symbols-outlined shrink-0 group-hover/item:text-primary transition-colors">auto_awesome</span>
        <span className="whitespace-nowrap font-headline font-medium tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Reference</span>
      </div>
      <div className="flex items-center gap-6 text-on-surface-variant px-2 hover:translate-x-[-4px] transition-transform cursor-pointer group/item">
        <span className="material-symbols-outlined shrink-0 group-hover/item:text-primary transition-colors">payments</span>
        <span className="whitespace-nowrap font-headline font-medium tracking-wide uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ceník</span>
      </div>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-surface-container-highest font-body text-sm leading-relaxed text-on-surface-variant">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-8 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-on-surface font-headline uppercase tracking-wide">Podlahy Praha</div>
          <p className="text-on-surface-variant">Specialisté na vinylové podlahy s desetiletou tradicí v regionu Prahy a středních Čech.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface uppercase tracking-wider text-xs font-headline">Služby</div>
          <Link className="text-on-surface-variant hover:text-on-surface transition-colors" to="/sluzba">Pokládka vinylu</Link>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Nivelace podlah</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Bezprašná práce</a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface uppercase tracking-wider text-xs font-headline">Informace</div>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors underline decoration-primary-container" href="#">Obchodní podmínky</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">GDPR</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Mapa stránek</a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface uppercase tracking-wider text-xs font-headline">Prodejna</div>
          <p className="text-on-surface-variant">
            <strong>Podlahy Praha s.r.o.</strong><br/>
            Komunardů 1154/38<br/>
            170 00 Praha 7 - Holešovice
          </p>
          <p className="text-on-surface-variant">
            DIČ: CZ27204910<br/>
            IČO: 27204910
          </p>
          <p className="text-on-surface-variant">
            <a href="tel:+420702013119" className="hover:text-primary-container transition-colors">702 013 119</a><br/>
            <a href="mailto:obchod@podlahypraha.cz" className="hover:text-primary-container transition-colors">obchod@podlahypraha.cz</a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-on-surface uppercase tracking-wider text-xs font-headline">Otevírací doba</div>
          <ul className="text-on-surface-variant space-y-1">
            <li className="flex justify-between"><span>Pondělí</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Úterý</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Středa</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Čtvrtek</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Pátek</span><span>09:00 - 15:00</span></li>
            <li className="flex justify-between text-on-surface/50"><span>Sobota</span><span>ZAVŘENO</span></li>
            <li className="flex justify-between text-on-surface/50"><span>Neděle</span><span>ZAVŘENO</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant">
        <div>© 2024 Podlahy Praha. Všechna práva vyhrazena.</div>
        <div className="flex gap-6">
          <span className="hover:text-on-surface cursor-pointer transition-colors">Facebook</span>
          <span className="hover:text-on-surface cursor-pointer transition-colors">Instagram</span>
          <span className="hover:text-on-surface cursor-pointer transition-colors">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
