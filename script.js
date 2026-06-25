/* ============================================
   LAPIS VIVUS — Landing Page Scripts
   ============================================ */

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.modes': 'Modes',
    'nav.protocol': 'Protocol',
    'nav.community': 'Community',
    'nav.howItWorks': 'How to start',
    'nav.payment': 'Payment',
    'nav.faq': 'FAQ',
    'cta.openBot': 'Open bot',
    'cta.startNow': 'Start now',

    'hero.eyebrow': 'Individual route',
    'hero.titleLine1': 'Personal deep-analysis',
    'hero.titleAccent': 'protocol',
    'hero.titleLine2': 'in Telegram',
    'hero.subtitle': 'The only bot that builds your personal code step by step — 36 deep stages, three modes, and an Oracle that remembers your entire journey.',
    'hero.chip1': 'Not a template — your route',
    'hero.chip2': 'Community & 24/7 support',
    'hero.chip3': '36 stages · 5 parts',
    'hero.ctaPrimary': 'Start in bot',
    'hero.ctaSecondary': 'See modes',
    'hero.risk': 'Premium format · Support on your side · RU / EN',
    'hero.suiteLabel': 'Three modes — one ecosystem',
    'hero.suite1.title': 'Protocol',
    'hero.suite1.desc': '36 stages in 5 parts — your personal code from personality roots to action strategy',
    'hero.suite2.title': 'Compatibility',
    'hero.suite2.desc': 'Two profiles, bond dynamics, and a final verdict — for couples, family, or business',
    'hero.suite3.title': 'Oracle',
    'hero.suite3.desc': 'AI dialogue with memory of your route — answers in the context of your chart, not from thin air',
    'hero.suiteNote': 'Plus a private community and 24/7 support — all in Telegram, no extra apps',

    'proof.protocol.tag': 'Protocol',
    'proof.protocol.title': 'Stages of deep analysis',
    'proof.protocol.desc': 'Five route parts: from origin matrix to strategy and integration. Targeted request or full path — progress saved in your profile.',
    'proof.match.tag': 'Compatibility',
    'proof.match.title': 'Pair report with verdict',
    'proof.match.desc': 'Two birth profiles, bond dynamics, strengths and risks — final recommendation for your context: relationships, family, business.',
    'proof.oracle.tag': 'Oracle',
    'proof.oracle.title': 'Dialogue with route memory',
    'proof.oracle.desc': 'AI sees your profile and completed stages. Personal questions — in chart context. Team support always on your side.',

    'community.eyebrow': 'More than a bot',
    'community.title': 'The Lapis Vivus community',
    'community.desc': 'This is not just a bot chat — you enter a private space of people who work on themselves with depth and structure. Live conversation, breakdowns, product materials, updates, and a team that guides you from the first step to results.',
    'community.lead': 'The bot delivers analytical depth. The community gives you an environment where that depth is not lost.',
    'community.cta': 'Join @LapisVivus',
    'community.ctaBot': 'Start in bot',
    'community.note': 'Analysis + people + support in one premium ecosystem — join when you are ready to go deep',

    'perks.p1.title': 'Private space',
    'perks.p1.desc': 'A community of like-minded people in self-knowledge and profile analytics — without noise, random advice, or shallow takes.',
    'perks.p2.title': '24/7 support',
    'perks.p2.desc': 'Real people, not auto-replies: we help with the bot, modes, payment, and route navigation — at every step.',
    'perks.p3.title': 'Three modes in one place',
    'perks.p3.desc': 'Protocol, pair compatibility, and Oracle — switch tasks without losing your profile and history.',
    'perks.p4.title': 'A growing profile',
    'perks.p4.desc': 'Each session sharpens the picture: stages, interpretations, and context are saved — analytics get more precise over time.',
    'perks.p5.title': 'Oracle with memory',
    'perks.p5.desc': 'A dialogue that knows your entire route — not an empty chat, but answers grounded in completed stages and your chart.',
    'perks.p6.title': 'Living ecosystem',
    'perks.p6.desc': 'News, insights, discussions, and product updates — you always know what is happening inside Lapis Vivus.',

    'services.eyebrow': 'Three modes',
    'services.title': 'Protocol · Compatibility · Oracle',
    'services.subtitle': 'Three powerful scenarios in one premium bot. Choose the depth for your task — from a single question to a full route and live dialogue with the Oracle.',
    'services.protocol.badge': 'Personal route',
    'services.protocol.title': 'Protocol',
    'services.protocol.desc': 'Your personal analytical code: 36 stages in 5 parts — from personality roots and archetypes to action strategy. Not a one-off reading, but a built route that accumulates in your profile.',
    'services.protocol.tag1': '36 stages',
    'services.protocol.tag2': '5 parts',
    'services.protocol.tag3': 'Targeted request',
    'services.protocol.tag4': 'Full route',
    'services.protocol.tag5': 'Profile',
    'services.protocol.f1': 'Goal tree for your question — the bot picks the right stage',
    'services.protocol.f2': 'Full route: all 5 parts in sequence, without losing logic',
    'services.protocol.f3': 'Progress, interpretations, and data saved between sessions',
    'services.protocol.f4': 'Long answers split into pages — easy to read in Telegram',
    'services.protocol.f5': 'Each stage: description → run → interpretation → next step',
    'services.protocol.link': 'Protocol details →',
    'services.match.badge': 'For two',
    'services.match.title': 'Pair compatibility',
    'services.match.desc': 'A deep read of the bond between two people: how you affect each other, strengths, risks — and what to do next. Verdict and recommendations for the context you define.',
    'services.match.goal1': 'Relationships',
    'services.match.goal2': 'Family',
    'services.match.goal3': 'Business',
    'services.match.goal4': 'Friendship',
    'services.match.goal5': 'Custom context',
    'services.match.f1': 'Both birth profiles collected in one scenario',
    'services.match.f2': 'Bond dynamics: alignments, tensions, growth zones',
    'services.match.f3': 'Final verdict with a concrete recommendation — not abstraction',
    'services.match.f4': 'Full report paginated, like in the protocol',
    'services.match.f5': 'For couples, relatives, partners, and any bond you define',
    'services.match.link': 'Compatibility details →',
    'services.oracle.badge': 'Profile-aware',
    'services.oracle.title': 'Oracle',
    'services.oracle.desc': 'An AI guide that knows your entire protocol: profile, completed stages, accumulated interpretations. Ask personal questions — get answers in the logic of your chart.',
    'services.oracle.tag1': 'Route memory',
    'services.oracle.tag2': 'Personal questions',
    'services.oracle.tag3': 'Chart context',
    'services.oracle.tag4': 'Chat archive',
    'services.oracle.tag5': 'Not a template',
    'services.oracle.f1': 'Sees your profile and every stage you have completed',
    'services.oracle.f2': '1 active chat · up to 10 replies per session — depth over noise',
    'services.oracle.f3': 'Up to 5 chats in archive — return to important dialogues',
    'services.oracle.f4': 'Answers tied to your route, not generic templates',
    'services.oracle.f5': 'Ideal for follow-ups after protocol or compatibility',
    'services.oracle.link': 'More in FAQ →',

    'how.eyebrow': 'Your path',
    'how.title': 'Four steps to clarity',
    'how.step1.title': 'Open the bot',
    'how.step1.desc': 'Launch in Telegram — and you\'re already inside the Lapis Vivus premium ecosystem.',
    'how.step2.title': 'Create your profile',
    'how.step2.desc': 'Birth date, time, and place — the foundation of an accurate personal route.',
    'how.step3.title': 'Choose your mode',
    'how.step3.desc': 'Protocol for yourself, compatibility for a pair, or Oracle for dialogue — matched to your goal.',
    'how.step4.title': 'Go deeper',
    'how.step4.desc': 'Get interpretations, build progress, and stay with 24/7 support and the community.',

    'protocol.eyebrow': 'Inside the protocol',
    'protocol.title': 'Five parts · 36 stages',
    'protocol.subtitle': 'Not one answer — a built route. Each stage: description → run → interpretation → clarification or next step.',
    'protocol.modesLabel': 'Two launch modes',
    'protocol.mode1.title': 'Targeted request',
    'protocol.mode1.desc': 'Goal tree: the bot picks the stage for your question — character, crisis, relationships, career, etc.',
    'protocol.mode2.title': 'Full route',
    'protocol.mode2.desc': 'All 5 parts in sequence — from origin to integration.',
    'protocol.stage1.label': 'Part I',
    'protocol.stage1.title': 'Origin',
    'protocol.stage1.desc': 'Origin matrix, numerical code, cognitive architecture, Tzolkin cycle, somatic map — the route foundation.',
    'protocol.stage2.label': 'Part II',
    'protocol.stage2.title': 'Eastern arcana',
    'protocol.stage2.desc': 'Wu Xing, Vedic natal and dynamic chart (Jyotish), transits — the Eastern analysis layer.',
    'protocol.stage3.label': 'Part III',
    'protocol.stage3.title': 'Celestial chart',
    'protocol.stage3.desc': 'Tropical natal chart, transits, chiromancy (palms), chrononavigation.',
    'protocol.stage4.label': 'Part IV',
    'protocol.stage4.title': 'Synthesis',
    'protocol.stage4.desc': 'Graph analysis, Eastern and gnostic processors, alchemical catalyst, pattern integration.',
    'protocol.stage5.label': 'Part V',
    'protocol.stage5.title': 'Integration',
    'protocol.stage5.desc': 'Strategic protocol and somatic integration — the practical outcome of the route.',

    'forWhom.eyebrow': 'For whom',
    'forWhom.title': 'If you want depth — you\'re in the right place',
    'forWhom.i1': 'Tired of scattered answers — you want a system that becomes a whole',
    'forWhom.i2': 'You need an honest pair analysis with a conclusion, not a «compatibility %»',
    'forWhom.i3': 'You value dialogue where AI remembers your journey — not starting from zero',
    'forWhom.i4': 'Ready to invest time in yourself — and get a route, not a brush-off',

    'why.eyebrow': 'Advantages',
    'why.title': 'Why Lapis Vivus',
    'why.i1': 'Your route — not someone else\'s template',
    'why.i2': '36 stages — multiple systems in one map',
    'why.i3': 'One question or full run — you decide',
    'why.i4': 'Every session strengthens your profile',
    'why.i5': 'Compatibility with a verdict — not empty numbers',
    'why.i6': 'Community + 24/7 support around the product',

    'telegram.eyebrow': 'Bot interface',
    'telegram.title': 'Premium experience in Telegram',
    'telegram.desc': 'Convenient interface, step-by-step format, growing profile, and a team always in touch. Everything for deep work on yourself — in one place.',
    'telegram.feature1': 'Your personal route at your pace — scroll, return, go deeper',
    'telegram.feature2': '@LapisVivus community — people who are «in the topic»',
    'telegram.feature3': '24/7 support: @nikitok_m',
    'telegram.cta': 'Open bot',
    'telegram.botStatus': 'online',
    'telegram.chat1': 'Birth profile saved. Part I · stage 3. Run interpretation?',
    'telegram.chat2': 'Full route — continue',
    'telegram.chat3': 'Interpretation ready. Scroll pages ↓ Clarifying question or next stage?',

    'payment.eyebrow': 'Payment',
    'payment.title': 'Pay only for what you choose',
    'payment.subtitle': 'Transparent in-bot balance: see the price before paying, top up easily, use as you go.',
    'payment.f1': 'Top-up via YooKassa: from ₽50 to ₽100,000',
    'payment.f2': 'Payment invoice valid for 10 minutes',
    'payment.f3': 'Some functions are paid — balance debited per selected mode',
    'payment.f4': 'Shop in development; balance top-up already works',
    'payment.cta': 'Go to bot',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Common questions',
    'faq.q1': 'What does the Lapis Vivus community offer?',
    'faq.a1': 'A private space of like-minded people, product materials and updates, live conversation, and connection with the team. The bot is for analysis; the community is for environment and support around it.',
    'faq.q2': 'What do I need to start?',
    'faq.a2': 'Telegram and a few minutes to begin. Create your birth profile in the bot — then choose a mode: protocol, compatibility, or Oracle. Support will help at any step.',
    'faq.q3': 'How long does the full protocol take?',
    'faq.a3': 'Depends on your pace. Stages run sequentially; progress is saved — you can return later.',
    'faq.q4': 'Can I ask one question without a full run?',
    'faq.a4': 'Yes. «Targeted request» mode — goal tree: the bot picks the right stage for your question.',
    'faq.q5': 'How is the Oracle different from ChatGPT?',
    'faq.a5': 'The Oracle sees your Lapis Vivus profile and completed protocol stages. Up to 10 replies per active chat, up to 5 archived chats.',
    'faq.q6': 'How do I pay?',
    'faq.a6': 'In-bot balance in rubles. Top-up via YooKassa (₽50–100,000). Invoice valid 10 minutes. Prices — in the bot before payment.',
    'faq.q7': 'Is this medicine or fortune-telling?',
    'faq.a7': 'No. Information and analytical service. Not medical, legal, or financial advice.',
    'faq.q8': 'Where is support?',
    'faq.a8': 'Telegram: @nikitok_m — https://t.me/nikitok_m',

    'footer.tagline': 'Personal deep-analysis protocol',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Offer',
    'footer.support': 'Support',
    'footer.community': 'Community',
    'footer.disclaimer': 'Materials are for information and analysis only. Not medical, legal, financial, or other professional advice. You make your own decisions.',
    'footer.rights': 'All rights reserved.',

    'legal.back': 'Back to home',

    'ctaFinal.eyebrow': 'Start now',
    'ctaFinal.title': 'Your personal route starts here',
    'ctaFinal.desc': '36 stages of depth, three modes, an Oracle that remembers your protocol, and a community of those who go deep. Take the first step today.',
    'ctaFinal.ctaCommunity': 'Join community',
    'ctaFinal.ctaBot': 'Start in bot',
    'ctaFinal.note': '24/7 support · @nikitok_m · RU / EN in bot'
  },

  ru: {
    'nav.home': 'Главная',
    'nav.modes': 'Режимы',
    'nav.community': 'Сообщество',
    'nav.protocol': 'Протокол',
    'nav.howItWorks': 'Как начать',
    'nav.payment': 'Оплата',
    'nav.faq': 'FAQ',
    'cta.openBot': 'Открыть бот',
    'cta.startNow': 'Начать сейчас',

    'hero.eyebrow': 'Индивидуальный маршрут',
    'hero.titleLine1': 'Персональный протокол',
    'hero.titleAccent': 'глубинного анализа',
    'hero.titleLine2': 'в Telegram',
    'hero.subtitle': 'Единственный бот, который выстраивает ваш код личности поэтапно — 36 глубинных этапов, три режима работы и Оракул, который помнит весь ваш путь.',
    'hero.chip1': 'Не шаблон — ваш маршрут',
    'hero.chip2': 'Сообщество и поддержка 24/7',
    'hero.chip3': '36 этапов · 5 частей',
    'hero.ctaPrimary': 'Начать в боте',
    'hero.ctaSecondary': 'Смотреть режимы',
    'hero.risk': 'Премиум-формат · Поддержка на вашей стороне · RU / EN',
    'hero.suiteLabel': 'Три режима — одна экосистема',
    'hero.suite1.title': 'Протокол',
    'hero.suite1.desc': '36 этапов в 5 частях — ваш личный код от корней личности до стратегии действий',
    'hero.suite2.title': 'Совместимость',
    'hero.suite2.desc': 'Два профиля, динамика связи и итоговый вердикт — для пары, семьи или бизнеса',
    'hero.suite3.title': 'Оракул',
    'hero.suite3.desc': 'ИИ-диалог с памятью вашего маршрута — ответы в контексте карты, не из воздуха',
    'hero.suiteNote': 'Плюс закрытое сообщество и поддержка 24/7 — всё в Telegram, без лишних приложений',

    'proof.protocol.tag': 'Протокол',
    'proof.protocol.title': 'Этапов глубинного анализа',
    'proof.protocol.desc': 'Пять частей маршрута: от матрицы происхождения до стратегии и интеграции. Точечный запрос или полный путь — прогресс сохраняется в профиле.',
    'proof.match.tag': 'Совместимость',
    'proof.match.title': 'Отчёт по паре с вердиктом',
    'proof.match.desc': 'Два профиля рождения, динамика связи, сильные стороны и риски — итоговая рекомендация под ваш контекст: отношения, семья, бизнес.',
    'proof.oracle.tag': 'Оракул',
    'proof.oracle.title': 'Диалог с памятью маршрута',
    'proof.oracle.desc': 'ИИ видит ваш профиль и пройденные этапы. Личные вопросы — с контекстом карты. Поддержка команды всегда на вашей стороне.',

    'community.eyebrow': 'Больше, чем бот',
    'community.title': 'Сообщество Lapis Vivus',
    'community.desc': 'Это не просто чат с ботом — вы входите в закрытую среду людей, которым важны глубина, структура и честная работа с собой. Живое общение, разборы, материалы по продукту, анонсы обновлений и команда, которая ведёт вас от первого шага до результата.',
    'community.lead': 'Бот даёт глубину анализа. Сообщество даёт среду, в которой эта глубина не теряется.',
    'community.cta': 'Вступить в @LapisVivus',
    'community.ctaBot': 'Начать в боте',
    'community.note': 'Анализ + люди + поддержка в одной премиум-экосистеме — вступайте, когда будете готовы идти вглубь',

    'perks.p1.title': 'Закрытая среда',
    'perks.p1.desc': 'Сообщество единомышленников в теме самопознания и аналитики профиля — без шума, случайных советов и поверхностных разборов.',
    'perks.p2.title': 'Поддержка 24/7',
    'perks.p2.desc': 'Живые люди, а не автоответчик: помогаем с ботом, режимами, оплатой и навигацией по маршруту — на каждом этапе пути.',
    'perks.p3.title': 'Три режима в одном месте',
    'perks.p3.desc': 'Протокол, совместимость пары и Оракул — переключайтесь между задачами, не теряя накопленный профиль и историю.',
    'perks.p4.title': 'Профиль, который растёт',
    'perks.p4.desc': 'Каждая сессия дополняет картину: этапы, интерпретации и контекст сохраняются — аналитика становится точнее с каждым шагом.',
    'perks.p5.title': 'Оракул с памятью',
    'perks.p5.desc': 'Диалог, который знает ваш маршрут целиком — не пустой чат, а ответы с опорой на пройденные этапы и вашу карту.',
    'perks.p6.title': 'Живая экосистема',
    'perks.p6.desc': 'Новости, инсайты, обсуждения и обновления продукта — вы всегда в курсе, что происходит внутри Lapis Vivus.',

    'services.eyebrow': 'Три режима',
    'services.title': 'Протокол · Совместимость · Оракул',
    'services.subtitle': 'Три мощных сценария в одном премиум-боте. Выбирайте глубину под задачу — от точечного вопроса до полного маршрута и живого диалога с Оракулом.',
    'services.protocol.badge': 'Личный маршрут',
    'services.protocol.title': 'Протокол',
    'services.protocol.desc': 'Ваш личный аналитический код: 36 этапов в 5 частях — от корней личности и архетипов до стратегии действий. Не разовый «разбор», а выстроенный маршрут, который копится в профиле.',
    'services.protocol.tag1': '36 этапов',
    'services.protocol.tag2': '5 частей',
    'services.protocol.tag3': 'Точечный запрос',
    'services.protocol.tag4': 'Полный маршрут',
    'services.protocol.tag5': 'Профиль',
    'services.protocol.f1': 'Дерево целей под ваш вопрос — бот подбирает нужный этап',
    'services.protocol.f2': 'Полный маршрут: все 5 частей последовательно, без потери логики',
    'services.protocol.f3': 'Прогресс, интерпретации и данные сохраняются между сессиями',
    'services.protocol.f4': 'Длинные ответы разбиты на страницы — удобно читать в Telegram',
    'services.protocol.f5': 'Каждый этап: описание → запуск → интерпретация → следующий шаг',
    'services.protocol.link': 'Подробнее о протоколе →',
    'services.match.badge': 'Для двоих',
    'services.match.title': 'Совместимость пары',
    'services.match.desc': 'Глубокий разбор связи двух людей: как вы влияете друг на друга, где сильные стороны, где риски — и что делать дальше. Вердикт и рекомендации под контекст, который задаёте вы.',
    'services.match.goal1': 'Отношения',
    'services.match.goal2': 'Семья',
    'services.match.goal3': 'Бизнес',
    'services.match.goal4': 'Дружба',
    'services.match.goal5': 'Свой контекст',
    'services.match.f1': 'Сбор профилей рождения обоих участников в одном сценарии',
    'services.match.f2': 'Динамика связи: совпадения, напряжения, зоны роста',
    'services.match.f3': 'Итоговый вердикт с конкретной рекомендацией — не абстракция',
    'services.match.f4': 'Полный отчёт листается по страницам, как в протоколе',
    'services.match.f5': 'Подходит для пары, родственников, партнёров и любых связей',
    'services.match.link': 'Подробнее о совместимости →',
    'services.oracle.badge': 'С контекстом профиля',
    'services.oracle.title': 'Оракул',
    'services.oracle.desc': 'ИИ-проводник, который знает ваш протокол целиком: профиль, пройденные этапы, накопленные интерпретации. Задавайте личные вопросы — получайте ответы в логике вашей карты.',
    'services.oracle.tag1': 'Память маршрута',
    'services.oracle.tag2': 'Личные вопросы',
    'services.oracle.tag3': 'Контекст карты',
    'services.oracle.tag4': 'Архив чатов',
    'services.oracle.tag5': 'Не шаблон',
    'services.oracle.f1': 'Видит профиль и каждый этап, который вы уже прошли',
    'services.oracle.f2': '1 активный чат · до 10 ответов в сессии — фокус на глубине',
    'services.oracle.f3': 'До 5 чатов в архиве — возвращайтесь к важным диалогам',
    'services.oracle.f4': 'Ответы привязаны к вашему маршруту, а не к общим шаблонам',
    'services.oracle.f5': 'Идеален для уточнений после протокола или совместимости',
    'services.oracle.link': 'Подробнее в FAQ →',

    'how.eyebrow': 'Ваш путь',
    'how.title': 'Четыре шага к ясности',
    'how.step1.title': 'Откройте бот',
    'how.step1.desc': 'Запуск в Telegram — и вы уже внутри премиум-экосистемы Lapis Vivus.',
    'how.step2.title': 'Создайте профиль',
    'how.step2.desc': 'Дата, время, место рождения — основа точного персонального маршрута.',
    'how.step3.title': 'Выберите режим',
    'how.step3.desc': 'Протокол для себя, совместимость для пары или Оракул для диалога — под вашу задачу.',
    'how.step4.title': 'Идите в глубину',
    'how.step4.desc': 'Получайте интерпретации, копите прогресс и оставайтесь с поддержкой 24/7 и сообществом.',

    'protocol.eyebrow': 'Протокол изнутри',
    'protocol.title': 'Пять частей · 36 этапов',
    'protocol.subtitle': 'Не один ответ — выстроенный маршрут. На каждом этапе: описание → запуск → интерпретация → уточнение или следующий шаг.',
    'protocol.modesLabel': 'Два режима запуска',
    'protocol.mode1.title': 'Точечный запрос',
    'protocol.mode1.desc': 'Дерево целей: бот подбирает этап под вопрос — характер, кризис, отношения, карьера и др.',
    'protocol.mode2.title': 'Полный маршрут',
    'protocol.mode2.desc': 'Все 5 частей последовательно — от происхождения до интеграции.',
    'protocol.stage1.label': 'Часть I',
    'protocol.stage1.title': 'Происхождение',
    'protocol.stage1.desc': 'Матрица происхождения, числовой код, когнитивная архитектура, цикл Цолькин, соматическая карта — фундамент маршрута.',
    'protocol.stage2.label': 'Часть II',
    'protocol.stage2.title': 'Восточная аркана',
    'protocol.stage2.desc': 'У-Син, ведическая натальная и динамическая карта (джйотиш), транзиты — восточный слой анализа.',
    'protocol.stage3.label': 'Часть III',
    'protocol.stage3.title': 'Небесная карта',
    'protocol.stage3.desc': 'Тропическая натальная карта, транзиты, хиромантия (ладони), хрононавигация.',
    'protocol.stage4.label': 'Часть IV',
    'protocol.stage4.title': 'Синтез',
    'protocol.stage4.desc': 'Графовый анализ, восточные и гностические процессоры, алхимический катализ, интеграция паттернов.',
    'protocol.stage5.label': 'Часть V',
    'protocol.stage5.title': 'Интеграция',
    'protocol.stage5.desc': 'Стратегический протокол и соматическая интеграция — практический выход маршрута.',

    'forWhom.eyebrow': 'Для кого',
    'forWhom.title': 'Если вам нужна глубина — вы по адресу',
    'forWhom.i1': 'Устали от разрозненных ответов — хотите систему, которая складывается в целое',
    'forWhom.i2': 'Нужен честный разбор пары с выводом, а не «процент совместимости»',
    'forWhom.i3': 'Цените диалог, где ИИ помнит ваш путь — не начинает с нуля',
    'forWhom.i4': 'Готовы инвестировать время в себя — и получить маршрут, а не отписку',

    'why.eyebrow': 'Преимущества',
    'why.title': 'Почему Lapis Vivus',
    'why.i1': 'Ваш маршрут — не чужой шаблон',
    'why.i2': '36 этапов — синтез систем в одну карту',
    'why.i3': 'Точечный вопрос или полный прогон — вы решаете',
    'why.i4': 'Каждая сессия усиливает профиль',
    'why.i5': 'Совместимость с вердиктом — не пустые цифры',
    'why.i6': 'Сообщество + поддержка 24/7 вокруг продукта',

    'telegram.eyebrow': 'Интерфейс бота',
    'telegram.title': 'Премиум-опыт в Telegram',
    'telegram.desc': 'Удобный интерфейс, пошаговый формат, накопительный профиль и команда, которая всегда на связи. Всё, что нужно для глубокой работы с собой — в одном месте.',
    'telegram.feature1': 'Персональный маршрут без спешки — листайте, возвращайтесь, углубляйтесь',
    'telegram.feature2': 'Сообщество @LapisVivus — среда людей «в теме»',
    'telegram.feature3': 'Поддержка 24/7: @nikitok_m',
    'telegram.cta': 'Открыть бот',
    'telegram.botStatus': 'онлайн',
    'telegram.chat1': 'Профиль рождения сохранён. Часть I · этап 3. Запустить интерпретацию?',
    'telegram.chat2': 'Полный маршрут — продолжаем',
    'telegram.chat3': 'Интерпретация готова. Листайте страницы ↓ Уточняющий вопрос или следующий этап?',

    'payment.eyebrow': 'Оплата',
    'payment.title': 'Платите только за то, что выбираете',
    'payment.subtitle': 'Прозрачный баланс в боте: видите стоимость до оплаты, пополняете удобно, используете по мере необходимости.',
    'payment.f1': 'Пополнение через ЮKassa: от 50 ₽ до 100 000 ₽',
    'payment.f2': 'Счёт на оплату действует 10 минут',
    'payment.f3': 'Часть функций платная — баланс списывается по выбранному режиму',
    'payment.f4': 'Магазин в разработке; пополнение баланса уже работает',
    'payment.cta': 'Перейти в бот',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Частые вопросы',
    'faq.q1': 'Что даёт сообщество Lapis Vivus?',
    'faq.a1': 'Закрытую среду единомышленников, материалы и обновления по продукту, живое общение и связь с командой. Бот — для анализа, сообщество — для среды и поддержки вокруг него.',
    'faq.q2': 'Что нужно для старта?',
    'faq.a2': 'Telegram и пара минут на старт. Создайте профиль рождения в боте — и выберите режим: протокол, совместимость или Оракул. Поддержка поможет на любом шаге.',
    'faq.q3': 'Сколько длится полный протокол?',
    'faq.a3': 'Зависит от вашего темпа. Этапы проходятся последовательно; прогресс сохраняется в профиле — можно возвращаться позже.',
    'faq.q4': 'Можно один вопрос без полного прогона?',
    'faq.a4': 'Да. Режим «Точечный запрос» — дерево целей: бот подбирает нужный этап под ваш вопрос.',
    'faq.q5': 'Чем Оракул отличается от ChatGPT?',
    'faq.a5': 'Оракул видит ваш профиль Lapis Vivus и пройденные этапы протокола. До 10 ответов в активном чате, до 5 чатов в архиве.',
    'faq.q6': 'Как оплатить?',
    'faq.a6': 'Внутренний баланс в рублях. Пополнение через ЮKassa (50–100 000 ₽). Счёт действует 10 минут. Стоимость — в боте до оплаты.',
    'faq.q7': 'Это медицина или гадание?',
    'faq.a7': 'Нет. Информационно-аналитический сервис. Не заменяет медицинскую, юридическую или финансовую консультацию.',
    'faq.q8': 'Куда писать в поддержку?',
    'faq.a8': 'Telegram: @nikitok_m — https://t.me/nikitok_m',

    'footer.tagline': 'Персональный протокол глубинного анализа',
    'footer.privacy': 'Политика',
    'footer.terms': 'Оферта',
    'footer.support': 'Поддержка',
    'footer.community': 'Сообщество',
    'footer.disclaimer': 'Материалы носят информационно-аналитический характер. Не являются медицинской, юридической, финансовой или иной профессиональной консультацией. Решения пользователь принимает самостоятельно.',
    'footer.rights': 'Все права защищены.',

    'legal.back': 'На главную',

    'ctaFinal.eyebrow': 'Начните сейчас',
    'ctaFinal.title': 'Ваш персональный маршрут начинается здесь',
    'ctaFinal.desc': '36 этапов глубины, три режима, Оракул с памятью протокола и сообщество тех, кто идёт вглубь. Сделайте первый шаг сегодня.',
    'ctaFinal.ctaCommunity': 'Вступить в сообщество',
    'ctaFinal.ctaBot': 'Начать в боте',
    'ctaFinal.note': 'Поддержка 24/7 · @nikitok_m · RU / EN в боте'
  }
};

