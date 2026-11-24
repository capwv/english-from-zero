/* Curriculum part 1 */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "alphabet",
 "nav": "الحروف والنطق",
 "title": "الحروف الإنجليزية والنطق الصح",
 "subtitle": "نبدأ بالحروف والأصوات اللي بتفرق عن العربي",
 "blocks": [
  {
   "type": "p",
   "text": "الإنجليزي فيه 26 حرف: 5 حروف متحركة (Vowels) وهي A E I O U, والباقي 21 حرف ساكن (Consonants). الفرق عن العربي إن الحرف الواحد ممكن يتنطق بأكتر من طريقة، فالأهم تتعود على الأصوات مش بس أسماء الحروف."
  },
  {
   "type": "h",
   "text": "الحروف المتحركة"
  },
  {
   "type": "table",
   "head": [
    "الحرف",
    "الصوت القصير (تقريبي)",
    "مثال"
   ],
   "rows": [
    [
     "A",
     "قريب من \"أ\" مفتوحة",
     "cat"
    ],
    [
     "E",
     "قريب من \"إي\" خفيفة",
     "bed"
    ],
    [
     "I",
     "قريب من \"إ\" قصيرة",
     "sit"
    ],
    [
     "O",
     "قريب من \"أ\" مفتوحة بشفايف مدورة",
     "hot"
    ],
    [
     "U",
     "قريب من \"أَ\" غامقة",
     "cup"
    ]
   ]
  },
  {
   "type": "h",
   "text": "أصوات مش موجودة في العربي"
  },
  {
   "type": "list",
   "items": [
    "`P` زي ب لكن بنفخة هوا خفيفة: جرب تحط ورقة قدام بقك وقول pen, الورقة هتتحرك.",
    "`V` زي ف لكن بصوت مجهور: بتحط سنانك العلوية على شفتك السفلى وتقول very.",
    "`TH` بتحط طرف لسانك بين سنانك: think و this.",
    "`CH` زي تش: chair. و `SH` زي ش: ship."
   ]
  },
  {
   "type": "ex",
   "items": [
    [
     "cat",
     "قطة"
    ],
    [
     "pen",
     "قلم"
    ],
    [
     "very",
     "جداً"
    ],
    [
     "think",
     "يفكر"
    ],
    [
     "ship",
     "سفينة"
    ]
   ]
  },
  {
   "type": "note",
   "text": "اضغط على زرار 🔊 في المعمل وسمّع الكلمة، وكرر وراها بصوت عالي. السمع والتكرار أهم من الحفظ."
  }
 ],
 "quiz": [
  {
   "q": "كام حرف في الأبجدية الإنجليزية؟",
   "options": [
    {
     "text": "24"
    },
    {
     "text": "26"
    },
    {
     "text": "28"
    },
    {
     "text": "30"
    }
   ],
   "answer": 1,
   "explain": "الإنجليزي فيه 26 حرف، منهم 5 متحركة و 21 ساكنة."
  },
  {
   "q": "أنهي مجموعة فيها الحروف المتحركة بس؟",
   "options": [
    {
     "text": "A E I O U"
    },
    {
     "text": "B C D F G"
    },
    {
     "text": "P V T K S"
    },
    {
     "text": "M N L R W"
    }
   ],
   "answer": 0,
   "explain": "الحروف المتحركة هي A و E و I و O و U فقط، والباقي ساكنة."
  },
  {
   "q": "إزاي بتنطق V في كلمة very؟",
   "options": [
    {
     "text": "زي ب"
    },
    {
     "text": "بتحط سنانك العلوية على شفتك السفلى"
    },
    {
     "text": "زي ك"
    },
    {
     "text": "بتسكتها"
    }
   ],
   "answer": 1,
   "explain": "صوت V بيتعمل بسنان على الشفة السفلى، وده الفرق بينه وبين B."
  }
 ],
 "exercises": [
  {
   "task": "اقرا الكلمات دي بصوت عالي، وقول أنهي فيها صوت P وأنهي فيها صوت B: pen, ben, park, bark.",
   "hint": "P بنفخة هوا، B من غير نفخة.",
   "code": "pen و park فيهم P. و ben و bark فيهم B.",
   "why": "الفرق بين P و B بيغيّر المعنى: park حديقة و bark نباح."
  },
  {
   "task": "اكتب اسمك بحروف إنجليزي وعدّ كام حرف متحرك وكام ساكن فيه.",
   "hint": "الحروف المتحركة: A E I O U.",
   "code": "مثال: Ahmed. المتحركة: A و e (اتنين). الساكنة: h و m و d (تلاتة).",
   "why": "أي اسم تكتبه هيدّيك تدريب على التفريق بين النوعين."
  }
 ]
},
{
 "id": "greetings",
 "nav": "التحيات و to be",
 "title": "التحيات والتعريف بنفسك مع to be",
 "subtitle": "تسلّم، تقول اسمك، وتعرف am و is و are",
 "blocks": [
  {
   "type": "p",
   "text": "أول حاجة بتتقال في أي محادثة هي التحية، وبعدها بتعرّف نفسك. الفعل الأساسي اللي هتحتاجه هنا هو `to be` ومعناه تقريباً \"يكون\"."
  },
  {
   "type": "ex",
   "items": [
    [
     "Hello! / Hi!",
     "أهلاً"
    ],
    [
     "Good morning.",
     "صباح الخير"
    ],
    [
     "Good evening.",
     "مساء الخير"
    ],
    [
     "How are you?",
     "عامل إيه؟"
    ],
    [
     "I am fine, thank you.",
     "أنا كويس، شكراً"
    ],
    [
     "Nice to meet you.",
     "تشرفنا"
    ],
    [
     "Goodbye. / Bye!",
     "مع السلامة"
    ]
   ]
  },
  {
   "type": "h",
   "text": "الفعل to be مع الضمائر"
  },
  {
   "type": "table",
   "head": [
    "الضمير",
    "الفعل",
    "مثال"
   ],
   "rows": [
    [
     "I",
     "am",
     "I am Ahmed."
    ],
    [
     "You",
     "are",
     "You are a student."
    ],
    [
     "He / She / It",
     "is",
     "She is a doctor."
    ],
    [
     "We",
     "are",
     "We are friends."
    ],
    [
     "They",
     "are",
     "They are teachers."
    ]
   ]
  },
  {
   "type": "p",
   "text": "في الكلام السريع بنختصر: I am = I'm, she is = she's, we are = we're."
  },
  {
   "type": "note",
   "text": "في العربي بنقول \"أنا طالب\" من غير فعل. في الإنجليزي لازم تحط am أو is أو are: I am a student."
  }
 ],
 "quiz": [
  {
   "q": "اختار الجملة الصح:",
   "options": [
    {
     "text": "I is a student."
    },
    {
     "text": "I am a student."
    },
    {
     "text": "I are a student."
    },
    {
     "text": "I be a student."
    }
   ],
   "answer": 1,
   "explain": "مع I بنستخدم am دايماً."
  },
  {
   "q": "كمّل: She ___ a doctor.",
   "options": [
    {
     "text": "am"
    },
    {
     "text": "are"
    },
    {
     "text": "is"
    },
    {
     "text": "be"
    }
   ],
   "answer": 2,
   "explain": "مع she و he و it بنستخدم is."
  },
  {
   "q": "إيه معنى \"Nice to meet you\"؟",
   "options": [
    {
     "text": "مع السلامة"
    },
    {
     "text": "تشرفنا"
    },
    {
     "text": "صباح الخير"
    },
    {
     "text": "شكراً"
    }
   ],
   "answer": 1,
   "explain": "بنقولها لما بنقابل حد لأول مرة."
  }
 ],
 "exercises": [
  {
   "task": "عرّف نفسك بـ 3 جمل: اسمك وشغلك أو دراستك ومدينتك.",
   "hint": "استخدم I am و I am from.",
   "code": "I am Ahmed. I am a student. I am from Assiut.",
   "why": "بعد I بنكتب am, وبعد from بنكتب اسم المكان."
  },
  {
   "task": "اكتب حوار قصير بين اتنين بيتقابلوا الصبح.",
   "hint": "ابدأ بـ Good morning وبعدها How are you.",
   "code": "A: Good morning! How are you? B: I am fine, thank you. And you? A: I am fine too.",
   "why": "التحية ثم السؤال ثم الرد هو الشكل المعتاد."
  }
 ]
},
{
 "id": "tobe2",
 "nav": "النفي والسؤال",
 "title": "to be في النفي والسؤال",
 "subtitle": "تقول لأ، وتسأل سؤال إجابته yes أو no",
 "blocks": [
  {
   "type": "p",
   "text": "عشان تنفي مع to be بتزود `not` بعد الفعل. وعشان تسأل بتقلب الترتيب: بتحط الفعل قبل الضمير."
  },
  {
   "type": "table",
   "head": [
    "إثبات",
    "نفي",
    "سؤال"
   ],
   "rows": [
    [
     "I am late.",
     "I am not late.",
     "Am I late?"
    ],
    [
     "He is a teacher.",
     "He is not a teacher.",
     "Is he a teacher?"
    ],
    [
     "They are here.",
     "They are not here.",
     "Are they here?"
    ]
   ]
  },
  {
   "type": "p",
   "text": "الاختصارات الشائعة: is not = isn't و are not = aren't."
  },
  {
   "type": "h",
   "text": "الإجابات القصيرة"
  },
  {
   "type": "ex",
   "items": [
    [
     "Are you a student? Yes, I am.",
     "إنت طالب؟ أيوه"
    ],
    [
     "Is she a doctor? No, she isn't.",
     "هي دكتورة؟ لأ"
    ],
    [
     "Are they here? Yes, they are.",
     "هما هنا؟ أيوه"
    ]
   ]
  },
  {
   "type": "note",
   "text": "في الإجابة القصيرة بنعيد الفعل بس: Yes, I am. وفي الإثبات الأفضل ما نختصرش الفعل في آخر الجملة."
  }
 ],
 "quiz": [
  {
   "q": "حوّل لسؤال: She is a nurse.",
   "options": [
    {
     "text": "She is a nurse?"
    },
    {
     "text": "Is she a nurse?"
    },
    {
     "text": "Does she a nurse?"
    },
    {
     "text": "Is a nurse she?"
    }
   ],
   "answer": 1,
   "explain": "في السؤال بنقدّم is على الضمير."
  },
  {
   "q": "اختار النفي الصح لـ They are late.",
   "options": [
    {
     "text": "They not are late."
    },
    {
     "text": "They are not late."
    },
    {
     "text": "They do not late."
    },
    {
     "text": "They isn't late."
    }
   ],
   "answer": 1,
   "explain": "كلمة not بتيجي بعد الفعل مباشرة."
  },
  {
   "q": "إيه الإجابة القصيرة الصح لسؤال Are you ready؟",
   "options": [
    {
     "text": "Yes, I do."
    },
    {
     "text": "Yes, I am."
    },
    {
     "text": "Yes, I is."
    },
    {
     "text": "Yes, you are."
    }
   ],
   "answer": 1,
   "explain": "السؤال بـ are والإجابة بـ I بتستخدم am."
  }
 ],
 "exercises": [
  {
   "task": "حوّل الجمل دي لنفي وسؤال: He is tall. We are tired.",
   "hint": "النفي: زوّد not. السؤال: اقلب الترتيب.",
   "code": "He is not tall. / Is he tall? We are not tired. / Are we tired?",
   "why": "في الحالتين الفعل to be هو اللي بيتحرك أو بيتنفى، ومفيش do."
  },
  {
   "task": "اكتب 3 أسئلة yes/no عن زملائك وجاوبها.",
   "hint": "ابدأ بـ Are أو Is.",
   "code": "Are you a student? Yes, I am. Is he from Cairo? No, he isn't. Are they ready? Yes, they are.",
   "why": "الأسئلة دي كلها بتبدأ بالفعل to be."
  }
 ]
},
{
 "id": "articles",
 "nav": "a و an و the والجمع",
 "title": "a و an و the والجمع",
 "subtitle": "إمتى تقول a وإمتى an وإمتى the, وإزاي تجمع الأسماء",
 "blocks": [
  {
   "type": "p",
   "text": "في الإنجليزي بنحط كلمة صغيرة قبل الاسم المفرد: `a` أو `an`. بنستخدم `an` لو الكلمة بتبدأ بصوت متحرك، و `a` لو بتبدأ بصوت ساكن."
  },
  {
   "type": "ex",
   "items": [
    [
     "a book",
     "كتاب"
    ],
    [
     "a car",
     "عربية"
    ],
    [
     "an apple",
     "تفاحة"
    ],
    [
     "an hour",
     "ساعة (حرف h مش بيتنطق)"
    ],
    [
     "a university",
     "جامعة (بتبدأ بصوت \"يو\")"
    ]
   ]
  },
  {
   "type": "h",
   "text": "the"
  },
  {
   "type": "p",
   "text": "`the` بنستخدمها لما نتكلم عن حاجة معينة ومعروفة للسامع: The book on the table is mine."
  },
  {
   "type": "h",
   "text": "الجمع"
  },
  {
   "type": "table",
   "head": [
    "القاعدة",
    "مفرد",
    "جمع"
   ],
   "rows": [
    [
     "زوّد s",
     "book",
     "books"
    ],
    [
     "es بعد s أو x أو ch أو sh",
     "box",
     "boxes"
    ],
    [
     "y بعد ساكن تبقى ies",
     "city",
     "cities"
    ],
    [
     "غير منتظم",
     "man",
     "men"
    ],
    [
     "غير منتظم",
     "child",
     "children"
    ]
   ]
  },
  {
   "type": "note",
   "text": "الاعتماد على الصوت مش على الحرف المكتوب: an hour لكن a university."
  }
 ],
 "quiz": [
  {
   "q": "اختار الصح: ___ apple",
   "options": [
    {
     "text": "a"
    },
    {
     "text": "an"
    },
    {
     "text": "the an"
    },
    {
     "text": "two"
    }
   ],
   "answer": 1,
   "explain": "كلمة apple بتبدأ بصوت متحرك فبنستخدم an."
  },
  {
   "q": "جمع كلمة box؟",
   "options": [
    {
     "text": "boxs"
    },
    {
     "text": "boxes"
    },
    {
     "text": "boxies"
    },
    {
     "text": "box"
    }
   ],
   "answer": 1,
   "explain": "الكلمة بتخلص بـ x فبنزود es."
  },
  {
   "q": "جمع كلمة child؟",
   "options": [
    {
     "text": "childs"
    },
    {
     "text": "childes"
    },
    {
     "text": "children"
    },
    {
     "text": "childrens"
    }
   ],
   "answer": 2,
   "explain": "child جمعها غير منتظم: children."
  }
 ],
 "exercises": [
  {
   "task": "حط a أو an: ___ egg, ___ pen, ___ umbrella, ___ hour, ___ university.",
   "hint": "بص على الصوت مش الحرف.",
   "code": "an egg, a pen, an umbrella, an hour, a university.",
   "why": "hour بتبدأ بصوت متحرك رغم إنها مكتوبة بحرف h."
  },
  {
   "task": "اجمع: city, day, man, watch.",
   "hint": "كل كلمة ليها قاعدة.",
   "code": "cities, days, men, watches.",
   "why": "city بتبقى cities, لكن day بتاخد s بس لأن اللي قبل y حرف متحرك."
  }
 ]
},
{
 "id": "numbers",
 "nav": "الأرقام والتاريخ والوقت",
 "title": "الأرقام والأيام والساعة",
 "subtitle": "تعد، وتقول الساعة، وتحدد ميعاد",
 "blocks": [
  {
   "type": "p",
   "text": "الأرقام من 1 لـ 10: one, two, three, four, five, six, seven, eight, nine, ten. من 13 لـ 19 بتخلص بـ teen: thirteen, fourteen. العشرات بتخلص بـ ty: twenty, thirty, forty."
  },
  {
   "type": "table",
   "head": [
    "الرقم",
    "بالإنجليزي"
   ],
   "rows": [
    [
     "13",
     "thirteen"
    ],
    [
     "30",
     "thirty"
    ],
    [
     "45",
     "forty-five"
    ],
    [
     "100",
     "one hundred"
    ]
   ]
  },
  {
   "type": "h",
   "text": "أيام الأسبوع"
  },
  {
   "type": "p",
   "text": "Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday. أول حرف دايماً كابيتال."
  },
  {
   "type": "h",
   "text": "الساعة"
  },
  {
   "type": "ex",
   "items": [
    [
     "It is three o'clock.",
     "الساعة تلاتة"
    ],
    [
     "It is half past three.",
     "تلاتة ونص"
    ],
    [
     "It is quarter past three.",
     "تلاتة وربع"
    ],
    [
     "It is quarter to four.",
     "أربعة إلا ربع"
    ],
    [
     "What time is it?",
     "الساعة كام؟"
    ]
   ]
  },
  {
   "type": "note",
   "text": "الفرق بين thirteen و thirty في النطق: في thirteen الضغط على آخر الكلمة (teen), وفي thirty الضغط على أولها."
  }
 ],
 "quiz": [
  {
   "q": "إزاي تكتب 15 بالإنجليزي؟",
   "options": [
    {
     "text": "fiveteen"
    },
    {
     "text": "fifteen"
    },
    {
     "text": "fifty"
    },
    {
     "text": "fivety"
    }
   ],
   "answer": 1,
   "explain": "15 هي fifteen, لكن 50 هي fifty."
  },
  {
   "q": "إيه معنى It is half past five؟",
   "options": [
    {
     "text": "خمسة إلا ربع"
    },
    {
     "text": "خمسة ونص"
    },
    {
     "text": "خمسة وربع"
    },
    {
     "text": "ستة بالظبط"
    }
   ],
   "answer": 1,
   "explain": "عبارة half past معناها \"ونص\"."
  },
  {
   "q": "سؤال الساعة هو؟",
   "options": [
    {
     "text": "What time is it?"
    },
    {
     "text": "Which time it is?"
    },
    {
     "text": "How much time?"
    },
    {
     "text": "When is hour?"
    }
   ],
   "answer": 0,
   "explain": "السؤال المعتاد هو What time is it?"
  }
 ],
 "exercises": [
  {
   "task": "اكتب الأرقام دي بالحروف: 12, 20, 33, 100.",
   "hint": "اتبع نمط teen و ty.",
   "code": "twelve, twenty, thirty-three, one hundred.",
   "why": "الأرقام المركبة بنكتبها بشرطة: thirty-three."
  },
  {
   "task": "قول الساعة دي: 7:00, 7:15, 7:30, 7:45.",
   "hint": "استخدم o'clock و quarter past و half past و quarter to.",
   "code": "It is seven o'clock. It is quarter past seven. It is half past seven. It is quarter to eight.",
   "why": "7:45 بتتقال quarter to eight لأنها ناقصة ربع على الساعة 8."
  }
 ]
},
{
 "id": "present_simple",
 "nav": "المضارع البسيط",
 "title": "المضارع البسيط: العادات والحقائق",
 "subtitle": "تتكلم عن روتينك وعن اللي بيحصل دايماً",
 "blocks": [
  {
   "type": "p",
   "text": "المضارع البسيط (Present Simple) بنستخدمه للعادات والحقائق: I study every day. The sun rises in the east."
  },
  {
   "type": "h",
   "text": "الشكل"
  },
  {
   "type": "p",
   "text": "مع I و you و we و they بنستخدم الفعل زي ما هو. مع he و she و it بنزود `s` أو `es` على الفعل."
  },
  {
   "type": "table",
   "head": [
    "الضمير",
    "مثال"
   ],
   "rows": [
    [
     "I",
     "I work."
    ],
    [
     "You / We / They",
     "They work."
    ],
    [
     "He / She / It",
     "She works."
    ]
   ]
  },
  {
   "type": "h",
   "text": "النفي والسؤال"
  },
  {
   "type": "p",
   "text": "بنستخدم do أو does. مع he و she و it بنستخدم `does`، والفعل بيرجع لشكله الأصلي."
  },
  {
   "type": "ex",
   "items": [
    [
     "I do not like tea.",
     "أنا مبحبش الشاي"
    ],
    [
     "She does not like tea.",
     "هي مبتحبش الشاي"
    ],
    [
     "Do you work here?",
     "إنت بتشتغل هنا؟"
    ],
    [
     "Does he work here?",
     "هو بيشتغل هنا؟"
    ]
   ]
  },
  {
   "type": "note",
   "text": "غلطة شائعة: Does he works. الصح: Does he work. حرف الـ s بيروح لـ does."
  }
 ],
 "quiz": [
  {
   "q": "اختار الصح: She ___ English every day.",
   "options": [
    {
     "text": "study"
    },
    {
     "text": "studies"
    },
    {
     "text": "studys"
    },
    {
     "text": "studying"
    }
   ],
   "answer": 1,
   "explain": "study بتنتهي بـ y بعد حرف ساكن فبتبقى studies."
  },
  {
   "q": "اختار الصح: He ___ not like coffee.",
   "options": [
    {
     "text": "do"
    },
    {
     "text": "does"
    },
    {
     "text": "is"
    },
    {
     "text": "are"
    }
   ],
   "answer": 1,
   "explain": "مع he في النفي بنستخدم does."
  },
  {
   "q": "اختار السؤال الصح:",
   "options": [
    {
     "text": "Does she works here?"
    },
    {
     "text": "Do she work here?"
    },
    {
     "text": "Does she work here?"
    },
    {
     "text": "She works here do?"
    }
   ],
   "answer": 2,
   "explain": "بعد does الفعل بيرجع لأصله من غير s."
  }
 ],
 "exercises": [
  {
   "task": "اكتب 4 جمل عن روتينك اليومي بالمضارع البسيط.",
   "hint": "استخدم wake up و go و eat و study.",
   "code": "I wake up at seven. I go to university. I eat lunch at two. I study at night.",
   "why": "مع I الفعل بيفضل زي ما هو."
  },
  {
   "task": "حوّل للنفي وللسؤال: He plays football.",
   "hint": "استخدم does.",
   "code": "He does not play football. / Does he play football?",
   "why": "الفعل بيرجع لأصله بعد does."
  }
 ]
},
{
 "id": "present_cont",
 "nav": "المضارع المستمر",
 "title": "المضارع المستمر: اللي بيحصل دلوقتي",
 "subtitle": "تقول إنت بتعمل إيه في اللحظة دي",
 "blocks": [
  {
   "type": "p",
   "text": "المضارع المستمر (Present Continuous) بنستخدمه للحاجات اللي بتحصل دلوقتي. الشكل: am / is / are + الفعل + `ing`."
  },
  {
   "type": "ex",
   "items": [
    [
     "I am studying English.",
     "أنا بذاكر إنجليزي دلوقتي"
    ],
    [
     "She is cooking.",
     "هي بتطبخ"
    ],
    [
     "They are playing football.",
     "هما بيلعبوا كورة"
    ]
   ]
  },
  {
   "type": "h",
   "text": "إضافة ing"
  },
  {
   "type": "table",
   "head": [
    "القاعدة",
    "الفعل",
    "مع ing"
   ],
   "rows": [
    [
     "زوّد ing",
     "work",
     "working"
    ],
    [
     "شيل e",
     "make",
     "making"
    ],
    [
     "ضاعف الحرف الأخير",
     "run",
     "running"
    ]
   ]
  },
  {
   "type": "h",
   "text": "الفرق بين البسيط والمستمر"
  },
  {
   "type": "ex",
   "items": [
    [
     "I drink tea every day.",
     "عادة"
    ],
    [
     "I am drinking tea now.",
     "دلوقتي"
    ]
   ]
  },
  {
   "type": "note",
   "text": "أفعال زي know و like و want نادراً بنستخدمها مع ing."
  }
 ],
 "quiz": [
  {
   "q": "اختار الصح: She ___ now.",
   "options": [
    {
     "text": "cook"
    },
    {
     "text": "is cooking"
    },
    {
     "text": "cooks"
    },
    {
     "text": "are cooking"
    }
   ],
   "answer": 1,
   "explain": "للحاجة اللي بتحصل دلوقتي بنستخدم is + ing."
  },
  {
   "q": "أضف ing لكلمة make؟",
   "options": [
    {
     "text": "makeing"
    },
    {
     "text": "making"
    },
    {
     "text": "makking"
    },
    {
     "text": "maing"
    }
   ],
   "answer": 1,
   "explain": "بنشيل e ونزود ing."
  },
  {
   "q": "أضف ing لكلمة run؟",
   "options": [
    {
     "text": "runing"
    },
    {
     "text": "running"
    },
    {
     "text": "runeing"
    },
    {
     "text": "runn"
    }
   ],
   "answer": 1,
   "explain": "بنضاعف الحرف الأخير لأن الكلمة قصيرة وبتنتهي بساكن بعد متحرك."
  }
 ],
 "exercises": [
  {
   "task": "اكتب 3 جمل عن اللي بيحصل حواليك دلوقتي.",
   "hint": "استخدم am و is و are + ing.",
   "code": "I am reading. The fan is working. My brother is sleeping.",
   "why": "كل جملة فيها am أو is أو are + فعل بـ ing."
  },
  {
   "task": "صحح: She cooking now. They is playing.",
   "hint": "في فعل مساعد ناقص وفي واحد غلط.",
   "code": "She is cooking now. They are playing.",
   "why": "لازم am أو is أو are قبل الفعل بـ ing."
  }
 ]
}
);
