import Head from "next/head";
import Header from "../components/Header/Header";
import AboutSection from "../components/Section/AboutSection";
import ContactSection from "../components/Section/ContactSection";
import FooterSection from "../components/Section/FooterSection";
import HomeSection from "../components/Section/HomeSection";
import PageNotFound from "../components/Section/PageNotFound";
import ServicesSection from "../components/Section/ServicesSection";
import WhyUsSection from "../components/Section/WhyUsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jyothi Reddy Trust</title>
        <meta
          name="keywords"
          content="Jyothi Reddy Trust Old Age Home Child Home"
        />
      </Head>
      <Header />
      {/* <div id="section1">
        <PageNotFound />
      </div> */}
      <div id="section1">
        <HomeSection />
      </div>
      <div id="section2">
        <AboutSection />
      </div>
      <div id="section3">
        <WhyUsSection />
      </div>
      <div id="section4">
        <ServicesSection />
      </div>
      <div id="section5">
        <ContactSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
}
