import Nav from '../../components/Nav';
import { glacian } from './glacian';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function GlacianPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="glacian" />
      <LLPageHero companyName={glacian.name} role={glacian.role} oneLiner={glacian.oneLiner} />
      <LLSummary heading={glacian.summaryHeading} rows={glacian.summaryRows} />
      <AIProjects />
      <LLHowIWork howIWork={glacian.howIWork} />
      <LLSelectedProjects projectIds={['roadrunner', 'arenalabs', 'designhub', 'navigation']} />
      <LLCloseCta closeText={glacian.close} from="glacian" />
    </div>
  );
}
