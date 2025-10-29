"use client"

import PageSection from "../PageSection"
import MarketAndServicesOuterCard from "./Card"

const MarketAndServicesDetailsOuter = () => {
  return (
    <PageSection>
      <div className="grid grid-cols-2 gap-4">
        <MarketAndServicesOuterCard title="CYBERSECURITY" alignEnd>
          Projetamos, migramos e operamos soluções em ambientes cloud-native com
          foco em escalabilidade, segurança e custo-eficiência. Atuamos com
          arquiteturas serverless, contêineres (ECS/EKS), bancos gerenciados
          (Aurora, DynamoDB) e serviços de automação (Lambda, Step Functions).
          Usamos práticas de infraestrutura como código (IaC) com Terraform e
          CloudFormation, além de aplicar o AWS Well-Architected Framework.
          Garantimos alta disponibilidade, performance e governança em ambientes
          críticos.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="ENGENHARIA DE SOFTWARE">
          Construímos soluções sob medida em plataformas web, mobile e backend,
          com foco em escalabilidade, qualidade e experiência do usuário.
          Aplicamos arquitetura orientada a serviços, testes automatizados, boas
          práticas de versionamento e documentação. Atuamos com squads ágeis e
          governança técnica, entregando valor de forma contínua. Utilizamos
          tecnologias modernas (.NET, Node, Java, React, Flutter, etc.) e
          integração com APIs, gateways e serviços externos.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="DEVOPS" alignEnd>
          Oferecemos soluções completas de proteção digital com foco em
          prevenção, monitoramento e resposta a incidentes. Atuamos com
          políticas de Zero Trust, gestão de identidades (IAM, MFA),
          criptografia ponta a ponta, proteção de APIs e dados sensíveis.
          Implementamos práticas exigidas por PCI-DSS, LGPD e BACEN. Utilizamos
          ferramentas como GuardDuty, AWS WAF, KMS, Security Hub e realizamos
          testes de invasão (pentests) e assessments de segurança contínuos.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="DATA ANALYTICS">
          Transformamos dados em valor para o negócio por meio de pipelines
          inteligentes, análise preditiva e visualização executiva. Estruturamos
          data lakes, ETLs e dashboards com AWS Glue, Athena, Redshift e
          QuickSight. Nossos times integram dados internos e externos (open
          finance, APIs, eventos), aplicando governança e LGPD by design.
          Entregamos inteligência operacional, estratégica e regulatória com
          insights confiáveis e acionáveis.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="INFRASTRUCTURE" alignEnd>
          Implementamos esteiras de CI/CD seguras, com automação de testes,
          validações de segurança e deploy contínuo. Atuamos com GitHub Actions,
          GitLab, Jenkins, CodePipeline, entre outras ferramentas, promovendo
          integração entre desenvolvimento, infraestrutura e segurança
          (DevSecOps). Reduzimos tempo de entrega, risco de falhas e aumentamos
          a eficiência operacional com pipelines rastreáveis, escaláveis e
          integrados aos processos do cliente.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="INTELIGÊNCIA ARTIFICIAL">
          Desenvolvemos soluções com IA tradicional e generativa para automação
          de processos, análise de comportamento, detecção de fraudes,
          recomendação e agentes inteligentes. Utilizamos Sagemaker, Amazon
          Bedrock, modelos fundacionais (LLMs), APIs cognitivas e pipelines de
          ML com segurança e governança. Aplicamos IA em jornadas de crédito,
          onboarding, sinistros, e-commerce e suporte ao cliente, sempre com
          foco em resultado real de negócio.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="INFRAESTRUTURA DE TI" alignEnd>
          Desenvolvemos e mantemos ambientes de infraestrutura modernos, seguros
          e alinhados às necessidades de negócio. Atuamos com redes, VPNs,
          ambientes híbridos, VPCs, balanceadores de carga, firewalls, DNS e
          monitoramento contínuo. Projetamos ambientes de alta disponibilidade,
          com backup, disaster recovery (DR), observabilidade com CloudWatch,
          Grafana e Prometheus. Nosso foco é garantir estabilidade, desempenho e
          controle.
        </MarketAndServicesOuterCard>

        <MarketAndServicesOuterCard title="RISKS">
          Apoiamos nossos clientes na identificação, monitoramento e mitigação
          de riscos tecnológicos e operacionais. Implementamos controles
          baseados em frameworks como ISO 27001, NIST e COBIT, e desenvolvemos
          mecanismos de rastreabilidade, segregação de funções e alertas
          preventivos. Automatizamos a coleta de dados e análises em tempo real
          para antecipar falhas, fraudes ou vulnerabilidades. Atuamos em
          ambientes regulados com foco em compliance e continuidade.
        </MarketAndServicesOuterCard>
      </div>
    </PageSection>
  )
}

export default MarketAndServicesDetailsOuter
