/* ═══════════════════════════════════════════════
   APP.JS — Luminaries of Islam v1.2
   Main application logic, data, and interactivity
   ═══════════════════════════════════════════════ */

// ─── SCIENTIST DATA ───
const scientists = [
    {
        id: 'khwarizmi',
        name: 'Al-Khwarizmi',
        nameAr: 'الخوارزمي',
        field: 'mathematics',
        fieldLabel: 'Mathematics & Algebra',
        century: '9th',
        centuryNum: 9,
        era: '780 – 850 CE',
        icon: '🔢',
        oneliner: 'Father of Algebra — the word "algorithm" comes from his name!',
        bio: {
            newb: "Imagine you have a mystery number puzzle: \"Something plus 3 equals 7 — what's the something?\" Al-Khwarizmi invented a whole system to solve puzzles like this! He called it \"al-jabr\" (algebra). Before him, people struggled with these problems. He wrote a book that basically said: \"Here's a recipe to solve ANY number puzzle.\" The word \"algorithm\" — the step-by-step instructions your computer uses every day — comes from his name! Pretty cool for a guy from the 9th century, right?",
            explorer: "Muhammad ibn Musa al-Khwarizmi was a Persian mathematician, astronomer, and geographer working at the House of Wisdom in Baghdad. His groundbreaking work 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' (The Compendious Book on Calculation by Completion and Balancing) systematized the solving of linear and quadratic equations. He introduced the concept of reducing equations through 'al-jabr' (restoring) and 'al-muqabala' (balancing). He also introduced Hindu-Arabic numerals to the Western world through his work on arithmetic.",
            developer: "Al-Khwarizmi's contributions represent a paradigm shift in mathematics. His algebraic methods provided the first systematic approach to solving polynomial equations of first and second degree, moving mathematics from geometric to abstract algebraic reasoning. His 'Zij al-Sindhind' was an astronomical table that introduced Indian astronomical methods to Islamic science. His work on arithmetic, 'Algoritmi de Numero Indorum', was the vector through which the Hindu-Arabic numeral system (including zero) reached Europe. The Latin translation of his name — 'Algoritmi' — became 'algorithm', now the foundational concept of computer science. His integration of Greek, Indian, and Babylonian mathematical traditions at the House of Wisdom created the framework for modern mathematics."
        },
        contributions: [
            'Invented algebra as a systematic discipline',
            'Introduced Hindu-Arabic numerals to the world',
            'Created astronomical tables (Zij al-Sindhind)',
            'Advanced geography and cartography',
            'Developed methods for solving quadratic equations'
        ],
        funFact: "Every time your phone runs an app, it's running \"algorithms\" — named after Al-Khwarizmi! He's basically the great-great-great-grandfather of every computer program ever written.",
        legacy: "Without Al-Khwarizmi, there would be no algebra class (sorry, students!), but also no computer science. His systematic approach to mathematical problem-solving is the direct ancestor of modern programming. The numerals you use every day (0, 1, 2, 3...) reached Europe through his works."
    },
    {
        id: 'ibn-alhaytham',
        name: 'Ibn al-Haytham',
        nameAr: 'ابن الهيثم',
        field: 'astronomy',
        fieldLabel: 'Optics & Scientific Method',
        century: '10th–11th',
        centuryNum: 10,
        era: '965 – 1040 CE',
        icon: '👁️',
        oneliner: 'Father of Optics — he figured out how we actually see!',
        bio: {
            newb: "Have you ever wondered how your eyes actually work? For a THOUSAND years, people thought our eyes shoot out invisible beams (like tiny laser eyes!) that hit objects and bounce back. Ibn al-Haytham said: \"Wait... that doesn't make sense. Light comes FROM objects INTO our eyes!\" He proved it with experiments using a dark room with a tiny hole (basically the first camera!). He taught the world to TEST ideas instead of just believing them — making him one of the first true scientists ever!",
            explorer: "Abu Ali al-Hasan ibn al-Haytham (Alhazen) was a polymath born in Basra who made revolutionary contributions to optics, physics, and the scientific method. His magnum opus 'Kitab al-Manazir' (Book of Optics) definitively disproved the emission theory of vision (that eyes emit light) and established the intromission theory (that light enters the eye). He described the camera obscura, explained reflection and refraction, and conducted systematic experiments on light behavior. He emphasized empirical evidence and reproducible experiments — a precursor to the modern scientific method.",
            developer: "Ibn al-Haytham's work represents perhaps the most significant paradigm shift in the history of science. His 'Kitab al-Manazir' (7 volumes) combined rigorous mathematical analysis with controlled experimentation — a methodology that wouldn't be formalized in Europe for another 600 years. He correctly described the anatomy of the eye, explained binocular vision, and developed theories of visual perception. His experimental approach to light — using darkened chambers, controlled apertures, and systematic observation — established the template for empirical science. His influence on Roger Bacon, Kepler, Descartes, and Newton is well-documented. UNESCO designated 2015 the 'International Year of Light' partly in recognition of the millennium anniversary of his Optics."
        },
        contributions: [
            'Proved that vision works by light entering the eye',
            'Described the camera obscura (pinhole camera)',
            'Pioneered the experimental scientific method',
            'Wrote the Book of Optics (Kitab al-Manazir)',
            'Advanced understanding of reflection and refraction'
        ],
        funFact: "Ibn al-Haytham built a \"dark room\" with a tiny hole in the wall to study light. Guess what we call that today? A CAMERA! The word comes from \"camera obscura\" (dark room). Every selfie you take uses his discovery!",
        legacy: "Ibn al-Haytham is considered the father of modern optics AND the scientific method. His insistence on testing ideas through experiments rather than accepting authority laid the foundation for all of modern science. Without him, cameras, telescopes, microscopes, and glasses might have been invented centuries later."
    },
    {
        id: 'ibn-sina',
        name: 'Ibn Sina (Avicenna)',
        nameAr: 'ابن سينا',
        field: 'medicine',
        fieldLabel: 'Medicine & Philosophy',
        century: '10th–11th',
        centuryNum: 10,
        era: '980 – 1037 CE',
        icon: '⚕️',
        oneliner: 'Prince of Physicians — his medical encyclopedia was used for 600 years!',
        bio: {
            newb: "Imagine writing a medical textbook SO good that doctors use it for 600 YEARS! That's what Ibn Sina did. His book 'The Canon of Medicine' was like the Wikipedia of health — it covered every disease doctors knew about, how to diagnose them, and how to treat them. He figured out that diseases could be contagious (spreading from person to person), he tested medicines properly, and he even understood that emotions affect physical health. All this in the year 1000!",
            explorer: "Abu Ali al-Husayn ibn Abd Allah ibn Sina (Avicenna) was a Persian polymath regarded as one of the most significant physicians, astronomers, and philosophers of the Islamic Golden Age. His 'Al-Qanun fi al-Tibb' (Canon of Medicine) is a 5-volume medical encyclopedia that systematized Greek, Roman, and Islamic medical knowledge. He introduced the concept of clinical trials, described contagious diseases, recognized the connection between psychology and health, and classified over 760 drugs. He also made major contributions to philosophy, with his metaphysical works influencing both Islamic and European scholastic thought.",
            developer: "Ibn Sina's 'Canon of Medicine' represents the most comprehensive medical system of the medieval world. Its five books cover: general medical principles, simple drugs (with a pharmacopoeia of 760+ substances), organ-specific diseases (head-to-toe organization), systemic diseases (fevers, infections), and compound drugs. His methodology included evidence-based medicine principles: he required that drug trials use controlled conditions, consider dosage effects, and be reproduced. He described meningitis, recognized cancer as a tumor, outlined quarantine principles, and understood that tuberculosis was contagious. The Canon remained the standard medical textbook at European universities (including Montpellier and Leuven) until the 17th century. His philosophical works, particularly 'The Book of Healing', synthesized Aristotelian and Neoplatonic thought and profoundly influenced Thomas Aquinas."
        },
        contributions: [
            'Wrote the Canon of Medicine (5 volumes)',
            'Introduced clinical trial methodology',
            'Recognized contagious diseases',
            'Classified over 760 medicinal drugs',
            'Advanced the connection between mind and body'
        ],
        funFact: "Ibn Sina memorized the entire Quran by age 10, and by age 18, he had mastered ALL the sciences known in his time. He was basically the ultimate overachiever — 1,000 years before Google existed!",
        legacy: "Ibn Sina's Canon of Medicine was the gold standard in medical education for over 600 years across both the Islamic world and Europe. His systematic approach to clinical testing, drug classification, and evidence-based medicine are direct precursors to modern medical practice."
    },
    {
        id: 'al-razi',
        name: 'Al-Razi (Rhazes)',
        nameAr: 'الرازي',
        field: 'medicine',
        fieldLabel: 'Medicine & Chemistry',
        century: '9th–10th',
        centuryNum: 9,
        era: '854 – 925 CE',
        icon: '🧪',
        oneliner: 'First to distinguish smallpox from measles — and a pioneer of chemistry!',
        bio: {
            newb: "Al-Razi was like a detective — but instead of solving crimes, he solved medical mysteries! He was the first person to realize that smallpox and measles were DIFFERENT diseases (before him, everyone thought they were the same). He also invented medical stitches that dissolve on their own (so you don't have to get them removed — ouch!). And he discovered alcohol's use as an antiseptic. He even wrote a huge medical encyclopedia with 23 volumes!",
            explorer: "Abu Bakr Muhammad ibn Zakariyya al-Razi (Rhazes) was a Persian polymath who made fundamental contributions to medicine and chemistry. His 'Kitab al-Hawi' (The Comprehensive Book) was a vast medical encyclopedia. His treatise 'Kitab fi al-Jadari wa-al-Hasbah' was the first work to accurately distinguish smallpox from measles through clinical observation. He introduced the use of alcohol as an antiseptic, developed the concept of allergic reactions (testing patient reactions to environmental factors), and was the first physician to use animal gut for surgical sutures. In chemistry, he classified substances into mineral, vegetable, and animal categories.",
            developer: "Al-Razi's medical methodology was remarkably modern. His 'Kitab al-Hawi fi al-Tibb' (23 volumes) compiled Greek, Syrian, Indian, and his own clinical observations — functioning as the most comprehensive medical reference of its era. His clinical approach emphasized patient observation over theoretical dogma. He conducted what may be the first controlled clinical trial: testing the efficacy of bloodletting by dividing patients into treatment and control groups. His chemical classification system (mineral, plant, animal, derivative) and laboratory techniques (distillation, calcination, crystallization) established foundational methodology for modern chemistry. He was also a vocal critic of charlatanism in medicine, writing a treatise titled 'On the Fact that Even Skillful Physicians Cannot Heal All Diseases'."
        },
        contributions: [
            'First to distinguish smallpox from measles',
            'Pioneered use of alcohol as antiseptic',
            'Invented dissolving surgical sutures',
            'Wrote 23-volume medical encyclopedia',
            'Classified chemical substances systematically'
        ],
        funFact: "Al-Razi chose where to build a hospital by hanging meat in different parts of the city — wherever the meat rotted slowest, that's where the air was cleanest! Talk about a creative hygiene test!",
        legacy: "Al-Razi's emphasis on clinical observation over blind authority, his controlled experiments, and his chemical classification systems are direct ancestors of modern evidence-based medicine and modern chemistry."
    },
    {
        id: 'al-biruni',
        name: 'Al-Biruni',
        nameAr: 'البيروني',
        field: 'astronomy',
        fieldLabel: 'Astronomy & Geography',
        century: '10th–11th',
        centuryNum: 10,
        era: '973 – 1048 CE',
        icon: '🌍',
        oneliner: 'He calculated Earth\'s radius with 99.7% accuracy — in the year 1000!',
        bio: {
            newb: "How big is the Earth? Today we use satellites to measure it. But Al-Biruni figured it out over 1,000 years ago using just a mountain, some math, and his brilliant brain! He climbed a mountain, measured the angle to the horizon, and calculated Earth's radius. His answer? Only 0.3% off from what NASA tells us today! He also figured out that Earth rotates on its axis (hundreds of years before Copernicus) and studied India's culture so deeply that his book is STILL used by historians.",
            explorer: "Abu Rayhan Muhammad ibn Ahmad al-Biruni was a Central Asian polymath whose contributions spanned astronomy, mathematics, geography, physics, and comparative religion. Using trigonometric methods from a mountaintop in what is now Pakistan, he calculated Earth's circumference to within 16.8 km of the modern accepted value. He proposed that Earth rotates on its axis, discussed the possibility of a heliocentric model, and accurately determined the specific gravity of various metals and minerals using a conical apparatus. His 'Tarikh al-Hind' (History of India) is considered one of the most important works of cultural anthropology ever written.",
            developer: "Al-Biruni represents the pinnacle of interdisciplinary Islamic scholarship. His geodetic measurement of Earth's radius (using the law of sines and observation from Nandana Fort) yielded a value of 6,339.9 km — compared to the modern equatorial value of 6,378.1 km, an error of just 0.6%. His astronomical observations included calculating the length of the solar year to extraordinary precision. His 'Kitab al-Qanun al-Mas'udi' on astronomy contains detailed mathematical and astronomical tables. He developed a method for determining specific gravity that remained unsurpassed for centuries. His anthropological method — learning Sanskrit to study Indian civilization from primary sources — established principles of objective cross-cultural analysis that modern anthropologists still reference."
        },
        contributions: [
            'Calculated Earth\'s radius with 99.7% accuracy',
            'Proposed Earth\'s rotation on its axis',
            'Determined specific gravity of metals precisely',
            'Wrote foundational cultural anthropology of India',
            'Advanced astronomical calculations significantly'
        ],
        funFact: "Al-Biruni spoke at least 6 languages (Arabic, Persian, Sanskrit, Turkish, Hebrew, and Syriac) and wrote over 140 books. He even learned Sanskrit at age 50 just so he could read Indian scientific texts in the original!",
        legacy: "Al-Biruni's measurement of Earth is one of the most impressive scientific achievements of the medieval world. His cross-cultural scholarly approach and insistence on empirical measurement over speculation make him a model scientist even by today's standards."
    },
    {
        id: 'jabir',
        name: 'Jabir ibn Hayyan',
        nameAr: 'جابر بن حيان',
        field: 'chemistry',
        fieldLabel: 'Chemistry',
        century: '8th',
        centuryNum: 8,
        era: '721 – 815 CE',
        icon: '⚗️',
        oneliner: 'Father of Chemistry — he invented distillation and discovered acids!',
        bio: {
            newb: "Before Jabir ibn Hayyan, people mixed stuff together and hoped for the best. Jabir changed everything! He invented DISTILLATION (separating liquids by boiling them — that's how we purify water today!). He discovered hydrochloric acid, nitric acid, and even figured out how to make citric acid. He also invented a special wax that protects metal from rusting. He basically built the first real chemistry lab and wrote down careful instructions so others could repeat his experiments!",
            explorer: "Abu Musa Jabir ibn Hayyan was an Arab-Persian polymath and the most influential figure in the early history of chemistry (or 'alchemy' as it was then known). He transformed alchemy from mystical speculation into an experimental science. He developed and refined the alembic (distillation apparatus), discovered and described several important acids (hydrochloric, nitric, citric, acetic, and tartaric), and invented processes including crystallization, calcination, sublimation, and evaporation. His systematic experimental approach and detailed documentation established the foundation of scientific chemistry.",
            developer: "Jabir ibn Hayyan's Corpus Jabirianum contains over 300 treatises covering chemistry, medicine, astronomy, and philosophy. His chemical methodology was revolutionary: systematic experimentation, precise measurement, and reproducible procedures. He categorized substances into 'spirits' (volatile substances like mercury and sulfur), 'metals', and 'non-malleable substances'. His development of aqua regia (capable of dissolving gold) demonstrated advanced understanding of chemical reactions. He developed a sulfur-mercury theory of metals that dominated chemical thought for centuries. His laboratory techniques — distillation, filtration, crystallization, and sublimation — form the basis of modern chemical laboratory practice. Many attribute the word 'gibberish' to the Latin rendering of his name, though this is debated."
        },
        contributions: [
            'Developed distillation and the alembic apparatus',
            'Discovered multiple acids (hydrochloric, nitric, citric)',
            'Pioneered crystallization and sublimation',
            'Transformed alchemy into experimental chemistry',
            'Created systematic chemical classification'
        ],
        funFact: "Some people think the word \"gibberish\" comes from \"Jabir\" — because his chemical writings were so advanced that Europeans couldn't understand them and thought it was nonsense! (They eventually figured it out, though!)",
        legacy: "Jabir ibn Hayyan is rightly called the Father of Chemistry. His insistence on experimentation, measurement, and reproducibility transformed a mystical art into a systematic science. Every chemistry lab in the world uses techniques he pioneered."
    },
    {
        id: 'al-zahrawi',
        name: 'Al-Zahrawi',
        nameAr: 'الزهراوي',
        field: 'medicine',
        fieldLabel: 'Surgery',
        century: '10th',
        centuryNum: 10,
        era: '936 – 1013 CE',
        icon: '🏥',
        oneliner: 'Father of Surgery — he designed over 200 surgical instruments!',
        bio: {
            newb: "Al-Zahrawi was the ultimate inventor-doctor. He designed over 200 surgical tools — many of which doctors STILL use today (just with fancier materials). He invented the surgical needle, the bone saw, and forceps. He figured out how to remove cataracts from eyes, how to stop bleeding during surgery, and even how to use catgut thread for stitches that dissolve inside your body! He drew detailed pictures of every tool he made so other doctors could build them too.",
            explorer: "Abu al-Qasim Khalaf ibn al-Abbas al-Zahrawi (Abulcasis) was the most prominent surgeon of the medieval world. His 30-volume medical encyclopedia 'Al-Tasrif li-man 'Ajiza 'an al-Ta'lif' devoted its final volume entirely to surgery — the most detailed surgical text of its era. He designed and illustrated over 200 surgical instruments, including scalpels, retractors, curettes, forceps, and speculums. He pioneered catgut absorbable sutures, described cauterization techniques, performed tracheotomies, and developed methods for treating dislocations and fractures. His surgical atlas was used in European medical schools for over 500 years.",
            developer: "Al-Zahrawi's 'Al-Tasrif' represents the first independent illustrated surgical treatise in medical history. Volume 30 contains detailed descriptions and illustrations of instruments for: cautery (56 types), incision, perforation, blood vessel operations, bone surgery, and obstetric procedures. His innovations include: the use of cotton as wound dressing, application of catgut for internal sutures, techniques for lithotomy (bladder stone removal), thyroidectomy, and the extraction of cataracts by suction. He described ectopic pregnancy, hemophilia (identifying its hereditary nature), and various cancer treatments. His integration of surgical illustration with procedural description created a teaching methodology that remains fundamental to surgical education."
        },
        contributions: [
            'Designed over 200 surgical instruments',
            'Invented absorbable catgut sutures',
            'Pioneered cataract surgery techniques',
            'Wrote the first illustrated surgical atlas',
            'Identified hemophilia as hereditary'
        ],
        funFact: "Al-Zahrawi once treated a slave girl who had swallowed a decorative pin — he invented a special tool just for her case, reached into her throat, and pulled it out! He then wrote down the design so other doctors could use it too. Talk about thinking on your feet!",
        legacy: "Al-Zahrawi's surgical instruments, techniques, and teaching methods remained the gold standard for five centuries. Modern surgery owes many of its fundamental tools and procedures directly to his innovations."
    },
    {
        id: 'al-idrisi',
        name: 'Al-Idrisi',
        nameAr: 'الإدريسي',
        field: 'geography',
        fieldLabel: 'Geography & Cartography',
        century: '12th',
        centuryNum: 12,
        era: '1100 – 1165 CE',
        icon: '🗺️',
        oneliner: 'Created the most accurate world map of his time — for 300 years!',
        bio: {
            newb: "Before Google Maps, before GPS, before even good paper maps, Al-Idrisi created the most detailed map of the world anyone had ever seen! He traveled everywhere, talked to sailors and merchants, and combined all their knowledge into one amazing map engraved on a giant silver disc. His book 'The Pleasure of Him Who Longs to Cross the Horizons' (what a name!) described every region of the known world. His maps were the BEST for over 300 years!",
            explorer: "Muhammad al-Idrisi was a Moroccan geographer, cartographer, and traveler who created the most advanced geographic work of the medieval world. Working at the court of King Roger II of Sicily, he spent 15 years compiling geographic data from travelers, merchants, and explorers across the known world. His masterwork 'Kitab Nuzhat al-Mushtaq fi Ikhtiraq al-Afaq' (Tabula Rogeriana) contained 70 sectional maps forming a complete world map, accompanied by detailed geographic descriptions. He also created a silver planisphere weighing approximately 135 kg showing the known world.",
            developer: "Al-Idrisi's cartographic methodology was groundbreaking. He divided the world into 7 climatic zones (following the Ptolemaic tradition but with vastly improved data), each subdivided into 10 sections, yielding 70 individual maps. His data collection method — systematic interviews with travelers, cross-referencing multiple sources, and personal exploration — anticipated modern geographic survey methodology. The Tabula Rogeriana remained the most accurate world map for approximately 300 years. His work synthesized Greek geographic theory (Ptolemy), Islamic geographic knowledge, and firsthand data from Norman, Viking, and Mediterranean sources. He accurately described the source of the Niger River and provided the first reliable geographic account of Scandinavia and Eastern Europe."
        },
        contributions: [
            'Created the most accurate medieval world map',
            'Built a giant silver planisphere globe',
            'Compiled 70 detailed sectional maps',
            'Described geography of Africa, Asia, and Europe in detail',
            'Developed systematic geographic data collection'
        ],
        funFact: "Al-Idrisi's world map was drawn \"upside down\" by our standards — with south at the top! This was common in Arabic cartography. If you flip his map, you'll be amazed at how accurate it is — especially for the 12th century!",
        legacy: "Al-Idrisi's maps represented the pinnacle of medieval cartography and remained the most accurate available for three centuries. His systematic approach to geographic data collection anticipated modern survey and mapping methods."
    },
    {
        id: 'ibn-khaldun',
        name: 'Ibn Khaldun',
        nameAr: 'ابن خلدون',
        field: 'sociology',
        fieldLabel: 'Sociology & History',
        century: '14th',
        centuryNum: 14,
        era: '1332 – 1406 CE',
        icon: '📜',
        oneliner: 'Father of Sociology — he figured out WHY civilizations rise and fall!',
        bio: {
            newb: "Have you ever wondered why some civilizations become super powerful and then collapse? Ibn Khaldun was the first person to figure out the PATTERN! He noticed that groups with strong teamwork and loyalty build great civilizations, but once they get comfortable and rich, they get lazy and eventually a new, hungrier group takes over. He called this cycle \"the rise and fall of civilizations\" and wrote it all down in his famous book 'The Muqaddimah'. It's like he predicted how empires work — 600 years before anyone else!",
            explorer: "Abd al-Rahman ibn Muhammad ibn Khaldun was a North African historian, sociologist, and philosopher widely regarded as the founder of sociology, historiography, and economics as distinct disciplines. His 'Muqaddimah' (Prolegomena) introduced the concept of 'asabiyyah' (social cohesion/group solidarity) as the driving force behind the cyclical rise and fall of civilizations. He analyzed how geography, climate, economics, and culture interact to shape societies. He also proposed an early version of supply-and-demand economics, described the effects of taxation on productivity, and distinguished between mere chronicle and analytical history.",
            developer: "Ibn Khaldun's 'Muqaddimah' represents arguably the first work of social science. His cyclical theory of civilizations describes a ~120-year cycle: nomadic groups with strong 'asabiyyah' conquer settled civilizations, establish dynasties, then gradually lose cohesion through luxury and urbanization, becoming vulnerable to the next cohesive group. His economic theories anticipated Adam Smith by four centuries: he described labor as the source of value, analyzed the effects of tax rates on government revenue (anticipating the Laffer Curve), and understood supply-demand dynamics. He applied empirical methodology to history, rejecting supernatural explanations and demanding verifiable evidence. Arnold Toynbee called the Muqaddimah 'the greatest work of its kind that has ever yet been created by any mind in any time or place.'"
        },
        contributions: [
            'Founded sociology as a discipline',
            'Developed the theory of asabiyyah (social cohesion)',
            'Analyzed the cyclical rise and fall of civilizations',
            'Anticipated modern economic theories',
            'Pioneered evidence-based historical analysis'
        ],
        funFact: "Ibn Khaldun's theory about taxes is eerily modern — he said that when governments raise taxes too high, people stop working and tax revenue actually DROPS. Economists 600 years later \"discovered\" the same thing and called it the Laffer Curve!",
        legacy: "Ibn Khaldun is considered the father of sociology, historiography, and demography. His analytical approach to history and society influenced countless thinkers and his 'Muqaddimah' remains required reading in social science programs worldwide."
    },
    {
        id: 'al-jazari',
        name: 'Al-Jazari',
        nameAr: 'الجزري',
        field: 'engineering',
        fieldLabel: 'Engineering & Robotics',
        century: '12th–13th',
        centuryNum: 12,
        era: '1136 – 1206 CE',
        icon: '⚙️',
        oneliner: 'Father of Robotics — he built programmable automata 800 years ago!',
        bio: {
            newb: "Imagine building ROBOTS in the year 1200 — no electricity, no computers, just gears, water, and genius! Al-Jazari did exactly that! He built a musical robot band (seriously — robot musicians that played drums!), automatic hand-washing machines, and water clocks that were more accurate than anything in the world. He even built a water pump system that could lift water uphill without any modern power. His book of inventions is full of detailed diagrams showing how to build each device!",
            explorer: "Badi' al-Zaman Abu al-'Izz Ismail ibn al-Razzaz al-Jazari was a Kurdish polymath, engineer, and inventor. His masterwork 'Kitab fi Ma'rifat al-Hiyal al-Handasiyya' (The Book of Knowledge of Ingenious Mechanical Devices) describes 50 mechanical devices across 6 categories. He is credited with inventing the crankshaft, the camshaft, and segmental gears — key components in modern machinery. His programmable automata (including a musical robot band powered by water) are considered precursors to modern robotics. His double-acting suction pump with a crankshaft mechanism was a mechanical marvel that influenced European engineering for centuries.",
            developer: "Al-Jazari's engineering represents the pinnacle of medieval Islamic mechanical technology. His 50 devices include: water clocks of unprecedented accuracy (featuring automata that marked the hours), water-raising machines (using the first known crankshaft-connecting rod system), programmable musical automata, and automated serving devices. His 'castle clock' (over 3 meters tall) is considered the first programmable analog computer — it could be reprogrammed to account for changing day lengths. His mechanical innovations — particularly the crankshaft, segmental gear, and escapement mechanism — are foundational to the Industrial Revolution. His detailed technical illustrations (with assembly instructions) make his book the first engineering manual in the modern sense. He was essentially doing open-source hardware 800 years before GitHub!"
        },
        contributions: [
            'Invented the crankshaft and camshaft',
            'Built programmable musical automata (robots)',
            'Created the most advanced water clocks of his era',
            'Designed water-raising machines with suction pumps',
            'Wrote the first detailed engineering manual with diagrams'
        ],
        funFact: "Al-Jazari built a hand-washing device: you'd approach a peacock automaton, and it would pour water on your hands, offer soap, then hand you a towel — ALL automatically! It was basically a medieval automatic bathroom dispenser!",
        legacy: "Al-Jazari's inventions bridged the gap between theoretical science and practical engineering. His crankshaft mechanism is essential to every car engine today. His programmable automata are the ancestors of modern robots, and his detailed documentation style set the standard for engineering communication."
    },
    {
        id: 'omar-khayyam',
        name: 'Omar Khayyam',
        nameAr: 'عمر الخيام',
        field: 'mathematics',
        fieldLabel: 'Mathematics & Astronomy',
        century: '11th–12th',
        centuryNum: 11,
        era: '1048 – 1131 CE',
        icon: '📐',
        oneliner: 'He solved cubic equations and created a calendar more accurate than ours!',
        bio: {
            newb: "Omar Khayyam was the kind of guy who could solve math problems that NO ONE else could, AND write beautiful poetry at the same time! He figured out how to solve really complex math puzzles called \"cubic equations\" — problems so tricky that European mathematicians wouldn't crack them for another 500 years. He also created a calendar (called the Jalali calendar) that was even more accurate than the calendar we use today! Yes, a 1,000-year-old calendar beats our modern one!",
            explorer: "Ghiyath al-Din Abu al-Fath Omar ibn Ibrahim al-Khayyam was a Persian polymath who made groundbreaking contributions to mathematics, astronomy, and philosophy. In mathematics, he provided the first systematic classification and geometric solution of cubic equations (third-degree polynomials). He also recognized the importance of irrational numbers and their relationships to rational numbers, challenging Greek mathematical orthodoxy. In astronomy, he led the reform of the Persian calendar, creating the Jalali calendar with a year length of 365.2421986 days — more accurate than the Gregorian calendar (365.2425 days) adopted 500 years later.",
            developer: "Khayyam's 'Treatise on Demonstration of Problems of Algebra' represents the first complete classification of cubic equations (19 types), with geometric solutions using the intersection of conic sections. Though he could not find algebraic solutions (which would wait for Cardano in the 16th century), his geometric approach was a landmark of mathematical sophistication. His work on Euclid's parallel postulate anticipated non-Euclidean geometry by 800 years. The Jalali calendar's 365.2421986-day year has an error of just one day in 5,000 years (vs. the Gregorian calendar's one day in 3,236 years). His contributions to the binomial theorem and his work on the general binomial coefficient predate Newton by centuries. Beyond science, his 'Rubaiyat' is one of the most translated works of poetry in history."
        },
        contributions: [
            'Classified and solved cubic equations geometrically',
            'Created the ultra-precise Jalali calendar',
            'Advanced the binomial theorem',
            'Challenged mathematical orthodoxy on irrational numbers',
            'Contributed to non-Euclidean geometry concepts'
        ],
        funFact: "The Jalali calendar Omar Khayyam designed is MORE accurate than the Gregorian calendar we use today! His calendar is off by only 1 day every 5,000 years. Our modern calendar? Off by 1 day every 3,236 years. He literally out-calendared the future!",
        legacy: "Khayyam's geometric solutions to cubic equations represented the height of medieval algebra and anticipated the algebraic solutions that would come 500 years later. His calendar reform remains one of the most accurate in history."
    },
    {
        id: 'fatima-fihri',
        name: 'Fatima al-Fihri',
        nameAr: 'فاطمة الفهرية',
        field: 'education',
        fieldLabel: 'Education',
        century: '9th',
        centuryNum: 9,
        era: '800 – 880 CE',
        icon: '🏫',
        oneliner: 'She founded the world\'s first university — still running today!',
        bio: {
            newb: "Fatima al-Fihri did something incredible: she built the world's FIRST university! When her family moved to Fez, Morocco, she used her inheritance to build a mosque and school called Al-Qarawiyyin. It wasn't just a place to pray — it became a full university where people studied math, science, languages, and medicine. And here's the amazing part: it was founded in 859 CE, and it's STILL OPEN TODAY! That makes it the oldest continuously operating university in the world. Not bad for a project started by one determined woman over 1,100 years ago!",
            explorer: "Fatima bint Muhammad al-Fihriyya al-Qurashiyya was a Tunisian-born woman who founded the University of Al-Qarawiyyin in Fez, Morocco in 859 CE. Recognized by UNESCO and the Guinness World Records as the oldest continuously operating educational institution in the world, Al-Qarawiyyin began as a mosque and expanded into a madrasa offering courses in the Quran, theology, law, grammar, rhetoric, logic, mathematics, astronomy, and medicine. The institution attracted scholars from across the Islamic world and Europe, and it played a significant role in the transfer of knowledge between civilizations.",
            developer: "Al-Qarawiyyin's significance extends beyond its founding. Under the model Fatima al-Fihri established, it evolved into a comprehensive university that granted academic degrees and maintained a structured curriculum. Notable scholars associated with Al-Qarawiyyin include the geographer Al-Idrisi, the historian Ibn Khaldun, and the philosopher Maimonides. The institution's library — one of the oldest in the world — contains manuscripts dating to the 9th century. Fatima al-Fihri's model of endowment-funded education (waqf) influenced the structure of universities across the Islamic world and, through cultural exchange, European universities. The concept of academic degrees, structured curricula, and dedicated endowments for education can be traced, at least in part, to the institutional model she established."
        },
        contributions: [
            'Founded the world\'s oldest university (Al-Qarawiyyin, 859 CE)',
            'Established the waqf (endowment) model for education',
            'Created a center of learning that attracted global scholars',
            'Pioneered structured curriculum in higher education',
            'Demonstrated women\'s leadership in Islamic scholarship'
        ],
        funFact: "Al-Qarawiyyin University, founded by Fatima al-Fihri in 859 CE, is STILL operating today in Fez, Morocco — that's over 1,100 years of continuous education! Harvard (founded 1636) is a baby compared to it!",
        legacy: "Fatima al-Fihri's university model — endowment-funded, with structured curricula and degrees — influenced educational institutions across the world. Al-Qarawiyyin remains a testament to the power of one individual's vision for knowledge and community."
    }
];

