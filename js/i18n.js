(() => {
  'use strict';

  const translations = {
    en: {
      'nav.about': 'About',
      'nav.expertise': 'Expertise',
      'nav.certifications': 'Certifications',
      'nav.focus': 'Focus Areas',
      'nav.impact': 'Impact',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'DevOps / Cloud / Platform Engineering',
      'hero.headline': 'Senior DevOps Engineer',
      'hero.location': 'Brazil — Open to Remote',
      'hero.email': 'Email',

      'about.title': 'About',
      'about.text': 'I help organizations operate, scale, and evolve complex cloud environments. With 7+ years of experience across enterprise security, fintech, healthcare, and media platforms, I focus on infrastructure automation, delivery workflows, and platform reliability — turning operational complexity into engineering leverage.',

      'signals.security': 'Enterprise Cloud Security',
      'signals.aws': 'AWS & Terraform',
      'signals.platform': 'Platform Engineering',
      'signals.cicd': 'CI/CD Modernization',

      'expertise.title': 'Core Expertise',
      'expertise.iac': 'Infrastructure as Code',
      'expertise.containers': 'Containers & Orchestration',
      'expertise.observability': 'Observability',
      'expertise.secplatform': 'Security & Platform',

      'certs.title': 'Certifications',
      'certs.clf': 'Cloud fundamentals, billing, shared responsibility model, core AWS services and global infrastructure.',
      'certs.saa': 'Resilient architectures, VPC design, compute/storage/database, high availability, disaster recovery patterns.',
      'certs.soa': 'Operational excellence, CloudWatch, Systems Manager, deployment automation, incident response, patching.',
      'certs.tf': 'HCL syntax, providers, state management, modules, remote backends, workspaces, Terraform CLI workflows.',

      'focus.title': 'Focus Areas',
      'focus.security.title': 'Enterprise Cloud Security Enablement',
      'focus.security.text': 'Guided enterprise customers through cloud workload protection adoption across complex multi-cloud environments — deploying shift-left security gates, vulnerability management, and compliance policies at scale.',
      'focus.platform.title': 'Platform & Infrastructure Engineering',
      'focus.platform.text': 'Built AWS infrastructure, Terraform-driven IaC governance, EKS/ECS orchestration, and self-service platforms with Backstage and ArgoCD. Improved release velocity and reduced cloud spend across multiple organizations.',
      'focus.cloudnative.title': 'Cloud-Native Delivery',
      'focus.cloudnative.text': 'Designed serverless-first platforms using ECS, Lambda, and Terraform from scratch. Built scalable CI/CD pipelines and migrated delivery workflows to GitHub Actions for multi-account AWS deployments.',
      'focus.legacy.title': 'Legacy Deployment Modernization',
      'focus.legacy.text': 'Introduced modern CI/CD practices to FinTech and healthcare organizations with legacy .NET/Windows applications — automating pipelines, integrating security scans, and eliminating manual deployment friction.',
      'focus.cost.title': 'Cost & Operational Efficiency',
      'focus.cost.text': 'Reduced AWS costs through right-sizing, observability tuning, and FinOps controls while maintaining SLA commitments. Built operational runbooks and incident response automation.',

      'impact.title': 'Selected Impact',
      'impact.card1.title': 'Streaming Platform — Zero to Production',
      'impact.card1.text': 'Built a production serverless streaming platform from scratch using AWS, Terraform, and automated CI/CD pipelines with multi-account deployment patterns.',
      'impact.card2.title': 'Cloud Workload Protection at Enterprise Scale',
      'impact.card2.text': 'Enabled cloud security adoption across enterprise customers operating multi-million-dollar multi-cloud environments with distributed engineering teams.',
      'impact.card3.title': 'AWS Cost Reduction & Operational Maturity',
      'impact.card3.text': 'Drove measurable AWS cost reduction through right-sizing, observability improvements, and FinOps controls — while improving operational readiness and incident response.',

      'contact.headline': 'Ready to improve your cloud operations?',
      'contact.text': 'Whether you\'re modernizing infrastructure, scaling a platform, or building delivery pipelines from scratch — I\'d like to hear about it. Open to remote roles, consulting, and platform engineering initiatives.',
      'contact.subtitle': 'Based in Brazil — Available for remote opportunities worldwide',

      'copy.feedback': 'Email copied to clipboard!'
    },
    'pt-BR': {
      'nav.about': 'Sobre',
      'nav.expertise': 'Expertise',
      'nav.certifications': 'Certificações',
      'nav.focus': 'Áreas de Foco',
      'nav.impact': 'Impacto',
      'nav.contact': 'Contato',

      'hero.eyebrow': 'DevOps / Cloud / Platform Engineering',
      'hero.headline': 'Engenheiro DevOps Sênior',
      'hero.location': 'Brasil — Disponível para Remoto',
      'hero.email': 'Email',

      'about.title': 'Sobre',
      'about.text': 'Ajudo organizações a operar, escalar e evoluir ambientes cloud complexos. Com 7+ anos de experiência em segurança enterprise, fintech, saúde e plataformas de mídia, foco em automação de infraestrutura, workflows de entrega e confiabilidade de plataforma — transformando complexidade operacional em alavancagem de engenharia.',

      'signals.security': 'Segurança Cloud Enterprise',
      'signals.aws': 'AWS & Terraform',
      'signals.platform': 'Engenharia de Plataforma',
      'signals.cicd': 'Modernização de CI/CD',

      'expertise.title': 'Expertise Principal',
      'expertise.iac': 'Infraestrutura como Código',
      'expertise.containers': 'Containers & Orquestração',
      'expertise.observability': 'Observabilidade',
      'expertise.secplatform': 'Segurança & Plataforma',

      'certs.title': 'Certificações',
      'certs.clf': 'Fundamentos de cloud, billing, modelo de responsabilidade compartilhada, serviços core da AWS e infraestrutura global.',
      'certs.saa': 'Arquiteturas resilientes, design de VPC, computação/armazenamento/banco de dados, alta disponibilidade, padrões de disaster recovery.',
      'certs.soa': 'Excelência operacional, CloudWatch, Systems Manager, automação de deploy, resposta a incidentes, patching.',
      'certs.tf': 'Sintaxe HCL, providers, gerenciamento de state, módulos, backends remotos, workspaces, workflows do Terraform CLI.',

      'focus.title': 'Áreas de Foco',
      'focus.security.title': 'Habilitação de Segurança Cloud Enterprise',
      'focus.security.text': 'Orientei clientes enterprise na adoção de proteção de workloads cloud em ambientes multi-cloud complexos — implantando security gates shift-left, gestão de vulnerabilidades e políticas de compliance em escala.',
      'focus.platform.title': 'Engenharia de Plataforma & Infraestrutura',
      'focus.platform.text': 'Construí infraestrutura AWS, governança de IaC com Terraform, orquestração EKS/ECS e plataformas self-service com Backstage e ArgoCD. Melhorei velocidade de release e reduzi custos cloud em múltiplas organizações.',
      'focus.cloudnative.title': 'Entrega Cloud-Native',
      'focus.cloudnative.text': 'Projetei plataformas serverless-first usando ECS, Lambda e Terraform do zero. Construí pipelines CI/CD escaláveis e migrei workflows de entrega para GitHub Actions em deploys AWS multi-account.',
      'focus.legacy.title': 'Modernização de Deploy Legado',
      'focus.legacy.text': 'Introduzi práticas modernas de CI/CD em organizações FinTech e saúde com aplicações legadas .NET/Windows — automatizando pipelines, integrando scans de segurança e eliminando atrito de deploy manual.',
      'focus.cost.title': 'Custo & Eficiência Operacional',
      'focus.cost.text': 'Reduzi custos AWS através de right-sizing, tuning de observabilidade e controles FinOps, mantendo compromissos de SLA. Construí runbooks operacionais e automação de resposta a incidentes.',

      'impact.title': 'Impacto Selecionado',
      'impact.card1.title': 'Plataforma de Streaming — Do Zero à Produção',
      'impact.card1.text': 'Construí uma plataforma serverless de streaming em produção do zero usando AWS, Terraform e pipelines CI/CD automatizados com padrões de deploy multi-account.',
      'impact.card2.title': 'Proteção de Workloads Cloud em Escala Enterprise',
      'impact.card2.text': 'Habilitei adoção de segurança cloud em clientes enterprise operando ambientes multi-cloud multimilionários com equipes de engenharia distribuídas.',
      'impact.card3.title': 'Redução de Custos AWS & Maturidade Operacional',
      'impact.card3.text': 'Conduzi redução mensurável de custos AWS através de right-sizing, melhorias de observabilidade e controles FinOps — enquanto melhorava prontidão operacional e resposta a incidentes.',

      'contact.headline': 'Pronto para melhorar suas operações cloud?',
      'contact.text': 'Seja modernizando infraestrutura, escalando uma plataforma ou construindo pipelines de entrega do zero — gostaria de saber mais. Aberto a vagas remotas, consultoria e iniciativas de engenharia de plataforma.',
      'contact.subtitle': 'Baseado no Brasil — Disponível para oportunidades remotas no mundo todo',

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

  window.__i18n = { applyLanguage, currentLang: detectLanguage };

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