const legalDocs = {
  ru: {
    offer: {
      html: `
        <h1 class="legal-doc__title">Публичная оферта</h1>
        <p class="legal-doc__updated">Редакция от 22 июня 2025 г.</p>
        <p>Настоящий документ является официальным предложением (публичной офертой) владельца сервиса Lapis Vivus заключить договор на условиях, изложенных ниже.</p>
        <h2>1. Термины</h2>
        <p><strong>Сервис</strong> — Telegram-бот <a href="https://t.me/LapisVivus_bot" target="_blank" rel="noopener noreferrer">@LapisVivus_bot</a> и сопутствующие материалы на сайте lapis-vivus.vercel.app.</p>
        <p><strong>Пользователь</strong> — физическое лицо, использующее Сервис. <strong>Исполнитель</strong> — лицо, предоставляющее доступ к Сервису.</p>
        <h2>2. Предмет договора</h2>
        <p>Исполнитель предоставляет Пользователю доступ к информационно-аналитическим функциям Сервиса: персональный протокол, режим совместимости, Оракул, а также сопутствующие материалы и сообщество.</p>
        <p>Материалы носят информационно-аналитический характер и не являются медицинской, юридической, финансовой или иной профессиональной консультацией.</p>
        <h2>3. Порядок акцепта</h2>
        <p>Акцептом оферты считается начало использования Сервиса: запуск бота, пополнение баланса или оплата услуг. С момента акцепта договор считается заключённым.</p>
        <h2>4. Стоимость и оплата</h2>
        <ul>
          <li>Услуги предоставляются на платной основе через внутренний баланс в рублях.</li>
          <li>Пополнение — через платёжную систему ЮKassa (от 50 до 100 000 ₽).</li>
          <li>Актуальные цены отображаются в боте до подтверждения оплаты.</li>
          <li>Счёт на оплату действует 10 минут с момента выставления.</li>
        </ul>
        <h2>5. Права и обязанности сторон</h2>
        <p>Пользователь обязуется предоставлять достоверные данные, не нарушать правила Telegram и не использовать Сервис в противоправных целях.</p>
        <p>Исполнитель обеспечивает работу Сервиса в разумных пределах, вправе обновлять функциональность и приостанавливать доступ при технических работах или нарушении правил.</p>
        <h2>6. Отказ от гарантий</h2>
        <p>Результаты анализа формируются алгоритмически на основе введённых данных. Исполнитель не гарантирует достижение конкретных жизненных результатов. Решения Пользователь принимает самостоятельно.</p>
        <h2>7. Возвраты</h2>
        <p>Вопросы по возврату средств рассматриваются индивидуально при обращении в поддержку <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a> в течение 14 дней с момента оплаты, если услуга фактически не была оказана по вине Исполнителя.</p>
        <h2>8. Персональные данные</h2>
        <p>Обработка персональных данных осуществляется в соответствии с <a href="#legal-privacy" class="js-legal-link" data-legal="privacy">Политикой конфиденциальности</a>.</p>
        <h2>9. Заключительные положения</h2>
        <p>Исполнитель вправе изменять условия оферты. Актуальная версия публикуется на сайте. Продолжение использования Сервиса означает согласие с новой редакцией.</p>
        <p>По всем вопросам: <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a></p>
      `
    },
    privacy: {
      html: `
        <h1 class="legal-doc__title">Политика конфиденциальности</h1>
        <p class="legal-doc__updated">Редакция от 22 июня 2025 г.</p>
        <p>Настоящая Политика описывает порядок обработки персональных данных пользователей сервиса Lapis Vivus (Telegram-бот <a href="https://t.me/LapisVivus_bot" target="_blank" rel="noopener noreferrer">@LapisVivus_bot</a> и сайт lapis-vivus.vercel.app).</p>
        <h2>1. Какие данные мы обрабатываем</h2>
        <ul>
          <li>Идентификатор Telegram и имя пользователя в мессенджере.</li>
          <li>Данные профиля для анализа: дата, время и место рождения, пол и иные сведения, которые вы добровольно указываете в боте.</li>
          <li>История запросов, этапов протокола, чатов с Оракулом и настроек внутри Сервиса.</li>
          <li>Технические данные: язык интерфейса, сведения о сессии, обезличенная аналитика посещения сайта.</li>
          <li>Платёжные метаданные при пополнении баланса (сумма, статус операции) — без хранения полных реквизитов банковских карт на нашей стороне.</li>
        </ul>
        <h2>2. Цели обработки</h2>
        <ul>
          <li>Предоставление функций Сервиса и персонализация аналитики.</li>
          <li>Обработка платежей и ведение внутреннего баланса.</li>
          <li>Техническая поддержка пользователей.</li>
          <li>Улучшение качества продукта и безопасности.</li>
        </ul>
        <h2>3. Правовые основания</h2>
        <p>Обработка осуществляется на основании согласия Пользователя, необходимости исполнения договора (оферты) и законных интересов Исполнителя по обеспечению работоспособности Сервиса.</p>
        <h2>4. Передача третьим лицам</h2>
        <p>Данные могут передаваться платформе Telegram, платёжному провайдеру ЮKassa, а также техническим подрядчикам (хостинг, инфраструктура) исключительно для оказания услуг. Передача осуществляется при соблюдении мер защиты и в объёме, необходимом для работы Сервиса.</p>
        <h2>5. Хранение и защита</h2>
        <p>Данные хранятся столько, сколько необходимо для целей обработки или в сроки, установленные законом. Применяются организационные и технические меры защиты от несанкционированного доступа.</p>
        <h2>6. Права пользователя</h2>
        <p>Вы вправе запросить доступ к своим данным, их уточнение, ограничение обработки или удаление, направив обращение в поддержку <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a>.</p>
        <h2>7. Изменения политики</h2>
        <p>Мы можем обновлять Политику. Актуальная версия всегда доступна на этой странице. При существенных изменениях уведомим через бот или сообщество.</p>
        <p>Контакт для вопросов по данным: <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a></p>
      `
    }
  },
  en: {
    offer: {
      html: `
        <h1 class="legal-doc__title">Public Offer Agreement</h1>
        <p class="legal-doc__updated">Effective June 22, 2025</p>
        <p>This document is a public offer by the owner of Lapis Vivus to enter into an agreement on the terms below.</p>
        <h2>1. Definitions</h2>
        <p><strong>Service</strong> — the Telegram bot <a href="https://t.me/LapisVivus_bot" target="_blank" rel="noopener noreferrer">@LapisVivus_bot</a> and related materials at lapis-vivus.vercel.app.</p>
        <p><strong>User</strong> — an individual using the Service. <strong>Provider</strong> — the party granting access to the Service.</p>
        <h2>2. Subject</h2>
        <p>The Provider grants access to information and analytical features: personal protocol, compatibility mode, Oracle, related materials, and community access.</p>
        <p>Materials are for information and analysis only and are not medical, legal, financial, or other professional advice.</p>
        <h2>3. Acceptance</h2>
        <p>Acceptance occurs when you start using the Service: launching the bot, topping up balance, or paying for services. The agreement is deemed concluded upon acceptance.</p>
        <h2>4. Pricing and payment</h2>
        <ul>
          <li>Services are paid via an in-bot balance in rubles.</li>
          <li>Top-up via YooKassa (₽50–100,000).</li>
          <li>Current prices are shown in the bot before payment confirmation.</li>
          <li>Payment invoices are valid for 10 minutes.</li>
        </ul>
        <h2>5. Rights and obligations</h2>
        <p>The User must provide accurate data, comply with Telegram rules, and not use the Service for unlawful purposes.</p>
        <p>The Provider maintains the Service within reasonable limits, may update functionality, and may suspend access for maintenance or rule violations.</p>
        <h2>6. Disclaimer</h2>
        <p>Analysis results are generated algorithmically from data you provide. The Provider does not guarantee specific life outcomes. You make your own decisions.</p>
        <h2>7. Refunds</h2>
        <p>Refund requests are reviewed individually via support <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a> within 14 days of payment if the service was not delivered due to the Provider's fault.</p>
        <h2>8. Personal data</h2>
        <p>Data is processed according to the <a href="#legal-privacy" class="js-legal-link" data-legal="privacy">Privacy Policy</a>.</p>
        <h2>9. Final provisions</h2>
        <p>The Provider may amend this offer. The current version is published on the website. Continued use means acceptance of updates.</p>
        <p>Contact: <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a></p>
      `
    },
    privacy: {
      html: `
        <h1 class="legal-doc__title">Privacy Policy</h1>
        <p class="legal-doc__updated">Effective June 22, 2025</p>
        <p>This Policy describes how Lapis Vivus (Telegram bot <a href="https://t.me/LapisVivus_bot" target="_blank" rel="noopener noreferrer">@LapisVivus_bot</a> and lapis-vivus.vercel.app) processes personal data.</p>
        <h2>1. Data we process</h2>
        <ul>
          <li>Telegram user ID and display name.</li>
          <li>Profile data for analysis: birth date, time, place, gender, and other details you voluntarily provide in the bot.</li>
          <li>Request history, protocol stages, Oracle chats, and in-service settings.</li>
          <li>Technical data: interface language, session info, anonymized site analytics.</li>
          <li>Payment metadata when topping up (amount, status) — we do not store full card details.</li>
        </ul>
        <h2>2. Purposes</h2>
        <ul>
          <li>Providing Service features and personalizing analytics.</li>
          <li>Processing payments and maintaining in-bot balance.</li>
          <li>User support.</li>
          <li>Improving product quality and security.</li>
        </ul>
        <h2>3. Legal basis</h2>
        <p>Processing is based on User consent, contract performance (offer), and the Provider's legitimate interests in operating the Service.</p>
        <h2>4. Third parties</h2>
        <p>Data may be shared with Telegram, YooKassa, and technical contractors (hosting, infrastructure) solely to deliver the Service, with appropriate safeguards.</p>
        <h2>5. Storage and security</h2>
        <p>Data is kept as long as needed for processing purposes or as required by law. Organizational and technical measures protect against unauthorized access.</p>
        <h2>6. Your rights</h2>
        <p>You may request access, correction, restriction, or deletion by contacting <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a>.</p>
        <h2>7. Changes</h2>
        <p>We may update this Policy. The current version is always available here. Material changes may be announced via the bot or community.</p>
        <p>Data inquiries: <a href="https://t.me/nikitok_m" target="_blank" rel="noopener noreferrer">@nikitok_m</a></p>
      `
    }
  }
};

