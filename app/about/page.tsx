"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/home/ContactForm";


const services = [
  {
    title: "GenAI Services",
    desc: "Generative AI enables real-time insights from diverse data sources through simple interactions. It boosts productivity, enhances decision-making, and drives innovation.",
    icon: "/images/ai.svg",
    slug: "genai-services",
  },
  {
    title: "Application Development",
    desc: "We build high-performance mobile and web applications with seamless user experiences. Our solutions are secure, responsive, and feature-rich, keeping your business connected across all devices.",
    icon: "/images/app.svg",
    slug: "application-development",
  },
  {
    title: "BI & Data Analysis",
    desc: "Business Intelligence (BI) and Data Analysis services help you make smarter, data-driven decisions. We use advanced analytics and AI tools to uncover key insights, transforming raw data into clear reports and dashboards that drive performance and growth.",
    icon: "/images/data.svg",
    slug: "bi-data-analysis",
  },
  {
    title: "Cloud Services",
    desc: "Our cloud services accelerate digital transformation with scalable, secure solutions. From infrastructure to cloud applications, we help improve efficiency, enhance collaboration, and reduce IT costs.",
    icon: "/images/cloud.svg",
    slug: "cloud-services",
  },
  {
    title: "ERP Services",
    desc: "We offer ERP services to streamline operations and improve efficiency. Our solutions integrate core business functions into one system, helping reduce complexity, boost productivity, and deliver actionable insights.",
    icon: "/images/erp.svg",
    slug: "erp-services",
  },
  {
    title: "Software Development",
    desc: "Our team delivers cutting-edge software development services to keep your business ahead. We build scalable, secure, and high-performance solutions tailored to your unique needs.",
    icon: "/images/software.svg",
    slug: "software-development",
  },
];


export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="w-full">
      
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
      About System 7, Inc.
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 leading-[1.4] text-[clamp(16px,2vw,24px)] max-w-[90%]">
      Empowering enterprises with intelligent document automation since day one.
    </p>

  </div>
</div>

      {/* OVERVIEW SECTION */}
<section className="w-full py-[90px] bg-[#F8FAFC]">
  
  <div className="max-w-[1400px] mx-auto px-6 text-center">
    
    {/* TITLE */}
    <h2 className="text-[36px] font-bold text-[#222] leading-none mb-12">
      Overview
    </h2>

    {/* DESCRIPTION */}
    <p className="text-[18px] text-[#2f2f2f] leading-[1.9] font-normal max-w-[1250px] mx-auto">
      We empower businesses globally through India's top engineering talent,
      delivering innovative IT solutions across AI, cybersecurity, and
      cloud bridging Indian and Japanese business cultures to drive digital
      transformation and long-term competitive growth.
    </p>

  </div>
</section>

{/* GLOBAL TECHNOLOGY NETWORK */}
<section className="w-full py-[80px] ">
  <div className="w-full px-[4vw]">

    {/* Heading */}

 <div className="text-center mb-[50px]">

  <h2 className="text-[36px] font-bold text-[#222222] leading-none mb-[6px]">
    Global Technology Network
  </h2>

  <p className="text-[16px] text-[#444444] leading-none">
    Empowering Growth through Innovation and Collaboration
  </p>

</div>
    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

      {/* President */}
      <div className="bg-[#F8FAFC] rounded-[14px] px-8 py-10 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">

        <h3 className="text-[20px] font-bold text-[#222222] mb-6">
          President
        </h3>

        <p className="text-[18px] text-[#444444] leading-[1.6]">
          Shigemori Kawaguchi
        </p>

      </div>

      {/* Head Office */}
      <div className="bg-[#F8FAFC] rounded-[14px] px-8 py-10 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">

        <h3 className="text-[20px] font-bold text-[#222222] mb-6">
          Head Office
        </h3>

        <p className="text-[18px] text-[#444444] leading-[1.7]">
          5443 Luis Dr.
          <br />
          Agoura Hills, CA 91301
          <br />
          Phone: 818-207-4825
        </p>

      </div>

      {/* Affiliated Company */}
      <div className="bg-[#F8FAFC] rounded-[14px] px-8 py-10 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">

        <h3 className="text-[20px] font-bold text-[#222222] mb-6">
          Affiliated Company
        </h3>

        <p className="text-[18px] text-[#444444] leading-[1.7]">
          1 Indian company
          <br />
          6 Japanese companies
          <br />
          1 USA company
        </p>

      </div>

    </div>

  </div>
