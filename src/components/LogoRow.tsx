type Logo = readonly [name: string, file: string];

type LogoRowProps = {
  logos: readonly Logo[];
  reverse?: boolean;
};

export default function LogoRow({ logos, reverse = false }: LogoRowProps) {
  const repeated = [...logos, ...logos];

  return (
    <div className="logo-marquee">
      <div className={`logo-track ${reverse ? "reverse" : ""}`}>
        {repeated.map(([name, file], index) => (
          <div className="client-logo" key={`${file}-${index}`} aria-hidden={index >= logos.length}>
            <img
              src={`/clients/logo-${file}.png`}
              alt={index < logos.length ? `${name} logo` : ""}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