let activeLegalDoc = null;

/* --- State --- */
let currentLang = 'en';

const PERF = (() => {
  const root = document.documentElement;
  if (root.classList.contains('perf-low')) return 'low';
  if (root.classList.contains('perf-medium')) return 'medium';
  return 'high';
})();

/* --- Nav scroll spy (matches header order) --- */
const NAV_SECTION_IDS = [
  'home',
  'community',
  'services',
  'how-it-works',
  'protocol',
  'payment',
  'faq'
];

function getNavScrollOffset() {
  const headerHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height')
  ) || 84;
  return headerHeight + 20;
}

function getSectionDocumentTop(el) {
  return el.getBoundingClientRect().top + window.scrollY;
}

function resolveActiveNavSection() {
  const marker = window.scrollY + getNavScrollOffset();
  let activeId = NAV_SECTION_IDS[0];

  for (const id of NAV_SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (marker >= getSectionDocumentTop(el) - 2) {
      activeId = id;
    }
  }

  return activeId;
}

function setActiveNavSection(id) {
  document.querySelectorAll('.nav__link').forEach(link => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function scrollToNavTarget(el) {
  const top = getSectionDocumentTop(el) - getNavScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', async () => {
  await initLanguage();
  initMobileMenu();
  initSmoothScroll();
  initFAQ();
  initScrollReveal();
  initHeroReveal();
  initScrollHandlers();
  initStarfield();
  initStickyCta();
  initDynamicYear();
  initLegalPages();
});

/* --- Unified scroll (single rAF) --- */
function initScrollHandlers() {
  const header = document.getElementById('header');
  const timeline = document.getElementById('timeline');
  const progress = document.getElementById('timelineProgress');
  const timelineItems = timeline ? timeline.querySelectorAll('.timeline__item') : [];

  let ticking = false;

  function update() {
    ticking = false;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (header) {
      header.classList.toggle('header--scrolled', scrollY > 50);
    }

    setActiveNavSection(resolveActiveNavSection());

    if (timeline && progress) {
      const rect = timeline.getBoundingClientRect();
      const scrolled = windowHeight - rect.top;
      const total = rect.height + windowHeight * 0.3;
      const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100);
      progress.style.height = percent + '%';

      const triggerPoint = windowHeight * 0.65;
      timelineItems.forEach(item => {
        item.classList.toggle('active', item.getBoundingClientRect().top < triggerPoint);
      });
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}

/* --- Language Switcher --- */
async function initLanguage() {
  const lang = await resolveLanguage();
  setLanguage(lang, { manual: false });

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextLang = btn.dataset.lang;
      if (nextLang !== currentLang) {
        setLanguage(nextLang, { manual: true });
      }
    });
  });
}

