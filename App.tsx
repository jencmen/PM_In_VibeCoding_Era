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
  Edit3,
  Award,
  Wrench
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

// --- Data ---
const researchResults = [
  { method: 'A', stability: 3.5, speed: 2, label: 'דרישות בלבד' },
  { method: 'B', stability: 4.8, speed: 4, label: 'PRD מלא' },
  { method: 'C', stability: 2.0, speed: 5, label: 'Vibe Only' },
  { method: 'D', stability: 4.5, speed: 4.2, label: 'איטרטיבי' },
];

const toolsLandscape = [
  // Top-Left (High Ability / Less Technical) - Focus area
  { name: 'Base 44', x: 26, y: 84, color: 'bg-orange-500 text-white', highlighted: true },
  { name: 'Google AI Studio', x: 18, y: 68, color: 'bg-slate-900 text-white', highlighted: true },
  { name: 'emergent', x: 42, y: 92, color: 'bg-slate-800 text-white' },
  { name: 'Mocha', x: 34, y: 76, color: 'bg-white text-slate-800 border border-slate-200' },
  { name: 'Dyad', x: 38, y: 62, color: 'bg-white text-purple-600 border border-slate-100' },
  { name: 'Lovable', x: 47, y: 72, color: 'bg-white text-slate-900 border border-slate-100 font-bold' },
  
  // Top-Right (High Ability / More Technical)
  { name: 'replit', x: 58, y: 88, color: 'bg-white text-slate-900 border border-slate-100' },
  { name: 'CURSOR', x: 74, y: 94, color: 'bg-white text-slate-900 border border-slate-100' },
  { name: 'Claude', x: 90, y: 90, color: 'bg-white text-orange-600 border border-slate-100' },
  { name: 'Codex', x: 84, y: 82, color: 'bg-white text-slate-900 border border-slate-100' },
  { name: 'bolt.new', x: 55, y: 65, color: 'bg-slate-900 text-white' },
  { name: 'Rork', x: 68, y: 74, color: 'bg-slate-900 text-white' },

  // Bottom-Left (Lower Ability / Less Technical)
  { name: 'new.website', x: 15, y: 25, color: 'bg-white text-slate-900 border border-slate-200' },
  { name: 'Figma Make', x: 28, y: 18, color: 'bg-white text-slate-900 border border-slate-200' },
  { name: 'UX PILOT', x: 20, y: 10, color: 'bg-white text-blue-600 border border-slate-100' },
];

// --- Sub-components ---

const ToolQuadrant = () => (
  <div className="relative w-full max-w-3xl aspect-[4/3] bg-[#fcfcfc] border border-slate-200 rounded-3xl overflow-visible mt-20 mb-20 shadow-xl mx-auto bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px]">
    {/* Main Axis Lines */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[2px] h-full bg-slate-900 absolute opacity-100 z-0"></div>
      <div className="h-[2px] w-full bg-slate-900 absolute opacity-100 z-0"></div>
    </div>

    {/* Labels at the end of axes */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-slate-900 text-xs md:text-sm whitespace-nowrap px-5 py-2 bg-white border-2 border-slate-900 rounded-full shadow-lg z-30 uppercase tracking-tighter">
      High Ability/Power
    </div>
    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-black text-slate-900 text-xs md:text-sm whitespace-nowrap px-5 py-2 bg-white border-2 border-slate-900 rounded-full shadow-lg z-30 uppercase tracking-tighter">
      Lower Ability/Power
    </div>
    <div className="absolute top-1/2 left-0 -translate-x-[60%] md:-translate-x-[75%] -translate-y-1/2 font-black text-slate-900 text-xs md:text-sm whitespace-nowrap px-5 py-2 bg-white border-2 border-slate-900 rounded-full shadow-lg z-30 uppercase tracking-tighter -rotate-90">
      Less technical
    </div>
    <div className="absolute top-1/2 right-0 translate-x-[60%] md:translate-x-[75%] -translate-y-1/2 font-black text-slate-900 text-xs md:text-sm whitespace-nowrap px-5 py-2 bg-white border-2 border-slate-900 rounded-full shadow-lg z-30 uppercase tracking-tighter rotate-90">
      More technical
    </div>

    {/* Tools */}
    {toolsLandscape.map((tool, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.03, type: 'spring', stiffness: 200, damping: 15 }}
        className={`absolute px-3.5 py-2 rounded-xl shadow-lg text-[10px] md:text-xs font-black flex items-center gap-2 cursor-default hover:scale-110 transition-transform ${tool.color} ${tool.highlighted ? 'ring-4 ring-yellow-400 ring-offset-2 z-20 scale-110 shadow-yellow-200/50' : 'z-10'}`}
        style={{ 
          left: `${tool.x}%`, 
          bottom: `${tool.y}%`,
          transform: 'translate(-50%, 50%)'
        }}
      >
        {tool.highlighted && <Zap size={14} className="text-yellow-400 fill-current" />}
        {tool.name}
      </motion.div>
    ))}
  </div>
);

