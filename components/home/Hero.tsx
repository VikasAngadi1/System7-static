// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <section className="w-full h-[90vh] flex">
      
//       {/* LEFT SIDE (WITH BACKGROUND IMAGE) */}
//       <div className="w-1/2 relative flex flex-col justify-center px-12 text-white overflow-hidden">
        
//         {/* BACKGROUND IMAGE */}
//         {/* <Image
//           src="/images/Follow.png"   // 👉 place your gradient/bg image here
//           alt="background"
//           fill
//           className="object-cover"
//           priority
//         /> */}

//         <Image
//   src="/images/Follow.png"
//   alt="background"
//   width={1200}
//   height={900}
//   className="absolute inset-0 w-full h-full object-cover"
//   priority
// />

//         {/* DARK OVERLAY (for readability) */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* CONTENT */}
//         <div className="relative z-10">
          
//           <h1 className="top-heading text-5xl font-normal leading-tight mb-6">
//             SYSTEM CONSULTING & <br /> DEVELOPMENT
//           </h1>

//           <p className="text-gray-300 max-w-md mb-8">
//             We craft unforgettable moments and immersive experiences that captivate
//             audiences and amplify your brand
//           </p>

//           {/* STATS */}
//           <div className="flex gap-10 mb-8">
//             <div>
//               <h3 className="text-xl font-bold">211K+</h3>
//               <p className="text-sm text-gray-300">Satisfied Clients</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold">12+</h3>
//               <p className="text-sm text-gray-300">Members</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold">520+</h3>
//               <p className="text-sm text-gray-300">Project Completed</p>
//             </div>
//           </div>

//           {/* BUTTON */}
//           <button
//             onClick={() => router.push("/contact")}
//             className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 w-fit font-semibold transition"
//           >
//             Get in touch
//           </button>

//         </div>
//       </div>

//       {/* RIGHT SIDE (IMAGE) */}
//       <div className="w-1/2 relative">
//         {/* <Image
//           src="/images/homebanner.png"
//           alt="team"
//           fill
//           className="object-cover"
//           priority
//         /> */}
//         <Image
//   src="/images/homebanner.png"
//   alt="team"
//   width={1200}
//   height={900}
//   className="w-full h-full object-cover"
//   priority
// />
//       </div>

//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//   const router = useRouter();

//   return (
//     <section className="relative w-full min-h-screen overflow-hidden text-white">
//       {/* Background */}
//       <Image
//         src="/images/Follow.png"
//         alt="Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,40,40,0.35),_transparent_55%)]" />

//       {/* Content */}
//       <div className="relative z-10 w-full min-h-screen flex items-center px-[5vw]">
//         <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-16">
          
//           {/* LEFT */}
//           <div className="w-full max-w-[658px]">
//             <h1 className="font-bold text-[52px] leading-[100%] mb-8">
//               System 7, Inc.
//             </h1>

//             <h2 className="font-semibold text-[32px] leading-[100%] text-[#F4A0A0] mb-8">
//               A trusted US IT partner supported by
//               <br />
//               global engineering talent.
//             </h2>

//             <p className="text-[18px] leading-[1.6] text-white/90 max-w-[560px] mb-10">
//               We provide Japanese companies in the U.S. with solutions to
//               address IT talent shortages, optimize development costs, and
//               offer scalable global IT solutions.
//             </p>

//             <button
//               onClick={() => router.push("/contact")}
//               className="bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all duration-300"
//             >
//               Contact Us
//             </button>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="w-full max-w-[520px]">
//             <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[24px] p-6 shadow-2xl">
//               <h3 className="text-[24px] font-bold mb-6">
//                 Global Delivery Model
//               </h3>

//               <div className="bg-white/15 border border-white/10 rounded-[18px] p-5 mb-5">
//                 <h4 className="text-[22px] font-semibold mb-3">
//                   United States
//                 </h4>

//                 <p className="text-[16px] leading-relaxed text-white/85">
//                   We provide project management, bilingual support in Japanese
//                   and English, and client support.
//                 </p>
//               </div>

//               <div className="bg-white/15 border border-white/10 rounded-[18px] p-5">
//                 <h4 className="text-[22px] font-semibold mb-3">
//                   India
//                 </h4>

//                 <p className="text-[16px] leading-relaxed text-white/85">
//                   We provide software development, AI engineering, QA, and a
//                   scalable offshore development system.
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Decorative Circle */}
//       <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] border border-white/10 rounded-full" />
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <Image
        src="/images/Follow.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(180,40,40,0.35),_transparent_55%)]" />

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-[4vw]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[4vw]">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[48%]">

            {/* Heading */}
            <h1 className="font-bold text-[clamp(40px,4vw,52px)] leading-[100%] mb-8">
              System 7, Inc.
            </h1>

            {/* Sub Heading */}
            <h2 className="font-semibold text-[clamp(24px,2.5vw,32px)] leading-[100%] text-[#F4A0A0] mb-8">
              A trusted US IT partner supported by
              <br />
              global engineering talent.
            </h2>

            {/* Description */}
            <p className="text-[18px] leading-[1.6] text-white/90 max-w-[90%] mb-10">
              We provide Japanese companies in the U.S. with solutions to
              address IT talent shortages, optimize development costs, and
              offer scalable global IT solutions.
            </p>

            {/* Button */}
            <button
              onClick={() => router.push("/contact")}
              className="bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all duration-300"
            >
              Contact Us
            </button>

          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[42%]">

            <div className="w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-[24px] p-6 shadow-2xl">

              <h3 className="text-[24px] font-bold mb-6">
                Global Delivery Model
              </h3>

              {/* United States */}
              <div className="bg-white/15 border border-white/10 rounded-[18px] p-5 mb-5">
                <h4 className="text-[22px] font-semibold mb-3">
                  United States
                </h4>

                <p className="text-[16px] leading-relaxed text-white/85">
                  We provide project management, bilingual support in Japanese
                  and English, and client support.
                </p>
              </div>

              {/* India */}
              <div className="bg-white/15 border border-white/10 rounded-[18px] p-5">
                <h4 className="text-[22px] font-semibold mb-3">
                  India
                </h4>

                <p className="text-[16px] leading-relaxed text-white/85">
                  We provide software development, AI engineering, QA, and a
                  scalable offshore development system.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] border border-white/10 rounded-full" />
    </section>
  );
}

