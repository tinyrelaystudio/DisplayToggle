import Image from "next/image";

type FeatureIconName = "display" | "login" | "reconnect";

const features: Array<{ title: string; description: string; icon: FeatureIconName }> = [
  { title: "Disconnect and reconnect", description: "Control a display directly from the macOS menu bar.", icon: "display" },
  { title: "Start at login", description: "Open Display Toggle automatically when you sign in to your Mac.", icon: "login" },
  { title: "Reconnect anytime", description: "Displays turned off by Display Toggle stay in the menu so you can turn them back on.", icon: "reconnect" },
];

function FeatureIcon({ name }: Readonly<{ name: FeatureIconName }>) {
  if (name === "display") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="11" rx="2" /><path d="M8.5 19.5h7M12 15.5v4" /></svg>;
  }

  if (name === "login") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" /><path d="M11 8l4 4-4 4M4 12h11" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.8-4.2L3 9" /><path d="M3 4v5h5M4 13a8 8 0 0 0 14.8 4.2L21 15" /><path d="M21 20v-5h-5" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">
          <Image src="/display-toggle.png" width={28} height={28} alt="" />
          <span>Display Toggle</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#demo">Demo</a>
          <a href="#pricing">Pricing</a>
          <a href="/buy">Buy</a>
        </nav>
      </header>

      <div className="page" id="top">
        <section className="intro">
          <div>
            <p className="overline">macOS menu bar utility</p>
            <h1>Display Toggle</h1>
            <p className="lead">
              Disconnect or reconnect a display from the menu bar. Keep your MacBook open while using only an external monitor.
            </p>
            <div className="actions">
              <a
                className="button button-primary"
                href="/downloads/DisplayToggle-1.0-macOS13+.dmg"
                download
              >
                Download for Mac OS
              </a>
              <a className="button button-secondary" href="/buy">
                Buy License — $5
              </a>
              <a className="text-link" href="#demo">Watch the demo</a>
            </div>
            <p className="requirements">macOS 13 or later · Apple silicon and Intel</p>
          </div>
          <figure className="screenshot">
            <Image
              src="/demo-connected.jpg"
              width={1400}
              height={948}
              alt="Display Toggle menu next to macOS display settings"
              priority
            />
          </figure>
        </section>

        <section className="content-section" id="features">
          <h2>Features</h2>
          <ul className="feature-list">
            {features.map(({ title, description, icon }) => (
              <li key={title} className="feature-card">
                <span className="feature-icon" aria-hidden="true"><FeatureIcon name={icon} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="demo">
          <h2>Demo</h2>
          <p>A 16-second recording of the built-in display being disconnected and reconnected.</p>
          <video controls playsInline preload="metadata" poster="/demo-connected.jpg">
            <source src="/display-toggle-demo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="content-section price-section" id="pricing">
          <div>
            <h2>Trial and pricing</h2>
            <p>Try every feature free for 14 days. After the trial, Display Toggle costs $5 once.</p>
            <a className="button button-secondary pricing-buy" href="/buy">
              Buy License — $5
            </a>
          </div>
          <ul>
            <li>No account or payment card for the trial</li>
            <li>Personal license for up to 3 Macs</li>
            <li>Includes Display Toggle updates through version 2.x</li>
            <li>No subscription</li>
          </ul>
        </section>

        <section className="content-section details-section">
          <h2>Details</h2>
          <dl>
            <div><dt>Requirements</dt><dd>macOS 13 Ventura or later</dd></div>
            <div><dt>License checks</dt><dd>Internet is required for activation and occasional validation</dd></div>
            <div><dt>Privacy</dt><dd>Display controls and preferences stay on your Mac</dd></div>
            <div><dt>Support</dt><dd><a href="mailto:support@tinyrelay.app">support@tinyrelay.app</a></dd></div>
          </dl>
        </section>
      </div>

      <footer>
        <span>© 2026 Tiny Relay Studio</span>
        <span>Display Toggle for macOS</span>
      </footer>
    </main>
  );
}
