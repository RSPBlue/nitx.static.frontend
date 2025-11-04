import {
  BadgeCheck,
  ChartNoAxesCombined,
  HandCoins,
  Landmark,
  PiggyBank,
  Timer,
} from "lucide-react"
import { AppArcherContainerPosition } from "./components/Ecosystem/types"

/** Define todos os textos e labels do sistema, centralizando-os neste único arquivo. */
export default {
  links: {
    top: "top",
    history: "history",
    idealization: "idealization",
    competencies: "competencies",
    marketAndServices: "market",
    pillars: "pillars",
    deliver: "deliver",
    ecosystem: "ecosystem",
  },
  navbar: {
    mailTo: "contato@novaitx.com.br",
    emailSubject: "Título do email",
    emailBody: "Conteúdo do email",
    history: "História",
    idealization: "Idealização",
    competencies: "Competências",
    marketAndServices: "Mercado e Serviços",
    pillars: "Pilares",
    deliver: "Como entregamos",
    ecosystem: "Ecosistema",
    contact: "Contato",
  },
  banner: {
    preffixTitle: "ESTAMOS EM UMA",
    suffixTitle: "NOVA ERA.",
  },
  history: {
    thinTitle: "NOSSA",
    boldTitle: "HISTÓRIA",
    cards: [
      { title: "+DE 120", subtitle: "Colaboradores" },
      { title: "+20", subtitle: "Anos de atuação no Mercado" },
      { title: "+DE 100", subtitle: "desenvolvedores especializados" },
      { title: "+DE 25", subtitle: "especialistas em gestão de investimentos" },
    ],
    subtitle:
      "A união das “marcas originais” desta Joint Venture, cria uma organização poderosa, com mais de 20 anos de experiência, liderança e inovação no mercado de tecnologia, somando o poder de fogo de mais de mais 120 colaboradores, mais de 100 desenvolvedores especializados e mais de 25 especialistas em gestão de investimentos.",
  },
  idealization: {
    thinTitle: "NOSSA",
    boldTitle: "IDEALIZAÇÃO",
    subtitle:
      "Silicon Village, Investtools e Newtech criam a joint venture que origina a novaITX, com o intuito de ampliar o escopo de atendimento e ter uma empresa que ofereça uma nova experiência em tecnologia e pessoas, atendendo de forma integrada e especializada.",
    cardsLeft: [
      {
        title: "+400MIL*",
        subtitle: "Horas Trabalhadas",
        icon: Timer,
        paddingTitle: 80,
        paddingSubtitle: 96,
        archerId: "info-left-3",
      },
      {
        title: "+120",
        subtitle: "Horas Trabalhadas",
        icon: BadgeCheck,
        paddingTitle: 40,
        paddingSubtitle: 56,
        archerId: "info-left-2",
      },
      {
        title: "+30",
        subtitle: "Horas Trabalhadas",
        icon: Landmark,
        paddingTitle: 0,
        paddingSubtitle: 16,
        archerId: "info-left-1",
      },
    ],
    cardsRight: [
      {
        title: "950",
        subtitle: "Horas Trabalhadas",
        icon: PiggyBank,
        paddingTitle: 120,
        paddingSubtitle: 0,
        archerId: "info-right-1",
      },
      {
        title: "50",
        subtitle: "Horas Trabalhadas",
        icon: ChartNoAxesCombined,
        paddingTitle: 80,
        paddingSubtitle: 0,
        archerId: "info-right-2",
      },
      {
        title: "180Bi",
        subtitle: "Em participação",
        icon: HandCoins,
        paddingTitle: 80,
        paddingSubtitle: 0,
        archerId: "info-right-3",
      },
    ],
  },
  competencies: {
    thinTitle: "NOSSAS",
    boldTitle: "COMPETENCIAS",
    softwareEngineeringCard: {
      title: "ENGENHARIA DE SOFTWARE SOB MEDIDA",
      contents: [
        "Desenvolvimento de soluções web e mobile sob medida, com alta escalabilidade e confiabilidade.",
        "Arquitetura de sistemas robustos, orientada a microsserviços e eventos.",
        "Atuação em sistemas core de missão crítica para bancos, fintechs, seguradoras e e-commerces.",
        "Frontend. Flutter, Android, iOS, React, Angular Backend. Node, Java, .NET.",
        "Arquitetura. Docker, Kubernetes, Servless, Cloud (AWS, GCP, Azure), DevOps.",
        "Dados. Power BI, Cosmos DB, Bigquery, Data Studio, LGPD",
        "Processos. UX, CX, Agile, Scrum, Project Management, Quality Management.",
      ],
    },
    baseCards: [
      {
        title: "INTEGRAÇÃO E CONECTIVIDADE DE ECOSSISTEMAS",
        contents: [
          "Especialistas em APIs RESTful seguras e performáticas.",
          "Integrações com bandeiras, adquirentes, bureaus de crédito, instituições públicas e plataformas reguladas.",
          "Experiência prática em projetos com Pix, Open Finance, Open Insurance e meios de pagamento.",
        ],
        includeMargin: true,
      },
      {
        title: "SUSTENTAÇÃO DE SISTEMAS EM PRODUÇÃO",
        contents: [
          "Atendimento por SLAs, via sistema de chamados com priorização e resposta garantida.",
          "Relatórios mensais com indicadores de desempenho e painéis interativos.",
          "Geração de insights contínuos para evolução técnica e funcional dos sistemas sustentados.",
        ],
        includeMargin: true,
      },
      {
        title: "ESPECIALIZAÇÃO EM NUVEM - AWS PARTNER",
        contents: [
          "Arquitetura, desenvolvimento e operação de soluções cloud-native (ECS, Lambda, Aurora, S3, etc.).",
          "Projetos de modernização, migração e automação com infraestrutura como código (IaC).",
          "Segurança em nuvem com IAM, WAF, KMS, Config, GuardDuty e práticas de Well-Architected Framework.",
        ],
        includeMargin: true,
      },

      {
        title: "GESTÃO DE PROJETOS E GOVERNANÇA DE ENTREGAS",
        contents: [
          "Especialistas em APIs RESTful seguras e performáticas.",
          "Integrações com bandeiras, adquirentes, bureaus de crédito, instituições públicas e plataformas reguladas .",
          "Experiência prática em projetos com Pix, Open Finance, Open Insurance e meios de pagamento.",
        ],
        includeMargin: false,
      },
      {
        title: "EXCELÊNCIA EM AMBIENTES REGULATÓRIOS SENSÍVEIS",
        contents: [
          "Entregas alinhadas a requisitos do BACEN, SUSEP, PCI-DSS, LGPD e normativos específicos.",
          "Processos e controles voltados à segurança, rastreabilidade e conformidade.",
          "Experiência em operar sob exigências de auditoria, compliance e segurança jurídica.",
        ],
        includeMargin: false,
      },
      {
        title: "INTELIGÊNCIA ARTIFICIAL APLICADA AO NEGÓCIO",
        contents: [
          "Aplicação prática de IA em processos de crédito, pagamentos, seguros e antifraude.",
          "Desenvolvimento de agentes inteligentes, modelos preditivos e IA generativa.",
          "Ferramentas líderes como Amazon Bedrock, Sagemaker, modelos LLM e integração via APIs.",
        ],
        includeMargin: false,
      },
    ],
    performanceCulture: {
      title: "CULTURA DE PERFORMANCE, TRANSPARÊNCIA E ALINHAMENTO ESTRATÉGICO",
      contents: [
        "Time sênior com mais de 30 anos de experiência em desenvolvimento e consultoria de TI.",
        "Monitoramento contínuo por indicadores e KPIs compartilhados com o cliente.",
        "Foco em resultado de negócio, com postura consultiva e comprometida com o sucesso do cliente.",
      ],
    },
  },
  marketAndServices: {
    title: "Mercados e Serviços",
    subtitle:
      "O nosso esquema de integração representa, de forma visual, nosso leque de possibilidades e abrangência.",
    innerCards: [
      {
        title: "BANKING",
        content:
          "Atendemos bancos tradicionais e digitais com soluções para core bancário, onboarding, crédito, Pix, Open Finance e segurança operacional.",
      },
      {
        title: "FINANCIAL SERVICES",
        content:
          "Apoiamos fintechs, adquirentes, subadquirentes e plataformas de crédito com tecnologias para pagamentos, liquidação, conciliação e análise de risco.",
      },
      {
        title: "INSURANCE",
        content:
          "Desenvolvemos soluções para seguradoras e corretoras em sinistros, apólices, subscrição, assistência digital e integração com o ecossistema Susep/Open Insurance.",
      },
      {
        title: "INDUSTRY & OTHERS",
        content:
          "Oferecemos sistemas sob medida para indústrias e serviços diversos, com foco em automação, gestão operacional, integração de dados e inteligência analítica.",
      },
    ],
    outerCards: [
      {
        title: "CYBERSECURITY",
        content:
          "Projetamos, migramos e operamos soluções em ambientes cloud-native com foco em escalabilidade, segurança e custo-eficiência. Atuamos com arquiteturas serverless, contêineres (ECS/EKS), bancos gerenciados (Aurora, DynamoDB) e serviços de automação (Lambda, Step Functions). Usamos práticas de infraestrutura como código (IaC) com Terraform e CloudFormation, além de aplicar o AWS Well-Architected Framework. Garantimos alta disponibilidade, performance e governança em ambientes críticos.",
        alignEnd: true,
      },
      {
        title: "ENGENHARIA DE SOFTWARE",
        content:
          "Construímos soluções sob medida em plataformas web, mobile e backend, com foco em escalabilidade, qualidade e experiência do usuário. Aplicamos arquitetura orientada a serviços, testes automatizados, boas práticas de versionamento e documentação. Atuamos com squads ágeis e governança técnica, entregando valor de forma contínua. Utilizamos tecnologias modernas (.NET, Node, Java, React, Flutter, etc.) e integração com APIs, gateways e serviços externos.",
        alignEnd: false,
      },
      {
        title: "DEVOPS",
        content:
          "Oferecemos soluções completas de proteção digital com foco em prevenção, monitoramento e resposta a incidentes. Atuamos com políticas de Zero Trust, gestão de identidades (IAM, MFA), criptografia ponta a ponta, proteção de APIs e dados sensíveis. Implementamos práticas exigidas por PCI-DSS, LGPD e BACEN. Utilizamos ferramentas como GuardDuty, AWS WAF, KMS, Security Hub e realizamos testes de invasão (pentests) e assessments de segurança contínuos.",
        alignEnd: true,
      },
      {
        title: "DATA ANALYTICS",
        content:
          "Transformamos dados em valor para o negócio por meio de pipelines inteligentes, análise preditiva e visualização executiva. Estruturamos data lakes, ETLs e dashboards com AWS Glue, Athena, Redshift e QuickSight. Nossos times integram dados internos e externos (open finance, APIs, eventos), aplicando governança e LGPD by design. Entregamos inteligência operacional, estratégica e regulatória com insights confiáveis e acionáveis.",
        alignEnd: false,
      },
      {
        title: "INFRASTRUCTURE",
        content:
          "Implementamos esteiras de CI/CD seguras, com automação de testes, validações de segurança e deploy contínuo. Atuamos com GitHub Actions, GitLab, Jenkins, CodePipeline, entre outras ferramentas, promovendo integração entre desenvolvimento, infraestrutura e segurança (DevSecOps). Reduzimos tempo de entrega, risco de falhas e aumentamos a eficiência operacional com pipelines rastreáveis, escaláveis e integrados aos processos do cliente.",
        alignEnd: true,
      },
      {
        title: "INTELIGÊNCIA ARTIFICIAL",
        content:
          "Desenvolvemos soluções com IA tradicional e generativa para automação de processos, análise de comportamento, detecção de fraudes, recomendação e agentes inteligentes. Utilizamos Sagemaker, Amazon Bedrock, modelos fundacionais (LLMs), APIs cognitivas e pipelines de ML com segurança e governança. Aplicamos IA em jornadas de crédito, onboarding, sinistros, e-commerce e suporte ao cliente, sempre com foco em resultado real de negócio.",
        alignEnd: false,
      },
      {
        title: "INFRAESTRUTURA DE TI",
        content:
          "Desenvolvemos e mantemos ambientes de infraestrutura modernos, seguros e alinhados às necessidades de negócio. Atuamos com redes, VPNs, ambientes híbridos, VPCs, balanceadores de carga, firewalls, DNS e monitoramento contínuo. Projetamos ambientes de alta disponibilidade, com backup, disaster recovery (DR), observabilidade com CloudWatch, Grafana e Prometheus. Nosso foco é garantir estabilidade, desempenho e controle.",
        alignEnd: true,
      },
      {
        title: "RISKS",
        content:
          "Apoiamos nossos clientes na identificação, monitoramento e mitigação de riscos tecnológicos e operacionais. Implementamos controles baseados em frameworks como ISO 27001, NIST e COBIT, e desenvolvemos mecanismos de rastreabilidade, segregação de funções e alertas preventivos. Automatizamos a coleta de dados e análises em tempo real para antecipar falhas, fraudes ou vulnerabilidades. Atuamos em ambientes regulados com foco em compliance e continuidade.",
        alignEnd: false,
      },
    ],
  },
  pillars: {
    thinTitle: "COMO",
    boldTitle: "ENTENDEMOS",
    thinSubtitle: "Visão de mundo em ",
    boldSubtitle: "3 pilares",
    cards: [
      "Entender, Apoiar, Inovar.",
      "Excelência como filosofia",
      "Agilidade & Precisão.",
    ],
    footerContent: "COMO PARCEIROS, TRANSFORMANDO COM FOCO NO VALOR AGREGADO.",
  },
  deliver: {
    thinTitle: "COMO",
    boldTitle: "ENTREGAMOS",
    cards: [
      { content: "Entender bem as necessidades", archerConnection: true },
      { content: "Definir o modelo" },
      { content: "Tratativas (propostas e afins)" },
      { content: "Início dos serviços e implementação" },
      { content: "Apresentar, aprender e otimizar" },
    ],
    subtitle:
      "Pós: estar lado a lado para suportar, ampliar/melhorias contínuas e escalar.",
  },
  ecosystem: {
    title: "ECOSISTEMA",
    cards: [
      {
        desktopOrder: 1,
        mobileOrder: 2,
        title: "Invest Tools",
        items: [
          "FERRAMENTAS AVANÇADAS EM FINANÇAS",
          "EXPERTS FINANCEIROS",
          "DESENVOLVEDORES ESPECIALIZADOS",
          "EXPERIÊNCIA E CERTIFICAÇÕES ELEVADAS",
        ],
        side: "left" as AppArcherContainerPosition,
      },
      {
        desktopOrder: 2,
        mobileOrder: 1,
        title: "Nutech",
        items: ["CYBERSECURITY"],
        side: "top" as AppArcherContainerPosition,
      },
      {
        desktopOrder: 3,
        mobileOrder: 3,
        title: "Silicon Village",
        items: [
          "PARCERIAS E CERTIFICAÇÕES",
          "CASES SÓLIDOS",
          "+120 COLABORADORES",
          "INFRAESTRUTURA",
        ],
        side: "right" as AppArcherContainerPosition,
      },
    ],
  },
}