const SectionPlaceholder = ({ title }: { title: string }) => (
  <div className="mt-6 p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 group hover:border-indigo-400 hover:bg-indigo-50/30 hover:text-indigo-500 transition-all cursor-pointer">
    <Edit3 className="mb-2" size={24} />
    <span className="font-bold tracking-tight">לחץ כאן להוספת תוכן לפרק: {title}</span>
  </div>
);

const AcademicCard = ({ children, title, icon: Icon }: { children?: React.ReactNode, title: string, icon: any }) => (
  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm mb-10">
    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
      <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-100">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
    </div>
    {children}
  </div>
);

// --- Sections ---

const Abstract = () => (
  <div className="max-w-3xl">
    <h1 className="text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
      שינוי פרדיגמת ה-Product Management בעידן ה-Vibe Coding
    </h1>
    <div className="bg-indigo-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mb-12 border-b-8 border-indigo-700">
      <Quote className="absolute top-8 right-8 opacity-10" size={100} />
      <h2 className="text-sm font-black mb-6 border-b border-white/10 pb-4 uppercase tracking-[0.3em] text-indigo-300">תקציר מחקרי (Abstract)</h2>
      <p className="text-2xl font-medium leading-relaxed italic text-indigo-50">
        "מחקר זה מנתח את הטרנספורמציה של מנהל המוצר מ'מתווך דרישות' ל'בנאי פעיל'. בעידן ה-Vibe Coding, היכולת לייצר קוד עובד ללא ידע תכנותי עמוק הופכת את ה-PM ל'צוות של איש אחד' בשלבי ה-0 ל-1, ומגדירה מחדש את גבולות האחריות בין מוצר לפיתוח."
      </p>
    </div>
    <div className="flex gap-4 mb-8">
      {['Vibe Coding', 'AI Agents', 'PM Revolution', 'Product-Led Engineering'].map(tag => (
        <span key={tag} className="px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-xs font-black uppercase tracking-widest">{tag}</span>
      ))}
    </div>
    <SectionPlaceholder title="סקירה תיאורטית" />
  </div>
);

const Introduction = () => (
  <div className="space-y-8">
    <AcademicCard title="1. מבוא: שבירת חומת ה-Handoff" icon={BookOpen}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="prose prose-slate text-xl leading-relaxed text-slate-700">
          <p className="font-medium">
            הפרדיגמה הישנה נשענה על מסמכי דרישות ארוכים. ה-PM כתב, המעצב צייר, והמפתח בנה. 
          </p>
          <p className="mt-6 p-6 bg-slate-50 rounded-2xl border-r-8 border-indigo-500 font-bold text-slate-900">
            הבעיה: איבוד קונטקסט בתרגום. בעידן ה-AI, המודל הופך למתרגם הישיר, ומאפשר ל-PM לדלג על שלב התיווך.
          </p>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] flex flex-col items-center justify-center text-white relative overflow-hidden group transition-all hover:scale-[1.02]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl"></div>
          <Users size={64} className="text-indigo-400 mb-6 group-hover:rotate-12 transition-transform" />
          <span className="text-center text-xl font-black italic">"ה-PM הופך לבונה - ה-Dev הופך לארכיטקט"</span>
          <div className="mt-8 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </AcademicCard>
    <SectionPlaceholder title="ניתוח הסטורי של כלי פיתוח" />
  </div>
);

