import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Moddulo"
      height={90}
      width={0}
      style={{ width: "auto", height: 90 }}
      priority
    />
  );
}
