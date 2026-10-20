import Link from "next/link";
import { products } from "@/data/site";

export default function ProductIntent() {
  return (
    <nav className="product-intent" aria-label="Browse by product">
      <p>What do you need to make?</p>
      <div>
        {products.map((product) => (
          <Link
            key={product.slug}
            href={product.service === "aviation-printing" ? "/aviation-printing" : `/services/${product.service}`}
          >
            {product.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
