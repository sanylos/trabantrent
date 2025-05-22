import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
    {
        id: 'historie-trabantu',
        title: 'Historie Trabantu: Od symbolu NDR k kultovnímu veteránu',
        excerpt: 'Objevte fascinující příběh východoněmeckého vozu, který se stal symbolem celé éry a dodnes vzbuzuje emoce.',
        image: '/blog/trabant-history.jpg',
        category: 'Historie',
        date: '15. května 2025',
        readTime: '8 min',
        author: {
            name: 'Jan Novotný',
            avatar: '/blog/authors/jan.jpg'
        }
    },
    {
        id: 'tipy-na-vylety',
        title: '5 nezapomenutelných výletů Trabantem po Česku',
        excerpt: 'Připravili jsme pro vás výběr nejkrásnějších tras, které si v našem Trabantu užijete naplno.',
        image: '/blog/trabant-trips.jpg',
        category: 'Cestování',
        date: '10. května 2025',
        readTime: '12 min',
        featured: true,
        author: {
            name: 'Petra Svobodová',
            avatar: '/blog/authors/petra.jpg'
        }
    },
    {
        id: 'jak-ridit-trabanta',
        title: 'Jak řídit Trabanta? Kompletní průvodce pro začátečníky',
        excerpt: 'Dvoutaktní motor, řazení a další specifika. Vše, co potřebujete vědět před první jízdou.',
        image: '/blog/trabant-driving.jpg',
        category: 'Průvodce',
        date: '5. května 2025',
        readTime: '10 min',
        author: {
            name: 'Martin Kovář',
            avatar: '/blog/authors/martin.jpg'
        }
    },
    {
        id: 'trabant-kultura',
        title: 'Trabant v populární kultuře: Film, hudba a umění',
        excerpt: 'Od filmových klasik po současné umění - jak se Trabant stal kulturní ikonou.',
        image: '/blog/trabant-culture.jpg',
        category: 'Kultura',
        date: '1. května 2025',
        readTime: '6 min',
        author: {
            name: 'Jana Králová',
            avatar: '/blog/authors/jana.jpg'
        }
    }
];

export default function BlogPage() {
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-[#FAF3E8]">
            {/* Header */}
            <section className="relative py-16 bg-[#2C1810]">
                <div className="absolute inset-0 bg-[url('/texture.png')] opacity-20"></div>
                <div className="relative max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Trabant Blog
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Příběhy, tipy a zajímavosti ze světa legendárních vozů Trabant
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <Link
                            href={`/blog/${featuredPost.id}`}
                            className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative aspect-[4/3] md:aspect-auto">
                                    <div className="absolute inset-0 bg-[#2C1810]/10" />
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full font-medium">
                                                {featuredPost.category}
                                            </span>
                                            <span className="text-[#4A2F24]">
                                                {featuredPost.date}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-lg text-[#4A2F24]">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 pt-4">
                                            <div className="w-10 h-10 rounded-full bg-[#8B4513]/10" />
                                            <div>
                                                <div className="font-medium text-[#2C1810]">{featuredPost.author.name}</div>
                                                <div className="text-sm text-[#4A2F24]">{featuredPost.readTime} čtení</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="aspect-[16/9] relative">
                                    <div className="absolute inset-0 bg-[#2C1810]/10" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm mb-4">
                                        <span className="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] rounded-full font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-[#4A2F24]">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#4A2F24] mb-6">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-[#2C1810]/10">
                                        <div className="w-8 h-8 rounded-full bg-[#8B4513]/10" />
                                        <div>
                                            <div className="font-medium text-[#2C1810]">{post.author.name}</div>
                                            <div className="text-sm text-[#4A2F24]">{post.readTime} čtení</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-[#2C1810] rounded-2xl p-8 md:p-12">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Odebírejte novinky ze světa Trabantů
                            </h2>
                            <p className="text-lg text-white/80 mb-8">
                                Příběhy, tipy na výlety a exkluzivní nabídky přímo do vaší schránky
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Váš e-mail"
                                    className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:border-white/40 focus:ring-0"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-white text-[#2C1810] rounded-full hover:bg-[#FAF3E8] transition-colors font-medium"
                                >
                                    Odebírat
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Historie', 'Cestování', 'Průvodce', 'Kultura'].map((category) => (
                            <Link
                                key={category}
                                href={`/blog/kategorie/${category.toLowerCase()}`}
                                className="group p-6 bg-white rounded-xl text-center hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">
                                    {category}
                                </h3>
                                <p className="text-sm text-[#4A2F24] mt-1">
                                    Zobrazit články
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
