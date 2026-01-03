
import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Settings, 
  BarChart as BarChartIcon, 
  Lightbulb, 
  ShieldAlert, 
  Quote, 
  Search,
  Users,
  Cpu,
  Zap,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  Edit3,
  type LucideIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Legend
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Research Data ---
const researchResults = [
  { method: 'A: דרישות בלבד', stability: 3.5, speed: 2 },
  { method: 'B: דרישות+מסכים', stability: 4.8, speed: 4 },
  { method: 'C: פרומפט חופשי', stability: 2.0, speed: 5 },
  { method: 'D: איטרטיבי', stability: 4.5, speed: 4.2 },
];

// --- Sub-components ---

const SectionPlaceholder = ({ title }: { title: string }) => (
  <div className="mt-6 p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-indigo-300 hover:text-indigo-400 transition-colors cursor-pointer">
    <Edit3 className="mb-2" size={24} />
    <span className="font-medium">לחץ כאן להוספת תוכן לפרק: {title}</span>
  </div>
);

const AcademicCard: React.FC<{ children?: React.ReactNode, title: string, icon: LucideIcon }> = ({ children, title, icon: Icon }) => (
  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm mb-8">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
      <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-black text-slate-800 tracking-tight">{title}</h3>
    </div>
    {children}
  </div>
);

// --- Sections ---

const Abstract = () => (
  <div className="max-w-3xl">
    <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
      שינוי פרדיגמת ה-Product Management בעידן ה-Vibe Coding: ממתווך לבונה
    </h1>
    <div className="bg-indigo-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden mb-12">
      <Quote className="absolute top-6 right-6 opacity-20" size={64} />
      <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-widest text-indigo-300">תקציר (Abstract)</h2>
      <p className="text-2xl font-light leading-relaxed italic">
        "מחקר זה בוחן את השפעת כלי ה-AI Generative על תפקיד מנהל המוצר. הטיעון המרכזי הוא כי Vibe Coding אינו רק כלי פיתוח, אלא טרנספורמציה של ה-PM מ'מתווך דרישות' ל'מייצר מוצר עובד'."
      </p>
    </div>
    <SectionPlaceholder title="מילות מפתח והגדרות יסוד" />
  </div>
);

const Introduction = () => (
  <div className="space-y-8">
    <AcademicCard title="1. מבוא ורקע היסטורי" icon={BookOpen}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose prose-slate text-lg leading-relaxed text-slate-600">
          <p>
            בעשור האחרון, תפקיד מנהל המוצר הוגדר כצומת שבין טכנולוגיה, משתמש ועסקים. ה-PM פעל כ"מתרגם" – העברת צרכי לקוח למסמכי דרישות (PRD).
          </p>
          <p className="mt-4 font-bold text-slate-800">
            הבעיה: תהליך ה-Handoff יצר "צווארי בקבוק" מובנים ואיבוד קונטקסט.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
          <Users size={48} className="text-slate-300 mb-4" />
          <span className="text-center font-bold text-slate-500 italic">"ה-PM הישן: סופר של מסמכים המקווה למוצר"</span>
        </div>
      </div>
    </AcademicCard>
    <SectionPlaceholder title="סקירת ספרות" />
  </div>
);

const Methodology = () => (
  <div className="space-y-8">
    <AcademicCard title="2. מתודולוגיית המחקר" icon={Settings}>
      <p className="text-lg text-slate-600 mb-8">
        לבחינת השפעת איכות האינפוט על התוצר, ביצענו ניסוי השוואתי ב-4 מתודולוגיות:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {[
          { id: 'A', title: 'The Documenter', desc: 'דרישות טקסט' },
          { id: 'B', title: 'The Architect', desc: 'PRD + פתרון' },
          { id: 'C', title: 'The Vibe Coder', desc: 'פרומפט Vibe' },
          { id: 'D', title: 'The Iterative', desc: 'בנייה הדרגתית' },
        ].map(item => (
          <div key={item.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black">
              {item.id}
            </div>
            <h4 className="font-black text-slate-800 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </AcademicCard>
  </div>
);

const Results = () => (
  <div className="space-y-8">
    <AcademicCard title="3. ממצאים וניתוח נתונים" icon={BarChartIcon}>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={researchResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="method" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 'bold'}} />
            <YAxis axisLine={false} tickLine={false} />
            <RechartsTooltip 
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="stability" name="מדד יציבות" fill="#6366f1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="speed" name="מהירות פיתוח" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <div className="space-y-8">
    <AcademicCard title="4. דיון" icon={Lightbulb}>
      <div className="prose prose-indigo max-w-none text-slate-600 text-lg space-y-6">
        <p>
          המחקר מוכיח כי ה-PM כבר אינו רק "מנהל" אלא "בונה".
        </p>
        <div className="bg-slate-900 text-white p-8 rounded-3xl">
          <h4 className="text-white font-black mb-4 flex items-center gap-2 italic">
            <Zap className="text-yellow-400" /> הפאנץ' ליין:
          </h4>
          <p className="text-xl font-light leading-relaxed">
            ה-PM יכול להיות "צוות של אדם אחד" בשלב ההקמה, אך חייב "צוות מומחים" בשלב הסקייל.
          </p>
        </div>
      </div>
    </AcademicCard>
  </div>
);

const Conclusion = () => (
  <div className="space-y-8">
    <AcademicCard title="5. סיכום" icon={CheckCircle2}>
      <div className="space-y-6 text-xl text-slate-700 font-light">
        <p>
          המלצת המחקר: אל תחליפו את הצוות, אלא <strong>הקדימו</strong> אותו.
        </p>
        <p className="p-6 border-r-4 border-indigo-500 bg-indigo-50 italic">
          "הביאו גרסה עובדת, ותנו לצוות הפיתוח להפוך אותה למוצר ממשלתי אמין."
        </p>
      </div>
    </AcademicCard>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  const navigation = [
    { id: 'abstract', label: 'תקציר', icon: FileText },
    { id: 'intro', label: '1. מבוא', icon: BookOpen },
    { id: 'method', label: '2. מתודולוגיה', icon: Settings },
    { id: 'results', label: '3. תוצאות', icon: BarChartIcon },
    { id: 'discussion', label: '4. דיון', icon: Lightbulb },
    { id: 'conclusion', label: '5. סיכום', icon: CheckCircle2 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'abstract': return <Abstract />;
      case 'intro': return <Introduction />;
      case 'method': return <Methodology />;
      case 'results': return <Results />;
      case 'discussion': return <Discussion />;
      case 'conclusion': return <Conclusion />;
      default: return <Abstract />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-row-reverse text-right">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col fixed h-full z-10 shadow-sm right-0 overflow-y-auto">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center flex-row-reverse gap-2 mb-2">
            <Zap className="text-indigo-600" size={24} fill="currentColor" />
            <h1 className="text-xl font-black text-slate-900 tracking-tighter italic">Vibe Coding Journal</h1>
          </div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Innovation in PM Frameworks</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const NavIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center flex-row-reverse gap-3 px-4 py-3 rounded-xl text-right font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm border-l-4 border-indigo-600' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <NavIcon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mr-80 p-12 lg:p-20">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
