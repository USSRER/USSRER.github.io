import { Link } from 'react-router-dom'
import avatarImg from '../assets/v-avatar.svg'
import './Home.css'

const researchAreas = [
  { label: '无线网络', to: null },
  { label: '物联网', to: null },
  { label: '大模型', to: '/llm-tech' },
  { label: '通算协同', to: null },
]

function Home() {
  return (
    <>
      <div className="hex-bg" />

      <div className="page">
        <header className="header">
          <div className="name-wrapper">
            <h1 className="name">SUNK</h1>
          </div>
          <p className="subtitle">//  computer science  //</p>
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
              <span className="info-label">Name</span>
              <span className="info-value highlight">SUNK</span>
            </div>
            <div className="info-row">
              <span className="info-label">Degree</span>
              <span className="info-value">计算机科学与技术 博士</span>
            </div>
            <div className="info-row">
              <span className="info-label">Research</span>
              <span className="info-value">
                无线网络 · 物联网 · 大模型 · 通算协同
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Contact</span>
              <span className="info-value highlight">847484392</span>
            </div>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">Research Areas</h2>
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
          <p className="deco-text">Wake the fuck up, samurai. We have a city to burn.</p>
        </div>
      </div>
    </>
  )
}

export default Home
