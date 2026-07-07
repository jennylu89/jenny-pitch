import Nav from '../../components/Nav';
import { instrument } from './instrument';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function InstrumentPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="instrument" />
      <LLPageHero companyName={instrument.name} role={instrument.role} oneLiner={instrument.oneLiner} />
      <LLSummary heading={instrument.summaryHeading} rows={instrument.summaryRows} />
      <LLHowIWork howIWork={instrument.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'arenalabs', 'myperks', 'designhub']} />
      <LLCloseCta closeText={instrument.close} from="instrument" />
    </div>
  );
}
