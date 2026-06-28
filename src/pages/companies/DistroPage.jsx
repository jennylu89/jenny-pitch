import Nav from '../../components/Nav';
import { distro } from './distro';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function DistroPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="distro" />
      <LLPageHero companyName={distro.name} role={distro.role} oneLiner={distro.oneLiner} />
      <LLSummary heading={distro.summaryHeading} rows={distro.summaryRows} />
      <LLHowIWork howIWork={distro.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['megprime', 'arenalabs', 'designhub', 'myperks']} />
      <LLCloseCta closeText={distro.close} from="distro" />
    </div>
  );
}
