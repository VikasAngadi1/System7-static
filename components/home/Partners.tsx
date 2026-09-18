"use client";

import Image from "next/image";

const partners = [
  { name: "Indo-Sakura", logo: "/images/company-partners-1.png" },
  { name: "DXMinds", logo: "/images/company-partners-2.png" },
  { name: "NASA", logo: "/images/company-partners-3.png" },
  { name: "Audi", logo: "/images/company-partners-4.png" },
  { name: "Castlight", logo: "/images/company-partners-5.png" },
  { name: "NASA2", logo: "/images/company-partners-6.png" },
];

export default function Partners() {
  return (
    <section className="w-full py-16 overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-10"> */}
      <div className="w-full px-4 md:px-10 lg:px-16">
        
        {/* TITLE */}
        <div className="mb-12">
          <h2 className="top-heading text-4xl font-normal text-black mb-3">
            PARTNERS
          </h2>
          <div className="w-16 h-[3px] bg-red-500"></div>
        </div>

        {/* MOVING LOGOS */}
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-16 items-center">

            {/* duplicate for smooth loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="inline-block w-[120px] h-[60px] relative flex-shrink-0 opacity-80 hover:opacity-100 transition"
              >
                {/* <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="120px"
                  className="object-contain"
                /> */}
                <Image
  src={partner.logo}
  alt={partner.name}
  width={120}
  height={60}
  loading="lazy"
  className="w-full h-full object-contain"
/>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}