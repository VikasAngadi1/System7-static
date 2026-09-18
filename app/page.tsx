import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import BusinessModel from "@/components/home/BusinessModel";
import Services from "@/components/home/Services";
import Partners from "@/components/home/Partners";
import Solutions from "@/components/home/Solutions";
import CTA from "@/components/home/CTA";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BusinessModel />
      <Services />
      <Partners />
      <Solutions />
      {/* <CTA /> */}
      <ContactForm />
    </>
  );
}