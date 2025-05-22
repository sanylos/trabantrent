export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF3E8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF3E8] to-[#F5E6D3] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#8B4513] tracking-tight">
                Půjčovna Trabantů
              </h1>
              <p className="text-xl md:text-2xl text-[#8B4513]/80 max-w-2xl mx-auto leading-relaxed">
                Zažijte nezapomenutelný víkend s legendární ikonou socialismu
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#rezervace" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-colors font-medium">
                Rezervovat
                <img src="/icons/bag.svg" className="w-5 h-5" alt="" />
              </a>
              <a href="#cenik" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8B4513] rounded-full hover:bg-[#8B4513]/10 transition-colors font-medium border border-[#8B4513]">
                Ceník a podmínky
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-[#FAF3E8] rounded-2xl">
              <img src="/icons/trabant.svg" className="w-12 h-12 text-[#8B4513]" alt="" />
              <h3 className="mt-4 text-xl font-semibold text-[#8B4513]">Retro zážitek</h3>
              <p className="mt-2 text-[#8B4513]/70">Autentický zážitek z řízení legendárního vozu východního bloku</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#FAF3E8] rounded-2xl">
              <img src="/icons/clock.svg" className="w-12 h-12 text-[#8B4513]" alt="" />
              <h3 className="mt-4 text-xl font-semibold text-[#8B4513]">Víkendové půjčení</h3>
              <p className="mt-2 text-[#8B4513]/70">Celý víkend na objevování krás Česka ve stylovém veteránu</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#FAF3E8] rounded-2xl">
              <img src="/icons/bag.svg" className="w-12 h-12 text-[#8B4513]" alt="" />
              <h3 className="mt-4 text-xl font-semibold text-[#8B4513]">Vše zahrnuto</h3>
              <p className="mt-2 text-[#8B4513]/70">Plná nádrž, pojištění a technická podpora v ceně</p>
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
              <h2 className="text-3xl font-bold text-[#8B4513]">Pro koho je půjčovna určena?</h2>
              <ul className="space-y-4 text-lg text-[#8B4513]/80">
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

      {/* Pricing */}
      <section id="cenik" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">Ceník a podmínky</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF3E8] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Víkendový pronájem</h3>
              <div className="text-4xl font-bold text-[#8B4513] mb-6">2 999 Kč</div>
              <ul className="space-y-4 text-[#8B4513]/80">
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
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Podmínky pronájmu</h3>
              <ul className="space-y-4 text-[#8B4513]/80">
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

      {/* CTA */}
      <section id="rezervace" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#8B4513] text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Připraveni na retro dobrodružství?</h2>
            <p className="text-xl text-white/80 mb-8">Rezervujte si svůj víkend s Trabantem ještě dnes</p>
            <a href="tel:+420777888999" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B4513] rounded-full hover:bg-[#FAF3E8] transition-colors font-medium text-lg">
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
