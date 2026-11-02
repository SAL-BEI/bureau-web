import Image from "next/image";

export default function ProductionProof() {
  return (
    <figure className="production-proof" data-reveal>
      <div className="production-proof-main">
        <Image src="/portfolio/large-format-production.jpg" fill quality={90} sizes="(max-width: 900px) 100vw, 42vw" alt="Large-format production in progress" />
      </div>
      <div className="production-proof-small production-proof-lamination">
        <Image src="/portfolio/lamination-equipment.jpg" fill quality={90} sizes="(max-width: 650px) 50vw, 19vw" alt="Large-format lamination equipment" />
      </div>
      <div className="production-proof-small production-proof-binding">
        <Image src="/portfolio/binding-equipment.jpg" fill quality={90} sizes="(max-width: 650px) 50vw, 19vw" alt="Document binding equipment" />
      </div>
      <figcaption><span>Real production capability</span><strong>Print · laminate · bind</strong></figcaption>
    </figure>
  );
}
