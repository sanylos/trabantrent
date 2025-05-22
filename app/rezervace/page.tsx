import { Calendar } from '@/components/Calendar';

export default function ReservationPage() {
    return (
        <div className="min-h-screen bg-[#FAF3E8]">
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8">Rezervace</h1>
                    {/* Steps */}
                    <div className="mb-12">
                        <div className="relative max-w-3xl mx-auto">
                            {/* Steps with connecting lines */}
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
                                {[
                                    { step: 1, name: 'Výběr vozu', status: 'current' },
                                    { step: 2, name: 'Termín', status: 'upcoming' },
                                    { step: 3, name: 'Osobní údaje', status: 'upcoming' }
                                ].map((item, index) => (
                                    <div key={item.step} className="flex items-center md:flex-col">
                                        <div className="flex items-center">
                                            {/* Connecting line before step (except first) */}
                                            {index > 0 && (
                                                <>
                                                    {/* Mobile vertical line */}
                                                    <div className="h-14 w-0.5 bg-[#8B4513]/10 md:hidden mr-8">
                                                        {index === 1 && <div className="h-1/2 bg-[#8B4513] transition-all duration-500" />}
                                                    </div>
                                                    {/* Desktop horizontal line */}
                                                    <div className="hidden md:block w-72 h-0.5 bg-[#8B4513]/10 mx-4 mb-4">
                                                        {index === 1 && <div className="w-full h-full bg-[#8B4513] transition-all duration-500" />}
                                                    </div>
                                                </>
                                            )}

                                            <div className="flex flex-col items-center">
                                                <div className={`
                                                    w-10 h-10 rounded-full flex items-center justify-center font-bold
                                                    transition-all duration-300 relative z-10
                                                    ${item.status === 'current'
                                                        ? 'bg-[#8B4513] text-white ring-4 ring-[#8B4513]/20 transform scale-110'
                                                        : item.status === 'completed'
                                                            ? 'bg-[#8B4513] text-white'
                                                            : 'bg-white border-2 border-[#8B4513]/20 text-[#8B4513]'
                                                    }
                                                `}>
                                                    {item.status === 'completed' ? (
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        item.step
                                                    )}
                                                </div>
                                                <span className={`
                                                    mt-2 text-sm font-medium whitespace-nowrap
                                                    ${item.status === 'current'
                                                        ? 'text-[#2C1810]'
                                                        : item.status === 'completed'
                                                            ? 'text-[#2C1810]'
                                                            : 'text-[#4A2F24]/60'
                                                    }
                                                `}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
