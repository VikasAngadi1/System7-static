// import Image from "next/image";

// export default function BusinessModel() {
//   return (
//     <section className="w-full py-16">
//       {/* <div className="max-w-7xl mx-auto px-10"> */}
//       <div className="w-full px-4 md:px-10 lg:px-16">
        
//         {/* TITLE */}
//         <div className="mb-12">
//           <h2 className="top-heading text-4xl font-normal text-black mb-3">
//             OUR BUSINESS MODEL
//           </h2>
//           <div className="w-20 h-[3px] bg-red-500"></div>
//         </div>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT: MAP */}
//           <div className="relative w-full h-[250px] md:h-[300px]  overflow-hidden">
//             {/* <Image
//               src="/images/map-2.png" // add your map image here
//               alt="world map"
//               fill
//               className="object-contain object-left"
//             /> */}

//             <Image
//   src="/images/map-2.png"
//   alt="world map"
//   width={800}
//   height={300}
//   className="w-full h-full object-contain object-left"
// />
//           </div>

//           {/* RIGHT: TEXT */}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               USA, Japan, and India
//             </h3>

//             <p className="text-gray-600 leading-relaxed text-sm text-justify">
//               We operate through a globally connected model across the USA,
//               Japan, and India, combining the strengths of each region. Project
//               execution is supported collaboratively across these locations, with
//               India driving cost-effective development and scalability, while
//               Japan ensures high standards of quality and precision. This
//               approach enables us to deliver efficient, reliable, and high-quality
//               solutions.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


export default function BusinessModel() {
  return (
    <section className="w-full py-[80px]">
      <div className="w-full px-[4vw]">
        
        {/* Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[36px] font-bold text-[#222222] leading-[100%] mb-4">
            Global Technology Network
          </h2>

          <p className="text-[18px] text-[#444444] leading-[1.6] whitespace-nowrap">
    System 7 collaborates with affiliated companies and strategic partners across the United States, Japan, and India.
  </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* United States */}
          {/* <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"> */}
          <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">
            <h3 className="text-[24px] font-bold text-[#222222] mb-6">
              United States
            </h3>

            <p className="text-[18px] text-[#444444] leading-[1.5]">
              Client management, bilingual support, consulting, and project
              leadership.
            </p>
          </div>

          {/* Japan */}
          {/* <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"> */}
          <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">
            <h3 className="text-[24px] font-bold text-[#222222] mb-6">
              Japan
            </h3>

            <p className="text-[18px] text-[#444444] leading-[1.5]">
              ERP solutions, manufacturing systems, enterprise software, and
              operational expertise.
            </p>
          </div>

          {/* India */}
          {/* <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"> */}
          <div className="bg-[#F8FAFC] rounded-[24px] px-8 py-12 shadow-[0_4px_15px_rgba(58,58,58,0.13)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(58,58,58,0.18)]">
            <h3 className="text-[24px] font-bold text-[#222222] mb-6">
              India
            </h3>

            <p className="text-[18px] text-[#444444] leading-[1.5]">
              Highly skilled engineering resources supporting development, AI,
              QA, and offshore services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}