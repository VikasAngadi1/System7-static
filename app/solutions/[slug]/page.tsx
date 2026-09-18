import Image from "next/image";

const servicesData: any = {
  "genai-services": {
    title: "GENAI SERVICES",
    description:
      "Generative AI leverages advanced technologies to transform enterprise knowledge discovery, allowing organizations to seamlessly interact with diverse data formats. It empowers businesses to obtain real-time, accurate responses to user queries, whether through text or voice-based interactions. By enhancing data accessibility and simplifying information retrieval, Generative AI supports a wide range of file types, including PDFs, MP3s, CSVs, and more, ensuring comprehensive knowledge discovery across various data sources. This capability allows businesses to quickly access critical information and make informed decisions with ease. In addition to improving decision-making, generative AI streamlines operations and boosts productivity by automating tasks, enhancing customer interactions, and driving innovation. It facilitates personalized customer experiences, generates creative content, and enables predictive analytics, ensuring that businesses can stay ahead of trends and market demands. With continuous optimization and robust monitoring, Generative AI helps organizations remain agile and competitive in today’s fast-paced, data-driven landscape.",
    image: "/images/gen-ai.png",
  },
  "application-development": {
    title: "APPLICATION DEVELOPMENT",
    description:
      "Application Development software in an IT company is crucial for solving specific business challenges through tailored solutions that address the unique needs of various industries. These software applications are designed to optimize business operations, enhance user experiences, and ensure seamless integration with existing systems. IT companies often build custom applications, such as enterprise resource planning (ERP) systems, customer relationship management (CRM) tools, and industry-specific software solutions, to help organizations streamline their processes and improve efficiency. In addition to custom-built solutions, IT companies also work with off-the-shelf applications that can be integrated into a client’s infrastructure to solve immediate challenges. Whether developing mobile applications, web apps, or cloud-based solutions, application software empowers businesses to improve collaboration, drive innovation, and deliver high-quality services. ",
    image: "/images/gen-ai.png",
  },
  "bi-data-analysis": {
    title: "BI & DATA ANALYSIS",
    description:
      "BI (Business Intelligence) and Data Analysis are powerful tools that help businesses turn raw data into meaningful insights for informed decision-making. BI refers to the technologies, tools, and practices used to collect, analyze, and present business data in an organized and actionable way. Data analysis, on the other hand, focuses on examining datasets to identify patterns, trends, and opportunities that drive growth and efficiency. In an IT company, BI and Data Analysis services provide businesses with advanced tools to monitor performance, predict trends, and uncover hidden opportunities by leveraging dashboards, reports, and real-time analytics, organizations can gain a deeper understanding of their operations, customer behaviors, and market dynamics. These insights empower businesses to optimize processes, enhance customer experiences, and make strategic decisions with confidence. Whether it’s predictive analytics, performance tracking, or data visualization, BI and Data Analysis ensure businesses stay competitive by transforming complex data into actionable strategies that fuel growth and innovation.",
    image: "/images/gen-ai.png",
  },
  "cloud-services": {
    title: "CLOUD SERVICES",
    description:
      "Cloud services encompass a wide array of computing resources and solutions delivered over the internet, offering businesses the ability to access, store, and manage data remotely. These services include cloud storage, which provides secure, scalable storage solutions that can be accessed from anywhere, and cloud computing, enabling organizations to run applications, process data, and utilize computing power without the need for on-site hardware. Cloud infrastructure services offer flexible, scalable IT resources, such as servers, networking, and storage, on a pay-as-you-go basis, eliminating the need for costly physical infrastructure.Cloud-based applications, such as customer relationship management (CRM), enterprise resource planning (ERP) systems, and collaboration tools, allow organizations to streamline operations and improve productivity. Cloud security services ensure that data is protected through encryption, authentication, and continuous monitoring, while cloud backup and disaster recovery services safeguard against data loss and ensure business continuity in case of unexpected disruptions.",
    image: "/images/gen-ai.png",
  },
  "erp-services": {
    title: "ERP SERVICES",
    description:
      "Software development is the process of designing, creating, testing, and maintaining software applications to meet specific business needs or solve particular problems. It involves a series of stages, including planning, coding, testing, deployment, and ongoing maintenance, to ensure the software performs effectively and reliably. From mobile apps and web platforms to enterprise-level solutions, software development enables businesses to enhance operational efficiency, streamline processes, and provide seamless experiences for their customers. By utilizing a variety of programming languages, frameworks, and tools, software developers build customized applications that address unique challenges, improve productivity, and drive innovation.",
    image: "/images/gen-ai.png",
  },
  "software-development": {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "ERP (Enterprise Resource Planning) services encompass a comprehensive suite of solutions aimed at helping businesses implement, integrate, and maintain robust ERP systems. At Indo-Sakura Software Japan, we specialize in delivering ERP services that optimize and streamline business operations, enhance productivity, and ensure seamless management of critical business processes. Our expert team works closely with you to understand your unique business requirements, helping you select, implement, and tailor the right ERP system to drive growth and improve efficiency from the initial consultation to post-implementation support, our ERP services are designed to offer end-to-end support throughout your ERP journey. We assist with system selection, customization, and integration with your existing infrastructure, ensuring that your ERP solution is aligned with your strategic goals and operational needs.",
    image: "/images/gen-ai.png",
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("Received slug:", slug);

  const service =
    servicesData[slug] || {
      title: "SERVICE",
      description: "Coming soon...",
      image: "/images/default-banner.jpg",
    };

  return (
    <div>
     
    {/* HERO / BANNER */}
<div
  className="relative w-full h-[220px] md:h-[260px] overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${service.image})`,
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* RED + DARK GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(180,0,0,0.45),_transparent_35%),linear-gradient(to_right,_rgba(10,10,20,0.88),_rgba(40,10,10,0.65),_rgba(10,10,20,0.88))]" />

  {/* TITLE */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
    <h1 className="text-white text-4xl md:text-6xl font-extrabold">
      {service.title}
    </h1>
  </div>
</div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gray-600  leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>

    
  );
}