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
  Wrench,
  Layout,
  Layers,
  Sparkles,
  MousePointer2,
  Repeat,
  Server,
  ShieldCheck,
  ArrowRightLeft,
  Handshake,
  Activity,
  Terminal
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
  { name: 'Base 44', x: 25, y: 80, color: 'bg-orange-500' },
  { name: 'Google AI Studio', x: 20, y: 70, color: 'bg-slate-900' },
  { name: 'emergent', x: 45, y: 85, color: 'bg-slate-800' },
  { name: 'Mocha', x: 35, y: 75, color: 'bg-slate-900' },
  { name: 'Dyad', x: 38, y: 70, color: 'bg-purple-600' },
  { name: 'Lovable', x: 48, y: 75, color: 'bg-rose-500' },
  { name: 'replit', x: 55, y: 85, color: 'bg-red-600' },
  { name: 'CURSOR', x: 75, y: 88, color: 'bg-slate-900' },
  { name: 'Claude', x: 90, y: 90, color: 'bg-orange-600' },
  { name: 'Codex', x: 88, y: 85, color: 'bg-slate-900' },
  { name: 'bolt.new', x: 55, y: 70, color: 'bg-slate-900' },
  { name: 'Rork', x: 65, y: 75, color: 'bg-slate-900' },
  { name: 'new.website', x: 15, y: 30, color: 'bg-slate-100 text-slate-900' },
  { name: 'Figma Make', x: 25, y: 20, color: 'bg-slate-100 text-slate-900' },
  { name: 'UX PILOT', x: 22, y: 10, color: 'bg-indigo-600' },
];

// --- Sub-components ---

const ToolQuadrant = () => (
  <div className="relative w-full aspect-square md:aspect-video bg-white border border-slate-200 rounded-3xl overflow-hidden mt-8 shadow-inner">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-px h-full bg-slate-400 opacity-20"></div>
      <div className="h-px w-full bg-slate-400 opacity-20"></div>
    </div>
    <div className="absolute top-4 left-1/2 -translate-x-1/2 font-black text-slate-300 uppercase text-[10px] tracking-widest">High Ability / Power</div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-black text-slate-300 uppercase text-[10px] tracking-widest">Lower Ability / Power</div>
    <div className="absolute top-1/2 left-4 -translate-y-1/2 font-black text-slate-300 uppercase text-[10px] tracking-widest -rotate-90 origin-left">Less technical</div>
    <div className="absolute top-1/2 right-4 translate-y-1/2 font-black text-slate-300 uppercase text-[10px] tracking-widest rotate-90 origin-right">More technical</div>

    {toolsLandscape.map((tool, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.02 }}
        className={`absolute px-2 py-1 rounded-md text-[9px] md:text-xs font-black shadow-sm flex items-center gap-1 cursor-default hover:scale-110 transition-transform ${tool.color.includes('text') ? tool.color : tool.color + ' text-white'}`}
        style={{ left: `${tool.x}%`, bottom: `${tool.y}%`, transform: 'translate(-50%, 50%)' }}
      >
        {tool.name}
      </motion.div>
    ))}
  </div>
);

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

const ScreenshotMock = ({ method }: { method: 'A' | 'B' | 'C' | 'D' }) => {
  const configs = {
    A: { title: "תוצר A", color: "bg-slate-50", content: <div className="p-4 space-y-2 opacity-60"><div className="h-4 w-3/4 bg-slate-300 rounded"></div><div className="h-4 w-full bg-slate-200 rounded"></div></div> },
    B: { title: "תוצר B", color: "bg-blue-50", content: <div className="p-4 space-y-4"><div className="h-6 w-1/3 bg-blue-300 rounded"></div><div className="h-10 w-full bg-blue-600 rounded"></div></div> },
    C: { title: "תוצר C", color: "bg-purple-50", content: <div className="p-4 flex flex-col items-center justify-center h-full"><Sparkles className="text-purple-500 animate-pulse" size={32} /></div> },
    D: { title: "תוצר D", color: "bg-indigo-50", content: <div className="p-4 space-y-3"><div className="h-24 bg-white border border-indigo-200 rounded-xl p-2 flex gap-2"><div className="w-1/4 h-full bg-slate-50 rounded"></div><div className="flex-1 space-y-2"><div className="h-3 w-3/4 bg-slate-200 rounded"></div><div className="h-12 w-full bg-indigo-50 rounded"></div></div></div></div> }
  };
  const config = configs[method];
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xs font-bold text-slate-500 mr-2">{config.title}</div>
      <div className={`aspect-video rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-zoom-in ${config.color}`}>
        <div className="h-4 bg-white border-b border-slate-100 flex items-center px-2 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div></div>
        <div className="h-full relative">{config.content}</div>
      </div>
    </div>
  );
};

