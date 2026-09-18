"use client";

export default function CTA() {
  return (
    <section className="w-full bg-[#5B0809] py-12">
      {/* <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6"> */}
      <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        
        {/* LEFT TEXT */}
        <div className="text-white max-w-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Ready to start project?
          </h2>
          <p className="text-sm text-white/90">
            Enter your email below and our team will reach out with all the
            details you need to start your new project.
          </p>
        </div>

    
          <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex w-full md:w-auto items-center"
    >
      
      {/* 🔑 REQUIRED */}
      <input
        type="hidden"
        name="access_key"
        value="d4645288-302d-4fc3-afed-0611e973bfac"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="px-4 py-3 w-full md:w-[280px] bg-white/40 placeholder-white text-white outline-none"
      />

      <button
        type="submit"
        className="bg-white text-red-500 px-6 py-3 font-medium hover:bg-gray-100 transition"
      >
        Contact
      </button>

    </form>

      </div>
    </section>
  );
}