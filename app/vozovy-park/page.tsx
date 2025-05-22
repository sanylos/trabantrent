'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cars = [
    {
        id: 'trabant-601-universal-1975',
        name: 'Trabant 601 Universal',
        year: 1975,
        color: 'Slonová kost',
        description: 'Prostorný kombík v klasické barvě, ideální pro víkendové výlety. Kompletně zrenovovaný včetně motoru.',
        price: 2999,        image: '/cars/trabant-601-universal-1975.jpg',
    },
    {
        id: 'trabant-601-sedan-1982',
        name: 'Trabant 601 Sedan',
        year: 1982,
        color: 'Béžová',
        description: 'Elegantní sedan v původním stavu s kompletní dokumentací. Perfektní pro nostalgické jízdy městem.',
        price: 2799,
        image: '/cars/trabant-601-sedan-1982.jpg',
    },
    {
        id: 'trabant-601-deluxe-1980',
        name: 'Trabant 601 DeLuxe',
        year: 1980,
        color: 'Zelená',
        description: 'Luxusní verze s chromovanými doplňky a koženkovým interiérem. Vhodný pro retro svatby.',
        price: 3299,
        image: '/cars/trabant-601-deluxe-1980.jpg',
    },
    {
        id: 'trabant-601-standard-1976',
        name: 'Trabant 601 Standard',
        year: 1976,
        color: 'Modrá',
        description: 'Klasický model v původním stavu, pravidelně servisovaný. Ideální pro začátečníky.',
        price: 2599,
        image: '/cars/trabant-601-standard-1976.jpg',
    }
];

const colors = Array.from(new Set(cars.map(car => car.color)));
const years = Array.from(new Set(cars.map(car => car.year))).sort((a, b) => a - b);

export default function CataloguePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [sortBy, setSortBy] = useState('default');

    // Filter and sort cars
    const filteredCars = cars.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesColor = !selectedColor || car.color === selectedColor;
        const matchesYear = !selectedYear || car.year === parseInt(selectedYear);
        return matchesSearch && matchesColor && matchesYear;
    }).sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'year-asc') return a.year - b.year;
        if (sortBy === 'year-desc') return b.year - a.year;
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#FAF3E8]">
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-8">Trabanty k zapůjčení</h1>

                    {/* Search and Filters */}
                    <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="search" className="block text-sm font-medium text-[#2C1810] mb-2">
                                    Hledat
                                </label>
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Hledat podle názvu..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810] placeholder-[#4A2F24]/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="color" className="block text-sm font-medium text-[#2C1810] mb-2">
                                    Barva
                                </label>
                                <select
                                    id="color"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810]"
                                >
                                    <option value="">Všechny barvy</option>
                                    {colors.map(color => (
                                        <option key={color} value={color}>{color}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-[#2C1810] mb-2">
                                    Rok výroby
                                </label>
                                <select
                                    id="year"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810]"
                                >
                                    <option value="">Všechny roky</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="sort" className="block text-sm font-medium text-[#2C1810] mb-2">
                                    Seřadit podle
                                </label>
                                <select
                                    id="sort"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-[#8B4513]/20 focus:border-[#8B4513] focus:ring-1 focus:ring-[#8B4513] bg-white text-[#2C1810]"
                                >
                                    <option value="default">Výchozí</option>
                                    <option value="price-asc">Cena (nejlevnější)</option>
                                    <option value="price-desc">Cena (nejdražší)</option>
                                    <option value="year-asc">Rok výroby (nejstarší)</option>
                                    <option value="year-desc">Rok výroby (nejnovější)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCars.map((car) => (
                            <Link
                                key={car.id}
                                href={`/vozovy-park/${car.id}`}
                                className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-4/3 relative overflow-hidden">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        width={600}
                                        height={450}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-xl font-bold text-[#2C1810]">{car.name}</h2>
                                        <div className="text-lg font-bold text-[#8B4513]">
                                            {car.price} Kč/den
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-sm px-2 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full">
                                            {car.year}
                                        </span>
                                        <span className="text-sm px-2 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full">
                                            {car.color}
                                        </span>
                                    </div>
                                    <p className="text-[#4A2F24] line-clamp-2">{car.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredCars.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-lg text-[#4A2F24]">
                                Bohužel jsme nenašli žádné Trabanty odpovídající vašemu výběru.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
