"use client";

import Image from "next/image";

export default function CaseStudyPage() {
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
      Case Study
    </h1>

    {/* Paragraph */}
    <p className="text-white/90 leading-[1.4] text-[clamp(16px,2vw,24px)] max-w-[90%]">
      Empowering enterprises with intelligent document automation since day one.
    </p>

  </div>
</div>

      <section className="w-full py-20">
        {/* <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-10"> */}
        <div className="w-full px-6 md:px-12 grid md:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <div className="bg-white border border-gray-200 p-6">
            {/* IMAGE */}
            <div className="relative w-full h-[220px] mb-6 overflow-hidden">
              <Image
                src="/images/casestudy-1.png"
                alt="case study"
                width={500}
                height={220}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Driving Innovation at Every Step
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Indo-Sakura implemented a cutting-edge generative AI solution for
              a leading enterprise aiming to enhance product development and
              customer engagement by leveraging advanced AI models, we empowered
              the organization to automate content creation, optimize marketing
              strategies, and improve personalized customer experiences our
              approach not only boosted operational efficiency but also unlocked
              new opportunities for business growth.
            </p>

            {/* TECH STACK */}
            <p className="text-blue-600 text-sm">
              Python, TensorFlow, NLP, Machine Learning, Generative Models,
              Cloud Computing, Data Analytics
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-gray-200 p-6">
            {/* IMAGE */}
            <div className="relative w-full h-[220px] mb-6">
              <Image
                src="/images/casestudy-2.png"
                alt="case study"
                width={500}
                height={220}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Securing Success at Every Level
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Indo-Sakura delivered a robust cybersecurity solution to a global
              organization facing rising cyber threats. With advanced threat
              detection, 24/7 monitoring, and AI-driven response systems, we
              safeguarded their digital assets and ensured compliance with
              international security standards. Our approach empowered the
              client to operate with confidence in a secure environment.
            </p>

            {/* TECH STACK */}
            <p className="text-blue-600 text-sm">
              Palo Alto, Fortinet, CrowdStrike, Splunk, Okta, Qualys, Prisma
              Cloud, Netskope
            </p>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="w-full pb-20">
        {/* <div className="max-w-7xl mx-auto px-10"> */}
        <div className="w-full px-6 md:px-12">
          <div className="bg-white border border-gray-200 p-6">
            {/* IMAGE */}
            <div className="relative w-full h-[220px] mb-6">
              <Image
                src="/images/casestudy-3.png"
                alt="explore"
                width={500}
                height={220}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3">
              Explore Our Case Studies
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover how leading organizations leverage technology to overcome
              challenges and drive success. Browse through case studies on Gen
              AI, Cybersecurity, SRM integration with SAP, SIEM Tool Solutions
              and more. Learn how cutting-edge technology transforms industries
              and improves efficiency. Dive into real-world examples of
              innovation and success
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
