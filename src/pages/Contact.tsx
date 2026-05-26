import React from 'react';

export default function Contact() {
  return (
    <section className="flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 text-center md:gap-12">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Get In Touch
      </h1>
      <p className="text-lg text-muted-foreground sm:text-xl">
        Have questions, feedback, or just want to say hello? Reach out to us!
      </p>
      <form className="flex w-full flex-col gap-4 sm:max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Your Email"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Your Message"
        ></textarea>
        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
