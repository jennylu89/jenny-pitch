import Nav from '../../components/Nav';
import { gatherai } from './gatherai';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLJdSection from '../../components/ll/LLJdSection';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function GatherAiPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="gatherai" />
      <LLPageHero companyName={gatherai.name} role={gatherai.role} oneLiner={gatherai.oneLiner} />
      <LLSummary heading={gatherai.summaryHeading} rows={gatherai.summaryRows} />

      {gatherai.sections.map((section, i) => (
        <LLJdSection key={section.id} section={section} index={i} />
      ))}

      <LLHowIWork howIWork={gatherai.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'curbside', 'designhub']} />
      <LLCloseCta closeText={gatherai.close} from="gatherai" />
    </div>
  );
}
