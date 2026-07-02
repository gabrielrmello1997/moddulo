import Image from "next/image";

interface LogoProps {
  small?: boolean;
}

export default function Logo({ small = false }: LogoProps) {
  const height = small ? 28 : 90;

  return (
    <Image
      src="/logo1 (Copy).svg"
      alt="Moddulo"
      height={height}
      width={0}
      style={{ width: "auto", height: height }}
      priority
    />
  );
}
