import { notFound } from 'next/navigation';

const cars = [
  {
    id: 'trabant-601-universal-1975',
    name: 'Trabant 601 Universal',
    year: 1975,
    color: 'Slonová kost',
    description: 'Prostorný kombík v klasické barvě, ideální pro víkendové výlety.',
    longDescription: `Trabant 601 Universal z roku 1975 představuje ideální spojení klasického designu a praktičnosti. Tento kombík nabízí dostatek prostoru pro vaše víkendové dobrodružství.

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
- Převodovka: 4 stupňová manuální`,
    price: 2999,
    features: [
      'Velký zavazadlový prostor',
      'Střešní nosič',
      'Originální rádio',
      'Sklápěcí zadní sedadla',
      'Kompletní sada nářadí',
    ],
    gallery: [
      '/cars/trabant-601-universal-1975/1.jpg',
      '/cars/trabant-601-universal-1975/2.jpg',
      '/cars/trabant-601-universal-1975/3.jpg',
      '/cars/trabant-601-universal-1975/4.jpg',
    ]
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] relative bg-white rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[#8B4513]/10" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {car.gallery?.map((image, index) => (
                  <button
                    key={index}
                    className="aspect-[4/3] relative bg-white rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#8B4513]/10" />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-[#8B4513]">{car.name}</h1>
                <p className="text-xl text-[#8B4513]/60 mt-2">Rok výroby: {car.year}</p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#8B4513] mb-2">{car.price} Kč</div>
                <p className="text-[#8B4513]/60">za víkend (pátek 15:00 - neděle 19:00)</p>
                <a 
                  href="/rezervace"
                  className="mt-6 w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-[#8B4513] text-white rounded-full hover:bg-[#723A0F] transition-colors font-medium"
                >
                  Rezervovat termín
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="prose prose-brown">
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">O voze</h2>
                <div className="text-[#8B4513]/80 whitespace-pre-line">{car.longDescription}</div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Výbava a příslušenství</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#8B4513]/80">
                  {car.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