function isManualLanguageChoice() {
  return localStorage.getItem('lapis-lang-manual') === '1';
}

async function resolveLanguage() {
  if (isManualLanguageChoice()) {
    return localStorage.getItem('lapis-lang') || 'en';
  }

  return detectLanguageByGeo();
}

async function detectLanguageByGeo() {
  const country = await fetchCountryCode();
  if (country) {
    return country === 'RU' ? 'ru' : 'en';
  }

  return detectLanguageFromBrowser();
}

async function fetchCountryCode() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4500);
  const signal = controller.signal;

  const sources = [
    async () => {
      const response = await fetch('https://api.country.is/', { signal, cache: 'no-store' });
      if (!response.ok) return null;
      const data = await response.json();
      return data.country || null;
    },
    async () => {
      const response = await fetch('https://ipapi.co/json/', { signal, cache: 'no-store' });
      if (!response.ok) return null;
      const data = await response.json();
      return data.country_code || data.country || null;
    }
  ];

  try {
    for (const source of sources) {
      try {
        const code = await source();
        if (code) return String(code).toUpperCase();
      } catch (_) {
        /* try next source */
      }
    }
  } finally {
    clearTimeout(timeoutId);
  }

  return null;
}

function detectLanguageFromBrowser() {
  const tags = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const tag of tags) {
    if (tag && String(tag).toLowerCase().startsWith('ru')) {
      return 'ru';
    }
  }

  return 'en';
}

