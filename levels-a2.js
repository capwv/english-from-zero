/* Level A2 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-listen",
 "level": "A2",
 "skill": "listening",
 "nav": "استماع: في المطار",
 "title": "🎧 استماع: محادثة في المطار",
 "subtitle": "اسمع مسافر بيخلص إجراءات السفر",
 "blocks": [
  { "type": "p", "text": "المطار من أكتر الأماكن اللي هتحتاج فيها الإنجليزي فعلاً. اسمع المحادثة الأول من غير قراءة، وبعدين اسمع واقرأ. لاحظ الأزمنة: مضارع بسيط للحقائق، ومستقبل للرحلة." },
  { "type": "dialogue", "lines": [
   { "who": "Agent", "en": "Good morning! Can I see your passport and ticket, please?", "ar": "صباح الخير! ممكن الباسبور والتذكرة من فضلك؟" },
   { "who": "Mona", "en": "Good morning. Sure, here you are.", "ar": "صباح الخير. اتفضل." },
   { "who": "Agent", "en": "Thank you. Are you checking any bags today?", "ar": "شكراً. عندك شنط هتسلمها النهارده؟" },
   { "who": "Mona", "en": "Yes, just this one. I have a small bag with me on the plane too.", "ar": "أيوه، الشنطة دي بس. ومعايا شنطة صغيرة على الطيارة كمان." },
   { "who": "Agent", "en": "That's fine. Your flight to Dubai leaves at ten thirty from gate seven.", "ar": "تمام. رحلتك لدبي هتقوم الساعة عشرة ونص من بوابة ٧." },
   { "who": "Mona", "en": "Great. What time does boarding start?", "ar": "ممتاز. الدخول للطيارة بيبدأ الساعة كام؟" },
   { "who": "Agent", "en": "Boarding starts at nine fifty. Here is your boarding pass. Have a nice flight!", "ar": "الدخول بيبدأ ٩:٥٠. اتفضلي كارت الصعود. رحلة سعيدة!" },
   { "who": "Mona", "en": "Thank you very much!", "ar": "شكراً جداً!" }
  ]},
  { "type": "h", "text": "جمل المطار اللي لازم تتحفظ" },
  { "type": "ex", "items": [
   ["Can I see your passport, please?", "ممكن الباسبور من فضلك؟"],
   ["Here you are.", "اتفضل."],
   ["Are you checking any bags?", "عندك شنط للتسليم؟"],
   ["What time does boarding start?", "الدخول للطيارة بيبدأ إمتى؟"],
   ["boarding pass", "كارت الصعود للطيارة"],
   ["gate", "البوابة"]
  ]},
  { "type": "note", "text": "لاحظ: مواعيد الرحلات والقطارات بنستخدم معاها المضارع البسيط مش المستقبل: The flight leaves at 10:30. عشان ده جدول ثابت." }
 ],
 "quiz": [
  { "q": "الرحلة رايحة فين؟", "options": [{ "text": "لندن" }, { "text": "دبي" }, { "text": "الرياض" }, { "text": "إسطنبول" }], "answer": 1, "explain": "Your flight to Dubai leaves at ten thirty." },
  { "q": "الرحلة بتقوم من بوابة كام؟", "options": [{ "text": "٥" }, { "text": "٧" }, { "text": "٩" }, { "text": "١٠" }], "answer": 1, "explain": "from gate seven." },
  { "q": "الدخول للطيارة بيبدأ الساعة كام؟", "options": [{ "text": "٩:٥٠" }, { "text": "١٠:٣٠" }, { "text": "٩:٠٠" }, { "text": "١٠:٠٠" }], "answer": 0, "explain": "Boarding starts at nine fifty." },
  { "q": "ليه قالوا The flight leaves مش will leave؟", "options": [{ "text": "غلط لغوي" }, { "text": "عشان المواعيد الثابتة بتاخد مضارع بسيط" }, { "text": "عشان الرحلة قريبة" }, { "text": "الاتنين صح دايماً" }], "answer": 1, "explain": "الجداول الثابتة (طيران، قطارات، مواعيد رسمية) بتاخد مضارع بسيط." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة واقفلها، وبعدين اكتب الأسئلة التلاتة اللي موظف المطار سألهم.", "hint": "باسبور، شنط، و...؟", "code": "Can I see your passport and ticket, please?\nAre you checking any bags today?\n(والجمل الخبرية عن البوابة والدخول)", "why": "أسئلة المطار ثابتة تقريباً في كل دول العالم؛ اللي يسمعها كتير مش هيتفاجئ بيها." }
 ]
},
{
 "id": "a2-read",
 "level": "A2",
 "skill": "reading",
 "nav": "قراءة: إيميل رحلة",
 "title": "📖 قراءة: إيميل عن رحلة إسكندرية",
 "subtitle": "إيميل حقيقي بالماضي البسيط والمستقبل",
 "blocks": [
  { "type": "p", "text": "النص ده إيميل من بنت لصاحبتها بتحكي عن رحلة خلصت وبتخطط للي جاي. راقب الأزمنة: كل اللي حصل ماضي بسيط، وكل اللي لسه هيحصل will و going to." },
  { "type": "p", "ltr": true, "text": "Dear Nour," },
  { "type": "p", "ltr": true, "text": "How are you? I am writing to tell you about my trip to Alexandria last weekend. I went there with my cousins on Friday morning. The weather was sunny and the sea was beautiful. We walked on the Corniche, ate fresh fish for lunch, and took a lot of photos. In the evening, we visited the famous library. I really loved it!" },
  { "type": "p", "ltr": true, "text": "On Saturday, we went shopping in the city center. I bought a nice jacket and some gifts for my family. Everything was a little expensive, but I was happy." },
  { "type": "p", "ltr": true, "text": "Next month, I am going to visit Luxor with my family. We will see the temples and ride a boat on the Nile. Why don't you come with us? It will be amazing!" },
  { "type": "p", "ltr": true, "text": "Write back soon.\nBest wishes,\nHabiba" },
  { "type": "h", "text": "كلمات جديدة" },
  { "type": "table", "head": ["الكلمة", "معناها"], "rows": [
   ["trip", "رحلة"], ["last weekend", "الأسبوع اللي فات"], ["weather", "الجو"], ["famous", "مشهور"], ["gifts", "هدايا"], ["temples", "معابد"], ["amazing", "مذهل"]
  ]},
  { "type": "note", "text": "لاحظ حروف الجر مع الأيام والوقت: on Friday، in the evening، next month من غير حرف جر. و Why don't you come؟ طريقة لطيفة لعرض دعوة." }
 ],
 "quiz": [
  { "q": "حبيبة راحت إسكندرية إمتى؟", "options": [{ "text": "الشهر الجاي" }, { "text": "الأسبوع اللي فات" }, { "text": "السنة اللي فاتت" }, { "text": "لسه مراحتش" }], "answer": 1, "explain": "my trip to Alexandria last weekend." },
  { "q": "إيه اللي عملوه بالليل يوم الجمعة؟", "options": [{ "text": "راحوا التسوق" }, { "text": "زوروا المكتبة المشهورة" }, { "text": "ركبوا مركب" }, { "text": "رجعوا القاهرة" }], "answer": 1, "explain": "In the evening, we visited the famous library." },
  { "q": "الرحلة الجاية فين؟", "options": [{ "text": "إسكندرية" }, { "text": "شرم الشيخ" }, { "text": "الأقصر" }, { "text": "أسوان" }], "answer": 2, "explain": "Next month, I am going to visit Luxor." },
  { "q": "ليه استخدمت going to مع خطة الشهر الجاي؟", "options": [{ "text": "عشان الخطة متأكدة ومتجهزة" }, { "text": "عشانها سريعة" }, { "text": "مفيش سبب" }, { "text": "عشان الرحلة بعيدة" }], "answer": 0, "explain": "going to للخطط المقصودة والمجدولة، و will للقرارات اللحظية والتوقعات." }
 ],
 "exercises": [
  { "task": "استخرج من الإيميل ٥ أفعال في الماضي واكتب تصريفها الأول جنبها.", "hint": "went, was, walked, ate, took, visited, bought...", "code": "went → go\nwas → is\nwalked → walk\nate → eat\ntook → take", "why": "الأفعال الشاذة بتتحفظ من النصوص مش من القوايم، فدي طريقتك تكشفها." }
 ]
},
{
 "id": "a2-write",
 "level": "A2",
 "skill": "writing",
 "nav": "كتابة: إيميل عن إجازتك",
 "title": "✍️ كتابة: اكتب إيميل عن رحلة أو إجازة",
 "subtitle": "تحكي في إيميل عن حاجة حصلت، وتخطط للي جاي",
 "blocks": [
  { "type": "p", "text": "الإيميل الشخصي ليه شكل ثابت: تحية، سؤال مجاملة، فقرة عن اللي حصل، فقرة عن اللي جاي، دعوة أو سؤال للطرف التاني، وختام. لو مشيت على الهيكل ده، إيميلك هيطلع طبيعي جداً." },
  { "type": "h", "text": "هيكل الإيميل" },
  { "type": "table", "head": ["الجزء", "جمل جاهزة"], "rows": [
   ["التحية", "Dear ... / Hi ...,"],
   ["الافتتاحية", "How are you? I am writing to tell you about ..."],
   ["الحكاية", "Last weekend, I went to ... We visited ... The weather was ..."],
   ["الخطط", "Next month, I am going to ... We will ..."],
   ["الدعوة", "Why don't you come with us?"],
   ["الختام", "Write back soon. / Best wishes,"]
  ]},
  { "type": "h", "text": "أخطاء شائعة بلاشها" },
  { "type": "list", "items": [
   "متنساش حروف الكابيتال في أول الجمل وأسماء الأماكن.",
   "الأفعال الشاذة في الماضي: went مش goed، و ate مش eated، و bought مش buyed.",
   "الإيميل الشخصي متكتبوش رسمي أوي: عادي تستخدم don't و I'm."
  ]},
  { "type": "note", "text": "الفقرة الواحدة = فكرة واحدة. حكاية الرحلة فقرة، والخطط فقرة تانية. التقسيم ده نص جودة الكتابة." }
 ],
 "quiz": [
  { "q": "أنهي جملة أنسب لافتتاحية إيميل شخصي؟", "options": [{ "text": "I am writing to inform you that ..." }, { "text": "How are you? I am writing to tell you about ..." }, { "text": "Dear Sir or Madam," }, { "text": "To whom it may concern," }], "answer": 1, "explain": "الباقي رسمي جداً لإيميل لصاحبك." },
  { "q": "الماضي الصح لكلمة buy:", "options": [{ "text": "buyed" }, { "text": "bought" }, { "text": "buoght" }, { "text": "baught" }], "answer": 1, "explain": "buy → bought فعل شاذ." },
  { "q": "الترتيب الصح للإيميل:", "options": [{ "text": "تحية ← ختام ← حكاية" }, { "text": "حكاية ← تحية ← ختام" }, { "text": "تحية ← حكاية ← خطط ← ختام" }, { "text": "ختام ← تحية ← حكاية" }], "answer": 2, "explain": "تحية، افتتاحية، حكاية، خطط، دعوة، ختام." }
 ],
 "exercises": [
  { "task": "اكتب إيميل (٨-١٠ جمل) لصاحبك عن آخر خروجة أو رحلة عملتها، وقوله خططك للي جاي.", "hint": "امشِ على الهيكل: تحية، افتتاحية، حكاية بالماضي، خطط بـ going to/will، دعوة، ختام.", "code": "Dear Ali,\nHow are you? I am writing to tell you about my weekend. Last Friday, I went to the cinema with my friends. The movie was funny and the food was great. After that, we drank coffee in our favorite place.\nNext Friday, I am going to visit my uncle in Giza. We will have lunch together and watch the match. Why don't you come with us?\nWrite back soon.\nBest wishes,\n[اسمك]", "why": "ده نفس قالب إيميل حبيبة اللي قرأته؛ التقليد على قالب صح هو أسرع طريق للكتابة." },
  { "task": "حوّل الإيميل بتاعك للمفرد الغائب: احكي نفس الحكاية عن أخوك (He ...).", "hint": "went يفضل went، بس الأفعال العادية هترجع للتصريف الأول مع s في غير الماضي.", "code": "My brother went to the cinema with his friends last Friday. The movie was funny. Next Friday, he is going to visit our uncle in Giza. They will have lunch together.", "why": "الماضي مش بيتغير مع الفاعل، دي راحة الماضي البسيط الوحيدة." }
 ]
},
{
 "id": "a2-speak",
 "level": "A2",
 "skill": "speaking",
 "nav": "كلام: إمبارح وبكرة",
 "title": "🗣️ كلام: احكي عن إمبارح وخطط بكرة",
 "subtitle": "تدرب على الانتقال بين الماضي والمستقبل في الكلام",
 "blocks": [
  { "type": "p", "text": "أصعب حاجة في الكلام هي تغيير الزمن وإنت بتتكلم. التمرين ده بيدربك تقول جملة ماضي وبعدها جملة مستقبل من غير توقف. اسمع وردد وسجّل." },
  { "type": "speak", "items": [
   { "en": "Yesterday, I went to work early.", "ar": "إمبارح رحت الشغل بدري." },
   { "en": "I met my friends and we drank coffee.", "ar": "قابلت صحابي وشربنا قهوة." },
   { "en": "In the evening, I watched a great movie.", "ar": "بالليل اتفرجت على فيلم حلو." },
   { "en": "Tomorrow, I am going to visit my family.", "ar": "بكرة هزور أهلي." },
   { "en": "We will have lunch together.", "ar": "هنتغدى مع بعض." },
   { "en": "In the evening, I am going to study English.", "ar": "بالليل هذاكر إنجليزي." },
   { "en": "What did you do yesterday?", "ar": "إنت عملت إيه إمبارح؟" },
   { "en": "What are you going to do tomorrow?", "ar": "إنت هتعمل إيه بكرة؟" }
  ]},
  { "type": "h", "text": "لعبة الخط الزمني" },
  { "type": "p", "text": "خد ورقة وارسم خط: الشمال إمبارح واليمين بكرة. احكي ٣ حاجات عملتهم إمبارح و٣ هتعملهم بكرة، بصوت عالي، من غير ورق. سجّل نفسك واسمع: هل الأفعال الماضية صح؟" },
  { "type": "note", "text": "الأفعال العشرة الأشهر في الكلام اليومي وماضيها: go→went, eat→ate, drink→drank, see→saw, meet→met, buy→bought, take→took, come→came, have→had, do→did. احفظهم كأغنية." }
 ],
 "quiz": [
  { "q": "(قابلت صحابي) بالإنجليزي:", "options": [{ "text": "I meet my friends." }, { "text": "I met my friends." }, { "text": "I meat my friends." }, { "text": "I was meet my friends." }], "answer": 1, "explain": "meet → met في الماضي." },
  { "q": "إيه الجملة الصح للمستقبل المخطط؟", "options": [{ "text": "I going to visit my family." }, { "text": "I am going visit my family." }, { "text": "I am going to visit my family." }, { "text": "I will going to visit my family." }], "answer": 2, "explain": "going to لازم قبلها am/is/are وبعدها الفعل في المصدر." },
  { "q": "سؤال (عملت إيه إمبارح؟):", "options": [{ "text": "What you did yesterday?" }, { "text": "What did you do yesterday?" }, { "text": "What do you did yesterday?" }, { "text": "What did you yesterday?" }], "answer": 1, "explain": "في سؤال الماضي: did + الفاعل + المصدر." }
 ],
 "exercises": [
  { "task": "سجّل دقيقة كاملة بتقسمها نصين: ٣٠ ثانية عن إمبارح (ماضي) و٣٠ ثانية عن بكرة (مستقبل).", "hint": "ابدأ بـ Yesterday, I ... وبعدين Tomorrow, I am going to ...", "code": "Yesterday, I woke up late. I ate breakfast and went to university. In the evening, I played football with my friends.\nTomorrow, I am going to wake up early. I will study for three hours. In the evening, I am going to call my grandmother.", "why": "لو قدرت تعمل دقيقة كاملة من غير توقف، إنت رسمي بتتكلم إنجليزي." }
 ]
}
);
