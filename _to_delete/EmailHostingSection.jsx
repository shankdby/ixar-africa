import React, { useState } from 'react';
import { Server, Mail, ShieldCheck, Zap, Lock, RefreshCw, Layers, CheckCircle2, ChevronRight, HardDrive, Key, Globe } from 'lucide-react';

export default function EmailHostingSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('security');

  const features = [
    {
      id: 'domains',
      icon: Globe,
      title: 'Pan-African Custom Domain Mail',
      desc: 'Provision company mailboxes under your official brand domain (@company.co.za, @company.ng, @company.africa or @ixar-africa.com).'
    },
    {
      id: 'security',
      icon: ShieldCheck,
      title: 'Anti-Phishing & Anti-Spam Shield',
      desc: 'AI-driven inbound & outbound filters quarantine malware, spoofed addresses, and zero-day threat links before reaching your inbox.'
    },
    {
      id: 'compliance',
      icon: Lock,
      title: 'DKIM, SPF & DMARC Enforcer',
      desc: 'Automated DNS record deployment ensures your outbound sales and engineering proposals never hit the recipient spam folder.'
    },
    {
      id: 'migration',
      icon: RefreshCw,
      title: 'Zero Downtime Mail Migration',
      desc: 'Our dedicated IT team migrates your existing mailboxes from Google Workspace, Microsoft 365, or cPanel with zero data loss.'
    },
    {
      id: 'sla',
      icon: Zap,
      title: '99.99% SLA Uptime Guarantee',
      desc: 'Hosted across top-tier African data centers in Johannesburg, Lagos, and Nairobi with redundant battery & fiber backbones.'
    },
    {
      id: 'storage',
      icon: HardDrive,
      title: 'Enterprise Archiving & Storage',
      desc: 'Select from 10GB up to 1TB storage per seat with compliance journaling and audit trail retention.'
    }
  ];

  return (
    <section id="email-hosting" className="section email-section">
      {/* Background cyan glow */}
      <div className="cyan-ambient"></div>

      <div className="container">
        <div className="section-header">
          <div className="section-tag cyan">
            <Server size={14} /> ENTERPRISE IT & CLOUD DIVISION
          </div>
          <h2 className="section-title">
            Enterprise <span className="gradient-text-cyan">Business Email Hosting</span> Built for African Leaders
          </h2>
          <p className="section-subtitle">
            Engineered for corporate reliability, high security, and ultra-fast synchronization across desktop, mobile, and web clients.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-3 feature-cards-grid">
          {features.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div key={feat.id} className="glass-card highlight-cyan email-feat-card">
                <div className="feat-icon-box">
                  <IconComp size={24} />
                </div>
                <h3 className="feat-title">{feat.title}</h3>
                <p className="feat-desc">{feat.desc}</p>
                <div className="feat-footer-link">
                  <span>Included in All Enterprise Plans</span>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Demo Console */}
        <div className="glass-card demo-console-card">
          <div className="console-nav">
            <div className="console-nav-title">
              <Key size={16} color="var(--accent-cyan)" />
              <span>EMAIL SECURITY & DNS CONFIGURATION AUTOMATION</span>
            </div>

            <div className="console-tab-buttons">
              <button 
                className={`console-tab ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                DNS & DMARC Security
              </button>
              <button 
                className={`console-tab ${activeTab === 'migration' ? 'active' : ''}`}
                onClick={() => setActiveTab('migration')}
              >
                1-Click Migration
              </button>
              <button 
                className={`console-tab ${activeTab === 'webmail' ? 'active' : ''}`}
                onClick={() => setActiveTab('webmail')}
              >
                Webmail & Mobile App
              </button>
            </div>
          </div>

          <div className="console-content-body">
            {activeTab === 'security' && (
              <div className="security-demo">
                <div className="demo-left">
                  <h4 className="demo-heading">Instant SPF, DKIM & DMARC Enforcement</h4>
                  <p className="demo-text">
                    Prevent email spoofing and domain impersonation. Our control panel auto-generates optimized DNS records for your domain domain authority.
                  </p>
                  <div className="code-block">
                    <code>v=DMARC1; p=reject; rua=mailto:dmarc-reports@ixar-africa.com; pct=100; adkim=s; aspf=s;</code>
                  </div>
                  <div className="security-badge-group">
                    <span className="badge badge-cyan"><ShieldCheck size={12} /> 100% Delivery Score</span>
                    <span className="badge badge-emerald"><Lock size={12} /> TLS 1.3 Encryption</span>
                  </div>
                </div>
                <div className="demo-right">
                  <div className="dns-status-box">
                    <div className="dns-row">
                      <span>SPF Record Check:</span>
                      <span className="row-badge success">VALIDATED (v=spf1 include:_spf.ixar-africa.com ~all)</span>
                    </div>
                    <div className="dns-row">
                      <span>DKIM 2048-bit Key:</span>
                      <span className="row-badge success">ACTIVE (s=ixar2026._domainkey)</span>
                    </div>
                    <div className="dns-row">
                      <span>DMARC Enforcement:</span>
                      <span className="row-badge shield">STRICT REJECT MODE</span>
                    </div>
                    <div className="dns-row">
                      <span>Anti-Phishing Engine:</span>
                      <span className="row-badge success">0 SPAM LEAKS REPORTED</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'migration' && (
              <div className="migration-demo">
                <h4 className="demo-heading">Seamless 4-Step Migration Assistant</h4>
                <div className="migration-steps">
                  <div className="mig-step">
                    <div className="step-num">1</div>
                    <div className="step-title">Connect Source Server</div>
                    <div className="step-desc">IMAP / Exchange / Google Workspace endpoint authorization</div>
                  </div>
                  <div className="mig-step">
                    <div className="step-num">2</div>
                    <div className="step-title">Map User Accounts</div>
                    <div className="step-desc">Auto-create mailboxes & aliases on IXAR Cloud</div>
                  </div>
                  <div className="mig-step">
                    <div className="step-num">3</div>
                    <div className="step-title">Background Delta Sync</div>
                    <div className="step-desc">Emails, folders, & contacts synced with zero downtime</div>
                  </div>
                  <div className="mig-step">
                    <div className="step-num">4</div>
                    <div className="step-title">Switch MX Records</div>
                    <div className="step-desc">Final DNS propagation switch to IXAR Pan-African mail servers</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'webmail' && (
              <div className="webmail-demo">
                <div className="webmail-preview-box">
                  <div className="wm-header">
                    <div className="wm-search"><Mail size={14} /> Inbox (1,420 messages) - IXAR Cloudmail</div>
                    <div className="wm-badge">Active SLA</div>
                  </div>
                  <div className="wm-list">
                    <div className="wm-item unread">
                      <span className="wm-sender">Oil & Gas Operator (Lagos)</span>
                      <span className="wm-subject">RE: AUT Pipeline Inspection Schedule Confirmed</span>
                      <span className="wm-time">04:42 AM</span>
                    </div>
                    <div className="wm-item">
                      <span className="wm-sender">IT Security Alert</span>
                      <span className="wm-subject">Monthly Mail Server Health Report: 99.99% Uptime</span>
                      <span className="wm-time">Yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="console-footer-cta">
            <span>Ready to set up your corporate email hosting?</span>
            <button onClick={() => onOpenContact('Enterprise Email Hosting')} className="btn btn-cyan btn-sm">
              <span>Get Email Hosting Quote</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .email-section {
          background: rgba(10, 15, 29, 0.95);
          position: relative;
          overflow: hidden;
        }
        .cyan-ambient {
          position: absolute;
          top: 30%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .feat-icon-box {
          width: 50px;
          height: 50px;
          background: rgba(0, 229, 255, 0.12);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 20px;
        }
        .feat-title {
          font-size: 1.25rem;
          color: #FFF;
          margin-bottom: 10px;
        }
        .feat-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .feat-footer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .demo-console-card {
          margin-top: 50px;
          border-color: rgba(0, 229, 255, 0.25);
          padding: 0;
        }
        .console-nav {
          background: rgba(7, 11, 20, 0.9);
          border-bottom: 1px solid var(--border-color);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .console-nav-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #FFF;
        }
        .console-tab-buttons {
          display: flex;
          gap: 8px;
        }
        .console-tab {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .console-tab.active {
          background: var(--accent-cyan);
          color: #070B14;
          border-color: var(--accent-cyan);
        }

        .console-content-body {
          padding: 32px;
        }
        .demo-heading {
          font-size: 1.4rem;
          color: #FFF;
          margin-bottom: 10px;
        }
        .demo-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 20px;
        }
        .code-block {
          background: rgba(7, 11, 20, 0.9);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-cyan);
          margin-bottom: 20px;
          overflow-x: auto;
        }
        .security-badge-group {
          display: flex;
          gap: 12px;
        }
        .security-demo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }
        .dns-status-box {
          background: rgba(7, 11, 20, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dns-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .migration-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .mig-step {
          background: rgba(7, 11, 20, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          position: relative;
        }
        .step-num {
          width: 30px;
          height: 30px;
          background: rgba(0, 229, 255, 0.15);
          color: var(--accent-cyan);
          border: 1px solid var(--accent-cyan);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 6px;
        }
        .step-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .webmail-preview-box {
          background: rgba(7, 11, 20, 0.9);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .wm-header {
          background: rgba(14, 22, 40, 0.9);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-color);
        }
        .wm-list {
          display: flex;
          flex-direction: column;
        }
        .wm-item {
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: grid;
          grid-template-columns: 200px 1fr 100px;
          align-items: center;
          font-size: 0.88rem;
        }
        .wm-item.unread {
          background: rgba(0, 229, 255, 0.04);
          font-weight: 700;
        }
        .wm-sender { color: #FFF; }
        .wm-subject { color: var(--text-muted); }
        .wm-time { text-align: right; color: var(--text-dim); font-size: 0.8rem; }

        .console-footer-cta {
          background: rgba(7, 11, 20, 0.95);
          border-top: 1px solid var(--border-color);
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .security-demo { grid-template-columns: 1fr; }
          .migration-steps { grid-template-columns: repeat(2, 1fr); }
          .wm-item { grid-template-columns: 1fr; gap: 4px; }
        }
      `}</style>
    </section>
  );
}