// --- Sections ---

const Abstract = () => (
  <div className="max-w-3xl">
    <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">שינוי פרדיגמת ה-Product Management בעידן ה-Vibe Coding</h1>
    <div className="bg-indigo-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden mb-12">
      <Quote className="absolute top-6 right-6 opacity-20" size={64} />
      <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-widest text-indigo-300">תקציר</h2>
      <p className="text-2xl font-light leading-relaxed italic">"ממתווך דרישות לבונה מוצר עובד. בחינת הגבולות בין Vibe ל-Engineering."</p>
    </div>
  </div>
);

const Introduction = () => (
  <AcademicCard title="1. מבוא" icon={BookOpen}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="prose prose-slate text-lg text-slate-600">
        <p>מנהל המוצר כבר אינו רק מתרגם (Translator) – הוא הופך ל-Executor הראשון בשרשרת.</p>
      </div>
      <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center">
        <Users size={48} className="text-slate-300 mb-4" />
        <span className="text-center font-bold text-slate-500 italic">"שבירת חומת ה-Handoff"</span>
      </div>
    </div>
  </AcademicCard>
);

const Methodology = () => (
  <div className="space-y-8">
    <AcademicCard title="2. מתודולוגיה" icon={Settings}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {['A', 'B', 'C', 'D'].map(id => (
          <div key={id} className={`p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden ${id === 'D' ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
             <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-black ${id === 'D' ? 'bg-white text-indigo-600' : 'bg-slate-100'}`}>{id}</div>
             <div className="font-bold mb-1">Method {id}</div>
             <p className={`text-xs ${id === 'D' ? 'text-indigo-100' : 'text-slate-500'}`}>ניתוח השפעת איכות הקלט על איכות התוצר הסופי.</p>
          </div>
        ))}
      </div>
    </AcademicCard>
    <AcademicCard title="2.1 מפת הכלים" icon={Wrench}>
      <ToolQuadrant />
    </AcademicCard>
  </div>
);

