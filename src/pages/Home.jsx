import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LangToggle from '../components/LangToggle'
import t from '../i18n/translations'
import avatarImg from '../assets/v-avatar.svg'
import './Home.css'

function Home() {
  const { lang } = useLang()
  const tr = t[lang].home

  const researchAreas = [
    { label: '无线网络', to: '/sa2-tech' },
    { label: '物联网', to: '/iot-tech' },
    { label: '大模型', to: '/llm-tech' },
    { label: '通算协同', to: null },
  ]

  return (
    <>
      <div className="hex-bg" />
      <LangToggle />

      <div className="page">
        <header className="header">
          <div className="name-wrapper">
            <h1 className="name">SUNK</h1>
          </div>
          <p className="subtitle">{tr.subtitle}</p>
        </header>

        <div className="main-card">
          <div className="avatar-col">
            <div className="avatar-frame hex">
              <div className="avatar-ring" />
              <img src={avatarImg} alt="Cyberpunk avatar" />
            </div>
          </div>

          <div className="info-col">
            <div className="info-row">
              <span className="info-label">{tr.nameLabel}</span>
              <span className="info-value highlight">SUNK</span>
            </div>
            <div className="info-row">
              <span className="info-label">{tr.degreeLabel}</span>
              <span className="info-value">{tr.degreeValue}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{tr.researchLabel}</span>
              <span className="info-value">{tr.researchValue}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{tr.contactLabel}</span>
              <span className="info-value highlight">847484392</span>
            </div>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">{tr.sectionTitle}</h2>
          <div className="research-grid">
            {researchAreas.map(({ label, to }) =>
              to ? (
                <Link key={label} to={to} className="research-tag research-link">
                  {label}
                </Link>
              ) : (
                <span key={label} className="research-tag">
                  {label}
                </span>
              )
            )}
          </div>
        </section>

        <div className="footer-decoration">
          <div className="deco-line" />
          <p className="deco-text">{tr.footerText}</p>
        </div>
      </div>
    </>
  )
}

export default Home
