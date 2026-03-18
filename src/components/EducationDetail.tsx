import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const educationData: Record<string, {
  degree: string, school: string, period: string, location: string,
  overview: string, color: string, icon: string,
  subjects: { name: string, description: string, icon: string }[],
  skills: string[], achievements: string[]
}> = {
  'msc-ai': {
    degree: 'MSc in Artificial Intelligence',
    school: 'Dublin Business School',
    period: 'Jan 2026 — Present',
    location: 'Dublin, Ireland 🇮🇪',
    icon: '🎓',
    color: '#7c3aed',
    overview: 'Currently pursuing a Master of Science in Artificial Intelligence at Dublin Business School, Ireland. This program provides deep knowledge in cutting-edge AI technologies, machine learning algorithms, and data-driven solutions applicable to real-world problems.',
    subjects: [
      { icon: '🧠', name: 'Machine Learning', description: 'Supervised and unsupervised learning algorithms, model evaluation, feature engineering, and practical implementation using Python and scikit-learn.' },
      { icon: '🔬', name: 'Deep Learning', description: 'Neural networks, CNNs, RNNs, transformers, and modern architectures. Hands-on with TensorFlow and PyTorch for real-world applications.' },
      { icon: '📊', name: 'Data Analytics', description: 'Statistical analysis, data visualization, exploratory data analysis, and extracting actionable insights from large datasets.' },
      { icon: '🐍', name: 'Python for AI', description: 'Advanced Python programming for AI applications including NumPy, Pandas, Matplotlib, and ML libraries.' },
      { icon: '💾', name: 'Big Data Technologies', description: 'Large-scale data processing using Hadoop, Spark, and cloud-based big data platforms for handling massive datasets.' },
      { icon: '📝', name: 'Research Methods', description: 'Academic research methodology, scientific writing, literature review, and conducting original AI research.' },
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Data Visualization', 'Statistical Analysis', 'Neural Networks', 'NLP Basics'],
    achievements: [
      'Currently pursuing with focus on practical AI applications',
      'Combining 3+ years Oracle ERP experience with AI knowledge',
      'Research interest in AI applications for ERP optimization',
      'Building portfolio of AI/ML projects alongside studies',
    ]
  },
  'btech-it': {
    degree: 'B.Tech Information Technology',
    school: 'Velammal Engineering College',
    period: 'Mar 2018 — Apr 2022',
    location: 'Chennai, India 🇮🇳',
    icon: '🏛️',
    color: '#6d28d9',
    overview: 'Completed Bachelor of Technology in Information Technology from Velammal Engineering College, Anna University. Graduated with CGPA of 7.23/10. The program provided strong fundamentals in computer science, software engineering, and practical development skills.',
    subjects: [
      { icon: '🏗️', name: 'Data Structures & Algorithms', description: 'Arrays, linked lists, trees, graphs, sorting and searching algorithms, complexity analysis, and problem-solving techniques.' },
      { icon: '☕', name: 'Object Oriented Programming', description: 'OOP principles using Java and C++, design patterns, inheritance, polymorphism, encapsulation, and abstraction.' },
      { icon: '🗄️', name: 'Database Management Systems', description: 'Relational databases, SQL, normalization, transactions, indexing, and query optimization — foundation for Oracle career.' },
      { icon: '💻', name: 'Operating Systems', description: 'Process management, memory management, file systems, scheduling algorithms, and Unix/Linux fundamentals.' },
      { icon: '🌐', name: 'Computer Networks', description: 'OSI model, TCP/IP protocols, routing, switching, network security, and socket programming.' },
      { icon: '🔧', name: 'Software Engineering', description: 'SDLC models, requirements analysis, system design, testing methodologies, and project management principles.' },
      { icon: '🤖', name: 'Artificial Intelligence', description: 'Introduction to AI concepts, search algorithms, knowledge representation, and machine learning fundamentals.' },
      { icon: '🌍', name: 'Web Technologies', description: 'HTML, CSS, JavaScript, web frameworks, and building responsive web applications.' },
    ],
    skills: ['Java', 'C++', 'Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Linux', 'Data Structures', 'Algorithms', 'Software Engineering'],
    achievements: [
      'CGPA: 7.23/10 — Anna University',
      'Final Year Project: AI Rice Crop Identification using Deep Learning',
      'Developed Android Attendance Tracking Application',
      'Basketball State Player & Kho Kho Zonal Player',
      'Professional Esports Athlete during college',
      'Strong foundation in DBMS — led to Oracle specialization',
    ]
  }
}

export default function EducationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const edu = educationData[id || '']

  if (!edu) return (
    <div style={{ background: '#07020f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 32, marginBottom: 16 }}>Page not found</h2>
        <button onClick={() => navigate('/')} style={{ padding: '12px 24px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontFamily: 'monospace' }}>Go Back</button>
      </div>
    </div>
  )

  return (
    <div style={{ background: '#07020f', minHeight: '100vh', color: '#e2e8f0' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, background: `radial-gradient(ellipse at 80% 20%, ${edu.color}15 0%, transparent 60%)`, pointerEvents: 'none' }} />

      {/* Back button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ position: 'fixed', top: 32, left: 40, zIndex: 100 }}>
        <button onClick={() => navigate('/')}
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
            <div style={{ width: 72, height: 72, background: `${edu.color}20`, border: `1px solid ${edu.color}40`, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>{edu.icon}</div>
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 6 }}>{edu.period} · {edu.location}</div>
              <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, color: '#fff', letterSpacing: -1, marginBottom: 4 }}>{edu.degree}</h1>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#a78bfa' }}>{edu.school}</div>
            </div>
          </div>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, borderLeft: `3px solid ${edu.color}`, paddingLeft: 20 }}>{edu.overview}</p>
        </motion.div>

        {/* Subjects */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 30, height: 1, background: '#a78bfa', display: 'inline-block' }} />
            Subjects Covered
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 20 }}>
            {edu.subjects.map((subject, i) => (
              <motion.div key={subject.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: 24, transition: 'all 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${edu.color}`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 30px ${edu.color}20` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 24 }}>{subject.icon}</span>
                  <div style={{ fontFamily: 'Georgia,serif', fontSize: 16, fontWeight: 700, color: '#fff' }}>{subject.name}</div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills gained */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: 32, marginBottom: 24 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20 }}>Skills Gained</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {edu.skills.map((skill, i) => (
              <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.05 }}
                style={{ padding: '8px 18px', background: `${edu.color}15`, border: `1px solid ${edu.color}40`, borderRadius: 20, fontFamily: 'monospace', fontSize: 12, color: '#a78bfa' }}>
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 12, padding: 32 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#a78bfa', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20 }}>🏆 Achievements</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {edu.achievements.map((a, i) => (
              <motion.div key={a} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 20px', background: `${edu.color}08`, border: `1px solid ${edu.color}20`, borderRadius: 8 }}>
                <span style={{ color: edu.color, fontSize: 16 }}>▸</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{a}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}