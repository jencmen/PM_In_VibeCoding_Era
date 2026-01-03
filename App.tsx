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
  Handshake
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

const SectionPlaceholder = ({ title }: { title: string }) => (
  <div className="mt-6 p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 group hover:border-indigo-300 hover:text-indigo-400 transition-colors cursor-pointer">
    <Edit3 className="mb-2" size={24} />
    <span className="font-medium">לחץ כאן להוספת תוכן לפרק: {title}</span>
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
    A: {
      title: "תוצר A: דרישות בלבד",
      color: "bg-slate-50",
      content: (
        <div className="p-4 space-y-2 opacity-60">
          <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
          <div className="h-4 w-full bg-slate-200 rounded"></div>
          <div className="h-20 w-full bg-slate-100 border border-dashed border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-400">Placeholder for auto-generated UI</div>
        </div>
      )
    },
    B: {
      title: "תוצר B: PRD מלא + עיצוב",
      color: "bg-blue-50",
      content: (
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-6 w-1/3 bg-blue-300 rounded"></div>
            <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-16 bg-white border border-blue-200 rounded shadow-sm"></div>
            <div className="h-16 bg-white border border-blue-200 rounded shadow-sm"></div>
          </div>
          <div className="h-10 w-full bg-blue-600 rounded"></div>
        </div>
      )
    },
    C: {
      title: "תוצר C: Vibe Only",
      color: "bg-purple-50",
      content: (
        <div className="p-4 flex flex-col items-center justify-center h-full space-y-4">
          <Sparkles className="text-purple-500 animate-pulse" size={32} />
          <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
            <MousePointer2 className="text-white" size={16} />
          </div>
          <div className="h-4 w-1/2 bg-purple-200 rounded-full"></div>
        </div>
      )
    },
    D: {
      title: "תוצר D: איטרטיבי (הגרסה הסופית)",
      color: "bg-indigo-50",
      content: (
        <div className="p-4 space-y-3">
          <div className="flex gap-2">
            <div className="h-3 w-8 bg-indigo-200 rounded"></div>
            <div className="h-3 w-8 bg-indigo-200 rounded"></div>
            <div className="h-3 w-8 bg-indigo-400 rounded"></div>
          </div>
          <div className="h-24 bg-white border border-indigo-200 rounded-xl p-2 flex gap-2">
             <div className="w-1/4 h-full bg-slate-50 rounded"></div>
             <div className="flex-1 space-y-2">
                <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-12 w-full bg-indigo-50 rounded border border-indigo-100"></div>
             </div>
          </div>
          <div className="h-8 w-full bg-indigo-600 rounded-lg shadow-md flex items-center justify-center text-[10px] text-white font-bold">Launch MVP</div>
        </div>
      )
    }
  };

  const config = configs[method];

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xs font-bold text-slate-500 mr-2">{config.title}</div>
      <div className={`aspect-video rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-zoom-in ${config.color}`}>
        <div className="h-4 bg-white border-b border-slate-100 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
        </div>
        <div className="h-full relative">
          {config.content}
          <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors flex items-center justify-center">
             <Search className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

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
        "מחקר זה בוחן את השפעת כלי ה-AI Generative על תפקיד מנהל המוצר. הטיעון המרכזי הוא כי Vibe Coding אינו רק כלי פיתוח, אלא טרנספורמציה של ה-PM מ'מתווך דרישות' ל'מייצר מוצר עובד'. המחקר מנתח את גבולות היכולת של 'צוות של איש אחד' בשלבי ה-0 ל-1 לעומת שלבי ה-Scale."
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
  <div className="space-y-8">
    <AcademicCard title="2. מתודולוגיית המחקר: הניסוי המבוקר" icon={Settings}>
      <p className="text-lg text-slate-600 mb-8">
        לבחינת השפעת איכות האינפוט על התוצר, ביצענו ניסוי השוואתי על אותה מערכת (MVP פנימי) ב-4 מתודולוגיות שונות:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { 
            id: 'A', 
            title: 'The Documenter', 
            subtitle: 'דרישות בלבד (A)', 
            desc: 'הגדרת ה"מה" ללא ה"איך". המודל ממלא את הפערים בעצמו.',
            color: 'bg-slate-100 text-slate-800'
          },
          { 
            id: 'B', 
            title: 'The Architect', 
            subtitle: 'PRD מלא + מסכים (B)', 
            desc: 'הגדרה מדויקת הכוללת פתרון טכני ועיצוב מסכים.',
            color: 'bg-blue-50 text-blue-800'
          },
          { 
            id: 'C', 
            title: 'The Vibe Coder', 
            subtitle: 'פרומפט כללי (C)', 
            desc: 'תיאור חופשי של הרעיון (Vibe Only) ללא מסמכים.',
            color: 'bg-purple-50 text-purple-800'
          },
          { 
            id: 'D', 
            title: 'The Iterative', 
            subtitle: 'טעינה הדרגתית (D)', 
            desc: 'בנייית הליבה תחילה ושיפור איטרטיבי (Winner).',
            winner: true,
            color: 'bg-indigo-600 text-white shadow-xl shadow-indigo-100'
          },
        ].map(item => (
          <div key={item.id} className={`p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:scale-[1.02] ${item.winner ? 'ring-4 ring-indigo-200' : ''}`}>
            {item.winner && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow-sm">
                <Award size={12} /> WINNER
              </div>
            )}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-black text-xl ${item.color}`}>
              {item.id}
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
            <h5 className="text-sm font-bold text-indigo-600 mb-3">{item.subtitle}</h5>
            <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </AcademicCard>

    <AcademicCard title="2.1 בחירת כלי: מפת ה-Vibe Coding" icon={Wrench}>
      <p className="text-lg text-slate-600">
        מיפוי האקו-סיסטם הנוכחי של כלי ה-AI לפיתוח. המפה מחלקת את הכלים לפי ציר המומחיות הטכנית מול עוצמת ויכולת הכלי (Power).
      </p>
      <ToolQuadrant />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <h5 className="font-bold text-indigo-600 mb-1">Less Technical / High Ability</h5>
          <p className="text-xs text-slate-500">כלים המאפשרים ל-PM לבנות מערכות מורכבות ללא כתיבת קוד ישירה (למשל AI Studio, Lovable, Base 44).</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <h5 className="font-bold text-slate-700 mb-1">More Technical / High Power</h5>
          <p className="text-xs text-slate-500">סביבות עבודה למפתחים המועצמות ב-AI, דורשות הבנה עמוקה במבנה קוד (למשל Cursor, Replit, Claude).</p>
        </div>
      </div>
    </AcademicCard>
  </div>
);

const Results = () => (
  <div className="space-y-8">
    <AcademicCard title="3. ממצאים וניתוח נתונים" icon={BarChart}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="h-[400px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={researchResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="method" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 'bold'}} />
                <YAxis axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', direction: 'rtl' }}
                />
                <Legend verticalAlign="top" height={36}/>
                <Bar dataKey="stability" name="מדד יציבות" fill="#6366f1" radius={[6, 6, 0, 0]} />
                <Bar dataKey="speed" name="מהירות פיתוח" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col justify-center">
           <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
              <TrendingUp size={20} /> תובנה מרכזית:
            </h4>
            <p className="text-indigo-800 leading-relaxed">
              נמצא קשר ישיר בין רמת הפירוט ה"ארכיטקטונית" (שיטה B ו-D) לבין יציבות הקוד. בניגוד למיתוס, ה-Vibe לבדו (שיטה C) אינו מספיק לייצור מוצר אמין לארגון גדול.
            </p>
          </div>
        </div>
      </div>
    </AcademicCard>

    <AcademicCard title="3.1 השוואה ויזואלית: תוצרי המודלים" icon={Layout}>
      <p className="text-lg text-slate-600 mb-8">
        בחינת ה"אסתטיקה" והפונקציונליות של התוצרים בהתאם למתודולוגיה שנבחרה:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ScreenshotMock method="A" />
        <ScreenshotMock method="B" />
        <ScreenshotMock method="C" />
        <ScreenshotMock method="D" />
      </div>
      <div className="mt-8 flex items-center gap-2 text-slate-400 text-sm italic">
        <Info size={14} />
        <span>התמונות לעיל הן הדמיות של מבנה המערכת שנוצר בכל אחת מהשיטות (Mockups)</span>
      </div>
    </AcademicCard>
  </div>
);

const Discussion = () => (
  <div className="space-y-8">
    <AcademicCard title="4. דיון: תובנות מהשטח וחוויה אישית" icon={Lightbulb}>
      <div className="prose prose-indigo max-w-none text-slate-600 text-lg space-y-12">
        
        {/* WOW Effect Section */}
        <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 relative overflow-hidden">
          <Sparkles className="absolute -top-4 -left-4 text-indigo-100" size={120} />
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-md">
                <Sparkles size={20} />
              </div>
              אפקט ה-WOW והתועלת השולית הפוחתת
            </h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              החוויה האישית שלי בבנייה ב-Vibe Coding מתחילה תמיד באפקט "WOW" מסחרר באיטרציה הראשונה. תוך דקות, רעיון מופשט הופך למשהו שאפשר להקליק עליו. 
              אבל, ככל שצוללים לפרטים הקטנים, ל-Edge Cases ולפיצ'רים המורכבים - התועלת השולית של ה-Vibe פוחתת. האינטראקציה הופכת מ"קסם" לעבודת נמלים של דיוק, שם נדרשת המתודולוגיה האיטרטיבית (שיטה D) כדי לא ללכת לאיבוד.
            </p>
          </div>
        </section>

        {/* Practical Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <Handshake className="text-indigo-500 mb-4" size={32} />
            <h5 className="font-black text-slate-800 mb-2">מסירת המערכת (Handoff)</h5>
            <p className="text-sm text-slate-500">
              האתגר הוא לא רק לבנות, אלא "להעביר את המפתח". איך מבטיחים שהלקוח או צוות הפיתוח יוכלו לתחזק קוד שנוצר ע"י AI? הפתרון הוא תיעוד ה-Prompts כחלק מה-Source Code.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <ArrowRightLeft className="text-blue-500 mb-4" size={32} />
            <h5 className="font-black text-slate-800 mb-2">מעבר בין סביבות</h5>
            <p className="text-sm text-slate-500">
              קל לבנות ב-Localhost, קשה להעביר ל-Production ממשלתי. האתגר הוא התאמת התוצר לתשתיות קיימות, ניהול Secrets והגדרת CI/CD שתומך בתוצרי AI.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="text-rose-500 mb-4" size={32} />
            <h5 className="font-black text-slate-800 mb-2">אבטחת מידע (InfoSec)</h5>
            <p className="text-sm text-slate-500">
              הפיל שבחדר. קוד שנוצר במהירות עלול להכיל חולשות. נדרש תהליך "ניקוי" (Sanitization) ובדיקות חדירות לפני שכל תוצר Vibe עולה לאוויר במערכת קריטית.
            </p>
          </div>

        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
          <h4 className="text-white font-black mb-4 flex items-center gap-2 italic">
            <Zap className="text-yellow-400" /> הפאנץ' ליין המחקרי:
          </h4>
          <p className="text-xl font-light leading-relaxed">
            ה-PM יכול להיות "צוות של אדם אחד" בשלב ההקמה (0 ל-1), אך הוא חייב "צוות של מומחים" בשלב ההפעלה והסקייל (1 ל-Infinity) כדי לצלוח את אתגרי האבטחה והתחזוקה.
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
  <div className="space-y-8">
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
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
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
    <div className="min-h-screen bg-slate-50 flex flex-row">
      {/* Sidebar Navigation - Fixed Right for RTL layout */}
      <aside className="w-80 bg-white border-l border-slate-200 flex flex-col fixed h-full z-10 shadow-sm right-0 overflow-y-auto custom-scrollbar">
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
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-right font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="p-4 rounded-xl text-xs text-slate-400 font-medium leading-relaxed">
            סטטוס טיוטה: <br/><span className="text-indigo-500 font-bold">מחכה לנתונים נוספים</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 mr-80 p-8 md:p-12 lg:p-20">
        <div className="max-w-5xl mx-auto">
          {/* Header Info */}
          <div className="flex justify-between items-start mb-16 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <div className="flex gap-4 md:gap-8">
              <span>ISSN: 2025-PRODUCT-REVOLUTION</span>
              <span className="hidden md:inline">Volume 1, Issue 1</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-500 cursor-pointer hover:underline">
              <Search size={14} />
              <span>Cite this paper</span>
            </div>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
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
          <footer className="mt-20 pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-xs font-bold">
            <div className="flex items-center gap-4">
              <span className="font-mono bg-slate-100 px-2 py-1 rounded">Page 0{navigation.findIndex(t => t.id === activeTab) + 1}</span>
              <span className="hidden md:inline italic opacity-50">Draft v1.5 // March 2025</span>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" title="ערוך"><Edit3 size={16} /></button>
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" title="שתף"><ExternalLink size={16} /></button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;