"use client";

import CTA from "@/components/home/CTA";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SolutionPage() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      question: "How long until we deliver your first blog post?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>

      {/* HERO SECTION */}
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
      Solutions
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 leading-[1.4] text-[clamp(16px,2vw,24px)] max-w-[90%]">
      Empowering enterprises with intelligent document automation since day one.
    </p>

  </div>
</div>

      {/* SOLUTIONS SECTION */}
      <section className="w-full bg-[#F1F5F9] py-[80px] mt-15 mb-15">
        
        <div className="max-w-[1500px] mx-auto px-6">
          
          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-[#222]">
              Solutions
            </h2>
          </div>

          {/* CARDS */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

  {/* CARD 1 */}
  <div className="bg-[#f8f8f8] rounded-[24px] px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition">

    <h3 className="text-[24px] font-semibold text-[#222] mb-6">
      SourceBytes.AI
    </h3>

    <p className="text-[18px] text-[#444] leading-[1.7] mb-10">
      SourceBytes.AI is an AI-powered Enterprise Knowledge Discovery Platform
      that centralises data from URLs, APIs, S3, Google Drive, and FTP -
      enabling intelligent document processing, real-time analytics, and
      smarter decision-making across your organisation.
    </p>

    <Link
      href="https://sourcebytes.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 text-[#8B0000] text-[18px] font-semibold hover:opacity-80 transition"
    >
      View more

      <Image
        src="/images/arrow-2.png"
        alt="arrow"
        width={18}
        height={18}
      />
    </Link>

  </div>

  {/* CARD 2 */}
  <div className="bg-[#f8f8f8] rounded-[24px] px-8 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition">

    <h3 className="text-[24px] font-semibold text-[#222] mb-6">
      BlueprintEditor.AI
    </h3>

    <p className="text-[18px] text-[#444] leading-[1.7] mb-10">
      BlueprintEditor.AI is an AI-powered document intelligence platform that
      centralises and governs business-critical documents - automating
      workflows, enforcing compliance, and streamlining everything from
      contract management to policy enforcement across your organisation.
    </p>

    <Link
      href="https://blueprinteditor.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 text-[#8B0000] text-[18px] font-semibold hover:opacity-80 transition"
    >
      View more

      <Image
        src="/images/arrow-2.png"
        alt="arrow"
        width={18}
        height={18}
      />
    </Link>

  </div>

</div>
        </div>
      </section>

      <CTA/>

      {/* FAQ SECTION */}
<section className="w-full bg-[#f5f5f5] py-[100px] border-t-[6px] border-[#7a0000]">
  <div className="max-w-[1500px] mx-auto px-6">
    
    {/* TITLE */}
    <div className="text-center mb-20">
      <h2 className="text-[52px] md:text-[36px] font-bold text-[#333]">
        Frequently Asked Questions
      </h2>
    </div>

    {/* FAQ GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT COLUMN */}
      <div className="space-y-10">
        {faqs
          .slice(0, Math.ceil(faqs.length / 2))
          .map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#f8f8f8] rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full p-8 flex items-start gap-6 text-left"
                >
                  <span
                    className={`text-[36px] leading-none shrink-0 ${
                      isOpen
                        ? "text-[#8B0000]"
                        : "text-[#3d3555]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-semibold text-[#3d3555]">
                      {faq.question}
                    </h3>

                    {isOpen && (
                      <p className="mt-6 text-[14px] text-[#8c8c8c] leading-[1.9]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-10">
        {faqs
          .slice(Math.ceil(faqs.length / 2))
          .map((faq, index) => {
            const actualIndex =
              index + Math.ceil(faqs.length / 2);

            const isOpen = openIndex === actualIndex;

            return (
              <div
                key={actualIndex}
                className="bg-[#f8f8f8] rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : actualIndex
                    )
                  }
                  className="w-full p-8 flex items-start gap-6 text-left"
                >
                  <span
                    className={`text-[36px] leading-none shrink-0 ${
                      isOpen
                        ? "text-[#8B0000]"
                        : "text-[#3d3555]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-[18px] font-semibold text-[#3d3555]">
                      {faq.question}
                    </h3>

                    {isOpen && (
                      <p className="mt-6 text-[14px] text-[#8c8c8c] leading-[1.9]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
      </div>

    </div>
  </div>
</section>

    </div>
  );
}