const Methodology = () => (
  <div className="space-y-12">
    <AcademicCard title="2. מתודולוגיה: ארבעת המודלים של ה-Builder" icon={Settings}>
      <p className="text-xl text-slate-600 mb-10 leading-relaxed">
        ביצענו מחקר אורך הבוחן 4 גישות שונות ליצירת MVP באמצעות AI. הממצאים מצביעים על עדיפות ברורה לגישה האיטרטיבית.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          { 
            id: 'A', 
            title: 'The Pure Documenter', 
            subtitle: 'דרישות בלבד', 
            desc: 'כתיבת ה"מה" ללא התייחסות ל"איך". רמת חופש גבוהה למודל, רמת דיוק נמוכה.',
            color: 'bg-slate-100 text-slate-800'
          },
          { 
            id: 'B', 
            title: 'The Detailed Architect', 
            subtitle: 'PRD + Solution Design', 
            desc: 'הגדרה מדויקת הכוללת מבנה נתונים ודיאגרמות זרימה. יציבות גבוהה.',
            color: 'bg-indigo-50 text-indigo-800'
          },
          { 
            id: 'C', 
            title: 'The Vibe Coder', 
            subtitle: 'One Prompt Build', 
            desc: 'תיאור אמורפי של ה"Vibe". מהיר מאוד אך קשה לתחזוקה ולתיקון.',
            color: 'bg-purple-50 text-purple-800'
          },
          { 
            id: 'D', 
            title: 'The Iterative Builder', 
            subtitle: 'טעינה מדורגת', 
            desc: 'בניית הליבה תחילה ושיפור איטרטיבי מבוסס פידבק. התוצאה הטובה ביותר.',
            winner: true,
            color: 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200'
          },
        ].map(item => (
          <div key={item.id} className={`p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:-translate-y-2 ${item.winner ? 'ring-8 ring-indigo-100' : ''}`}>
            {item.winner && (
              <div className="absolute top-6 left-6 bg-yellow-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 shadow-md">
                <Award size={14} /> RECOMMENDED
              </div>
            )}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 font-black text-2xl shadow-inner ${item.color}`}>
              {item.id}
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{item.title}</h4>
            <h5 className="text-sm font-bold text-indigo-500 mb-4 uppercase tracking-widest">{item.subtitle}</h5>
            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </AcademicCard>

    <AcademicCard title="2.1 מפת הדרכים הטכנולוגית" icon={Wrench}>
      <p className="text-xl text-slate-600 mb-12">
        המפה הבאה מגדירה את מרחב הכלים הנוכחי. השילוב האידיאלי עבור PM נמצא ברביע השמאלי-עליון: יכולת בנייה מקסימלית במינימום חסם טכני.
      </p>
      
      <div className="p-4 md:p-12 bg-slate-50 border border-slate-200 rounded-[3rem] shadow-inner">
        <ToolQuadrant />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[3rem] shadow-lg border border-orange-100 ring-4 ring-orange-50 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 blur-[80px] rounded-full"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 p-3 rounded-2xl shadow-lg">
                <Zap size={24} className="text-white fill-current" />
              </div>
              <h5 className="font-black text-3xl text-slate-900 tracking-tighter italic">Base 44</h5>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              כלי ה-MVP המרכזי במחקר. מאפשר ל-PM ליצור אפליקציות מורכבות ללא כתיבת קוד, תוך הבנה מבנית של מסדי נתונים ו-API.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-10 rounded-[3rem] shadow-lg border border-slate-100 ring-4 ring-slate-50 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-900/10 blur-[80px] rounded-full"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-2xl shadow-lg">
                <Cpu size={24} className="text-white" />
              </div>
              <h5 className="font-black text-3xl text-slate-900 tracking-tighter">AI Studio</h5>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              מעבדת הניסויים של Gemini. המקום בו מזקקים את הפרומפטים והלוגיקות המרכזיות לפני שהן הופכות לרכיבי מוצר.
            </p>
          </motion.div>
        </div>
      </div>
    </AcademicCard>
  </div>
);

const Results = () => (
  <div className="space-y-8">
    <AcademicCard title="3. ממצאים: יעילות מול יציבות" icon={BarChart}>
      <div className="h-[450px] w-full mt-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={researchResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="method" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: '900', fontSize: 14}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
            <RechartsTooltip 
              cursor={{fill: '#f8fafc'}}
              contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', direction: 'rtl', padding: '1.5rem' }}
            />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '2rem', fontWeight: 'bold' }} />
            <Bar dataKey="stability" name="מדד יציבות הקוד (1-5)" fill="#4f46e5" radius={[12, 12, 0, 0]} barSize={40} />
            <Bar dataKey="speed" name="מהירות הגעה ל-MVP (1-5)" fill="#94a3b8" radius={[12, 12, 0, 0]} barSize={40} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-12 p-8 bg-indigo-900 text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
        <h4 className="font-black text-2xl mb-4 flex items-center gap-3">
          <TrendingUp size={28} className="text-indigo-400" /> המסקנה המחקרית:
        </h4>
        <p className="text-xl text-indigo-100 font-light leading-relaxed">
          קיים "עמק הבכא" בין מהירות ליציבות. גישה C (Vibe) מהירה מאוד אך אינה יציבה. גישה D (איטרטיבית) היא ה-Sweet Spot המשלבת יציבות של 90% עם מהירות פיתוח גבוהה.
        </p>
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <div className="space-y-8">
    <AcademicCard title="4. דיון: תפקיד ה-PM החדש" icon={Lightbulb}>
      <div className="prose prose-indigo max-w-none text-slate-700 text-xl space-y-8">
        <p className="font-medium">
          ה-PM כבר אינו "מנהל עבודה" אלא "שותף ליצירה". היכולת להוציא תוצר עובד תוך שעות מחייבת שינוי תפיסה ארגוני.
        </p>
        <div className="bg-slate-50 border-2 border-slate-200 p-10 rounded-[3rem] relative">
          <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg">
            <Zap size={24} fill="currentColor" />
          </div>
          <h4 className="text-slate-900 font-black text-2xl mb-6 italic tracking-tight">The "One Person Team" Fallacy</h4>
          <p className="text-slate-600 leading-relaxed font-medium">
            למרות שה-PM יכול לבנות לבדו ב-Vibe Coding, המחקר מראה כי איכות המוצר הסופי עדיין תלויה בביקורת עמיתים ובתשתיות פיתוח חזקות. ה-AI מקצר את הדרך, אך לא מבטל את הצורך במקצוענות.
          </p>
        </div>
      </div>
    </AcademicCard>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-rose-50 border border-rose-100 p-10 rounded-[3rem] shadow-sm">
        <h4 className="font-black text-rose-900 text-2xl mb-6 flex items-center gap-3">
          <ShieldAlert size={28} /> סיכונים ואתגרים
        </h4>
        <ul className="space-y-4 text-rose-800 text-lg font-bold">
          <li className="flex gap-3 items-start"><span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span> אבטחת מידע ו-Shadow IT</li>
          <li className="flex gap-3 items-start"><span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span> איבוד יכולת התחזוקה (Legacy AI Code)</li>
          <li className="flex gap-3 items-start"><span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span> אינטגרציות למערכות ליבה</li>
        </ul>
      </div>
      <SectionPlaceholder title="אתיקה של פיתוח מבוסס AI" />
    </div>
  </div>
);

const Conclusion = () => (
  <div className="space-y-12">
    <AcademicCard title="5. סיכום והמלצות פרקטיות" icon={CheckCircle2}>
      <div className="space-y-8 text-2xl text-slate-800 font-medium leading-relaxed">
        <p>
          ה-Vibe Coding הוא המהפכה התעשייתית של ניהול המוצר. ההמלצה שלנו:
        </p>
        <div className="p-10 border-r-8 border-indigo-600 bg-indigo-50/50 rounded-2xl italic shadow-inner">
          "אל תבקשו אישור לבנות - תבנו ואז תבקשו פידבק. המרחק בין רעיון למוצר עובד מעולם לא היה קצר יותר."
        </div>
      </div>
      <div className="mt-16 flex flex-wrap gap-6">
        <motion.button whileHover={{ scale: 1.05 }} className="bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black text-lg flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200">
          <FileText size={24} /> הורד את המחקר המלא
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all shadow-lg">
          ביבליוגרפיה (34 מקורות)
        </motion.button>
      </div>
    </AcademicCard>
    <div className="text-center pb-20 opacity-30">
      <p className="text-xs font-black uppercase tracking-[0.5em]">End of Presentation // March 2025</p>
    </div>
  </div>
);

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
    <div className="min-h-screen bg-slate-50 flex flex-row selection:bg-indigo-100 selection:text-indigo-900">
      {/* Sidebar Navigation - Fixed Right for RTL layout */}
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col fixed h-full z-10 shadow-xl right-0 overflow-y-auto custom-scrollbar">
        <div className="p-10 border-b border-slate-100 bg-slate-50/30">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="text-indigo-600" size={32} fill="currentColor" />
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter italic leading-none">Vibe Coding<br/>Journal</h1>
          </div>
          <p className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em]">Scientific PM Frameworks</p>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-5 rounded-[1.5rem] text-right font-black transition-all group ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-[1.02]' 
                  : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <item.icon size={20} className={activeTab === item.id ? 'text-white' : 'text-slate-300 group-hover:text-indigo-500'} />
              <span className="text-base tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Status</div>
            <div className="text-indigo-600 font-black text-sm">PEER REVIEWED</div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mr-80 p-8 md:p-16 lg:p-24 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
        <div className="max-w-6xl mx-auto">
          {/* Header Info */}
          <div className="flex justify-between items-center mb-20 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <div className="flex gap-12">
              <span>VOL 01 / ISSUE 2025</span>
              <span className="hidden lg:inline">Product Management Revolution</span>
            </div>
            <div className="flex items-center gap-3 text-indigo-600 cursor-pointer group">
              <span className="group-hover:underline">Cite this paper</span>
              <ExternalLink size={12} />
            </div>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {activeTab === 'abstract' && <Abstract />}
              {activeTab === 'intro' && <Introduction />}
              {activeTab === 'method' && <Methodology />}
              {activeTab === 'results' && <Results />}
              {activeTab === 'discussion' && <Discussion />}
              {activeTab === 'conclusion' && <Conclusion />}
            </motion.div>
          </AnimatePresence>

          {/* Page Footer */}
          <footer className="mt-32 pt-10 border-t-2 border-slate-100 flex justify-between items-center text-slate-300 text-[10px] font-black">
            <div className="flex items-center gap-6">
              <span className="font-mono bg-slate-200 text-slate-500 px-3 py-1 rounded-full">PAGE 0{navigation.findIndex(t => t.id === activeTab) + 1}</span>
              <span className="italic opacity-50 tracking-[0.2em]">VIBE CODING SCIENTIFIC JOURNAL</span>
            </div>
            <div className="flex gap-6 items-center">
              <button className="hover:text-indigo-500 transition-colors uppercase">Metadata</button>
              <button className="hover:text-indigo-500 transition-colors uppercase">Archives</button>
              <button className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-2xl transition-all shadow-sm"><Edit3 size={14} /></button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;