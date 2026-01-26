import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Settings, 
  BarChart, 
  Lightbulb, 
  ShieldAlert, 
  Quote, 
  Users,
  Zap,
  CheckCircle2,
  ExternalLink,
  Edit3,
  Award,
  Wrench,
  Layout,
  Sparkles,
  Activity,
  Terminal,
  ShieldCheck,
  ArrowRightLeft,
  Handshake,
  User,
  MessageSquare,
  Trophy,
  Cpu,
  Globe
} from 'lucide-react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data ---
const researchResults = [
  { method: 'A: The Documenter', stability: 3.5, speed: 2 },
  { method: 'B: The Architect', stability: 4.8, speed: 4 },
  { method: 'C: The Vibe Coder', stability: 2.0, speed: 5 },
  { method: 'D: The Iterative', stability: 4.5, speed: 4.2 },
];

const methodologyData = [
  {
    id: 'A',
    title: 'The Documenter',
    label: 'דרישות בלבד (A)',
    description: 'הגדרת ה"מה" ללא ה"איך". המודל ממלא את הפערים בעצמו.',
    color: 'bg-white',
    textColor: 'text-slate-900',
    subColor: 'text-slate-400'
  },
  {
    id: 'B',
    title: 'The Architect',
    label: 'PRD מלא + מסכים (B)',
    description: 'הגדרה מדויקת הכוללת פתרון טכני ועיצוב מסכים.',
    color: 'bg-white',
    textColor: 'text-slate-900',
    subColor: 'text-slate-400'
  },
  {
    id: 'C',
    title: 'The Vibe Coder',
    label: 'פרומפט כללי (C)',
    description: 'תיאור חופשי של הרעיון (Vibe Only) ללא מסמכים.',
    color: 'bg-white',
    textColor: 'text-slate-900',
    subColor: 'text-slate-400'
  },
  {
    id: 'D',
    title: 'The Iterative',
    label: 'טעינה הדרגתית (D)',
    description: 'בניית הליבה תחילה ושיפור איטרטיבי (Winner).',
    color: 'bg-sky-500',
    textColor: 'text-white',
    subColor: 'text-sky-100',
    isWinner: true
  }
];

const toolsLandscape = [
  { name: 'Base 44', x: 25, y: 80, color: 'bg-orange-400' },
  { name: 'Google AI Studio', x: 20, y: 70, color: 'bg-blue-400' },
  { name: 'emergent', x: 45, y: 85, color: 'bg-slate-400' },
  { name: 'Mocha', x: 35, y: 75, color: 'bg-slate-500' },
  { name: 'Lovable', x: 48, y: 75, color: 'bg-rose-400' },
  { name: 'CURSOR', x: 75, y: 88, color: 'bg-slate-600' },
  { name: 'Claude', x: 90, y: 90, color: 'bg-orange-500' },
  { name: 'UX PILOT', x: 22, y: 10, color: 'bg-sky-500' },
];

const selectedTools = [
  {
    name: 'Base 44',
    icon: Globe,
    desc: 'הפלטפורמה המרכזית לניהול ופריסת אפליקציות AI עם דגש על מהירות ואינטגרציה חלקה.',
    benefit: 'Deploy מיידי וניהול קונטקסט.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    name: 'Google AI Studio',
    icon: Cpu,
    desc: 'סביבת העבודה המהירה ביותר לבדיקת פרומפטים מורכבים ודיוק ה-Vibe הלוגי של המערכת.',
    benefit: 'גישה ישירה למודלים חזקים ודיוק איטרטיבי.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-50'
  }
];

// --- Sub-components ---

