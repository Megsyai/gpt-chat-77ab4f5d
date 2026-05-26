import React from 'react';

// Define framer-motion types if not globally available
// declare module 'framer-motion' {
//   export interface MotionProps {
//     variants?: any;
//   }
// }

export default function Index() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 text-center md:gap-12">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Rewrite the future with ChatShaper.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Experience the next generation of AI conversations. Create, explore, and transform your ideas with our powerful and intuitive chat interface.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get Started
        </button>
        <button
          className="rounded-full border border-border bg-background px-6 py-3 text-lg font-semibold text-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
