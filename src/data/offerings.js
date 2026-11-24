export const offeringGroups = [
  {
    title: 'Technology',
    pages: [
      { label: 'AR & VR', href: '/#technology-ar-vr' },
      { label: 'AI imaging', href: '/#technology-ai' },
    ],
  },
  {
    title: 'SaaS systems',
    pages: [
      { label: 'Hospital Management System', href: '/#solutions-hms' },
      { label: 'Patient Management System', href: '/#solutions-pms' },
      { label: 'Pharmacy Management System', href: '/#solutions-phms' },
    ],
  },
];

export const offerings = [
  {
    path: '/technology/ar-vr',
    group: 'Technology',
    label: 'AR & VR',
    title: 'Bring brain imaging into shared 3D space.',
    description:
      'AR MEND’s project roadmap brings interactive augmented-reality views and immersive virtual-reality rehearsal into a brain-focused workflow.',
    status: 'Development roadmap',
    sections: [
      {
        title: 'Augmented reality',
        body: 'The planned AR module uses interactive 3D brain-structure overlays for patient consultations and surgical planning.',
      },
      {
        title: 'Virtual reality',
        body: 'The planned VR module explores immersive environments for procedure rehearsal and medical-student education.',
      },
      {
        title: 'Shared planning',
        body: 'Project materials describe a collaboration layer where multidisciplinary teams can discuss and validate plans.',
      },
    ],
    note: 'These are planned capabilities described in project materials. This presentation does not claim clinical validation or patient outcomes.',
  },
  {
    path: '/technology/ai',
    group: 'Technology',
    label: 'AI imaging',
    title: 'Turn brain imaging into structured insight.',
    description:
      'The AR MEND roadmap describes an AI engine for MRI and CT image workflows, designed to support clinician review with structured, confidence-scored reports.',
    status: 'Development roadmap',
    sections: [
      {
        title: 'MRI and CT workflows',
        body: 'The proposed engine is designed to process brain MRI and CT images as part of a clinician-led diagnostic workflow.',
      },
      {
        title: 'Structured reports',
        body: 'Project materials describe reports that surface potential issues and include confidence scores for professional review.',
      },
      {
        title: 'Clinical context stays central',
        body: 'AI-generated information is intended to support qualified professionals. It is not a standalone diagnosis or a substitute for clinical judgment.',
      },
    ],
    note: 'The AI capabilities described here are development objectives, not a claim of diagnostic accuracy or current clinical availability.',
  },
  {
    path: '/solutions/hms',
    group: 'SaaS systems',
    label: 'Hospital Management System',
    title: 'A SaaS system for hospital operations.',
    description:
      'A cloud-delivered Hospital Management System concept for coordinating the work of a hospital through a subscription model.',
    status: 'SaaS model',
    sections: [
      {
        title: 'Hospital-focused scope',
        body: 'Shape the system around the teams, departments and operational workflows your organization needs to coordinate.',
      },
      {
        title: 'Software as a Service',
        body: 'The product is planned as a SaaS offering. Discuss deployment, user access, data handling and subscription requirements with our team.',
      },
      {
        title: 'Define the modules',
        body: 'Tell us which hospital workflows matter most so the product scope can be aligned with your organization.',
      },
    ],
    note: 'Product modules, integrations and availability should be confirmed with the AR MEND team.',
  },
  {
    path: '/solutions/pms',
    group: 'SaaS systems',
    label: 'Patient Management System',
    title: 'A SaaS system centered on patient workflows.',
    description:
      'A cloud-delivered Patient Management System concept, planned as part of a subscription-based healthcare software suite.',
    status: 'SaaS model',
    sections: [
      {
        title: 'Patient-focused scope',
        body: 'Define the patient and care-team workflows the system should support, from first contact through ongoing care.',
      },
      {
        title: 'Software as a Service',
        body: 'The product is planned as a SaaS offering. Discuss deployment, user access, data handling and subscription requirements with our team.',
      },
      {
        title: 'Built around your organization',
        body: 'Share your operational requirements with our team to shape the right product modules and rollout plan.',
      },
    ],
    note: 'Product modules, integrations and availability should be confirmed with the AR MEND team.',
  },
  {
    path: '/solutions/phms',
    group: 'SaaS systems',
    label: 'Pharmacy Management System',
    title: 'A SaaS system for pharmacy management.',
    description:
      'A cloud-delivered Pharmacy Management System concept, planned as part of a subscription-based healthcare software suite.',
    status: 'SaaS model',
    sections: [
      {
        title: 'Pharmacy-focused scope',
        body: 'Define the day-to-day pharmacy workflows and team needs the system should support.',
      },
      {
        title: 'Software as a Service',
        body: 'The product is planned as a SaaS offering. Discuss deployment, user access, data handling and subscription requirements with our team.',
      },
      {
        title: 'Plan the right modules',
        body: 'Talk with our team about the modules, integrations and rollout approach that fit your pharmacy operation.',
      },
    ],
    note: 'Product modules, integrations and availability should be confirmed with the AR MEND team.',
  },
];
