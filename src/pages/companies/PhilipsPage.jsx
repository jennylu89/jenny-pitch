import Nav from '../../components/Nav';
import { philips } from './philips';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function PhilipsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="philips" />
      <LLPageHero companyName={philips.name} role={philips.role} oneLiner={philips.oneLiner} />
      <LLSummary heading={philips.summaryHeading} rows={philips.summaryRows} />
      <LLHowIWork howIWork={philips.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'designhub', 'roadrunner', 'megprime']} />
      <LLCloseCta closeText={philips.close} from="philips" />
    </div>
  );
}
