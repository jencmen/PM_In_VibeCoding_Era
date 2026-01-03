
import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Settings, 
  BarChart, 
  Lightbulb, 
  ShieldAlert, 
  Quote, 
  Info, 
  ChevronLeft,
  Search,
  Users,
  Cpu,
  Zap,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  Edit3
} from 'lucide-react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Legend, 
  Cell 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Research Data ---
const researchResults = [
  { method: 'A: דרישות בלבד', stability: 3.5, speed: 2, precision: 3.8 },
  { method: 'B: דרישות+מסכים', stability: 4.8, speed: 4, precision: 4.9 },
  { method: 'C: פרומפט חופשי', stability: 2.0, speed: 5, precision: 2.2 },
  { method: 'D: איטרטיבי', stability: 4.5, speed: 4.2, precision: 4.6 },
];

// --- Sub-components ---

const SectionPlaceholder = ({ title }: { title: string }) => (
  <div className="mt-6 p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 group hover:border-indigo-300 hover:text-indigo-400 transition-colors cursor-pointer">
    <Edit3 className="mb-2" size={24} />
    <span className="font-medium">לחץ כאן להוספת תוכן לפרק: {title}</span>
  </div>
);

// Fixed: Made children optional in the prop type to avoid "missing children" TS errors when passed as nested elements
const AcademicCard = ({ children, title, icon: Icon }: { children?: React.ReactNode, title: string, icon: any }) => (
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
  <div className="max-w-3xl animate-in fade-in duration-700">
    <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
      שינוי פרדיגמת ה-Product Management בעידן ה-Vibe Coding: ממתווך לבונה
    </h1>
    <div className="bg-indigo-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden mb-12">
      <Quote className="absolute top-6 right-6 opacity-20" size={64} />
      <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-widest text-indigo-300">תקציר (Abstract)</h2>
      <p className="text-2xl font-light leading-relaxed italic">
        "מחקר זה בוחן את השפעת כלי ה-AI Generative על תפקיד מנהל המוצר. הטיעון המרכזי הוא כי Vibe Coding אינו רק כלי פיתוח, אלא טרנספורמציה של ה-PM מ'מתווך דרישות' ל'מייצר מוצר עובד'. המחקר מנתח את גבולות היכולת של 'צוות של איש אחד' בשלבי ה-0 ל-1 לעומת שלבי ה-Scale."
      </p>
    </div>
    <SectionPlaceholder title="מילות מפתח והגדרות יסוד" />
  </div>
);

const Introduction = () => (
  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
    <AcademicCard title="1. מבוא ורקע היסטורי" icon={BookOpen}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose prose-slate text-lg leading-relaxed text-slate-600">
          <p>
            בעשור האחרון, תפקיד מנהל המוצר הוגדר כצומת שבין טכנולוגיה, משתמש ועסקים. ה-PM פעל כ"מתרגם" – העברת צרכי לקוח למסמכי דרישות (PRD) עבור צוותי פיתוח.
          </p>
          <p className="mt-4 font-bold text-slate-800">
            הבעיה: תהליך ה-Handoff יצר "צווארי בקבוק" מובנים, איבוד קונטקסט וזמן המתנה ארוך לתיקוף (Validation).
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
          <Users size={48} className="text-slate-300 mb-4" />
          <span className="text-center font-bold text-slate-500 italic">"ה-PM הישן: סופר של מסמכים המקווה למוצר"</span>
        </div>
      </div>
    </AcademicCard>
    <SectionPlaceholder title="סקירת ספרות: כלי Low-Code לעומת Vibe Coding" />
  </div>
);

