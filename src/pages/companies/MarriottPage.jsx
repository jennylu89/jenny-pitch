import Nav from '../../components/Nav';
import { marriott } from './marriott';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function MarriottPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="marriott" />
      <LLPageHero companyName={marriott.name} role={marriott.role} oneLiner={marriott.oneLiner} />
      <LLSummary heading={marriott.summaryHeading} rows={marriott.summaryRows} askLabel="" proofLabel="The proof" />
      <LLHowIWork howIWork={marriott.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['myperks', 'navigation', 'arenalabs', 'designhub']} />
      <LLCloseCta closeText={marriott.close} from="marriott" />
    </div>
  );
}
