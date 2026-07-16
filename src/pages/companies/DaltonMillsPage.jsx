import Nav from '../../components/Nav';
import { daltonmills } from './daltonmills';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function DaltonMillsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="daltonmills" />
      <LLPageHero companyName={daltonmills.name} role={daltonmills.role} oneLiner={daltonmills.oneLiner} />
      <LLSummary heading={daltonmills.summaryHeading} rows={daltonmills.summaryRows} />
      <LLHowIWork howIWork={daltonmills.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'arenalabs', 'designhub', 'megprime']} />
      <LLCloseCta closeText={daltonmills.close} from="daltonmills" />
    </div>
  );
}
