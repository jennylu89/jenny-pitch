import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Differentiators from '../../components/Differentiators';
import Testimonials from '../../components/Testimonials';
import Projects from '../../components/Projects';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import AIProjects from '../../components/AIProjects';
import LLHowIWork from '../../components/ll/LLHowIWork';
import LLSummary from '../../components/ll/LLSummary';
import { getHomeConfig } from '../../data/homeConfigs';

// The section stack below is fixed and identical for every version of this page.
// A job variant only supplies copy. `/for/<slug>` loads src/data/home/<slug>.js.
// `/` has no slug, so it falls back to src/data/home/default.js, which is how the
// fixed headline reaches the root portfolio. Delete default.js and `/` returns to
// the copy hardcoded in the components.
export default function PitchPage({ company }) {
  const { slug } = useParams();
  const c = company || getHomeConfig(slug) || getHomeConfig('default') || {};

  // The value cards render through LLHowIWork, the same icon-tile treatment the company
  // pages use, rather than the older numbered glass cards in Differentiators. Jenny picked
  // that pattern off /philips. Differentiators stays as the fallback for a config that
  // supplies no cards at all.
  const valueCards = c.valueCards && c.valueCards.length
    ? {
        eyebrow: c.valueCardsEyebrow,
        heading: c.valueCardsHeading,
        tiles: c.valueCards.map(v => ({ icon: v.icon, heading: v.title, body: v.description })),
      }
    : null;

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {/* The return path, not the slug. `datadelivers` names two different pages,
          /for/datadelivers and the older /datadelivers, so the slug alone is ambiguous. */}
      <Nav from={slug ? `for/${slug}` : undefined} />
      <main>
        <Hero
          eyebrow={c.heroEyebrow}
          headline={c.heroHeadline}
          body={c.heroBody}
          ctaLabel={c.ctaLabel}
          ctaHref={c.ctaHref}
        />
        {/* Qualification section, the "What you need. What I've done." ask-and-proof rows.
            Only renders when a config supplies it, because it needs a real job description
            to fill the left column. `/` has none, so `/` never shows it.
            See PERSONALIZATION.md for the rules on what goes in here. */}
        {c.qualification && c.qualification.rows?.length > 0 && (
          <LLSummary
            heading={c.qualification.heading}
            intro={c.qualification.intro}
            rows={c.qualification.rows}
          />
        )}
        {valueCards
          ? <LLHowIWork howIWork={valueCards} />
          : <Differentiators />}
        <AIProjects />
        <Projects
          projectIds={c.projectIds}
          eyebrow={c.projectsEyebrow}
          heading={c.projectsHeading}
          intro={c.projectsIntro}
        />
        <Testimonials testimonialIds={c.testimonialIds} />
        <ContactSection from={slug ? `for/${slug}` : undefined} />
      </main>
      <Footer />
    </div>
  );
}
