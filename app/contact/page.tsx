"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [errors, setErrors] = useState<any>({});

const handleChange = (e: any) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  // remove error while typing
  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};

const validate = () => {
  let newErrors: any = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Enter valid 10-digit number";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e: any) => {
  e.preventDefault();

  if (!validate()) return;

  e.target.submit(); // submit only if valid
};
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
      Contact
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 leading-[1.4] text-[clamp(16px,2vw,24px)] max-w-[90%]">
      Empowering enterprises with intelligent document automation since day one.
    </p>

  </div>
</div>

{/*     
     <section className="w-full py-20">
 
  <div className="w-full px-6 md:px-12 grid md:grid-cols-2 gap-10">
    
  
    <div className="text-gray-800 text-sm space-y-8">
      
    
      <div>
        <h3 className="font-semibold mb-2">Indian Address:</h3>
        <p className="text-gray-600 leading-relaxed">
          32, 1st cross, 3rd Main, Kanakapura Main Rd, near HDFC bank,
          JC Industrial Area, Yelachenahalli, Bengaluru, Karnataka 560111
        </p>
        <p
  onClick={() =>
    window.open(
      "https://share.google/PBbGxQHkNn14EDsNy",
      "_blank"
    )
  }
  className="mt-2 underline cursor-pointer text-gray-700"
>
  View on Map
</p>
      </div>

      
      <div>
        <h3 className="font-semibold mb-2">Tokyo, Japan</h3>
        <p className="text-gray-600 leading-relaxed">
          6-F Tokyo Genboku Kaikan, Toyo 5-30-13, Koto-Ku, Tokyo 135-0016
        </p>
      
        <p
  onClick={() =>
    window.open(
      "https://www.google.com/maps/dir//Indo-Sakura+Software+Japan%E3%88%B1,+%E6%9D%B1%E4%BA%AC%E5%8E%9F%E6%9C%A8%E4%BC%9A%E9%A4%A8+%EF%BC%96F+5+Chome-30-13+Toyo,+Koto+City,+Tokyo+135-0016,+Japan/@12.9016715,77.5594494,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188900e1970001:0x4ba8bec46872f517!2m2!1d139.8157503!2d35.6736153",
      "_blank"
    )
  }
  className="mt-2 underline cursor-pointer text-gray-700"
>
  View on Map
</p>
      </div>

   
      <div>
  <h3 className="font-semibold mb-3">Follow us</h3>

  <div className="flex gap-4">
    
    <Image
      src="/images/facebook.svg"
      alt="facebook"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-70 transition"
    />

    <Image
      src="/images/instagram.svg"
      alt="instagram"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-70 transition"
    />

    <Image
      src="/images/pinterest.svg"
      alt="pinterest"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-70 transition"
    />

    <Image
      src="/images/twitter.svg"
      alt="twitter"
      width={20}
      height={20}
      className="cursor-pointer hover:opacity-70 transition"
    />

  </div>
</div>
    </div>


    <div className=" p-8 rounded-md shadow-sm">
  
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    onSubmit={handleSubmit}
    className="space-y-6"
  >
    
   
    <input
      type="hidden"
      name="access_key"
      value="d4645288-302d-4fc3-afed-0611e973bfac"
    />

   
    <div>
      <label className="block text-sm mb-2">Name</label>
     <input
  type="text"
  name="name"
  value={formData.name}
  onChange={(e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // only letters + space
    setFormData({ ...formData, name: value });
  }}
  className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
/>
      {errors.name && (
  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
)}
    </div>

   
    <div>
      <label className="block text-sm mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
  onChange={handleChange}
        className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
      />
      {errors.email && (
  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
)}
    </div>

    
    <div>
      <label className="block text-sm mb-2">Phone number</label>
      <input
  type="text"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    setFormData({ ...formData, phone: value });
  }}
  maxLength={10}
  className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
/>
      {errors.phone && (
  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
)}
    </div>

   
    <div>
      <label className="block text-sm mb-2">Message</label>
      <textarea
        name="message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none"
      ></textarea>
      {errors.message && (
  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
)}
    </div>

   
    <button
      type="submit"
      className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition"
    >
      Submit
    </button>

  </form>

</div>

  </div>
</section> */}

<section className="w-full py-20">
  <div className="w-full px-6 md:px-12 grid md:grid-cols-2 gap-10">

    {/* LEFT SIDE */}
    <div className="space-y-8">

      {/* INDIA */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#222222] mb-2">
          Indian Address:
        </h3>

        <p className="text-[18px] text-gray-600 leading-relaxed">
          32, 1st cross, 3rd Main, Kanakapura Main Rd, near HDFC bank,
          JC Industrial Area, Yelachenahalli, Bengaluru, Karnataka 560111
        </p>

        <p
          onClick={() =>
            window.open(
              "https://share.google/PBbGxQHkNn14EDsNy",
              "_blank"
            )
          }
          className="mt-3 text-[18px] underline cursor-pointer text-gray-700 hover:text-black transition"
        >
          View on Map
        </p>
      </div>

      {/* JAPAN */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#222222] mb-2">
          Tokyo, Japan
        </h3>

        <p className="text-[18px] text-gray-600 leading-relaxed">
          6-F Tokyo Genboku Kaikan, Toyo 5-30-13, Koto-Ku, Tokyo 135-0016
        </p>

        <p
          onClick={() =>
            window.open(
              "https://www.google.com/maps/dir//Indo-Sakura+Software+Japan%E3%88%B1,+%E6%9D%B1%E4%BA%AC%E5%8E%9F%E6%9C%A8%E4%BC%9A%E9%A4%A8+%EF%BC%96F+5+Chome-30-13+Toyo,+Koto+City,+Tokyo+135-0016,+Japan/@12.9016715,77.5594494,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188900e1970001:0x4ba8bec46872f517!2m2!1d139.8157503!2d35.6736153",
              "_blank"
            )
          }
          className="mt-3 text-[18px] underline cursor-pointer text-gray-700 hover:text-black transition"
        >
          View on Map
        </p>
      </div>

      {/* SOCIAL */}
      <div>
        <h3 className="text-[20px] font-semibold text-[#222222] mb-4">
          Follow us
        </h3>

        <div className="flex gap-5">
          <Image
            src="/images/facebook.svg"
            alt="facebook"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />

          <Image
            src="/images/instagram.svg"
            alt="instagram"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />

          <Image
            src="/images/pinterest.svg"
            alt="pinterest"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />

          <Image
            src="/images/twitter.svg"
            alt="twitter"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="p-8 rounded-md shadow-sm">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* ACCESS KEY */}
        <input
          type="hidden"
          name="access_key"
          value="d4645288-302d-4fc3-afed-0611e973bfac"
        />

        {/* NAME */}
        <div>
          <label className="block text-[18px] font-medium mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setFormData({ ...formData, name: value });
            }}
            className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none text-[18px]"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-[18px] font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none text-[18px]"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-[18px] font-medium mb-2">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: value });
            }}
            maxLength={10}
            className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none text-[18px]"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-[18px] font-medium mb-2">
            Message
          </label>

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-md px-4 py-3 outline-none text-[18px]"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-red-600 text-white text-[20px] font-medium px-8 py-3 hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</section>

    </div>
  );
}