// ─── QUIZ DATA ───
const quizQuestions = [
    {
        question: "Who is known as the Father of Algebra?",
        options: ["Ibn Sina", "Al-Khwarizmi", "Omar Khayyam", "Al-Biruni"],
        correct: 1,
        feedback: {
            correct: "MashaAllah! Correct! Al-Khwarizmi's book 'al-Jabr' gave algebra its name!",
            wrong: "Not quite! The answer is Al-Khwarizmi — the word 'algebra' comes from his book 'al-Jabr'."
        }
    },
    {
        question: "Which scientist proved that light enters the eye (rather than the eye emitting light)?",
        options: ["Al-Razi", "Jabir ibn Hayyan", "Ibn al-Haytham", "Al-Zahrawi"],
        correct: 2,
        feedback: {
            correct: "Excellent! Ibn al-Haytham revolutionized our understanding of vision and light!",
            wrong: "Nice try! It was Ibn al-Haytham (Alhazen) who proved the intromission theory of vision."
        }
    },
    {
        question: "Whose medical encyclopedia was used as a textbook for over 600 years?",
        options: ["Al-Zahrawi", "Al-Razi", "Ibn Sina", "Al-Biruni"],
        correct: 2,
        feedback: {
            correct: "Correct! Ibn Sina's Canon of Medicine was the gold standard for centuries!",
            wrong: "Good guess! The answer is Ibn Sina — his Canon of Medicine was used from the 11th to 17th century."
        }
    },
    {
        question: "Who designed over 200 surgical instruments and is called the Father of Surgery?",
        options: ["Al-Zahrawi", "Ibn Sina", "Al-Razi", "Jabir ibn Hayyan"],
        correct: 0,
        feedback: {
            correct: "MashaAllah! Al-Zahrawi's surgical instruments are still the basis of many modern tools!",
            wrong: "Not quite! Al-Zahrawi (Abulcasis) designed over 200 instruments and wrote the first surgical atlas."
        }
    },
    {
        question: "Who calculated Earth's radius with 99.7% accuracy over 1,000 years ago?",
        options: ["Omar Khayyam", "Al-Idrisi", "Al-Biruni", "Al-Khwarizmi"],
        correct: 2,
        feedback: {
            correct: "Amazing! Al-Biruni used just a mountain and trigonometry to measure our planet!",
            wrong: "Close! It was Al-Biruni who calculated Earth's radius using a mountain and math."
        }
    },
    {
        question: "Who is known as the Father of Chemistry and developed distillation?",
        options: ["Al-Razi", "Jabir ibn Hayyan", "Ibn Sina", "Al-Biruni"],
        correct: 1,
        feedback: {
            correct: "Correct! Jabir ibn Hayyan transformed alchemy into a true experimental science!",
            wrong: "The answer is Jabir ibn Hayyan — he developed the alembic for distillation and discovered several acids."
        }
    },
    {
        question: "Who built programmable robot musicians powered by water?",
        options: ["Al-Khwarizmi", "Al-Jazari", "Al-Biruni", "Omar Khayyam"],
        correct: 1,
        feedback: {
            correct: "MashaAllah! Al-Jazari's automata were centuries ahead of their time!",
            wrong: "It was Al-Jazari! He built programmable musical automata and is called the Father of Robotics."
        }
    },
    {
        question: "Who founded the world's oldest continuously operating university?",
        options: ["Ibn Khaldun", "Al-Idrisi", "Fatima al-Fihri", "Al-Zahrawi"],
        correct: 2,
        feedback: {
            correct: "Correct! Fatima al-Fihri founded Al-Qarawiyyin in 859 CE — still open today!",
            wrong: "The answer is Fatima al-Fihri — she founded Al-Qarawiyyin University in Fez, Morocco in 859 CE."
        }
    },
    {
        question: "Who created the most accurate world map that remained the best for 300 years?",
        options: ["Al-Biruni", "Al-Idrisi", "Ibn Khaldun", "Al-Khwarizmi"],
        correct: 1,
        feedback: {
            correct: "Excellent! Al-Idrisi's Tabula Rogeriana was unmatched for three centuries!",
            wrong: "It was Al-Idrisi — his Tabula Rogeriana was the most accurate map for about 300 years."
        }
    },
    {
        question: "Who is considered the Father of Sociology and wrote 'The Muqaddimah'?",
        options: ["Omar Khayyam", "Ibn Sina", "Al-Jazari", "Ibn Khaldun"],
        correct: 3,
        feedback: {
            correct: "MashaAllah! Ibn Khaldun's analysis of civilizations was centuries ahead!",
            wrong: "The answer is Ibn Khaldun — his Muqaddimah is one of the most important works of social science."
        }
    },
    {
        question: "Whose calendar is MORE accurate than the Gregorian calendar we use today?",
        options: ["Al-Biruni's calendar", "Omar Khayyam's Jalali calendar", "Al-Khwarizmi's tables", "Ibn al-Haytham's solar tables"],
        correct: 1,
        feedback: {
            correct: "Correct! Omar Khayyam's Jalali calendar is off by only 1 day in 5,000 years!",
            wrong: "It's Omar Khayyam's Jalali calendar — accurate to 1 day in 5,000 years vs. 1 day in 3,236 for our calendar."
        }
    },
    {
        question: "Who was the first to distinguish smallpox from measles?",
        options: ["Ibn Sina", "Al-Zahrawi", "Al-Razi", "Jabir ibn Hayyan"],
        correct: 2,
        feedback: {
            correct: "Excellent! Al-Razi's clinical observations were remarkably detailed and accurate!",
            wrong: "It was Al-Razi (Rhazes) — his treatise on smallpox and measles was the first to distinguish between them."
        }
    }
];

