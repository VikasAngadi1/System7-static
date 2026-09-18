// "use client";

// import { useState } from "react";

// type ErrorsType = {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
// };

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   // const [errors, setErrors] = useState({});
//   const [errors, setErrors] = useState<ErrorsType>({});

//   // const handleChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value,
//   //   });

//   //   setErrors({
//   //     ...errors,
//   //     [e.target.name]: "",
//   //   });
//   // };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });

//   setErrors({
//     ...errors,
//     [e.target.name]: "",
//   });
// };

//   const validate = () => {
//     // let newErrors = {};
//     let newErrors: ErrorsType = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^[0-9]{10}$/.test(formData.phone)) {
//       newErrors.phone = "Enter valid 10-digit number";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   if (!validate()) return;

//   //   e.target.submit(); // submit only if valid
//   // };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (!validate()) return;

//   (e.target as HTMLFormElement).submit();
// };

//   return (
//     <section className="w-full pt-7 pb-10">
//       <div className="w-full px-6 md:px-12 grid md:grid-cols-2 gap-10 items-start">
        
//         {/* LEFT TEXT */}
//         <div className="flex items-center h-full">
//           <h2 className="top-heading text-4xl md:text-5xl font-normal leading-tight text-black">
//             LET'S <br /> CONNECT <br /> TOGETHER
//           </h2>
//         </div>

//         {/* RIGHT FORM */}
//         <form
//           action="https://api.web3forms.com/submit"
//           method="POST"
//           onSubmit={handleSubmit}
//           className="w-full space-y-6"
//         >
//           <input
//             type="hidden"
//             name="access_key"
//             value="d4645288-302d-4fc3-afed-0611e973bfac"
//           />

//           {/* NAME */}
//           <div>
//             <label className="text-sm text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={(e) => {
//                 const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
//                 setFormData({ ...formData, name: value });
//               }}
//               className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* EMAIL */}
//           <div>
//             <label className="text-sm text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* PHONE */}
//           <div>
//             <label className="text-sm text-gray-700">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={(e) => {
//                 const value = e.target.value.replace(/\D/g, "");
//                 setFormData({ ...formData, phone: value });
//               }}
//               maxLength={10}
//               className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//             )}
//           </div>

//           {/* SUBJECT */}
//           <div>
//             <label className="text-sm text-gray-700">Subject</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 bg-transparent outline-none py-2"
//             />
//           </div>

//           {/* MESSAGE */}
//           <div>
//             <label className="text-sm text-gray-700">Message</label>
//             <textarea
//               name="message"
//               rows={3}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border-b border-gray-300 bg-transparent outline-none py-2 resize-none"
//             />
//             {errors.message && (
//               <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//             )}
//           </div>

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="bg-[#E14142] text-white px-6 py-3 mt-4 hover:bg-red-600 transition"
//           >
//             Get in Touch
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  
  return (
    <section className="w-full bg-[#5B0809] py-24">
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <h2 className="text-5xl md:text-4xl font-bold text-white leading-tight mb-10">
          We will work together to realize your global IT strategy.
        </h2>

        {/* SUBTEXT */}
        {/* <p className="text-white/90 text-xl md:text-1xl leading-relaxed mb-14">
         Please feel free to contact us regarding IT strategy, offshore development, AI implementation, and more.
        </p> */}

        <p className="text-white/90 text-xl md:text-[18px] leading-relaxed mb-14 whitespace-nowrap">
  Please feel free to contact us regarding IT strategy, offshore development, AI implementation, and more.
</p>

        {/* BUTTON */}
        {/* <button className="bg-white text-black text-xl font-semibold px-10 py-5 rounded-2xl hover:bg-gray-200 transition duration-300 shadow-lg">
          Contact Us
        </button> */}

         <button
      onClick={() => router.push("/contact")}
      className="bg-white text-black text-xl font-semibold px-5 py-3 rounded-2xl hover:bg-gray-200 transition duration-300 shadow-lg"
    >
      Contact Us
    </button>

      </div>
    </section>
  );
}