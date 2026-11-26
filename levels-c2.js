/* Level C2 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c2-listen",
 "level": "C2",
 "skill": "listening",
 "nav": "استماع: حوار بالعامية",
 "title": "🎧 استماع: حوار طبيعي بالعامية الإنجليزية",
 "subtitle": "اصطلاحات وتلميحات وسرعة الشارع",
 "blocks": [
  { "type": "p", "text": "أعلى مستويات الاستماع: حوار طبيعي بين صاحبين مليان اصطلاحات (idioms) وتلميحات ثقافية. اسمع وحاول تمسك المعنى الحقيقي مش المعنى الحرفي." },
  { "type": "dialogue", "lines": [
   { "who": "Adam", "en": "Long time no see! You've been really off the grid lately. Everything alright?", "ar": "زمن ما شفناك! إنت مختفي تماماً الفترة دي. كله تمام؟" },
   { "who": "John", "en": "Yeah, I've just been swamped with work. My new boss is a bit of a slave driver, to be honest.", "ar": "أيوه، مغرقان في الشغل بس. المدير الجديد بيستعبطنا شوية بصراحة." },
   { "who": "Adam", "en": "Ouch. Hang in there, man. Hey, are you still up for the trip next month, or should I count you out?", "ar": "يخربتك. اصبر، الموضوع هيعدي. بالمناسبة، لسه جاي الرحلة الشهر الجاي ولا أعتبرك مش موجود؟" },
   { "who": "John", "en": "No no, I'm in! I've been looking forward to it for ages. Just need to sort out a couple of things at work first.", "ar": "لأ لأ، أنا جاي! مستنيها بقالي فترة طويلة. بس محتاج أظبط كام حاجة في الشغل الأول." },
   { "who": "Adam", "en": "Fair enough. Just give me a heads-up by Friday so I can book the tickets before prices go through the roof.", "ar": "منطقي. بس بلغني قبل الجمعة عشان أحجز التذاكر قبل ما الأسعار تطير." },
   { "who": "John", "en": "Deal. Oh, by the way, Sarah told me you finally got that promotion. Way to go, man! Drinks are on you this time.", "ar": "اتفقنا. آه بالمناسبة، سارة قالتلي إنك أخيراً أخدت الترقية. عاشت الأيام! المشاريب عليك المرة دي." },
   { "who": "Adam", "en": "Ha! Word travels fast. Alright, fair enough. See you Friday then.", "ar": "ها! الأخبار بتنتشر بسرعة. طيب ماشي. نشوفك يوم الجمعة." }
  ]},
  { "type": "h", "text": "الاصطلاحات اللي سمعتها" },
  { "type": "ex", "items": [
   ["off the grid", "مختفي / بعيد عن التواصل"],
   ["swamped with work", "مغرقان في الشغل"],
   ["a slave driver", "مدير بيشغل ناسه بقسوة"],
   ["Hang in there", "اصبر واستحمل"],
   ["count you out", "أعتبرك مش مشارك"],
   ["I'm in!", "أنا معاك / موافق!"],
   ["give me a heads-up", "بلغني مقدماً"],
   ["go through the roof", "تطير (الأسعار تعلي جداً)"],
   ["Way to go!", "عاشت / برافو!"],
   ["Drinks are on you", "المشاريب على حسابك"],
   ["Word travels fast", "الأخبار بتنتشر بسرعة"]
  ]},
  { "type": "note", "text": "الاصطلاحات متتترجمش حرفياً أبداً. الطريقة الصح: اسمعها في سياق، افهم الموقف، واحفظها كقطعة واحدة زي ما هي." }
 ],
 "quiz": [
  { "q": "جون مختفي ليه الفترة دي؟", "options": [{ "text": "مسافر" }, { "text": "مغرقان في الشغل" }, { "text": "عيان" }, { "text": "زعلان من آدم" }], "answer": 1, "explain": "I've just been swamped with work." },
  { "q": "Are you still up for the trip؟ معناها:", "options": [{ "text": "صحيت للرحلة؟" }, { "text": "لسه ناوي تيجي الرحلة؟" }, { "text": "الرحلة فوق؟" }, { "text": "حجزت الرحلة؟" }], "answer": 1, "explain": "be up for something = تكون ناوي/متحمس لحاجة." },
  { "q": "آدم محتاج رد جون قبل إمتى وليه؟", "options": [{ "text": "قبل الجمعة عشان الأسعار متطيرش" }, { "text": "قبل الخميس عشان الفندق" }, { "text": "الشهر الجاي عشان التأشيرة" }, { "text": "فوراً عشان الترتيبات" }], "answer": 0, "explain": "give me a heads-up by Friday so I can book the tickets before prices go through the roof." },
  { "q": "Drinks are on you معناها:", "options": [{ "text": "المشاريب وقعت عليك" }, { "text": "هتدفع إنت للمشاريب" }, { "text": "ممنوع تشرب" }, { "text": "المشروبات عليك" }], "answer": 1, "explain": "اصطلاح (على حسابك): حاجة on you يعني إنت اللي بتدفع." }
 ],
 "exercises": [
  { "task": "اختار ٥ اصطلاحات من الحوار واستخدمهم في جمل من حياتك.", "hint": "متترجمش؛ احكي موقف حقيقي.", "code": "I was swamped with exams last week.\nTell your brother to hang in there; the results come out soon.\nAre you still up for the match on Friday?\nGive me a heads-up before you visit.\nFuel prices went through the roof this year.", "why": "الاصطلاح اللي تستخدمه في جملة من حياتك بيتحفظ، واللي تكتبه في قايمة بينسى." }
 ]
},
{
 "id": "c2-read",
 "level": "C2",
 "skill": "reading",
 "nav": "قراءة: نص أدبي",
 "title": "📖 قراءة: نص أدبي بلغة مجازية",
 "subtitle": "مجاز وإيقاع وتلميحات، مش معلومات",
 "blocks": [
  { "type": "p", "text": "أعلى مستويات القراءة: نص لغته مجازية، المعنى فيه بين السطور. اقرأ ببطء، واستمتع بالصور اللغوية قبل ما تحللها." },
  { "type": "p", "ltr": true, "text": "The old man closed his shop the way one closes the last page of a beloved book: slowly, with reluctance, and with the quiet knowledge that something small and precious was ending." },
  { "type": "p", "ltr": true, "text": "For forty years, his little bookstore had stood on the corner like a stubborn lighthouse, its dusty windows glowing warmly against the rushing grey of the street. Generations had wandered in as children and returned as parents, their fingers tracing the same wooden shelves, their lives measured not in years but in the books they had carried home." },
  { "type": "p", "ltr": true, "text": "But the city, as cities do, had decided to move on. Rents climbed like ivy up a wall, screens grew brighter, and the tide of readers slowly pulled back from the shore. The old man did not fight it. Some battles, he knew, are not lost for lack of courage but for lack of arms, and there is no shame in bowing to a storm you cannot stop." },
  { "type": "p", "ltr": true, "text": "On the last evening, he locked the door, slipped the key into his pocket, and walked home through the neon rain, carrying one final book under his arm: the first one he had ever sold." },
  { "type": "h", "text": "الصور اللغوية في النص" },
  { "type": "table", "head": ["الصورة", "المعنى"], "rows": [
   ["closed his shop the way one closes the last page", "قفل المحل بإحساس وداع كتاب محبوب"],
   ["a stubborn lighthouse", "منارة عنيدة: الكتبة كانت ثابتة وسط التغيير"],
   ["Rents climbed like ivy", "الإيجارات طلعت زي اللبلاب المتسلق"],
   ["the tide of readers pulled back from the shore", "موجة القراء تراجعت"],
   ["bowing to a storm", "الانحناء للعاصفة: الاستسلام الحكيم"],
   ["neon rain", "مطر تحت أنوار النيون: جو المدينة الحديث"]
  ]},
  { "type": "note", "text": "لاحظ إن النص مفيهوش كلمة صعبة واحدة تقريباً، بس التراكيب والصور هي اللي متقدمة. دي حقيقة مهمة عن C2: المشكلة مش في القاموس، في الأسلوب." }
 ],
 "quiz": [
  { "q": "التشبيه الأساسي في الفقرة الأولى:", "options": [{ "text": "قفل المحل زي قفل آخر صفحة في كتاب محبوب" }, { "text": "المحل زي البيت" }, { "text": "الكتاب زي الباب" }, { "text": "الراجل زي الطفل" }], "answer": 0, "explain": "closed his shop the way one closes the last page of a beloved book." },
  { "q": "ليه وصف المكتبة بـ (منارة عنيدة)؟", "options": [{ "text": "عشان جنب البحر" }, { "text": "عشان كانت ثابتة ومضيئة وسط شارع رمادي مسرع" }, { "text": "عشان عالية" }, { "text": "عشان قديمة" }], "answer": 1, "explain": "stood ... like a stubborn lighthouse, its dusty windows glowing warmly against the rushing grey of the street." },
  { "q": "موقف الراجل من إقفال المكتبة:", "options": [{ "text": "حارب لحد الآخر" }, { "text": "قبل بحكمة إن في معارك متتكسبش" }, { "text": "باع لحد تاني" }, { "text": "كان مبسوط" }], "answer": 1, "explain": "there is no shame in bowing to a storm you cannot stop." },
  { "q": "إيه أول كتاب باعه في حياته؟", "options": [{ "text": "مش مذكور" }, { "text": "أخده معاه في آخر مساء" }, { "text": "رجعه للمكتبة" }, { "text": "ضاع" }], "answer": 1, "explain": "carrying one final book under his arm: the first one he had ever sold." }
 ],
 "exercises": [
  { "task": "اكتب تشبيه من عندك عن حاجة بتودعها (مدرسة، بيت قديم، مرحلة من حياتك) على غرار الجملة الأولى.", "hint": "X did Y the way one does Z: slowly, with ...", "code": "He left his old school the way one leaves a childhood home: slowly, with heavy steps, and with the feeling that a door had closed forever behind him.", "why": "لما تقدر تنتج صورة لغوية بنفسك، يبقى انتقلت من فاهم اللغة لساكنها." }
 ]
},
{
 "id": "c2-write",
 "level": "C2",
 "skill": "writing",
 "nav": "كتابة: الأسلوب والريجستر",
 "title": "✍️ كتابة: التحكم في الأسلوب والريجستر",
 "subtitle": "نفس الفكرة بثلاث لغات: صديق، شغل، أكاديمية",
 "blocks": [
  { "type": "p", "text": "علامة الكاتب المتمكن إنه يقول نفس الفكرة بأساليب مختلفة حسب الجمهور. المهارة دي اسمها Register shifting وهي قلب مستوى C2." },
  { "type": "h", "text": "نفس الفكرة بثلاثة ريجسترات" },
  { "type": "table", "head": ["الريجستر", "الجملة"], "rows": [
   ["لصاحبك", "Dude, I totally forgot about the meeting. My bad!"],
   ["لمديرك", "I sincerely apologize for missing the meeting; it was an oversight on my part."],
   ["أكاديمي", "The failure to attend the scheduled meeting constituted a significant professional oversight."]
  ]},
  { "type": "h", "text": "أدوات التحكم في الريجستر" },
  { "type": "list", "items": [
   "<b>الاختيار اللفظي:</b> forget VS overlook VS fail to recall",
   "<b>الاختصارات:</b> can't (عادي) VS cannot (رسمي)",
   "<b>الجمل المبنية للمجهول:</b> Mistakes were made (رسمي جداً) VS I messed up (عادي)",
   "<b>التحويل للاسمية:</b> we decided VS the decision was made",
   "<b>الطول والتركيب:</b> جمل قصيرة مباشرة (عادي) VS جمل مركبة بروابط (رسمي)"
  ]},
  { "type": "h", "text": "تمرين التحويل" },
  { "type": "p", "ltr": true, "text": "Casual: Hey team, the project is late and the client is angry. We need to fix this ASAP." },
  { "type": "p", "ltr": true, "text": "Formal: Dear team, I am writing to inform you that the project is currently behind schedule, which has caused some dissatisfaction on the client's side. I would be grateful if we could address this matter as a priority." },
  { "type": "note", "text": "لاحظ: ASAP (عامية اختصار) بقت as a priority، و the client is angry بقت some dissatisfaction. الرسمي بيهدّي الانفعال ويرفع الوضوح." }
 ],
 "quiz": [
  { "q": "أنهي جملة رسمية؟", "options": [{ "text": "We gotta talk about the budget." }, { "text": "I would like to discuss the budget with you." }, { "text": "Budget. Now." }, { "text": "Lemme tell you about the budget." }], "answer": 1, "explain": "would like to discuss هي الصيغة المهذبة الرسمية." },
  { "q": "The decision was made دي حركة ريجستر اسمها:", "options": [{ "text": "اختصار" }, { "text": "مبني للمجهول وتحويل اسمي للرسمي" }, { "text": "غلط لغوي" }, { "text": "عامية" }], "answer": 1, "explain": "تحويل الفعل لاسم + مبني للمجهول = رفع مستوى الرسمية." },
  { "q": "لما تكتب لجهة رسمية، الأفضل:", "options": [{ "text": "جمل قصيرة فيها اختصارات" }, { "text": "جمل كاملة من غير اختصارات وبنبرة هادية" }, { "text": "إيموجي للتوضيح" }, { "text": "سوالف طويلة" }], "answer": 1, "explain": "الرسمي: no contractions, calm tone, full forms." }
 ],
 "exercises": [
  { "task": "اكتب نفس الرسالة دي بريجسترين: لصاحبك، ولمحاضرك الجامعي: (مش هقدر أسلم الواجب في معاده).", "hint": "للصديق: متستعجلش، والمحاضر: extension request مهذب.", "code": "To a friend: Hey, I'm so sorry, but I can't submit the assignment on time. Everything went wrong this week!\n\nTo a professor: Dear Dr. Samir, I am writing to respectfully request a short extension on the assignment, as unexpected circumstances have made it difficult to submit on time. I would be grateful for two additional days. Thank you for your understanding.\nBest regards, [اسمك]", "why": "القدرة على تحويل الرسالة بين الريجسترين هي مهارة الشغل الحقيقي بالإنجليزي." },
  { "task": "خد إيميل كتبته قبل كده وارفع ريجستره درجة: بدّل الاختصارات، واستخدم صيغ الأدب.", "hint": "can't → cannot، want → would like، ask about → inquire about.", "code": "قبل: Hi, I can't come to the interview on Tuesday. Can we do it another day?\nبعد: Dear Ms. Rana, I am writing to inform you that, unfortunately, I am unable to attend the interview scheduled for Tuesday. I would be grateful if we could arrange an alternative date at your earliest convenience. Thank you for your understanding.", "why": "تحرير كلامك القديم هو أسرع طريق لتطوير أسلوبك." }
 ]
},
{
 "id": "c2-speak",
 "level": "C2",
 "skill": "speaking",
 "nav": "كلام: الارتجال",
 "title": "🗣️ كلام: فن الارتجال",
 "subtitle": "تتكلم عن أي موضوع في الحال، بثقة وبدون تلعثم",
 "blocks": [
  { "type": "p", "text": "قمة الكلام: الارتجال (Impromptu Speaking). حد يسألك سؤال مفاجئ وترد بمنظومة متماسكة في الحال. السر مش في سرعة التفكير، السر في امتلاك هياكل جاهزة تركب عليها أفكارك." },
  { "type": "speak", "items": [
   { "en": "That's an interesting question. Let me think for a second.", "ar": "سؤال مثير للاهتمام. ثانية أفكر." },
   { "en": "Well, I suppose there are two ways to look at it.", "ar": "حسناً، أظن فيه طريقتين للنظر للموضوع." },
   { "en": "Off the top of my head, I'd say the main factor is cost.", "ar": "أول حاجة تيجي في دماغي، أقول إن العامل الأساسي هو التكلفة." },
   { "en": "To be honest, I've never thought about it that way.", "ar": "بصراحة، عمري ما فكرت فيها بالطريقة دي." },
   { "en": "If I had to choose, I'd go with the second option.", "ar": "لو لازم أختار، هروح مع الاختيار التاني." },
   { "en": "Long story short, it depends on the situation.", "ar": "باختصار شديد، الموضوع بيعتمد على الموقف." }
  ]},
  { "type": "h", "text": "هيكل الرد الارتجالي PREP" },
  { "type": "table", "head": ["الحرف", "المعنى", "الجملة"], "rows": [
   ["P - Point", "رأيك", "I believe that ..."],
   ["R - Reason", "السبب", "The reason is that ..."],
   ["E - Example", "مثال", "For instance, ..."],
   ["P - Point", "رجوع للرأي", "So that's why I think ..."]
  ]},
  { "type": "h", "text": "كسب الوقت بذكاء" },
  { "type": "ex", "items": [
   ["That's an interesting question.", "سؤال مثير للاهتمام."],
   ["Let me think about that for a moment.", "ثانية أفكر فيها."],
   ["Well, it depends on how you look at it.", "حسناً، بيعتمد على زاوية النظر."],
   ["That's a tough one, to be honest.", "سؤال صعب بصراحة."]
  ]},
  { "type": "note", "text": "كسب ثانيتين بجملة ذكية أفضل بمراحل من (اهمممم) الصامتة. المتحدثين المحترفين كلهم بيعملوها، بس بجمل محفوظة فمتحسش بيها." }
 ],
 "quiz": [
  { "q": "هيكل PREP بيقف على:", "options": [{ "text": "تحضير العرض" }, { "text": "Point, Reason, Example, Point" }, { "text": "أسئلة المقابلات" }, { "text": "قواعد النطق" }], "answer": 1, "explain": "نقطة، سبب، مثال، نقطة. هيكل الرد الارتجالي الأشهر عالمياً." },
  { "q": "Off the top of my head معناها:", "options": [{ "text": "فوق راسي" }, { "text": "أول حاجة تيجي في دماغي من غير تفكير عميق" }, { "text": "نسيت" }, { "text": "مش عارف" }], "answer": 1, "explain": "اصطلاح يعني الإجابة الفورية من الذاكرة." },
  { "q": "أحسن رد لو محتاج وقت تفكر:", "options": [{ "text": "اهممممم" }, { "text": "That's an interesting question. Let me think for a second." }, { "text": "I don't know. Next." }, { "text": "الصمت" }], "answer": 1, "explain": "جمل كسب الوقت المحفوظة بتديك مساحة تفكير من غير ما تفقد الثقة." }
 ],
 "exercises": [
  { "task": "اكتب على ٥ ورقات مواضيع عشوائية (الذكاء الاصطناعي، الطبخ، السفر، التعليم، الرياضة). اسحب ورقة وسجّل نفسك بتتكلم دقيقة بـ PREP فوراً.", "hint": "متجهزش إجابات؛ الفكرة هي التدريب على الفورية.", "code": "Topic: cooking\nThat's an interesting one. I believe cooking is a life skill everyone should learn. The reason is that it gives you control over your health and your budget. For instance, when I learned to make three simple dishes, I stopped ordering food every night. So that's why I think cooking is worth the effort.", "why": "١٠ جولات من التمرين ده هتغير طريقة كلامك في أي مقابلة أو نقاش مفاجئ." }
 ]
}
);