// ─── APP STATE ───
let currentLevel = 'newb';
let currentFilter = 'all';
let quizState = {
    currentQuestion: 0,
    score: 0,
    answered: false,
    questions: []
};

// ─── INITIALIZATION ───
document.addEventListener('DOMContentLoaded', () => {
    I18N.loadSavedLang();
    initLang();
    initLevel();
    renderScientists();
    renderTimeline();
    initQuiz();
    initNavigation();
    initFilters();
    initModal();
    initSearch();

    TTS.init();
    STT.init();

    initSTTHandlers();
    initTTSHandlers();
    applyTranslations();

    // Reveal animations
    observeElements();
});

// ─── LANGUAGE SYSTEM ───
function initLang() {
    const btns = document.querySelectorAll('.lang-btn');
    const savedLang = I18N.getLang();

    btns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
        btn.addEventListener('click', () => {
            I18N.setLang(btn.dataset.lang);
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyTranslations();
            renderScientists();
            renderTimeline();
            initQuiz();
            initFilters();
        });
    });
}

function applyTranslations() {
    const lang = I18N.getLang();
    const tr = I18N.getTranslations();

    // Nav
    document.querySelectorAll('.nav-link[data-section="hero"]').forEach(el => el.textContent = tr.ui.home[lang]);
    document.querySelectorAll('.nav-link[data-section="scientists"]').forEach(el => el.textContent = tr.ui.scientists[lang]);
    document.querySelectorAll('.nav-link[data-section="timeline"]').forEach(el => el.textContent = tr.ui.timeline[lang]);
    document.querySelectorAll('.nav-link[data-section="challenges"]').forEach(el => el.textContent = tr.ui.challenges[lang]);

    // Hero
    const heroTitleEn = document.querySelector('.hero-title-en');
    if (heroTitleEn) heroTitleEn.textContent = tr.ui.appSubtitle[lang];
    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) heroSub.textContent = tr.heroSubtitle[lang];
    const startBtn = document.querySelector('#btnStartExploring span');
    if (startBtn) startBtn.textContent = tr.ui.startExploring[lang];
    const listenBtn = document.querySelector('#btnWelcomeTTS span');
    if (listenBtn) listenBtn.textContent = tr.ui.listen[lang];
    const searchInput = document.getElementById('heroSearchInput');
    if (searchInput) searchInput.placeholder = tr.ui.searchPlaceholder[lang];

    // Section headers
    const sectTitles = document.querySelectorAll('.section-title');
    const sectSubs = document.querySelectorAll('.section-subtitle');
    if (sectTitles[0]) sectTitles[0].textContent = tr.ui.theGreatScholars[lang];
    if (sectSubs[0]) sectSubs[0].textContent = tr.ui.tapCard[lang];
    if (sectTitles[1]) sectTitles[1].textContent = tr.ui.timelineTitle[lang];
    if (sectSubs[1]) sectSubs[1].textContent = tr.ui.timelineSubtitle[lang];
    if (sectTitles[2]) sectTitles[2].textContent = tr.ui.challengeTitle[lang];
    if (sectSubs[2]) sectSubs[2].textContent = tr.ui.challengeSubtitle[lang];

    // Quiz
    const scoreLabel = document.querySelector('.quiz-score span');
    if (scoreLabel) scoreLabel.textContent = tr.ui.score[lang] + ': ';
    const nextBtn = document.querySelector('.quiz-next-btn');
    if (nextBtn) nextBtn.textContent = tr.ui.nextQuestion[lang];
    const restartBtn = document.getElementById('quizRestartBtn');
    if (restartBtn) restartBtn.textContent = tr.ui.tryAgain[lang];

    // Footer
    const footerQuote = document.querySelector('.footer-quote');
    if (footerQuote) footerQuote.textContent = tr.ui.footerQuote[lang];
    const footerCredit = document.querySelector('.footer-credit');
    if (footerCredit) footerCredit.textContent = tr.ui.footerCredit[lang];

    // TTS bar
    const ttsReady = document.getElementById('ttsCurrentText');
    if (ttsReady && ttsReady.textContent === 'Ready') ttsReady.textContent = tr.ui.ready[lang];
}

