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
      'hero.resume': 'Download Resume',

      'about.title': 'About',
      'about.text': 'I work at the intersection of cloud infrastructure, delivery automation, and platform engineering. Over the past 7+ years, I\'ve helped organizations — from enterprise security vendors to fast-moving startups — build the operational foundations they need to scale safely. My focus is on making complex environments simpler to operate, deploy into, and evolve.',

      'signals.security': 'Enterprise Cloud Security',
      'signals.aws': 'AWS & Terraform',
      'signals.platform': 'Platform Engineering',
      'signals.cicd': 'CI/CD Modernization',

      'expertise.title': 'Core Expertise',
      'expertise.iac': 'Infrastructure as Code',
      'expertise.containers': 'Containers & Orchestration',
      'expertise.observability': 'Observability',
      'expertise.security': 'Security',

      'certs.title': 'Certifications',
      'certs.clf': 'Cloud fundamentals, billing, shared responsibility model, core AWS services and global infrastructure.',
      'certs.saa': 'Resilient architectures, VPC design, compute/storage/database, high availability, disaster recovery patterns.',
      'certs.soa': 'Operational excellence, CloudWatch, Systems Manager, deployment automation, incident response, patching.',
      'certs.tf': 'HCL syntax, providers, state management, modules, remote backends, workspaces, Terraform CLI workflows.',

      'focus.title': 'Focus Areas',
      'focus.security.title': 'Enterprise Cloud Security Enablement',
      'focus.security.text': 'Worked with large enterprise customers running complex multi-cloud environments with significant cloud budgets. Guided adoption of cloud workload protection through hands-on deployment, shift-left security gates, vulnerability management, and compliance policies — enabling teams to operationalize security at scale.',
      'focus.platform.title': 'Platform & Infrastructure Engineering',
      'focus.platform.text': 'Built and maintained AWS infrastructure, Terraform-driven IaC governance, EKS/ECS orchestration, CI/CD modernization, and self-service platforms using Backstage, Crossplane, and ArgoCD. Improved release velocity by 35% and reduced cloud spend by 20% across multiple organizations.',
      'focus.cloudnative.title': 'Cloud-Native Delivery',
      'focus.cloudnative.text': 'Designed ECS/Lambda architectures from scratch with Terraform, built scalable CI/CD pipelines, and migrated delivery workflows from CircleCI to GitHub Actions. Delivered production-ready platforms with Terraform modules for multi-account AWS deployments.',
      'focus.legacy.title': 'Legacy Deployment Modernization',
      'focus.legacy.text': 'Introduced modern pipeline practices to FinTech and healthcare organizations with legacy .NET/Windows applications — building GitLab CI and GitHub Actions pipelines, integrating security scans, and automating RDS migrations with zero downtime. Reduced manual deployment friction by 90%.',
      'focus.cost.title': 'Cost & Operational Efficiency',
      'focus.cost.text': 'Reduced AWS cloud costs through right-sizing, observability tuning, and FinOps controls while maintaining operational continuity and SLA commitments. Built operational runbooks and incident response automation to improve team readiness.',

      'impact.title': 'Selected Impact',
      'impact.card1.title': 'Serverless Platform from Scratch',
      'impact.card1.text': 'Designed and delivered a production streaming platform using AWS, Terraform, and automated CI/CD — from zero to live.',
      'impact.card2.title': 'Enterprise Security at Scale',
      'impact.card2.text': 'Guided workload protection adoption across enterprise customers with multi-million-dollar cloud environments.',
      'impact.card3.title': 'Cloud Cost Efficiency & Operations',
      'impact.card3.text': 'Improved operational maturity and reduced AWS costs through right-sizing, automation, and FinOps-driven decisions.',

      'contact.headline': 'Let\'s build something reliable.',
      'contact.text': 'Looking for a DevOps engineer who can deliver scalable infrastructure, streamline your pipelines, and enable your engineering teams? Let\'s talk.',
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
      'hero.resume': 'Baixar Currículo',

      'about.title': 'Sobre',
      'about.text': 'Atuo na interseção entre infraestrutura cloud, automação de entrega e engenharia de plataforma. Nos últimos 7+ anos, ajudei organizações — de fornecedores de segurança enterprise a startups de rápido crescimento — a construir as bases operacionais que precisam para escalar com segurança. Meu foco é tornar ambientes complexos mais simples de operar, deployar e evoluir.',

      'signals.security': 'Segurança Cloud Enterprise',
      'signals.aws': 'AWS & Terraform',
      'signals.platform': 'Engenharia de Plataforma',
      'signals.cicd': 'Modernização de CI/CD',

      'expertise.title': 'Expertise Principal',
      'expertise.iac': 'Infraestrutura como Código',
      'expertise.containers': 'Containers & Orquestração',
      'expertise.observability': 'Observabilidade',
      'expertise.security': 'Segurança',

      'certs.title': 'Certificações',
      'certs.clf': 'Fundamentos de cloud, billing, modelo de responsabilidade compartilhada, serviços core da AWS e infraestrutura global.',
      'certs.saa': 'Arquiteturas resilientes, design de VPC, computação/armazenamento/banco de dados, alta disponibilidade, padrões de disaster recovery.',
      'certs.soa': 'Excelência operacional, CloudWatch, Systems Manager, automação de deploy, resposta a incidentes, patching.',
      'certs.tf': 'Sintaxe HCL, providers, gerenciamento de state, módulos, backends remotos, workspaces, workflows do Terraform CLI.',

      'focus.title': 'Áreas de Foco',
      'focus.security.title': 'Habilitação de Segurança Cloud Enterprise',
      'focus.security.text': 'Atuei com grandes clientes enterprise operando ambientes multi-cloud complexos com orçamentos cloud significativos. Orientei a adoção de proteção de workloads cloud através de deploy hands-on, security gates shift-left, gestão de vulnerabilidades e políticas de compliance — habilitando equipes a operacionalizar segurança em escala.',
      'focus.platform.title': 'Engenharia de Plataforma & Infraestrutura',
      'focus.platform.text': 'Construí e mantive infraestrutura AWS, governança de IaC com Terraform, orquestração EKS/ECS, modernização de CI/CD e plataformas self-service usando Backstage, Crossplane e ArgoCD. Melhorei a velocidade de release em 35% e reduzi custos cloud em 20% em múltiplas organizações.',
      'focus.cloudnative.title': 'Entrega Cloud-Native',
      'focus.cloudnative.text': 'Projetei arquiteturas ECS/Lambda do zero com Terraform, construí pipelines CI/CD escaláveis e migrei workflows de entrega do CircleCI para GitHub Actions. Entreguei plataformas production-ready com módulos Terraform para deploys AWS multi-account.',
      'focus.legacy.title': 'Modernização de Deploy Legado',
      'focus.legacy.text': 'Introduzi práticas modernas de pipeline em organizações FinTech e saúde com aplicações legadas .NET/Windows — construindo pipelines GitLab CI e GitHub Actions, integrando scans de segurança e automatizando migrações RDS com zero downtime. Reduzi o atrito de deploy manual em 90%.',
      'focus.cost.title': 'Custo & Eficiência Operacional',
      'focus.cost.text': 'Reduzi custos AWS cloud através de right-sizing, tuning de observabilidade e controles FinOps, mantendo continuidade operacional e compromissos de SLA. Construí runbooks operacionais e automação de resposta a incidentes para melhorar a prontidão da equipe.',

      'impact.title': 'Impacto Selecionado',
      'impact.card1.title': 'Plataforma Serverless do Zero',
      'impact.card1.text': 'Projetei e entreguei uma plataforma de streaming em produção usando AWS, Terraform e CI/CD automatizado — do zero ao ar.',
      'impact.card2.title': 'Segurança Enterprise em Escala',
      'impact.card2.text': 'Orientei a adoção de proteção de workloads em clientes enterprise com ambientes cloud multimilionários.',
      'impact.card3.title': 'Eficiência de Custos Cloud & Operações',
      'impact.card3.text': 'Melhorei a maturidade operacional e reduzi custos AWS através de right-sizing, automação e decisões orientadas por FinOps.',

      'contact.headline': 'Vamos construir algo confiável.',
      'contact.text': 'Procurando um engenheiro DevOps que entrega infraestrutura escalável, otimiza seus pipelines e habilita suas equipes de engenharia? Vamos conversar.',
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
