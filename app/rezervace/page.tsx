import { Calendar } from '@/components/Calendar';

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-[#FAF3E8]">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-8">Rezervace</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-white rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="car" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Vyberte vůz
                  </label>
                  <select
                    id="car"
                    name="car"
                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white"
                  >
                    <option value="">Vyberte Trabant</option>
                    <option value="trabant-601-universal-1975">Trabant 601 Universal (1975)</option>
                    <option value="trabant-601-s-1982">Trabant 601 S (1982)</option>
                    <option value="trabant-601-deluxe-1985">Trabant 601 DeLuxe (1985)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-[#8B4513] mb-2">
                      Datum vyzvednutí
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-[#8B4513] mb-2">
                      Datum vrácení
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] mb-2">
                      Jméno a příjmení
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#8B4513] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Poznámka
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-colors font-medium"
                >
                  Odeslat rezervaci
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Calendar and Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Obsazenost vozů</h2>
                <div className="prose prose-brown">
                  <p className="text-[#8B4513]/80">
                    Vyberte si termín pronájmu. Zelené dny jsou volné, červené obsazené.
                  </p>
                </div>
                <div className="mt-4">
                  {/* Calendar component will be created separately */}
                  <div className="h-80 bg-[#8B4513]/5 rounded-lg flex items-center justify-center">
                    <p className="text-[#8B4513]/60">Kalendář bude brzy k dispozici</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Důležité informace</h2>
                <ul className="space-y-4 text-[#8B4513]/80">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Kauce 5 000 Kč se platí při převzetí vozu
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Nezapomeňte si s sebou vzít řidičský průkaz a občanský průkaz
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 mt-1 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Provedeme krátké seznámení s vozem před předáním
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