const ToolQuadrant = () => (
  <div className="relative w-full aspect-square md:aspect-video bg-white border border-slate-100 rounded-3xl overflow-hidden mt-8 shadow-sm">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-px h-full bg-slate-100"></div>
      <div className="h-px w-full bg-slate-100"></div>
    </div>
    <div className="absolute top-3 left-1/2 -translate-x-1/2 font-bold text-slate-300 uppercase text-[9px] tracking-widest">High Power</div>
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-bold text-slate-300 uppercase text-[9px] tracking-widest">Low Power</div>
    <div className="absolute top-1/2 left-3 -translate-y-1/2 font-bold text-slate-300 uppercase text-[9px] tracking-widest -rotate-90">Simple</div>
    <div className="absolute top-1/2 right-3 translate-y-1/2 font-bold text-slate-300 uppercase text-[9px] tracking-widest rotate-90">Technical</div>

    {toolsLandscape.map((tool, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`absolute px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm ${tool.color} text-white whitespace-nowrap`}
        style={{ left: `${tool.x}%`, bottom: `${tool.y}%`, transform: 'translate(-50%, 50%)' }}
      >
        {tool.name}
      </motion.div>
    ))}
  </div>
);

const AcademicCard = ({ children, title, icon: Icon }: { children?: React.ReactNode, title: string, icon: any }) => (
  <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mb-10">
    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-50">
      <div className="bg-sky-50 p-2.5 rounded-xl text-sky-500">
        <Icon size={22} />
      </div>
      <h3 className="text-2xl font-black text-slate-800 tracking-tight">{title}</h3>
    </div>
    {children}
  </div>
);

const ScreenshotMock = ({ method }: { method: 'A' | 'B' | 'C' | 'D' }) => {
  const configs = {
    A: { title: "תוצר A: The Documenter", color: "bg-slate-50", content: <div className="p-6 space-y-3 opacity-40"><div className="h-4 w-3/4 bg-slate-300 rounded-full"></div><div className="h-4 w-full bg-slate-200 rounded-full"></div></div> },
    B: { title: "תוצר B: The Architect", color: "bg-sky-50/30", content: <div className="p-6 space-y-4"><div className="h-6 w-1/3 bg-sky-200 rounded-lg"></div><div className="h-12 w-full bg-sky-500/10 rounded-xl border border-sky-100"></div></div> },
    C: { title: "תוצר C: The Vibe Coder", color: "bg-purple-50/30", content: <div className="p-6 flex flex-col items-center justify-center h-full"><Sparkles className="text-purple-300 animate-pulse" size={40} /></div> },
    D: { title: "תוצר D: The Iterative", color: "bg-sky-50/50", content: <div className="p-6 space-y-4"><div className="h-28 bg-white border border-sky-100 rounded-2xl p-4 flex gap-4 shadow-sm"><div className="w-1/4 h-full bg-slate-50 rounded-xl"></div><div className="flex-1 space-y-3"><div className="h-3 w-3/4 bg-slate-100 rounded-full"></div><div className="h-12 w-full bg-sky-50 rounded-xl"></div></div></div></div> }
  };
  const config = configs[method];
  return (
    <div className="flex flex-col space-y-3 w-full">
      <div className="text-sm font-black text-slate-400 mr-2 uppercase tracking-wide">{config.title}</div>
      <div className={`aspect-[21/9] rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all group ${config.color}`}>
        <div className="h-6 bg-white/80 backdrop-blur-sm border-b border-slate-50 flex items-center px-4 gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
        <div className="h-full relative">{config.content}</div>
      </div>
    </div>
  );
};

// --- Sections ---

const Abstract = () => (
  <div className="max-w-4xl">
    <h1 className="text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">שינוי פרדיגמת ה-Product Management <br/><span className="text-sky-500">בעידן ה-Vibe Coding</span></h1>
    <div className="bg-slate-50 border border-slate-100 p-12 rounded-[3rem] shadow-sm relative overflow-hidden mb-12">
      <Quote className="absolute top-8 right-8 text-sky-500/10" size={100} />
      <h2 className="text-sm font-black mb-6 text-sky-500 uppercase tracking-[0.2em]">תקציר המאמר / Abstract</h2>
      <p className="text-3xl font-light leading-snug text-slate-700 italic">"ממתווך דרישות לבונה מוצר עובד. בחינת הגבולות בין Vibe ל-Engineering ככלי לעוצמה ניהולית."</p>
    </div>
  </div>
);

