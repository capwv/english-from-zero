/* Lab content (data). Runs in the browser. */
(function(){
var tools=[
 {
  "id": "order",
  "kind": "order",
  "title": "🧩 رتّب الجملة",
  "desc": "اضغط الكلمات بالترتيب الصح عشان تكوّن الجملة الإنجليزي. تقدر تسمع الجملة بعد الحل.",
  "mission": "ترتيب الجمل",
  "items": [
   {
    "ar": "أنا طالب.",
    "words": [
     "I",
     "am",
     "a",
     "student"
    ],
    "why": "I am a student."
   },
   {
    "ar": "هي دكتورة.",
    "words": [
     "She",
     "is",
     "a",
     "doctor"
    ],
    "why": "She is a doctor."
   },
   {
    "ar": "هما مش هنا.",
    "words": [
     "They",
     "are",
     "not",
     "here"
    ],
    "why": "They are not here."
   },
   {
    "ar": "هو بيحب الشاي.",
    "words": [
     "He",
     "likes",
     "tea"
    ],
    "why": "مع he بنزود s على الفعل."
   },
   {
    "ar": "إنت ساكن فين؟",
    "words": [
     "Where",
     "do",
     "you",
     "live"
    ],
    "why": "كلمة السؤال ثم do ثم الفاعل."
   },
   {
    "ar": "أنا بذاكر دلوقتي.",
    "words": [
     "I",
     "am",
     "studying",
     "now"
    ],
    "why": "am + ing للمضارع المستمر."
   },
   {
    "ar": "هي راحت المدرسة إمبارح.",
    "words": [
     "She",
     "went",
     "to",
     "school",
     "yesterday"
    ],
    "why": "went هي ماضي go."
   },
   {
    "ar": "ممكن تساعدني؟",
    "words": [
     "Could",
     "you",
     "help",
     "me"
    ],
    "why": "Could في الأول للطلب المؤدب."
   },
   {
    "ar": "هو مبيشربش قهوة.",
    "words": [
     "He",
     "never",
     "drinks",
     "coffee"
    ],
    "why": "never قبل الفعل ومع he بنزود s."
   },
   {
    "ar": "هتصل بيك بعدين.",
    "words": [
     "I",
     "will",
     "call",
     "you",
     "later"
    ],
    "why": "will + فعل من غير to."
   }
  ]
 },
 {
  "id": "gram",
  "kind": "cards",
  "title": "✅ اختار الصح (جرامر)",
  "desc": "8 جمل. اختار الكلمة الصح وهتشوف السبب.",
  "mission": "تحديات الجرامر",
  "items": [
   {
    "kind": "جرامر",
    "text": "She ___ a teacher.",
    "options": [
     "is",
     "am",
     "are"
    ],
    "answer": 0,
    "why": "مع she بنستخدم is."
   },
   {
    "kind": "جرامر",
    "text": "I ___ from Assiut.",
    "options": [
     "is",
     "am",
     "are"
    ],
    "answer": 1,
    "why": "مع I بنستخدم am."
   },
   {
    "kind": "جرامر",
    "text": "They ___ my friends.",
    "options": [
     "is",
     "am",
     "are"
    ],
    "answer": 2,
    "why": "مع they بنستخدم are."
   },
   {
    "kind": "جرامر",
    "text": "He ___ not like coffee.",
    "options": [
     "does",
     "do",
     "is"
    ],
    "answer": 0,
    "why": "مع he في النفي بنستخدم does."
   },
   {
    "kind": "جرامر",
    "text": "___ apple a day.",
    "options": [
     "A",
     "An",
     "The"
    ],
    "answer": 1,
    "why": "apple بتبدأ بصوت متحرك فبنستخدم an."
   },
   {
    "kind": "جرامر",
    "text": "I wake up ___ 7 o'clock.",
    "options": [
     "in",
     "on",
     "at"
    ],
    "answer": 2,
    "why": "مع الساعات بنستخدم at."
   },
   {
    "kind": "جرامر",
    "text": "Yesterday I ___ to the library.",
    "options": [
     "go",
     "went",
     "goed"
    ],
    "answer": 1,
    "why": "went هي ماضي go."
   },
   {
    "kind": "جرامر",
    "text": "You ___ drink water. (نصيحة)",
    "options": [
     "should",
     "will",
     "did"
    ],
    "answer": 0,
    "why": "should بتستخدم للنصيحة."
   }
  ]
 },
 {
  "id": "vocab",
  "kind": "cards",
  "title": "📚 بطاقات مفردات",
  "desc": "6 كلمات. اختار المعنى الصح.",
  "mission": "بطاقات المفردات",
  "items": [
   {
    "kind": "مفردات",
    "text": "يعني إيه \"library\"؟",
    "options": [
     "مكتبة",
     "مكتب",
     "مكتبة كتب إلكترونية فقط"
    ],
    "answer": 0,
    "why": "library هي مكان فيه كتب للقراءة والاستعارة."
   },
   {
    "kind": "مفردات",
    "text": "يعني إيه \"breakfast\"؟",
    "options": [
     "وجبة العشاء",
     "وجبة الفطار",
     "وجبة الغدا"
    ],
    "answer": 1,
    "why": "breakfast هي أول وجبة في اليوم."
   },
   {
    "kind": "مفردات",
    "text": "يعني إيه \"bill\" في المطعم؟",
    "options": [
     "المنيو",
     "الطبق",
     "الحساب"
    ],
    "answer": 2,
    "why": "bill هي فاتورة الحساب."
   },
   {
    "kind": "مفردات",
    "text": "يعني إيه \"yesterday\"؟",
    "options": [
     "بكرة",
     "إمبارح",
     "النهارده"
    ],
    "answer": 1,
    "why": "yesterday هو اليوم اللي فات."
   },
   {
    "kind": "مفردات",
    "text": "يعني إيه \"tomorrow\"؟",
    "options": [
     "بكرة",
     "إمبارح",
     "دلوقتي"
    ],
    "answer": 0,
    "why": "tomorrow هو اليوم الجاي."
   },
   {
    "kind": "مفردات",
    "text": "يعني إيه \"expensive\"؟",
    "options": [
     "رخيص",
     "جميل",
     "غالي"
    ],
    "answer": 2,
    "why": "expensive معناها غالي السعر."
   }
  ]
 },
 {
  "id": "num",
  "kind": "challenges",
  "title": "🔢 تحديات رقمية",
  "desc": "أسئلة إجابتها رقم.",
  "mission": "تحديات رقمية",
  "items": [
   {
    "q": "كام حرف في الأبجدية الإنجليزية؟",
    "answer": 26,
    "tol": 0,
    "hint": "رقم",
    "why": "26 حرف: 5 متحركة و 21 ساكنة."
   },
   {
    "q": "كام حرف ساكن في الأبجدية الإنجليزية؟",
    "answer": 21,
    "tol": 0,
    "hint": "26 ناقص عدد المتحركة (5)",
    "why": "26 - 5 = 21 حرف ساكن."
   },
   {
    "q": "كام حرف متحرك (A E I O U) في كلمة education؟",
    "answer": 5,
    "tol": 0,
    "hint": "عدّ الحروف a e i o u بس",
    "why": "e و u و a و i و o = 5 حروف متحركة."
   },
   {
    "q": "كام حرف في كلمة international؟",
    "answer": 13,
    "tol": 0,
    "hint": "عدّ كل الحروف",
    "why": "international = 13 حرف."
   }
  ]
 }
];
window.LAB_DEF={slug:"english-from-zero",tools:tools};
})();
