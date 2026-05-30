import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import LangToggle from '../components/LangToggle'
import t from '../i18n/translations'
import './LlmTech.css'

function LlmTech() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { lang } = useLang()
  const tr = t[lang].tech

  const tocItems = [
    { id: 'overview', label: tr.tocOverview },
    { id: 'vllm-intro', label: tr.tocVllm },
    { id: 'vllm-paged-attention', label: tr.tocPagedAttention },
    { id: 'vllm-continuous-batching', label: tr.tocContinuousBatching },
    { id: 'vllm-v1-arch', label: tr.tocV1Arch },
    { id: 'vllm-performance', label: tr.tocPerformance },
    { id: 'lmcache-intro', label: tr.tocLmcache },
    { id: 'lmcache-arch', label: tr.tocCacheArch },
    { id: 'lmcache-features', label: tr.tocKeyFeatures },
    { id: 'lmcache-performance', label: tr.tocPerformance },
    { id: 'lmcache-integration', label: tr.tocIntegration },
    { id: 'references', label: tr.tocReferences },
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
              {tocItems.map(({ id, label }) => (
                <button
                  key={id}
                  className={`toc-link ${
                    label === tr.tocOverview || label === tr.tocVllm || label === tr.tocLmcache
                      ? 'toc-main' : 'toc-sub'
                  }`}
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
              {tr.overviewText}{' '}
              <strong className="text-yellow">vLLM</strong>{' '}
              {lang === 'zh' ? '高吞吐量推理引擎' : 'a high-throughput inference engine'}{' '}
              {lang === 'zh' ? '和' : 'and'}{' '}
              <strong className="text-yellow">LMCache</strong>{lang === 'zh' ? 'KV Cache 加速层' : 'a KV cache acceleration layer'}。
            </p>
          </section>

          {/* ============ vLLM INTRO ============ */}
          <section id="vllm-intro" className="section tech-section">
            <h2 className="section-title">{tr.vllmTitle}</h2>
            <p className="tech-text">
              <strong>vLLM</strong> {tr.vllmDesc}
            </p>
            <div className="tech-meta">
              <a
                href="https://github.com/vllm-project/vllm"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub: vllm-project/vllm
              </a>
              <span className="tech-version">{tr.vllmVersion}</span>
            </div>
          </section>

          {/* ============ PAGED ATTENTION ============ */}
          <section id="vllm-paged-attention" className="section tech-section">
            <h3 className="tech-subtitle">{tr.paTitle}</h3>
            <p className="tech-text">
              {tr.paDesc}{' '}
              <strong className="text-cyan">PagedAttention</strong>{tr.paDesc2}
            </p>
            <ul className="tech-list">
              <li><strong>{lang === 'zh' ? '基于 Block 的内存管理：' : 'Block-based memory management: '}</strong>{tr.paItem1}</li>
              <li><strong>{lang === 'zh' ? '动态分配：' : 'Dynamic allocation: '}</strong>{tr.paItem2}</li>
              <li>{tr.paItem3} <span className="text-yellow">90%+</span>{tr.paItem3b}</li>
              <li><strong>{lang === 'zh' ? '内存共享：' : 'Memory sharing: '}</strong>{tr.paItem4}</li>
              <li><strong>{lang === 'zh' ? '多尺寸页池（v0.7.3）：' : 'Multi-size page pools (v0.7.3): '}</strong>{tr.paItem5}</li>
            </ul>
          </section>

          {/* ============ CONTINUOUS BATCHING ============ */}
          <section id="vllm-continuous-batching" className="section tech-section">
            <h3 className="tech-subtitle">{tr.cbTitle}</h3>
            <p className="tech-text">
              {tr.cbDesc}{' '}
              <strong className="text-cyan">{lang === 'zh' ? '迭代级动态批处理' : 'iteration-level dynamic batching'}</strong>{tr.cbDesc2}
            </p>
            <ul className="tech-list">
              <li>{tr.cbItem1}</li>
              <li><strong>{lang === 'zh' ? 'Chunked Prefill：' : 'Chunked Prefill: '}</strong>{tr.cbItem2}</li>
              <li>{tr.cbItem3}</li>
              <li>{tr.cbItem4}</li>
            </ul>
          </section>

          {/* ============ V1 ARCH ============ */}
          <section id="vllm-v1-arch" className="section tech-section">
            <h3 className="tech-subtitle">{tr.v1Title}</h3>
            <p className="tech-text">{tr.v1Desc}</p>
            <ul className="tech-list">
              <li><strong>{lang === 'zh' ? '隔离的 EngineCore：' : 'Isolated EngineCore: '}</strong>{tr.v1Item1}</li>
              <li><strong>{lang === 'zh' ? '统一调度器：' : 'Unified Scheduler: '}</strong>{tr.v1Item2}</li>
              <li><strong>{lang === 'zh' ? '零开销前缀缓存：' : 'Zero-overhead Prefix Caching: '}</strong>{tr.v1Item3}</li>
              <li><strong>{lang === 'zh' ? '性能提升：' : 'Performance gains: '}</strong>{tr.v1Item4}</li>
            </ul>
          </section>

          {/* ============ vLLM PERFORMANCE ============ */}
          <section id="vllm-performance" className="section tech-section">
            <h3 className="tech-subtitle">{tr.vllmPerfTitle}</h3>
            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>{lang === 'zh' ? '指标' : 'Metric'}</th>
                    <th>{lang === 'zh' ? '传统方案' : 'Traditional'}</th>
                    <th>vLLM</th>
                    <th>{lang === 'zh' ? '提升' : 'Improvement'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lang === 'zh' ? 'GPU 利用率' : 'GPU Utilization'}</td>
                    <td>58%</td>
                    <td className="text-yellow">92%</td>
                    <td className="text-cyan">+58.6%</td>
                  </tr>
                  <tr>
                    <td>P50 {lang === 'zh' ? '延迟' : 'Latency'}</td>
                    <td>125ms</td>
                    <td className="text-yellow">89ms</td>
                    <td className="text-cyan">-28.8%</td>
                  </tr>
                  <tr>
                    <td>{lang === 'zh' ? '最大吞吐量 (QPS)' : 'Max Throughput (QPS)'}</td>
                    <td>1,200</td>
                    <td className="text-yellow">3,200</td>
                    <td className="text-cyan">+166.7%</td>
                  </tr>
                  <tr>
                    <td>{lang === 'zh' ? '内存碎片率' : 'Memory Fragmentation'}</td>
                    <td>~65%</td>
                    <td className="text-yellow">&lt;5%</td>
                    <td className="text-cyan">13x</td>
                  </tr>
                  <tr>
                    <td>{lang === 'zh' ? '相对 PyTorch 吞吐量' : 'Throughput vs PyTorch'}</td>
                    <td>1x</td>
                    <td className="text-yellow">4.7x</td>
                    <td className="text-cyan">4.7x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tech-note">
              <strong>Blackwell GPU (v0.7.3):</strong> {tr.vllmPerfNote}
            </div>
          </section>

          {/* ============ LMCACHE INTRO ============ */}
          <section id="lmcache-intro" className="section tech-section">
            <h2 className="section-title">{tr.lmTitle}</h2>
            <p className="tech-text">
              <strong>LMCache</strong> {tr.lmDesc}
            </p>
            <div className="tech-meta">
              <a
                href="https://github.com/LMCache/LMCache"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub: LMCache/LMCache
              </a>
              <span className="tech-version">{tr.lmVersion}</span>
            </div>
          </section>

          {/* ============ LMCACHE ARCH ============ */}
          <section id="lmcache-arch" className="section tech-section">
            <h3 className="tech-subtitle">{tr.lmArchTitle}</h3>
            <p className="tech-text">{tr.lmArchDesc}</p>
            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>{lang === 'zh' ? '层级' : 'Tier'}</th>
                    <th>{lang === 'zh' ? '存储介质' : 'Storage Medium'}</th>
                    <th>{lang === 'zh' ? '延迟' : 'Latency'}</th>
                    <th>{lang === 'zh' ? '典型容量' : 'Typical Capacity'}</th>
                    <th>{lang === 'zh' ? '用途' : 'Use Case'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-yellow">L1</td>
                    <td>GPU HBM</td>
                    <td>{lang === 'zh' ? '纳秒级' : 'Nanosecond'}</td>
                    <td>8–128 GB</td>
                    <td>{tr.lmArchTier1Use}</td>
                  </tr>
                  <tr>
                    <td className="text-cyan">L2</td>
                    <td>CPU DRAM</td>
                    <td>{lang === 'zh' ? '微秒级' : 'Microsecond'}</td>
                    <td>{lang === 'zh' ? '最大 1 TB' : 'Up to 1 TB'}</td>
                    <td>{tr.lmArchTier2Use}</td>
                  </tr>
                  <tr>
                    <td>L3</td>
                    <td>NVMe SSD / {lang === 'zh' ? '远程存储' : 'Remote'}</td>
                    <td>{lang === 'zh' ? '毫秒级' : 'Millisecond'}</td>
                    <td>{lang === 'zh' ? 'TB 至 PB 级' : 'TB to PB scale'}</td>
                    <td>{tr.lmArchTier3Use}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="tech-text">
              {tr.lmArchSpeedDesc}{' '}
              <span className="text-yellow">120 GB/s</span>{tr.lmArchSpeedDesc2}
            </p>
          </section>

          {/* ============ LMCACHE FEATURES ============ */}
          <section id="lmcache-features" className="section tech-section">
            <h3 className="tech-subtitle">{tr.lmFeatTitle}</h3>
            <div className="feature-grid">
              {[
                { name: tr.lmFeat1Name, desc: tr.lmFeat1Desc },
                { name: tr.lmFeat2Name, desc: tr.lmFeat2Desc },
                { name: tr.lmFeat3Name, desc: tr.lmFeat3Desc },
                { name: tr.lmFeat4Name, desc: tr.lmFeat4Desc },
                { name: tr.lmFeat5Name, desc: tr.lmFeat5Desc },
                { name: tr.lmFeat6Name, desc: tr.lmFeat6Desc },
                { name: tr.lmFeat7Name, desc: tr.lmFeat7Desc },
                { name: tr.lmFeat8Name, desc: tr.lmFeat8Desc },
              ].map(({ name, desc }) => (
                <div key={name} className="feature-card">
                  <h4 className="feature-name">{name}</h4>
                  <p className="feature-desc">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ============ LMCACHE PERFORMANCE ============ */}
          <section id="lmcache-performance" className="section tech-section">
            <h3 className="tech-subtitle">{tr.lmPerfTitle}</h3>
            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>{lang === 'zh' ? '场景' : 'Scenario'}</th>
                    <th>{lang === 'zh' ? '提升' : 'Improvement'}</th>
                    <th>{lang === 'zh' ? '说明' : 'Details'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{tr.lmPerfRow1Scene}</td>
                    <td className="text-yellow">3&ndash;10x</td>
                    <td>{tr.lmPerfRow1Detail}</td>
                  </tr>
                  <tr>
                    <td>{tr.lmPerfRow2Scene}</td>
                    <td className="text-yellow">{lang === 'zh' ? '最高 15x' : 'Up to 15x'}</td>
                    <td>{tr.lmPerfRow2Detail}</td>
                  </tr>
                  <tr>
                    <td>{tr.lmPerfRow3Scene}</td>
                    <td className="text-yellow">62&ndash;65%</td>
                    <td>{tr.lmPerfRow3Detail}</td>
                  </tr>
                  <tr>
                    <td>{tr.lmPerfRow4Scene}</td>
                    <td className="text-yellow">{lang === 'zh' ? '降低 54%' : '54% reduction'}</td>
                    <td>{tr.lmPerfRow4Detail}</td>
                  </tr>
                  <tr>
                    <td>{tr.lmPerfRow5Scene}</td>
                    <td className="text-yellow">40&ndash;70%</td>
                    <td>{tr.lmPerfRow5Detail}</td>
                  </tr>
                  <tr>
                    <td>{tr.lmPerfRow6Scene}</td>
                    <td className="text-yellow">75&ndash;92%</td>
                    <td>{tr.lmPerfRow6Detail}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ============ INTEGRATION ============ */}
          <section id="lmcache-integration" className="section tech-section">
            <h3 className="tech-subtitle">{tr.lmIntTitle}</h3>
            <p className="tech-text">{tr.lmIntDesc}</p>
            <div className="code-block">
              <pre>{`# cache_config.yaml
cache_strategy:
  chunk_size: 64          # 32-128 tokens
  compression: true       # ZSTD, ~40-60% ${lang === 'zh' ? '压缩比' : 'reduction'}
  tiered_storage:
    - type: gpu
      size_gb: 16
    - type: cpu
      size_gb: 64
    - type: disk
      path: /tmp/lmcache
      size_gb: 1024

# ${lang === 'zh' ? '使用 LMCache 启动 vLLM' : 'Launch vLLM with LMCache'}
LMCACHE_CONFIG=/path/to/cache_config.yaml \\
vllm serve /models/qwen-14b \\
  --gpu_memory_utilization 0.85 \\
  --kv-transfer-config '{"kv_connector":"LMCacheConnectorV2","kv_role":"kv_both"}'`}</pre>
            </div>
            <p className="tech-text">
              <strong>{tr.lmIntEngines}</strong>{tr.lmIntEnginesList}
            </p>
            <p className="tech-text">
              <strong>{tr.lmIntUsers}</strong>{tr.lmIntUsersList}
            </p>
          </section>

          {/* ============ REFERENCES ============ */}
          <section id="references" className="section tech-section">
            <h2 className="section-title">{tr.refTitle}</h2>
            <ul className="ref-list">
              <li>
                <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">
                  {tr.ref1}
                </a>
                <span className="ref-desc">{tr.ref1desc}</span>
              </li>
              <li>
                <a href="https://github.com/LMCache/LMCache" target="_blank" rel="noopener noreferrer">
                  {tr.ref2}
                </a>
                <span className="ref-desc">{tr.ref2desc}</span>
              </li>
              <li>
                <a href="https://docs.vllm.ai/" target="_blank" rel="noopener noreferrer">
                  {tr.ref3}
                </a>
                <span className="ref-desc">{tr.ref3desc}</span>
              </li>
              <li>
                <a href="https://blog.lmcache.ai/" target="_blank" rel="noopener noreferrer">
                  {tr.ref4}
                </a>
                <span className="ref-desc">{tr.ref4desc}</span>
              </li>
              <li>
                <a href="https://arxiv.org/abs/2510.09665" target="_blank" rel="noopener noreferrer">
                  {tr.ref5}
                </a>
                <span className="ref-desc">{tr.ref5desc}</span>
              </li>
              <li>
                <a href="https://mlsys.org/virtual/2026/invited-talk/3646" target="_blank" rel="noopener noreferrer">
                  {tr.ref6}
                </a>
                <span className="ref-desc">{tr.ref6desc}</span>
              </li>
            </ul>
          </section>

          <div className="footer-decoration">
            <div className="deco-line" />
            <p className="deco-text">{lang === 'zh' ? '醒醒吧，武士。我们有一座城市要烧掉。' : 'Wake the fuck up, samurai. We have a city to burn.'}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default LlmTech
