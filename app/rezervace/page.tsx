import { Calendar } from '@/components/Calendar';

export default function ReservationPage() {
    return (
        <div className="min-h-screen bg-[#FAF3E8]">
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8">Rezervace</h1>

                    {/* Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between max-w-3xl mx-auto">
                            {[
                                { step: 1, name: 'Výběr vozu' },
                                { step: 2, name: 'Termín' },
                                { step: 3, name: 'Osobní údaje' }
                            ].map((item, index) => (
                                <div key={item.step} className="flex items-center">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                                            item.step === 1 
                                                ? 'bg-[#8B4513] text-white' 
                                                : 'bg-[#8B4513]/10 text-[#8B4513]'
                                        }`}>
                                            {item.step}
                                        </div>
                                        <div className="text-sm mt-2 font-medium text-[#2C1810]">{item.name}</div>
                                    </div>
                                    {index < 2 && (
                                        <div className="w-24 md:w-32 h-0.5 mx-4 bg-[#8B4513]/10"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Reservation Form */}
                        <div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="car" className="block text-sm font-medium text-[#2C1810] mb-2">
                                            Vyberte vůz
                                        </label>
                                        <select
                                            id="car"
                                            name="car"
                                            className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810]"
                                        >
                                            <option value="">Vyberte Trabant</option>
                                            <option value="trabant1">Trabant 601 Universal (1975) - Slonová kost</option>
                                            <option value="trabant2">Trabant 601 (1980) - Modrá</option>
                                            <option value="trabant3">Trabant 601 (1985) - Zelená</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-[#2C1810] mb-2">
                                            Jméno a příjmení
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810] placeholder-[#4A2F24]/50"
                                            placeholder="Jan Novák"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-[#2C1810] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810] placeholder-[#4A2F24]/50"
                                            placeholder="jan@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-[#2C1810] mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810] placeholder-[#4A2F24]/50"
                                            placeholder="+420 777 888 999"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[#2C1810] mb-2">
                                            Poznámka
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810] placeholder-[#4A2F24]/50"
                                            placeholder="Máte nějaké speciální požadavky?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-3 bg-[#8B4513] text-white rounded-lg hover:bg-[#723A0F] transition-colors font-medium"
                                    >
                                        Odeslat rezervaci
                                    </button>
                                </form>
                            </div>

                            {/* Price Summary */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                                <h3 className="text-xl font-bold text-[#2C1810] mb-6">Kalkulace ceny</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-[#8B4513]/10">
                                        <div className="text-[#4A2F24]">Víkendový pronájem (3 dny)</div>
                                        <div className="font-semibold text-[#2C1810]">2 999 Kč</div>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-[#8B4513]/10">
                                        <div className="text-[#4A2F24]">Pojištění</div>
                                        <div className="font-semibold text-[#2C1810]">zahrnuto</div>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-[#8B4513]/10">
                                        <div className="text-[#4A2F24]">Plná nádrž</div>
                                        <div className="font-semibold text-[#2C1810]">zahrnuto</div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <div className="text-lg font-bold text-[#2C1810]">Celková cena</div>
                                        <div className="text-2xl font-bold text-[#8B4513]">2 999 Kč</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calendar */}
                        <div>
                            <div className="sticky top-24">
                                <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Vyberte termín</h2>
                                <Calendar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
