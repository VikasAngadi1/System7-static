// // "use client";

// // import Image from "next/image";
// // import { useRouter } from "next/navigation";

// // export default function Solutions() {
// //   const router = useRouter();
// //   return (
// //     <section className="w-full py-16">
// //       {/* <div className="max-w-7xl mx-auto px-10"> */}
// //       {/* <div className="w-full px-4 md:px-10 lg:px-16"> */}
// //       <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        
// //         {/* TITLE */}
// //         <div className="mb-12">
// //           <h2 className="top-heading text-4xl font-normal text-black mb-3">
// //             SOLUTIONS
// //           </h2>
// //           <div className="w-16 h-[3px] bg-red-500"></div>
// //         </div>

// //         {/* CONTENT */}
// //         <div className="grid md:grid-cols-2 gap-12 items-center">
          
// //           {/* LEFT */}
// //           <div>
// //             <h3 className="text-2xl font-bold text-black mb-4">
// //               SourceBytes.AI
// //             </h3>

// //             <p className="text-lg font-medium text-gray-800 mb-4">
// //               Unified GenAI Platform Powering Enterprise Intelligence
// //             </p>

// //             <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
// //               SourceBytes.AI is a powerful Enterprise Knowledge Discovery Platform
// //               built to help organizations manage and access their data more efficiently.
// //               It connects to multiple sources like URLs, APIs, S3, Google Drive, and FTP,
// //               allowing you to centralize knowledge from across your enterprise. With
// //               advanced AI capabilities, SourceBytes.AI enables intelligent document
// //               processing, data extraction, and real-time analytics, empowering businesses
// //               to make informed decisions and drive innovation.
// //             </p>

// //             {/* BUTTON */}
// //             {/* <button className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition">
// //               View more
// //             </button> */}
// //           <button
// //   onClick={() => window.open("https://sourcebytes.ai/", "_blank")}
// //   className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition"
// // >
// //   View more
// // </button>
// //           </div>

// //           {/* RIGHT IMAGE */}
// //           <div className="relative w-full h-[300px] md:h-[350px]">
// //             {/* <Image
// //               src="/images/solution.png" // add your image here
// //               alt="solution"
// //               fill
// //               sizes="(max-width: 768px) 100vw, 50vw"
// //               className="object-contain"
// //             /> */}
// //             <Image
// //   src="/images/solution.png"
// //   alt="solution"
// //   width={600}
// //   height={350}
// //   className="w-full h-full object-contain"
// // />
// //           </div>

// //         </div>

// //           {/* SECOND BLOCK (YOUR NEW ONE) */}
// //         <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          
// //           {/* LEFT IMAGE */}
// //           <div className="relative w-full h-[300px] md:h-[350px]">
// //             {/* <Image
// //               src="/images/solution-2.png"
// //               alt="solution 2"
// //               fill
// //               className="object-contain"
// //             /> */}
// //             <Image
// //   src="/images/solution-2.png"
// //   alt="solution 2"
// //   width={600}
// //   height={350}
// //   className="w-full h-full object-contain"
// // />
// //           </div>

// //           {/* RIGHT TEXT */}
// //           <div>
// //             <h3 className="text-2xl font-bold text-black mb-4">
// //               BlueprintEditor.AI
// //             </h3>

// //             <p className="text-lg font-medium text-gray-800 mb-4">
// //               Digital Blueprint Management System With AI-Powered Document Control And Workflow Automation
// //             </p>

// //             <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
// //               BlueprintEditor.AI helps organizations centralize, govern, and automate
// //               business-critical documents with intelligent processing, workflow automation,
// //               and full compliance support. From contract management to policy enforcement,
// //               BlueprintEditor.AI ensures accuracy, efficiency, and enterprise-wide document intelligence.
// //             </p>

// //             {/* <button className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition">
// //               View more
// //             </button> */}
// //             <button
// //   onClick={() => window.open("https://blueprinteditor.ai/", "_blank")}
// //   className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition"
// // >
// //   View more
// // </button>
// //           </div>

// //         </div>

