/* Level B2 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b2-listen",
 "level": "B2",
 "skill": "listening",
 "nav": "استماع: نقاش الشغل",
 "title": "🎧 استماع: نقاش عن الشغل من البيت",
 "subtitle": "نقاش فيه حجج متعارضة ونبرة أسرع",
 "blocks": [
  { "type": "p", "text": "في المستوى ده، هتسمع ناس بتناقش بجد: كل واحد معاه حجة وبيرد على التاني. مهمتك مش تفهم كل كلمة، مهمتك تمسك: مين مع ومين ضد، وإيه أقوى حجة عند كل طرف." },
  { "type": "dialogue", "lines": [
   { "who": "Layla", "en": "Honestly, I think working from home is the best thing that happened to us. I save two hours every day just by skipping the traffic.", "ar": "بصراحة، أنا شايفة إن الشغل من البيت أحسن حاجة حصلتنا. بوفر ساعتين كل يوم بس من الزحمة." },
   { "who": "Karim", "en": "I see what you mean, but doesn't it get lonely? I actually miss having lunch with the team and talking face to face.", "ar": "فاهم قصدك، بس ألااقي الموضوع وحش؟ أنا فعلاً بفتقد الغدا مع الفريق والكلام وش لش." },
   { "who": "Layla", "en": "True, but we have video calls all day. Plus, I get much more done without people stopping by my desk every ten minutes.", "ar": "صح، بس عندنا مكالمات فيديو طول اليوم. بالإضافة إني بخلص شغل أكتر بكتير من غير اللي بيقفوا على مكتبي كل عشر دقايق." },
   { "who": "Karim", "en": "Fair point. Still, I feel like the line between home and work is disappearing. My manager messaged me at ten p.m. yesterday!", "ar": "نقطة عادلة. بس لسه حاسس إن الخط بين البيت والشغل بيختفي. المدير كلمتني الساعة ١٠ بالليل إمبارح!" },
   { "who": "Layla", "en": "That's a management problem, not a home problem. You need to set boundaries: close the laptop at six and that's it.", "ar": "دي مشكلة إدارة مش مشكلة بيت. لازم تحط حدود: اقفل اللابتوب الساعة ٦ وخلاص." },
   { "who": "Karim", "en": "Easier said than done! But maybe you're right. I guess a mixed system would suit me best: three days at home, two at the office.", "ar": "أسهل في القول من الفعل! بس يمكن معاكي حق. أظن النظام المختلط هيناسبني أكتر: ٣ أيام بيت ويومين مكتب." },
   { "who": "Layla", "en": "Now that, we can both agree on.", "ar": "دي بقى حاجة ممكن نتفق عليها كلنا." }
  ]},
  { "type": "h", "text": "تعبيرات النقاش المتحضر" },
  { "type": "ex", "items": [
   ["I see what you mean, but ...", "فاهم قصدك، بس ..."],
   ["Fair point.", "نقطة عادلة / كلامك صح."],
   ["Still, I feel like ...", "برضه، أنا حاسس إن ..."],
   ["Easier said than done.", "أسهل في القول من الفعل."],
   ["Plus, ...", "بالإضافة لكده ..."],
   ["Now that, we can agree on.", "دي حاجة ممكن نتفق عليها."]
  ]},
  { "type": "note", "text": "لاحظ جملة ليلى الأخيرة: نقلت المشكلة من الشخص للنظام (مشكلة إدارة مش مشكلة بيت). إعادة صياغة الجدل كده هي أعلى مهارة نقاش." }
 ],
 "quiz": [
  { "q": "أقوى حجة عند ليلى:", "options": [{ "text": "البيت أرخص" }, { "text": "بتخلص شغل أكتر من غير مقاطعات" }, { "text": "المكالمات أسهل" }, { "text": "المدير أحسن" }], "answer": 1, "explain": "قالت: I get much more done without people stopping by my desk." },
  { "q": "مشكلة كريم الأساسية مع الشغل من البيت:", "options": [{ "text": "النت بطيء" }, { "text": "الوحدة واختفاء الحدود بين البيت والشغل" }, { "text": "الأكل" }, { "text": "المواصلات" }], "answer": 1, "explain": "اشتكى من الوحدة ومن إن المدير كلمه الساعة ١٠ بالليل." },
  { "q": "Easier said than done معناها:", "options": [{ "text": "سهلة جداً" }, { "text": "القول أسهل من الفعل" }, { "text": "مستحيلة" }, { "text": "اتقالت قبل كده" }], "answer": 1, "explain": "تعبير اصطلاحي شهير: الكلام أسهل من التنفيذ." },
  { "q": "الاتفاق النهائي كان:", "options": [{ "text": "شغل من البيت دايماً" }, { "text": "شغل من المكتب دايماً" }, { "text": "نظام مختلط" }, { "text": "مفيش اتفاق" }], "answer": 2, "explain": "three days at home, two at the office." }
 ],
 "exercises": [
  { "task": "اسمع النقاش واكتب حجة لكل طرف في جملة واحدة، وبعدين قرر: مين أقنعك وليه.", "hint": "وقت ضايع في الزحمة + إنتاجية VS وحدة + حدود مختفية.", "code": "Layla says working from home saves time and increases productivity. Karim says it is lonely and kills the boundary between home and work. I find Layla more convincing because productivity is measurable, while loneliness can be solved with video calls.", "why": "تلخيص طرفي النقاش بإنصاف قبل ما تختار هو أسلوب التفكير النقدي اللي بيطلبه المستوى B2." }
 ]
},
{
 "id": "b2-read",
 "level": "B2",
 "skill": "reading",
 "nav": "قراءة: مقال تحليلي",
 "title": "📖 قراءة: لماذا نقرأ أقل رغم إننا بنقرا طول اليوم؟",
 "subtitle": "مقال تحليلي بأسلوب أعمق ومفردات أغنى",
 "blocks": [
  { "type": "p", "text": "المقال ده بيطرح مفارقة: بنقرا طول اليوم (رسايل، بوستات، عناوين) بس بنقرا أقل بجد. اقرأ بحثاً عن حجة الكاتب المركزية وكيف بناها." },
  { "type": "p", "ltr": true, "text": "We live in the most text-rich era in human history, yet deep reading is quietly dying. The average person now consumes thousands of words daily in messages, headlines, and captions, but rarely reads a single page with full attention." },
  { "type": "p", "ltr": true, "text": "The problem is not a lack of reading material; it is the way our attention has been trained. Short, exciting pieces reward us instantly, so long texts start to feel heavy. Consequently, many people report that they can no longer finish a book they actually enjoy." },
  { "type": "p", "ltr": true, "text": "However, the cost of this shift is higher than it seems. Deep reading is where complex thinking happens: it teaches us to follow an argument, to hold two opposing ideas at once, and to notice small details that change everything. Without it, our opinions become faster and shallower, borrowed from headlines rather than built from understanding." },
  { "type": "p", "ltr": true, "text": "The good news is that attention is a muscle, not a talent. Ten minutes of undistracted reading a day can rebuild what years of scrolling have weakened. The question is not whether we have time to read deeply; it is whether we still believe it is worth the effort." },
  { "type": "h", "text": "مفردات المقال" },
  { "type": "table", "head": ["الكلمة", "معناها"], "rows": [
   ["era", "عصر"], ["rarely", "نادراً"], ["reward", "يكافئ"], ["Consequently", "وبالتالي"], ["opposing", "متعارضة"], ["shallow", "سطحي"], ["undistracted", "بدون تشتيت"], ["worth the effort", "تستاهل المجهود"]
  ]},
  { "type": "note", "text": "جملة (attention is a muscle, not a talent) هي قلب المقال: التركيز بيتدرب مش موهبة. لاحظ إزاي الكاتب استخدم تشبيه بسيط يلخص فكرة معقدة." }
 ],
 "quiz": [
  { "q": "المفارقة الأساسية في المقال:", "options": [{ "text": "الناس مش بتعرف تقرا" }, { "text": "بنستهلك كلمات كتير بس من غير قراءة عميقة" }, { "text": "الكتب غليت" }, { "text": "الرسايل قلت" }], "answer": 1, "explain": "consumes thousands of words daily ... but rarely reads a single page with full attention." },
  { "q": "حسب المقال، القراءة العميقة بتعلمنا إيه؟", "options": [{ "text": "نتابع حجة ونمسك فكرتين متعاكستين مع بعض" }, { "text": "نحفظ كلمات أكتر" }, { "text": "نقرا أسرع" }, { "text": "نكتب أطول" }], "answer": 0, "explain": "to follow an argument, to hold two opposing ideas at once, and to notice small details." },
  { "q": "حل الكاتب للمشكلة:", "options": [{ "text": "نبطل موبايلات" }, { "text": "١٠ دقايق قراءة بلا تشتيت يومياً" }, { "text": "نقرا بوستات أطول" }, { "text": "نروح مكتبات أكتر" }], "answer": 1, "explain": "Ten minutes of undistracted reading a day can rebuild what years of scrolling have weakened." },
  { "q": "شبّه الكاتب الانتباه بـ:", "options": [{ "text": "عضلة" }, { "text": "موهبة" }, { "text": "ماشين" }, { "text": "نهر" }], "answer": 0, "explain": "attention is a muscle, not a talent." }
 ],
 "exercises": [
  { "task": "اكتب الحجة المركزية للمقال في جملة واحدة، وبعدين جملة تانية تقول هل توافقه أم لا ولماذا.", "hint": "ابدأ بـ The writer argues that ... و In my view ...", "code": "The writer argues that although we read more text than ever, we have lost the habit of deep reading, and that short daily practice can rebuild it. In my view, he is right because I feel my own attention getting shorter every year.", "why": "صياغة حجة كاتب في جملة هي مهارة القراءة الأكاديمية الأساسية." }
 ]
},
{
 "id": "b2-write",
 "level": "B2",
 "skill": "writing",
 "nav": "كتابة: الإيميل الرسمي",
 "title": "✍️ كتابة: اكتب إيميل رسمي محترف",
 "subtitle": "للشغل والجامعة والجهات الرسمية",
 "blocks": [
  { "type": "p", "text": "الإيميل الرسمي له لغة مختلفة تماماً عن إيميل صحابك: تحية رسمية، جمل كاملة، من غير اختصارات، وطلب واضح في الآخر. الفرق في الـ Register (مستوى الرسمية) هو أهم حاجة في المستوى B2." },
  { "type": "h", "text": "عادي VS رسمي" },
  { "type": "table", "head": ["عادي", "رسمي"], "rows": [
   ["Hi Sam,", "Dear Mr. Samy, / Dear Dr. Ahmed,"],
   ["Thanks a lot!", "Thank you for your time."],
   ["I can't come.", "I am unable to attend."],
   ["I want to ask about ...", "I am writing to inquire about ..."],
   ["Please send me ...", "I would appreciate it if you could send me ..."],
   ["Bye / See you", "Best regards, / Kind regards,"]
  ]},
  { "type": "h", "text": "هيكل الإيميل الرسمي" },
  { "type": "list", "items": [
   "<b>Subject واضح:</b> Request to Change Appointment - Tarek Adel",
   "<b>تحية رسمية:</b> Dear Mr./Ms./Dr. + الاسم،",
   "<b>جملة افتتاحية تحدد الغرض فوراً:</b> I am writing to inquire about ...",
   "<b>فقرة التفاصيل:</b> الخلفية والمعلومات اللازمة.",
   "<b>الطلب الواضح:</b> I would appreciate it if you could ...",
   "<b>الختام:</b> Thank you for your time. + Best regards, + الاسم الكامل"
  ]},
  { "type": "h", "text": "نموذج جاهز" },
  { "type": "p", "ltr": true, "text": "Subject: Application for the Marketing Internship\n\nDear Ms. Mona,\n\nI am writing to apply for the marketing internship advertised on your website. I am a third-year business student with a strong interest in digital marketing, and I believe this opportunity matches my skills and goals.\n\nI would appreciate it if you could send me the application requirements and the deadline. I have attached my CV for your review.\n\nThank you for your time, and I look forward to your reply.\n\nBest regards,\nAhmed Wael" },
  { "type": "note", "text": "في الرسمي: ممنوع الاختصارات (don't → do not)، وممنوع الإيموجي، والتوقيع بالاسم الكامل. و `I look forward to your reply` هي الختامية الذهبية لأي إيميل رسمي." }
 ],
 "quiz": [
  { "q": "أنهي افتتاحية أنسب لإيميل رسمي؟", "options": [{ "text": "Hey! How's it going?" }, { "text": "I am writing to inquire about ..." }, { "text": "What's up?" }, { "text": "Guess what!" }], "answer": 1, "explain": "الغرض من الإيميل بيتحدد في أول جملة." },
  { "q": "النسخة الرسمية من (I can't come):", "options": [{ "text": "I cannot attend." }, { "text": "I not come." }, { "text": "I won't make it lol." }, { "text": "Can't come sorry." }], "answer": 0, "explain": "في الرسمي مفيش اختصارات: cannot بدل can't، و attend أرقى من come." },
  { "q": "الختام الصح لإيميل رسمي:", "options": [{ "text": "See ya!" }, { "text": "Bye bye" }, { "text": "Best regards, + الاسم الكامل" }, { "text": "😊" }], "answer": 2, "explain": "Best regards أو Kind regards ثم الاسم الكامل." }
 ],
 "exercises": [
  { "task": "اكتب إيميل رسمي لمديرك بتطلب فيه إجازة يومين لظرف عائلي.", "hint": "Subject واضح، تحية، غرض مباشر، التواريخ، عرض تعويض الشغل، ختام.", "code": "Subject: Leave Request - Two Days\n\nDear Mr. Hassan,\n\nI am writing to request two days of leave on Sunday and Monday, the 15th and 16th, due to a family matter. I will make sure to finish my current tasks before the weekend and remain available by phone for urgent matters.\n\nI would appreciate your approval.\n\nThank you for your understanding.\n\nBest regards,\n[اسمك الكامل]", "why": "الإيميل ده هتحتاجه فعلاً يوم من الأيام؛ احفظ هيكله." },
  { "task": "حوّل الجمل العادية دي لرسمية: 1) I want the report. 2) Thanks for everything. 3) I can't fix it now.", "hint": "would appreciate / Thank you for / unable to at the moment", "code": "1) I would appreciate it if you could send me the report.\n2) Thank you for your support.\n3) I am unable to fix it at the moment.", "why": "تحويل الـ Register هو تمرين B2 الكلاسيكي؛ كل ما تتمرن عليه كلامك الرسمي يطلع أسرع." }
 ]
},
{
 "id": "b2-speak",
 "level": "B2",
 "skill": "speaking",
 "nav": "كلام: عرض تقديمي",
 "title": "🗣️ كلام: قدّم عرض تقديمي قصير",
 "subtitle": "تتكلم ٣ دقايق منظمة عن موضوع واحد",
 "blocks": [
  { "type": "p", "text": "العرض التقديمي (Presentation) هو قمة الكلام المنظم: افتتاحية تمسك الانتباه، جسم مقسم لنقاط، وختام قوي. الجمل اللي تحت هي هيكل أي عرض ناجح." },
  { "type": "speak", "items": [
   { "en": "Good morning, everyone. Today, I would like to talk about time management.", "ar": "صباح الخير جميعاً. النهارده حابب أتكلم عن إدارة الوقت." },
   { "en": "I will divide my talk into three main points.", "ar": "هقسم كلامي لتلات نقاط رئيسية." },
   { "en": "Let me start with the first point: why we lose time.", "ar": "خليني أبدأ بأول نقطة: ليه بنضيع وقتنا." },
   { "en": "Moving on to my second point: simple tools that help.", "ar": "ننتقل لنقطتي التانية: أدوات بسيطة بتساعد." },
   { "en": "A good example of this is the two-minute rule.", "ar": "مثال كويس على ده قاعدة الدقيقتين." },
   { "en": "To conclude, small habits make a big difference.", "ar": "للختام، العادات الصغيرة بتعمل فرق كبير." },
   { "en": "Thank you for listening. Are there any questions?", "ar": "شكراً على حسن استماعكم. في أسئلة؟" }
  ]},
  { "type": "h", "text": "خريطة العرض" },
  { "type": "table", "head": ["الجزء", "جملته"], "rows": [
   ["الافتتاحية", "Good morning. Today, I would like to talk about ..."],
   ["خريطة الكلام", "I will divide my talk into ... points."],
   ["الانتقالات", "Let me start with ... / Moving on to ... / Finally, ..."],
   ["الأمثلة", "A good example of this is ..."],
   ["الختام", "To conclude, ... / Thank you for listening."]
  ]},
  { "type": "note", "text": "سر العروض الواثقة: انتقالات مسموعة. لما تقول Moving on to my second point، إنت بتهدي نفسك وبتقود السامع. الصمت بين النقاط مش عيب، ده ثقة." }
 ],
 "quiz": [
  { "q": "أول حاجة تعملها في بداية العرض:", "options": [{ "text": "تدخل في التفاصيل فوراً" }, { "text": "تحية + موضوع + خريطة النقاط" }, { "text": "تقول نكتة خطيرة" }, { "text": "تعتذر عن توترك" }], "answer": 1, "explain": "الافتتاحية المحترفة: تحية، موضوع، وخريطة تريح السامع." },
  { "q": "Moving on to my second point بتتستخدم عشان:", "options": [{ "text": "تنهي العرض" }, { "text": "تنتقل بين النقاط بشكل منظم" }, { "text": "تجيب مثال" }, { "text": "تسأل الجمهور" }], "answer": 1, "explain": "جملة انتقال بين النقاط، من علامات المتحدث المنظم." },
  { "q": "الختام الصح للعرض:", "options": [{ "text": "That's it, bye." }, { "text": "To conclude + الفكرة الأساسية + شكر + فتح باب الأسئلة" }, { "text": "تكرار العرض من الأول بسرعة" }, { "text": "الصمت" }], "answer": 1, "explain": "الختام يلخص ويشكر ويفتح باب للأسئلة." }
 ],
 "exercises": [
  { "task": "جهز وسجّل عرض ٣ دقايق عن موضوع تعرفه كويس (هوايتك، تخصصك، نصيحة عندك). استخدم خريطة العرض كاملة.", "hint": "اكتب النقاط التلاتة على ورقة صغيرة بس، والكلام الحر يجي منك.", "code": "Good morning, everyone. Today, I would like to talk about learning English with podcasts. I will divide my talk into three points: why podcasts work, how to choose one, and how to practice daily. Let me start with ... Moving on to ... A good example is ... To conclude, fifteen minutes a day can change your English. Thank you for listening. Are there any questions?", "why": "العرض الكامل المسجل هو أقوى تمرين عملي على مهارات الكلام في المستوى ده: اسمع نفسك، قارن بالنموذج، وحاول تاني." }
 ]
}
);
