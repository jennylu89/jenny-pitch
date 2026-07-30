import Nav from '../../components/Nav';
import { tribeai } from './tribeai';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function TribeAiPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="tribeai" />
      <LLPageHero companyName={tribeai.name} role={tribeai.role} oneLiner={tribeai.oneLiner} />
      <LLSummary heading={tribeai.summaryHeading} rows={tribeai.summaryRows} />
      <LLSelectedProjects projectIds={['arenalabs', 'megprime', 'designhub']} />
      <LLCloseCta closeText={tribeai.close} from="tribeai" />
    </div>
  );
}
