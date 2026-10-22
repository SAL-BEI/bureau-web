import Image from "next/image";

type ClientLogo = readonly [name: string, file: string];

type LogoRowProps = {
  logos: readonly ClientLogo[];
  reverse?: boolean;
};

export default function LogoRow({ logos, reverse = false }: LogoRowProps) {
  return (
    <div
      className={`client-logo-row${reverse ? " is-reverse" : ""}`}
      aria-label={reverse ? "More client logos" : "Client logos"}
    >
      <div className="client-logo-track">
        {[false, true].map((duplicate) => (
          <div className="client-logo-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
            {logos.map(([name, file]) => (
              <div className="client-logo" key={`${duplicate ? "copy" : "original"}-${name}`}>
                <Image
                  src={`/clients/logo-${file}.png`}
                  width={221}
                  height={107}
                  sizes="(max-width: 650px) 142px, 176px"
                  alt={duplicate ? "" : name}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
