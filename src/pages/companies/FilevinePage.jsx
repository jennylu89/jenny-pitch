import Nav from '../../components/Nav';
import { filevine } from './filevine';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function FilevinePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="filevine" />
      <LLPageHero companyName={filevine.name} role={filevine.role} oneLiner={filevine.oneLiner} />
      <LLSummary heading={filevine.summaryHeading} rows={filevine.summaryRows} />
      <LLSelectedProjects projectIds={['arenalabs', 'roadrunner', 'designhub']} />
      <LLCloseCta closeText={filevine.close} from="filevine" />
    </div>
  );
}
