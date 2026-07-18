import Nav from '../../components/Nav';
import { learnlux } from './learnlux';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLJdSection from '../../components/ll/LLJdSection';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function LearnLuxPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="learnlux" />
      <LLPageHero companyName={learnlux.name} role={learnlux.role} oneLiner={learnlux.oneLiner} />
      <LLSummary heading={learnlux.summaryHeading} rows={learnlux.summaryRows} />

      {learnlux.sections.map((section, i) => (
        <LLJdSection key={section.id} section={section} index={i} />
      ))}

      <LLHowIWork howIWork={learnlux.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['megprime', 'roadrunner', 'designhub']} />
      <LLCloseCta closeText={learnlux.close} from="learnlux" />
    </div>
  );
}
