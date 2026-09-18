// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const services = [
//   {
//     title: "ICT Services",
//     description:
//       "Strategic IT services designed to improve efficiency, reliability, and long-term business growth. End-to-end digital solutions that strengthen, secure, and modernize your technology ecosystem.",
//     image: "/images/service-1.png",
//     bg: "bg-[#111111]",
//     text: "text-white",
//   },
//   {
//     title: "Infrastructure Management Services",
//     description:
//       "Your infrastructure should accelerate your business, not slow it down. We manage and optimize your IT infrastructure to ensure secure, stable, and high-performance operations.",
//     image: "/images/service-2.png",
//     bg: "bg-[#E14142]",
//     text: "text-white",
//   },
//   {
//     title: "Gen AI Services",
//     description:
//       "Leverage cutting-edge AI technologies to transform your software development process, delivering faster results with higher quality.",
//     image: "/images/service-3.png",
//     bg: "bg-[#111111]",
//     text: "text-white",
//   },
// ];

// export default function Services() {
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

  
//   return (
//     <section id="services" className="w-full pb-15">
      
//       {/* BLACK TOP SECTION */}
//       <div className="bg-black py-16">
//         {/* <div className="max-w-7xl mx-auto px-10"> */}
//         <div className="w-full px-6 md:px-12">
          
//           {/* TITLE */}
//           <div className="mb-12">
//             <h2 className="top-heading text-4xl font-normal text-white mb-3">
//               SERVICES
//             </h2>
//             <div className="w-16 h-[3px] bg-red-500 mb-4"></div>

//             <p className="text-gray-300 max-w-3xl text-sm">
//               Innovative services that showcase our expertise in delivering
//               technology-driven success for startups, global enterprises, and
//               Fortune 500 companies
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* CARDS (OVERLAP BOTH BACKGROUNDS) */}
//       {/* <div className="max-w-7xl mx-auto px-10 -mt-24"> */}
//       <div className="w-full px-6 md:px-12 -mt-24">
//         <div className="grid md:grid-cols-3 gap-8">
          
//           {/* {services.map((service, index) => (
//             <div
//               key={index}
//               className={`${service.bg} ${service.text} p-6 shadow-xl transition duration-300 hover:scale-105`}
//             > */}
//     {services.map((service, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//   cardsRef.current[index] = el;
// }}
//               className={`${service.bg} ${service.text} p-6 shadow-xl slide-up`}
//               style={{ animationDelay: `${index * 0.4}s` }}
//             >
//               {/* IMAGE */}
//               <div className="relative w-full h-40 mb-4 overflow-hidden">
//                 {/* <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover"
//                 /> */}
//                 <Image
//   src={service.image}
//   alt={service.title}
//   width={400}
//   height={250}
//   className="w-full h-full object-cover"
// />
//               </div>

//               {/* CONTENT */}
//               <h3 className="text-xl font-semibold mb-3">
//                 {service.title}
//               </h3>

//               <p className="text-sm text-gray-300">
//                 {service.description}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>

//     </section>
//   );
// }


const services = [
  {
    title: "Dedicated Development Team",
    description:
      "Flexible engineering resources tailored to your business needs.",
  },
  {
    title: "Managed IT Services",
    description:
      "Reliable support, maintenance, and operational management.",
  },
  {
    title: "Digital Transformation",
    description:
      "Automation, analytics, and workflow optimization.",
  },
  {
    title: "AI Solution",
    description:
      "AI-driven business process optimization and productivity enhancement.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#F1F5F9] py-[80px]">
      <div className="w-full px-[4vw]">

        {/* Title */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[36px] font-bold text-[#222222] leading-[100%]">
            Service
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-[#F8FAFC]
                rounded-[24px]
                px-8
                py-10
                shadow-[0_4px_15px_rgba(58,58,58,0.13)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-[24px] font-bold text-[#222222] mb-5">
                {service.title}
              </h3>

              {/* <p className="text-[18px] text-[#444444] leading-[1.5] max-w-[480px]">
                {service.description}
              </p> */}
           <p className="text-[18px] text-[#444444] leading-[1.5] whitespace-nowrap overflow-hidden text-ellipsis">
  {service.description}
</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}