const Introduction = () => (
  <AcademicCard title="1. מבוא (Introduction)" icon={BookOpen}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-10">
        <div className="bg-sky-50/50 p-10 border-r-8 border-sky-500 rounded-l-[2rem] shadow-sm relative">
          <Quote className="absolute -top-4 -right-4 text-sky-200" size={40} />
          <p className="text-slate-800 font-bold text-2xl mb-3 leading-tight">"The best way to predict the future is to create it."</p>
          <p className="text-sky-600 text-sm font-black tracking-widest uppercase">— Peter Drucker</p>
        </div>

        <p className="text-xl text-slate-600 leading-relaxed">
          בעידן ה-AI, מנהל המוצר הופך ממי שרק <strong>מתאר</strong> את המוצר למי שבאופן אקטיבי <strong>בורא</strong> אותו. זהו מעבר דרמטי מניהול תהליכים לניהול תוצרים ישיר.
        </p>
        
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h4 className="flex items-center gap-3 text-sky-500 font-black mb-4 text-lg">
            <Zap size={22} /> שבירת חומת ה-Handoff
          </h4>
          <p className="text-slate-500 leading-relaxed">
            המושג מתאר את ביטול ההפרדה המסורתית בין 'אפיון' ל'פיתוח'. בעזרת Vibe Coding, מנהל המוצר מייצר MVP עובד בעצמו, מה שמאפשר איטרציות במהירות המחשבה ללא תלות בצווארי בקבוק חיצוניים.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-slate-900 border-b border-slate-50 pb-3 flex items-center gap-3">
            <Activity size={22} className="text-sky-500" /> Vibe vs Engineering
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="font-black text-sky-500 block mb-2 uppercase text-xs tracking-wider">Vibe Coding</span>
              <p className="text-sm text-slate-600 leading-relaxed">בנייה מבוססת <strong>כוונה (Intent)</strong>. המיקוד הוא בחזון ובחוויה הכוללת.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <span className="font-black text-slate-800 block mb-2 uppercase text-xs tracking-wider">Engineering</span>
              <p className="text-sm text-slate-600 leading-relaxed">בנייה מבוססת <strong>מבנה (Structure)</strong>. המיקוד הוא ביציבות ובדיוק טכני.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-8">
        <div className="bg-white p-12 rounded-[4rem] flex flex-col items-center justify-center border border-slate-50 shadow-inner flex-1 min-h-[400px] group">
          <Users size={100} className="text-sky-100 mb-10 transition-transform group-hover:scale-110" />
          <span className="text-center font-black text-slate-400 italic text-3xl max-w-sm leading-tight">
            "מעבר מצופה מהצד לשותף אקטיבי ביצירה"
          </span>
          <div className="mt-12 flex gap-3">
            <div className="w-16 h-1.5 bg-sky-500 rounded-full"></div>
            <div className="w-8 h-1.5 bg-slate-100 rounded-full"></div>
            <div className="w-4 h-1.5 bg-slate-50 rounded-full"></div>
          </div>
        </div>
        
        <div className="bg-sky-500 p-10 rounded-[3rem] text-white shadow-xl shadow-sky-100">
           <h5 className="font-black text-xl mb-4 flex items-center gap-3">
             <Lightbulb size={24} /> התובנה המרכזית:
           </h5>
           <p className="text-sky-50 text-lg leading-relaxed font-light">
             ה-Vibe Coding אינו מחליף את ההנדסה, הוא מחליף את הניחושים. אנחנו בונים כדי ללמוד, ולא לומדים כדי לבנות.
           </p>
        </div>
      </div>
    </div>
  </AcademicCard>
);

