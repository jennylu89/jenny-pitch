import Nav from '../../components/Nav';
import { taxwire } from './taxwire';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function TaxwirePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="taxwire" />
      <LLPageHero companyName={taxwire.name} role={taxwire.role} oneLiner={taxwire.oneLiner} />
      <LLSummary heading={taxwire.summaryHeading} rows={taxwire.summaryRows} />
      <LLHowIWork howIWork={taxwire.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['megprime', 'roadrunner', 'designhub', 'arenalabs']} />
      <LLCloseCta closeText={taxwire.close} from="taxwire" />
    </div>
  );
}
