import { useState, useMemo } from 'react';

// Jenny Lu redesign concept for Transect's cost-savings calculator.
// Marketing lead-gen tool: goal is more completed calculators -> more demo requests.
// Self-contained, Transect-branded, clearly labeled as an unaffiliated concept.

const RATE = 75; // blended internal $/hr (matches their live example: 900 hrs -> $67,500)

const TASKS = [
  { key: 'environmental', label: 'Environmental factors' },
  { key: 'federal', label: 'Federal and state permits' },
  { key: 'local', label: 'Local permits' },
  { key: 'community', label: 'Community sentiment' },
  { key: 'landowner', label: 'Landowner search' },
  { key: 'capacity', label: 'Capacity checks' },
  { key: 'colleague', label: 'Colleague or consultant time' },
];

// Typical per-site hours by industry (AI pre-fill defaults). Utility-Scale Solar matches their example.
const PROFILES = {
  'Utility-Scale Solar': { environmental: 2, federal: 1, local: 3, community: 2, landowner: 4, capacity: 1, colleague: 2, consultant: 2500, monthly: 5 },
  'Distributed Solar':   { environmental: 1, federal: 1, local: 3, community: 2, landowner: 3, capacity: 1, colleague: 1, consultant: 1500, monthly: 12 },
  'Energy Storage':      { environmental: 2, federal: 2, local: 3, community: 2, landowner: 3, capacity: 3, colleague: 2, consultant: 2800, monthly: 4 },
  'Wind':                { environmental: 4, federal: 2, local: 3, community: 4, landowner: 4, capacity: 1, colleague: 3, consultant: 3500, monthly: 3 },
  'Hybrid':              { environmental: 3, federal: 2, local: 3, community: 3, landowner: 4, capacity: 3, colleague: 2, consultant: 3200, monthly: 3 },
  'Data Centers':        { environmental: 2, federal: 1, local: 4, community: 3, landowner: 3, capacity: 4, colleague: 2, consultant: 3000, monthly: 2 },
  'Other':               { environmental: 2, federal: 1, local: 3, community: 2, landowner: 3, capacity: 2, colleague: 2, consultant: 2500, monthly: 5 },
};

const INDUSTRIES = Object.keys(PROFILES);
const SIZES = ['1 - 10 employees', '11 - 50 employees', '51 - 200 employees', '201 - 1,000 employees', '1,000+ employees'];
const TRANSECT_SHARE = 0.28; // illustrative: with Transect, ~72% less early-stage cost
// Illustrative "typical" annual early-assessment spend by company size (the benchmark).
const SIZE_BENCH = {
  '1 - 10 employees': 95000,
  '11 - 50 employees': 190000,
  '51 - 200 employees': 430000,
  '201 - 1,000 employees': 920000,
  '1,000+ employees': 1750000,
};

const usd = (n) => '$' + Math.round(n).toLocaleString('en-US');
const usdK = (n) => n >= 1000 ? '$' + (Math.round(n / 100) / 10).toLocaleString('en-US') + 'k' : usd(n);

