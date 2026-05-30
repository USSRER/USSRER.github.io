const t = {
  en: {
    // Home page
    home: {
      subtitle: '//  computer science  //',
      nameLabel: 'Name',
      degreeLabel: 'Degree',
      degreeValue: 'Computer Science and Technology',
      researchLabel: 'Research',
      researchValue: 'Wireless Networks · IoT · LLM · Computation-Communication Convergence',
      contactLabel: 'Contact',
      sectionTitle: 'Research Areas',
      footerText: 'Wake the fuck up, samurai. We have a city to burn.',
    },

    // LlmTech page
    tech: {
      backHome: '←  BACK',
      backHomeTop: '←  BACK TO HOME',
      tocHeading: 'On This Page',
      tocOverview: 'Overview',
      tocVllm: 'vLLM',
      tocPagedAttention: 'PagedAttention',
      tocContinuousBatching: 'Continuous Batching',
      tocV1Arch: 'v1 Architecture',
      tocPerformance: 'Performance',
      tocLmcache: 'LMCache',
      tocCacheArch: 'Cache Architecture',
      tocKeyFeatures: 'Key Features',
      tocIntegration: 'Integration',
      tocReferences: 'References',

      // Overview
      overviewTitle: 'LLM Inference Technology',
      overviewText: 'Large Language Model (LLM) inference has become a critical infrastructure component in the AI era. This page introduces two key open-source technologies that significantly improve LLM serving efficiency:',

      // vLLM
      vllmTitle: 'vLLM: High-Throughput LLM Inference Engine',
      vllmDesc: 'is an open-source, high-throughput and memory-efficient inference engine for large language models. Developed at UC Berkeley, it has become the most widely adopted LLM serving framework in production environments.',
      vllmVersion: 'Latest: v0.7.3 (April 2026)',

      // PagedAttention
      paTitle: 'PagedAttention',
      paDesc: "vLLM's core innovation is",
      paDesc2: 'which borrows the virtual memory paging concept from operating systems to manage the KV cache in LLM inference.',
      paItem1: 'KV cache is divided into fixed-size blocks (typically 16 tokens per block) rather than stored in contiguous memory.',
      paItem2: 'Blocks are allocated on-demand, not pre-reserved for the maximum sequence length.',
      paItem3: 'Memory utilization improved from ~40% (traditional approach) to',
      paItem3b: 'eliminating fragmentation.',
      paItem4: 'Blocks can be shared across sequences, enabling efficient parallel sampling and beam search with near-zero memory overhead.',
      paItem5: 'Supports 4/8/16 token block sizes, reducing short-request memory waste by 75%.',

      // Continuous Batching
      cbTitle: 'Continuous Batching',
      cbDesc: 'Traditional static batching requires all requests in a batch to have the same length, leading to wasted computation. vLLM\'s',
      cbDesc2: 'solves this:',
      cbItem1: 'Requests of varying lengths are packed into a single iteration, eliminating padding overhead.',
      cbItem2: 'Long prompts are split into smaller chunks and scheduled together with decode requests, preventing head-of-line blocking.',
      cbItem3: 'Three scheduling strategies: FIFO, Shortest Job First (SJF), and Earliest Deadline First (EDF) with automatic switching based on workload.',
      cbItem4: 'New requests can be dynamically added or removed mid-generation via the async engine.',

      // v1 Architecture
      v1Title: 'v1 Architecture (Alpha, Jan 2025)',
      v1Desc: 'vLLM v1 is a major architectural overhaul that evolves vLLM from a dedicated inference accelerator into a general-purpose serving infrastructure:',
      v1Item1: '"1+N" multi-process architecture with per-worker GPU isolation for fault tolerance.',
      v1Item2: 'Token-level to sequence-level flexible scheduling with speculative decoding support.',
      v1Item3: 'Pointer redirection instead of data copy; cache hit rate improved from 37% to 89%.',
      v1Item4: '7B model throughput: 1.2K → 2.1K tokens/s; 70B first-token latency: 320ms → 185ms.',

      // vLLM Performance
      vllmPerfTitle: 'Performance Benchmarks',
      vllmPerfNote: 'FP8 throughput of 26,400 tokens/s on 8-GPU configuration — 2.2× improvement over H100 baseline. First-token latency reduced by 40% (45ms → 27ms).',

      // LMCache
      lmTitle: 'LMCache: KV Cache Acceleration Layer',
      lmDesc: 'is an open-source KV cache layer purpose-built for enterprise-scale LLM inference. It sits between inference engines and heterogeneous storage tiers, reusing KV caches across requests to dramatically reduce Time-to-First-Token (TTFT) and increase throughput.',
      lmVersion: 'MLSys 2026 Invited Talk',

      // LMCache Architecture
      lmArchTitle: 'Three-Tier Hierarchical Cache Architecture',
      lmArchDesc: 'LMCache introduces a multi-level cache hierarchy that decouples computation from storage, enabling KV cache capacity far beyond GPU memory limits:',
      lmArchTier1Use: 'Hot / frequently accessed',
      lmArchTier2Use: 'Warm / intermediate access',
      lmArchTier3Use: 'Cold / infrequent access',
      lmArchSpeedDesc: 'Smart eviction policies (LRU + LFU hybrid) automatically move data between tiers. Cache loading speeds reach',
      lmArchSpeedDesc2: '— a 15× improvement over naive approaches — by leveraging CUDA async copy, CUDA IPC, and compute-I/O pipelining.',

      // LMCache Features
      lmFeatTitle: 'Key Features',
      lmFeat1Name: 'CacheBlend',
      lmFeat1Desc: 'Non-prefix KV cache reuse for any repeated text span regardless of position — dramatically improves cache hit rates in multi-turn conversations, RAG, and document-heavy workloads.',
      lmFeat2Name: 'CacheGen',
      lmFeat2Desc: 'Mixed compression strategies (FP16 quantization, ZSTD, sparse CSR, delta encoding) achieving ~4:1 compression while maintaining 99% accuracy.',
      lmFeat3Name: 'PD Disaggregation',
      lmFeat3Desc: 'Cross-engine KV cache transfer enables running prefill and decode phases on separate GPU pools for efficient resource allocation and throughput scaling.',
      lmFeat4Name: 'Cross-Engine Sharing',
      lmFeat4Desc: 'Peer-to-peer (P2P) cache sharing across vLLM instances and engines, supporting NIXL, GDS (GPU Direct Storage), and RDMA.',
      lmFeat5Name: 'Modular Connectors',
      lmFeat5Desc: 'Decoupled from engine evolution via KV cache connector architecture. Supports vLLM (V1/V2), SGLang, NVIDIA Dynamo, TRT-LLM, and Modular.',
      lmFeat6Name: 'Multimodal Cache',
      lmFeat6Desc: 'Supports caching vision-language model embeddings by hashing image-side tokens (mm_hashes), slashing TTFT and GPU memory for multimodal LLMs.',
      lmFeat7Name: 'Zero-Copy Data Movement',
      lmFeat7Desc: 'Minimizes KV cache loading latency from ~12ms to ~1.8ms on A100 GPUs using CUDA async operations and compute-I/O pipelining.',
      lmFeat8Name: 'K8s Native Operator',
      lmFeat8Desc: 'LMCache Operator (v0.1.1, May 2026) provides Kubernetes-native automated deployment, scaling, and management of cache resources.',

      // LMCache Performance
      lmPerfTitle: 'Performance Benchmarks',
      lmPerfRow1Scene: 'General Throughput',
      lmPerfRow1Detail: 'With vLLM integration across workloads',
      lmPerfRow2Scene: 'Extreme Throughput',
      lmPerfRow2Detail: 'Multi-round QA and document analysis',
      lmPerfRow3Scene: 'TTFT Reduction',
      lmPerfRow3Detail: '~1.16s → ~0.44s on long-context scenarios',
      lmPerfRow4Scene: 'Total Request Latency',
      lmPerfRow4Detail: '52.98s → 24.27s on 460K-token workloads',
      lmPerfRow5Scene: 'GPU Memory Savings',
      lmPerfRow5Detail: 'By offloading reusable KV caches',
      lmPerfRow6Scene: 'Cache Hit Rate',
      lmPerfRow6Detail: 'In conversational and RAG scenarios',

      // Integration
      lmIntTitle: 'Integration with vLLM',
      lmIntDesc: 'LMCache integrates seamlessly with vLLM through a connector-based architecture. A typical deployment configuration:',
      lmIntEngines: 'Supported inference engines:',
      lmIntEnginesList: 'vLLM (primary, V1 & V2 connector), SGLang, NVIDIA Dynamo, TRT-LLM, Modular, AWS LMI.',
      lmIntUsers: 'Production users:',
      lmIntUsersList: 'Google Cloud, AWS, CoreWeave, GMI Cloud, Tencent, AMD, NVIDIA, IBM, and 30+ companies.',

      // References
      refTitle: 'References & Resources',
      ref1: 'vLLM GitHub Repository',
      ref1desc: '— Official repository for the vLLM inference engine',
      ref2: 'LMCache GitHub Repository',
      ref2desc: '— Official repository for the LMCache KV cache layer',
      ref3: 'vLLM Documentation',
      ref3desc: '— Official documentation and user guides',
      ref4: 'LMCache Blog',
      ref4desc: '— Technical blog with latest features and benchmarks',
      ref5: 'LMCache Paper (arXiv:2510.09665)',
      ref5desc: '— Y. Cheng, Y. Liu et al., Oct 2025',
      ref6: 'MLSys 2026 Invited Talk',
      ref6desc: '— LMCache: An Efficient KV Cache Layer for Enterprise-Scale LLM Inference',
    },
  },

  zh: {
    home: {
      subtitle: '//  计算机科学  //',
      nameLabel: '姓名',
      degreeLabel: '学位',
      degreeValue: '计算机科学与技术',
      researchLabel: '研究方向',
      researchValue: '无线网络 · 物联网 · 大模型 · 通算协同',
      contactLabel: '联系方式',
      sectionTitle: '研究方向',
      footerText: '醒醒吧，武士。我们有一座城市要烧掉。',
    },

    tech: {
      backHome: '←  返回',
      backHomeTop: '←  返回主页',
      tocHeading: '本页目录',
      tocOverview: '概述',
      tocVllm: 'vLLM',
      tocPagedAttention: 'PagedAttention',
      tocContinuousBatching: 'Continuous Batching',
      tocV1Arch: 'v1 架构',
      tocPerformance: '性能数据',
      tocLmcache: 'LMCache',
      tocCacheArch: '缓存架构',
      tocKeyFeatures: '核心特性',
      tocIntegration: '集成方案',
      tocReferences: '参考资料',

      // Overview
      overviewTitle: '大模型推理技术',
      overviewText: '大语言模型（LLM）推理已成为 AI 时代的关键基础设施。本页介绍两项显著提升 LLM 服务效率的开源核心技术：',

      // vLLM
      vllmTitle: 'vLLM：高吞吐量 LLM 推理引擎',
      vllmDesc: '是一个开源的高吞吐量、内存高效的 LLM 推理引擎，由 UC Berkeley 开发，已成为生产环境中使用最广泛的 LLM 服务框架。',
      vllmVersion: '最新版本：v0.7.3（2026 年 4 月）',

      // PagedAttention
      paTitle: 'PagedAttention',
      paDesc: 'vLLM 的核心创新是',
      paDesc2: '，它借鉴了操作系统的虚拟内存分页概念来管理 LLM 推理中的 KV cache。',
      paItem1: 'KV cache 被划分为固定大小的 Block（通常每个 Block 16 个 token），而非存储在连续内存中。',
      paItem2: 'Block 按需动态分配，无需为最大序列长度预保留。',
      paItem3: '内存利用率从传统方案的约 40% 提升至',
      paItem3b: '，消除了内存碎片。',
      paItem4: 'Block 可在多个序列间共享，实现高效的并行采样和 beam search，内存开销几乎为零。',
      paItem5: '支持 4/8/16 token 的多尺寸页池，短请求内存浪费降低 75%。',

      // Continuous Batching
      cbTitle: 'Continuous Batching',
      cbDesc: '传统静态批处理要求同一批次中的所有请求长度相同，导致计算资源浪费。vLLM 的',
      cbDesc2: '解决了这个问题：',
      cbItem1: '不同长度的请求被打包到同一轮迭代中，消除了填充开销。',
      cbItem2: '长提示被拆分为较小的 Chunk，与 decode 请求一起调度执行，防止队头阻塞。',
      cbItem3: '三种调度策略：FIFO、Shortest Job First (SJF)、Earliest Deadline First (EDF)，根据工作负载自动切换。',
      cbItem4: '通过异步引擎，新请求可在生成过程中动态添加或移除。',

      // v1 Architecture
      v1Title: 'v1 架构（Alpha，2025 年 1 月）',
      v1Desc: 'vLLM v1 是一次重大架构革新，将 vLLM 从专用推理加速器演进为通用服务基础设施：',
      v1Item1: '"1+N" 多进程架构，每个 Worker 独享 GPU 以实现故障隔离。',
      v1Item2: '从 Token 级到 Sequence 级的灵活调度，支持投机解码。',
      v1Item3: '使用指针重定向替代数据拷贝实现零开销前缀缓存；缓存命中率从 37% 提升至 89%。',
      v1Item4: '7B 模型吞吐量：1.2K → 2.1K tokens/s；70B 首 token 延迟：320ms → 185ms。',

      // vLLM Performance
      vllmPerfTitle: '性能基准测试',
      vllmPerfNote: 'Blackwell GPU（v0.7.3）：8 卡配置下 FP8 吞吐量达 26,400 tokens/s——较 H100 基线提升 2.2 倍。首 token 延迟降低 40%（45ms → 27ms）。',

      // LMCache
      lmTitle: 'LMCache：KV Cache 加速层',
      lmDesc: '是一个专为企业级 LLM 推理构建的开源 KV cache 层。它位于推理引擎与异构存储层之间，通过跨请求复用 KV cache，大幅降低首 token 延迟（TTFT）并提升吞吐量。',
      lmVersion: 'MLSys 2026 特邀报告',

      // LMCache Architecture
      lmArchTitle: '三级分层缓存架构',
      lmArchDesc: 'LMCache 引入多级缓存层次结构，将计算与存储解耦，使 KV cache 容量远超 GPU 显存限制：',
      lmArchTier1Use: '热数据 / 频繁访问',
      lmArchTier2Use: '温数据 / 中等访问',
      lmArchTier3Use: '冷数据 / 不常访问',
      lmArchSpeedDesc: '智能淘汰策略（LRU + LFU 混合）自动在各级缓存间迁移数据。缓存加载速度达到',
      lmArchSpeedDesc2: '——较朴素方案提升 15 倍——通过 CUDA async copy、CUDA IPC 和计算-I/O 流水线实现。',

      // LMCache Features
      lmFeatTitle: '核心特性',
      lmFeat1Name: 'CacheBlend',
      lmFeat1Desc: '非前缀 KV cache 复用，支持任意位置的重复文本片段匹配——在多轮对话、RAG 和文档密集型场景中显著提升缓存命中率。',
      lmFeat2Name: 'CacheGen',
      lmFeat2Desc: '混合压缩策略（FP16 量化、ZSTD 压缩、稀疏 CSR 格式、增量编码），实现约 4:1 的压缩比，同时保持 99% 的精度。',
      lmFeat3Name: 'PD Disaggregation',
      lmFeat3Desc: '跨引擎 KV cache 传输，支持 Prefill 和 Decode 阶段在分离的 GPU 资源池上运行，实现高效的资源分配和吞吐量扩展。',
      lmFeat4Name: 'Cross-Engine Sharing',
      lmFeat4Desc: '支持 vLLM 实例之间的 P2P 缓存共享，兼容 NIXL、GDS（GPU Direct Storage）和 RDMA。',
      lmFeat5Name: 'Modular Connectors',
      lmFeat5Desc: '通过 KV cache 连接器架构与引擎演进解耦。支持 vLLM（V1/V2）、SGLang、NVIDIA Dynamo、TRT-LLM 和 Modular。',
      lmFeat6Name: 'Multimodal Cache',
      lmFeat6Desc: '通过哈希图像侧 token（mm_hashes）支持多模态大模型的 embedding 缓存，大幅降低 MLLM 的 TTFT 和 GPU 显存占用。',
      lmFeat7Name: 'Zero-Copy Data Movement',
      lmFeat7Desc: '利用 CUDA 异步操作和计算-I/O 流水线，将 KV cache 加载延迟从约 12ms 降至约 1.8ms（A100 GPU）。',
      lmFeat8Name: 'K8s Native Operator',
      lmFeat8Desc: 'LMCache Operator（v0.1.1，2026 年 5 月）提供 Kubernetes 原生的自动化部署、扩缩容和缓存资源管理。',

      // LMCache Performance
      lmPerfTitle: '性能基准测试',
      lmPerfRow1Scene: '通用吞吐量',
      lmPerfRow1Detail: '基于 vLLM 集成的各类工作负载',
      lmPerfRow2Scene: '极限吞吐量',
      lmPerfRow2Detail: '多轮问答和文档分析场景',
      lmPerfRow3Scene: 'TTFT 降低',
      lmPerfRow3Detail: '长上下文场景下约 1.16s → 0.44s',
      lmPerfRow4Scene: '总请求延迟',
      lmPerfRow4Detail: '460K token 负载下 52.98s → 24.27s',
      lmPerfRow5Scene: 'GPU 显存节省',
      lmPerfRow5Detail: '卸载可复用 KV cache 后',
      lmPerfRow6Scene: '缓存命中率',
      lmPerfRow6Detail: '对话和 RAG 场景下',

      // Integration
      lmIntTitle: '与 vLLM 集成',
      lmIntDesc: 'LMCache 通过基于连接器的架构与 vLLM 无缝集成。典型部署配置如下：',
      lmIntEngines: '支持的推理引擎：',
      lmIntEnginesList: 'vLLM（主要支持 V1 和 V2 连接器）、SGLang、NVIDIA Dynamo、TRT-LLM、Modular、AWS LMI。',
      lmIntUsers: '生产用户：',
      lmIntUsersList: 'Google Cloud、AWS、CoreWeave、GMI Cloud、腾讯、AMD、NVIDIA、IBM 等 30+ 家公司。',

      // References
      refTitle: '参考资料',
      ref1: 'vLLM GitHub 仓库',
      ref1desc: '—— vLLM 推理引擎官方仓库',
      ref2: 'LMCache GitHub 仓库',
      ref2desc: '—— LMCache KV Cache 层官方仓库',
      ref3: 'vLLM 官方文档',
      ref3desc: '—— 官方文档和用户指南',
      ref4: 'LMCache 技术博客',
      ref4desc: '—— 最新特性和基准测试的技术博客',
      ref5: 'LMCache 论文 (arXiv:2510.09665)',
      ref5desc: '—— Y. Cheng, Y. Liu et al., 2025 年 10 月',
      ref6: 'MLSys 2026 特邀报告',
      ref6desc: '—— LMCache：面向企业级 LLM 推理的高效 KV Cache 层',
    },
  },
}

export default t
