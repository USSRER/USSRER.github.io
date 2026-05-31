import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LangToggle from '../components/LangToggle'
import t from '../i18n/translations'
import './Sa2Tech.css'

function Sa2Tech() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang } = useLang()
  const tr = t[lang].sa2

  const nfTable = [
    { name: 'AMF', role: lang === 'zh' ? '接入与移动性管理功能' : 'Access and Mobility Management Function', desc: lang === 'zh' ? '注册管理、连接管理、可达性管理、移动性管理、接入认证与授权。UE 与核心网之间的 NAS 信令终结点。' : 'Registration, connection, reachability, and mobility management. Access authentication and authorization. NAS signaling termination point between UE and core network.' },
    { name: 'SMF', role: lang === 'zh' ? '会话管理功能' : 'Session Management Function', desc: lang === 'zh' ? 'PDU 会话的建立、修改和释放。UE IP 地址分配管理。UPF 的选择、重选和流量导向控制。DHCP 和 ARP 代理。' : 'PDU session establishment, modification, and release. UE IP address allocation and management. UPF selection, reselection, and traffic steering control. DHCP and ARP proxy.' },
    { name: 'UPF', role: lang === 'zh' ? '用户面功能' : 'User Plane Function', desc: lang === 'zh' ? '用户面数据包的路由和转发。QoS 执行（包过滤、门控、速率限制）。与外部分组数据网络（DNN）的互连点。用量上报和合法监听。' : 'User-plane packet routing and forwarding. QoS enforcement (packet filtering, gating, rate limiting). Interconnection point with external Data Networks (DNN). Usage reporting and lawful interception.' },
    { name: 'PCF', role: lang === 'zh' ? '策略控制功能' : 'Policy Control Function', desc: lang === 'zh' ? '统一的策略框架，管理网络行为规则。向 SMF 提供 PCC（策略控制与计费）规则，向 AMF 提供接入与移动性策略。支持网络切片策略差异化。' : 'Unified policy framework governing network behavior. Provides PCC (Policy Control and Charging) rules to SMF and access/mobility policies to AMF. Supports slice-differentiated policies.' },
    { name: 'UDM', role: lang === 'zh' ? '统一数据管理' : 'Unified Data Management', desc: lang === 'zh' ? '用户签约数据的存储和管理。SUCI 解密和 SUPI 生成。支持 UDR（统一数据存储库）前后端分离部署。与 AUSF 协作完成认证凭证生成。' : 'Storage and management of subscriber data. SUCI decryption and SUPI generation. Supports front-end/back-end separation with UDR (Unified Data Repository). Generates authentication credentials jointly with AUSF.' },
    { name: 'AUSF', role: lang === 'zh' ? '认证服务器功能' : 'Authentication Server Function', desc: lang === 'zh' ? '5G-AKA 和 EAP-AKA\' 认证的服务器端执行。与 UDM 交互获取认证向量，向 AMF 返回认证结果。支持 UE 对网络的认证。' : 'Server-side execution of 5G-AKA and EAP-AKA\' authentication. Fetches authentication vectors from UDM and returns results to AMF. Supports UE authentication of the network.' },
    { name: 'NRF', role: lang === 'zh' ? '网络存储库功能' : 'Network Repository Function', desc: lang === 'zh' ? 'NF 服务注册、发现和状态跟踪。维护可用 NF 实例及其支持的服务清单。通过 NF Discover 请求为消费者 NF 提供目标 NF 的服务端点（FQDN/IP + 端口）。' : 'NF service registration, discovery, and status tracking. Maintains an inventory of available NF instances and their supported services. Provides target NF service endpoints (FQDN/IP + port) to consumer NFs through NF Discover requests.' },
    { name: 'NSSF', role: lang === 'zh' ? '网络切片选择功能' : 'Network Slice Selection Function', desc: lang === 'zh' ? '根据 UE 请求的 S-NSSAI 和签约信息选择服务 AMF 和服务切片实例集。支持基于 TA、负载和切片可用性的多维度选择策略。' : 'Selects the serving AMF and slice instance set based on the UE-requested S-NSSAI and subscription information. Supports multi-dimensional selection policies based on TA, load, and slice availability.' },
    { name: 'NEF', role: lang === 'zh' ? '网络开放功能' : 'Network Exposure Function', desc: lang === 'zh' ? '安全地向 AF（应用功能）暴露 3GPP NF 的能力和事件。将外部 AF 的请求翻译为内部 NF 可理解的操作。提供 API 管理、监控、流量控制和计费。' : 'Securely exposes 3GPP NF capabilities and events to Application Functions (AFs). Translates external AF requests into operations understandable by internal NFs. Provides API management, monitoring, flow control, and charging.' },
  ]

  const tocItems = [
    { id: 'overview', label: tr.tocOverview, main: true },
    { id: 'arch', label: tr.tocArch, main: true },
    { id: 'nf', label: tr.tocNF, main: true },
    { id: 'slicing', label: tr.tocSlicing, main: true },
    { id: 'edge', label: tr.tocEdge, main: true },
    { id: 'qos', label: tr.tocQoS, main: true },
    { id: 'security', label: tr.tocSecurity, main: true },
    { id: 'interworking', label: tr.tocInterworking, main: true },
    { id: 'references', label: tr.tocReferences, main: true },
  ]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
  }

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
            <p className="tech-intro">
              {tr.overviewText}
            </p>
          </section>

          {/* ============ SBA ARCHITECTURE ============ */}
          <section id="arch" className="section tech-section">
            <h2 className="section-title">{tr.archTitle}</h2>
            <p className="tech-text">
              <strong className="text-cyan">5GC SBA</strong> {tr.archDesc}
            </p>
            <ul className="tech-list">
              <li><strong>{lang === 'zh' ? '网络功能服务化：' : 'NF as Services: '}</strong>{tr.archItem1}</li>
              <li><strong>{lang === 'zh' ? '统一服务总线：' : 'Unified Service Bus: '}</strong>{tr.archItem2}</li>
              <li><strong>{lang === 'zh' ? '控制面/用户面分离 (CUPS)：' : 'CUPS: '}</strong>{tr.archItem3}</li>
              <li><strong>{lang === 'zh' ? '无状态设计：' : 'Stateless Design: '}</strong>{tr.archItem4}</li>
            </ul>
          </section>

          {/* ============ NETWORK FUNCTIONS ============ */}
          <section id="nf" className="section tech-section">
            <h2 className="section-title">{tr.nfTitle}</h2>
            <p className="tech-text">{tr.nfDesc}</p>
            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>NF</th>
                    <th>{lang === 'zh' ? '功能名称' : 'Function Name'}</th>
                    <th>{lang === 'zh' ? '核心职责' : 'Core Responsibilities'}</th>
                  </tr>
                </thead>
                <tbody>
                  {nfTable.map(({ name, role, desc }) => (
                    <tr key={name}>
                      <td className="text-yellow">{name}</td>
                      <td className="text-cyan">{role}</td>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ NETWORK SLICING ============ */}
          <section id="slicing" className="section tech-section">
            <h2 className="section-title">{tr.slicingTitle}</h2>
            <p className="tech-text">{tr.slicingDesc}</p>
            <ul className="tech-list">
              <li><strong>S-NSSAI：</strong>{tr.slicingItem1}</li>
              <li><strong>NSSF：</strong>{tr.slicingItem2}</li>
              <li><strong>{lang === 'zh' ? '切片隔离：' : 'Slice Isolation: '}</strong>{tr.slicingItem3}</li>
              <li><strong>NSSAAF：</strong>{tr.slicingItem4}</li>
            </ul>
          </section>

          {/* ============ EDGE COMPUTING ============ */}
          <section id="edge" className="section tech-section">
            <h2 className="section-title">{tr.edgeTitle}</h2>
            <p className="tech-text">{tr.edgeDesc}</p>
            <ul className="tech-list">
              <li><strong>ULCL / BP：</strong>{tr.edgeItem1}</li>
              <li><strong>LADN：</strong>{tr.edgeItem2}</li>
              <li><strong>{lang === 'zh' ? 'AF 影响流量路由：' : 'AF Influence on Traffic Routing: '}</strong>{tr.edgeItem3}</li>
              <li><strong>SSC Mode 2/3：</strong>{tr.edgeItem4}</li>
            </ul>
          </section>

          {/* ============ QoS FRAMEWORK ============ */}
          <section id="qos" className="section tech-section">
            <h2 className="section-title">{tr.qoSTitle}</h2>
            <p className="tech-text">{tr.qoSDesc}</p>
            <ul className="tech-list">
              <li><strong>{lang === 'zh' ? 'QoS Flow：' : 'QoS Flow: '}</strong>{tr.qoSItem1}</li>
              <li><strong>5QI：</strong>{tr.qoSItem2}</li>
              <li><strong>{lang === 'zh' ? '反射 QoS：' : 'Reflective QoS: '}</strong>{tr.qoSItem3}</li>
              <li><strong>{lang === 'zh' ? 'QoS 映射 (SDAP)：' : 'QoS Mapping (SDAP): '}</strong>{tr.qoSItem4}</li>
            </ul>
          </section>

          {/* ============ SECURITY ============ */}
          <section id="security" className="section tech-section">
            <h2 className="section-title">{tr.securityTitle}</h2>
            <p className="tech-text">{tr.securityDesc}</p>
            <ul className="tech-list">
              <li><strong>SUCI：</strong>{tr.securityItem1}</li>
              <li><strong>{lang === 'zh' ? '统一认证框架：' : 'Unified Authentication Framework: '}</strong>{tr.securityItem2}</li>
              <li><strong>SEPP：</strong>{tr.securityItem3}</li>
              <li><strong>SCAS：</strong>{tr.securityItem4}</li>
            </ul>
          </section>

          {/* ============ INTERWORKING ============ */}
          <section id="interworking" className="section tech-section">
            <h2 className="section-title">{tr.interworkingTitle}</h2>
            <p className="tech-text">{tr.interworkingDesc}</p>
            <ul className="tech-list">
              <li><strong>{lang === 'zh' ? '双注册模式：' : 'Dual Registration Mode: '}</strong>{tr.interworkingItem1}</li>
              <li><strong>N26 {lang === 'zh' ? '接口互通：' : 'Interface Interworking: '}</strong>{tr.interworkingItem2}</li>
              <li><strong>{lang === 'zh' ? '网络共享 (MOCN/GWCN)：' : 'Network Sharing (MOCN/GWCN): '}</strong>{tr.interworkingItem3}</li>
              <li><strong>{lang === 'zh' ? '互操作场景：' : 'Interoperability Scenarios: '}</strong>{tr.interworkingItem4}</li>
            </ul>
          </section>

          {/* ============ REFERENCES ============ */}
          <section id="references" className="section tech-section">
            <h2 className="section-title">{tr.refTitle}</h2>
            <ul className="ref-list">
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/23_series/23.501/" target="_blank" rel="noopener noreferrer">
                  {tr.ref1}
                </a>
                <span className="ref-desc">{tr.ref1desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/23_series/23.502/" target="_blank" rel="noopener noreferrer">
                  {tr.ref2}
                </a>
                <span className="ref-desc">{tr.ref2desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/23_series/23.503/" target="_blank" rel="noopener noreferrer">
                  {tr.ref3}
                </a>
                <span className="ref-desc">{tr.ref3desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/specifications-technologies/specifications-by-series" target="_blank" rel="noopener noreferrer">
                  {tr.ref4}
                </a>
                <span className="ref-desc">{tr.ref4desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/33_series/33.501/" target="_blank" rel="noopener noreferrer">
                  {tr.ref5}
                </a>
                <span className="ref-desc">{tr.ref5desc}</span>
              </li>
              <li>
                <a href="https://www.3gpp.org/ftp/Specs/archive/23_series/23.401/" target="_blank" rel="noopener noreferrer">
                  {tr.ref6}
                </a>
                <span className="ref-desc">{tr.ref6desc}</span>
              </li>
            </ul>
          </section>

          <div className="footer-decoration">
            <div className="deco-line" />
            <p className="deco-text">{lang === 'zh' ? '网络无边，架构有界。' : 'The network has no edges, but its architecture has boundaries.'}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Sa2Tech
