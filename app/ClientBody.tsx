"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Bersihkan class sisipan ekstensi browser, tapi pertahankan class milik kita
  useEffect(() => {
    document.body.className = "grain font-sans antialiased";
  }, []);

  return <>{children}</>;
}
