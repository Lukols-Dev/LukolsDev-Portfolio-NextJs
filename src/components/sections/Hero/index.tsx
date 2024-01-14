import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen relative flex overflow-hidden">
      <Image
        className="object-cover"
        src="/assets/hero-background.jpg"
        fill
        alt="Hero Background"
      />
      {/*TODO: Social Icons */}
      {/* <div>
        <p></p>
      </div> */}
    </section>
  );
};

export default HeroSection;