function setLanguage(lang, options = {}) {
  const { manual = true } = options;

  currentLang = lang;
  localStorage.setItem('lapis-lang', lang);

  if (manual) {
    localStorage.setItem('lapis-lang-manual', '1');
  }

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  renderLegalDocs(lang);

  document.querySelectorAll('.lang-switch__btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  document.title = lang === 'ru'
    ? 'Lapis Vivus — Персональный протокол глубинного анализа'
    : 'Lapis Vivus — Personal Deep-Analysis Protocol';
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* --- Smooth Scroll --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      if (anchor.classList.contains('js-legal-link')) return;

      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const sectionId = targetId.slice(1);
      if (NAV_SECTION_IDS.includes(sectionId)) {
        setActiveNavSection(sectionId);
      }

      if (anchor.classList.contains('nav__link')) {
        anchor.classList.add('nav__link--pressed');
        window.setTimeout(() => anchor.classList.remove('nav__link--pressed'), 220);
        anchor.blur();
      }

      scrollToNavTarget(target);
    });
  });
}

/* --- Legal Pages (in-page tab view) --- */
function scrollTopNow() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const inner = document.querySelector('.legal-page__inner');
  if (inner) inner.scrollTop = 0;
}

function parseLegalHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'legal-offer') return 'offer';
  if (hash === 'legal-privacy') return 'privacy';
  return null;
}

