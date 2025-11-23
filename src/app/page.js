export default function Home() {
  return (
    <div className="min-h-screen bg-bg-hero">
      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <h1 className="text-display-xl mb-6 text-text-primary">
            <span className="gradient-brand bg-clip-text text-transparent">
              Stitch
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-body-lg text-text-secondary">
            Premium video editing agency — where creativity meets cutting-edge
            technology
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-display-md text-text-primary">
            Your Always-On Editing Team — In Your Style.
          </p>
        </div>

        {/* Color Palette Showcase */}
        <div className="space-y-12">
          {/* Typography Showcase */}
          <section className="mb-20">
            <h2 className="mb-8 text-display-md text-text-primary">
              Typography System
            </h2>
            
            <div className="space-y-12 rounded-lg border border-border-strong bg-primary-3 p-8">
              {/* Display Styles */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">Display / Headlines</h3>
                <div className="space-y-4">
                  <h1 className="text-display-xl text-text-primary">
                    Display XL - Hero Text (800)
                  </h1>
                  <h2 className="text-display-lg text-text-primary">
                    Display Large - Main Headline (700)
                  </h2>
                  <h3 className="text-display-md text-text-primary">
                    Display Medium - Section Header (700)
                  </h3>
                </div>
              </div>

              {/* Subheadings */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">Subheadings</h3>
                <h4 className="text-subheading text-text-primary">
                  Subheading - Card Titles & Subtitles (600)
                </h4>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">Body Text</h3>
                <div className="space-y-3">
                  <p className="text-body-lg text-text-primary">
                    Body Large - This is large body text with optimal readability. Perfect for introductory paragraphs and important descriptions. Uses 400 weight with 165% line height.
                  </p>
                  <p className="text-body-md text-text-primary">
                    Body Medium - This is standard body text for paragraphs, descriptions, FAQs, and service details. Balanced for comfortable reading with 160% line height.
                  </p>
                  <p className="text-body-sm text-text-secondary">
                    Body Small - This is smaller body text for supporting information, captions, and secondary content. Maintains excellent readability.
                  </p>
                  <p className="text-body-medium text-text-primary">
                    Body Medium Weight - Highlighted text for keywords, pricing features, stats, and important lines within paragraphs.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">Buttons & CTAs</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="text-button rounded-lg bg-primary px-6 py-3 text-white transition-opacity hover:opacity-90">
                    Standard Button
                  </button>
                  <button className="text-button-lg rounded-lg gradient-brand px-6 py-3 text-white transition-opacity hover:opacity-90">
                    Large CTA Button
                  </button>
                  <button className="text-button rounded-lg border border-border-strong bg-transparent px-6 py-3 text-text-primary transition-colors hover:bg-primary-3">
                    Secondary Button
                  </button>
                </div>
              </div>

              {/* Captions & Metadata */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">UI Labels / Captions</h3>
                <div className="space-y-2">
                  <p className="text-caption text-text-muted">Caption - Timestamps, metadata, footnotes</p>
                  <p className="text-caption-medium text-text-secondary">Caption Medium - Enhanced visibility for important labels</p>
                  <code className="text-mono text-text-secondary">mono_code_example.mp4</code>
                </div>
              </div>

              {/* Tabular Numbers */}
              <div>
                <h3 className="mb-4 text-subheading text-text-secondary">Tabular Numbers</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-display-lg font-tabular text-primary">$99</div>
                    <p className="text-caption text-text-muted">Pricing</p>
                  </div>
                  <div>
                    <div className="text-display-lg font-tabular text-secondary-cyan">1,234</div>
                    <p className="text-caption text-text-muted">Stats</p>
                  </div>
                  <div>
                    <div className="text-display-lg font-tabular text-text-primary">2024</div>
                    <p className="text-caption text-text-muted">Dates</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Primary Colors */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Primary Colors
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-primary"></div>
                <p className="font-semibold text-text-primary">Electric Violet</p>
                <p className="text-sm text-text-muted">#6B4EFF</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-primary-2"></div>
                <p className="font-semibold text-text-primary">Deep Space Black</p>
                <p className="text-sm text-text-muted">#0C0C14</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-primary-3"></div>
                <p className="font-semibold text-text-primary">Charcoal Slate</p>
                <p className="text-sm text-text-muted">#1A1A24</p>
              </div>
            </div>
          </section>

          {/* Secondary Colors */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Secondary Colors
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-secondary-cyan"></div>
                <p className="font-semibold text-text-primary">Neo Cyan</p>
                <p className="text-sm text-text-muted">#27E6F5</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-secondary-magenta"></div>
                <p className="font-semibold text-text-primary">Soft Magenta</p>
                <p className="text-sm text-text-muted">#FF66C4</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-24 w-full rounded-lg bg-secondary-yellow"></div>
                <p className="font-semibold text-text-primary">Signal Yellow</p>
                <p className="text-sm text-text-muted">#FFE564</p>
              </div>
            </div>
          </section>

          {/* Gradients */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Gradient System
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-lg border border-border-strong bg-primary-3">
                <div className="h-32 gradient-brand"></div>
                <div className="p-6">
                  <p className="font-semibold text-text-primary">Brand Signature</p>
                  <p className="text-sm text-text-muted">Violet → Cyan</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-border-strong bg-primary-3">
                <div className="h-32 gradient-creator"></div>
                <div className="p-6">
                  <p className="font-semibold text-text-primary">Creator Energy</p>
                  <p className="text-sm text-text-muted">Violet → Magenta</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-border-strong bg-primary-3">
                <div className="h-32 gradient-luxury"></div>
                <div className="p-6">
                  <p className="font-semibold text-text-primary">Luxury Dark Fade</p>
                  <p className="text-sm text-text-muted">Dark Gradient</p>
                </div>
              </div>
            </div>
          </section>

          {/* Functional Colors */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Functional Colors
            </h2>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-16 w-full rounded-lg bg-success"></div>
                <p className="font-semibold text-text-primary">Success</p>
                <p className="text-sm text-text-muted">#2ECC71</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-16 w-full rounded-lg bg-warning"></div>
                <p className="font-semibold text-text-primary">Warning</p>
                <p className="text-sm text-text-muted">#FFC857</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-16 w-full rounded-lg bg-error"></div>
                <p className="font-semibold text-text-primary">Error</p>
                <p className="text-sm text-text-muted">#FF4D4F</p>
              </div>
              <div className="rounded-lg border border-border-strong bg-primary-3 p-6">
                <div className="mb-3 h-16 w-full rounded-lg bg-info"></div>
                <p className="font-semibold text-text-primary">Info</p>
                <p className="text-sm text-text-muted">#3BA3FF</p>
              </div>
            </div>
          </section>

          {/* Text Colors */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Text System
            </h2>
            <div className="rounded-lg border border-border-strong bg-primary-3 p-8">
              <div className="space-y-4">
                <p className="text-2xl text-text-primary">
                  Primary Text (White) - #FFFFFF
                </p>
                <p className="text-xl text-text-secondary">
                  Secondary Text (Soft Grey) - #B5B5C3
                </p>
                <p className="text-lg text-text-muted">
                  Muted Text (Dim Slate) - #7A7A88
                </p>
                <p className="text-base text-text-placeholder">
                  Placeholder Text - #50505C
                </p>
              </div>
            </div>
          </section>

          {/* CTA Examples */}
          <section>
            <h2 className="mb-6 text-display-md text-text-primary">
              Button Examples
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-primary px-6 py-3 font-semibold text-text-primary transition-opacity hover:opacity-90">
                Primary Button
              </button>
              <button className="rounded-lg border border-border-strong bg-bg-surface px-6 py-3 font-semibold text-text-primary transition-colors hover:bg-primary-3">
                Secondary Button
              </button>
              <button className="rounded-lg gradient-brand px-6 py-3 font-semibold text-text-primary transition-opacity hover:opacity-90">
                Gradient CTA
              </button>
              <button className="rounded-lg bg-secondary-cyan px-6 py-3 font-semibold text-primary-2 transition-opacity hover:opacity-90">
                Neon Accent
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
