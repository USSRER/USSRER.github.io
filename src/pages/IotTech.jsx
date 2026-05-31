import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LangToggle from '../components/LangToggle'
import t from '../i18n/translations'
import './IotTech.css'

function IotTech() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang } = useLang()
  const tr = t[lang].iot

  const tocItems = [
    { id: 'overview', label: tr.tocOverview, main: true },
    { id: 'wifi', label: tr.tocWifi, main: true },
    { id: 'wifi-mod', label: tr.tocWifiMod, main: false },
    { id: 'wifi-code', label: tr.tocWifiCode, main: false },
    { id: 'wifi-net', label: tr.tocWifiNet, main: false },
    { id: 'uwb', label: tr.tocUwb, main: true },
    { id: 'uwb-mod', label: tr.tocUwbMod, main: false },
    { id: 'uwb-code', label: tr.tocUwbCode, main: false },
    { id: 'uwb-net', label: tr.tocUwbNet, main: false },
    { id: 'lora', label: tr.tocLoRa, main: true },
    { id: 'lora-mod', label: tr.tocLoRaMod, main: false },
    { id: 'lora-code', label: tr.tocLoRaCode, main: false },
    { id: 'lora-net', label: tr.tocLoRaNet, main: false },
    { id: 'ble', label: tr.tocBle, main: true },
    { id: 'ble-mod', label: tr.tocBleMod, main: false },
    { id: 'ble-code', label: tr.tocBleCode, main: false },
    { id: 'ble-net', label: tr.tocBleNet, main: false },
    { id: 'zigbee', label: tr.tocZigbee, main: true },
    { id: 'zigbee-mod', label: tr.tocZigbeeMod, main: false },
    { id: 'zigbee-code', label: tr.tocZigbeeCode, main: false },
    { id: 'zigbee-net', label: tr.tocZigbeeNet, main: false },
    { id: 'compare', label: tr.tocCompare, main: true },
    { id: 'references', label: tr.tocReferences, main: true },
  ]

  const compareData = [
    { attr: lang === 'zh' ? '频段' : 'Frequency', wifi: '2.4 / 5 / 6 GHz', uwb: '3.1–10.6 GHz', lora: 'Sub-GHz ISM', ble: '2.4 GHz ISM', zigbee: '868/915 MHz, 2.4 GHz' },
    { attr: lang === 'zh' ? '信道带宽' : 'Bandwidth', wifi: '20 / 40 / 80 / 160 MHz', uwb: '≥ 500 MHz', lora: '125 / 250 / 500 kHz', ble: '2 MHz', zigbee: '2 MHz (2.4 GHz)' },
    { attr: lang === 'zh' ? '最大数据速率' : 'Max Data Rate', wifi: '9.6 Gbps (Wi-Fi 6)', uwb: '27 Mbps (802.15.4z)', lora: '50 kbps (SF7)', ble: '2 Mbps (LE 2M)', zigbee: '250 kbps' },
    { attr: lang === 'zh' ? '调制方式' : 'Modulation', wifi: 'OFDM / OFDMA / DSSS', uwb: 'PPM / BPSK / OOK', lora: 'CSS', ble: 'GFSK', zigbee: 'O-QPSK / BPSK' },
    { attr: lang === 'zh' ? '信道编码' : 'Channel Coding', wifi: 'BCC + LDPC', uwb: 'RS + Conv. + LDPC', lora: 'Hamming + 交织', ble: 'FEC (LE Coded)', zigbee: 'DSSS 扩频' },
    { attr: lang === 'zh' ? '通信距离' : 'Range', wifi: '~100 m (室内)', uwb: '~200 m', lora: '2–15 km', ble: '~100 m (LE Coded 1 km)', zigbee: '10–100 m' },
    { attr: lang === 'zh' ? '功耗' : 'Power', wifi: '高', uwb: '低', lora: '超低', ble: '超低', zigbee: '超低' },
    { attr: lang === 'zh' ? '组网拓扑' : 'Topology', wifi: 'Star / Mesh / P2P', uwb: 'Piconet / TDoA', lora: 'Star (LoRaWAN)', ble: 'Star / Mesh / Broadcast', zigbee: 'Star / Tree / Mesh' },
    { attr: lang === 'zh' ? '定位精度' : 'Positioning', wifi: '1–5 m (FTM)', uwb: '±10 cm', lora: '20–200 m (TDoA)', ble: '1–5 m (AoA/AoD)', zigbee: '—' },
    { attr: lang === 'zh' ? '典型应用' : 'Typical Apps', wifi: lang === 'zh' ? '视频监控、工业视觉' : 'Video surveillance, IIoT vision', uwb: lang === 'zh' ? '精准定位、数字钥匙' : 'Precision location, digital key', lora: lang === 'zh' ? '智慧农业、抄表' : 'Smart agriculture, metering', ble: lang === 'zh' ? '可穿戴、智能家居' : 'Wearables, smart home', zigbee: lang === 'zh' ? '智能家居、楼宇自动化' : 'Smart home, building automation' },
  ]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
  }

  const TechSection = ({ id, title, desc, items }) => (
    <section id={id} className="section tech-section">
      <h2 className="section-title">{title}</h2>
      <p className="tech-text">{desc}</p>
      {items && (
        <ul className="tech-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )

  const TechSubSection = ({ id, title, desc, items }) => (
    <section id={id} className="section tech-section">
      <h3 className="tech-subtitle">{title}</h3>
      <p className="tech-text">{desc}</p>
      {items && (
        <ul className="tech-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )

  return (
    <>
      <div className="hex-bg" />
      <LangToggle />

      {/* Mobile toggle */}
      <button
        className="toc-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle table of contents"
      >
        <span className="toc-toggle-bar" />
        <span className="toc-toggle-bar" />
        <span className="toc-toggle-bar" />
      </button>

      <div className="tech-layout">
        {/* Sidebar TOC */}
        <aside className={`tech-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-inner">
            <Link to="/" className="back-link">
              {tr.backHome}
            </Link>
            <h3 className="toc-heading">{tr.tocHeading}</h3>
            <nav className="toc-nav">
              {tocItems.map(({ id, label, main }) => (
                <button
                  key={id}
                  className={`toc-link ${main ? 'toc-main' : 'toc-sub'}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="tech-content">
          <Link to="/" className="back-link top-back-link">{tr.backHomeTop}</Link>

          {/* ============ OVERVIEW ============ */}
          <section id="overview" className="section tech-section">
            <h2 className="section-title">{tr.overviewTitle}</h2>
            <p className="tech-intro">{tr.overviewText}</p>
          </section>

          {/* ================================================================ */}
          {/*                            Wi-Fi                                 */}
          {/* ================================================================ */}
          <TechSection id="wifi" title={tr.wifiTitle} desc={tr.wifiDesc} />
          <TechSubSection
            id="wifi-mod"
            title={tr.wifiModTitle}
            desc={tr.wifiModDesc}
            items={[tr.wifiMod1, tr.wifiMod2, tr.wifiMod3, tr.wifiMod4, tr.wifiMod5]}
          />
          <TechSubSection
            id="wifi-code"
            title={tr.wifiCodeTitle}
            desc={tr.wifiCodeDesc}
            items={[tr.wifiCode1, tr.wifiCode2, tr.wifiCode3, tr.wifiCode4, tr.wifiCode5]}
          />
          <TechSubSection
            id="wifi-net"
            title={tr.wifiNetTitle}
            desc={tr.wifiNetDesc}
            items={[tr.wifiNet1, tr.wifiNet2, tr.wifiNet3, tr.wifiNet4, tr.wifiNet5, tr.wifiNet6]}
          />

          {/* ================================================================ */}
          {/*                            UWB                                  */}
          {/* ================================================================ */}
          <TechSection id="uwb" title={tr.uwbTitle} desc={tr.uwbDesc} />
          <TechSubSection
            id="uwb-mod"
            title={tr.uwbModTitle}
            desc={tr.uwbModDesc}
            items={[tr.uwbMod1, tr.uwbMod2, tr.uwbMod3, tr.uwbMod4, tr.uwbMod5]}
          />
          <TechSubSection
            id="uwb-code"
            title={tr.uwbCodeTitle}
            desc={tr.uwbCodeDesc}
            items={[tr.uwbCode1, tr.uwbCode2, tr.uwbCode3, tr.uwbCode4, tr.uwbCode5]}
          />
          <TechSubSection
            id="uwb-net"
            title={tr.uwbNetTitle}
            desc={tr.uwbNetDesc}
            items={[tr.uwbNet1, tr.uwbNet2, tr.uwbNet3, tr.uwbNet4, tr.uwbNet5]}
          />

          {/* ================================================================ */}
          {/*                            LoRa                                 */}
          {/* ================================================================ */}
          <TechSection id="lora" title={tr.loraTitle} desc={tr.loraDesc} />
          <TechSubSection
            id="lora-mod"
            title={tr.loraModTitle}
            desc={tr.loraModDesc}
            items={[tr.loraMod1, tr.loraMod2, tr.loraMod3, tr.loraMod4, tr.loraMod5]}
          />
          <TechSubSection
            id="lora-code"
            title={tr.loraCodeTitle}
            desc={tr.loraCodeDesc}
            items={[tr.loraCode1, tr.loraCode2, tr.loraCode3, tr.loraCode4, tr.loraCode5]}
          />
          <TechSubSection
            id="lora-net"
            title={tr.loraNetTitle}
            desc={tr.loraNetDesc}
            items={[tr.loraNet1, tr.loraNet2, tr.loraNet3, tr.loraNet4, tr.loraNet5]}
          />

          {/* ================================================================ */}
          {/*                            BLE                                  */}
          {/* ================================================================ */}
          <TechSection id="ble" title={tr.bleTitle} desc={tr.bleDesc} />
          <TechSubSection
            id="ble-mod"
            title={tr.bleModTitle}
            desc={tr.bleModDesc}
            items={[tr.bleMod1, tr.bleMod2, tr.bleMod3, tr.bleMod4]}
          />
          <TechSubSection
            id="ble-code"
            title={tr.bleCodeTitle}
            desc={tr.bleCodeDesc}
            items={[tr.bleCode1, tr.bleCode2, tr.bleCode3, tr.bleCode4, tr.bleCode5]}
          />
          <TechSubSection
            id="ble-net"
            title={tr.bleNetTitle}
            desc={tr.bleNetDesc}
            items={[tr.bleNet1, tr.bleNet2, tr.bleNet3, tr.bleNet4, tr.bleNet5, tr.bleNet6]}
          />

          {/* ================================================================ */}
          {/*                          ZigBee                                 */}
          {/* ================================================================ */}
          <TechSection id="zigbee" title={tr.zigbeeTitle} desc={tr.zigbeeDesc} />
          <TechSubSection
            id="zigbee-mod"
            title={tr.zigbeeModTitle}
            desc={tr.zigbeeModDesc}
            items={[tr.zigbeeMod1, tr.zigbeeMod2, tr.zigbeeMod3, tr.zigbeeMod4]}
          />
          <TechSubSection
            id="zigbee-code"
            title={tr.zigbeeCodeTitle}
            desc={tr.zigbeeCodeDesc}
            items={[tr.zigbeeCode1, tr.zigbeeCode2, tr.zigbeeCode3, tr.zigbeeCode4, tr.zigbeeCode5]}
          />
          <TechSubSection
            id="zigbee-net"
            title={tr.zigbeeNetTitle}
            desc={tr.zigbeeNetDesc}
            items={[tr.zigbeeNet1, tr.zigbeeNet2, tr.zigbeeNet3, tr.zigbeeNet4, tr.zigbeeNet5, tr.zigbeeNet6]}
          />

          {/* ============ COMPARISON TABLE ============ */}
          <section id="compare" className="section tech-section">
            <h2 className="section-title">{tr.compareTitle}</h2>
            <p className="tech-text">{tr.compareDesc}</p>
            <div className="tech-table-wrapper">
              <table className="tech-table iot-compare-table">
                <thead>
                  <tr>
                    <th>{lang === 'zh' ? '属性' : 'Attribute'}</th>
                    <th className="text-yellow">Wi-Fi</th>
                    <th className="text-cyan">UWB</th>
                    <th>LoRa</th>
                    <th>BLE</th>
                    <th>ZigBee</th>
                  </tr>
                </thead>
                <tbody>
                  {compareData.map((row, i) => (
                    <tr key={i}>
                      <td className="iot-compare-attr">{row.attr}</td>
                      <td>{row.wifi}</td>
                      <td>{row.uwb}</td>
                      <td>{row.lora}</td>
                      <td>{row.ble}</td>
                      <td>{row.zigbee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ REFERENCES ============ */}
          <section id="references" className="section tech-section">
            <h2 className="section-title">{tr.refTitle}</h2>
            <ul className="ref-list">
              <li>
                <a href="https://standards.ieee.org/ieee/802.11/7028/" target="_blank" rel="noopener noreferrer">
                  {tr.ref1}
                </a>
                <span className="ref-desc">{tr.ref1desc}</span>
              </li>
              <li>
                <a href="https://standards.ieee.org/ieee/802.15.4z/10230/" target="_blank" rel="noopener noreferrer">
                  {tr.ref2}
                </a>
                <span className="ref-desc">{tr.ref2desc}</span>
              </li>
              <li>
                <a href="https://resources.lora-alliance.org/technical-specifications" target="_blank" rel="noopener noreferrer">
                  {tr.ref3}
                </a>
                <span className="ref-desc">{tr.ref3desc}</span>
              </li>
              <li>
                <a href="https://www.bluetooth.com/specifications/specs/core-specification-5-4/" target="_blank" rel="noopener noreferrer">
                  {tr.ref4}
                </a>
                <span className="ref-desc">{tr.ref4desc}</span>
              </li>
              <li>
                <a href="https://csa-iot.org/developer-resource/specifications-download-request/" target="_blank" rel="noopener noreferrer">
                  {tr.ref5}
                </a>
                <span className="ref-desc">{tr.ref5desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/38_series/38.830/" target="_blank" rel="noopener noreferrer">
                  {tr.ref6}
                </a>
                <span className="ref-desc">{tr.ref6desc}</span>
              </li>
            </ul>
          </section>

          <div className="footer-decoration">
            <div className="deco-line" />
            <p className="deco-text">{lang === 'zh' ? '一切皆可连接，万物皆可智能。' : 'Everything that can be connected, will be connected.'}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default IotTech
