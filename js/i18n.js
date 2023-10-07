/* ═══════════════════════════════════════════════
   I18N MODULE — Luminaries of Islam v1.3
   Trilingual: العربية / English / Français
   ═══════════════════════════════════════════════ */

const I18N = (() => {
    let currentLang = 'en';

    const translations = {
        // ─── UI STRINGS ───
        ui: {
            appTitle: { ar: 'أنوار الإسلام', en: 'Luminaries of Islam', fr: "Lumières de l'Islam" },
            appSubtitle: { ar: 'علماء العصر الذهبي', en: 'Scientists of the Golden Age', fr: "Scientifiques de l'Âge d'Or" },
            home: { ar: 'الرئيسية', en: 'Home', fr: 'Accueil' },
            scientists: { ar: 'العلماء', en: 'Scientists', fr: 'Scientifiques' },
            timeline: { ar: 'الخط الزمني', en: 'Timeline', fr: 'Chronologie' },
            challenges: { ar: 'التحديات', en: 'Challenges', fr: 'Défis' },
            help: { ar: 'مساعدة', en: 'Help', fr: 'Aide' },
            startExploring: { ar: 'ابدأ الاستكشاف', en: 'Start Exploring', fr: 'Commencer' },
            listen: { ar: 'استمع', en: 'Listen', fr: 'Écouter' },
            searchPlaceholder: { ar: 'ابحث عن عالم أو انطق اسمه...', en: 'Search scientists or say a name...', fr: 'Chercher un scientifique ou dites un nom...' },
            theGreatScholars: { ar: 'العلماء العظام', en: 'The Great Scholars', fr: 'Les Grands Savants' },
            tapCard: { ar: 'اضغط على بطاقة لاكتشاف قصته', en: 'Tap a card to discover their story', fr: 'Cliquez sur une carte pour découvrir son histoire' },
            timelineTitle: { ar: 'خط زمني للاكتشافات', en: 'Timeline of Discovery', fr: 'Chronologie des Découvertes' },
            timelineSubtitle: { ar: 'مرر عبر قرون من التألق', en: 'Scroll through centuries of brilliance', fr: 'Parcourez des siècles de génie' },
            challengeTitle: { ar: 'منطقة التحدي', en: 'Challenge Zone', fr: 'Zone de Défi' },
            challengeSubtitle: { ar: 'اختبر معلوماتك — واحصل على الأوسمة!', en: 'Test your knowledge — earn your badges!', fr: 'Testez vos connaissances — gagnez des badges !' },
            score: { ar: 'النتيجة', en: 'Score', fr: 'Score' },
            question: { ar: 'سؤال', en: 'Question', fr: 'Question' },
            nextQuestion: { ar: 'السؤال التالي ←', en: 'Next Question →', fr: 'Question Suivante →' },
            tryAgain: { ar: 'حاول مرة أخرى', en: 'Try Again', fr: 'Réessayer' },
            readAloud: { ar: 'اقرأ بصوت عالٍ', en: 'Read aloud', fr: 'Lire à voix haute' },
            keyContributions: { ar: 'المساهمات الرئيسية', en: 'Key Contributions', fr: 'Contributions Clés' },
            didYouKnow: { ar: 'هل تعلم؟', en: 'Did You Know?', fr: 'Le Saviez-Vous ?' },
            legacy: { ar: 'الإرث في العلم الحديث', en: 'Legacy in Modern Science', fr: 'Héritage dans la Science Moderne' },
            footerQuote: { ar: '"اطلبوا العلم من المهد إلى اللحد"', en: '"Seek knowledge from the cradle to the grave."', fr: '"Cherchez le savoir du berceau au tombeau."' },
            footerCredit: { ar: 'صُنع بـ ❤️ واحترامٍ للمعرفة', en: 'Built with ❤️ and respect for knowledge', fr: 'Conçu avec ❤️ et respect du savoir' },
            ready: { ar: 'جاهز', en: 'Ready', fr: 'Prêt' },
            all: { ar: 'الكل', en: 'All', fr: 'Tous' },
            century: { ar: 'القرن', en: 'century', fr: 'siècle' },
            // Filters
            mathematics: { ar: 'الرياضيات', en: 'Mathematics', fr: 'Mathématiques' },
            medicine: { ar: 'الطب', en: 'Medicine', fr: 'Médecine' },
            astronomy: { ar: 'الفلك', en: 'Astronomy', fr: 'Astronomie' },
            chemistry: { ar: 'الكيمياء', en: 'Chemistry', fr: 'Chimie' },
            engineering: { ar: 'الهندسة', en: 'Engineering', fr: 'Ingénierie' },
            geography: { ar: 'الجغرافيا', en: 'Geography', fr: 'Géographie' },
            education: { ar: 'التعليم', en: 'Education', fr: 'Éducation' },
            sociology: { ar: 'علم الاجتماع', en: 'Sociology', fr: 'Sociologie' },
            // Badges
            youngScholar: { ar: '🌱 باحث ناشئ', en: '🌱 Young Scholar', fr: '🌱 Jeune Érudit' },
            knowledgeSeeker: { ar: '📚 طالب علم', en: '📚 Knowledge Seeker', fr: '📚 Chercheur de Savoir' },
            goldenAgeExpert: { ar: '🌟 خبير العصر الذهبي', en: '🌟 Golden Age Expert', fr: "🌟 Expert de l'Âge d'Or" },
            // STT
            listening: { ar: 'أستمع...', en: 'Listening...', fr: 'Écoute...' },
            iHeard: { ar: 'سمعت: ', en: 'I heard: ', fr: "J'ai entendu : " },
            didntCatch: { ar: 'لم أفهم. حاول مرة أخرى؟', en: "Didn't catch that. Try again?", fr: "Je n'ai pas compris. Réessayez ?" },
            micDenied: { ar: 'تم رفض الوصول للميكروفون', en: 'Microphone access denied', fr: 'Accès au microphone refusé' },
            voiceNotRecognized: { ar: 'لم أتعرف على الإجابة. حاول الضغط بدلاً من ذلك!', en: "I didn't recognize that answer. Try clicking an option instead!", fr: "Je n'ai pas reconnu cette réponse. Essayez de cliquer !" },
        },

        // ─── WELCOME MESSAGE (for TTS) ───
        welcome: {
            ar: 'السلام عليكم! مرحباً بكم في أنوار الإسلام. قبل العلم الحديث بقرون، أنار العلماء المسلمون العالم بالمعرفة والاكتشاف والحكمة. هيا نستكشف قصصهم المذهلة معاً!',
            en: "Assalamu Alaikum! Welcome to Luminaries of Islam. Centuries before modern science, Muslim scholars illuminated the world with knowledge, discovery, and wisdom. Let's explore their incredible stories together!",
            fr: "Assalamu Alaikum ! Bienvenue dans Lumières de l'Islam. Des siècles avant la science moderne, les savants musulmans ont illuminé le monde par le savoir, la découverte et la sagesse. Explorons ensemble leurs histoires incroyables !"
        },

        heroSubtitle: {
            ar: 'قبل العلم الحديث بقرون، أنار العلماء المسلمون العالم بالمعرفة والاكتشاف والحكمة.',
            en: 'Centuries before modern science, Muslim scholars illuminated the world with knowledge, discovery, and wisdom.',
            fr: 'Des siècles avant la science moderne, les savants musulmans ont illuminé le monde par le savoir, la découverte et la sagesse.'
        },

        // ─── QUIZ REFLECTION ───
        reflection: {
            expert: {
                title: { ar: '🌟 خبير العصر الذهبي!', en: '🌟 Golden Age Expert!', fr: "🌟 Expert de l'Âge d'Or !" },
                text: { ar: 'ما شاء الله! ممتاز! أنت تعرف هؤلاء العلماء حق المعرفة. سعيهم للعلم يستمر في عقول فضولية مثلك!', en: "MashaAllah! Outstanding! You truly know these amazing scholars. Their quest for knowledge lives on in curious minds like yours!", fr: "MashaAllah ! Exceptionnel ! Vous connaissez vraiment ces savants remarquables. Leur quête du savoir se perpétue dans des esprits curieux comme le vôtre !" }
            },
            seeker: {
                title: { ar: '📚 طالب علم!', en: '📚 Knowledge Seeker!', fr: '📚 Chercheur de Savoir !' },
                text: { ar: 'عمل رائع! أنت تتعلم قصص علماء مذهلين. استمر في الاستكشاف — كل عالم بدأ كطالب!', en: "Great work! You're learning the stories of some incredible scientists. Keep exploring — every scholar started as a student!", fr: "Excellent travail ! Vous apprenez les histoires de scientifiques incroyables. Continuez — tout savant a commencé comme étudiant !" }
            },
            scholar: {
                title: { ar: '🌱 باحث ناشئ!', en: '🌱 Young Scholar!', fr: '🌱 Jeune Érudit !' },
                text: { ar: 'بداية جيدة! كل عالم عظيم بدأ بطرح الأسئلة. ارجع واستكشف قصص العلماء، ثم حاول مرة أخرى!', en: "Good start! Every great scientist began by asking questions. Go back and explore the scientists' stories, then try again!", fr: "Bon début ! Tout grand scientifique a commencé par poser des questions. Retournez explorer les histoires, puis réessayez !" }
            }
        }
    };

    // ─── SCIENTIST TRANSLATIONS ───
    const scientistI18n = {
        khwarizmi: {
            fieldLabel: { ar: 'الرياضيات والجبر', en: 'Mathematics & Algebra', fr: 'Mathématiques & Algèbre' },
            oneliner: {
                ar: 'أبو الجبر — كلمة "خوارزمية" مشتقة من اسمه!',
                en: 'Father of Algebra — the word "algorithm" comes from his name!',
                fr: "Père de l'Algèbre — le mot « algorithme » vient de son nom !"
            },
            bio: {
                newb: {
                    ar: 'تخيل أن لديك لغز أرقام غامض: "شيء ما زائد 3 يساوي 7 — ما هو هذا الشيء؟" الخوارزمي اخترع نظاماً كاملاً لحل ألغاز كهذه! سماه "الجبر". قبله، كان الناس يعانون مع هذه المسائل. كتب كتاباً يقول: "إليكم وصفة لحل أي لغز عددي." وكلمة "خوارزمية" — التعليمات خطوة بخطوة التي يستخدمها حاسوبك كل يوم — مشتقة من اسمه!',
                    en: "Imagine you have a mystery number puzzle: \"Something plus 3 equals 7 — what's the something?\" Al-Khwarizmi invented a whole system to solve puzzles like this! He called it \"al-jabr\" (algebra). Before him, people struggled with these problems. He wrote a book that basically said: \"Here's a recipe to solve ANY number puzzle.\" The word \"algorithm\" — the step-by-step instructions your computer uses every day — comes from his name!",
                    fr: "Imagine un puzzle mystère : « Quelque chose plus 3 égale 7 — c'est quoi ? » Al-Khwarizmi a inventé tout un système pour résoudre ce genre de puzzles ! Il l'a appelé « al-jabr » (algèbre). Avant lui, les gens galéraient. Il a écrit un livre qui disait : « Voici une recette pour résoudre N'IMPORTE quel puzzle numérique. » Le mot « algorithme » vient de son nom !"
                },
                explorer: {
                    ar: 'محمد بن موسى الخوارزمي كان عالم رياضيات وفلك وجغرافيا فارسياً عمل في بيت الحكمة ببغداد. كتابه الرائد "الكتاب المختصر في حساب الجبر والمقابلة" نظّم حل المعادلات الخطية والتربيعية. كما قدّم الأرقام الهندية-العربية للعالم الغربي.',
                    en: "Muhammad ibn Musa al-Khwarizmi was a Persian mathematician, astronomer, and geographer working at the House of Wisdom in Baghdad. His groundbreaking work 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' systematized the solving of linear and quadratic equations. He introduced Hindu-Arabic numerals to the Western world.",
                    fr: "Muhammad ibn Musa al-Khwarizmi était un mathématicien, astronome et géographe perse travaillant à la Maison de la Sagesse à Bagdad. Son œuvre révolutionnaire a systématisé la résolution des équations linéaires et quadratiques. Il a introduit les chiffres indo-arabes en Occident."
                },
                developer: {
                    ar: 'مساهمات الخوارزمي تمثل تحولاً جذرياً في الرياضيات. طرقه الجبرية قدمت أول نهج منظم لحل المعادلات متعددة الحدود من الدرجة الأولى والثانية. كتابه "خوارزمي عن العدد الهندي" كان الوسيلة التي وصل بها النظام العددي الهندي-العربي (بما فيه الصفر) إلى أوروبا. اسمه اللاتيني "Algoritmi" أصبح كلمة "خوارزمية"، المفهوم الأساسي لعلم الحاسوب.',
                    en: "Al-Khwarizmi's contributions represent a paradigm shift in mathematics. His algebraic methods provided the first systematic approach to solving polynomial equations of first and second degree. The Latin translation of his name — 'Algoritmi' — became 'algorithm', now the foundational concept of computer science. His integration of Greek, Indian, and Babylonian mathematical traditions created the framework for modern mathematics.",
                    fr: "Les contributions d'Al-Khwarizmi représentent un changement de paradigme en mathématiques. Ses méthodes algébriques ont fourni la première approche systématique pour résoudre les équations polynomiales. La traduction latine de son nom — « Algoritmi » — est devenue « algorithme », concept fondamental de l'informatique. Son intégration des traditions mathématiques grecques, indiennes et babyloniennes a créé le cadre des mathématiques modernes."
                }
            },
            contributions: {
                ar: ['اخترع الجبر كتخصص منهجي', 'قدّم الأرقام الهندية-العربية للعالم', 'أنشأ جداول فلكية', 'طوّر الجغرافيا ورسم الخرائط', 'طوّر طرق حل المعادلات التربيعية'],
                en: ['Invented algebra as a systematic discipline', 'Introduced Hindu-Arabic numerals to the world', 'Created astronomical tables (Zij al-Sindhind)', 'Advanced geography and cartography', 'Developed methods for solving quadratic equations'],
                fr: ["A inventé l'algèbre comme discipline systématique", 'A introduit les chiffres indo-arabes dans le monde', 'A créé des tables astronomiques', 'A avancé la géographie et la cartographie', 'A développé des méthodes de résolution des équations quadratiques']
            },
            funFact: {
                ar: 'في كل مرة يشغّل هاتفك تطبيقاً، فهو يشغّل "خوارزميات" — مسماة على اسم الخوارزمي! هو الجد الأكبر لكل برنامج حاسوبي كُتب على الإطلاق.',
                en: "Every time your phone runs an app, it's running \"algorithms\" — named after Al-Khwarizmi! He's basically the great-great-great-grandfather of every computer program ever written.",
                fr: "Chaque fois que votre téléphone lance une application, il exécute des « algorithmes » — nommés d'après Al-Khwarizmi ! Il est l'ancêtre de tout programme informatique jamais écrit."
            },
            legacy: {
                ar: 'بدون الخوارزمي، لما كان هناك علم جبر ولا علم حاسوب. نهجه المنظم لحل المسائل الرياضية هو السلف المباشر للبرمجة الحديثة. الأرقام التي تستخدمها كل يوم وصلت لأوروبا عبر أعماله.',
                en: "Without Al-Khwarizmi, there would be no algebra class, but also no computer science. His systematic approach to mathematical problem-solving is the direct ancestor of modern programming. The numerals you use every day (0, 1, 2, 3...) reached Europe through his works.",
                fr: "Sans Al-Khwarizmi, il n'y aurait ni cours d'algèbre, ni informatique. Son approche systématique est l'ancêtre direct de la programmation moderne. Les chiffres que vous utilisez tous les jours (0, 1, 2, 3...) sont arrivés en Europe grâce à ses travaux."
            }
        },
        'ibn-alhaytham': {
            fieldLabel: { ar: 'البصريات والمنهج العلمي', en: 'Optics & Scientific Method', fr: 'Optique & Méthode Scientifique' },
            oneliner: { ar: 'أبو البصريات — اكتشف كيف نرى فعلاً!', en: 'Father of Optics — he figured out how we actually see!', fr: 'Père de l\'Optique — il a compris comment nous voyons !' },
            bio: {
                newb: { ar: 'هل تساءلت يوماً كيف تعمل عيناك؟ لألف سنة، اعتقد الناس أن العيون تطلق أشعة غير مرئية! ابن الهيثم قال: "انتظروا... هذا لا معنى له. الضوء يأتي من الأشياء إلى أعيننا!" أثبت ذلك بتجارب باستخدام غرفة مظلمة بها ثقب صغير (أول كاميرا!).',
                    en: "Have you ever wondered how your eyes actually work? For a THOUSAND years, people thought our eyes shoot out invisible beams! Ibn al-Haytham said: \"Wait... that doesn't make sense. Light comes FROM objects INTO our eyes!\" He proved it with experiments using a dark room with a tiny hole (basically the first camera!).",
                    fr: "Vous êtes-vous déjà demandé comment vos yeux fonctionnent ? Pendant MILLE ans, les gens pensaient que nos yeux émettaient des rayons invisibles ! Ibn al-Haytham a dit : « Attendez... ça n'a pas de sens. La lumière vient DES objets DANS nos yeux ! » Il l'a prouvé avec des expériences." },
                explorer: { ar: 'أبو علي الحسن بن الهيثم كان عالماً موسوعياً ولد في البصرة. كتابه "كتاب المناظر" أثبت أن الضوء يدخل العين وليس العكس. وصف الغرفة المظلمة، وشرح الانعكاس والانكسار.',
                    en: "Abu Ali al-Hasan ibn al-Haytham was a polymath born in Basra. His 'Kitab al-Manazir' (Book of Optics) definitively disproved the emission theory of vision and established the intromission theory. He described the camera obscura and pioneered the scientific method.",
                    fr: "Abu Ali al-Hasan ibn al-Haytham était un polymathe né à Bassora. Son 'Kitab al-Manazir' a définitivement réfuté la théorie de l'émission et établi la théorie de l'intromission. Il a décrit la camera obscura et pionnier de la méthode scientifique." },
                developer: { ar: 'عمل ابن الهيثم يمثل أهم تحول في تاريخ العلم. "كتاب المناظر" (7 مجلدات) جمع بين التحليل الرياضي الدقيق والتجريب المنضبط — منهجية لم تُطبق في أوروبا إلا بعد 600 سنة. أثّر في روجر بيكون وكبلر وديكارت ونيوتن.',
                    en: "Ibn al-Haytham's work represents perhaps the most significant paradigm shift in the history of science. His 'Kitab al-Manazir' (7 volumes) combined rigorous mathematical analysis with controlled experimentation — a methodology that wouldn't be formalized in Europe for another 600 years.",
                    fr: "L'œuvre d'Ibn al-Haytham représente peut-être le changement de paradigme le plus significatif de l'histoire des sciences. Son 'Kitab al-Manazir' (7 volumes) a combiné analyse mathématique rigoureuse et expérimentation contrôlée — une méthodologie qui ne serait formalisée en Europe que 600 ans plus tard." }
            },
            contributions: { ar: ['أثبت أن الرؤية تعمل بدخول الضوء للعين', 'وصف الغرفة المظلمة (الكاميرا)', 'ريادة المنهج العلمي التجريبي', 'كتب كتاب المناظر', 'فهم الانعكاس والانكسار'], en: ['Proved that vision works by light entering the eye', 'Described the camera obscura', 'Pioneered the experimental scientific method', 'Wrote the Book of Optics', 'Advanced understanding of reflection and refraction'], fr: ["A prouvé que la vision fonctionne par la lumière entrant dans l'œil", 'A décrit la camera obscura', 'A été pionnier de la méthode scientifique expérimentale', "A écrit le Livre d'Optique", "A avancé la compréhension de la réflexion et la réfraction"] },
            funFact: { ar: 'بنى ابن الهيثم "غرفة مظلمة" بثقب صغير لدراسة الضوء. تخيل ماذا نسميها اليوم؟ كاميرا! كل صورة سيلفي تلتقطها تستخدم اكتشافه!', en: 'Ibn al-Haytham built a "dark room" with a tiny hole to study light. Every selfie you take uses his discovery!', fr: "Ibn al-Haytham a construit une « chambre noire » avec un petit trou pour étudier la lumière. Chaque selfie que vous prenez utilise sa découverte !" },
            legacy: { ar: 'يُعتبر ابن الهيثم أبا البصريات الحديثة والمنهج العلمي. إصراره على اختبار الأفكار بالتجارب وضع أساس كل العلوم الحديثة.', en: "Ibn al-Haytham is considered the father of modern optics AND the scientific method. His insistence on testing ideas through experiments laid the foundation for all of modern science.", fr: "Ibn al-Haytham est considéré comme le père de l'optique moderne ET de la méthode scientifique. Son insistance à tester les idées par l'expérimentation a posé les fondations de toute la science moderne." }
        },
        // Shorter entries for remaining scientists (key fields only)
        'ibn-sina': {
            fieldLabel: { ar: 'الطب والفلسفة', en: 'Medicine & Philosophy', fr: 'Médecine & Philosophie' },
            oneliner: { ar: 'أمير الأطباء — موسوعته الطبية استُخدمت لـ 600 سنة!', en: 'Prince of Physicians — his medical encyclopedia was used for 600 years!', fr: 'Prince des Médecins — son encyclopédie médicale a été utilisée pendant 600 ans !' },
            funFact: { ar: 'حفظ ابن سينا القرآن كاملاً في سن العاشرة، وبحلول الثامنة عشرة أتقن كل العلوم المعروفة في زمنه!', en: "Ibn Sina memorized the entire Quran by age 10, and by 18 he mastered ALL the sciences known in his time!", fr: "Ibn Sina a mémorisé le Coran entier à 10 ans, et à 18 ans il maîtrisait TOUTES les sciences de son époque !" },
            legacy: { ar: 'كان القانون في الطب لابن سينا المرجع المعتمد في التعليم الطبي لأكثر من 600 سنة.', en: "Ibn Sina's Canon of Medicine was the gold standard in medical education for over 600 years.", fr: "Le Canon de Médecine d'Ibn Sina a été la référence en éducation médicale pendant plus de 600 ans." }
        },
        'al-razi': {
            fieldLabel: { ar: 'الطب والكيمياء', en: 'Medicine & Chemistry', fr: 'Médecine & Chimie' },
            oneliner: { ar: 'أول من ميّز الجدري عن الحصبة — ورائد الكيمياء!', en: 'First to distinguish smallpox from measles — and a pioneer of chemistry!', fr: 'Premier à distinguer la variole de la rougeole — et pionnier de la chimie !' },
            funFact: { ar: 'اختار الرازي موقع المستشفى بتعليق قطع لحم في أنحاء المدينة — حيث تفسد ببطء أكثر، الهواء أنظف!', en: "Al-Razi chose where to build a hospital by hanging meat around the city — where it rotted slowest, the air was cleanest!", fr: "Al-Razi a choisi l'emplacement de l'hôpital en suspendant de la viande dans la ville — là où elle pourrissait le moins vite, l'air était le plus pur !" },
            legacy: { ar: 'تركيز الرازي على الملاحظة السريرية والتجارب المنضبطة هو السلف المباشر للطب الحديث القائم على الأدلة.', en: "Al-Razi's emphasis on clinical observation and controlled experiments are direct ancestors of modern evidence-based medicine.", fr: "L'accent d'Al-Razi sur l'observation clinique et les expériences contrôlées sont les ancêtres directs de la médecine moderne basée sur les preuves." }
        },
        'al-biruni': {
            fieldLabel: { ar: 'الفلك والجغرافيا', en: 'Astronomy & Geography', fr: 'Astronomie & Géographie' },
            oneliner: { ar: 'حسب نصف قطر الأرض بدقة 99.7% — في سنة 1000!', en: "He calculated Earth's radius with 99.7% accuracy — in the year 1000!", fr: "Il a calculé le rayon de la Terre avec 99,7% de précision — en l'an 1000 !" },
            funFact: { ar: 'كان البيروني يتحدث 6 لغات على الأقل وكتب أكثر من 140 كتاباً. تعلم السنسكريتية في سن الخمسين!', en: "Al-Biruni spoke at least 6 languages and wrote over 140 books. He even learned Sanskrit at age 50!", fr: "Al-Biruni parlait au moins 6 langues et a écrit plus de 140 livres. Il a même appris le sanskrit à 50 ans !" },
            legacy: { ar: 'قياس البيروني للأرض هو من أعظم الإنجازات العلمية في العصور الوسطى.', en: "Al-Biruni's measurement of Earth is one of the most impressive scientific achievements of the medieval world.", fr: "La mesure de la Terre par Al-Biruni est l'une des réalisations scientifiques les plus impressionnantes du monde médiéval." }
        },
        jabir: {
            fieldLabel: { ar: 'الكيمياء', en: 'Chemistry', fr: 'Chimie' },
            oneliner: { ar: 'أبو الكيمياء — اخترع التقطير واكتشف الأحماض!', en: 'Father of Chemistry — he invented distillation and discovered acids!', fr: 'Père de la Chimie — il a inventé la distillation et découvert des acides !' },
            funFact: { ar: 'يعتقد البعض أن كلمة "gibberish" بالإنجليزية مشتقة من "جابر" — لأن كتاباته الكيميائية كانت متقدمة جداً فظنها الأوروبيون هراءً!', en: "Some people think the word \"gibberish\" comes from \"Jabir\" — because his chemical writings were so advanced that Europeans couldn't understand them!", fr: "Certains pensent que le mot « gibberish » (charabia) vient de « Jabir » — car ses écrits chimiques étaient si avancés que les Européens ne les comprenaient pas !" },
            legacy: { ar: 'يُلقب جابر بن حيان بحق بأبي الكيمياء. كل مختبر كيمياء في العالم يستخدم تقنيات ابتكرها.', en: "Jabir ibn Hayyan is rightly called the Father of Chemistry. Every chemistry lab in the world uses techniques he pioneered.", fr: "Jabir ibn Hayyan est justement appelé le Père de la Chimie. Chaque laboratoire de chimie au monde utilise des techniques qu'il a inventées." }
        },
        'al-zahrawi': {
            fieldLabel: { ar: 'الجراحة', en: 'Surgery', fr: 'Chirurgie' },
            oneliner: { ar: 'أبو الجراحة — صمم أكثر من 200 أداة جراحية!', en: 'Father of Surgery — he designed over 200 surgical instruments!', fr: 'Père de la Chirurgie — il a conçu plus de 200 instruments chirurgicaux !' },
            funFact: { ar: 'عالج الزهراوي جارية ابتلعت دبوساً — اخترع أداة خاصة لحالتها، واستخرج الدبوس من حلقها!', en: "Al-Zahrawi once treated a slave girl who had swallowed a pin — he invented a special tool just for her case and pulled it out!", fr: "Al-Zahrawi a traité une jeune fille qui avait avalé une épingle — il a inventé un outil spécial pour son cas et l'a retirée !" },
            legacy: { ar: 'ظلت أدوات وتقنيات الزهراوي الجراحية المعيار الذهبي لخمسة قرون.', en: "Al-Zahrawi's surgical instruments and techniques remained the gold standard for five centuries.", fr: "Les instruments et techniques chirurgicaux d'Al-Zahrawi sont restés la référence pendant cinq siècles." }
        },
        'al-idrisi': {
            fieldLabel: { ar: 'الجغرافيا ورسم الخرائط', en: 'Geography & Cartography', fr: 'Géographie & Cartographie' },
            oneliner: { ar: 'صنع أدق خريطة للعالم في زمنه — لمدة 300 سنة!', en: 'Created the most accurate world map of his time — for 300 years!', fr: 'A créé la carte du monde la plus précise de son époque — pendant 300 ans !' },
            funFact: { ar: 'خريطة الإدريسي كانت مرسومة "بالمقلوب" حسب معاييرنا — الجنوب في الأعلى! اقلبها وستندهش من دقتها!', en: "Al-Idrisi's map was drawn \"upside down\" by our standards — south at the top! Flip it and you'll be amazed at how accurate it is!", fr: "La carte d'Al-Idrisi était dessinée « à l'envers » selon nos normes — le sud en haut ! Retournez-la et vous serez étonné de sa précision !" },
            legacy: { ar: 'مثلت خرائط الإدريسي قمة رسم الخرائط في العصور الوسطى لثلاثة قرون.', en: "Al-Idrisi's maps represented the pinnacle of medieval cartography for three centuries.", fr: "Les cartes d'Al-Idrisi représentaient le sommet de la cartographie médiévale pendant trois siècles." }
        },
        'ibn-khaldun': {
            fieldLabel: { ar: 'علم الاجتماع والتاريخ', en: 'Sociology & History', fr: 'Sociologie & Histoire' },
            oneliner: { ar: 'أبو علم الاجتماع — اكتشف لماذا تنهض الحضارات وتسقط!', en: 'Father of Sociology — he figured out WHY civilizations rise and fall!', fr: 'Père de la Sociologie — il a compris POURQUOI les civilisations montent et tombent !' },
            funFact: { ar: 'نظرية ابن خلدون عن الضرائب حديثة بشكل مذهل — قال أنه عندما ترفع الحكومات الضرائب كثيراً، يتوقف الناس عن العمل وتنخفض الإيرادات. اقتصاديون بعده بـ 600 سنة "اكتشفوا" نفس الشيء!', en: "Ibn Khaldun's theory about taxes is eerily modern — he said when governments raise taxes too high, people stop working and revenue DROPS. Economists 600 years later \"discovered\" the same thing!", fr: "La théorie d'Ibn Khaldun sur les impôts est étrangement moderne — il a dit que quand les gouvernements augmentent trop les impôts, les gens arrêtent de travailler et les revenus BAISSENT. Des économistes 600 ans plus tard ont « découvert » la même chose !" },
            legacy: { ar: 'يُعتبر ابن خلدون مؤسس علم الاجتماع والتأريخ والديموغرافيا.', en: "Ibn Khaldun is considered the father of sociology, historiography, and demography.", fr: "Ibn Khaldun est considéré comme le père de la sociologie, l'historiographie et la démographie." }
        },
        'al-jazari': {
            fieldLabel: { ar: 'الهندسة والروبوتات', en: 'Engineering & Robotics', fr: 'Ingénierie & Robotique' },
            oneliner: { ar: 'أبو الروبوتات — بنى آلات موسيقية مبرمجة قبل 800 سنة!', en: 'Father of Robotics — he built programmable automata 800 years ago!', fr: "Père de la Robotique — il a construit des automates programmables il y a 800 ans !" },
            funFact: { ar: 'بنى الجزري جهاز غسل يدين آلي: تقترب من طاووس آلي فيصب الماء على يديك، ويقدم الصابون، ثم يناولك المنشفة — كل شيء تلقائياً!', en: "Al-Jazari built an automatic hand-washing device: a peacock automaton would pour water, offer soap, then hand you a towel — ALL automatically!", fr: "Al-Jazari a construit un dispositif de lavage de mains automatique : un automate en forme de paon versait l'eau, offrait le savon, puis vous tendait une serviette — TOUT automatiquement !" },
            legacy: { ar: 'آلية عمود الكرنك التي اخترعها الجزري ضرورية لكل محرك سيارة اليوم.', en: "Al-Jazari's crankshaft mechanism is essential to every car engine today.", fr: "Le mécanisme de vilebrequin d'Al-Jazari est essentiel à chaque moteur de voiture aujourd'hui." }
        },
        'omar-khayyam': {
            fieldLabel: { ar: 'الرياضيات والفلك', en: 'Mathematics & Astronomy', fr: 'Mathématiques & Astronomie' },
            oneliner: { ar: 'حل المعادلات التكعيبية وصنع تقويماً أدق من تقويمنا!', en: 'He solved cubic equations and created a calendar more accurate than ours!', fr: 'Il a résolu des équations cubiques et créé un calendrier plus précis que le nôtre !' },
            funFact: { ar: 'التقويم الجلالي الذي صممه عمر الخيام أدق من التقويم الغريغوري! تقويمه ينحرف يوماً واحداً كل 5000 سنة. تقويمنا الحديث؟ يوم كل 3236 سنة!', en: "Omar Khayyam's Jalali calendar is MORE accurate than our Gregorian calendar! Off by only 1 day in 5,000 years vs. 1 day in 3,236 for ours!", fr: "Le calendrier Jalali d'Omar Khayyam est PLUS précis que notre calendrier grégorien ! Décalé d'un jour tous les 5000 ans contre 1 jour tous les 3236 ans pour le nôtre !" },
            legacy: { ar: 'حلول الخيام الهندسية للمعادلات التكعيبية مثلت قمة الجبر في العصور الوسطى.', en: "Khayyam's geometric solutions to cubic equations represented the height of medieval algebra.", fr: "Les solutions géométriques de Khayyam aux équations cubiques représentaient l'apogée de l'algèbre médiévale." }
        },
        'fatima-fihri': {
            fieldLabel: { ar: 'التعليم', en: 'Education', fr: 'Éducation' },
            oneliner: { ar: 'أسست أقدم جامعة في العالم — لا تزال تعمل حتى اليوم!', en: "She founded the world's first university — still running today!", fr: "Elle a fondé la première université au monde — toujours en activité !" },
            funFact: { ar: 'جامعة القرويين التي أسستها فاطمة الفهرية سنة 859م لا تزال تعمل حتى اليوم — أكثر من 1100 سنة! هارفارد (1636) طفل مقارنة بها!', en: "Al-Qarawiyyin University, founded in 859 CE, is STILL operating today — over 1,100 years! Harvard (1636) is a baby compared to it!", fr: "L'Université Al-Qarawiyyin, fondée en 859, fonctionne TOUJOURS aujourd'hui — plus de 1100 ans ! Harvard (1636) est un bébé en comparaison !" },
            legacy: { ar: 'نموذج جامعة فاطمة الفهرية — الممول بالأوقاف، مع مناهج منظمة وشهادات — أثّر في المؤسسات التعليمية حول العالم.', en: "Fatima al-Fihri's university model — endowment-funded, with structured curricula and degrees — influenced educational institutions across the world.", fr: "Le modèle universitaire de Fatima al-Fihri — financé par des dotations, avec des programmes structurés et des diplômes — a influencé les institutions éducatives du monde entier." }
        }
    };

    // ─── QUIZ TRANSLATIONS ───
    const quizI18n = [
        {
            question: { ar: 'من يُعرف بأبي الجبر؟', en: 'Who is known as the Father of Algebra?', fr: "Qui est connu comme le Père de l'Algèbre ?" },
            options: { ar: ['ابن سينا', 'الخوارزمي', 'عمر الخيام', 'البيروني'], en: ['Ibn Sina', 'Al-Khwarizmi', 'Omar Khayyam', 'Al-Biruni'], fr: ['Ibn Sina', 'Al-Khwarizmi', 'Omar Khayyam', 'Al-Biruni'] },
            correct: 1,
            feedback: { correct: { ar: 'ما شاء الله! صحيح! كتاب الخوارزمي "الجبر" أعطى الجبر اسمه!', en: "MashaAllah! Correct! Al-Khwarizmi's book 'al-Jabr' gave algebra its name!", fr: "MashaAllah ! Correct ! Le livre d'Al-Khwarizmi 'al-Jabr' a donné son nom à l'algèbre !" }, wrong: { ar: 'ليس تماماً! الجواب هو الخوارزمي — كلمة "جبر" مشتقة من كتابه.', en: "Not quite! The answer is Al-Khwarizmi — the word 'algebra' comes from his book 'al-Jabr'.", fr: "Pas tout à fait ! La réponse est Al-Khwarizmi — le mot « algèbre » vient de son livre." } }
        },
        {
            question: { ar: 'أي عالم أثبت أن الضوء يدخل العين؟', en: 'Which scientist proved that light enters the eye?', fr: "Quel scientifique a prouvé que la lumière entre dans l'œil ?" },
            options: { ar: ['الرازي', 'جابر بن حيان', 'ابن الهيثم', 'الزهراوي'], en: ['Al-Razi', 'Jabir ibn Hayyan', 'Ibn al-Haytham', 'Al-Zahrawi'], fr: ['Al-Razi', 'Jabir ibn Hayyan', 'Ibn al-Haytham', 'Al-Zahrawi'] },
            correct: 2,
            feedback: { correct: { ar: 'ممتاز! ابن الهيثم ثوّر فهمنا للرؤية والضوء!', en: 'Excellent! Ibn al-Haytham revolutionized our understanding of vision and light!', fr: "Excellent ! Ibn al-Haytham a révolutionné notre compréhension de la vision et de la lumière !" }, wrong: { ar: 'محاولة جيدة! الجواب هو ابن الهيثم الذي أثبت نظرية دخول الضوء للعين.', en: 'Nice try! It was Ibn al-Haytham who proved the intromission theory of vision.', fr: "Bel essai ! C'était Ibn al-Haytham qui a prouvé la théorie de l'intromission." } }
        },
        {
            question: { ar: 'موسوعة من الطبية استُخدمت لأكثر من 600 سنة؟', en: 'Whose medical encyclopedia was used for over 600 years?', fr: "L'encyclopédie médicale de qui a été utilisée pendant plus de 600 ans ?" },
            options: { ar: ['الزهراوي', 'الرازي', 'ابن سينا', 'البيروني'], en: ['Al-Zahrawi', 'Al-Razi', 'Ibn Sina', 'Al-Biruni'], fr: ['Al-Zahrawi', 'Al-Razi', 'Ibn Sina', 'Al-Biruni'] },
            correct: 2,
            feedback: { correct: { ar: 'صحيح! القانون في الطب لابن سينا كان المرجع المعتمد لقرون!', en: "Correct! Ibn Sina's Canon of Medicine was the gold standard for centuries!", fr: "Correct ! Le Canon de Médecine d'Ibn Sina a été la référence pendant des siècles !" }, wrong: { ar: 'الجواب هو ابن سينا — استُخدم قانونه في الطب من القرن 11 إلى 17.', en: "The answer is Ibn Sina — his Canon of Medicine was used from the 11th to 17th century.", fr: "La réponse est Ibn Sina — son Canon de Médecine a été utilisé du 11e au 17e siècle." } }
        },
        {
            question: { ar: 'من صمم أكثر من 200 أداة جراحية؟', en: 'Who designed over 200 surgical instruments?', fr: 'Qui a conçu plus de 200 instruments chirurgicaux ?' },
            options: { ar: ['الزهراوي', 'ابن سينا', 'الرازي', 'جابر بن حيان'], en: ['Al-Zahrawi', 'Ibn Sina', 'Al-Razi', 'Jabir ibn Hayyan'], fr: ['Al-Zahrawi', 'Ibn Sina', 'Al-Razi', 'Jabir ibn Hayyan'] },
            correct: 0,
            feedback: { correct: { ar: 'ما شاء الله! أدوات الزهراوي الجراحية لا تزال أساس أدوات كثيرة حديثة!', en: "MashaAllah! Al-Zahrawi's instruments are still the basis of many modern tools!", fr: "MashaAllah ! Les instruments d'Al-Zahrawi sont encore la base de nombreux outils modernes !" }, wrong: { ar: 'الجواب هو الزهراوي — صمم أكثر من 200 أداة وكتب أول أطلس جراحي.', en: 'The answer is Al-Zahrawi — he designed over 200 instruments and wrote the first surgical atlas.', fr: "La réponse est Al-Zahrawi — il a conçu plus de 200 instruments et écrit le premier atlas chirurgical." } }
        },
        {
            question: { ar: 'من حسب نصف قطر الأرض بدقة 99.7%؟', en: "Who calculated Earth's radius with 99.7% accuracy?", fr: 'Qui a calculé le rayon de la Terre avec 99,7% de précision ?' },
            options: { ar: ['عمر الخيام', 'الإدريسي', 'البيروني', 'الخوارزمي'], en: ['Omar Khayyam', 'Al-Idrisi', 'Al-Biruni', 'Al-Khwarizmi'], fr: ['Omar Khayyam', 'Al-Idrisi', 'Al-Biruni', 'Al-Khwarizmi'] },
            correct: 2,
            feedback: { correct: { ar: 'مذهل! البيروني استخدم جبلاً وحساب المثلثات فقط لقياس كوكبنا!', en: 'Amazing! Al-Biruni used just a mountain and trigonometry to measure our planet!', fr: "Incroyable ! Al-Biruni a utilisé juste une montagne et la trigonométrie pour mesurer notre planète !" }, wrong: { ar: 'الجواب هو البيروني الذي حسب نصف قطر الأرض بجبل ورياضيات.', en: "It was Al-Biruni who calculated Earth's radius using a mountain and math.", fr: "C'était Al-Biruni qui a calculé le rayon de la Terre avec une montagne et des mathématiques." } }
        },
        {
            question: { ar: 'من يُعرف بأبي الكيمياء؟', en: 'Who is known as the Father of Chemistry?', fr: 'Qui est connu comme le Père de la Chimie ?' },
            options: { ar: ['الرازي', 'جابر بن حيان', 'ابن سينا', 'البيروني'], en: ['Al-Razi', 'Jabir ibn Hayyan', 'Ibn Sina', 'Al-Biruni'], fr: ['Al-Razi', 'Jabir ibn Hayyan', 'Ibn Sina', 'Al-Biruni'] },
            correct: 1,
            feedback: { correct: { ar: 'صحيح! حوّل جابر بن حيان الكيمياء من خيمياء إلى علم تجريبي حقيقي!', en: 'Correct! Jabir ibn Hayyan transformed alchemy into a true experimental science!', fr: "Correct ! Jabir ibn Hayyan a transformé l'alchimie en une véritable science expérimentale !" }, wrong: { ar: 'الجواب هو جابر بن حيان — طوّر التقطير واكتشف عدة أحماض.', en: 'The answer is Jabir ibn Hayyan — he developed distillation and discovered several acids.', fr: "La réponse est Jabir ibn Hayyan — il a développé la distillation et découvert plusieurs acides." } }
        },
        {
            question: { ar: 'من بنى موسيقيين آليين مبرمجين يعملون بالماء؟', en: 'Who built programmable robot musicians powered by water?', fr: "Qui a construit des musiciens robots programmables alimentés à l'eau ?" },
            options: { ar: ['الخوارزمي', 'الجزري', 'البيروني', 'عمر الخيام'], en: ['Al-Khwarizmi', 'Al-Jazari', 'Al-Biruni', 'Omar Khayyam'], fr: ['Al-Khwarizmi', 'Al-Jazari', 'Al-Biruni', 'Omar Khayyam'] },
            correct: 1,
            feedback: { correct: { ar: 'ما شاء الله! آلات الجزري كانت تسبق عصرها بقرون!', en: "MashaAllah! Al-Jazari's automata were centuries ahead of their time!", fr: "MashaAllah ! Les automates d'Al-Jazari avaient des siècles d'avance !" }, wrong: { ar: 'الجواب هو الجزري! بنى آلات موسيقية مبرمجة ويُلقب بأبي الروبوتات.', en: "It was Al-Jazari! He built programmable musical automata and is called the Father of Robotics.", fr: "C'était Al-Jazari ! Il a construit des automates musicaux programmables et est appelé le Père de la Robotique." } }
        },
        {
            question: { ar: 'من أسس أقدم جامعة لا تزال تعمل؟', en: "Who founded the world's oldest continuously operating university?", fr: 'Qui a fondé la plus ancienne université encore en activité ?' },
            options: { ar: ['ابن خلدون', 'الإدريسي', 'فاطمة الفهرية', 'الزهراوي'], en: ['Ibn Khaldun', 'Al-Idrisi', 'Fatima al-Fihri', 'Al-Zahrawi'], fr: ['Ibn Khaldun', 'Al-Idrisi', 'Fatima al-Fihri', 'Al-Zahrawi'] },
            correct: 2,
            feedback: { correct: { ar: 'صحيح! أسست فاطمة الفهرية جامعة القرويين سنة 859م — لا تزال مفتوحة!', en: "Correct! Fatima al-Fihri founded Al-Qarawiyyin in 859 CE — still open today!", fr: "Correct ! Fatima al-Fihri a fondé Al-Qarawiyyin en 859 — toujours ouverte aujourd'hui !" }, wrong: { ar: 'الجواب هو فاطمة الفهرية — أسست جامعة القرويين في فاس بالمغرب سنة 859م.', en: 'The answer is Fatima al-Fihri — she founded Al-Qarawiyyin University in Fez, Morocco in 859 CE.', fr: "La réponse est Fatima al-Fihri — elle a fondé l'Université Al-Qarawiyyin à Fès, Maroc en 859." } }
        },
        {
            question: { ar: 'من صنع أدق خريطة للعالم استمرت 300 سنة؟', en: 'Who created the most accurate world map that lasted 300 years?', fr: 'Qui a créé la carte du monde la plus précise ayant duré 300 ans ?' },
            options: { ar: ['البيروني', 'الإدريسي', 'ابن خلدون', 'الخوارزمي'], en: ['Al-Biruni', 'Al-Idrisi', 'Ibn Khaldun', 'Al-Khwarizmi'], fr: ['Al-Biruni', 'Al-Idrisi', 'Ibn Khaldun', 'Al-Khwarizmi'] },
            correct: 1,
            feedback: { correct: { ar: 'ممتاز! الطبولة الروجرية للإدريسي كانت بلا منافس لثلاثة قرون!', en: "Excellent! Al-Idrisi's Tabula Rogeriana was unmatched for three centuries!", fr: "Excellent ! La Tabula Rogeriana d'Al-Idrisi était inégalée pendant trois siècles !" }, wrong: { ar: 'الجواب هو الإدريسي — خريطته كانت الأدق لحوالي 300 سنة.', en: "It was Al-Idrisi — his Tabula Rogeriana was the most accurate map for about 300 years.", fr: "C'était Al-Idrisi — sa Tabula Rogeriana était la carte la plus précise pendant environ 300 ans." } }
        },
        {
            question: { ar: 'من يُعتبر مؤسس علم الاجتماع؟', en: "Who is considered the Father of Sociology?", fr: 'Qui est considéré comme le Père de la Sociologie ?' },
            options: { ar: ['عمر الخيام', 'ابن سينا', 'الجزري', 'ابن خلدون'], en: ['Omar Khayyam', 'Ibn Sina', 'Al-Jazari', 'Ibn Khaldun'], fr: ['Omar Khayyam', 'Ibn Sina', 'Al-Jazari', 'Ibn Khaldun'] },
            correct: 3,
            feedback: { correct: { ar: 'ما شاء الله! تحليل ابن خلدون للحضارات كان يسبق عصره بقرون!', en: "MashaAllah! Ibn Khaldun's analysis of civilizations was centuries ahead!", fr: "MashaAllah ! L'analyse d'Ibn Khaldun sur les civilisations avait des siècles d'avance !" }, wrong: { ar: 'الجواب هو ابن خلدون — مقدمته من أهم أعمال العلوم الاجتماعية.', en: "The answer is Ibn Khaldun — his Muqaddimah is one of the most important works of social science.", fr: "La réponse est Ibn Khaldun — sa Muqaddimah est l'une des œuvres les plus importantes des sciences sociales." } }
        },
        {
            question: { ar: 'تقويم من أدق من التقويم الميلادي الذي نستخدمه اليوم؟', en: 'Whose calendar is MORE accurate than our Gregorian calendar?', fr: 'Le calendrier de qui est PLUS précis que notre calendrier grégorien ?' },
            options: { ar: ['تقويم البيروني', 'التقويم الجلالي لعمر الخيام', 'جداول الخوارزمي', 'جداول ابن الهيثم'], en: ["Al-Biruni's calendar", "Omar Khayyam's Jalali calendar", "Al-Khwarizmi's tables", "Ibn al-Haytham's tables"], fr: ["Le calendrier d'Al-Biruni", "Le calendrier Jalali d'Omar Khayyam", "Les tables d'Al-Khwarizmi", "Les tables d'Ibn al-Haytham"] },
            correct: 1,
            feedback: { correct: { ar: 'صحيح! التقويم الجلالي ينحرف يوماً واحداً كل 5000 سنة فقط!', en: "Correct! The Jalali calendar is off by only 1 day in 5,000 years!", fr: "Correct ! Le calendrier Jalali ne décale que d'1 jour tous les 5000 ans !" }, wrong: { ar: 'الجواب هو التقويم الجلالي لعمر الخيام — دقيق ليوم واحد كل 5000 سنة مقابل يوم كل 3236 لتقويمنا.', en: "It's Omar Khayyam's Jalali calendar — accurate to 1 day in 5,000 years vs. 1 in 3,236 for ours.", fr: "C'est le calendrier Jalali d'Omar Khayyam — précis à 1 jour tous les 5000 ans contre 1 jour tous les 3236 pour le nôtre." } }
        },
        {
            question: { ar: 'من أول من ميّز الجدري عن الحصبة؟', en: 'Who was the first to distinguish smallpox from measles?', fr: 'Qui a été le premier à distinguer la variole de la rougeole ?' },
            options: { ar: ['ابن سينا', 'الزهراوي', 'الرازي', 'جابر بن حيان'], en: ['Ibn Sina', 'Al-Zahrawi', 'Al-Razi', 'Jabir ibn Hayyan'], fr: ['Ibn Sina', 'Al-Zahrawi', 'Al-Razi', 'Jabir ibn Hayyan'] },
            correct: 2,
            feedback: { correct: { ar: 'ممتاز! ملاحظات الرازي السريرية كانت دقيقة ومذهلة!', en: "Excellent! Al-Razi's clinical observations were remarkably detailed!", fr: "Excellent ! Les observations cliniques d'Al-Razi étaient remarquablement détaillées !" }, wrong: { ar: 'الجواب هو الرازي — رسالته عن الجدري والحصبة كانت الأولى التي ميّزت بينهما.', en: "It was Al-Razi — his treatise was the first to distinguish between them.", fr: "C'était Al-Razi — son traité a été le premier à distinguer les deux maladies." } }
        }
    ];

    function t(key) {
        const parts = key.split('.');
        let obj = translations;
        for (const p of parts) {
            obj = obj?.[p];
        }
        return obj?.[currentLang] || obj?.en || key;
    }

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem('app_lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    function getLang() { return currentLang; }

    function loadSavedLang() {
        const saved = localStorage.getItem('app_lang');
        if (saved && ['ar', 'en', 'fr'].includes(saved)) {
            setLang(saved);
        }
    }

    function getScientistI18n(id) { return scientistI18n[id] || null; }
    function getQuizI18n() { return quizI18n; }
    function getTranslations() { return translations; }

    return { t, setLang, getLang, loadSavedLang, getScientistI18n, getQuizI18n, getTranslations };
})();
