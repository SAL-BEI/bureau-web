import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span>404</span>
      <h1>This page missed the print run.</h1>
      <p>The link may have changed or the page does not exist.</p>
      <Link href="/" className="button button-red"><ArrowLeft size={18} /> Back home</Link>
    </main>
  );
}
