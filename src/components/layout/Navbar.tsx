import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 backdrop-blur-lg">
      <Link to="/" className="text-2xl font-bold tracking-tight text-foreground">
        ChatShaper
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
          About
        </Link>
        <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
          Gallery
        </Link>
        <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
          Contact
        </Link>
      </nav>
    </header>
  );
}
