import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import { ngrok } from './ngrok';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

function ConceptCallout() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
      <Link
        to="/ngrok-concept"
        style={{
          display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none',
          background: 'var(--surface, #fff)', border: '1px solid var(--border, #e7e5ee)',
          borderRadius: 16, padding: '22px 26px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        <span style={{ fontSize: 30, lineHeight: 1, flex: 'none' }}>🛰️</span>
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent, #5b4bda)', marginBottom: 6 }}>
            I already started
          </span>
          <span style={{ display: 'block', fontSize: 17, fontWeight: 700, color: 'var(--text-primary, #14131a)', letterSpacing: '-0.01em', marginBottom: 3 }}>
            I redesigned ngrok's first-run experience before we talked.
          </span>
          <span style={{ display: 'block', fontSize: 14, color: 'var(--text-secondary, #55525e)' }}>
            An interactive concept: localhost to a public URL to first request, in one live moment. Built in React.
          </span>
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent, #5b4bda)', flex: 'none' }}>View concept →</span>
      </Link>
    </div>
  );
}

export default function NgrokPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="ngrok" />
      <LLPageHero companyName={ngrok.name} role={ngrok.role} oneLiner={ngrok.oneLiner} />
      <ConceptCallout />
      <LLSummary heading={ngrok.summaryHeading} rows={ngrok.summaryRows} />
      <LLHowIWork howIWork={ngrok.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'megprime', 'designhub', 'arenalabs']} />
      <LLCloseCta closeText={ngrok.close} from="ngrok" />
    </div>
  );
}
