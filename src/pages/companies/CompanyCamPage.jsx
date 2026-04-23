import Nav from '../../components/Nav';
import { companycam } from './companycam';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function CompanyCamPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="companycam" />
      <LLPageHero companyName={companycam.name} role={companycam.role} oneLiner={companycam.oneLiner} />
      <LLSummary heading={companycam.summaryHeading} rows={companycam.summaryRows} />
      <LLHowIWork howIWork={companycam.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'roadrunner', 'designhub', 'myperks']} />
      <LLCloseCta closeText={companycam.close} from="companycam" />
    </div>
  );
}
