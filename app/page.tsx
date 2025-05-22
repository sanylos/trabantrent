export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF3E8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF3E8] to-[#F5E6D3] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2C1810] tracking-tight">
                Půjčovna Trabantů
              </h1>
              <p className="text-xl md:text-2xl text-[#4A2F24] max-w-2xl mx-auto leading-relaxed">
                Zažijte nezapomenutelný víkend s legendární ikonou socialismu
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#rezervace" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-colors font-medium">
                Rezervovat
                <img src="/icons/bag.svg" className="w-5 h-5 invert" alt="" />
              </a>
              <a href="#cenik" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2C1810] rounded-full hover:bg-[#8B4513]/10 transition-colors font-medium border border-[#8B4513]">
                Ceník a podmínky
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-[#FAF3E8] p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-20 h-20 mb-6 relative">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform"></div>
                  <img src="/icons/trabant.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <div className="relative">
                  <div className="text-5xl font-bold text-[#2C1810] mb-3 tracking-tight">100+</div>
                  <div className="text-lg text-[#4A2F24]">Trabantů v našem vozovém parku</div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#FAF3E8] p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-20 h-20 mb-6 relative">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform"></div>
                  <img src="/icons/location.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <div className="relative">
                  <div className="text-5xl font-bold text-[#2C1810] mb-3 tracking-tight">30+</div>
                  <div className="text-lg text-[#4A2F24]">Měst s výdejními místy</div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#FAF3E8] p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-20 h-20 mb-6 relative">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform"></div>
                  <img src="/icons/customers.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <div className="relative">
                  <div className="text-5xl font-bold text-[#2C1810] mb-3 tracking-tight">5000+</div>
                  <div className="text-lg text-[#4A2F24]">Spokojených zákazníků</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/trabant-hero.jpg" alt="Trabant 601" className="rounded-2xl shadow-xl" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#2C1810]">Pro koho je půjčovna určena?</h2>
              <ul className="space-y-4 text-lg text-[#4A2F24]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Milovníkům retro a vintage kultury
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Párům hledajícím netradiční víkendový zážitek
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fanouškům historických vozidel
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fotografům a influencerům
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-b from-white to-[#FAF3E8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2C1810] mb-12">Proč zvolit naši půjčovnu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-16 h-16 relative mb-6">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <img src="/icons/trabant.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Retro zážitek</h3>
                <p className="text-[#4A2F24] leading-relaxed">Autentický zážitek z řízení legendárního vozu východního bloku</p>
              </div>
            </div>

            <div className="group">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-16 h-16 relative mb-6">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <img src="/icons/clock.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Víkendové půjčení</h3>
                <p className="text-[#4A2F24] leading-relaxed">Celý víkend na objevování krás Česka ve stylovém veteránu</p>
              </div>
            </div>

            <div className="group">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-transparent"></div>
                <div className="w-16 h-16 relative mb-6">
                  <div className="absolute inset-0 bg-[#8B4513]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <img src="/icons/all-included.svg" className="w-full h-full relative z-10 p-2 transition-transform group-hover:scale-110" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C1810] mb-3">Vše zahrnuto</h3>
                <p className="text-[#4A2F24] leading-relaxed">Plná nádrž, pojištění a technická podpora v ceně</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="cenik" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2C1810] mb-12">Ceník a podmínky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF3E8] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Víkendový pronájem</h3>
              <div className="text-4xl font-bold text-[#2C1810] mb-6">2 999 Kč</div>
              <ul className="space-y-4 text-[#4A2F24]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pátek 15:00 - Neděle 19:00
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  300 km v ceně
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plná nádrž
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Havarijní pojištění
                </li>
              </ul>
            </div>
            <div className="bg-[#FAF3E8] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Podmínky pronájmu</h3>
              <ul className="space-y-4 text-[#4A2F24]">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Věk min. 21 let
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Řidičský průkaz sk. B min. 2 roky
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Kauce 5 000 Kč
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Platný občanský průkaz
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2C1810] mb-12">Co říkají naši zákazníci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF3E8] p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#8B4513] text-white flex items-center justify-center rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>
              <p className="text-[#4A2F24] mb-6 italic">Skvělý víkend s Trabantem! Připomnělo mi to mé mládí a cesty s rodiči. Servis byl perfektní a půjčení proběhlo bez problémů.</p>
              <div>
                <div className="font-semibold text-[#2C1810]">Jana Nováková</div>
                <div className="text-sm text-[#4A2F24]">Praha</div>
              </div>
            </div>

            <div className="bg-[#FAF3E8] p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#8B4513] text-white flex items-center justify-center rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>
              <p className="text-[#4A2F24] mb-6 italic">Úžasný zážitek pro náš retro svatební den! Trabant byl perfektně připravený a fotky s ním jsou prostě nádherné. Děkujeme!</p>
              <div>
                <div className="font-semibold text-[#2C1810]">Petr a Marie Dvořákovi</div>
                <div className="text-sm text-[#4A2F24]">Brno</div>
              </div>
            </div>

            <div className="bg-[#FAF3E8] p-8 rounded-2xl relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-[#8B4513] text-white flex items-center justify-center rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>
              <p className="text-[#4A2F24] mb-6 italic">Jako influencer jsem hledala něco unikátního pro retro fotky. Trabant byl naprostý hit a mé sledující naprosto nadchl!</p>
              <div>
                <div className="font-semibold text-[#2C1810]">Tereza Černá</div>
                <div className="text-sm text-[#4A2F24]">Plzeň • @terezaretro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="rezervace" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#8B4513] text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Připraveni na retro dobrodružství?</h2>
            <p className="text-xl text-white/90 mb-8">Rezervujte si svůj víkend s Trabantem ještě dnes</p>
            <a href="tel:+420777888999" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2C1810] rounded-full hover:bg-[#FAF3E8] transition-colors font-medium text-lg">
              +420 777 888 999
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
