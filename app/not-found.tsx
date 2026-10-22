import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span>404</span>
      <h1>This page missed the print run.</h1>
      <p>The link may have changed, but the rest of the studio is still here.</p>
      <Link href="/" className="button button-primary button-lg"><ArrowLeft size={18} /> Back home</Link>
    </main>
  );
}
