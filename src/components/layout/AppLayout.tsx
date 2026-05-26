import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";

export function AppLayout() {
  return (
    <div className="min-h-screen pb-[env(safe-area-inset-bottom)]">
      <Navbar />
      <main className="flex flex-col items-center pt-24 pb-12">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
