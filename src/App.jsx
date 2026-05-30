import avatarImg from './assets/v-avatar.svg'
import './App.css'

const researchAreas = ['无线网络', '物联网', '大模型', '通算协同']

function App() {
  return (
    <>
      {/* Hexagonal background pattern */}
      <div className="hex-bg" />

      <div className="page">
        {/* Header */}
        <header className="header">
          <div className="name-wrapper">
            <h1 className="name">SUNK</h1>
          </div>
          <p className="subtitle">//  computer science  //</p>
        </header>

        {/* Main Info Card */}
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

        {/* Research Areas */}
        <section className="section">
          <h2 className="section-title">Research Areas</h2>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <span key={area} className="research-tag">
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="footer-decoration">
          <div className="deco-line" />
          <p className="deco-text">Wake the fuck up, samurai. We have a city to burn.</p>
        </div>
      </div>
    </>
  )
}

export default App
