import Nav from '../../components/Nav';
import { arborxr } from './arborxr';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function ArborXRPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="arborxr" />
      <LLPageHero companyName={arborxr.name} role={arborxr.role} oneLiner={arborxr.oneLiner} />
      <LLSummary heading={arborxr.summaryHeading} rows={arborxr.summaryRows} />
      <LLHowIWork howIWork={arborxr.howIWork} />
      <AIProjects />
      {/* One deep project (Roadrunner, above) plus ONE builder proof. Their JD: "We'd rather
          see one project walked through deeply than ten listed shallowly." Design Hub stays
          because it carries the video and answers "show us the raw stuff and how fast you got
          it polished." Arena and myPerks are cited in the ask/proof rows instead. */}
      <LLSelectedProjects projectIds={['roadrunner', 'designhub']} />
      <LLCloseCta closeText={arborxr.close} from="arborxr" />
    </div>
  );
}