const Methodology = () => (
  <div className="space-y-10">
    <AcademicCard title="2. מתודולוגיה (Methodology)" icon={Settings}>
      <div className="mb-10 p-8 bg-slate-50/50 rounded-[2rem] border border-slate-50">
        <p className="text-slate-600 text-xl font-light leading-relaxed">
          במחקר זה בחנו ארבע אסטרטגיות שונות לבנייה מהירה של MVP. כל מתודולוגיה מייצגת איזון אחר בין חופש פעולה למודל (Vibe) לבין שליטה הדוקה (Engineering).
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {methodologyData.map(method => (
          <div key={method.id} className={`p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col min-h-[220px] transition-all hover:shadow-md ${method.color} ${method.textColor}`}>
             <div className="flex justify-between items-start mb-6">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl ${method.isWinner ? 'bg-white text-sky-500' : 'bg-slate-50 text-slate-400'}`}>
                 {method.id}
               </div>
               {method.isWinner && (
                 <div className="bg-white text-sky-500 text-xs font-black px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm uppercase tracking-widest">
                   <Trophy size={14} /> The Winner
                 </div>
               )}
             </div>
             
             <div className="mb-4">
               <div className="text-xs opacity-60 font-black mb-1 uppercase tracking-tighter">{method.title}</div>
               <div className="font-black text-2xl leading-tight">{method.label}</div>
             </div>
             
             <p className={`text-base mt-auto font-medium ${method.subColor}`}>
               {method.description}
             </p>
          </div>
        ))}
      </div>
    </AcademicCard>

    <AcademicCard title="הכלים הנבחרים (Selected Tools)" icon={Wrench}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">The Winning Stack</h4>
          <div className="grid grid-cols-1 gap-6">
            {selectedTools.map((tool, idx) => (
              <div key={idx} className={`p-8 rounded-[2rem] border border-slate-50 shadow-sm ${tool.bgColor} flex flex-col`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-white shadow-sm ${tool.color}`}>
                    <tool.icon size={28} />
                  </div>
                  <div className="font-black text-xl text-slate-800">{tool.name}</div>
                </div>
                <p className="text-slate-500 mb-6 leading-relaxed">{tool.desc}</p>
                <div className="flex items-center gap-3 text-xs font-black bg-white/60 w-fit px-4 py-2 rounded-full border border-white">
                  <Zap size={14} className="text-yellow-500" />
                  <span className="text-slate-700 uppercase tracking-wide">{tool.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50/50 p-8 rounded-[3rem] border border-slate-50">
          <ToolQuadrant />
        </div>
      </div>
    </AcademicCard>
  </div>
);

const Results = () => (
  <div className="space-y-12">
    <AcademicCard title="3. ממצאים (Results)" icon={BarChart}>
      <div className="h-[500px] w-full mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={researchResults} layout="vertical" margin={{ left: 60, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis dataKey="method" type="category" axisLine={false} tickLine={false} width={150} style={{ fontWeight: 900, fill: '#64748b', fontSize: '14px' }} />
            <RechartsTooltip contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 30px rgb(0 0 0 / 0.05)', direction: 'rtl' }} />
            <Legend verticalAlign="top" align="right" height={50} iconType="circle" />
            <Bar dataKey="stability" name="יציבות המערכת" fill="#0ea5e9" radius={[0, 10, 10, 0]} barSize={24} />
            <Bar dataKey="speed" name="מהירות פיתוח" fill="#e2e8f0" radius={[0, 10, 10, 0]} barSize={24} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </AcademicCard>

    <AcademicCard title="השוואה ויזואלית (Visual Comparison)" icon={Layout}>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        <ScreenshotMock method="A" />
        <ScreenshotMock method="B" />
        <ScreenshotMock method="C" />
        <ScreenshotMock method="D" />
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <AcademicCard title="4. דיון ותובנות (Discussion)" icon={Lightbulb}>
    <div className="space-y-12">
      <section className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-sky-500 p-2.5 rounded-xl text-white">
            <User size={24} />
          </div>
          <h4 className="text-2xl font-black text-slate-800">חוויה אישית: מהספקן למאמין</h4>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          המעבר מ"לכתוב על המוצר" ל"לבנות את המוצר" הוא משכר ומפחיד כאחד. הוא מחייב אותנו לפתח אחריות חדשה על איכות הקוד שאנחנו מייצרים במחי יד. ה-Vibe Coding מאפשר לנו להיות ה-Executor הראשון בשרשרת, מה שמשנה את כל הדינמיקה בצוות.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
          <h5 className="font-black text-xl mb-4 flex items-center gap-3 text-sky-500"><Sparkles size={20}/> אפקט ה-WOW</h5>
          <p className="text-slate-500 leading-relaxed">האיטרציה הראשונה היא הניצחון הגדול. רעיון שהופך למערכת עובדת תוך דקות יוצר מומנטום שאי אפשר להתעלם ממנו.</p>
        </div>
        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
          <h5 className="font-black text-xl mb-4 flex items-center gap-3 text-rose-400"><ShieldAlert size={20}/> התועלת השולית</h5>
          <p className="text-slate-500 leading-relaxed">ככל שמתקדמים ל-Edge Cases, המאמץ עולה. שם נדרשת המתודולוגיה המובנית כדי לא לטבוע ב"Vibe" ולשמור על כיוון.</p>
        </div>
      </div>
    </div>
  </AcademicCard>
);

const Conclusion = () => (
  <AcademicCard title="5. סיכום והמלצות (Conclusion)" icon={CheckCircle2}>
    <div className="space-y-8 text-2xl text-slate-700 font-light leading-snug">
      <p>המלצת המחקר ברורה: אל תחליפו את הצוות, אלא <strong>הקדימו</strong> אותו.</p>
      <div className="p-10 border-r-8 border-sky-500 bg-sky-50/30 italic rounded-[2.5rem] shadow-inner text-slate-600">
        "השתמשו ב-Vibe Coding כדי להביא גרסה עובדת ומבוססת פידבק, ותנו לצוות הפיתוח המיומן להפוך אותה למוצר מאובטח ויציב."
      </div>
    </div>
  </AcademicCard>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('abstract');
  const navigation = [
    { id: 'abstract', label: 'תקציר', icon: FileText },
    { id: 'intro', label: '1. מבוא', icon: BookOpen },
    { id: 'method', label: '2. מתודולוגיה', icon: Settings },
    { id: 'results', label: '3. תוצאות', icon: BarChart },
    { id: 'discussion', label: '4. דיון', icon: Lightbulb },
    { id: 'conclusion', label: '5. סיכום', icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-row selection:bg-sky-100">
      <aside className="w-80 bg-slate-50/50 border-l border-slate-100 flex flex-col fixed h-full z-10 right-0 overflow-y-auto custom-scrollbar">
        <div className="p-10 border-b border-slate-100/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sky-100">
              <Zap size={18} fill="currentColor" />
            </div>
            <h1 className="text-xl font-black text-slate-900 tracking-tighter">Vibe Coding Era</h1>
          </div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Framework for PMs</p>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-5 rounded-[1.5rem] text-right font-black transition-all duration-300 ${activeTab === item.id ? 'bg-white text-sky-500 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`}
            >
              <item.icon size={20} className={activeTab === item.id ? 'text-sky-500' : 'text-slate-300'} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 mr-80 p-12 md:p-20 lg:p-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 20 }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === 'abstract' && <Abstract />}
              {activeTab === 'intro' && <Introduction />}
              {activeTab === 'method' && <Methodology />}
              {activeTab === 'results' && <Results />}
              {activeTab === 'discussion' && <Discussion />}
              {activeTab === 'conclusion' && <Conclusion />}
            </motion.div>
          </AnimatePresence>
          <footer className="mt-32 pt-10 border-t border-slate-50 flex justify-between items-center text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
            <div className="flex items-center gap-6">
              <span>ISSN 2025-PM-VIBE</span>
              <span className="bg-slate-50 px-3 py-1 rounded-full">PAGE 0{navigation.findIndex(t => t.id === activeTab) + 1}</span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:text-sky-500 transition-colors"><Edit3 size={18} /></button>
              <button className="p-2 hover:text-sky-500 transition-colors"><ExternalLink size={18} /></button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;