const Results = () => (
  <div className="space-y-8">
    <AcademicCard title="3. ממצאים" icon={BarChart}>
      <div className="h-[400px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={researchResults}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="method" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <RechartsTooltip contentStyle={{ borderRadius: '1rem', border: 'none', direction: 'rtl' }} />
            <Bar dataKey="stability" name="יציבות" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="speed" name="מהירות" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </AcademicCard>
    <AcademicCard title="3.1 השוואה ויזואלית" icon={Layout}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ScreenshotMock method="A" />
        <ScreenshotMock method="B" />
        <ScreenshotMock method="C" />
        <ScreenshotMock method="D" />
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <div className="space-y-8">
    <AcademicCard title="4. דיון: תובנות מהשטח וחוויה אישית" icon={Lightbulb}>
      <div className="prose prose-indigo max-w-none text-slate-600 text-lg space-y-12">
        
        {/* WOW Effect Section */}
        <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100/50 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform"></div>
          <Sparkles className="absolute -top-4 -left-4 text-indigo-200 opacity-30" size={140} />
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
              <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-lg">
                <Sparkles size={24} />
              </div>
              אפקט ה-WOW והתועלת השולית הפוחתת
            </h4>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-slate-600 leading-relaxed font-medium">
                  בפעם הראשונה שחוויתי Vibe Coding, זה הרגיש כמו קסם טהור. רעיון שרבטתי על הנייר הפך לאפליקציה עובדת תוך פחות מ-5 דקות. זהו רגע ה-"0 ל-1" המושלם, שבו ה-WOW נמצא בשיאו.
                </p>
                <div className="mt-4 p-4 bg-white rounded-2xl border-r-4 border-indigo-600 shadow-sm italic">
                  "האיטרציה הראשונה היא הניצחון הגדול, אבל היא גם המלכודת הכי גדולה."
                </div>
                <p className="text-slate-600 leading-relaxed font-medium mt-4">
                  ככל שמתקדמים, <span className="text-rose-600 font-bold">התועלת השולית פוחתת.</span> תיקון באג קטן או הוספת לוגיקה עסקית מורכבת דורשים לעיתים 10 איטרציות של פרומפטים מתישים. ה-Vibe מתפוגג, והצורך בהנדסה קלאסית צף על פני השטח.
                </p>
              </div>
              <div className="w-full md:w-64 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm shrink-0 flex flex-col items-center">
                <Activity className="text-rose-500 mb-2" />
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">גרף התועלת השולית</div>
                <div className="w-full h-32 flex items-end gap-2 px-2">
                  <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 1 }} className="flex-1 bg-indigo-600 rounded-t-lg relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-indigo-600">WOW</span>
                  </motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ duration: 1, delay: 0.2 }} className="flex-1 bg-indigo-400 rounded-t-lg"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '35%' }} transition={{ duration: 1, delay: 0.4 }} className="flex-1 bg-indigo-200 rounded-t-lg"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: '15%' }} transition={{ duration: 1, delay: 0.6 }} className="flex-1 bg-slate-200 rounded-t-lg"></motion.div>
                </div>
                <div className="mt-4 text-[10px] font-bold text-slate-400">איטרציות פיתוח AI →</div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Excellence: The Handoff, Environment, and Security Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-indigo-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform relative z-10">
              <Handshake className="text-indigo-600" size={32} />
            </div>
            <h5 className="font-black text-xl text-slate-800 mb-4 relative z-10">מסירת המערכת (Handoff)</h5>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              מסירה ללקוח בעידן ה-AI היא לא רק קוד, אלא <span className="font-bold">הקונטקסט של הפרומפטים.</span> כדי שהלקוח יוכל לתחזק את המערכת, עלינו להעביר "Prompt History" מסודר. ללא השרשרת שהולידה את הקוד, כל שינוי עתידי עלול לגרום לקריסה של ה-Vibe המקורי.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
              <ArrowRightLeft className="text-blue-600" size={32} />
            </div>
            <h5 className="font-black text-xl text-slate-800 mb-4 relative z-10">מעבר בין סביבות</h5>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              מעבר מ-Vibe במחשב האישי לסביבת Production ממשלתית מאובטחת הוא "צוואר הבקבוק" החדש. קוד AI נוטה להיות מותאם לסביבות ענן גמישות, והתאמתו ל-Firewalls, Proxy, ומערכות Legacy דורשת מנהל מוצר שמבין בארכיטקטורת רשת, לא רק ב-UI.
            </p>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-rose-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-rose-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:shake transition-transform relative z-10">
              <ShieldCheck className="text-rose-600" size={32} />
            </div>
            <h5 className="font-black text-xl text-slate-800 mb-4 relative z-10">אבטחת מידע (InfoSec)</h5>
            <p className="text-sm text-slate-600 leading-relaxed relative z-10">
              קוד מהיר הוא קוד מסוכן. מודלי AI לעיתים מייצרים פרצות אבטחה (Injections, Hardcoded keys) מבלי משים. ה-PM חייב להנחות את המודל לכתוב <span className="italic">"Secure by Design"</span> ולבצע סריקות אבטחה אוטומטיות כחלק מה-Vibe Loop.
            </p>
          </div>

        </div>

        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-3 rounded-2xl">
              <Terminal className="text-indigo-400" size={28} />
            </div>
            <h4 className="text-white font-black text-2xl italic tracking-tight">The "Hybrid PM" Blueprint</h4>
          </div>
          <p className="text-2xl font-light leading-relaxed mb-8">
            מנהל המוצר החדש הוא היבריד: הוא יודע <span className="text-indigo-400 font-bold">לחלום ב-Vibe</span> אבל יודע <span className="text-rose-400 font-bold">לבקר ב-Engineering</span>. הצלחה נמדדת ביכולת לגשר על הפער בין האיטרציה הראשונה המדהימה למציאות הארגונית הקשוחה.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-indigo-300">#HandoffProtocol</div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-blue-300">#EnvMigration</div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-rose-300">#AI_Security</div>
          </div>
        </div>
      </div>
    </AcademicCard>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
        <h4 className="font-black text-slate-800 mb-4 flex items-center gap-2">
          <ShieldAlert className="text-rose-500" /> מגבלות המודל (Constraints)
        </h4>
        <ul className="space-y-3 text-slate-500 text-sm">
          <li className="flex gap-2"><span>•</span> אבטחת מידע ופרטיות במערכות ליבה ממשלתיות.</li>
          <li className="flex gap-2"><span>•</span> חוב טכני (AI Debt) - קוד שקשה לתחזוקה ידנית.</li>
          <li className="flex gap-2"><span>•</span> אינטגרציות למערכות Legacy סגורות.</li>
        </ul>
      </div>
      <div className="p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400">
         <Edit3 size={24} className="mb-2" />
         <span className="font-bold">דיון על אתיקה ו-Bias ב-AI</span>
      </div>
    </div>
  </div>
);

