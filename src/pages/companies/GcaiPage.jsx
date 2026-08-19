import Nav from '../../components/Nav';
import { gcai } from './gcai';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function GcaiPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="gcai" />
      <LLPageHero companyName={gcai.name} role={gcai.role} oneLiner={gcai.oneLiner} />
      <LLSummary heading={gcai.summaryHeading} rows={gcai.summaryRows} />
      <LLSelectedProjects projectIds={['roadrunner', 'arenalabs', 'designhub']} />
      <LLCloseCta closeText={gcai.close} from="gcai" />
    </div>
  );
}
