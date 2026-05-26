import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto flex w-full items-center justify-center py-6">
      <p className="text-sm text-muted-foreground">
        &copy; {currentYear} ChatShaper. All rights reserved.
      </p>
    </footer>
  );
}