const Conclusion = () => (
  <AcademicCard title="5. סיכום והמלצות" icon={CheckCircle2}>
    <div className="space-y-6 text-xl text-slate-700 font-light">
      <p>המלצת המחקר: אל תחליפו את הצוות, אלא <strong>הקדימו</strong> אותו.</p>
      <div className="p-8 border-r-8 border-indigo-500 bg-indigo-50 italic rounded-2xl shadow-inner">
        "השתמשו ב-Vibe Coding כדי להביא גרסה עובדת ומבוססת פידבק, ותנו לצוות הפיתוח להפוך אותה למוצר ממשלתי אמין ומאובטח."
      </div>
      <div className="mt-12 flex flex-wrap gap-4">
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group">
          <FileText size={20} /> הורד את המאמר המלא (PDF)
        </button>
        <button className="border-2 border-slate-200 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
          ביבליוגרפיה
        </button>
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
    <div className="min-h-screen bg-slate-50 flex flex-row">
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col fixed h-full z-10 shadow-sm right-0 overflow-y-auto custom-scrollbar">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-indigo-600" size={24} fill="currentColor" />
            <h1 className="text-xl font-black text-slate-900 italic tracking-tighter">Vibe Coding Journal</h1>
          </div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Innovation in PM Frameworks</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-right font-bold transition-all ${activeTab === item.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 mr-80 p-8 md:p-12 lg:p-20">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
              {activeTab === 'abstract' && <Abstract />}
              {activeTab === 'intro' && <Introduction />}
              {activeTab === 'method' && <Methodology />}
              {activeTab === 'results' && <Results />}
              {activeTab === 'discussion' && <Discussion />}
              {activeTab === 'conclusion' && <Conclusion />}
            </motion.div>
          </AnimatePresence>
          <footer className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span>ISSN: 2025-PRODUCT</span>
              <span className="font-mono bg-slate-100 px-2 py-1 rounded">P. 0{navigation.findIndex(t => t.id === activeTab) + 1}</span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-full"><Edit3 size={16} /></button>
              <button className="p-2 hover:bg-slate-100 rounded-full"><ExternalLink size={16} /></button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;