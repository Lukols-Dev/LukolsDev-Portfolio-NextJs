import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 font-semibold">
      <Image
        priority
        alt="Logo lukols.com"
        width={200}
        height={200}
        src="/assets/logo.svg"
        className="h-12 w-fit object-cover object-center"
      />
    </Link>
  );
};

export default Logo;
