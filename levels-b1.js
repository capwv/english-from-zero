/* Level B1 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b1-listen",
 "level": "B1",
 "skill": "listening",
 "nav": "استماع: مكالمة حجز",
 "title": "🎧 استماع: مكالمة تليفون لحجز معاد",
 "subtitle": "محادثة أطول فيها مشكلة وحل",
 "blocks": [
  { "type": "p", "text": "في المستوى المتوسط، المحادثات بقت أطول وفيها تفاصيل ومشاكل لازم تحلها. اسمع المكالمة دي بين واحد بيحاول يغير معاد دكتور. ركز على التفاصيل: الأيام والساعات." },
  { "type": "dialogue", "lines": [
   { "who": "Receptionist", "en": "Good afternoon, City Clinic. How can I help you?", "ar": "مساء الخير، عيادة سيتي. أقدر أساعدك إزاي؟" },
   { "who": "Tarek", "en": "Hello, this is Tarek Adel. I have an appointment with Dr. Samy on Thursday, but I can't come. I need to change it, please.", "ar": "أهلاً، أنا طارق عادل. عندي معاد مع دكتور سامي يوم الخميس بس مش هقدر أجي. محتاج أغيره لو سمحت." },
   { "who": "Receptionist", "en": "No problem, Mr. Adel. Let me check. Was your appointment at four o'clock?", "ar": "مفيش مشكلة يا مستر عادل. ثانية أشوف. كان معادك الساعة ٤؟" },
   { "who": "Tarek", "en": "Yes, that's right. Is there anything available on Friday or Saturday?", "ar": "أيوه صح. في مواعيد فاضية يوم الجمعة أو السبت؟" },
   { "who": "Receptionist", "en": "On Friday, Dr. Samy is fully booked, I'm afraid. But on Saturday, he has two free slots: eleven in the morning or half past six in the evening.", "ar": "يوم الجمعة الدكتور سامي كامل العدد للأسف. بس يوم السبت عنده معادين فاضيين: ١١ الصبح أو ٦:٣٠ بالليل." },
   { "who": "Tarek", "en": "Saturday at eleven works for me. Could you book that, please?", "ar": "السبت ١١ مناسبة ليا. ممكن تحجزهالي؟" },
   { "who": "Receptionist", "en": "Of course. So that's Saturday the fourteenth at eleven a.m. with Dr. Samy. We'll send you a confirmation message.", "ar": "طبعاً. يبقى يوم السبت ١٤ الساعة ١١ صباحاً مع الدكتور سامي. هنبعتلك رسالة تأكيد." },
   { "who": "Tarek", "en": "Perfect. Thank you so much for your help!", "ar": "ممتاز. شكراً جداً على مساعدتك!" }
  ]},
  { "type": "h", "text": "جمل المكالمات الرسمية" },
  { "type": "ex", "items": [
   ["How can I help you?", "أقدر أساعدك إزاي؟"],
   ["I need to change my appointment.", "محتاج أغير معادي."],
   ["Is there anything available?", "في مواعيد فاضية؟"],
   ["fully booked", "كامل العدد / محجوز بالكامل"],
   ["That works for me.", "ده مناسب ليا."],
   ["Could you book that, please?", "ممكن تحجزهالي لو سمحت؟"]
  ]},
  { "type": "note", "text": "لاحظ الأدب الزيادة في المكالمات الرسمية: Could you ... please؟ و I'm afraid ... (للأسف قبل الخبر الوحش). الكلمات دي هي الفرق بين كلام متعلم وكلام عادي." }
 ],
 "quiz": [
  { "q": "طارق كان معاده الأصلي إمتى؟", "options": [{ "text": "الخميس ٤" }, { "text": "الجمعة ١١" }, { "text": "السبت ٦:٣٠" }, { "text": "الخميس ١١" }], "answer": 0, "explain": "قال: I have an appointment with Dr. Samy on Thursday ... at four o'clock." },
  { "q": "ليه مقدرش يحجز يوم الجمعة؟", "options": [{ "text": "الدكتور في أجازة" }, { "text": "الدكتور كامل العدد" }, { "text": "العيادة مقفولة" }, { "text": "طارق مشغول" }], "answer": 1, "explain": "On Friday, Dr. Samy is fully booked." },
  { "q": "طارق حجز المعاد الجديد إمتى؟", "options": [{ "text": "السبت ٦:٣٠ مساءً" }, { "text": "الجمعة ١١ صباحاً" }, { "text": "السبت ١١ صباحاً" }, { "text": "الخميس ٤" }], "answer": 2, "explain": "Saturday at eleven works for me." },
  { "q": "I'm afraid في سياق المكالمة معناها:", "options": [{ "text": "أنا خايف" }, { "text": "للأسف (قبل خبر وحش بأدب)" }, { "text": "أنا متأكد" }, { "text": "أنا موافق" }], "answer": 1, "explain": "تعبير مهذب بيتقال قبل الرفض أو الخبر السيء." }
 ],
 "exercises": [
  { "task": "اسمع المكالمة مرتين واكتب المعاد النهائي في جملة كاملة من غير ما تبص على الترجمة.", "hint": "اليوم + التاريخ + الساعة + اسم الدكتور.", "code": "Tarek's new appointment is on Saturday the fourteenth at eleven a.m. with Dr. Samy.", "why": "استخراج التفاصيل الرقمية من السماع هو بالظبط اختبار الاستماع في الامتحانات الدولية." }
 ]
},
{
 "id": "b1-read",
 "level": "B1",
 "skill": "reading",
 "nav": "قراءة: مقال رأي",
 "title": "📖 قراءة: هل التكنولوجيا بتضيع وقتنا؟",
 "subtitle": "مقال رأي قصير فيه وجهتا نظر",
 "blocks": [
  { "type": "p", "text": "في المستوى المتوسط هتقرا نصوص فيها رأي ونقاش، مش بس حقائق. المقال ده بيعرض وش وضهر لسؤال واحد. راقب أدوات الربط اللي بتنظم الكلام (تحتها جدول)." },
  { "type": "p", "ltr": true, "text": "These days, most of us spend hours on our phones every day. Some people believe that technology is stealing our time, while others say it makes our lives easier. So, who is right?" },
  { "type": "p", "ltr": true, "text": "On the one hand, it is true that we waste a lot of time online. For example, many young people scroll through social media for three or four hours daily. As a result, they sleep late, study less, and sometimes feel lonely, even though they have hundreds of online friends." },
  { "type": "p", "ltr": true, "text": "On the other hand, technology can also save time and open doors. Students can learn any skill for free, families can talk to each other across countries, and small businesses can reach customers easily. In addition, apps for maps, banking, and shopping save us hours every week." },
  { "type": "p", "ltr": true, "text": "In my opinion, technology itself is not the problem; the way we use it is. If we choose to learn, work, and connect with purpose, our phones become tools. If we use them only to kill time, they become traps. The choice, in the end, is ours." },
  { "type": "h", "text": "أدوات الربط اللي شفتها" },
  { "type": "table", "head": ["الأداة", "وظيفتها"], "rows": [
   ["On the one hand / On the other hand", "بنعرض الوش والضهر"],
   ["For example", "مثال"],
   ["As a result", "نتيجة"],
   ["In addition", "إضافة معلومة"],
   ["In my opinion", "رأيي الشخصي"],
   ["even though", "رغم إن"]
  ]},
  { "type": "note", "text": "الفقرة الأخيرة فيها حتة بلاغية حلوة: tools و traps (أدوات ومصايد). الكلمتين متشابهتين في الصوت ومتعاكستين في المعنى، ودي حركة كاتب متمكن. خد بالك منها." }
 ],
 "quiz": [
  { "q": "المقال بيقول إن الشباب بيضيعوا وقتهم في إيه؟", "options": [{ "text": "الألعاب" }, { "text": "السوشيال ميديا" }, { "text": "التلفزيون" }, { "text": "التسوق" }], "answer": 1, "explain": "many young people scroll through social media for three or four hours daily." },
  { "q": "إيه من مزايا التكنولوجيا حسب المقال؟", "options": [{ "text": "تعلم أي مهارة ببلاش" }, { "text": "كلام العيلة عبر الدول" }, { "text": "توفير الوقت في الخرائط والبنوك" }, { "text": "كل اللي فوق" }], "answer": 3, "explain": "التلاتة مذكورين في فقرة On the other hand." },
  { "q": "رأي الكاتب في الآخر:", "options": [{ "text": "التكنولوجيا شر" }, { "text": "التكنولوجيا خير" }, { "text": "المشكلة في طريقة استخدامنا مش في التكنولوجيا نفسها" }, { "text": "لازم نبطل موبايلات" }], "answer": 2, "explain": "technology itself is not the problem; the way we use it is." },
  { "q": "even though معناها:", "options": [{ "text": "بسبب" }, { "text": "رغم إن" }, { "text": "عشان كده" }, { "text": "لو" }], "answer": 1, "explain": "even though they have hundreds of online friends = رغم إن عندهم مئات الأصحاب أونلاين." }
 ],
 "exercises": [
  { "task": "لخص المقال في ٣ جمل بإيدك: جملة للسؤال، وجملة لكل وش.", "hint": "استخدم أدوات الربط نفسها.", "code": "The article asks if technology is stealing our time. On the one hand, we waste hours on social media and feel lonely. On the other hand, it helps us learn, connect, and save time, so the real problem is how we use it.", "why": "التلخيص هو أقوى اختبار فهم: لو قدرت تختصر النص بكلماتك، إنت فاهمه فعلاً." }
 ]
},
{
 "id": "b1-write",
 "level": "B1",
 "skill": "writing",
 "nav": "كتابة: فقرة رأي",
 "title": "✍️ كتابة: اكتب فقرة رأي مقنعة",
 "subtitle": "تعبّر عن رأيك بشكل منظم ومقنع",
 "blocks": [
  { "type": "p", "text": "فقرة الرأي (Opinion Paragraph) هي أكتر نوع كتابة مطلوب في الامتحانات والشغل: Do you agree؟ What do you think؟ ليها هيكل ثابت من ٤ جمل: رأيك، سبب، مثال، ختام." },
  { "type": "h", "text": "هيكل فقرة الرأي" },
  { "type": "table", "head": ["الجملة", "الوظيفة", "بدايات جاهزة"], "rows": [
   ["١", "رأيك واضح", "In my opinion, ... / I believe that ..."],
   ["٢", "السبب", "This is because ... / The main reason is ..."],
   ["٣", "مثال أو دليل", "For example, ... / For instance, ..."],
   ["٤", "ختام بتأكيد الرأي", "That is why I think ... / For these reasons, ..."]
  ]},
  { "type": "h", "text": "نموذج جاهز" },
  { "type": "p", "ltr": true, "text": "In my opinion, learning English is essential for young people in Egypt. This is because most good jobs today require it. For example, my cousin could not get a job at a big company last year because his English was weak. That is why I think every student should take English seriously from an early age." },
  { "type": "h", "text": "رفع المستوى: رأي مع الوجه التاني" },
  { "type": "p", "text": "عشان تبقى فقرتك B1 بجد، اعترف بالرأي التاني ورد عليه: `Some people think that ..., but I believe ...` أو `Although some say ..., I still think ...` الاعتراف بالطرف التاني بيدي انطباع نضج فكري قوي." },
  { "type": "p", "ltr": true, "text": "Although some people say that English is hard to learn, I believe it is easier today than ever before because of free apps and videos." },
  { "type": "note", "text": "بلاش تبدأ كل جملة بـ I. نوّع البدايات: In my opinion، This is because، For example، That is why. التنويع في أول الجمل هو أول ما يلاحظه المصحح." }
 ],
 "quiz": [
  { "q": "الترتيب الصح لفقرة الرأي:", "options": [{ "text": "مثال ← رأي ← سبب ← ختام" }, { "text": "رأي ← سبب ← مثال ← ختام" }, { "text": "سبب ← رأي ← ختام ← مثال" }, { "text": "ختام ← رأي ← سبب ← مثال" }], "answer": 1, "explain": "رأي، سبب، مثال، ختام. ترتيب ثابت وفعال." },
  { "q": "أنهي بداية تعرض الرأي التاني بأدب؟", "options": [{ "text": "People are wrong, but ..." }, { "text": "Although some people say ..., I believe ..." }, { "text": "I don't care what they say ..." }, { "text": "Others stupid because ..." }], "answer": 1, "explain": "Although some people say ... is the polite B1 way to show both sides." },
  { "q": "For example وظيفتها:", "options": [{ "text": "تعرض النتيجة" }, { "text": "تجيب مثال يوضح الكلام" }, { "text": "تنهي الفقرة" }, { "text": "تعرض السؤال" }], "answer": 1, "explain": "للتوضيح بالمثال، وأختها For instance." }
 ],
 "exercises": [
  { "task": "اكتب فقرة رأي (٤-٦ جمل) عن السؤال ده: Do you think students should study online or in class؟", "hint": "رأي، سبب، مثال من حياتك، ختام.", "code": "In my opinion, studying in class is better for most students. This is because direct contact with teachers makes understanding easier. For example, when I studied grammar online, I had many questions and nobody answered them quickly. Although online study saves time, I still think the classroom gives us more. That is why I prefer learning in class.", "why": "لاحظ الاعتراف بالرأي التاني (Although...) قبل الختام، دي حركة B1 مميزة." },
  { "task": "خد فقرتك وحسّنها: غيّر بدايات الجمل عشان ميبدأش جملتين ورا بعض بنفس الكلمة.", "hint": "بدل I think بـ In my opinion أو I believe.", "code": "In my opinion, ... / This is because ... / For example, ... / That is why ...", "why": "التنويع في البدايات بيحول الكتابة من (صح) لـ (جميلة)." }
 ]
},
{
 "id": "b1-speak",
 "level": "B1",
 "skill": "speaking",
 "nav": "كلام: قول رأيك",
 "title": "🗣️ كلام: عبّر عن رأيك وناقش",
 "subtitle": "تتكلم دقيقة كاملة عن موضوع وتدافع عن رأيك",
 "blocks": [
  { "type": "p", "text": "في المستوى المتوسط، الكلام مش بس معلومات عنك، ده رأي ونقاش. التدريب: اسمع جمل الرأي ورددها، وبعدين استخدمها في مواضيع من حياتك." },
  { "type": "speak", "items": [
   { "en": "In my opinion, social media has more disadvantages than advantages.", "ar": "في رأيي، السوشيال ميديا عيوبها أكتر من مميزاتها." },
   { "en": "I believe that everyone should learn a second language.", "ar": "أنا مؤمن إن كل واحد لازم يتعلم لغة تانية." },
   { "en": "The main reason is that it changes how you think.", "ar": "السبب الأساسي إنها بتغير طريقة تفكيرك." },
   { "en": "For example, my English helped me find a better job.", "ar": "مثلاً، الإنجليزي بتاعي ساعدني ألاقي شغل أحسن." },
   { "en": "I see your point, but I don't completely agree.", "ar": "فاهم وجهة نظرك، بس مش موافق تماماً." },
   { "en": "That's true, but have you thought about the cost?", "ar": "ده صح، بس فكرت في التكلفة؟" },
   { "en": "To sum up, I think the benefits are greater.", "ar": "للخلاصة، أنا شايف إن الفوايد أكبر." }
  ]},
  { "type": "h", "text": "تمرين الدقيقة الواحدة" },
  { "type": "p", "text": "اختار موضوع من دول واتكلم عنه دقيقة كاملة من غير توقف: الموبايلات للأطفال، الشغل من البيت، تعلم لغة تانية. استخدم الهيكل: رأي، سبب، مثال، ختام. سجّل نفسك وعد الجمل الكاملة اللي قلتها." },
  { "type": "h", "text": "جمل الاختلاف بأدب" },
  { "type": "ex", "items": [
   ["I see your point, but ...", "فاهم وجهة نظرك، بس ..."],
   ["I don't completely agree because ...", "مش موافق تماماً عشان ..."],
   ["That's true, but on the other hand ...", "ده صح، بس من ناحية تانية ..."],
   ["I agree with you up to a point.", "موافقك لحد معين."]
  ]},
  { "type": "note", "text": "في النقاش، متقولش (إنت غلطان) أبداً. قول رأي الشخص فاهمه، وبعدين اعرض وجهة نظرك. دي مش بس لغة، دي ذكاء اجتماعي." }
 ],
 "quiz": [
  { "q": "أنهي طريقة أدب للاختلاف في الرأي؟", "options": [{ "text": "You are wrong." }, { "text": "I see your point, but I don't completely agree." }, { "text": "No no no!" }, { "text": "This is stupid." }], "answer": 1, "explain": "الاعتراف بوجهة نظر الشخص قبل الاختلاف هو أسلوب النقاش المحترم." },
  { "q": "To sum up معناها:", "options": [{ "text": "للبدء" }, { "text": "للخلاصة" }, { "text": "مثلاً" }, { "text": "بصراحة" }], "answer": 1, "explain": "بتتقال قبل الجملة الختامية اللي بتلخص رأيك." },
  { "q": "I agree with you up to a point معناها:", "options": [{ "text": "موافق تماماً" }, { "text": "رافض تماماً" }, { "text": "موافق لحد معين" }, { "text": "مش فاهمك" }], "answer": 2, "explain": "تعبير متوسط بين الموافقة والرفض، مفيد جداً في النقاشات." }
 ],
 "exercises": [
  { "task": "سجّل نفسك بتتكلم دقيقة عن موضوع: Should students wear uniforms؟ استخدم رأي وسبب ومثال ورد على الرأي التاني.", "hint": "Although some people say uniforms are boring, I believe ...", "code": "In my opinion, students should wear uniforms. The main reason is that uniforms make everyone equal. For example, in my school, nobody cared about expensive clothes. Although some people say uniforms are boring, I believe they save time and money. To sum up, uniforms make school life simpler.", "why": "لو قدرت تدافع عن رأي مش رأيك الحقيقي كمان، لغتك بقت أداة نقاش حقيقية." }
 ]
}
);