export default function TransectCalculator() {
  const [industry, setIndustry] = useState('Utility-Scale Solar');
  const [size, setSize] = useState('11 - 50 employees');
  const [monthly, setMonthly] = useState(PROFILES['Utility-Scale Solar'].monthly);
  const [hours, setHours] = useState(() => pick(PROFILES['Utility-Scale Solar']));
  const [consultant, setConsultant] = useState(PROFILES['Utility-Scale Solar'].consultant);
  const [prefilled, setPrefilled] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  function applyIndustry(next) {
    const p = PROFILES[next];
    setIndustry(next);
    setHours(pick(p));
    setConsultant(p.consultant);
    setMonthly(p.monthly);
    setPrefilled(true);
  }
  function setHour(key, val) {
    setHours((h) => ({ ...h, [key]: val }));
    setPrefilled(false);
  }

  const m = useMemo(() => {
    const annualProjects = monthly * 12;
    const perSiteHours = TASKS.reduce((s, t) => s + (hours[t.key] || 0), 0);
    const annualHours = perSiteHours * annualProjects;
    const salaryCost = annualHours * RATE;
    const consultantCost = consultant * annualProjects;
    const total = salaryCost + consultantCost;
    const rows = TASKS.map((t) => ({ label: t.label, value: (hours[t.key] || 0) * annualProjects * RATE }));
    rows.push({ label: 'External consultants', value: consultantCost, consult: true });
    rows.sort((a, b) => b.value - a.value);
    const max = rows[0]?.value || 1;
    const withTransect = total * TRANSECT_SHARE;
    const bench = SIZE_BENCH[size] || total;
    const benchDiff = Math.round(((total - bench) / bench) * 100);
    const benchMax = Math.max(total, bench) * 1.25;
    return { annualProjects, annualHours, salaryCost, consultantCost, total, rows, max, withTransect, savings: total - withTransect, bench, benchDiff, benchMax };
  }, [hours, consultant, monthly, size]);

  return (
    <div className="tc-root">
      <style>{CSS}</style>

      <div className="tc-ribbon">
        Redesign concept by <a href="https://jenny-port.vercel.app/transect">Jenny Lu</a>. Not affiliated with Transect. Savings figures are illustrative.
      </div>

      <header className="tc-nav">
        <div className="tc-logo"><span className="tc-mark" />transect</div>
        <div className="tc-navcta">Schedule a demo</div>
      </header>

      <div className="tc-hero">
        <div className="tc-eyebrow">Cost savings calculator</div>
        <h1>What is site assessment really costing you?</h1>
        <p>You're spending more time and money than you realize on early site assessments. Watch it add up as you go.</p>
      </div>

      <div className={step === 1 ? 'tc-stage tc-stage1' : 'tc-stage tc-stage2'}>
        <div className="tc-steptag">Step {step} of 2 · {step === 1 ? 'Your numbers' : 'Your savings'}</div>

        {step === 1 && (
        <div className="tc-inputs">
          <section className="tc-step">
            <div className="tc-stephd"><span>1</span> About you</div>
            <div className="tc-two">
              <label>Primary focus
                <select value={industry} onChange={(e) => applyIndustry(e.target.value)}>
                  {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </label>
              <label>Company size
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {SIZES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
            </div>
          </section>

          <section className="tc-step">
            <div className="tc-stephd"><span>2</span> Development velocity</div>
            <label className="tc-slab">Sites you substantially evaluate each month
              <span className="tc-val">{monthly} / mo</span>
              <input type="range" min="1" max="40" value={monthly} onChange={(e) => setMonthly(+e.target.value)} />
            </label>
          </section>

          <section className="tc-step">
            <div className="tc-stephd"><span>3</span> Your time per site</div>
            {prefilled && (
              <div className="tc-ai">✦ We pre-filled typical hours for <b>{industry}</b>. Drag any that feel off.</div>
            )}
            {TASKS.map((t) => (
              <label key={t.key} className="tc-slab tc-hour">
                <span className="tc-hlabel">{t.label}</span>
                <span className="tc-val">{hours[t.key]} hr</span>
                <input type="range" min="0" max="12" value={hours[t.key]} onChange={(e) => setHour(t.key, +e.target.value)} />
              </label>
            ))}
            <label className="tc-slab">Consultant spend per project
              <span className="tc-val">{usd(consultant)}</span>
              <input type="range" min="0" max="8000" step="250" value={consultant} onChange={(e) => { setConsultant(+e.target.value); setPrefilled(false); }} />
            </label>
          </section>
        </div>
        )}

        {step === 1 && (
          <div className="tc-livebar">
            <div className="tc-livecost">Your cost so far<b>{usd(m.total)}</b><span>per year</span></div>
            <button className="tc-cta1" onClick={() => setStep(2)}>See what you could save →</button>
          </div>
        )}

        {step === 2 && (
        <div className="tc-results">
          <button className="tc-back" onClick={() => setStep(1)}>← Adjust my numbers</button>
          <div className="tc-sticky">
            <div className="tc-reslabel">What early site assessment costs you</div>
            <div className="tc-big">{usd(m.total)}<span> / year</span></div>
            <div className="tc-sub">{m.annualProjects} projects · {m.annualHours.toLocaleString('en-US')} hours · {usd(m.salaryCost)} salary + {usd(m.consultantCost)} reports</div>
            <div className="tc-proof">Based on typical ranges from 300+ renewable developers</div>

            <div className="tc-savelead">
              <div className="tc-savetop">You could save about</div>
              <div className="tc-savenum">{usdK(m.savings)} <span>a year</span></div>
              <div className="tc-saveill">illustrative, with Transect</div>
            </div>

            <div className="tc-bench">
              <div className="tc-chartlbl">How you compare <span className="tc-ill">developers your size</span></div>
              <div className="tc-benchtrack">
                <i style={{ width: Math.max(4, (m.total / m.benchMax) * 100) + '%' }} />
                <span className="tc-mark" style={{ left: (m.bench / m.benchMax) * 100 + '%' }} />
              </div>
              <div className="tc-benchcap">
                You: <b>{usdK(m.total)}</b> · typical: {usdK(m.bench)} ·{' '}
                {m.benchDiff > 0
                  ? <b className="over">{m.benchDiff}% above</b>
                  : <b className="under">{Math.abs(m.benchDiff)}% leaner</b>}
              </div>
            </div>

            <div className="tc-chartlbl">Where it goes</div>
            <div className="tc-bars">
              {m.rows.map((r) => (
                <div className="tc-bar" key={r.label}>
                  <div className="tc-barhd"><span>{r.label}</span><b>{usdK(r.value)}</b></div>
                  <div className="tc-track"><i className={r.consult ? 'consult' : ''} style={{ width: Math.max(3, (r.value / m.max) * 100) + '%' }} /></div>
                </div>
              ))}
            </div>

            <div className="tc-chartlbl">Today vs with Transect <span className="tc-ill">illustrative</span></div>
            <div className="tc-cmp">
              <div className="tc-col"><em>{usdK(m.total)}</em><i className="now" style={{ height: '92px' }} /><span>Today</span></div>
              <div className="tc-col"><em>{usdK(m.withTransect)}</em><i className="new" style={{ height: Math.max(14, 92 * TRANSECT_SHARE) + 'px' }} /><span>Transect</span></div>
              <div className="tc-save">Save about<br /><b>{usdK(m.savings)}</b><br />a year</div>
            </div>

            {!submitted ? (
              <form className="tc-gate" onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSubmitted(true); }}>
                <div className="tc-gateq">Want your 1-page benchmark report? We'll email it now.</div>
                <div className="tc-gaterow">
                  <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <button type="submit" aria-label="Send">→</button>
                </div>
              </form>
            ) : (
              <div className="tc-done">On its way to <b>{email}</b>.</div>
            )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

function pick(p) {
  return { environmental: p.environmental, federal: p.federal, local: p.local, community: p.community, landowner: p.landowner, capacity: p.capacity, colleague: p.colleague };
}

const CSS = `
.tc-root{--teal:#17332e;--teal2:#1f3d38;--orange:#e0902f;--bg:#f5f7f6;--ink:#1f3d38;--line:#e2e6e4;--muted:#5c6f6a;
  background:var(--bg);min-height:100vh;color:var(--ink);
  font-family:"Nunito Sans",-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;}
.tc-root *{box-sizing:border-box;}
.tc-ribbon{background:var(--teal);color:#cfe0da;font-size:12px;text-align:center;padding:7px 14px;}
.tc-ribbon a{color:var(--orange);text-decoration:none;font-weight:700;}
.tc-nav{display:flex;justify-content:space-between;align-items:center;padding:16px 28px;background:#fff;border-bottom:1px solid var(--line);}
.tc-logo{display:flex;align-items:center;gap:9px;font-size:22px;font-weight:800;letter-spacing:-.5px;color:var(--teal);}
.tc-mark{width:22px;height:22px;border-radius:5px;background:conic-gradient(from 210deg,var(--orange),var(--teal));display:inline-block;transform:rotate(12deg);}
.tc-navcta{background:var(--orange);color:#fff;font-weight:700;font-size:14px;padding:9px 18px;border-radius:999px;}
.tc-hero{max-width:1080px;margin:0 auto;padding:38px 28px 22px;}
.tc-eyebrow{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--orange);margin-bottom:10px;}
.tc-hero h1{font-size:40px;font-weight:800;letter-spacing:-.02em;margin:0 0 10px;color:var(--teal);}
.tc-hero p{font-size:17px;color:var(--muted);margin:0;max-width:620px;line-height:1.5;}
.tc-grid{max-width:1080px;margin:0 auto;padding:0 28px 60px;display:grid;grid-template-columns:1.25fr 1fr;gap:22px;align-items:start;}
.tc-stage{max-width:600px;margin:0 auto;padding:0 24px 80px;}
.tc-steptag{font-size:11.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin:0 0 14px;}
.tc-livebar{position:sticky;bottom:16px;margin-top:16px;display:flex;align-items:center;justify-content:space-between;gap:14px;background:var(--teal);color:#fff;border-radius:14px;padding:13px 18px;box-shadow:0 10px 34px rgba(23,51,46,.28);}
.tc-livecost{font-size:12.5px;color:#a9c4b8;display:flex;align-items:baseline;gap:9px;}
.tc-livecost b{font-size:23px;color:#fff;font-weight:800;letter-spacing:-.02em;}
.tc-cta1{background:var(--orange);color:#fff;border:none;font-family:inherit;font-weight:800;font-size:15px;padding:12px 20px;border-radius:10px;cursor:pointer;white-space:nowrap;}
.tc-cta1:hover{filter:brightness(1.05);}
.tc-back{background:none;border:none;color:var(--muted);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;padding:0 0 14px;}
.tc-back:hover{color:var(--teal);}
.tc-stage2 .tc-sticky{position:static;}
.tc-inputs{display:flex;flex-direction:column;gap:14px;}
.tc-step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 20px;}
.tc-stephd{display:flex;align-items:center;gap:9px;font-weight:800;font-size:16px;color:var(--teal);margin-bottom:15px;}
.tc-stephd span{width:24px;height:24px;border-radius:50%;background:var(--teal);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;}
.tc-two{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.tc-two label,.tc-slab{display:flex;flex-direction:column;font-size:12px;font-weight:700;color:var(--muted);gap:6px;text-transform:uppercase;letter-spacing:.03em;}
.tc-two select{font-size:14px;font-weight:600;color:var(--ink);padding:10px 11px;border:1px solid var(--line);border-radius:9px;background:#fff;font-family:inherit;text-transform:none;letter-spacing:0;}
.tc-slab{margin-top:2px;}
.tc-slab .tc-val{align-self:flex-start;font-size:15px;font-weight:800;color:var(--teal);text-transform:none;letter-spacing:0;}
.tc-hour{display:grid;grid-template-columns:1fr auto;align-items:center;gap:4px 10px;margin-bottom:11px;}
.tc-hour .tc-hlabel{text-transform:none;letter-spacing:0;font-size:13.5px;font-weight:600;color:var(--ink);}
.tc-hour .tc-val{grid-column:2;font-size:13px;}
.tc-hour input[type=range]{grid-column:1 / -1;}
.tc-ai{background:#fff6ea;border:1px solid #f2cf9a;color:#9a5f14;border-radius:9px;padding:9px 12px;font-size:13px;margin-bottom:14px;}
.tc-ai b{color:#7a4a0f;}
input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:5px;border-radius:5px;background:#d9e0dd;outline:none;margin:8px 0 2px;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.25);}
input[type=range]::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:var(--orange);cursor:pointer;border:3px solid #fff;}
.tc-results{position:relative;}
.tc-sticky{position:sticky;top:18px;background:var(--teal);color:#dfeae6;border-radius:16px;padding:22px;}
.tc-reslabel{font-size:13px;color:#a9c4b8;font-weight:700;}
.tc-big{font-size:46px;font-weight:800;color:#fff;letter-spacing:-.02em;line-height:1.05;margin:4px 0 6px;}
.tc-big span{font-size:16px;font-weight:600;color:#a9c4b8;}
.tc-sub{font-size:12.5px;color:#9fb8b0;line-height:1.5;margin-bottom:6px;}
.tc-proof{font-size:11px;color:#7f958e;margin-top:2px;}
.tc-savelead{margin:16px 0 4px;padding:14px 16px;background:rgba(58,192,125,.12);border:1px solid rgba(58,192,125,.32);border-radius:12px;}
.tc-savetop{font-size:12.5px;color:#bfeed6;font-weight:600;}
.tc-savenum{font-size:30px;font-weight:800;color:#5fd699;letter-spacing:-.02em;line-height:1.1;margin-top:2px;}
.tc-savenum span{font-size:14px;font-weight:600;color:#bfeed6;}
.tc-saveill{font-size:10.5px;color:#7f958e;margin-top:3px;}
.tc-bench{margin-top:18px;}
.tc-benchtrack{position:relative;height:10px;background:rgba(255,255,255,.1);border-radius:6px;margin:4px 0 8px;overflow:visible;}
.tc-benchtrack i{display:block;height:100%;border-radius:6px;background:var(--orange);transition:width .35s cubic-bezier(.2,.8,.2,1);}
.tc-mark{position:absolute;top:-3px;width:2px;height:16px;background:#fff;transition:left .35s cubic-bezier(.2,.8,.2,1);}
.tc-mark::after{content:"typical";position:absolute;top:-14px;left:50%;transform:translateX(-50%);font-size:8.5px;color:#a9c4b8;white-space:nowrap;}
.tc-benchcap{font-size:12px;color:#a9c4b8;}
.tc-benchcap b{color:#fff;}
.tc-benchcap b.over{color:#e6a052;}
.tc-benchcap b.under{color:#5fd699;}
.tc-chartlbl{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:#a9c4b8;margin:20px 0 10px;display:flex;align-items:center;gap:8px;}
.tc-ill{font-size:9.5px;background:rgba(224,144,47,.22);color:#f0b877;padding:2px 7px;border-radius:999px;letter-spacing:.02em;}
.tc-bars{display:flex;flex-direction:column;gap:9px;}
.tc-barhd{display:flex;justify-content:space-between;font-size:12.5px;color:#cfe0da;margin-bottom:4px;}
.tc-barhd b{color:#fff;}
.tc-track{height:9px;background:rgba(255,255,255,.1);border-radius:5px;overflow:hidden;}
.tc-track i{display:block;height:100%;border-radius:5px;background:var(--orange);transition:width .35s cubic-bezier(.2,.8,.2,1);}
.tc-track i.consult{background:#7f9b93;}
.tc-cmp{display:flex;align-items:flex-end;gap:16px;padding:6px 0 2px;min-height:130px;}
.tc-col{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;font-size:11px;color:#a9c4b8;}
.tc-col em{font-style:normal;font-weight:800;color:#fff;font-size:13px;}
.tc-col i{width:46px;border-radius:6px 6px 0 0;transition:height .35s cubic-bezier(.2,.8,.2,1);}
.tc-col i.now{background:#7f9b93;}
.tc-col i.new{background:#3ac07d;}
.tc-save{margin-left:auto;text-align:right;font-size:12px;color:#a9c4b8;line-height:1.35;align-self:center;}
.tc-save b{font-size:22px;color:#3ac07d;font-weight:800;}
.tc-gate{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12);}
.tc-gateq{font-size:14px;color:#dfeae6;font-weight:600;margin-bottom:9px;}
.tc-gaterow{display:flex;gap:8px;}
.tc-gaterow input{flex:1;padding:11px 13px;border-radius:9px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);font-size:14px;font-family:inherit;color:#fff;}
.tc-gaterow input::placeholder{color:#7f958e;}
.tc-gaterow button{background:var(--orange);color:#fff;font-weight:800;font-size:17px;line-height:1;border:none;border-radius:9px;width:46px;cursor:pointer;font-family:inherit;}
.tc-done{margin-top:20px;padding-top:16px;border-top:1px solid rgba(58,192,125,.3);color:#bfeed6;font-size:14px;}
.tc-done b{color:#fff;}
@media (max-width:820px){
  .tc-grid{grid-template-columns:1fr;}
  .tc-hero h1{font-size:30px;}
  .tc-sticky{position:static;}
}
`;