</section>

 <section className="w-full py-[20px] mb-10">

  <div className="w-full">

    <div className="grid grid-cols-1 lg:grid-cols-[2.1fr_0.9fr] gap-0 items-stretch">

      {/* LEFT */}
      <div className="bg-black text-white min-h-[392px] px-[40px] py-[20px] flex flex-col justify-center">

        <h2 className="text-[36px] font-bold leading-none">
          Vision & Mission
        </h2>

        <div className="w-[40px] h-[2px] bg-[#E00000] mt-4 mb-6"></div>

        <p className="text-[16px] leading-[1.55] max-w-[820px] text-white">
          Our vision is to empower businesses by leveraging highly skilled Indian IT engineers to
          strengthen IT capabilities and support digital transformation while fostering competitiveness
          and sustainable growth, and our mission is to provide innovative, flexible IT solutions through a deep
          understanding of both Indian and Japanese cultures, aiming to enhance business capabilities
          with cutting-edge technologies such as AI, cybersecurity, and cloud services, ensuring long-term
          success and helping clients navigate digital challenges while achieving operational excellence
          and global competitiveness.
        </p>

      </div>

      {/* RIGHT */}
      <div className="bg-[#F8FAFC] min-h-[392px] px-[40px] flex flex-col justify-center">

        <div className="space-y-10">

          <div>
            <h3 className="text-[20px] font-bold text-[#222] mb-1">
              Objective
            </h3>
            <p className="text-[16px] text-[#555]">
              Simplify data and decisions.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-bold text-[#222] mb-1">
              Industry
            </h3>
            <p className="text-[16px] text-[#555]">
              Tailored solutions for industries.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-bold text-[#222] mb-1">
              Challenges
            </h3>
            <p className="text-[16px] text-[#555]">
              Overcome unstructured data inefficiencies.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     <CTA />

    {/* <section className="w-full py-[90px]">
  
  <div className="max-w-[1600px] mx-auto px-6">
    
  
    <div className="text-center mb-20">
      <h2 className="text-[36px] font-bold text-[#222]">
        Services we offer
      </h2>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-[#F8FAFC] rounded-[26px] px-10 py-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition duration-300"
        >
          
        
          <div className="mb-8">
            <Image
              src={item.icon}
              alt={item.title}
              width={42}
              height={42}
              className="object-contain"
            />
          </div>

        
          <h3 className="text-[24px] font-semibold text-[#222] leading-tight mb-8">
            {item.title}
          </h3>

         
          <p className="text-[18px] text-[#444] leading-[1.6] mb-12">
            {item.desc}
          </p>

        
          <button
            onClick={() => router.push(`/solutions/${item.slug}`)}
            className="flex items-center gap-4 text-[#8B0000] text-[20px] font-semibold hover:opacity-80 transition"
          >
            View more

            <img
              src="/images/arrow.svg"
              alt="arrow"
              className=""
            />
          </button>

        </div>
      ))}
    </div>
  </div>
</section> */}

 <section className="w-full py-[80px]">
      <div className="w-full px-[4vw]">

        {/* TITLE */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[36px] font-bold text-[#222222] leading-[100%]">
            Services we offer
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[28px] justify-items-center">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[420px]
                h-[413px]
                bg-[#F8FAFC]
                rounded-[14px]
                pt-[52px]
                pb-[52px]
                px-[53px]
                shadow-[0_4px_15px_rgba(0,0,0,0.13)]
                flex
                flex-col
                transition-all
                duration-300
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)]
              "
            >
              {/* ICON */}
              <div className="mb-[20px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[20px] font-medium text-[#222222] leading-[1.3] mb-[18px]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[16px] text-[#444444] leading-[1.35] flex-1">
                {item.desc}
              </p>

              {/* VIEW MORE */}
              <button
                onClick={() => router.push(`/solutions/${item.slug}`)}
                className="flex items-center gap-2 text-[#8B0000] text-[20px] font-semibold mt-[24px]"
              >
                View more

                <Image
                  src="/images/arrow-2.png"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
     
{/* <ContactForm /> */}
    </div>
  );
}