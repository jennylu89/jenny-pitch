import Nav from '../../components/Nav';
import { allocate } from './allocate';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function AllocatePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="allocate" />
      <LLPageHero companyName={allocate.name} role={allocate.role} oneLiner={allocate.oneLiner} />
      <LLSummary heading={allocate.summaryHeading} rows={allocate.summaryRows} />
      <LLSelectedProjects projectIds={['megprime', 'roadrunner', 'designhub']} />
      <LLCloseCta closeText={allocate.close} from="allocate" />
    </div>
  );
}
