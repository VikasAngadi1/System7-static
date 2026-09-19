/** @jsxImportSource react */

export default function About() {
  return (
    <section className="w-full py-16">
      <div className="w-full px-4 md:px-10 lg:px-16 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-normal text-black mb-3">
            ABOUT US
          </h2>

          {/* Red underline */}
          <div className="w-16 h-[3px] bg-red-500"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-700 text-sm leading-relaxed space-y-5 text-justify">
          <p>
            Established in May 1984, System 7, Inc. offers systems development
            and programming consulting services mainly to Japanese companies
            doing business in the United States. Our major automobile
            companies are based in the USA.
          </p>

          <p>
            System 7 serves as the front office, handling client engagement and
            project management. Project execution is assigned to either the
            Indo Sakura India team or the Japan team based on scope and
            expertise, ensuring efficient and high-quality delivery.
          </p>
        </div>
      </div>
    </section>
  );
}