// //       </div>

     

    
// //     </section>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function Solutions() {
//   const router = useRouter();

//   return (
//     <section id="solutions" className="w-full py-16">
      
//       {/* ✅ FIX: full-width container (no side gaps on zoom) */}
//       <div className="w-full px-6 md:px-12 lg:px-20">
        
//         {/* TITLE */}
//         <div className="mb-12">
//           <h2 className="top-heading text-4xl font-normal text-black mb-3">
//             SOLUTIONS
//           </h2>
//           <div className="w-16 h-[3px] bg-red-500"></div>
//         </div>

//         {/* FIRST BLOCK */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
          
//           {/* LEFT TEXT */}
//           <div className="max-w-xl">
//             <h3 className="text-2xl font-bold text-black mb-4">
//               SourceBytes.AI
//             </h3>

//             <p className="text-lg font-medium text-gray-800 mb-4">
//               Unified GenAI Platform Powering Enterprise Intelligence
//             </p>

//             <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
//               SourceBytes.AI is a powerful Enterprise Knowledge Discovery Platform
//               built to help organizations manage and access their data more efficiently.
//               It connects to multiple sources like URLs, APIs, S3, Google Drive, and FTP,
//               allowing you to centralize knowledge from across your enterprise. With
//               advanced AI capabilities, SourceBytes.AI enables intelligent document
//               processing, data extraction, and real-time analytics, empowering businesses
//               to make informed decisions and drive innovation.
//             </p>

//             <button
//               onClick={() => window.open("https://sourcebytes.ai/", "_blank")}
//               className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition"
//             >
//               View more
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="w-full flex justify-center md:justify-end">
//             <Image
//               src="/images/solution.png"
//               alt="solution"
//               width={600}
//               height={350}
//               className="object-contain"
//             />
//           </div>

//         </div>

//         {/* SECOND BLOCK */}
//         <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          
//           {/* LEFT IMAGE */}
//           <div className="w-full flex justify-center md:justify-start">
//             <Image
//               src="/images/solution-2.png"
//               alt="solution 2"
//               width={600}
//               height={350}
//               className="object-contain"
//             />
//           </div>

//           {/* RIGHT TEXT */}
//           <div className="max-w-xl">
//             <h3 className="text-2xl font-bold text-black mb-4">
//               BlueprintEditor.AI
//             </h3>

//             <p className="text-lg font-medium text-gray-800 mb-4">
//               Digital Blueprint Management System With AI-Powered Document Control And Workflow Automation
//             </p>

//             <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
//               BlueprintEditor.AI helps organizations centralize, govern, and automate
//               business-critical documents with intelligent processing, workflow automation,
//               and full compliance support. From contract management to policy enforcement,
//               BlueprintEditor.AI ensures accuracy, efficiency, and enterprise-wide document intelligence.
//             </p>

//             <button
//               onClick={() => window.open("https://blueprinteditor.ai/", "_blank")}
//               className="border border-red-500 text-red-500 px-6 py-2 hover:bg-red-500 hover:text-white transition"
//             >
//               View more
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// } 

export default function MessageSection() {
  return (
    <section className="w-full py-[80px]">
     <div className="w-full flex justify-center">
  <div className="w-[1084px] min-h-[306px] bg-[#F8FAFC] rounded-[25px] px-[32px] py-[32px] shadow-[0_4px_15px_rgba(58,58,58,0.13)]">

    {/* Title */}
    <h2 className="text-[36px] font-bold text-[#222222] text-center mb-[26px]">
      Representative Message
    </h2>

    {/* Paragraph 1 */}
    <p className="text-[18px] text-[#444444] leading-[1.8] mb-[26px]">
      Since 1984, System 7 has been committed to supporting Japanese
      companies operating in the United States through reliable technology
      solutions and long-term partnerships.
    </p>

    {/* Paragraph 2 */}
    <p className="text-[18px] text-[#444444] leading-[1.8]">
      By combining U.S.-based management, Japanese business understanding,
      and global engineering talent, we provide scalable and cost-effective
      IT solutions for modern businesses.
    </p>

  </div>
</div>
    </section>
  );
}