const Methodology = () => (
  <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
    <AcademicCard title="2. מתודולוגיית המחקר: הניסוי המבוקר" icon={Settings}>
      <p className="text-lg text-slate-600 mb-8">
        לבחינת השפעת איכות האינפוט על התוצר, ביצענו ניסוי השוואתי על אותה מערכת (MVP פנימי) ב-4 מתודולוגיות שונות:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'A', title: 'The Documenter', desc: 'דרישות טקסטואליות בלבד' },
          { id: 'B', title: 'The Architect', desc: 'PRD + פתרון + מסכים' },
          { id: 'C', title: 'The Vibe Coder', desc: 'פרומפט Vibe מינימלי' },
          { id: 'D', title: 'The Iterative', desc: 'בנייה הדרגתית (השיטה המומלצת)' },
        ].map(item => (
          <div key={item.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black">
              {item.id}
            </div>
            <h4 className="font-black text-slate-800 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </AcademicCard>
    <SectionPlaceholder title="פירוט כלי המחקר (Base 44, AI Studio)" />
  </div>
);

const Results = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <AcademicCard title="3. ממצאים וניתוח נתונים" icon={BarChart}>
      <div className="h-[400px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={researchResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="method" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 'bold'}} />
            <YAxis axisLine={false} tickLine={false} />
            <RechartsTooltip 
              contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="stability" name="מדד יציבות" fill="#6366f1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="speed" name="מהירות פיתוח" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <TrendingUp size={20} /> תובנה מרכזית:
        </h4>
        <p className="text-indigo-800 text-lg">
          נמצא קשר ישיר בין רמת הפירוט ה"ארכיטקטונית" (שיטה B ו-D) לבין יציבות הקוד. בניגוד למיתוס, ה-Vibe לבדו (שיטה C) אינו מספיק לייצור מוצר אמין.
        </p>
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
    <AcademicCard title="4. דיון: המעבר מ-Manager ל-Builder" icon={Lightbulb}>
      <div className="prose prose-indigo max-w-none text-slate-600 text-lg space-y-6">
        <p>
          המחקר מוכיח כי ה-PM כבר אינו רק "מנהל" אלא "בונה". היכולת להוציא תוצר עובד (MVP) ללא תלות בצוות פיתוח בשלבים המוקדמים משנה את יחסי הכוחות בארגון.
        </p>
        <div className="bg-slate-900 text-white p-8 rounded-3xl">
          <h4 className="text-white font-black mb-4 flex items-center gap-2 italic">
            <Zap className="text-yellow-400" /> הפאנץ' ליין המחקרי:
          </h4>
          <p className="text-xl font-light">
            ה-PM יכול להיות "צוות של אדם אחד" בשלב ההקמה (0 ל-1), אך הוא חייב "צוות של מומחים" בשלב ההפעלה והסקייל (1 ל-Infinity).
          </p>
        </div>
      </div>
    </AcademicCard>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-slate-200 p-8 rounded-3xl">
        <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
          <ShieldAlert className="text-rose-500" /> מגבלות המודל (Constraints)
        </h4>
        <ul className="space-y-3 text-slate-500">
          <li className="flex gap-2"><span>•</span> אבטחת מידע ופרטיות בממשלה</li>
          <li className="flex gap-2"><span>•</span> תחזוקה ארוכת טווח (Maintenance)</li>
          <li className="flex gap-2"><span>•</span> אינטגרציות מורכבות</li>
        </ul>
      </div>
      <SectionPlaceholder title="דיון על אתיקה ו-Bias ב-AI" />
    </div>
  </div>
);

const Conclusion = () => (
  <div className="space-y-8 animate-in zoom-in-95 duration-500">
    <AcademicCard title="5. סיכום והמלצות ליישום" icon={CheckCircle2}>
      <div className="space-y-6 text-xl text-slate-700 font-light">
        <p>
          המלצת המחקר למנהלי מוצר בממשלה: אל תחליפו את הצוות, אלא <strong>הקדימו</strong> אותו.
        </p>
        <p className="p-6 border-r-4 border-indigo-500 bg-indigo-50 italic">
          "הביאו גרסה עובדת, ותנו לצוות הפיתוח להפוך אותה למוצר ממשלתי אמין."
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all">
          <FileText size={20} /> הורד את המאמר המלא (PDF)
        </button>
        <button className="border border-slate-200 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
          ביבליוגרפיה ונספחים
        </button>
      </div>
    </AcademicCard>
    <SectionPlaceholder title="הצעות למחקרי המשך" />
  </div>
);

// --- Main App Layout ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('abstract');

  const navigation = [
    { id: 'abstract', label: 'תקציר (Abstract)', icon: FileText },
    { id: 'intro', label: '1. מבוא (Introduction)', icon: BookOpen },
    { id: 'method', label: '2. מתודולוגיה (Methodology)', icon: Settings },
    { id: 'results', label: '3. תוצאות (Results)', icon: BarChart },
    { id: 'discussion', label: '4. דיון (Discussion)', icon: Lightbulb },
    { id: 'conclusion', label: '5. סיכום (Conclusion)', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col fixed h-full z-10 shadow-sm">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-indigo-600" size={24} fill="currentColor" />
            <h1 className="text-xl font-black text-slate-900 tracking-tighter italic">Vibe Coding Journal</h1>
          </div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Innovation in PM Frameworks</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm border-r-4 border-indigo-600' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-400 font-medium">
            סטטוס טיוטה: <span className="text-indigo-500 font-bold">מחכה לנתונים נוספים</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mr-80 p-12 lg:p-20 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header Info */}
          <div className="flex justify-between items-start mb-16 text-slate-400 text-sm font-bold uppercase tracking-widest">
            <div className="flex gap-6">
              <span>ISSN: 2025-PRODUCT-REVOLUTION</span>
              <span>Volume 1, Issue 1</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-500">
              <Search size={14} />
              <span>Cite this paper</span>
            </div>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'abstract' && <Abstract />}
              {activeTab === 'intro' && <Introduction />}
              {activeTab === 'method' && <Methodology />}
              {activeTab === 'results' && <Results />}
              {activeTab === 'discussion' && <Discussion />}
              {activeTab === 'conclusion' && <Conclusion />}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Nav */}
          <div className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-mono">Page 0{navigation.findIndex(t => t.id === activeTab) + 1}</span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-full"><Edit3 size={18} /></button>
              <button className="p-2 hover:bg-slate-100 rounded-full"><ExternalLink size={18} /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
