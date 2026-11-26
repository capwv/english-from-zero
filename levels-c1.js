/* Level C1 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c1-listen",
 "level": "C1",
 "skill": "listening",
 "nav": "استماع: مقتطف محاضرة",
 "title": "🎧 استماع: محاضرة قصيرة عن الذكاء الاصطناعي",
 "subtitle": "خطاب منظم بلغة أكاديمية وسرعة طبيعية",
 "blocks": [
  { "type": "p", "text": "المستوى المتقدم يعني استماع لخطاب طويل منظم، مش حوار. المحاضرة دي مونولوج واحد فيه حجج وتحفظات لغوية (hedging). ركز على علامات التنظيم: First, Moreover, Nevertheless." },
  { "type": "dialogue", "lines": [
   { "who": "Speaker", "en": "Good morning. Today I'd like to address a question that concerns us all: will artificial intelligence actually take our jobs?", "ar": "صباح الخير. النهارده حابب أتناول سؤال بيهمنا كلنا: هل الذكاء الاصطناعي فعلاً هياخد شغلنا؟" },
   { "who": "Speaker", "en": "Let me begin with a historical observation. Every major technology, from the printing press to the internet, was expected to destroy employment. What actually happened, in most cases, is that jobs changed rather than disappeared.", "ar": "خليني أبدأ بملاحظة تاريخية. كل تكنولوجيا كبيرة، من المطبعة للإنترنت، كان متوقع لها تدمر الشغل. اللي حصل فعلاً في معظم الحالات إن الوظايف اتغيرت مش اختفت." },
   { "who": "Speaker", "en": "Moreover, the current evidence suggests that AI is far better at tasks than at whole jobs. It can draft an email, but it cannot manage a frustrated client. It can summarize a report, but it cannot decide what the report should argue.", "ar": "بالإضافة لكده، الدليل الحالي بيقترح إن الذكاء الاصطناعي أحسن بكتير في المهام عنه في الوظايف الكاملة. يقدر يكتب مسودة إيميل، بس ميقدرش يدير عميل متضايق. يقدر يلخص تقرير، بس ميقدرش يقرر التقرير المفروض يقول إيه." },
   { "who": "Speaker", "en": "Nevertheless, it would be naive to claim that no one will be affected. Repetitive roles are genuinely at risk, and the transition may be painful for those who refuse to adapt.", "ar": "ومع ذلك، هيبقى سذاجة إننا نقول إن محدش هيتأثر. الأدوار المتكررة في خطر حقيقي، والانتقال ممكن يبقى مؤلم للي بيرفض يتأقلم." },
   { "who": "Speaker", "en": "So my conclusion is a cautious one: AI will probably not replace you, but a person who uses AI skillfully very likely will. The wisest response, then, is not fear, but fluency.", "ar": "فخلاصتي متحفظة: الذكاء الاصطناعي على الأرجح مش هياخد مكانك، بس شخص بيستخدمه بمهارة على الأرجح هياخده. وأحكم رد مش الخوف، لكن الطلاقة." },
   { "who": "Speaker", "en": "Thank you. I'll be happy to take your questions.", "ar": "شكراً. وهبقى سعيد أاخد أسئلتكم." }
  ]},
  { "type": "h", "text": "لغة الخطاب الأكاديمي" },
  { "type": "ex", "items": [
   ["I'd like to address a question", "حابب أتناول سؤال"],
   ["a historical observation", "ملاحظة تاريخية"],
   ["the evidence suggests that", "الدليل بيقترح إن"],
   ["Nevertheless, it would be naive to claim", "ومع ذلك، هيبقى سذاجة إننا نزعم"],
   ["a cautious conclusion", "خلاصة متحفظة"],
   ["at risk", "في خطر"]
  ]},
  { "type": "note", "text": "لاحظ الـ hedging: suggests، probably، in most cases. المتحدث المتقدم مبيعمّمش؛ كل ادعاء معاه درجة ثقته. دي علامة اللغة الأكاديمية الناضجة." }
 ],
 "quiz": [
  { "q": "حجة المتحدث من التاريخ:", "options": [{ "text": "التكنولوجيا دمرت الشغل دايماً" }, { "text": "الوظايف بتتغير أكتر ما بتختفي" }, { "text": "المطبعة خلقت البطالة" }, { "text": "الإنترنت أنهى الشغل" }], "answer": 1, "explain": "jobs changed rather than disappeared." },
  { "q": "إيه اللي الذكاء الاصطناعي ميقدرش عليه حسب المحاضرة؟", "options": [{ "text": "يكتب مسودة إيميل" }, { "text": "يلخص تقرير" }, { "text": "يدير عميل متضايق ويقرر حجة التقرير" }, { "text": "يترجم نص" }], "answer": 2, "explain": "It can draft an email, but it cannot manage a frustrated client." },
  { "q": "الخلاصة النهائية:", "options": [{ "text": "الذكاء الاصطناعي هياخد كل الوظايف" }, { "text": "محدش هيتأثر" }, { "text": "اللي بيستخدمه بمهارة هو اللي هياخد مكانك" }, { "text": "لازم نقاومه" }], "answer": 2, "explain": "a person who uses AI skillfully very likely will [replace you]." },
  { "q": "كلمة hedging في سياق الخطاب معناها:", "options": [{ "text": "المبالغة" }, { "text": "التحفظ اللغوي وتخفيف التعميم" }, { "text": "النكتة" }, { "text": "الترجمة" }], "answer": 1, "explain": "كلمات زي suggests و probably بتخلي الادعاء دقيق مش مطلق." }
 ],
 "exercises": [
  { "task": "اسمع المحاضرة واكتب الهيكل بتاعها في ٤ نقاط: السؤال، الملاحظة التاريخية، الدليل، التحفظ، الخلاصة.", "hint": "كل سطر من المتحدث هو تقريباً نقطة.", "code": "1) Question: will AI take our jobs?\n2) History: jobs changed rather than disappeared.\n3) Evidence: AI handles tasks, not whole jobs.\n4) Caution: repetitive roles are at risk.\n5) Conclusion: fluency beats fear.", "why": "تتبع هيكل الخطاب هو مهارة الاستماع الأكاديمي، وهي نفسها اللي هتحتاجها في محاضرات الجامعة بالإنجليزي." }
 ]
},
{
 "id": "c1-read",
 "level": "C1",
 "skill": "reading",
 "nav": "قراءة: نص أكاديمي",
 "title": "📖 قراءة: هل المدن الكبيرة بتسرق شبابنا؟",
 "subtitle": "نص تحليلي طويل بمفردات مجردة",
 "blocks": [
  { "type": "p", "text": "نص المستوى المتقدم فيه أفكار مجردة ومفردات أقل يومية. اقرأ مرة للفكرة، ومرة تانية بقلم: حدد جملة الأطروحة (thesis) والحجج الداعمة." },
  { "type": "p", "ltr": true, "text": "Every year, thousands of graduates leave Egypt's smaller towns for Cairo, drawn by the promise of opportunity. What they find, however, is often a trade rather than a gift: higher salaries exchanged for longer commutes, smaller rooms, and a quieter kind of loneliness." },
  { "type": "p", "ltr": true, "text": "The economic argument for migration is undeniable. Major firms, funding, and specialized jobs cluster in the capital, so ambition practically requires relocation. Yet this concentration carries hidden costs that rarely appear in salary calculations. The graduate who doubles her income may spend half of it on rent and transport, while losing the family network that once provided free childcare, daily meals, and emotional support." },
  { "type": "p", "ltr": true, "text": "Perhaps the deeper question is not economic but cultural. When a generation's most energetic members all move to one city, the towns they leave behind grow older and poorer, and the capital grows richer but more exhausted. Some economists now argue that remote work could reverse this flow, allowing young professionals to earn metropolitan salaries without abandoning their communities." },
  { "type": "p", "ltr": true, "text": "Whether technology can truly rebalance the map remains to be seen. What is certain is that the decision to move is no longer as simple as following the money; it is a choice about what kind of life one considers worth living." },
  { "type": "h", "text": "مفردات النص" },
  { "type": "table", "head": ["الكلمة", "معناها"], "rows": [
   ["drawn by", "منجذبين بسبب"], ["trade", "مقايضة"], ["commute", "مشوار يومي للشغل"], ["undeniable", "لا يمكن إنكاره"], ["cluster", "يتجمع"], ["relocation", "الانتقال للسكن"], ["reverse the flow", "يعكس التيار"], ["remains to be seen", "لسه هنشوف / غير محسوم"]
  ]},
  { "type": "note", "text": "جملة (a trade rather than a gift) تركيب B2+ مفيد جداً: X rather than Y بتعني (س وليس ص). استخدمها في كتابتك: a job rather than a career." }
 ],
 "quiz": [
  { "q": "المقايضة اللي بيتكلم عنها الكاتب:", "options": [{ "text": "مرتب أعلى مقابل تكاليف ووحدة أعمق" }, { "text": "شغل أسهل مقابل ساعات أطول" }, { "text": "مدينة كبيرة مقابل بحر" }, { "text": "شقة أصغر مقابل أكل أرخص" }], "answer": 0, "explain": "higher salaries exchanged for longer commutes, smaller rooms, and a quieter kind of loneliness." },
  { "q": "التكلفة الخفية حسب الفقرة التانية:", "options": [{ "text": "الضرايب" }, { "text": "فقدان شبكة الدعم العائلية" }, { "text": "صعوبة اللغة" }, { "text": "البعد عن البحر" }], "answer": 1, "explain": "losing the family network that once provided free childcare, daily meals, and emotional support." },
  { "q": "الحل المحتمل اللي بيعرضه بعض الاقتصاديين:", "options": [{ "text": "بناء مدن جديدة" }, { "text": "الشغل عن بعد ممكن يعكس الهجرة" }, { "text": "منع الهجرة" }, { "text": "رفع المرتبات في القاهرة" }], "answer": 1, "explain": "remote work could reverse this flow." },
  { "q": "remains to be seen معناها:", "options": [{ "text": "مؤكد" }, { "text": "لسه غير محسوم" }, { "text": "مستحيل" }, { "text": "ظاهر للعيان" }], "answer": 1, "explain": "تعبير أكاديمي يعني النتيجة لسه مش معروفة." }
 ],
 "exercises": [
  { "task": "اكتب جملة الأطروحة (thesis) بتاعت النص في سطر واحد بكلماتك، وجملتين للحجج الداعمة.", "hint": "الأطروحة عادة في نهاية المقدمة أو بوضوح في آخر النص.", "code": "Thesis: moving to the capital is a trade, not a simple win.\nSupport 1: hidden costs (rent, transport, lost family support) eat the salary gain.\nSupport 2: the migration drains small towns and exhausts the capital, and remote work might reverse it.", "why": "لو استخرجت الأطروحة والدعم بإيدك، إنت قرأت النص زي ما بيقراه الأكاديميين." }
 ]
},
{
 "id": "c1-write",
 "level": "C1",
 "skill": "writing",
 "nav": "كتابة: الفقرة الأكاديمية",
 "title": "✍️ كتابة: اكتب فقرة أكاديمية محكمة",
 "subtitle": "حجة، دليل، تحفظ، وربط سلس",
 "blocks": [
  { "type": "p", "text": "الكتابة الأكاديمية في المستوى C1 ليها ٣ علامات: جملة موضوع واضحة أول الفقرة، أدوات ربط متنوعة، وتحفظ لغوي (hedging) بدل التعميم المطلق." },
  { "type": "h", "text": "ترسانة الربط المتقدمة" },
  { "type": "table", "head": ["الوظيفة", "الأدوات"], "rows": [
   ["إضافة", "Moreover, / Furthermore, / In addition,"],
   ["مقارنة بالعكس", "However, / Nevertheless, / By contrast,"],
   ["سبب", "This is largely because ... / Owing to ..."],
   ["نتيجة", "As a result, / Consequently, / Therefore,"],
   ["تحفظ", "It seems that ... / tends to ... / In most cases,"],
   ["خلاصة", "Ultimately, / On balance,"]
  ]},
  { "type": "h", "text": "قبل وبعد" },
  { "type": "p", "ltr": true, "text": "Weak: Technology is bad for students. They waste time and their marks go down." },
  { "type": "p", "ltr": true, "text": "Strong: In most cases, uncontrolled screen time tends to harm academic performance, largely because it replaces sleep and focused study. Consequently, students who limit their phone use often achieve better results without studying longer hours." },
  { "type": "note", "text": "الفرق مش في طول الجمل، في الدقة: In most cases و tends to بدل التعميم، و largely because بدل because العادية، و Consequently للنتيجة. الجملة القوية محددة ومتحفظة." },
  { "type": "h", "text": "قالب الفقرة الواحدة" },
  { "type": "list", "items": [
   "<b>جملة الموضوع:</b> فكرة الفقرة في جملة واحدة.",
   "<b>التوسيع:</b> شرح أو سبب.",
   "<b>الدليل:</b> مثال أو رقم أو اقتباس.",
   "<b>الربط للي بعدها:</b> جملة تلمح للفقرة الجاية."
  ]}
 ],
 "quiz": [
  { "q": "علامة من علامات الكتابة الأكاديمية الضعيفة:", "options": [{ "text": "التعميم المطلق زي Technology is bad" }, { "text": "أدوات الربط" }, { "text": "التحفظ اللغوي" }, { "text": "جملة الموضوع" }], "answer": 0, "explain": "التعميم المطلق بيضعف الحجة؛ الأكاديمي بيحدد ويتحفظ." },
  { "q": "أنهي أداة ربط تعرض نتيجة؟", "options": [{ "text": "Moreover" }, { "text": "Nevertheless" }, { "text": "Consequently" }, { "text": "By contrast" }], "answer": 2, "explain": "Consequently = وبالتالي، بتعرض النتيجة." },
  { "q": "جملة الموضوع مكانها:", "options": [{ "text": "نص الفقرة" }, { "text": "آخر الفقرة" }, { "text": "أول الفقرة" }, { "text": "مش لازمة" }], "answer": 2, "explain": "الفقرة الأكاديمية بتبدأ بجملة موضوع تعلن فكرتها." }
 ],
 "exercises": [
  { "task": "اكتب فقرة أكاديمية واحدة (٥-٧ جمل) عن: Is social media harmful to relationships؟ بالهيكل الكامل.", "hint": "جملة موضوع، توسيع، مثال، تحفظ، خلاصة.", "code": "In most cases, social media tends to weaken deep relationships rather than strengthen them, largely because quick reactions replace real conversation. A clear example is the family dinner where everyone is physically present yet mentally elsewhere. Moreover, online friendship often measures itself in likes rather than in trust. Nevertheless, it would be unfair to ignore how these platforms keep distant families connected. On balance, the harm or the benefit depends less on the platform and more on the habits of its user.", "why": "لاحظ التحفظات (In most cases, tends to, On balance) وإزاي بتحمي الحجة من الانهيار قدام أول اعتراض." },
  { "task": "خد فقرة من كتابتك القديمة وطوّرها: ضيف جملة موضوع، وأداتي ربط، وتحفظ واحد.", "hint": "التعديل أهم من الكتابة الأولى.", "code": "قبل: Online learning is good. It is flexible and cheap.\nبعد: Online learning offers a practical solution for students who cannot attend in person, largely because it is flexible and affordable. In most cases, however, it tends to demand stronger self-discipline than traditional classes. Consequently, its success depends heavily on the learner's habits.", "why": "مهارة التعديل هي اللي بتفرق بين كاتب كويس وكاتب ممتاز." }
 ]
},
{
 "id": "c1-speak",
 "level": "C1",
 "skill": "speaking",
 "nav": "كلام: نقاش أكاديمي",
 "title": "🗣️ كلام: لغة النقاش الأكاديمي",
 "subtitle": "تحفظ، اتفاق جزئي، وأسئلة توضيحية",
 "blocks": [
  { "type": "p", "text": "الكلام المتقدم مش جمل أطول، ده مواقف أدق: تعرف تقول رأيك بدرجة ثقة مناسبة، وتتفق جزئياً، وتطلب توضيح من غير ما تبان ضعيف. الجمل دي هي أدوات المحترفين." },
  { "type": "speak", "items": [
   { "en": "It seems to me that remote work tends to increase productivity.", "ar": "يبدو لي إن الشغل عن بعد بيميل لزيادة الإنتاجية." },
   { "en": "I would argue that the evidence points in the other direction.", "ar": "أنا أزعم إن الدليل بيشير للاتجاه التاني." },
   { "en": "I agree with you to a certain extent, but we should also consider the cost.", "ar": "موافقك لحد ما، بس لازم ناخد التكلفة في الاعتبار كمان." },
   { "en": "Could you clarify what you mean by 'flexible'?", "ar": "ممكن توضح قصدك إيه بكلمة flexible؟" },
   { "en": "That's a fair point, although the reality is more complicated.", "ar": "نقطة عادلة، وإن كانت الحقيقة أعقد." },
   { "en": "On balance, I would say the benefits outweigh the risks.", "ar": "في الميزان، أنا أقول إن الفوايد بتغلب المخاطر." }
  ]},
  { "type": "h", "text": "مستويات الثقة في الكلام" },
  { "type": "table", "head": ["الدرجة", "الجملة"], "rows": [
   ["متأكد ١٠٠٪", "It is clear that ... / There is no doubt that ..."],
   ["شبه متأكد", "It seems very likely that ..."],
   ["رأي متحفظ", "It seems to me that ... / I would argue that ..."],
   ["احتمال", "It is possible that ... / This may suggest ..."]
  ]},
  { "type": "note", "text": "لو عندك نقاش مع نفسك في المرايا ١٥ دقيقة يومياً بموضوع مختلف، هتلاحظ بعد شهرين إن الجمل دي بتطلع لوحدها. دي طريقة الدبلوماسيين في التدريب." }
 ],
 "quiz": [
  { "q": "ليه نستخدم I would argue that بدل I think؟", "options": [{ "text": "عشان أطول" }, { "text": "عشان بتدل على حجة مدروسة بثقة مهذبة" }, { "text": "عشان أسهل" }, { "text": "مفيش فرق" }], "answer": 1, "explain": "صيغة رسمية دقيقة بتقول (عندي حجة) مش بس (بفكر)." },
  { "q": "I agree to a certain extent معناها:", "options": [{ "text": "موافق تماماً" }, { "text": "رافض" }, { "text": "موافق جزئياً" }, { "text": "مش فاهم" }], "answer": 2, "explain": "اتفاق جزئي: موافقك في جزء ومختلف في جزء." },
  { "q": "لما مش فاهم كلمة في نقاش رسمي:", "options": [{ "text": "تسكت" }, { "text": "Could you clarify what you mean by ...؟" }, { "text": "I don't understand anything." }, { "text": "تضحك وتعدي" }], "answer": 1, "explain": "طلب التوضيح بصيغة مهذبة علامة قوة مش ضعف." }
 ],
 "exercises": [
  { "task": "سجّل نقاش مع نفسك في دقيقتين: اعرض رأيين متعارضين عن (Should university be free؟) باستخدام ٤ جمل من الدرس على الأقل.", "hint": "جهة، وجهة تانية، اتفاق جزئي، خلاصة متوازنة.", "code": "It seems to me that free university education opens doors for poor students. However, I would argue that the cost to the state is enormous. I agree with supporters to a certain extent, but we should also consider quality. On balance, I would say low fees with strong scholarships are wiser than completely free education.", "why": "القدرة على عرض الوجهين بإنصاف هي أعلى درجات الطلاقة الفكرية في أي لغة." }
 ]
}
);