function renderLegalDocs(lang) {
  const docs = legalDocs[lang] || legalDocs.ru;

  document.querySelectorAll('[data-legal-doc]').forEach(article => {
    const key = article.dataset.legalDoc;
    const doc = docs[key];
    if (doc) article.innerHTML = doc.html;
  });

  bindLegalInlineLinks();
}

function bindLegalInlineLinks() {
  document.querySelectorAll('#legalPage .js-legal-link').forEach(link => {
    if (link.dataset.legalBound === '1') return;
    link.dataset.legalBound = '1';
    link.addEventListener('click', e => {
      e.preventDefault();
      const doc = link.dataset.legal;
      if (doc) openLegal(doc);
    });
  });
}

function openLegal(doc, { updateHistory = true } = {}) {
  const page = document.getElementById('legalPage');
  if (!page || !legalDocs.ru[doc]) return;

  activeLegalDoc = doc;
  renderLegalDocs(currentLang);

  document.querySelectorAll('[data-legal-doc]').forEach(article => {
    article.hidden = article.dataset.legalDoc !== doc;
  });

  scrollTopNow();
  page.hidden = false;
  page.setAttribute('aria-hidden', 'false');
  document.body.classList.add('legal-open');

  if (updateHistory) {
    history.pushState({ legal: doc }, '', `#legal-${doc}`);
  }
}