// ─── LEVEL SYSTEM ───
function initLevel() {
    const saved = localStorage.getItem('learn_level');
    if (saved) currentLevel = saved;

    const btns = document.querySelectorAll('.level-btn');
    btns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level === currentLevel);
        btn.addEventListener('click', () => {
            currentLevel = btn.dataset.level;
            localStorage.setItem('learn_level', currentLevel);
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ─── NAVIGATION ───
function initNavigation() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });

        links.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
            });
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[data-section="${id}"]`);
            if (link) {
                link.classList.toggle('active', scrollY >= top && scrollY < top + height);
            }
        });
    });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── RENDER SCIENTISTS ───
function renderScientists() {
    const grid = document.getElementById('scientistsGrid');
    if (!grid) return;
    const lang = I18N.getLang();

    grid.innerHTML = scientists.map((s, i) => {
        const si = I18N.getScientistI18n(s.id);
        const fieldLabel = si?.fieldLabel?.[lang] || s.fieldLabel;
        const oneliner = si?.oneliner?.[lang] || s.oneliner;

        return `
        <div class="scientist-card" data-id="${s.id}" data-field="${s.field}" style="animation-delay: ${i * 0.08}s">
            <button class="tts-btn card-tts-btn" data-tts-card="${s.id}" title="${I18N.t('ui.readAloud')}" onclick="event.stopPropagation()">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <div class="card-icon">${s.icon}</div>
            <div class="card-name">${s.name}</div>
            <div class="card-name-ar">${s.nameAr}</div>
            <span class="card-field">${fieldLabel}</span>
            <div class="card-era">${s.era}</div>
            <div class="card-oneliner">${oneliner}</div>
        </div>
    `}).join('');

    // Card click events
    grid.querySelectorAll('.scientist-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const scientist = scientists.find(s => s.id === id);
            if (scientist) openModal(scientist);
        });
    });

    // Card TTS buttons
    grid.querySelectorAll('[data-tts-card]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.ttsCard;
            const s = scientists.find(sc => sc.id === id);
            if (s) {
                const si = I18N.getScientistI18n(s.id);
                const oneliner = si?.oneliner?.[lang] || s.oneliner;
                TTS.speak(`${s.name}. ${oneliner}`, btn);
            }
        });
    });
}

// ─── FILTERS ───
function initFilters() {
    const bar = document.getElementById('filterBar');
    if (!bar) return;
    const lang = I18N.getLang();
    const tr = I18N.getTranslations();

    const fields = ['all', 'mathematics', 'medicine', 'astronomy', 'chemistry', 'engineering', 'geography', 'education', 'sociology'];
    bar.innerHTML = fields.map(f => {
        const label = tr.ui[f]?.[lang] || f;
        return `<button class="filter-btn ${f === currentFilter ? 'active' : ''}" data-field="${f}">${label}</button>`;
    }).join('');

    bar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.field;
            bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterScientists();
        });
    });
}

function filterScientists(searchTerm = '') {
    const cards = document.querySelectorAll('.scientist-card');
    cards.forEach(card => {
        const field = card.dataset.field;
        const matchesField = currentFilter === 'all' || field === currentFilter;

        let matchesSearch = true;
        if (searchTerm) {
            const name = card.querySelector('.card-name').textContent.toLowerCase();
            const nameAr = card.querySelector('.card-name-ar').textContent;
            const oneliner = card.querySelector('.card-oneliner').textContent.toLowerCase();
            matchesSearch = name.includes(searchTerm.toLowerCase()) ||
                            nameAr.includes(searchTerm) ||
                            oneliner.includes(searchTerm.toLowerCase());
        }

        card.classList.toggle('hidden', !(matchesField && matchesSearch));
    });
}

// ─── SEARCH ───
function initSearch() {
    const input = document.getElementById('heroSearchInput');
    if (input) {
        input.addEventListener('input', (e) => {
            filterScientists(e.target.value);
            if (e.target.value.length > 0) {
                scrollToSection('scientists');
            }
        });
    }
}

// ─── MODAL ───
function initModal() {
    const overlay = document.getElementById('scientistModal');
    const closeBtn = document.getElementById('modalClose');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Modal level tabs
    document.querySelectorAll('.modal-level-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.modal-level-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const level = tab.dataset.modalLevel;
            updateModalBio(level);
        });
    });
}

let currentModalScientist = null;

function openModal(scientist) {
    currentModalScientist = scientist;
    const overlay = document.getElementById('scientistModal');
    const lang = I18N.getLang();
    const si = I18N.getScientistI18n(scientist.id);

    document.getElementById('modalIcon').textContent = scientist.icon;
    document.getElementById('modalName').textContent = scientist.name;
    document.getElementById('modalNameAr').textContent = scientist.nameAr;
    document.getElementById('modalField').textContent = si?.fieldLabel?.[lang] || scientist.fieldLabel;
    document.getElementById('modalEra').textContent = scientist.era;

    // Set modal level to current global level
    document.querySelectorAll('.modal-level-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.modalLevel === currentLevel);
    });
    updateModalBio(currentLevel);

    // Contributions (translated)
    const contribList = document.getElementById('modalContributions');
    const contribs = si?.contributions?.[lang] || scientist.contributions;
    contribList.innerHTML = contribs.map(c => `<li>${c}</li>`).join('');

    // Fun Fact (translated)
    document.getElementById('modalFunFactText').textContent = si?.funFact?.[lang] || scientist.funFact;

    // Legacy (translated)
    document.getElementById('modalLegacy').textContent = si?.legacy?.[lang] || scientist.legacy;

    // Translate labels
    const contribHeader = document.querySelector('.modal-contributions h4');
    if (contribHeader) contribHeader.textContent = I18N.t('ui.keyContributions');
    const funfactLabel = document.querySelector('.funfact-content strong');
    if (funfactLabel) funfactLabel.textContent = I18N.t('ui.didYouKnow');
    const legacyHeader = document.querySelector('.modal-legacy h4');
    if (legacyHeader) legacyHeader.textContent = I18N.t('ui.legacy');

    // Modal TTS
    const modalTtsBtn = document.getElementById('modalTtsBtn');
    if (modalTtsBtn) {
        modalTtsBtn.onclick = () => {
            const activeLevel = document.querySelector('.modal-level-tab.active')?.dataset.modalLevel || currentLevel;
            const bio = si?.bio?.[activeLevel]?.[lang] || scientist.bio[activeLevel];
            TTS.speak(bio, modalTtsBtn);
        };
    }

    const funfactTtsBtn = document.getElementById('funfactTtsBtn');
    if (funfactTtsBtn) {
        funfactTtsBtn.onclick = () => TTS.speak(si?.funFact?.[lang] || scientist.funFact, funfactTtsBtn);
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function updateModalBio(level) {
    if (!currentModalScientist) return;
    const lang = I18N.getLang();
    const si = I18N.getScientistI18n(currentModalScientist.id);
    const bio = si?.bio?.[level]?.[lang] || currentModalScientist.bio[level] || currentModalScientist.bio.newb;
    document.getElementById('modalBio').textContent = bio;
}

function closeModal() {
    const overlay = document.getElementById('scientistModal');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    TTS.stop();
}

// ─── TIMELINE ───
function renderTimeline() {
    const track = document.getElementById('timelineTrack');
    if (!track) return;
    const lang = I18N.getLang();

    const sorted = [...scientists].sort((a, b) => a.centuryNum - b.centuryNum);

    track.innerHTML = sorted.map(s => {
        const si = I18N.getScientistI18n(s.id);
        const fieldLabel = si?.fieldLabel?.[lang] || s.fieldLabel;
        return `
        <div class="timeline-item" data-id="${s.id}">
            <div class="timeline-info">
                <div class="timeline-name">${s.name}</div>
                <div class="timeline-century">${s.century} ${I18N.t('ui.century')}</div>
                <div class="timeline-contribution">${fieldLabel}</div>
                <button class="tts-btn timeline-tts" data-tts-timeline="${s.id}" title="${I18N.t('ui.listen')}" onclick="event.stopPropagation()">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                </button>
            </div>
            <div class="timeline-dot"></div>
        </div>
    `}).join('');

    // Timeline click events
    track.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            const scientist = scientists.find(s => s.id === id);
            if (scientist) openModal(scientist);
        });
    });

    // Timeline TTS
    track.querySelectorAll('[data-tts-timeline]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.ttsTimeline;
            const s = scientists.find(sc => sc.id === id);
            if (s) TTS.speak(`${s.name}, ${s.century} century. ${s.fieldLabel}. ${s.oneliner}`, btn);
        });
    });

    // Timeline nav
    const container = document.getElementById('timelineContainer');
    const prevBtn = document.getElementById('timelinePrev');
    const nextBtn = document.getElementById('timelineNext');

    if (prevBtn) prevBtn.addEventListener('click', () => container.scrollBy({ left: -200, behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => container.scrollBy({ left: 200, behavior: 'smooth' }));
}

// ─── QUIZ ───
function initQuiz() {
    const quizI18n = I18N.getQuizI18n();
    quizState.questions = shuffleArray([...quizI18n]).slice(0, 8);
    quizState.currentQuestion = 0;
    quizState.score = 0;
    quizState.answered = false;

    updateQuizUI();

    document.getElementById('quizNextBtn')?.addEventListener('click', nextQuestion);
    document.getElementById('quizRestartBtn')?.addEventListener('click', restartQuiz);

    // Quiz TTS
    document.getElementById('quizTtsBtn')?.addEventListener('click', function() {
        const q = quizState.questions[quizState.currentQuestion];
        const lang = I18N.getLang();
        if (q) {
            const text = q.question[lang] + '. ' + q.options[lang].join(', ');
            TTS.speak(text, this);
        }
    });
}

function updateQuizUI() {
    const q = quizState.questions[quizState.currentQuestion];
    if (!q) return;
    const lang = I18N.getLang();

    document.getElementById('quizNumber').textContent = `${I18N.t('ui.question')} ${quizState.currentQuestion + 1}`;
    document.getElementById('quizQuestion').textContent = q.question[lang] || q.question.en;
    document.getElementById('quizScore').textContent = quizState.score;
    document.getElementById('quizTotal').textContent = quizState.questions.length;
    document.getElementById('quizNextBtn').style.display = 'none';
    document.getElementById('quizNextBtn').textContent = I18N.t('ui.nextQuestion');

    const feedback = document.getElementById('quizFeedback');
    feedback.className = 'quiz-feedback';
    feedback.textContent = '';

    const options = q.options[lang] || q.options.en;
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">${opt}</button>
    `).join('');

    optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => answerQuestion(parseInt(btn.dataset.index)));
    });

    quizState.answered = false;
    updateBadge();

    // Show quiz card, hide reflection
    document.getElementById('quizCard').style.display = 'block';
    document.getElementById('quizReflection').style.display = 'none';
}

