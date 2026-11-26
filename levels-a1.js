/* Level A1 skills: listening, reading, writing, speaking */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a1-listen",
 "level": "A1",
 "skill": "listening",
 "nav": "استماع: التعارف",
 "title": "🎧 استماع: أول محادثة تعارف",
 "subtitle": "اسمع محادثة بسيطة بين شخصين بيتعرفوا على بعض",
 "blocks": [
  { "type": "p", "text": "دي أول محادثة استماع ليك. القاعدة الذهبية: اسمع الأول من غير ما تقرأ، وحاول تلقط الكلمات اللي تعرفها. بعدين اسمع تاني مع القراءة. متقلقش لو مش فاهم كل كلمة، المهم تفهم الفكرة." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Hello! My name is Omar. What is your name?", "ar": "أهلاً! أنا اسمي عمر. إنت اسمك إيه؟" },
   { "who": "Sara", "en": "Hi Omar, I am Sara. Nice to meet you.", "ar": "أهلاً يا عمر، أنا سارة. تشرفنا." },
   { "who": "Omar", "en": "Nice to meet you too. Where are you from, Sara?", "ar": "تشرفنا بيكي يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "I am from Assiut. And you?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "I am from Cairo. What do you do?", "ar": "أنا من القاهرة. بتعملي إيه؟" },
   { "who": "Sara", "en": "I am a student. I study business. And you?", "ar": "أنا طالبة. بذاكر إدارة أعمال. وإنت؟" },
   { "who": "Omar", "en": "I work in a bank. How old are you?", "ar": "أنا شغال في بنك. عندك كام سنة؟" },
   { "who": "Sara", "en": "I am twenty years old. It was nice talking to you, Omar!", "ar": "عندي عشرين سنة. كانت دردشة حلوة يا عمر!" }
  ]},
  { "type": "h", "text": "جمل مفتاحية سمعتها" },
  { "type": "ex", "items": [
   ["Where are you from?", "إنت منين؟"],
   ["What do you do?", "بتشتغل إيه؟ / بتعمل إيه في الحياة؟"],
   ["Nice to meet you.", "تشرفنا / فرصة سعيدة."],
   ["It was nice talking to you.", "كان حلو الكلام معاك."]
  ]},
  { "type": "note", "text": "جملة `What do you do؟` من أشهر جمل التعارف، ومعناها بتشتغل إيه، مش بتعمل إيه دلوقتي. اسمعها كتير لحد ما تتخزن في ودنك." }
 ],
 "quiz": [
  { "q": "سارة منين؟", "options": [{ "text": "من القاهرة" }, { "text": "من أسيوط" }, { "text": "من الإسكندرية" }, { "text": "من المنصورة" }], "answer": 1, "explain": "سارة قالت: I am from Assiut." },
  { "q": "عمر بيشتغل إيه؟", "options": [{ "text": "طالب" }, { "text": "دكتور" }, { "text": "شغال في بنك" }, { "text": "مدرس" }], "answer": 2, "explain": "قال: I work in a bank." },
  { "q": "سارة عندها كام سنة؟", "options": [{ "text": "١٨" }, { "text": "٢٠" }, { "text": "٢٢" }, { "text": "٢٥" }], "answer": 1, "explain": "قالت: I am twenty years old." },
  { "q": "What do you do؟ معناها:", "options": [{ "text": "بتعمل إيه دلوقتي؟" }, { "text": "بتشتغل إيه؟" }, { "text": "بتعمل كده ليه؟" }, { "text": "عايز تعمل إيه؟" }], "answer": 1, "explain": "سؤال التعارف الشهير عن الشغل أو الدراسة." }
 ],
 "exercises": [
  { "task": "من غير ما تبص على الترجمة، اسمع المحادثة واكتب ٣ معلومات سمعتها عن سارة.", "hint": "اسمها، بلدها، شغلها، سنها.", "code": "Her name is Sara. She is from Assiut. She is a student. She is twenty years old.", "why": "لو طلعت المعلومات دي من السماع بس، ودنك بدأت تتعود على الإنجليزي." }
 ]
},
{
 "id": "a1-read",
 "level": "A1",
 "skill": "reading",
 "nav": "قراءة: يوم كريم",
 "title": "📖 قراءة: يوم في حياة كريم",
 "subtitle": "أول نص إنجليزي كامل تقراه وتفهمه لوحدك",
 "blocks": [
  { "type": "p", "text": "اقرأ النص ده مرة بسرعة للفكرة العامة، وبعدين مرة ببطء مع جدول الكلمات تحته. النص كله بالمضارع البسيط اللي خدته في الدروس اللي فاتت." },
  { "type": "p", "ltr": true, "text": "My name is Karim and I am twenty-two years old. I live in a small apartment in Cairo with my brother. Every day, I wake up at seven o'clock. I drink coffee and eat bread with cheese for breakfast. Then I go to work by bus." },
  { "type": "p", "ltr": true, "text": "I work in a phone shop. I help people choose new phones. My work starts at nine and finishes at five. In the afternoon, I come back home and cook dinner with my brother. We usually eat rice and chicken." },
  { "type": "p", "ltr": true, "text": "In the evening, I study English for one hour and watch football on TV. I go to bed at eleven. I am busy, but I am happy." },
  { "type": "h", "text": "كلمات جديدة" },
  { "type": "table", "head": ["الكلمة", "معناها"], "rows": [
   ["apartment", "شقة"], ["wake up", "يصحى"], ["by bus", "بالاتوبيس"], ["choose", "يختار"], ["cook", "يطبخ"], ["busy", "مشغول"]
  ]},
  { "type": "note", "text": "لاحظ إن كل الأفعال في المضارع البسيط عشان ده روتين يومي: wake up, drink, go, work, help, eat, study. لو لقيت فعل آخره s زي starts و finishes، يبقى الفاعل مفرد غائب (he/she/it أو اسم مفرد)." }
 ],
 "quiz": [
  { "q": "كريم بيصحى الساعة كام؟", "options": [{ "text": "٥" }, { "text": "٧" }, { "text": "٩" }, { "text": "١١" }], "answer": 1, "explain": "النص بيقول: I wake up at seven o'clock." },
  { "q": "كريم بيروح الشغل إزاي؟", "options": [{ "text": "بالمترو" }, { "text": "ماشي" }, { "text": "بالاتوبيس" }, { "text": "بعربيته" }], "answer": 2, "explain": "I go to work by bus." },
  { "q": "كريم بيشتغل فين؟", "options": [{ "text": "في بنك" }, { "text": "في محل موبايلات" }, { "text": "في مدرسة" }, { "text": "في مطعم" }], "answer": 1, "explain": "I work in a phone shop." },
  { "q": "إيه اللي كريم بيعمله بالليل؟", "options": [{ "text": "بيلعب كورة" }, { "text": "بيطبخ مع صحابه" }, { "text": "بيدرس إنجليزي وبيتفرج على الكورة" }, { "text": "بيروح شغل تاني" }], "answer": 2, "explain": "In the evening, I study English for one hour and watch football on TV." }
 ],
 "exercises": [
  { "task": "اقرأ النص بصوت عالي مرتين، وبعدين اكتب ٣ جمل من النص بإيدك من غير ما تبص.", "hint": "الكتابة من الذاكرة بتثبت الكلمات والترتيب.", "code": "My name is Karim.\nI wake up at seven o'clock.\nI work in a phone shop.", "why": "القراءة بصوت عالي بتربط العين بالودن باللسان، ودي أسرع طريقة للثبات." }
 ]
},
{
 "id": "a1-write",
 "level": "A1",
 "skill": "writing",
 "nav": "كتابة: قدم نفسك",
 "title": "✍️ كتابة: اكتب فقرة تعريف بنفسك",
 "subtitle": "تكتب أول فقرة إنجليزي كاملة عن نفسك",
 "blocks": [
  { "type": "p", "text": "أهم حاجة في الكتابة إنك تبدأ بجمل بسيطة وصح، مش جمل معقدة وغلط. فقرة التعريف بالنفس ليها قالب ثابت، لو حفظته هتعرف تكتب عن نفسك في أي موقف: انترفيو، أبلكيشن، أو حتى أول رسالة لصاحب أجنبي." },
  { "type": "h", "text": "قالب التعريف بالنفس" },
  { "type": "table", "head": ["الجزء", "الجملة"], "rows": [
   ["الاسم", "My name is ..."],
   ["السن", "I am ... years old."],
   ["البلد/المدينة", "I am from ... / I live in ..."],
   ["الشغل/الدراسة", "I am a student. / I work as a ..."],
   ["الهواية", "I like ... / I love ..."],
   ["الختام", "Nice to meet you!"]
  ]},
  { "type": "h", "text": "نموذج جاهز" },
  { "type": "p", "ltr": true, "text": "My name is Ahmed. I am twenty-one years old. I am from Assiut, but I live in Cairo now. I am a student and I study business. In my free time, I like reading and playing football. Nice to meet you!" },
  { "type": "note", "text": "قواعد كتابة سريعة: الجملة الإنجليزية بتبدأ بحرف كابيتال وبتخلص بنقطة. و `I` (أنا) بتتكتب كابيتال دايماً، حتى في نص الجملة. والأسماء (بلاد، مدن، أيام) بتبدأ كابيتال." }
 ],
 "quiz": [
  { "q": "إيه الخطأ في الجملة دي: i am from egypt.", "options": [{ "text": "مفيش خطأ" }, { "text": "i و egypt المفروض يبقوا كابيتال" }, { "text": "am غلط" }, { "text": "النقطة مش لازمة" }], "answer": 1, "explain": "الصح: I am from Egypt. حرف I وأسماء البلاد دايماً كابيتال." },
  { "q": "أنهي جملة أنسب لبداية فقرة تعريف؟", "options": [{ "text": "Nice to meet you!" }, { "text": "My name is Sara." }, { "text": "I like football." }, { "text": "Goodbye!" }], "answer": 1, "explain": "البداية بالاسم، والختام بـ Nice to meet you." },
  { "q": "(أنا بحب القراية) بالإنجليزي:", "options": [{ "text": "I like read." }, { "text": "I like reading." }, { "text": "I likes reading." }, { "text": "I like to reading." }], "answer": 1, "explain": "بعد like بييجي الفعل + ing: I like reading." }
 ],
 "exercises": [
  { "task": "اكتب فقرة التعريف بنفسك كاملة (٥-٦ جمل) على نفس قالب أحمد.", "hint": "اسم، سن، بلد، شغل/دراسة، هواية، ختام.", "code": "My name is [اسمك]. I am [سنك] years old. I am from [بلدك]. I am a student / I work as a [شغلك]. In my free time, I like [هوايتك]. Nice to meet you!", "why": "الفقرة دي هتفضل معاك طول عمرك؛ احفظ نسختك النهائية منها." },
  { "task": "اكتب نفس الفقرة عن أخوك أو صاحبك (فاعل مفرد غائب).", "hint": "افتكر إن الأفعال بتاخد s مع he/she.", "code": "His name is Omar. He is twenty-five years old. He is from Cairo. He works as an engineer. In his free time, he likes swimming.", "why": "التحويل من I لـ He بيمرنك على s المضارع من غير ما تحس." }
 ]
},
{
 "id": "a1-speak",
 "level": "A1",
 "skill": "speaking",
 "nav": "كلام: قدم نفسك بصوتك",
 "title": "🗣️ كلام: قدّم نفسك بالإنجليزي بصوت عالي",
 "subtitle": "اسمع، ردد، سجّل صوتك، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام مش هيتعلم من القراءة، لازم بقك يتحرك. الطريقة اللي تحت اسمها Shadowing: تسمع الجملة، وترددها وراها بنفس النغمة والسرعة. سجّل صوتك واسمع نفسك وقارن: هل نطقت الحروف زي النموذج؟" },
  { "type": "speak", "items": [
   { "en": "Hello, my name is Ahmed.", "ar": "أهلاً، أنا اسمي أحمد." },
   { "en": "I am from Egypt.", "ar": "أنا من مصر." },
   { "en": "I am twenty-one years old.", "ar": "عندي واحد وعشرين سنة." },
   { "en": "I am a student.", "ar": "أنا طالب." },
   { "en": "I study business.", "ar": "بذاكر إدارة أعمال." },
   { "en": "I like reading and football.", "ar": "بحب القراية والكورة." },
   { "en": "Nice to meet you!", "ar": "تشرفنا!" }
  ]},
  { "type": "h", "text": "تمرين الحوار الوهمي" },
  { "type": "p", "text": "قف قدام المرايا أو امسك موبايلك، وجاوب على الأسئلة دي بصوت عالي من غير ورقة: What's your name؟ Where are you from؟ How old are you؟ What do you do؟ What do you like؟ لو وقفت في سؤال، ارجع للجمل اللي فوق." },
  { "type": "note", "text": "متستناش تبقى مثالي عشان تتكلم. النطق الغلط بصوت عالي أحسن مليون مرة من النطق الصح في دماغك." }
 ],
 "quiz": [
  { "q": "إيه هي طريقة الـ Shadowing؟", "options": [{ "text": "تترجم الجملة في دماغك" }, { "text": "تسمع وتردد بصوت عالي بنفس النغمة" }, { "text": "تكتب الجملة كذا مرة" }, { "text": "تحفظ قواعد النطق" }], "answer": 1, "explain": "الـ Shadowing تقليد صوتي مباشر: اسمع وردد فوراً." },
  { "q": "ليه نسجل صوتنا ونسمعه؟", "options": [{ "text": "عشان نضيع وقت" }, { "text": "عشان نقارن نطقنا بالنموذج ونلاحظ الفرق" }, { "text": "عشان نبعته لحد" }, { "text": "مش لازم نسجل" }], "answer": 1, "explain": "المقارنة بالنموذج هي اللي بتكشف أخطاء النطق اللي مش بنسمعها واحنا بنتكلم." },
  { "q": "لو وقفت في نص كلامك ومش فاكر كلمة، تعمل إيه؟", "options": [{ "text": "تسكت وتبطل" }, { "text": "تكمل بجملة تانية بسيطة تعرفها" }, { "text": "تقولها بالعربي" }, { "text": "تعتذر وتنسحب" }], "answer": 1, "explain": "المتحدث الكويس مش اللي مبيلقبطش، اللي بيعرف يكمل لما يلقبط." }
 ],
 "exercises": [
  { "task": "سجّل نفسك وإنت بتقول فقرة التعريف كاملة (اللي كتبتها في درس الكتابة) في ٣٠ ثانية.", "hint": "اسمع التسجيل ٣ مرات: مرة للنطق، مرة للسرعة، مرة للثقة.", "code": "Hello, my name is ... I am ... years old. I am from ... I am a ... I like ... Nice to meet you!", "why": "التسجيل الأول هو خط البداية. بعد شهر سجّل تاني واسمع الفرق بنفسك." }
 ]
}
);
