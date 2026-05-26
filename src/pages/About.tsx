import React from 'react';

export default function About() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 text-center md:gap-12">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        About ChatShaper
      </h1>
      <div className="text-lg text-muted-foreground text-start">
        <p className="mb-4">
          ChatShaper is a cutting-edge AI conversational platform designed to empower users with advanced natural language processing capabilities. We aim to revolutionize how individuals and businesses interact with AI, making complex technology accessible and intuitive.
        </p>
        <p className="mb-4">
          Our journey began with a simple vision: to create a seamless chat experience that bridges the gap between human creativity and artificial intelligence. We leverage the latest advancements in large language models to provide a robust, versatile, and engaging platform for a wide range of applications.
        </p>
        <p className="mb-4">
          From content generation and code assistance to complex problem-solving and creative exploration, ChatShaper is built to assist you at every step. Our commitment to continuous improvement ensures that our users always have access to the most powerful and up-to-date AI tools available.
        </p>
      </div>
    </section>
  );
}