function answerQuestion(index) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentQuestion];
    const lang = I18N.getLang();
    const isCorrect = index === q.correct;
    const feedback = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('.quiz-option');

    if (isCorrect) {
        quizState.score++;
        document.getElementById('quizScore').textContent = quizState.score;
    }

    options.forEach((opt, i) => {
        opt.classList.add('selected');
        if (i === q.correct) opt.classList.add('correct');
        if (i === index && !isCorrect) opt.classList.add('wrong');
    });

    const fbText = isCorrect ? (q.feedback.correct[lang] || q.feedback.correct.en) : (q.feedback.wrong[lang] || q.feedback.wrong.en);
    feedback.textContent = fbText;
    feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'wrong'}`;

    TTS.speak(fbText);

    document.getElementById('quizNextBtn').style.display = 'block';
    updateBadge();
}

function nextQuestion() {
    quizState.currentQuestion++;
    if (quizState.currentQuestion >= quizState.questions.length) {
        showReflection();
    } else {
        updateQuizUI();
    }
}

function showReflection() {
    document.getElementById('quizCard').style.display = 'none';
    const reflection = document.getElementById('quizReflection');
    reflection.style.display = 'block';
    const lang = I18N.getLang();
    const tr = I18N.getTranslations();

    const score = quizState.score;
    const total = quizState.questions.length;
    const pct = (score / total) * 100;

    let title, text;
    if (pct >= 90) {
        title = tr.reflection.expert.title[lang];
        text = tr.reflection.expert.text[lang];
    } else if (pct >= 60) {
        title = tr.reflection.seeker.title[lang];
        text = tr.reflection.seeker.text[lang];
    } else {
        title = tr.reflection.scholar.title[lang];
        text = tr.reflection.scholar.text[lang];
    }

    document.getElementById('reflectionTitle').textContent = title;
    document.getElementById('reflectionText').textContent = text;
    document.getElementById('quizRestartBtn').textContent = I18N.t('ui.tryAgain');

    TTS.speak(text);
}

function restartQuiz() {
    initQuiz();
}

function updateBadge() {
    const badge = document.getElementById('quizBadge');
    const lang = I18N.getLang();
    const tr = I18N.getTranslations();
    const score = quizState.score;
    const total = quizState.questions.length;
    const pct = total > 0 ? (score / total) * 100 : 0;

    if (pct >= 90) {
        badge.textContent = tr.ui.goldenAgeExpert[lang];
    } else if (pct >= 60) {
        badge.textContent = tr.ui.knowledgeSeeker[lang];
    } else {
        badge.textContent = tr.ui.youngScholar[lang];
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ─── STT HANDLERS ───
function initSTTHandlers() {
    // Hero search mic
    const heroMic = document.getElementById('heroMicBtn');
    const heroStatus = document.getElementById('heroSttStatus');
    const heroInput = document.getElementById('heroSearchInput');

    if (heroMic) {
        heroMic.addEventListener('click', () => {
            STT.onResult((text) => {
                if (heroInput) heroInput.value = text;
                filterScientists(text);
                scrollToSection('scientists');

                // Check if it matches a scientist name and open their modal
                const match = scientists.find(s =>
                    s.name.toLowerCase().includes(text.toLowerCase()) ||
                    text.toLowerCase().includes(s.name.toLowerCase().split(' ').pop())
                );
                if (match) {
                    setTimeout(() => openModal(match), 500);
                }
            });
            STT.toggleListening(heroMic, heroStatus);
        });
    }

    // Quiz mic
    const quizMic = document.getElementById('quizMicBtn');
    if (quizMic) {
        quizMic.addEventListener('click', () => {
            STT.onResult((text) => {
                if (quizState.answered) return;
                const q = quizState.questions[quizState.currentQuestion];
                if (!q) return;
                const lang = I18N.getLang();

                // Try to match spoken answer to quiz options
                const spokenLower = text.toLowerCase();
                let matchIndex = -1;
                const options = q.options[lang] || q.options.en;

                options.forEach((opt, i) => {
                    if (spokenLower.includes(opt.toLowerCase()) ||
                        opt.toLowerCase().includes(spokenLower)) {
                        matchIndex = i;
                    }
                });

                if (matchIndex >= 0) {
                    answerQuestion(matchIndex);
                } else {
                    TTS.speak(I18N.t('ui.voiceNotRecognized'));
                }
            });
            STT.toggleListening(quizMic, null);
        });
    }
}

// ─── TTS HANDLERS ───
function initTTSHandlers() {
    const welcomeBtn = document.getElementById('btnWelcomeTTS');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', () => {
            const lang = I18N.getLang();
            TTS.speak(I18N.getTranslations().welcome[lang], welcomeBtn);
        });
    }
}

// ─── SCROLL ANIMATIONS ───
function observeElements() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scientist-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}
