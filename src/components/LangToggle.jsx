import { useLang } from '../context/LanguageContext'
import './LangToggle.css'

export default function LangToggle() {
  const { lang, toggleLang } = useLang()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
      title={lang === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <span className={`lang-option ${lang === 'zh' ? 'active' : ''}`}>中</span>
      <span className="lang-divider">/</span>
      <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
    </button>
  )
}
