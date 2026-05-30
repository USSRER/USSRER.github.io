import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LlmTech.css'

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'vllm-intro', label: 'vLLM' },
  { id: 'vllm-paged-attention', label: '   PagedAttention' },
  { id: 'vllm-continuous-batching', label: '   Continuous Batching' },
  { id: 'vllm-v1-arch', label: '   v1 Architecture' },
  { id: 'vllm-performance', label: '   Performance' },
  { id: 'lmcache-intro', label: 'LMCache' },
  { id: 'lmcache-arch', label: '   Cache Architecture' },
  { id: 'lmcache-features', label: '   Key Features' },
  { id: 'lmcache-performance', label: '   Performance' },
  { id: 'lmcache-integration', label: '   Integration' },
  { id: 'references', label: 'References' },
]

function LlmTech() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSidebarOpen(false)
  }

  return (
    <>
      <div className="hex-bg" />

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
              &larr;  BACK
            </Link>
            <h3 className="toc-heading">On This Page</h3>
            <nav className="toc-nav">
              {tocItems.map(({ id, label }) => (
                <button
                  key={id}
                  className={`toc-link ${label.startsWith('   ') ? 'toc-sub' : 'toc-main'}`}
                  onClick={() => scrollTo(id)}
                >
                  {label.trim()}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="tech-content">
          <Link to="/" className="back-link top-back-link">&larr;  BACK TO HOME</Link>

          {/* ============ OVERVIEW ============ */}
          <section id="overview" className="section tech-section">
            <h2 className="section-title">LLM Inference Technology</h2>
            <p className="tech-intro">
              Large Language Model (LLM) inference has become a critical infrastructure component in the AI era.
              This page introduces two key open-source technologies that significantly improve LLM serving efficiency:
              <strong className="text-yellow"> vLLM</strong>, a high-throughput inference engine, and
              <strong className="text-yellow"> LMCache</strong>, a KV cache acceleration layer.
            </p>
          </section>

          {/* ============ vLLM ============ */}
          <section id="vllm-intro" className="section tech-section">
            <h2 className="section-title">vLLM: High-Throughput LLM Inference Engine</h2>

            <p className="tech-text">
              <strong>vLLM</strong> is an open-source, high-throughput and memory-efficient inference engine
              for large language models. Developed at UC Berkeley, it has become the most widely adopted
              LLM serving framework in production environments.
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
              <span className="tech-version">Latest: v0.7.3 (April 2026)</span>
            </div>
          </section>

          {/* PagedAttention */}
          <section id="vllm-paged-attention" className="section tech-section">
            <h3 className="tech-subtitle">PagedAttention</h3>

            <p className="tech-text">
              vLLM's core innovation is <strong className="text-cyan">PagedAttention</strong>, which
              borrows the virtual memory paging concept from operating systems to manage the KV cache
              in LLM inference.
            </p>

            <ul className="tech-list">
              <li><strong>Block-based memory management:</strong> KV cache is divided into fixed-size blocks
                (typically 16 tokens per block) rather than stored in contiguous memory.</li>
              <li><strong>Dynamic allocation:</strong> Blocks are allocated on-demand, not pre-reserved
                for the maximum sequence length.</li>
              <li><strong>Memory utilization:</strong> Improved from ~40% (traditional approach) to <span className="text-yellow">90%+</span>,
                eliminating fragmentation.</li>
              <li><strong>Memory sharing:</strong> Blocks can be shared across sequences, enabling efficient
                parallel sampling and beam search with near-zero memory overhead.</li>
              <li><strong>Multi-size page pools (v0.7.3):</strong> Supports 4/8/16 token block sizes,
                reducing short-request memory waste by 75%.</li>
            </ul>
          </section>

          {/* Continuous Batching */}
          <section id="vllm-continuous-batching" className="section tech-section">
            <h3 className="tech-subtitle">Continuous Batching</h3>

            <p className="tech-text">
              Traditional static batching requires all requests in a batch to have the same length,
              leading to wasted computation. vLLM's <strong className="text-cyan">iteration-level
              dynamic batching</strong> solves this:
            </p>

            <ul className="tech-list">
              <li>Requests of varying lengths are packed into a single iteration, eliminating padding overhead.</li>
              <li><strong>Chunked Prefill:</strong> Long prompts are split into smaller chunks and scheduled
                together with decode requests, preventing head-of-line blocking.</li>
              <li><strong>Three scheduling strategies:</strong> FIFO, Shortest Job First (SJF), and
                Earliest Deadline First (EDF) with automatic switching based on workload.</li>
              <li>New requests can be dynamically added or removed mid-generation via the async engine.</li>
            </ul>
          </section>

          {/* v1 Architecture */}
          <section id="vllm-v1-arch" className="section tech-section">
            <h3 className="tech-subtitle">v1 Architecture (Alpha, Jan 2025)</h3>

            <p className="tech-text">
              vLLM v1 is a major architectural overhaul that evolves vLLM from a dedicated
              inference accelerator into a general-purpose serving infrastructure:
            </p>

            <ul className="tech-list">
              <li><strong>Isolated EngineCore:</strong> "1+N" multi-process architecture with per-worker
                GPU isolation for fault tolerance.</li>
              <li><strong>Unified Scheduler:</strong> Token-level to sequence-level flexible scheduling
                with speculative decoding support.</li>
              <li><strong>Zero-overhead Prefix Caching:</strong> Pointer redirection instead of data copy;
                cache hit rate improved from 37% to 89%.</li>
              <li><strong>Performance gains:</strong> 7B model throughput: 1.2K &rarr; 2.1K tokens/s;
                70B first-token latency: 320ms &rarr; 185ms.</li>
            </ul>
          </section>

          {/* vLLM Performance */}
          <section id="vllm-performance" className="section tech-section">
            <h3 className="tech-subtitle">Performance Benchmarks</h3>

            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Traditional</th>
                    <th>vLLM</th>
                    <th>Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GPU Utilization</td>
                    <td>58%</td>
                    <td className="text-yellow">92%</td>
                    <td className="text-cyan">+58.6%</td>
                  </tr>
                  <tr>
                    <td>P50 Latency</td>
                    <td>125ms</td>
                    <td className="text-yellow">89ms</td>
                    <td className="text-cyan">-28.8%</td>
                  </tr>
                  <tr>
                    <td>Max Throughput (QPS)</td>
                    <td>1,200</td>
                    <td className="text-yellow">3,200</td>
                    <td className="text-cyan">+166.7%</td>
                  </tr>
                  <tr>
                    <td>Memory Fragmentation</td>
                    <td>~65%</td>
                    <td className="text-yellow">&lt;5%</td>
                    <td className="text-cyan">13x reduction</td>
                  </tr>
                  <tr>
                    <td>Throughput vs PyTorch</td>
                    <td>1x</td>
                    <td className="text-yellow">4.7x</td>
                    <td className="text-cyan">4.7x</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tech-note">
              <strong>Blackwell GPU (v0.7.3):</strong> FP8 throughput of 26,400 tokens/s
              on 8-GPU configuration — 2.2x improvement over H100 baseline. First-token latency
              reduced by 40% (45ms &rarr; 27ms).
            </div>
          </section>

          {/* ============ LMCache ============ */}
          <section id="lmcache-intro" className="section tech-section">
            <h2 className="section-title">LMCache: KV Cache Acceleration Layer</h2>

            <p className="tech-text">
              <strong>LMCache</strong> is an open-source KV cache layer purpose-built for
              enterprise-scale LLM inference. It sits between inference engines and heterogeneous
              storage tiers, reusing KV caches across requests to dramatically reduce
              Time-to-First-Token (TTFT) and increase throughput.
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
              <span className="tech-version">MLSys 2026 Invited Talk</span>
            </div>
          </section>

          {/* LMCache Architecture */}
          <section id="lmcache-arch" className="section tech-section">
            <h3 className="tech-subtitle">Three-Tier Hierarchical Cache Architecture</h3>

            <p className="tech-text">
              LMCache introduces a multi-level cache hierarchy that decouples computation from storage,
              enabling KV cache capacity far beyond GPU memory limits:
            </p>

            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Storage Medium</th>
                    <th>Latency</th>
                    <th>Typical Capacity</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-yellow">L1</td>
                    <td>GPU HBM</td>
                    <td>Nanosecond</td>
                    <td>8–128 GB</td>
                    <td>Hot / frequently accessed</td>
                  </tr>
                  <tr>
                    <td className="text-cyan">L2</td>
                    <td>CPU DRAM</td>
                    <td>Microsecond</td>
                    <td>Up to 1 TB</td>
                    <td>Warm / intermediate access</td>
                  </tr>
                  <tr>
                    <td>L3</td>
                    <td>NVMe SSD / Remote</td>
                    <td>Millisecond</td>
                    <td>TB to PB scale</td>
                    <td>Cold / infrequent access</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="tech-text">
              Smart eviction policies (LRU + LFU hybrid) automatically move data between tiers.
              Cache loading speeds reach <span className="text-yellow">120 GB/s</span> — a 15x
              improvement over naive approaches — by leveraging CUDA async copy, CUDA IPC,
              and compute-I/O pipelining.
            </p>
          </section>

          {/* LMCache Features */}
          <section id="lmcache-features" className="section tech-section">
            <h3 className="tech-subtitle">Key Features</h3>

            <div className="feature-grid">
              <div className="feature-card">
                <h4 className="feature-name">CacheBlend</h4>
                <p className="feature-desc">
                  Non-prefix KV cache reuse for any repeated text span regardless of position —
                  dramatically improves cache hit rates in multi-turn conversations, RAG, and
                  document-heavy workloads.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">CacheGen</h4>
                <p className="feature-desc">
                  Mixed compression strategies (FP16 quantization, ZSTD, sparse CSR, delta encoding)
                  achieving ~4:1 compression while maintaining 99% accuracy.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">PD Disaggregation</h4>
                <p className="feature-desc">
                  Cross-engine KV cache transfer enables running prefill and decode phases on
                  separate GPU pools for efficient resource allocation and throughput scaling.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">Cross-Engine Sharing</h4>
                <p className="feature-desc">
                  Peer-to-peer (P2P) cache sharing across vLLM instances and engines, supporting
                  NIXL (network-attached cache transfer), GDS (GPU Direct Storage), and RDMA.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">Modular Connectors</h4>
                <p className="feature-desc">
                  Decoupled from engine evolution via KV cache connector architecture. Supports
                  vLLM (V1/V2), SGLang, NVIDIA Dynamo, TRT-LLM, and Modular.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">Multimodal Cache</h4>
                <p className="feature-desc">
                  Supports caching vision-language model embeddings by hashing image-side tokens
                  (mm_hashes), slashing TTFT and GPU memory for multimodal LLMs.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">Zero-Copy Data Movement</h4>
                <p className="feature-desc">
                  Minimizes KV cache loading latency from ~12ms to ~1.8ms on A100 GPUs using
                  CUDA async operations and compute-I/O pipelining.
                </p>
              </div>

              <div className="feature-card">
                <h4 className="feature-name">K8s Native Operator</h4>
                <p className="feature-desc">
                  LMCache Operator (v0.1.1, May 2026) provides Kubernetes-native automated
                  deployment, scaling, and management of cache resources.
                </p>
              </div>
            </div>
          </section>

          {/* LMCache Performance */}
          <section id="lmcache-performance" className="section tech-section">
            <h3 className="tech-subtitle">Performance Benchmarks</h3>

            <div className="tech-table-wrapper">
              <table className="tech-table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Improvement</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>General Throughput</td>
                    <td className="text-yellow">3&ndash;10x</td>
                    <td>With vLLM integration across workloads</td>
                  </tr>
                  <tr>
                    <td>Extreme Throughput</td>
                    <td className="text-yellow">Up to 15x</td>
                    <td>Multi-round QA and document analysis</td>
                  </tr>
                  <tr>
                    <td>TTFT Reduction</td>
                    <td className="text-yellow">62&ndash;65%</td>
                    <td>~1.16s &rarr; ~0.44s on long-context scenarios</td>
                  </tr>
                  <tr>
                    <td>Total Request Latency</td>
                    <td className="text-yellow">54% reduction</td>
                    <td>52.98s &rarr; 24.27s on 460K-token workloads</td>
                  </tr>
                  <tr>
                    <td>GPU Memory Savings</td>
                    <td className="text-yellow">40&ndash;70%</td>
                    <td>By offloading reusable KV caches</td>
                  </tr>
                  <tr>
                    <td>Cache Hit Rate</td>
                    <td className="text-yellow">75&ndash;92%</td>
                    <td>In conversational and RAG scenarios</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* LMCache Integration */}
          <section id="lmcache-integration" className="section tech-section">
            <h3 className="tech-subtitle">Integration with vLLM</h3>

            <p className="tech-text">
              LMCache integrates seamlessly with vLLM through a connector-based architecture.
              A typical deployment configuration:
            </p>

            <div className="code-block">
              <pre>{`# cache_config.yaml
cache_strategy:
  chunk_size: 64          # 32-128 tokens
  compression: true       # ZSTD, ~40-60% reduction
  tiered_storage:
    - type: gpu
      size_gb: 16
    - type: cpu
      size_gb: 64
    - type: disk
      path: /tmp/lmcache
      size_gb: 1024

# Launch vLLM with LMCache
LMCACHE_CONFIG=/path/to/cache_config.yaml \\
vllm serve /models/qwen-14b \\
  --gpu_memory_utilization 0.85 \\
  --kv-transfer-config '{"kv_connector":"LMCacheConnectorV2","kv_role":"kv_both"}'`}</pre>
            </div>

            <p className="tech-text">
              <strong>Supported inference engines:</strong> vLLM (primary, V1 & V2 connector),
              SGLang, NVIDIA Dynamo, TRT-LLM, Modular, AWS LMI.
            </p>

            <p className="tech-text">
              <strong>Production users:</strong> Google Cloud, AWS, CoreWeave, GMI Cloud,
              Tencent, AMD, NVIDIA, IBM, and 30+ companies.
            </p>
          </section>

          {/* References */}
          <section id="references" className="section tech-section">
            <h2 className="section-title">References & Resources</h2>

            <ul className="ref-list">
              <li>
                <a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">
                  vLLM GitHub Repository
                </a>
                <span className="ref-desc">— Official repository for the vLLM inference engine</span>
              </li>
              <li>
                <a href="https://github.com/LMCache/LMCache" target="_blank" rel="noopener noreferrer">
                  LMCache GitHub Repository
                </a>
                <span className="ref-desc">— Official repository for the LMCache KV cache layer</span>
              </li>
              <li>
                <a href="https://docs.vllm.ai/" target="_blank" rel="noopener noreferrer">
                  vLLM Documentation
                </a>
                <span className="ref-desc">— Official documentation and user guides</span>
              </li>
              <li>
                <a href="https://blog.lmcache.ai/" target="_blank" rel="noopener noreferrer">
                  LMCache Blog
                </a>
                <span className="ref-desc">— Technical blog with latest features and benchmarks</span>
              </li>
              <li>
                <a href="https://arxiv.org/abs/2510.09665" target="_blank" rel="noopener noreferrer">
                  LMCache Paper (arXiv:2510.09665)
                </a>
                <span className="ref-desc">— Y. Cheng, Y. Liu et al., Oct 2025</span>
              </li>
              <li>
                <a href="https://mlsys.org/virtual/2026/invited-talk/3646" target="_blank" rel="noopener noreferrer">
                  MLSys 2026 Invited Talk
                </a>
                <span className="ref-desc">— LMCache: An Efficient KV Cache Layer for Enterprise-Scale LLM Inference</span>
              </li>
            </ul>
          </section>

          <div className="footer-decoration">
            <div className="deco-line" />
            <p className="deco-text">Wake the fuck up, samurai. We have a city to burn.</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default LlmTech
