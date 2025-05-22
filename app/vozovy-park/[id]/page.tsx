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
    ],
    reviews: [
      {
        id: 1,
        name: 'Martin Svoboda',
        location: 'Karlovy Vary',
        date: '15. 4. 2025',
        rating: 5,
        text: 'Skvělý stav vozidla, vše fungovalo bez problémů. Jízda byla přesně takový retro zážitek, jaký jsem očekával. Určitě si půjčím znovu!'
      },
      {
        id: 2,
        name: 'Lucie Malá',
        location: 'Olomouc',
        date: '2. 3. 2025',
        rating: 5,
        text: 'Perfektní servis a krásně zrenovovaný Trabant. Všichni na silnici se za námi otáčeli. Romantický víkend jak má být!'
      },
      {
        id: 3,
        name: 'Tomáš Horák',
        location: 'České Budějovice',
        date: '28. 2. 2025',
        rating: 4,
        text: 'Příjemná nostalgická jízda. Auto bylo čisté a v dobrém stavu. Jen spotřeba oleje byla trochu vyšší, ale to k dvoutaktu patří.'
      }
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

              <div>
                <h2 className="text-2xl font-bold text-[#8B4513] mb-4">Recenze</h2>
                <ul className="space-y-4">
                  {car.reviews?.map((review) => (
                    <li key={review.id} className="bg-white rounded-2xl p-6 shadow">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-[#8B4513]">{review.name}</h3>
                          <p className="text-sm text-[#8B4513]/60">{review.location}</p>
                        </div>
                        <div className="text-sm text-[#8B4513]/60">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-[#8B4513]' : 'text-[#8B4513]/20'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.98 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[#8B4513]/80">{review.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  );
}
