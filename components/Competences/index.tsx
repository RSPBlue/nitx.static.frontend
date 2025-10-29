import PageSection from "../PageSection"
import CompetenciesCard from "./Card"

const Competencies = () => {
  return (
    <PageSection>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="xl:flex-1 flex flex-col gap-8">
          <div className="w-full p-4 bg-tertiary text-secondary rounded-b-4xl font-oswald flex justify-end items-end">
            <h2 className="text-[41px] text-end">
              NOSSAS <strong>COMPETÊNCIAS</strong>
            </h2>
          </div>
          <CompetenciesCard
            title="ENGENHARIA DE SOFTWARE SOB MEDIDA"
            className="h-full"
            titleClassName="text-center xl:text-start"
          >
            <div className="flex text-center flex-col gap-4">
              <p>
                Desenvolvimento de soluções web e mobile sob medida, com alta
                escalabilidade e confiabilidade.
              </p>
              <p>
                Arquitetura de sistemas robustos, orientada a microsserviços e
                eventos.
              </p>
              <p>
                Atuação em sistemas core de missão crítica para bancos,
                fintechs, seguradoras e e-commerces.
              </p>
              <p>
                Frontend. Flutter, Android, iOS, React, Angular Backend. Node,
                Java, .NET.
              </p>
              <p>
                Arquitetura. Docker, Kubernetes, Servless, Cloud (AWS, GCP,
                Azure), DevOps.
              </p>
              .<p>Dados. Power BI, Cosmos DB, Bigquery, Data Studio, LGPD</p>
              <p>
                Processos. UX, CX, Agile, Scrum, Project Management, Quality
                Management.
              </p>
            </div>
          </CompetenciesCard>
        </div>
        <div className="xl:w-3/4 grid grid-cols-12 gap-4">
          <CompetenciesCard
            title="INTEGRAÇÃO E CONECTIVIDADE DE ECOSSISTEMAS"
            className="col-span-full sm:col-span-6 xl:col-span-4 mt-4"
          >
            <div className="flex flex-col gap-4">
              <p>Especialistas em APIs RESTful seguras e performáticas.</p>
              <p>
                Integrações com bandeiras, adquirentes, bureaus de crédito,
                instituições públicas e plataformas reguladas.
              </p>
              <p>
                Experiência prática em projetos com Pix, Open Finance, Open
                Insurance e meios de pagamento.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="SUSTENTAÇÃO DE SISTEMAS EM PRODUÇÃO"
            className="col-span-full sm:col-span-6 xl:col-span-4 mt-4"
          >
            <div className="flex flex-col gap-4">
              <p>
                Atendimento por SLAs, via sistema de chamados com priorização e
                resposta garantida.
              </p>
              <p>
                Relatórios mensais com indicadores de desempenho e painéis
                interativos.
              </p>
              <p>
                Geração de insights contínuos para evolução técnica e funcional
                dos sistemas sustentados.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="ESPECIALIZAÇÃO EM NUVEM - AWS PARTNER"
            className="col-span-full sm:col-span-6 xl:col-span-4 mt-4"
          >
            <div className="flex flex-col gap-4">
              <p>
                Arquitetura, desenvolvimento e operação de soluções cloud-native
                (ECS, Lambda, Aurora, S3, etc.).
              </p>
              <p>
                Projetos de modernização, migração e automação com
                infraestrutura como código (IaC).
              </p>
              <p>
                Segurança em nuvem com IAM, WAF, KMS, Config, GuardDuty e
                práticas de Well-Architected Framework.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="GESTÃO DE PROJETOS E GOVERNANÇA DE ENTREGAS"
            className="col-span-full sm:col-span-6 xl:col-span-4"
          >
            <div className="flex flex-col gap-4">
              .<p>Especialistas em APIs RESTful seguras e performáticas .</p>
              <p>
                Integrações com bandeiras, adquirentes, bureaus de crédito,
                instituições públicas e plataformas reguladas .
              </p>
              <p>
                Experiência prática em projetos com Pix, Open Finance, Open
                Insurance e meios de pagamento.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="EXCELÊNCIA EM AMBIENTES REGULATÓRIOS SENSÍVEIS"
            className="col-span-full sm:col-span-6 xl:col-span-4"
          >
            <div className="flex flex-col gap-4">
              <p>
                Entregas alinhadas a requisitos do BACEN, SUSEP, PCI-DSS, LGPD e
                normativos específicos.
              </p>

              <p>
                Processos e controles voltados à segurança, rastreabilidade e
                conformidade.
              </p>

              <p>
                Experiência em operar sob exigências de auditoria, compliance e
                segurança jurídica.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="INTELIGÊNCIA ARTIFICIAL APLICADA AO NEGÓCIO"
            className="col-span-full sm:col-span-6 xl:col-span-4"
          >
            <div className="flex flex-col gap-4">
              <p>
                Aplicação prática de IA em processos de crédito, pagamentos,
                seguros e antifraude.
              </p>

              <p>
                Desenvolvimento de agentes inteligentes, modelos preditivos e IA
                generativa.
              </p>

              <p>
                Ferramentas líderes como Amazon Bedrock, Sagemaker, modelos LLM
                e integração via APIs.
              </p>
            </div>
          </CompetenciesCard>
          <CompetenciesCard
            title="CULTURA DE PERFORMANCE, TRANSPARÊNCIA E ALINHAMENTO ESTRATÉGICO"
            className="col-span-full xl:col-span-9"
          >
            <div className="flex flex-col gap-4">
              <p>
                Time sênior com mais de 30 anos de experiência em
                desenvolvimento e consultoria de TI.
              </p>

              <p>
                Monitoramento contínuo por indicadores e KPIs compartilhados com
                o cliente.
              </p>

              <p>
                Foco em resultado de negócio, com postura consultiva e
                comprometida com o sucesso do cliente.
              </p>
            </div>
          </CompetenciesCard>
        </div>
      </div>
    </PageSection>
  )
}

export default Competencies
