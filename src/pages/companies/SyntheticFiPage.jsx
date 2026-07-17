import Nav from '../../components/Nav';
import { syntheticfi } from './syntheticfi';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function SyntheticFiPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="syntheticfi" />
      <LLPageHero companyName={syntheticfi.name} role={syntheticfi.role} oneLiner={syntheticfi.oneLiner} />
      <LLSummary heading={syntheticfi.summaryHeading} rows={syntheticfi.summaryRows} />
      <LLHowIWork howIWork={syntheticfi.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['megprime', 'roadrunner', 'myperks', 'designhub']} />
      <LLCloseCta closeText={syntheticfi.close} from="syntheticfi" />
    </div>
  );
}
