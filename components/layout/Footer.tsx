// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//  <footer className="w-full bg-black text-white py-14">
//   {/* <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-6 gap-10"> */}
//   <div className="w-full px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
    
//     {/* LOGO */}
//     <div>
//       <h2 className="text-red-500 font-extrabold text-lg mb-3">
//         SYSTEM 7, INC.
//       </h2>
//       <p className="text-sm text-gray-400">
//         We add value through our industry leading competence in offering a
//         complete range of high impact solutions
//       </p>
//     </div>

//     {/* LOCATION */}
//     <div>
//       <h3 className="font-semibold mb-3">Location</h3>
//       <p className="text-sm text-gray-400 leading-relaxed">
//         Japan Address: <br />
//         6-F Tokyo Genbuku Kaikan, Toyo 5-30-13, <br />
//         Koto-Ku, Tokyo 135-0016
//       </p>

//       <p className="text-sm text-gray-400 mt-4 leading-relaxed">
//         Indian Address: <br />
//         32, 1st cross, 3rd Main, <br />
//         Bengaluru, Karnataka 560111
//       </p>
//     </div>

//     {/* CONTACT */}
//     <div>
//       <h3 className="font-semibold mb-3">Contact</h3>
//       <p className="text-sm text-gray-400">
//         Tel: +91-96-86391210 <br />
//         Email: info.india@indosakura.com
//       </p>

//       <p className="text-sm text-gray-400 mt-4">
//         Tel: 03-5633-7776 <br />
//         Email: info.japan@indosakura.com
//       </p>
//     </div>

//    {/* QUICK LINKS */}
// <div>
//   <h3 className="font-semibold mb-3">Quick Links</h3>
//   <ul className="text-sm text-gray-400 space-y-2">
//     <li>
//       <Link href="/" className="hover:text-white transition">
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link href="/about" className="hover:text-white transition">
//         About Us
//       </Link>
//     </li>
//     <li>
//       <Link href="/services" className="hover:text-white transition">
//         Services
//       </Link>
//     </li>
//     <li>
//       {/* <Link href="/solutions" className="hover:text-white transition">
//         Solutions
//       </Link> */}
//       <Link href="/#solutions" className="hover:text-white transition">
//   Solutions
// </Link>
//     </li>
//     <li>
//       <Link href="/contact" className="hover:text-white transition">
//         Contact Us
//       </Link>
//     </li>
//   </ul>
// </div>

//     {/* SERVICES */}
//     <div>
//       <h3 className="font-semibold mb-3">Services</h3>
//       {/* <ul className="text-sm text-gray-400 space-y-2">
//         <li>ICT Services</li>
//         <li>Infrastructure Management Services</li>
//         <li>Consulting Services</li>
//       </ul> */}
//       <ul className="text-sm text-gray-400 space-y-2">
//   <li>
//     <Link href="/#services" className="hover:text-white">
//       ICT Services
//     </Link>
//   </li>
//   <li>
//     <Link href="/#services" className="hover:text-white">
//       Infrastructure Management Services
//     </Link>
//   </li>
//   <li>
//     <Link href="/#services" className="hover:text-white">
//       Consulting Services
//     </Link>
//   </li>
// </ul>
//     </div>

//      {/* FOLLOW US BELOW */}
//   <div className="max-w-7xl mx-auto px-10">
//     <h3 className="font-semibold mb-3">Follow Us</h3>
//     <ul className="text-sm text-gray-400 space-y-2">
//       <li>LinkedIn</li>
//       <li>Instagram</li>
//     </ul>
//   </div>

//   </div>

 

//   {/* COPYRIGHT */}
//   <div className="text-center text-gray-500 text-sm mt-10">
//     Copyright © 2026 System7
//   </div>
// </footer>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white ">
      
      <div className="w-full px-8 md:px-14 lg:px-16 py-12">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">
          
          {/* LOGO + TEXT */}
          <div className="lg:col-span-2">
            
            {/* LOGO */}
           <div className="mb-6">
  <Image
    src="/images/footer-logo.png"
    alt="System 7 Logo"
    width={335}
    height={45}
    className="object-contain"
  />
</div>

            {/* JAPANESE TEXT */}
            <p className="text-lg text-white leading-snug mb-8">
              米国拠点 グローバルITソリューションパートナー
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-sm">
              We add value through our industry leading competence in offering a
              complete range of high impact solutions
            </p>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">
              Location
            </h3>

            <div className="text-gray-300 text-[15px] leading-snug space-y-5">
              
              <div>
                <p className="mb-1">Japan Address:</p>

                <p>
                  6-F Tokyo Genboku
                  <br />
                  Kaikan, Toyo 5-30-13,
                  <br />
                  Koto-Ku, Tokyo 135-0016
                </p>
              </div>

              {/* <div>
                <p className="mb-1">Indian Address:</p>

                <p>
                  32, 1st cross, 3rd Main,
                  <br />
                  Kanakapura Main Rd, near
                  <br />
                  HDFC bank, JC Industrial
                  <br />
                  Area, Yelachenahalli,
                  <br />
                  Bengaluru, Karnataka
                  <br />
                  560111
                </p>
              </div> */}
            </div>
          </div>

          {/* CONTACT */}
          {/* <div>
            <h3 className="text-[20px] font-semibold mb-5">
              Contact
            </h3>

            <div className="text-gray-300 text-[15px] leading-snug space-y-5">
              
              <div>
                <p>Tel :</p>
                <p>+91-96-86391210</p>

                <p>Email:</p>
                <p>info.india@indosakura.com</p>
              </div>

              <div>
                <p>Tel:</p>
                <p>03-5633-7776</p>

                <p>Email:</p>
                <p>info.japan@indosakura.com</p>
              </div>
            </div>
          </div> */}

          {/* CONTACT */}
<div className="min-w-0">
  <h3 className="text-[20px] font-semibold mb-5">
    Contact
  </h3>

  <div className="text-gray-300 text-[15px] leading-relaxed space-y-6">

    <div>
      <p>Tel :</p>
      <p>+91-96-86391210</p>

      <p className="mt-2">Email:</p>

      <a
        href="mailto:info.india@indosakura.com"
        className="block break-all hover:text-white transition"
      >
        info.india@indosakura.com
      </a>
    </div>

    <div>
      <p>Tel:</p>
      <p>03-5633-7776</p>

      <p className="mt-2">Email:</p>

      <a
        href="mailto:info.japan@indosakura.com"
        className="block break-all hover:text-white transition"
      >
        info.japan@indosakura.com
      </a>
    </div>

  </div>
</div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-[15px]">
              
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-white transition"
                >
                  Solutions
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300 text-[15px]">
              
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  ICT Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Infrastructure Management Services
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition"
                >
                  Consulting Services
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">
              Follow Us
            </h3>

            <ul className="space-y-4 text-gray-300 text-[15px]">
              
              <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-400 text-[15px] mt-14">
          © 2026 System 7, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}