function closeLegal() {
  const page = document.getElementById('legalPage');
  if (!page || page.hidden) return;

  activeLegalDoc = null;
  page.hidden = true;
  page.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('legal-open');

  document.querySelectorAll('[data-legal-doc]').forEach(article => {
    article.hidden = true;
  });

  scrollTopNow();
}

function initLegalPages() {
  const page = document.getElementById('legalPage');
  const closeBtn = document.getElementById('legalClose');
  if (!page) return;

  document.querySelectorAll('.js-legal-link').forEach(link => {
    if (link.closest('#legalPage')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      const doc = link.dataset.legal;
      if (doc) openLegal(doc);
    });
  });

  closeBtn?.addEventListener('click', () => {
    closeLegal();
    if (window.location.hash.startsWith('#legal-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });

  window.addEventListener('popstate', () => {
    const doc = parseLegalHash();
    if (doc) {
      openLegal(doc, { updateHistory: false });
      return;
    }

    if (!page.hidden) {
      closeLegal();
    }
  });

  const initialDoc = parseLegalHash();
  if (initialDoc) {
    openLegal(initialDoc, { updateHistory: false });
  }
}

/* --- FAQ Accordion --- */
function initFAQ() {
  const accordion = document.getElementById('accordion');
  if (!accordion) return;

  accordion.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const isActive = item.classList.contains('active');

      accordion.querySelectorAll('.accordion__item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (PERF === 'low') {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => {
    if (el.closest('.hero')) return;
    observer.observe(el);
  });
}

/* --- Hero Entrance --- */
function initHeroReveal() {
  const heroReveals = document.querySelectorAll('.hero .reveal');
  if (PERF === 'low') {
    heroReveals.forEach(el => el.classList.add('visible'));
    return;
  }
  requestAnimationFrame(() => {
    heroReveals.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 80 + i * 70);
    });
  });
}

