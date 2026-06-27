import Nav from '../../components/Nav';
import { niche } from './niche';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function NichePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="niche" />
      <LLPageHero companyName={niche.name} role={niche.role} oneLiner={niche.oneLiner} />
      <LLSummary heading={niche.summaryHeading} rows={niche.summaryRows} />
      <LLHowIWork howIWork={niche.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'designhub', 'navigation', 'myperks']} />
      <LLCloseCta closeText={niche.close} from="niche" />
    </div>
  );
}
