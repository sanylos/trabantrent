import Image from 'next/image';
import Link from 'next/link';

const cars = [
  {
    id: 'trabant-601-universal-1975',
    name: 'Trabant 601 Universal',
    year: 1975,
    color: 'Slonová kost',
    description: 'Prostorný kombík v klasické barvě, ideální pro víkendové výlety.',
    price: 2999,
    image: '/cars/trabant-601-universal-1975.jpg',
  },
  {
    id: 'trabant-601-s-1982',
    name: 'Trabant 601 S',
    year: 1982,
    color: 'Světle modrá',
    description: 'Sportovní verze s vylepšeným interiérem a chromovanými detaily.',
    price: 3299,
    image: '/cars/trabant-601-s-1982.jpg',
  },
  {
    id: 'trabant-601-deluxe-1985',
    name: 'Trabant 601 DeLuxe',
    year: 1985,
    color: 'Zelená',
    description: 'Luxusní edice s koženkovým čalouněním a rádiem.',
    price: 3499,
    image: '/cars/trabant-601-deluxe-1985.jpg',
  },
];

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#FAF3E8]">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-8">Vozový park</h1>
          <p className="text-xl text-[#8B4513]/80 mb-12 max-w-2xl">
            Vyberte si z naší pečlivě udržované kolekce Trabantů. Každý vůz má svůj vlastní příběh a charakter.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Link 
                href={`/vozovy-park/${car.id}`} 
                key={car.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-[#8B4513]/10" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#8B4513]">{car.name}</h3>
                      <p className="text-[#8B4513]/60">Rok výroby: {car.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#8B4513]">{car.price} Kč</div>
                      <div className="text-sm text-[#8B4513]/60">víkend</div>
                    </div>
                  </div>
                  <p className="text-[#8B4513]/80">{car.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-[#8B4513]/60">Barva: {car.color}</span>
                    <span className="text-[#8B4513] font-medium">Zobrazit detail →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
