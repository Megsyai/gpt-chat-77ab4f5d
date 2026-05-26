import React from 'react';

export default function Gallery() {
  // Dummy data for gallery items - replace with actual data or dynamic fetching
  const galleryItems = [
    { id: 1, title: "Creative Writing Pro", description: "Generate stories, poems, and scripts.", imageUrl: "https://via.placeholder.com/300x200?text=Creative+Writing" },
    { id: 2, title: "Code Assistant", description: "Get help with coding tasks and debugging.", imageUrl: "https://via.placeholder.com/300x200?text=Code+Assistant" },
    { id: 3, title: "Data Analysis Tool", description: "Understand your data with AI insights.", imageUrl: "https://via.placeholder.com/300x200?text=Data+Analysis" },
    { id: 4, title: "Learning Companion", description: "Explore new topics and get explanations.", imageUrl: "https://via.placeholder.com/300x200?text=Learning+Companion" },
    { id: 5, title: "Idea Generator", description: "Brainstorm new concepts and solutions.", imageUrl: "https://via.placeholder.com/300x200?text=Idea+Generator" },
    { id: 6, title: "Translation Service", description: "Communicate across languages seamlessly.", imageUrl: "https://via.placeholder.com/300x200?text=Translation" },
  ];

  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 md:gap-12">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Gallery of Possibilities
      </h1>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="mb-4 h-40 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h2 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
