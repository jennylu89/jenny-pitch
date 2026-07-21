import Nav from '../../components/Nav';
import { transect } from './transect';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function TransectPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="transect" />
      <LLPageHero companyName={transect.name} role={transect.role} oneLiner={transect.oneLiner} />
      <LLSummary heading={transect.summaryHeading} rows={transect.summaryRows} />
      <LLSelectedProjects projectIds={['arenalabs', 'roadrunner', 'megprime', 'designhub']} />
      <LLCloseCta closeText={transect.close} from="transect" />
    </div>
  );
}
