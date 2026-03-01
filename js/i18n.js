(() => {
  'use strict';

  const translations = {
    en: {
      // Nav
      'nav.about': 'About',
      'nav.expertise': 'Expertise',
      'nav.certifications': 'Certifications',
      'nav.experience': 'Experience',
      'nav.impact': 'Impact',
      'nav.contact': 'Contact',

      // Hero
      'hero.headline': 'Senior DevOps Engineer',
      'hero.location': 'Brazil — Open to Remote',
      'hero.email': 'Email',
      'hero.resume': 'Download Resume',

      // About
      'about.title': 'About',
      'about.text': 'DevOps and Platform Engineer with 7+ years of experience building and operating cloud infrastructure at scale. I specialize in AWS, Terraform, and Kubernetes — designing automated, secure, and cost-efficient environments that enable engineering teams to deliver faster and more reliably. My work spans CI/CD modernization, IaC governance, observability, and self-service platform enablement.',

      // Impact
      'impact.years': 'Years in DevOps & Cloud',
      'impact.certs': 'Cloud & IaC Certified',
      'impact.velocity': 'Release Velocity Improvement',
      'impact.cost': 'Cloud Cost Reduction',

      // Expertise
      'expertise.title': 'Core Expertise',
      'expertise.iac': 'Infrastructure as Code',
      'expertise.containers': 'Containers & Orchestration',
      'expertise.observability': 'Observability',
      'expertise.security': 'Security & Compliance',

      // Certifications
      'certs.title': 'Certifications',
      'certs.clf': 'Cloud fundamentals, billing, shared responsibility model, core AWS services and global infrastructure.',
      'certs.saa': 'Resilient architectures, VPC design, compute/storage/database services, high availability, disaster recovery patterns.',
      'certs.soa': 'Operational excellence, CloudWatch, Systems Manager, deployment automation, incident response, patching.',
      'certs.tf': 'HCL syntax, providers, state management, modules, remote backends, workspaces, Terraform CLI workflows.',

      // Experience
      'exp.title': 'Professional Experience',
      'exp.current': 'Current Focus',
      'exp.recent': 'Recent Experience',
      'exp.earlier': 'Earlier Career',
      'exp.concurrent': 'Concurrent',
      'exp.focus.title': 'DevOps / Platform / Cloud Engineering',
      'exp.focus.b1': 'AWS infrastructure automation and governance',
      'exp.focus.b2': 'Terraform modules, remote state, and multi-account patterns',
      'exp.focus.b3': 'EKS/ECS orchestration and container platforms',
      'exp.focus.b4': 'CI/CD modernization (GitHub Actions, Jenkins, reusable workflows)',
      'exp.focus.b5': 'Incident response and operational troubleshooting',
      'exp.focus.b6': 'Platform enablement and self-service (Backstage + Crossplane + ArgoCD + Keycloak)',
      'exp.everhealth': 'CI/CD modernization for legacy .NET healthcare platform. Migrating Jenkins pipelines to GitHub Actions, managing release cycles, AWS infrastructure, and operational troubleshooting.',
      'exp.paloalto': 'Customer Success Engineering for Prisma Cloud (CWP). Guided enterprise customers on cloud workload protection across AWS, GCP, and Azure. Built shift-left security gates in CI/CD pipelines.',
      'exp.canary': 'Led infrastructure improvements across multiple cloud-native projects. Designed IaC stacks, implemented Helm charts, reduced cloud spend by 20%, improved release velocity by 35%.',
      'exp.clevertech': 'Media modernization — migrated monolith workloads to ECS and serverless. Built scalable CI/CD pipelines and Terraform modules for multi-account AWS deployments.',
      'exp.softjourn': 'FinTech legacy modernization — built GitLab CI/CD pipelines for .NET apps, integrated security scans, migrated RDS environments with zero downtime.',
      'exp.objective': 'Liferay Cloud PaaS — managed multi-tenant K8s clusters on GCP with GitOps and self-healing.',
      'exp.southsystem': 'Monolith-to-microservices migration for a financial client.',
      'exp.imply': 'AWS and Linux infrastructure for billing applications — cost, security, and delivery.',
      'exp.diebold': 'Installation and maintenance of ATM and lottery terminals across southern Brazil.',

      // What I Deliver
      'deliver.title': 'What I Deliver',
      'deliver.security.title': 'Enterprise Cloud Security Enablement',
      'deliver.security.text': 'Supported large-scale enterprise cloud environments, guiding adoption of workload protection with focus on runtime security, vulnerability management, and compliance.',
      'deliver.platform.title': 'Platform & Infrastructure Engineering',
      'deliver.platform.text': 'Built and maintained cloud infrastructure, CI/CD pipelines, EKS clusters, release processes, and self-service platforms to help engineering teams ship more reliably.',
      'deliver.serverless.title': 'Serverless & Cloud-Native Delivery',
      'deliver.serverless.text': 'Designed and delivered cloud-native platforms using AWS services, Terraform, and automated pipelines with modernization of CI/CD workflows.',
      'deliver.legacy.title': 'Legacy Deployment Modernization',
      'deliver.legacy.text': 'Adjusted deployment processes for legacy applications to enable pipeline automation and reduce manual delivery friction significantly.',
      'deliver.cost.title': 'Cloud Cost Optimization',
      'deliver.cost.text': 'Contributed to AWS infrastructure and operations improvements that reduced cloud costs through right-sizing, observability tuning, and FinOps controls.',

      // Contact
      'contact.title': 'Get In Touch',
      'contact.text': 'Looking for a DevOps engineer who can deliver scalable infrastructure, streamline your pipelines, and enable your engineering teams? Let\'s talk.',
      'contact.subtitle': 'Based in Brazil — Available for remote opportunities worldwide',

      // Misc
      'copy.feedback': 'Email copied to clipboard!'
    },
    'pt-BR': {
      // Nav
      'nav.about': 'Sobre',
      'nav.expertise': 'Expertise',
      'nav.certifications': 'Certificações',
      'nav.experience': 'Experiência',
      'nav.impact': 'Impacto',
      'nav.contact': 'Contato',

      // Hero
      'hero.headline': 'Engenheiro DevOps Sênior',
      'hero.location': 'Brasil — Disponível para Remoto',
      'hero.email': 'Email',
      'hero.resume': 'Baixar Currículo',

      // About
      'about.title': 'Sobre',
      'about.text': 'Engenheiro DevOps e Platform com mais de 7 anos de experiência construindo e operando infraestrutura cloud em escala. Especialista em AWS, Terraform e Kubernetes — projetando ambientes automatizados, seguros e eficientes em custo que permitem às equipes de engenharia entregar mais rápido e com mais confiabilidade. Minha atuação abrange modernização de CI/CD, governança de IaC, observabilidade e habilitação de plataformas self-service.',

      // Impact
      'impact.years': 'Anos em DevOps & Cloud',
      'impact.certs': 'Certificações Cloud & IaC',
      'impact.velocity': 'Melhoria na Velocidade de Release',
      'impact.cost': 'Redução de Custos Cloud',

      // Expertise
      'expertise.title': 'Expertise Principal',
      'expertise.iac': 'Infraestrutura como Código',
      'expertise.containers': 'Containers & Orquestração',
      'expertise.observability': 'Observabilidade',
      'expertise.security': 'Segurança & Compliance',

      // Certifications
      'certs.title': 'Certificações',
      'certs.clf': 'Fundamentos de cloud, billing, modelo de responsabilidade compartilhada, serviços core da AWS e infraestrutura global.',
      'certs.saa': 'Arquiteturas resilientes, design de VPC, serviços de computação/armazenamento/banco de dados, alta disponibilidade, padrões de disaster recovery.',
      'certs.soa': 'Excelência operacional, CloudWatch, Systems Manager, automação de deploy, resposta a incidentes, patching.',
      'certs.tf': 'Sintaxe HCL, providers, gerenciamento de state, módulos, backends remotos, workspaces, workflows do Terraform CLI.',

      // Experience
      'exp.title': 'Experiência Profissional',
      'exp.current': 'Foco Atual',
      'exp.recent': 'Experiência Recente',
      'exp.earlier': 'Carreira Anterior',
      'exp.concurrent': 'Simultâneo',
      'exp.focus.title': 'DevOps / Platform / Cloud Engineering',
      'exp.focus.b1': 'Automação de infraestrutura AWS e governança',
      'exp.focus.b2': 'Módulos Terraform, remote state e padrões multi-account',
      'exp.focus.b3': 'Orquestração EKS/ECS e plataformas de containers',
      'exp.focus.b4': 'Modernização de CI/CD (GitHub Actions, Jenkins, workflows reutilizáveis)',
      'exp.focus.b5': 'Resposta a incidentes e troubleshooting operacional',
      'exp.focus.b6': 'Habilitação de plataforma e self-service (Backstage + Crossplane + ArgoCD + Keycloak)',
      'exp.everhealth': 'Modernização de CI/CD para plataforma legada .NET de saúde. Migração de pipelines Jenkins para GitHub Actions, gestão de ciclos de release, infraestrutura AWS e troubleshooting operacional.',
      'exp.paloalto': 'Customer Success Engineering para Prisma Cloud (CWP). Orientação de clientes enterprise em proteção de workloads cloud em AWS, GCP e Azure. Construção de security gates shift-left em pipelines CI/CD.',
      'exp.canary': 'Liderança de melhorias de infraestrutura em múltiplos projetos cloud-native. Design de stacks IaC, implementação de Helm charts, redução de 20% em custos cloud, melhoria de 35% na velocidade de release.',
      'exp.clevertech': 'Modernização de mídia — migração de workloads monolíticos para ECS e serverless. Construção de pipelines CI/CD escaláveis e módulos Terraform para deploys AWS multi-account.',
      'exp.softjourn': 'Modernização legada FinTech — construção de pipelines GitLab CI/CD para apps .NET, integração de scans de segurança, migração de ambientes RDS com zero downtime.',
      'exp.objective': 'Liferay Cloud PaaS — gestão de clusters K8s multi-tenant no GCP com GitOps e self-healing.',
      'exp.southsystem': 'Migração de monólito para microsserviços para cliente do setor financeiro.',
      'exp.imply': 'Infraestrutura AWS e Linux para aplicações de billing — custo, segurança e entrega.',
      'exp.diebold': 'Instalação e manutenção de terminais ATM e lotéricos no sul do Brasil.',

      // What I Deliver
      'deliver.title': 'O Que Eu Entrego',
      'deliver.security.title': 'Habilitação de Segurança Cloud Enterprise',
      'deliver.security.text': 'Suporte a ambientes cloud enterprise de larga escala, orientando a adoção de proteção de workloads com foco em segurança runtime, gestão de vulnerabilidades e compliance.',
      'deliver.platform.title': 'Engenharia de Plataforma & Infraestrutura',
      'deliver.platform.text': 'Construção e manutenção de infraestrutura cloud, pipelines CI/CD, clusters EKS, processos de release e plataformas self-service para equipes de engenharia.',
      'deliver.serverless.title': 'Entrega Serverless & Cloud-Native',
      'deliver.serverless.text': 'Design e entrega de plataformas cloud-native usando serviços AWS, Terraform e pipelines automatizados com modernização de workflows CI/CD.',
      'deliver.legacy.title': 'Modernização de Deploy Legado',
      'deliver.legacy.text': 'Ajuste de processos de deploy para aplicações legadas, habilitando automação de pipeline e reduzindo significativamente o atrito de entrega manual.',
      'deliver.cost.title': 'Otimização de Custos Cloud',
      'deliver.cost.text': 'Contribuição para melhorias de infraestrutura e operações AWS que reduziram custos cloud através de right-sizing, tuning de observabilidade e controles FinOps.',

      // Contact
      'contact.title': 'Entre em Contato',
      'contact.text': 'Procurando um engenheiro DevOps que entrega infraestrutura escalável, otimiza seus pipelines e habilita suas equipes de engenharia? Vamos conversar.',
      'contact.subtitle': 'Baseado no Brasil — Disponível para oportunidades remotas no mundo todo',

      // Misc
      'copy.feedback': 'Email copiado!'
    }
  };

  function detectLanguage() {
    const stored = localStorage.getItem('portfolio-lang');
    if (stored && translations[stored]) return stored;
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en';
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('portfolio-lang', lang);
  }

  // Expose for main.js and toggle buttons
  window.__i18n = { applyLanguage, currentLang: detectLanguage };

  // Apply on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    applyLanguage(lang);

    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        if (newLang && translations[newLang]) {
          window.__i18n.currentLang = newLang;
          applyLanguage(newLang);
        }
      });
    });
  });
})();
