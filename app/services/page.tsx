"use client";

import { useRouter } from "next/navigation";
import ContactForm from "@/components/home/ContactForm";
import CTA from "@/components/home/CTA";
import Image from "next/image";

const services = [
  {
    title: "AI-Driven Development",
    desc: "The potential of AI development is not determined by the number of member skills. AI will change the common sense.",
    image: "/images/services-1.png",
  },
  // {
  //   title: "AI-Driven Modernization",
  //   desc: "Leverage cutting-edge AI to analyze, plan, and execute legacy system modernization with unprecedented speed.",
  //   image: "/images/services-2.png",
  // },
  {
    title: "Enterprise Applications",
    desc: "We build powerful, integrated, future-proof enterprise systems that become the backbone of your digital transformation.",
    image: "/images/services-3.png",
  },
  {
    title: "Custom Software Development",
    desc: "We build powerful, scalable, and beautiful software tailored exactly to your business — no compromises.",
    image: "/images/services-4.png",
  },
];

export default function ServicesPage() {

  const router = useRouter();
  return (
    <div className="w-full">
      
     
{/* HERO / BANNER */}

<div
  className="relative w-full h-[220px] sm:h-[240px] md:h-[251px] overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/about-1.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(180,0,0,0.45),_transparent_35%),linear-gradient(to_right,_rgba(10,10,20,0.85),_rgba(40,10,10,0.65),_rgba(10,10,20,0.85))]" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

    {/* Heading */}
    <h1 className="text-white font-bold leading-[100%] mb-4 text-[clamp(36px,4vw,52px)]">
      Services
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 leading-[1.4] text-[clamp(16px,2vw,24px)] max-w-[90%]">
      Empowering enterprises with intelligent document automation since day one.
    </p>

  </div>
</div>

      {/* <section className="w-full  py-[90px]">
  
  <div className="max-w-[1700px] mx-auto px-6">
    
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-[#F8FAFC] rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition duration-300"
        >
          
        <div className="relative w-full h-[300px] overflow-hidden flex-shrink-0">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover object-center"
  />
</div>

         
          <div className="px-8 py-7">
            
            <h3 className="text-[20px] font-semibold text-[#222] leading-tight mb-6">
              {item.title}
            </h3>

            <p className="text-[18px] text-[#555] leading-[1.5]">
              {item.desc}
            </p>

          </div>
        </div>
      ))}
    </div>

  </div>
</section> */}

<section className="w-full py-[80px]">
  <div className="w-full px-[4vw]">

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {services.map((item, index) => (
        <div
          key={index}
          className="
            bg-[#F8FAFC]
            rounded-[14px]
            overflow-hidden
            shadow-[0_4px_15px_rgba(0,0,0,0.13)]
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            flex
            flex-col
            h-full
          "
        >
          {/* IMAGE */}
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col flex-1 p-8">

            {/* TITLE */}
            <h3 className="text-[20px] font-semibold text-[#222222] leading-[1.3] mb-5">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[18px] text-[#555555] leading-[1.6]">
              {item.desc}
            </p>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="w-full py-[60px]">
  <div className="w-full px-[4vw]">

    {/* TITLE */}
    <div className="text-center mb-[60px]">
      <h2 className="text-[36px] font-bold text-[#222222] leading-[100%]">
        Industry we serve
      </h2>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {[
        {
          title: "Healthcare",
          desc: "Streamlined healthcare IT solutions to improve patient care and operations",
          icon: "/images/service-icon-1.svg",
        },
        {
          title: "Finance",
          desc: "Secure, compliant ICT services to optimize financial systems and data management",
          icon: "/images/service-icon-2.svg",
        },
        {
          title: "Education",
          desc: "Innovative educational technology to enhance learning experiences and operational efficiency",
          icon: "/images/service-icon-3.svg",
        },
        {
          title: "Manufacturing",
          desc: "Smart manufacturing solutions to optimize production, logistics, and supply chain",
          icon: "/images/service-icon-4.svg",
        },
        {
          title: "Retail",
          desc: "E-commerce, point-of-sale systems, and customer experience technologies for retail businesses",
          icon: "/images/service-icon-5.svg",
        },
        {
          title: "Government",
          desc: "Reliable ICT infrastructure to support government operations and public services",
          icon: "/images/service-icon-6.svg",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            bg-[#F8FAFC]
            rounded-[14px]
            p-8
            shadow-[0_4px_15px_rgba(0,0,0,0.13)]
            hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            min-h-[180px]
          "
        >
          {/* ICON */}
          <div className="mb-5">
            <img
              src={item.icon}
              alt={item.title}
              className="w-9 h-9 object-contain"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-[20px] font-semibold text-[#222222] mb-3 leading-[1.2]">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-[16px] text-[#444444] leading-[1.5]">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<CTA/>

<section className="w-full py-[80px] bg-[#F8FAFC]">
  <div className="w-full px-[4vw]">

    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_0.9fr] gap-[30px] items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-[360px]">

        <h2 className="text-[36px] font-bold text-[#222222] leading-[1.1] mb-[70px]">
          Our Work Across
          <br />
          Industries
        </h2>

        <p className="text-[16px] text-[#444444] leading-[1.8] mb-[32px]">
          We partner with organizations across various sectors to deliver
          innovative digital solutions. Explore how our expertise helps
          businesses solve real-world challenges and achieve measurable
          results.
        </p>

        <button
          onClick={() => router.push("/contact")}
          className="
            bg-[#F03232]
            text-white
            text-[16px]
            font-semibold
            px-8
            py-3
            hover:bg-[#d92b2b]
            transition-all
          "
        >
          Get in touch
        </button>

      </div>

      {/* IMAGE 1 */}
      <div className="relative w-full h-[330px] lg:h-[420px] rounded-[14px] overflow-hidden">
        <Image
          src="/images/work-1.png"
          alt="Industry Work"
          fill
          className="object-cover"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="relative w-full h-[330px] lg:h-[420px] rounded-[14px] overflow-hidden">
        <Image
          src="/images/work-2.png"
          alt="Industry Work"
          fill
          className="object-cover"
        />
      </div>

    </div>

  </div>
</section>

{/* <ContactForm/> */}

    </div>
  );
}