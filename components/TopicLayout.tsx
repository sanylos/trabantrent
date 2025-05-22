interface TopicLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function TopicLayout({ title, children }: TopicLayoutProps) {
  return (    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-sm">
            {title}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}
