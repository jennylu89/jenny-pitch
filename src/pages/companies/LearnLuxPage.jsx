import Nav from '../../components/Nav';
import { learnlux } from './learnlux';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function LearnLuxPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="learnlux" />
      <LLPageHero companyName={learnlux.name} role={learnlux.role} oneLiner={learnlux.oneLiner} />
      <LLSummary heading={learnlux.summaryHeading} rows={learnlux.summaryRows} />
      <LLSelectedProjects projectIds={['megprime', 'roadrunner', 'designhub']} />
      <LLCloseCta closeText={learnlux.close} from="learnlux" />
    </div>
  );
}
