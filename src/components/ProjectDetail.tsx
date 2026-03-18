import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const projects: Record<string, {
  title: string, category: string, duration: string,
  summary: string, problem: string, solution: string, impact: string,
  tech: string[], features: string[], color: string, icon: string
}> = {
  'pr-po-automation': {
    title: 'PR/PO Automation',
    category: 'ERP Automation',
    duration: '2022 - 2023',
    icon: '⚙️',
    color: '#7c3aed',
    summary: 'Automated Purchase Requisition and Purchase Order creation using Oracle APIs, eliminating manual intervention and reducing processing time by 40%.',
    problem: 'The procurement team was manually creating hundreds of Purchase Requisitions and Purchase Orders daily, leading to delays, human errors, and inefficient resource usage. The process required multiple approvals and data entry across different Oracle modules.',
    solution: 'Developed a streamlined PL/SQL solution using Oracle Standard APIs (PO_REQUISITION_IMPORT, PO_CREATE_DRAFT_PO) to automate the entire PR to PO workflow. Built custom validation logic, error handling, and notification system to ensure data integrity.',
    impact: 'Reduced processing time by 40%, eliminated manual data entry errors, enabled the procurement team to handle 3x more transactions with the same headcount.',
    tech: ['Oracle EBS R12', 'PL/SQL', 'Oracle APIs', 'Oracle Forms', 'SQL'],
    features: [
      'Automated PR creation from approved requisitions',
      'Auto PO generation with supplier matching logic',
      'Custom validation and error handling framework',
      'Email notification system for approvals',
      'Dashboard for monitoring automation status',
      '40% reduction in processing time',
    ]
  },
  'material-dispatch': {
    title: 'Material Dispatch Automation',
    category: 'Process Automation',
    duration: '2023 - 2024',
    icon: '🚚',
    color: '#6d28d9',
    summary: 'End-to-end automation integrating ServiceNow portal with Oracle EBS to create Sales Orders automatically, eliminating manual data transfer.',
    problem: 'Field engineers submitted material dispatch requests through ServiceNow, but Oracle Sales Orders had to be created manually by the operations team. This created a bottleneck with delays of 2-4 hours per request and frequent data entry mistakes.',
    solution: 'Built a robust integration layer using PL/SQL procedures and Oracle APIs that automatically polls ServiceNow for approved requests and creates corresponding Sales Orders in Oracle EBS R12. Implemented retry logic, status sync, and error reporting.',
    impact: 'Eliminated 2-4 hour manual processing delays, reduced errors to near zero, and freed up 3 FTE hours daily for higher-value work.',
    tech: ['Oracle EBS R12', 'ServiceNow', 'PL/SQL', 'Oracle Order Management', 'REST APIs'],
    features: [
      'Real-time ServiceNow to Oracle EBS integration',
      'Automatic Sales Order creation from portal requests',
      'Bi-directional status synchronization',
      'Error retry and escalation mechanism',
      'Audit trail for all transactions',
      'Zero manual intervention required',
    ]
  },
  'custom-reports': {
    title: 'Custom Reports Suite',
    category: 'Reporting',
    duration: '2022 - 2026',
    icon: '📊',
    color: '#5b21b6',
    summary: 'Developed a comprehensive suite of custom Oracle reports for inventory tracking, PO matching, and supplier analysis to support business decisions.',
    problem: 'Management and operations teams had limited visibility into inventory levels, purchase order status, and supplier performance. Standard Oracle reports were insufficient for the specific business requirements.',
    solution: 'Designed and developed 15+ custom Oracle Reports and XML Publisher reports using PL/SQL, providing real-time insights into inventory movements, PO matching discrepancies, and supplier scorecards.',
    impact: 'Enabled data-driven decisions, reduced month-end closing time by 30%, and provided management with real-time operational visibility.',
    tech: ['Oracle Reports', 'XML Publisher', 'PL/SQL', 'SQL', 'Oracle EBS R12'],
    features: [
      'Inventory tracking with drill-down capability',
      'PO matching and discrepancy reports',
      'Supplier performance scorecards',
      'Automated scheduled report delivery',
      'Export to Excel and PDF formats',
      'Role-based access control',
    ]
  },
  'erp-interface': {
    title: 'ERP Interface Development',
    category: 'Integration',
    duration: '2023 - 2025',
    icon: '🔗',
    color: '#4c1d95',
    summary: 'Built robust bidirectional data interfaces between Oracle ERP and third-party systems ensuring seamless, real-time data exchange.',
    problem: 'Oracle EBS needed to exchange data with multiple third-party systems including logistics platforms and financial tools. Manual data transfers were error-prone and time-consuming.',
    solution: 'Developed a standardized interface framework using PL/SQL, Oracle Interface Tables, and concurrent programs to handle inbound and outbound data flows with comprehensive error handling and reconciliation.',
    impact: 'Eliminated manual data transfers, reduced integration errors by 95%, and enabled real-time data synchronization across systems.',
    tech: ['Oracle EBS R12', 'PL/SQL', 'Oracle Interface Tables', 'Concurrent Programs', 'SQL*Loader'],
    features: [
      'Bidirectional data synchronization',
      'Standardized error handling framework',
      'Automated reconciliation reports',
      'Real-time monitoring dashboard',
      'Support for multiple file formats',
      '99.9% data accuracy achieved',
    ]
  },
  'webadi': {
    title: 'Item Upload WebADI',
    category: 'WebADI',
    duration: '2024',
    icon: '📋',
    color: '#7c3aed',
    summary: 'Custom WebADI solution enabling bulk item creation in Oracle EBS directly from Excel, empowering non-technical users.',
    problem: 'Creating inventory items in Oracle EBS required technical knowledge and was done one at a time through the forms interface. Business teams needed to upload hundreds of items at once.',
    solution: 'Developed a custom Oracle WebADI integrator with Excel templates, data validation, and bulk upload capability. Included field-level validation, error reporting, and rollback functionality.',
    impact: 'Reduced item creation time from days to hours, enabled business teams to self-serve, and eliminated dependency on technical resources for bulk uploads.',
    tech: ['Oracle WebADI', 'Oracle EBS R12', 'PL/SQL', 'SQL', 'Excel VBA'],
    features: [
      'Custom Excel template with dropdowns',
      'Real-time field validation',
      'Bulk upload of 500+ items at once',
      'Detailed error report generation',
      'Rollback on partial failures',
      'User-friendly for non-technical staff',
    ]
  },
  'ai-rice': {
    title: 'AI Rice Crop Identification',
    category: 'Deep Learning',
    duration: '2021 - 2022',
    icon: '🌾',
    color: '#059669',
    summary: 'Deep learning image classification system identifying rice crop varieties and growth stages using CNN models trained on agricultural datasets.',
    problem: 'Farmers and agricultural experts struggled to quickly identify rice crop varieties and growth stages, leading to suboptimal farming decisions and crop management.',
    solution: 'Built a Convolutional Neural Network (CNN) model trained on thousands of rice crop images. Implemented data augmentation, transfer learning with VGG16, and a simple web interface for predictions.',
    impact: 'Achieved 89% classification accuracy across 8 rice varieties, providing a practical tool for agricultural decision support.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'VGG16', 'OpenCV', 'Flask'],
    features: [
      '89% classification accuracy',
      'Identifies 8 rice crop varieties',
      'Growth stage detection',
      'Transfer learning with VGG16',
      'Data augmentation pipeline',
      'Web interface for predictions',
    ]
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects[id || '']

  if (!project) return (
    <div style={{ background: '#07020f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 32, marginBottom: 16 }}>Project not found</h2>
        <button onClick={() => navigate('/')} style={{ padding: '12px 24px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontFamily: 'monospace' }}>Go Back</button>
      </div>
    </div>
  )

  return (
    <div style={{ background: '#07020f', minHeight: '100vh', color: '#e2e8f0' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, background: `radial-gradient(ellipse at 20% 20%, ${project.color}15 0%, transparent 60%)`, pointerEvents: 'none' }} />

      {/* Back button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ position: 'fixed', top: 32, left: 40, zIndex: 100 }}>
        <button onClick={() => navigate('/#projects')}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: 4, color: '#a78bfa', fontFamily: 'monospace', fontSize: 12, letterSpacing: 2, cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.4)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(124,58,237,0.2)'}>
          ← BACK
        </button>
      </motion.div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '100px 40px' }}>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
            <div style={{ width: 64, height: 64, background: `${project.color}20`, border: `1px solid ${project.color}40`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{project.icon}</div>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 6 }}>{project.category} · {project.duration}</div>
              <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(28px,5vw,52px)', fontWeight: 900, color: '#fff', letterSpacing: -1 }}>{project.title}</h1>
            </div>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, borderLeft: `3px solid ${project.color}`, paddingLeft: 20 }}>{project.summary}</p>
        </motion.div>

        {/* Tech stack */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>Tech Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {project.tech.map(t => (
              <span key={t} style={{ padding: '8px 18px', background: `${project.color}15`, border: `1px solid ${project.color}40`, borderRadius: 20, fontFamily: 'monospace', fontSize: 12, color: '#a78bfa' }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Problem / Solution / Impact */}
        {[
          { label: '🔴 The Problem', content: project.problem, delay: 0.2 },
          { label: '🟢 The Solution', content: project.solution, delay: 0.3 },
          { label: '🚀 The Impact', content: project.impact, delay: 0.4 },
        ].map(({ label, content, delay }) => (
          <motion.div key={label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }}
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: 32, marginBottom: 24 }}>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16 }}>{label}</div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>{content}</p>
          </motion.div>
        ))}

        {/* Key features */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: 32 }}>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 24 }}>✨ Key Features</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {project.features.map((f, i) => (
              <motion.div key={f} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 16, background: `${project.color}08`, border: `1px solid ${project.color}20`, borderRadius: 8 }}>
                <span style={{ color: project.color, fontSize: 16, marginTop: 2 }}>▸</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}