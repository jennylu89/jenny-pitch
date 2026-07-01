import Nav from '../../components/Nav';
import { adam } from './adam';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function AdamPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="adam" />
      <LLPageHero companyName={adam.name} role={adam.role} oneLiner={adam.oneLiner} />
      <LLSummary heading={adam.summaryHeading} rows={adam.summaryRows} />
      <LLHowIWork howIWork={adam.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'designhub', 'roadrunner', 'megprime']} />
      <LLCloseCta closeText={adam.close} from="adam" />
    </div>
  );
}