/* --- Sticky CTA --- */
function initStickyCta() {
  const sticky = document.getElementById('stickyCta');
  const hero = document.getElementById('home');
  if (!sticky || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('visible', !entry.isIntersecting);
    sticky.setAttribute('aria-hidden', entry.isIntersecting);
  }, { threshold: 0.1 });

  observer.observe(hero);
}

/* --- Star Background --- */
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  if (!ctx) return;

  const isLow = PERF === 'low';
  const isMedium = PERF === 'medium';
  const animated = !isLow;
  const useParallax = PERF === 'high';
  const useGlow = PERF === 'high';
  const maxDpr = isLow ? 1 : isMedium ? 1.25 : 1.5;
  const frameInterval = isMedium ? 1000 / 30 : 1000 / 60;

  let stars = [];
  let animationId = 0;
  let running = false;
  let mouseX = 0;
  let mouseY = 0;
  let lastFrame = 0;
  let width = 0;
  let height = 0;

  function setCanvasSize() {
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateStars();
    if (!animated) {
      drawFrame(0);
    }
  }

  function generateStars() {
    const area = width * height;
    let count;
    if (isLow) {
      count = Math.min(45, Math.max(30, Math.floor(area / 22000)));
    } else if (isMedium) {
      count = Math.min(70, Math.max(45, Math.floor(area / 14000)));
    } else {
      count = Math.min(140, Math.max(80, Math.floor(area / 10000)));
    }

    stars = new Array(count);
    for (let i = 0; i < count; i++) {
      const depth = Math.random();
      stars[i] = {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: depth * 1.5 + 0.3,
        opacity: depth * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.05,
        twinkleSpeed: Math.random() * 0.012 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        parallax: depth * 0.4 + 0.1
      };
    }
  }

  function drawFrame(now) {
    ctx.clearRect(0, 0, width, height);

    const parallaxX = useParallax ? (mouseX - width / 2) * 0.006 : 0;
    const parallaxY = useParallax ? (mouseY - height / 2) * 0.006 : 0;

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];

      if (animated) {
        star.x += star.vx;
        star.y += star.vy;
        star.twinklePhase += star.twinkleSpeed;

        if (star.x < -5) star.x = width + 5;
        else if (star.x > width + 5) star.x = -5;
        if (star.y < -5) star.y = height + 5;
        else if (star.y > height + 5) star.y = -5;
      }

      const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
      const opacity = star.opacity * twinkle;
      const px = star.x + parallaxX * star.parallax * 16;
      const py = star.y + parallaxY * star.parallax * 16;

      ctx.beginPath();
      ctx.arc(px, py, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,230,200,${opacity})`;
      ctx.fill();

      if (useGlow && star.radius > 1.1) {
        ctx.beginPath();
        ctx.arc(px, py, star.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(143,77,255,${opacity * 0.1})`;
        ctx.fill();
      }
    }
  }

  function loop(now) {
    if (!running) return;
    animationId = requestAnimationFrame(loop);

    if (now - lastFrame < frameInterval) return;
    lastFrame = now;
    drawFrame(now);
  }

  function start() {
    if (!animated || running) return;
    running = true;
    lastFrame = 0;
    animationId = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(animationId);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setCanvasSize, 200);
  }, { passive: true });

  if (useParallax) {
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  setCanvasSize();
  if (animated) start();
}

/* --- Dynamic Year --- */
function initDynamicYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
