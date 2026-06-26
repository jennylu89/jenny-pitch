import Nav from '../../components/Nav';
import { ngrok } from './ngrok';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function NgrokPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="ngrok" />
      <LLPageHero companyName={ngrok.name} role={ngrok.role} oneLiner={ngrok.oneLiner} />
      <LLSummary heading={ngrok.summaryHeading} rows={ngrok.summaryRows} />
      <LLHowIWork howIWork={ngrok.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'megprime', 'designhub', 'arenalabs']} />
      <LLCloseCta closeText={ngrok.close} from="ngrok" />
    </div>
  );
}
