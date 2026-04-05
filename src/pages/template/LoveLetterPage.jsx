import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LLHero from '../../components/ll/LLHero';
import LLWhyMe from '../../components/ll/LLWhyMe';
import LLBento from '../../components/ll/LLBento';
import ContactSection from '../../components/ContactSection';
import LLSplitSection from '../../components/ll/LLSplitSection';

export default function LoveLetterPage({ company }) {
  const sections = company.sections || [];

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main>
        <LLHero company={company} />
        <LLWhyMe company={company} />
        <LLBento company={company} />

        {sections.map((section, i) => (
          <LLSplitSection
            key={section.id}
            section={section}
            flip={i % 2 !== 0}
          />
        ))}

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
