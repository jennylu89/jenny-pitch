import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/*
  Self-initiated concept for ngrok: the first-run "localhost to public URL" moment.
  Grounded in ngrok's real getting-started flow (agent install, add-authtoken, ngrok http 8080)
  and the cloud Traffic Inspector. Built by Jenny Lu as a portfolio artifact, in React.
*/

const STEPS = [
  { id: 'idle',    ms: 1500 },
  { id: 'agent',   ms: 1700 },
  { id: 'empty',   ms: 2100 },
  { id: 'live',    ms: 1900 },
  { id: 'request', ms: 1600 },
  { id: 'done',    ms: 0 },
];

export default function NgrokConcept() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (!playing) return;
    if (step >= STEPS.length - 1) return;
    timer.current = setTimeout(() => setStep((s) => s + 1), STEPS[step].ms);
    return () => clearTimeout(timer.current);
  }, [step, playing]);

  const replay = () => { clearTimeout(timer.current); setStep(0); setPlaying(true); };
  const at = (id) => step >= STEPS.findIndex((s) => s.id === id);

  return (
    <div className="ngc">
      <style>{css}</style>

      <div className="ngc-top">
        <Link to="/ngrok" className="ngc-back">← Jenny Lu × ngrok</Link>
        <span className="ngc-tag">Self-initiated concept</span>
      </div>

      <header className="ngc-head">
        <div className="ngc-eyebrow">Concept · First-run experience</div>
        <h1>Make the dashboard follow the terminal.</h1>
        <p className="ngc-dek">
          ngrok's promise is one line: localhost to a public URL. But the first run is 5 to 6
          context switches between browser and terminal, an OS-branching install, and a dead end
          if nothing is listening on the port yet. This concept turns that checklist into one live,
          guided moment, all the way to the first request landing in the inspector.
        </p>
      </header>

      <section className="ngc-insight">
        <div className="ngc-insight-k">The insight</div>
        <p>
          The browser already knows everything the terminal just did. The agent reports in the
          second it connects. So the dashboard should stop asking you to click <em>Next</em> and
          start reflecting reality: agent connected, endpoint live, first request received.
        </p>
      </section>

      {/* ---- the live demo ---- */}
      <section className="ngc-demo">
        <div className="ngc-demo-bar">
          <div className="ngc-steps">
            {['Connect agent', 'Start endpoint', 'See traffic'].map((label, i) => {
              const ranges = [['agent'], ['live'], ['request']];
              const active = ranges[i].some(at);
              return (
                <div key={label} className={`ngc-stepdot ${active ? 'on' : ''}`}>
                  <span className="dot" /> {label}
                </div>
              );
            })}
          </div>
          <button className="ngc-replay" onClick={replay}>↺ Replay</button>
        </div>

        <div className="ngc-split">
          {/* terminal */}
          <div className="ngc-term">
            <div className="ngc-term-bar">
              <span className="tdot r" /><span className="tdot y" /><span className="tdot g" />
              <span className="ngc-term-title">zsh · jenny@laptop</span>
            </div>
            <div className="ngc-term-body">
              <Line show={at('agent')}><span className="p">$</span> ngrok config add-authtoken <span className="dim">2f8K•••9aQ</span></Line>
              <Line show={at('agent')} cls="ok">Authtoken saved to ~/.config/ngrok/ngrok.yml</Line>
              <Line show={at('live')}><span className="p">$</span> ngrok http 8080</Line>
              {at('live') && (
                <div className="ngc-console">
                  <div><span className="ck">Session Status</span><span className="cv on">online</span></div>
                  <div><span className="ck">Account</span><span className="cv">Jenny Lu (Pro)</span></div>
                  <div><span className="ck">Forwarding</span><span className="cv url">https://bright-otter-1a2b.ngrok.app</span></div>
                  <div><span className="ck">Latency</span><span className="cv">21ms</span></div>
                </div>
              )}
              {at('request') && (
                <div className="ngc-console req">
                  <div className="creqhead">HTTP Requests</div>
                  <div><span className="m get">GET</span> /<span className="cv ok2">200 OK</span><span className="dim"> 12ms</span></div>
                </div>
              )}
              <Line show><span className="caret" /></Line>
            </div>
          </div>

          {/* dashboard */}
          <div className="ngc-dash">
            <div className="ngc-dash-bar">
              <div className="ngc-logo"><span className="ngc-mark" />ngrok</div>
              <div className="ngc-dash-nav"><span className="on">Get started</span><span>Endpoints</span><span>Traffic Inspector</span></div>
            </div>

            <div className="ngc-dash-body">
              {/* status header reacts to state */}
              <div className={`ngc-status ${at('live') ? 'live' : at('empty') ? 'warn' : at('agent') ? 'mid' : 'idle'}`}>
                <span className="s-dot" />
                <div className="s-text">
                  {!at('agent') && <><b>Waiting for your agent</b><span>Run the command below. This page updates the moment it connects.</span></>}
                  {at('agent') && !at('empty') && <><b>Agent connected</b><span>macOS · v3.16 · just now</span></>}
                  {at('empty') && !at('live') && <><b>Nothing on :8080 yet</b><span>Your agent is up, but no local service is answering.</span></>}
                  {at('live') && <><b>Endpoint live</b><span>Forwarding to localhost:8080 · TLS auto-managed</span></>}
                </div>
                {at('agent') && !at('live') && <span className="s-badge">Step {at('empty') ? 2 : 1} of 2</span>}
              </div>

              {/* idle / agent: one OS-aware command block */}
              {!at('live') && (
                <div className="ngc-card">
                  <div className="ngc-card-h">
                    <span>{at('agent') ? 'Start your first endpoint' : 'Install + connect (detected: macOS)'}</span>
                    <span className="ngc-copy">Copy</span>
                  </div>
                  <pre className="ngc-code">{at('agent')
                    ? 'ngrok http 8080'
                    : 'brew install ngrok && \\\n  ngrok config add-authtoken 2f8K•••9aQ'}</pre>
                  {!at('agent') && <div className="ngc-note">Token is pre-filled from your account. One block, no doc hunting.</div>}
                </div>
              )}

              {/* empty-port rescue: the dead-end fix */}
              {at('empty') && !at('live') && (
                <div className="ngc-rescue">
                  <div>
                    <b>No app running?</b>
                    <span> Spin up a demo service on :8080 so you can see the magic now.</span>
                  </div>
                  <button className="ngc-btn ghost">Start a demo server</button>
                </div>
              )}

              {/* live: the public URL payoff */}
              {at('live') && (
                <div className="ngc-url">
                  <div className="ngc-url-row">
                    <span className="ngc-url-pill">
                      <span className="lock">🔒</span> https://bright-otter-1a2b.ngrok.app
                    </span>
                    <button className="ngc-btn">Copy</button>
                    <button className="ngc-btn ghost">Open ↗</button>
                  </div>
                  <div className="ngc-note">Live in {'<'}1s of your command. Claim a free static domain anytime.</div>
                </div>
              )}

              {/* inspector preview appears with first request */}
              {at('request') && (
                <div className="ngc-insp">
                  <div className="ngc-insp-h">
                    <span>Traffic Inspector</span>
                    <span className="ngc-live">● live</span>
                  </div>
                  <div className="ngc-insp-cols"><span>Method</span><span>Path</span><span>Status</span><span>Dur</span></div>
                  <div className="ngc-insp-row in">
                    <span className="m get">GET</span><span className="path">/</span>
                    <span className="st ok2">200</span><span className="dur">12ms</span>
                  </div>
                  {at('done') && (
                    <>
                      <div className="ngc-insp-row in d1">
                        <span className="m get">GET</span><span className="path">/styles.css</span>
                        <span className="st ok2">200</span><span className="dur">4ms</span>
                      </div>
                      <div className="ngc-insp-row in d2">
                        <span className="m post">POST</span><span className="path">/api/login</span>
                        <span className="st warn2">401</span><span className="dur">31ms</span>
                      </div>
                    </>
                  )}
                  <div className="ngc-note">Setup and observability in one screen. The first request proves it end to end.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---- the moves ---- */}
      <section className="ngc-moves">
        <div className="ngc-moves-k">Four moves</div>
        <div className="ngc-grid">
          {MOVES.map((m) => (
            <div className="ngc-move" key={m.t}>
              <div className="ngc-move-n">{m.n}</div>
              <h3>{m.t}</h3>
              <p>{m.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ngc-close">
        <p>
          I built this before we ever talked, because the fastest way to learn a product is to
          redesign its hardest five minutes. The networking is new to me. Making deep technical
          systems feel obvious is not.
        </p>
        <Link to="/ngrok" className="ngc-cta">See why I'm a fit for the role →</Link>
      </section>
    </div>
  );
}

function Line({ show, cls = '', children }) {
  if (!show) return null;
  return <div className={`ngc-line ${cls}`}>{children}</div>;
}

const MOVES = [
  { n: '01', t: 'Live status, not a checklist', b: 'The dashboard mirrors real agent state: waiting, connected, live, first request. No manual Next, because the agent already told us.' },
  { n: '02', t: 'One OS-aware command block', b: 'Detect the platform, pre-fill the authtoken, and collapse install plus connect into a single copy. No branching docs, no token round-trip.' },
  { n: '03', t: 'Never dead-end on an empty port', b: 'If nothing answers on the port, offer a one-click demo server instead of a silent failure. The first run always reaches the payoff.' },
  { n: '04', t: 'End on traffic, not a URL', b: 'The moment the first request lands, the inspector animates in. Setup flows straight into observability, the thing that makes users stay.' },
];

const css = `
.ngc { --bg:#0a0c11; --panel:#12151d; --panel2:#171b24; --line:rgba(255,255,255,0.08); --line2:rgba(255,255,255,0.12); --tx:#e8eaf0; --mut:#9aa1b2; --dim:#646b7d; --acc:#34d399; --accd:#10b981; --warn:#f5b454; --blue:#5b8cff; --red:#f0716f; min-height:100vh; background:var(--bg); color:var(--tx); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif; -webkit-font-smoothing:antialiased; padding:0 24px 100px; }
.ngc * { box-sizing:border-box; }
.ngc-top { max-width:1040px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:22px 0; }
.ngc-back { color:var(--mut); text-decoration:none; font-size:13px; font-weight:600; letter-spacing:-0.01em; }
.ngc-back:hover { color:var(--tx); }
.ngc-tag { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:var(--acc); border:1px solid rgba(52,211,153,0.3); padding:4px 10px; border-radius:100px; }
.ngc-head { max-width:760px; margin:42px auto 0; text-align:center; }
.ngc-eyebrow { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.14em; color:var(--dim); margin-bottom:16px; }
.ngc-head h1 { font-size:46px; line-height:1.05; letter-spacing:-0.03em; font-weight:700; margin:0 0 18px; background:linear-gradient(180deg,#fff,#aeb6c8); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
.ngc-dek { font-size:16px; line-height:1.65; color:var(--mut); margin:0; }
.ngc-insight { max-width:760px; margin:34px auto 0; background:linear-gradient(180deg,var(--panel),rgba(18,21,29,0.4)); border:1px solid var(--line); border-left:2px solid var(--acc); border-radius:14px; padding:22px 26px; }
.ngc-insight-k { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:var(--acc); margin-bottom:8px; }
.ngc-insight p { margin:0; font-size:15.5px; line-height:1.6; color:var(--tx); }
.ngc-insight em { color:var(--mut); font-style:italic; }
.ngc-demo { max-width:1040px; margin:30px auto 0; background:var(--panel); border:1px solid var(--line); border-radius:18px; overflow:hidden; }
.ngc-demo-bar { display:flex; justify-content:space-between; align-items:center; padding:14px 18px; border-bottom:1px solid var(--line); background:var(--panel2); }
.ngc-steps { display:flex; gap:22px; }
.ngc-stepdot { display:flex; align-items:center; gap:7px; font-size:12.5px; font-weight:600; color:var(--dim); transition:color .3s; }
.ngc-stepdot .dot { width:7px; height:7px; border-radius:50%; background:var(--dim); transition:all .3s; }
.ngc-stepdot.on { color:var(--tx); }
.ngc-stepdot.on .dot { background:var(--acc); box-shadow:0 0 0 4px rgba(52,211,153,0.15); }
.ngc-replay { background:transparent; border:1px solid var(--line2); color:var(--mut); font-size:12.5px; font-weight:600; padding:6px 12px; border-radius:8px; cursor:pointer; }
.ngc-replay:hover { color:var(--tx); border-color:var(--mut); }
.ngc-split { display:grid; grid-template-columns:1fr 1fr; min-height:430px; }
.ngc-term { background:#06080c; border-right:1px solid var(--line); font-family:'SF Mono',ui-monospace,Menlo,monospace; font-size:12.5px; }
.ngc-term-bar { display:flex; align-items:center; gap:7px; padding:11px 14px; border-bottom:1px solid var(--line); }
.tdot { width:11px; height:11px; border-radius:50%; } .tdot.r{background:#f0716f}.tdot.y{background:#f5b454}.tdot.g{background:#5fd07a}
.ngc-term-title { margin-left:8px; color:var(--dim); font-size:11.5px; }
.ngc-term-body { padding:16px 16px; line-height:1.85; }
.ngc-line { color:#c5cbd8; white-space:pre-wrap; word-break:break-all; animation:fade .35s ease; }
.ngc-line .p { color:var(--acc); margin-right:8px; }
.ngc-line .dim, .ngc-term .dim { color:var(--dim); }
.ngc-line.ok { color:var(--dim); }
.ngc-console { margin:8px 0; padding:12px 14px; background:rgba(255,255,255,0.025); border:1px solid var(--line); border-radius:8px; animation:fade .4s ease; }
.ngc-console > div { display:flex; gap:12px; padding:2px 0; }
.ngc-console .ck { color:var(--dim); width:120px; flex:none; }
.ngc-console .cv { color:#c5cbd8; } .ngc-console .cv.on { color:var(--acc); } .ngc-console .cv.url { color:var(--blue); } .ngc-console .cv.ok2{color:var(--acc); margin-left:10px;}
.ngc-console.req { margin-top:6px; } .ngc-console .creqhead { color:var(--dim); margin-bottom:4px; display:block; }
.ngc-console .m { font-weight:700; margin-right:10px; }
.m.get{color:var(--acc)} .m.post{color:var(--blue)}
.caret { display:inline-block; width:8px; height:15px; background:var(--acc); vertical-align:middle; animation:blink 1s steps(2) infinite; }
.ngc-dash { background:var(--panel); display:flex; flex-direction:column; }
.ngc-dash-bar { display:flex; align-items:center; gap:20px; padding:13px 18px; border-bottom:1px solid var(--line); }
.ngc-logo { display:flex; align-items:center; gap:8px; font-weight:800; letter-spacing:-0.02em; font-size:15px; }
.ngc-mark { width:16px; height:16px; border-radius:5px; background:conic-gradient(from 140deg,var(--acc),var(--blue),var(--acc)); }
.ngc-dash-nav { display:flex; gap:16px; font-size:12.5px; color:var(--dim); }
.ngc-dash-nav .on { color:var(--tx); font-weight:600; }
.ngc-dash-body { padding:18px; display:flex; flex-direction:column; gap:14px; }
.ngc-status { display:flex; align-items:center; gap:13px; padding:14px 16px; border-radius:12px; border:1px solid var(--line); background:var(--panel2); transition:all .4s; }
.ngc-status .s-dot { width:10px; height:10px; border-radius:50%; flex:none; background:var(--dim); transition:all .4s; }
.ngc-status .s-text { display:flex; flex-direction:column; gap:2px; }
.ngc-status .s-text b { font-size:14px; font-weight:700; }
.ngc-status .s-text span { font-size:12px; color:var(--mut); }
.ngc-status .s-badge { margin-left:auto; font-size:11px; font-weight:600; color:var(--mut); background:rgba(255,255,255,0.05); padding:3px 9px; border-radius:100px; flex:none; }
.ngc-status.mid .s-dot { background:var(--blue); box-shadow:0 0 0 4px rgba(91,140,255,0.18); }
.ngc-status.warn { border-color:rgba(245,180,84,0.35); } .ngc-status.warn .s-dot { background:var(--warn); box-shadow:0 0 0 4px rgba(245,180,84,0.18); }
.ngc-status.live { border-color:rgba(52,211,153,0.4); background:rgba(52,211,153,0.06); } .ngc-status.live .s-dot { background:var(--acc); box-shadow:0 0 0 4px rgba(52,211,153,0.2); animation:pulse 1.6s infinite; }
.ngc-card { border:1px solid var(--line); border-radius:12px; overflow:hidden; animation:fade .4s ease; }
.ngc-card-h { display:flex; justify-content:space-between; align-items:center; padding:10px 14px; font-size:12.5px; font-weight:600; color:var(--mut); background:var(--panel2); border-bottom:1px solid var(--line); }
.ngc-copy { color:var(--acc); cursor:pointer; font-weight:600; }
.ngc-code { margin:0; padding:14px; font-family:'SF Mono',ui-monospace,Menlo,monospace; font-size:12.5px; color:#c5cbd8; white-space:pre-wrap; line-height:1.6; }
.ngc-note { font-size:11.5px; color:var(--dim); padding:0 2px; line-height:1.5; }
.ngc-card .ngc-note { padding:0 14px 12px; }
.ngc-rescue { display:flex; align-items:center; justify-content:space-between; gap:14px; padding:14px 16px; border:1px dashed rgba(245,180,84,0.4); border-radius:12px; background:rgba(245,180,84,0.05); animation:fade .4s ease; }
.ngc-rescue b { font-size:13px; } .ngc-rescue span { font-size:12.5px; color:var(--mut); }
.ngc-btn { background:var(--acc); color:#04130d; border:none; font-size:12.5px; font-weight:700; padding:8px 14px; border-radius:8px; cursor:pointer; white-space:nowrap; }
.ngc-btn.ghost { background:transparent; color:var(--tx); border:1px solid var(--line2); }
.ngc-url { animation:fade .4s ease; display:flex; flex-direction:column; gap:8px; }
.ngc-url-row { display:flex; gap:8px; align-items:center; }
.ngc-url-pill { flex:1; display:flex; align-items:center; gap:8px; font-family:'SF Mono',ui-monospace,Menlo,monospace; font-size:13px; color:var(--blue); background:rgba(91,140,255,0.08); border:1px solid rgba(91,140,255,0.25); padding:9px 12px; border-radius:9px; }
.ngc-url-pill .lock { font-size:11px; filter:grayscale(1) brightness(1.6); }
.ngc-insp { border:1px solid var(--line); border-radius:12px; overflow:hidden; animation:fade .4s ease; }
.ngc-insp-h { display:flex; justify-content:space-between; align-items:center; padding:11px 14px; font-size:12.5px; font-weight:700; background:var(--panel2); border-bottom:1px solid var(--line); }
.ngc-live { color:var(--acc); font-size:11px; font-weight:700; }
.ngc-insp-cols { display:grid; grid-template-columns:70px 1fr 56px 50px; gap:8px; padding:7px 14px; font-size:10.5px; text-transform:uppercase; letter-spacing:0.08em; color:var(--dim); border-bottom:1px solid var(--line); }
.ngc-insp-row { display:grid; grid-template-columns:70px 1fr 56px 50px; gap:8px; padding:10px 14px; font-size:12.5px; align-items:center; border-bottom:1px solid var(--line); font-family:'SF Mono',ui-monospace,Menlo,monospace; }
.ngc-insp-row.in { animation:slidein .45s ease; }
.ngc-insp-row.d1 { animation-delay:.05s; animation-fill-mode:backwards; }
.ngc-insp-row.d2 { animation-delay:.12s; animation-fill-mode:backwards; }
.ngc-insp-row .path { color:var(--tx); } .ngc-insp-row .dur { color:var(--dim); }
.st.ok2 { color:var(--acc); font-weight:700; } .st.warn2 { color:var(--warn); font-weight:700; }
.ngc-insp .ngc-note { padding:10px 14px; }
.ngc-moves { max-width:1040px; margin:48px auto 0; }
.ngc-moves-k { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.14em; color:var(--dim); margin-bottom:18px; text-align:center; }
.ngc-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
.ngc-move { background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:22px 24px; }
.ngc-move-n { font-family:'SF Mono',ui-monospace,monospace; font-size:12px; color:var(--acc); margin-bottom:10px; }
.ngc-move h3 { margin:0 0 8px; font-size:16.5px; font-weight:700; letter-spacing:-0.01em; }
.ngc-move p { margin:0; font-size:13.5px; line-height:1.6; color:var(--mut); }
.ngc-close { max-width:680px; margin:54px auto 0; text-align:center; }
.ngc-close p { font-size:18px; line-height:1.6; color:var(--tx); letter-spacing:-0.01em; margin:0 0 22px; }
.ngc-cta { display:inline-block; background:#fff; color:#0a0c11; text-decoration:none; font-weight:700; font-size:14px; padding:12px 22px; border-radius:10px; }
.ngc-cta:hover { background:var(--acc); }
@keyframes fade { from{opacity:0; transform:translateY(4px)} to{opacity:1; transform:none} }
@keyframes slidein { from{opacity:0; transform:translateX(-8px)} to{opacity:1; transform:none} }
@keyframes blink { 50%{opacity:0} }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 4px rgba(52,211,153,0.2)} 50%{box-shadow:0 0 0 7px rgba(52,211,153,0.08)} }
@media (max-width:820px) {
  .ngc-head h1 { font-size:32px; }
  .ngc-split { grid-template-columns:1fr; }
  .ngc-term { border-right:none; border-bottom:1px solid var(--line); }
  .ngc-grid { grid-template-columns:1fr; }
  .ngc-steps { gap:12px; } .ngc-stepdot { font-size:11px; }
}
`;
