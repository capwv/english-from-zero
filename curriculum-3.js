/* Curriculum part 3: A2 grammar gap-fillers */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "comparatives",
 "level": "A2",
 "skill": "core",
 "nav": "المقارنة والتفضيل",
 "title": "المقارنة والتفضيل: bigger و the biggest",
 "subtitle": "تقارن بين حاجتين، وتقول إيه الأكثر والأقل",
 "blocks": [
  { "type": "p", "text": "لما بتقارن بين حاجتين في الإنجليزي، الصفة نفسها بتتغير. القاعدة الأساسية: صفة قصيرة (مقطع واحد) بنزوّد `er` في الآخر، وصفة طويلة بنحط `more` قبلها." },
  { "type": "h", "text": "المقارنة بين اتنين (Comparative)" },
  { "type": "table", "head": ["الحالة", "القاعدة", "مثال"], "rows": [
    ["صفة قصيرة", "صفة + er + than", "tall → taller than"],
    ["صفة آخرها y", "y → i + er", "easy → easier than"],
    ["صفة آخرها حرف ساكن بعد متحرك", "بندبل الحرف الأخير", "big → bigger than"],
    ["صفة طويلة", "more + صفة + than", "more expensive than"]
  ]},
  { "type": "ex", "items": [
    ["Cairo is bigger than Alexandria.", "القاهرة أكبر من الإسكندرية."],
    ["The exam was easier than I expected.", "الامتحان كان أسهل مما توقعت."],
    ["This phone is more expensive than that one.", "الموبايل ده أغلى من ده."]
  ]},
  { "type": "h", "text": "الأكثر على الإطلاق (Superlative)" },
  { "type": "p", "text": "لما بتقول إن حاجة هي (الأكبر/الأحسن) في مجموعة كاملة، بتستخدم `the` + الصفة + `est`، أو `the most` + الصفة الطويلة." },
  { "type": "ex", "items": [
    ["He is the tallest student in the class.", "هو أطول طالب في الفصل."],
    ["This is the most important lesson.", "ده أهم درس."],
    ["January is the coldest month of the year.", "يناير هو أبرد شهر في السنة."]
  ]},
  { "type": "note", "text": "<b>صفات شاذة احفظها زي ما هي:</b> good → better → the best، و bad → worse → the worst، و far → farther → the farthest. مفيش gooder ولا badest أبداً." },
  { "type": "h", "text": "زي بعض بالظبط" },
  { "type": "p", "text": "ولو عايز تقول إن حاجتين قد بعض، استخدم `as ... as`: أنا طولي قد أخويا." },
  { "type": "ex", "items": [
    ["I am as tall as my brother.", "أنا طولي قد أخويا."],
    ["This task is not as hard as the last one.", "المهمة دي مش صعبة قد اللي فاتت."]
  ]},
  { "type": "note", "text": "في النفي `not as ... as` معناها (مش قد)، ودي طريقة لطيفة للمقارنة من غير ما تجرح: الفيلم ده مش حلو قد الفيلم اللي فات." }
 ],
 "quiz": [
  { "q": "إيه صيغة المقارنة الصح لكلمة big؟", "options": [{ "text": "biger" }, { "text": "bigger" }, { "text": "more big" }, { "text": "biggest than" }], "answer": 1, "explain": "big آخرها ساكن بعد متحرك، فبندبل الحرف: bigger." },
  { "q": "اختار الجملة الصح:", "options": [{ "text": "This car is more fast than mine." }, { "text": "This car is faster than mine." }, { "text": "This car is fast than mine." }, { "text": "This car is the faster than mine." }], "answer": 1, "explain": "fast صفة قصيرة، بتاخد er: faster than." },
  { "q": "good في صيغة التفضيل (Superlative) بتبقى:", "options": [{ "text": "the goodest" }, { "text": "the most good" }, { "text": "the best" }, { "text": "the better" }], "answer": 2, "explain": "good شاذة: good → better → the best." },
  { "q": "إمتى نستخدم the most؟", "options": [{ "text": "مع أي صفة" }, { "text": "مع الصفات الطويلة زي beautiful و important" }, { "text": "مع الأسماء بس" }, { "text": "في النفي بس" }], "answer": 1, "explain": "الصفات الطويلة بتاخد more في المقارنة و the most في التفضيل." },
  { "q": "جملة (أنا مش ذكي قد أختي) بالإنجليزي:", "options": [{ "text": "I am not smart than my sister." }, { "text": "I am not as smart as my sister." }, { "text": "I am not the smartest my sister." }, { "text": "I am not more smart as my sister." }], "answer": 1, "explain": "as ... as للتساوي، ونفيها not as ... as." },
  { "q": "easy في المقارنة بتبقى:", "options": [{ "text": "easyer" }, { "text": "more easy" }, { "text": "easier" }, { "text": "easiest than" }], "answer": 2, "explain": "الصفة المنتهية بـ y بنقلبها i ونزود er: easier." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل بتقارن فيها بين مدينتين تعرفهم (أكبر، أجمل، أزحم).", "hint": "استخدم than مع المقارنة، ومتنساش تدبل الحرف لو لازم.", "code": "Alexandria is smaller than Cairo.\nThe weather in Alexandria is nicer than in Cairo.\nCairo is more crowded than Alexandria.", "why": "لاحظ: smaller و nicer صفات قصيرة أخدت er، أما crowded الطويلة أخدت more." },
  { "task": "اكتب جملتين بـ superlative عن حياتك: أحسن مادة عندك، وأسوأ يوم في الأسبوع.", "hint": "good و bad شاذة!", "code": "English is the best subject for me.\nSunday is the worst day of the week.", "why": "the best و the worst صيغ شاذة لازم تتحفظ." }
 ]
},
{
 "id": "present_perfect",
 "level": "A2",
 "skill": "core",
 "nav": "المضارع التام",
 "title": "المضارع التام: have و has + التصريف التالت",
 "subtitle": "تتكلم عن خبرات حصلت وأثرها لسه موجود",
 "blocks": [
  { "type": "p", "text": "المضارع التام (Present Perfect) هو أشهر زمن بيلخبط العرب، لأن مفيش مقابل مباشر ليه في العربي. استخدمه لما الحاجة حصلت في الماضي بس مش مهمة إمتى بالظبط، أو أثرها لسه شغال لحد دلوقتي." },
  { "type": "h", "text": "التكوين" },
  { "type": "table", "head": ["الفاعل", "الأداة", "الفعل"], "rows": [
    ["I / You / We / They", "have", "التصريف التالت (eaten, seen, worked)"],
    ["He / She / It", "has", "التصريف التالت"]
  ]},
  { "type": "ex", "items": [
    ["I have finished my homework.", "أنا خلصت واجبي (وهو خلصان دلوقتي)."],
    ["She has visited Luxor twice.", "هي زارت الأقصر مرتين (في حياتها عموماً)."],
    ["We have just eaten.", "إحنا لسه أاكلين دلوقتي."]
  ]},
  { "type": "h", "text": "أشهر ٣ استخدامات" },
  { "type": "list", "items": [
    "<b>خبرة في حياتك:</b> حصلت قبل كده من غير تحديد وقت: I have tried sushi. (جربت السوشي قبل كده).",
    "<b>حاجة لسه مأثرة:</b> المفتاح ضاع ومكانش موجود لحد دلوقتي: I have lost my keys.",
    "<b>حاجة بدأت ولسه مستمرة:</b> مع for أو since: I have lived here for 10 years. (عايش هنا بقالي ١٠ سنين)."
  ]},
  { "type": "note", "text": "<b>الفرق من الماضي البسيط:</b> الماضي البسيط بيحدد وقت خلص: I visited Luxor last year. أما المضارع التام الوقت فيه مفتوح أو ممتد: I have visited Luxor. لو قلت إمتى بالظبط (yesterday, last week, in 2019) يبقى ماضي بسيط، مينفعش مضارع تام." },
  { "type": "h", "text": "كلمات بتمشي معاه كتير" },
  { "type": "table", "head": ["الكلمة", "معناها", "مكانها"], "rows": [
    ["just", "لسه من شوية", "بين have والفعل"],
    ["already", "خلاص حصل", "بين have والفعل"],
    ["yet", "لسه (في النفي والسؤال)", "آخر الجملة"],
    ["ever / never", "عمري / عمري ما", "بين have والفعل"],
    ["for / since", "منذ مدة / منذ وقت معين", "آخر الجملة"]
  ]},
  { "type": "ex", "items": [
    ["Have you ever eaten Egyptian koshari?", "عمرك أكلت كشري مصري؟"],
    ["I have never seen snow.", "عمري ما شفت تلج."],
    ["She hasn't called me yet.", "هي لسه مكلمتنيش."]
  ]},
  { "type": "note", "text": "التصريف التالت للأفعال المنتظمة زي الماضي بـ ed (worked, played)، وغير المنتظمة لازم تتحفظ: go → went → gone، و eat → ate → eaten، و see → saw → seen.", "warn": true }
 ],
 "quiz": [
  { "q": "اختار التكوين الصح:", "options": [{ "text": "She have eaten." }, { "text": "She has eaten." }, { "text": "She has ate." }, { "text": "She have ate." }], "answer": 1, "explain": "مع she بنستخدم has، وبعدها التصريف التالت eaten." },
  { "q": "إمتى تستخدم المضارع التام بدل الماضي البسيط؟", "options": [{ "text": "لما الوقت محدد زي yesterday" }, { "text": "لما الحدث حصل في 2019" }, { "text": "لما الوقت مش محدد أو الأثر لسه موجود" }, { "text": "اللي اتنين نفس المعنى دايماً" }], "answer": 2, "explain": "وقت محدد وخلصان = ماضي بسيط. وقت مفتوح أو أثر مستمر = مضارع تام." },
  { "q": "(عمري ما رحت لندن) بالإنجليزي:", "options": [{ "text": "I never went to London." }, { "text": "I have never been to London." }, { "text": "I have never go to London." }, { "text": "I didn't never be to London." }], "answer": 1, "explain": "never بتيجي بين have والتصريف التالت: have never been." },
  { "q": "yet بتتستخدم غالباً في:", "options": [{ "text": "الجمل المثبتة" }, { "text": "النفي والسؤال" }, { "text": "الأمر" }, { "text": "الماضي البعيد" }], "answer": 1, "explain": "yet بتيجي آخر الجملة في النفي (haven't ... yet) والسؤال (Have you ... yet؟)." },
  { "q": "(عايش هنا بقالي ٥ سنين):", "options": [{ "text": "I live here for 5 years." }, { "text": "I have lived here for 5 years." }, { "text": "I lived here since 5 years." }, { "text": "I am live here for 5 years." }], "answer": 1, "explain": "مدة ممتدة من الماضي لدلوقتي = مضارع تام مع for." },
  { "q": "go → went → ؟", "options": [{ "text": "goed" }, { "text": "went" }, { "text": "gone" }, { "text": "going" }], "answer": 2, "explain": "التصريف التالت لـ go هو gone." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل عن خبرات في حياتك بـ have/has + التصريف التالت (حاجة جربتها، مكان زرته، حاجة عمري ما عملتها).", "hint": "استخدم ever أو never أو already.", "code": "I have visited Alexandria many times.\nI have never flown in a plane.\nI have already learned the alphabet.", "why": "الخبرات العامة من غير وقت محدد بتاخد مضارع تام دايماً." },
  { "task": "فرّق بإيدك: حط الجملتين دول في سياق مناسب: I lost my keys yesterday. / I have lost my keys.", "hint": "فين الجملة اللي فيها وقت محدد؟", "code": "I lost my keys yesterday. → وقت محدد وخلص، ماضي بسيط.\nI have lost my keys. → المفاتيح لسه ضايعة دلوقتي، مضارع تام.", "why": "الزمن مش بس ترجمة، هو اختيار زاوية: هل الوقت مقفول ولا لسه مفتوح؟" }
 ]
},
{
 "id": "some_any",
 "level": "A2",
 "skill": "core",
 "nav": "some و any و much و many",
 "title": "some و any و much و many والعد في الإنجليزي",
 "subtitle": "تقول (شوية) و(كتير) صح حسب نوع الاسم",
 "blocks": [
  { "type": "p", "text": "الإنجليزي بيفرق بين أسماء تتعد (countable) زي كتب وتفاح، وأسماء متتعدش (uncountable) زي مية وسكر ومعلومات. الفرق ده هو اللي بيحدد تستخدم إيه من الكلمات دي." },
  { "type": "h", "text": "some و any" },
  { "type": "table", "head": ["الكلمة", "الاستخدام", "مثال"], "rows": [
    ["some", "جمل مثبتة (شوية/بعض)", "I have some money."],
    ["any", "نفي وسؤال", "I don't have any money. / Do you have any money?"],
    ["some في السؤال", "عرض أو طلب مهذب", "Would you like some tea?"]
  ]},
  { "type": "ex", "items": [
    ["There is some water in the bottle.", "في شوية مية في الزجاجة."],
    ["There aren't any eggs in the fridge.", "مفيش أي بيض في التلاجة."],
    ["Would you like some coffee?", "تحب شوية قهوة؟"]
  ]},
  { "type": "h", "text": "much و many و a lot of" },
  { "type": "table", "head": ["الكلمة", "مع إيه؟", "مثال"], "rows": [
    ["many", "أسماء تتعد", "many books, many friends"],
    ["much", "أسماء متتعدش", "much time, much sugar"],
    ["a lot of", "الاتنين", "a lot of books / a lot of time"],
    ["a few", "قليل (تتعد)", "a few days"],
    ["a little", "قليل (متتعدش)", "a little water"]
  ]},
  { "type": "note", "text": "<b>أسماء مشهورة متتعدش في الإنجليزي وبتخدعنا:</b> information (معلومات)، و advice (نصيحة)، و money (فلوس)، و news (أخبار)، و furniture (أثاث). كلها بتتعامل كمفرد: The news is good. ومينفعش تقول informations ولا advices." },
  { "type": "ex", "items": [
    ["I don't have much time today.", "مفيش عندي وقت كتير النهارده."],
    ["How many brothers do you have?", "عندك كام أخ؟"],
    ["She gave me some useful advice.", "هي ادتني شوية نصايح مفيدة."]
  ]},
  { "type": "h", "text": "How much و How many في السؤال" },
  { "type": "p", "text": "للسؤال عن الكمية: `How many` للي بيتعد (How many students؟)، و `How much` للي متتعدش (How much money؟) وكمان للسؤال عن السعر: How much is this shirt؟ (القميص ده بكام؟)." }
 ],
 "quiz": [
  { "q": "اختار الصح:", "options": [{ "text": "I need some informations." }, { "text": "I need some information." }, { "text": "I need an information." }, { "text": "I need many information." }], "answer": 1, "explain": "information اسم متتعدش، مفرد دايماً من غير a أو جمع." },
  { "q": "(مفيش أي حليب في التلاجة):", "options": [{ "text": "There isn't some milk in the fridge." }, { "text": "There isn't any milk in the fridge." }, { "text": "There isn't many milk in the fridge." }, { "text": "There no milk in the fridge." }], "answer": 1, "explain": "في النفي بنستخدم any." },
  { "q": "many بتتستخدم مع:", "options": [{ "text": "الأسماء اللي متتعدش" }, { "text": "الأسماء اللي تتعد" }, { "text": "الأفعال" }, { "text": "الأسعار" }], "answer": 1, "explain": "many + اسم يتعد: many books. much + اسم متتعدش: much time." },
  { "q": "سؤال عن السعر:", "options": [{ "text": "How many is this bag?" }, { "text": "How much is this bag?" }, { "text": "How lot is this bag?" }, { "text": "What much is this bag?" }], "answer": 1, "explain": "السؤال عن السعر بيبدأ بـ How much." },
  { "q": "إمتى نستخدم some في سؤال؟", "options": [{ "text": "ممنوع في السؤال أبداً" }, { "text": "لما بنعرض أو بنطلب بأدب: Would you like some tea؟" }, { "text": "مع الأسماء المفردة بس" }, { "text": "في الماضي بس" }], "answer": 1, "explain": "some في السؤال بتدل على عرض أو طلب مهذب." },
  { "q": "(عندي شوية فلوس قليلة بس كفاية):", "options": [{ "text": "I have a few money." }, { "text": "I have a little money." }, { "text": "I have few money." }, { "text": "I have many money." }], "answer": 1, "explain": "money متتعدش، فبنستخدم a little مش a few." }
 ],
 "exercises": [
  { "task": "صنّف الأسماء دي: water, chairs, advice, apples, news, pens وبعدين كوّن جملة بـ some أو any مع كل واحد.", "hint": "اسأل نفسك: أقدر أقول واحد اتنين تلاتة عليه؟", "code": "water → متتعدش: I need some water.\nchairs → تتعد: There aren't any chairs.\nadvice → متتعدش: He gave me some advice.\napples → تتعد: Do you have any apples?\nnews → متتعدش: I have some good news.\npens → تتعد: I bought some pens.", "why": "التصنيف هو نص الحل؛ بعده الاختيار بقى آلي." },
  { "task": "اكتب ٤ أسئلة بـ How much و How many عن حياتك اليومية.", "hint": "سعر، عدد أصحاب، وقت، مية.", "code": "How much is this T-shirt?\nHow many friends do you have?\nHow much time do we have?\nHow many days are left for the exam?", "why": "الاختيار بين much و many بيتبع نوع الاسم اللي بعده." }
 ]
},
{
 "id": "adverbs",
 "level": "A2",
 "skill": "core",
 "nav": "ظروف التكرار",
 "title": "ظروف التكرار: always و usually و never",
 "subtitle": "تقول (دايماً) و(أحياناً) و(أبداً) وتحطها في مكانها الصح",
 "blocks": [
  { "type": "p", "text": "ظروف التكرار (Adverbs of Frequency) بتقول قد إيه الحاجة بتحصل. الترتيب من الأكثر للأقل: always (دايماً ١٠٠٪)، usually (عادة)، often (كتير)، sometimes (أحياناً)، rarely (نادراً)، never (أبداً ٠٪)." },
  { "type": "h", "text": "مكانها في الجملة" },
  { "type": "table", "head": ["الحالة", "المكان", "مثال"], "rows": [
    ["مع فعل عادي", "قبل الفعل", "I always drink tea."],
    ["مع فعل to be", "بعده", "She is always late."],
    ["مع فعل مساعد", "بين المساعد والفعل", "I have never seen snow."],
    ["sometimes", "ممكن أول الجملة كمان", "Sometimes I read before bed."]
  ]},
  { "type": "ex", "items": [
    ["I usually wake up at 7.", "عادة بصحى الساعة ٧."],
    ["He is never late for work.", "هو أبداً بيتأخر عن الشغل."],
    ["We often visit our grandmother.", "إحنا كتير بنزور جدتنا."],
    ["She rarely eats fast food.", "هي نادراً ما بتاكل أكلة سريعة."]
  ]},
  { "type": "note", "text": "<b>بلاش النفي المزدوج:</b> never لوحدها نفي، فمتحطش not معاها. قول I never smoke. مش I don't never smoke." },
  { "type": "h", "text": "How often؟" },
  { "type": "p", "text": "للسؤال عن التكرار بنسأل `How often ...؟` (كل قد إيه؟) والإجابة ممكن بظرف تكرار، أو بصيغة عددية: `once a week` (مرة في الأسبوع)، `twice a month` (مرتين في الشهر)، `three times a year` (تلات مرات في السنة)." },
  { "type": "ex", "items": [
    ["How often do you exercise? - Twice a week.", "بتتمرن كل قد إيه؟ - مرتين في الأسبوع."],
    ["I visit my uncle once a month.", "بزور عمي مرة في الشهر."]
  ]},
  { "type": "note", "text": "لما بتستخدم الظرف في أول الجملة زي Sometimes أو Usually، ده بيدي تأكيد أدبي حلو: Usually, I study at night. بس خلي بالك: always و never مكانهما الطبيعي في النص." }
 ],
 "quiz": [
  { "q": "اختار الجملة الصح:", "options": [{ "text": "She always is late." }, { "text": "She is always late." }, { "text": "She late is always." }, { "text": "Always she is late." }], "answer": 1, "explain": "مع فعل to be الظرف بييجي بعده: is always." },
  { "q": "(أنا عمري ما جربت القهوة التركي):", "options": [{ "text": "I don't never try Turkish coffee." }, { "text": "I have never tried Turkish coffee." }, { "text": "I never have try Turkish coffee." }, { "text": "I am never try Turkish coffee." }], "answer": 1, "explain": "never لوحدها نفي من غير don't، ومع have بتيجي قبل التصريف التالت." },
  { "q": "usually معناها:", "options": [{ "text": "أحياناً" }, { "text": "نادراً" }, { "text": "عادةً" }, { "text": "أبداً" }], "answer": 2, "explain": "usually = عادة، أقل من always خطوة." },
  { "q": "(بروح الجيم مرتين في الأسبوع):", "options": [{ "text": "I go to the gym two a week." }, { "text": "I go to the gym twice a week." }, { "text": "I go to the gym two times the week." }, { "text": "I twice go to the gym a week." }], "answer": 1, "explain": "twice = مرتين، والصيغة: twice a week." },
  { "q": "مكان الظرف مع فعل عادي:", "options": [{ "text": "بعد الفعل" }, { "text": "قبل الفعل" }, { "text": "آخر الجملة دايماً" }, { "text": "أول الجملة دايماً" }], "answer": 1, "explain": "I always drink tea. الظرف قبل الفعل العادي." },
  { "q": "سؤال (بتذاكر كل قد إيه؟):", "options": [{ "text": "How much do you study?" }, { "text": "How long do you study?" }, { "text": "How often do you study?" }, { "text": "How usually do you study?" }], "answer": 2, "explain": "السؤال عن التكرار بـ How often." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل عن عاداتك، كل جملة بظرف تكرار مختلف (always, usually, often, sometimes, never).", "hint": "فكر في صحيتك، أكلك، شغلك، نومك.", "code": "I always pray on time.\nI usually drink coffee in the morning.\nI often meet my friends on Friday.\nI sometimes watch movies at night.\nI never skip breakfast.", "why": "لاحظ مكان الظرف قبل الفعل العادي في كل الجمل." },
  { "task": "جاوب على السؤالين دول بصيغة (مرة/مرتين في ...): How often do you visit your family? How often do you exercise?", "hint": "once / twice / three times + a + week/month/year", "code": "I visit my family twice a month.\nI exercise three times a week.", "why": "الإجابة العددية أدق من sometimes وبتبين تحكمك في اللغة." }
 ]
}
);
