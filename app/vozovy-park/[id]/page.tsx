import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const cars = [
    {
        id: 'trabant-601-universal-1975',
        name: 'Trabant 601 Universal',
        year: 1975,
        color: 'Slonová kost',
        description: 'Prostorný kombík v klasické barvě, ideální pro víkendové výlety.',
        price: 2999, mainImage: '/cars/trabant-601-universal-1975.jpg',
        gallery: [
            '/cars/gallery/trabant-601-universal-1975-1.jpg',
            '/cars/gallery/trabant-601-universal-1975-2.jpg'
        ],
        longDescription: `
Trabant 601 Universal z roku 1975 představuje ideální spojení klasického designu a praktičnosti. Tento kombík nabízí dostatek prostoru pro vaše víkendové dobrodružství.

Vůz prošel kompletní renovací, včetně:
- Nový lak v původní barvě slonové kosti
- Repasovaný motor
- Renovovaný interiér
- Nové pneumatiky

Technické specifikace:
- Motor: Dvoutaktní, vzduchem chlazený
- Objem: 595 ccm
- Výkon: 19,1 kW (26 PS)
- Maximální rychlost: 100 km/h
- Spotřeba: 7-8 l/100 km
- Převodovka: 4 stupňová manuální
`,
        features: [
            'Prostorný zavazadlový prostor',
            'Originální rádio',
            'Sklopná zadní sedadla',
            'Chromované detaily',
            'Renovovaný interiér',
            'Servisní knížka',
        ],
        reviews: [
            {
                id: 1,
                name: 'Martin Svoboda',
                location: 'Karlovy Vary',
                date: '15. 4. 2025',
                rating: 5,
                text: 'Skvělý stav vozidla, vše fungovalo bez problémů. Jízda byla přesně takový retro zážitek, jaký jsem očekával. Určitě si půjčím znovu!',
            },
            {
                id: 2,
                name: 'Lucie Malá',
                location: 'Olomouc',
                date: '2. 3. 2025',
                rating: 5,
                text: 'Perfektní servis a krásně zrenovovaný Trabant. Všichni na silnici se za námi otáčeli. Romantický víkend jak má být!',
            },
            {
                id: 3,
                name: 'Tomáš Horák',
                location: 'České Budějovice',
                date: '28. 2. 2025',
                rating: 4,
                text: 'Příjemná nostalgická jízda. Auto bylo čisté a v dobrém stavu. Jen spotřeba oleje byla trochu vyšší, ale to k dvoutaktu patří.',
            },
        ],
    },
    // ... other cars
];

export default function CarDetail({ params }: { params: { id: string } }) {
    const car = cars.find((c) => c.id === params.id);

    if (!car) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FAF3E8]">
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-8">
                        <Link href="/vozovy-park" className="text-[#8B4513] hover:text-[#2C1810] transition-colors">
                            ← Zpět na přehled
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Images */}
                        <div className="space-y-6">
                            <div className="aspect-4/3 relative rounded-2xl overflow-hidden">
                                <Image
                                    src={car.mainImage}
                                    alt={car.name}
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {car.gallery?.map((image, index) => (
                                    <div key={index} className="aspect-4/3 relative rounded-xl overflow-hidden">
                                        <Image
                                            src={image}
                                            alt={`${car.name} - detail ${index + 1}`}
                                            width={400}
                                            height={300}
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <h1 className="text-4xl font-bold text-[#2C1810] mb-4">{car.name}</h1>
                            <div className="flex gap-3 mb-6">
                                <span className="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full font-medium">
                                    {car.year}
                                </span>
                                <span className="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full font-medium">
                                    {car.color}
                                </span>
                            </div>

                            <div className="prose prose-brown max-w-none mb-8">
                                {car.longDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-[#4A2F24]">{paragraph}</p>
                                ))}
                            </div>

                            <div className="bg-white rounded-2xl p-6 mb-8">
                                <h2 className="text-xl font-bold text-[#2C1810] mb-4">Vybavení a vlastnosti</h2>
                                <ul className="grid grid-cols-2 gap-4">
                                    {car.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-[#4A2F24]">
                                            <svg className="w-5 h-5 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#8B4513] text-white rounded-2xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-2xl font-bold">{car.price} Kč/den</div>
                                    <Link
                                        href="/rezervace"
                                        className="px-6 py-3 bg-white text-[#8B4513] rounded-lg hover:bg-[#FAF3E8] transition-colors font-medium"
                                    >
                                        Rezervovat
                                    </Link>
                                </div>
                                <p className="text-white/90">
                                    Cena zahrnuje pojištění, plnou nádrž a technickou podporu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <section className="py-16">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl font-bold text-[#2C1810] mb-8">Hodnocení zákazníků</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {car.reviews.map((review) => (
                                    <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center flex-shrink-0">
                                                <span className="text-lg font-semibold text-[#8B4513]">
                                                    {review.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div>
                                                        <div className="font-semibold text-[#2C1810]">{review.name}</div>
                                                        <div className="text-sm text-[#4A2F24]">{review.location} • {review.date}</div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        {Array.from({ length: review.rating }).map((_, i) => (
                                                            <svg key={i} className="w-5 h-5 text-[#8B4513]" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-[#4A2F24]">{review.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
