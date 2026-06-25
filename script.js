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

    'hero.badge': 'Telegram · Lapis Vivus',
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
    'hero.trustLabel': 'Lapis Vivus',
    'hero.trust': 'Bot + community of like-minded people in one ecosystem',
    'hero.scroll': 'Next',
    'hero.coreLabel': 'Analytical core',
    'hero.floatProtocol': 'Protocol',
    'hero.floatMatch': 'Compatibility',
    'hero.floatOracle': 'Oracle',

    'proof.stages': 'Protocol stages',
    'proof.parts': 'Route parts',
    'proof.support': 'Support on your side',

    'community.eyebrow': 'More than a bot',
    'community.title': 'The Lapis Vivus community',
    'community.desc': 'Along with the bot, you join a private community of people who care about depth, structure, and self-understanding. Conversation, materials, updates — and a team always on the client\'s side.',
    'community.lead': 'The bot opens analytics. The community opens the environment.',
    'community.cta': 'Join @LapisVivus',
    'community.ctaBot': 'Start in bot',
    'community.note': 'Premium ecosystem: analysis + people + support in one place',

    'perks.p1': '✦ A private community of like-minded people in self-knowledge and profile analytics',
    'perks.p2': '✦ 24/7 support — we answer, help, and guide you at every step',
    'perks.p3': '✦ Three premium modes in one bot — protocol, pair, Oracle',
    'perks.p4': '✦ Your profile grows: each session makes the picture sharper',
    'perks.p5': '✦ Oracle with memory of your route — not an empty chat',
    'perks.p6': '✦ News, insights, and a living environment around the product',

    'services.eyebrow': 'Three modes',
    'services.title': 'Protocol · Compatibility · Oracle',
    'services.subtitle': 'Three powerful scenarios in one premium bot. Choose the depth for your task — from a single question to a full route and live dialogue with the Oracle.',
    'services.protocol.title': '💎 Protocol',
    'services.protocol.desc': 'Your personal analytical code. 36 stages in 5 parts — from the roots of personality to a strategy for action. Depth no one-off reading can match.',
    'services.protocol.f1': 'Targeted request — goal tree for your question',
    'services.protocol.f2': 'Full route — all 5 parts in sequence',
    'services.protocol.f3': 'Progress and data saved in your profile',
    'services.protocol.f4': 'Long answers paginated',
    'services.protocol.link': 'Protocol details →',
    'services.match.badge': 'For two',
    'services.match.title': '💫 Pair compatibility',
    'services.match.desc': 'Understand your bond with another person — with a verdict, dynamics, and concrete recommendations. For relationships, family, business, or any context you define.',
    'services.match.goal1': 'Relationships',
    'services.match.goal2': 'Family',
    'services.match.goal3': 'Business',
    'services.match.goal4': 'Friendship',
    'services.match.goal5': 'Custom context',
    'services.match.f1': 'Both birth profiles collected',
    'services.match.f2': 'Bond dynamics, strengths, and risks',
    'services.match.f3': 'Final verdict with recommendation',
    'services.match.f4': 'Report paginated',
    'services.match.link': 'Learn more →',
    'services.oracle.badge': 'Profile-aware',
    'services.oracle.title': '🔮 Oracle',
    'services.oracle.desc': 'An AI guide that knows your entire protocol. Ask personal questions — get answers in the context of your chart, not from thin air.',
    'services.oracle.f1': 'Sees your profile and every stage you\'ve completed',
    'services.oracle.f2': '1 active chat · up to 10 replies per session',
    'services.oracle.f3': 'Up to 5 chats in archive',
    'services.oracle.f4': 'Not a generic chat — your route context',
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

    'hero.badge': 'Telegram · Lapis Vivus',
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
    'hero.trustLabel': 'Lapis Vivus',
    'hero.trust': 'Бот + сообщество единомышленников в одной экосистеме',
    'hero.scroll': 'Далее',
    'hero.coreLabel': 'Аналитическое ядро',
    'hero.floatProtocol': 'Протокол',
    'hero.floatMatch': 'Совместимость',
    'hero.floatOracle': 'Оракул',

    'proof.stages': 'Этапов протокола',
    'proof.parts': 'Частей маршрута',
    'proof.support': 'Поддержка на вашей стороне',

    'community.eyebrow': 'Больше, чем бот',
    'community.title': 'Сообщество Lapis Vivus',
    'community.desc': 'Вместе с ботом вы попадаете в закрытое сообщество людей, которым важна глубина, структура и работа с собой. Общение, материалы, обновления — и команда, которая всегда на стороне клиента.',
    'community.lead': 'Бот открывает аналитику. Сообщество открывает среду.',
    'community.cta': 'Вступить в @LapisVivus',
    'community.ctaBot': 'Начать в боте',
    'community.note': 'Премиум-экосистема: анализ + люди + поддержка в одном месте',

    'perks.p1': '✦ Закрытое сообщество единомышленников в теме самопознания и аналитики профиля',
    'perks.p2': '✦ Поддержка 24/7 — отвечаем, помогаем, ведём за руку на каждом этапе',
    'perks.p3': '✦ Три премиум-режима в одном боте — протокол, пара, Оракул',
    'perks.p4': '✦ Профиль накапливается: каждая сессия делает картину точнее',
    'perks.p5': '✦ Оракул с памятью вашего маршрута — не пустой чат',
    'perks.p6': '✦ Новости, инсайты и живая среда вокруг продукта',

    'services.eyebrow': 'Три режима',
    'services.title': 'Протокол · Совместимость · Оракул',
    'services.subtitle': 'Три мощных сценария в одном премиум-боте. Выбирайте глубину под задачу — от точечного вопроса до полного маршрута и живого диалога с Оракулом.',
    'services.protocol.title': '💎 Протокол',
    'services.protocol.desc': 'Ваш личный аналитический код. 36 этапов в 5 частях — от корней личности до стратегии действий. Глубина, которую не даёт ни один «разовый разбор».',
    'services.protocol.f1': 'Точечный запрос — дерево целей под ваш вопрос',
    'services.protocol.f2': 'Полный маршрут — все 5 частей последовательно',
    'services.protocol.f3': 'Прогресс и данные сохраняются в профиле',
    'services.protocol.f4': 'Длинные ответы листаются по страницам',
    'services.protocol.link': 'Подробнее о протоколе →',
    'services.match.badge': 'Для двоих',
    'services.match.title': '💫 Совместимость пары',
    'services.match.desc': 'Понимание вашей связи с другим человеком — с вердиктом, динамикой и конкретными рекомендациями. Для отношений, семьи, бизнеса и любого контекста, который вы задаёте сами.',
    'services.match.goal1': 'Отношения',
    'services.match.goal2': 'Семья',
    'services.match.goal3': 'Бизнес',
    'services.match.goal4': 'Дружба',
    'services.match.goal5': 'Свой контекст',
    'services.match.f1': 'Данные обоих профилей рождения',
    'services.match.f2': 'Динамика связи, сильные стороны и риски',
    'services.match.f3': 'Итоговый вердикт с рекомендацией',
    'services.match.f4': 'Отчёт листается по страницам',
    'services.match.link': 'Подробнее →',
    'services.oracle.badge': 'С контекстом профиля',
    'services.oracle.title': '🔮 Оракул',
    'services.oracle.desc': 'ИИ-проводник, который знает ваш протокол целиком. Задавайте личные вопросы — получайте ответы в контексте вашей карты, а не из воздуха.',
    'services.oracle.f1': 'Видит профиль и все пройденные этапы',
    'services.oracle.f2': '1 активный чат · до 10 ответов в сессии',
    'services.oracle.f3': 'До 5 чатов в архиве',
    'services.oracle.f4': 'Не шаблонный чат — контекст вашего маршрута',
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

    'ctaFinal.eyebrow': 'Начните сейчас',
    'ctaFinal.title': 'Ваш персональный маршрут начинается здесь',
    'ctaFinal.desc': '36 этапов глубины, три режима, Оракул с памятью протокола и сообщество тех, кто идёт вглубь. Сделайте первый шаг сегодня.',
    'ctaFinal.ctaCommunity': 'Вступить в сообщество',
    'ctaFinal.ctaBot': 'Начать в боте',
    'ctaFinal.note': 'Поддержка 24/7 · @nikitok_m · RU / EN в боте'
  }
};

/* --- State --- */
let currentLang = 'en';

const PERF = (() => {
  const root = document.documentElement;
  if (root.classList.contains('perf-low')) return 'low';
  if (root.classList.contains('perf-medium')) return 'medium';
  return 'high';
})();

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
  initHeroParallax();
  initStickyCta();
  initDynamicYear();
});

/* --- Unified scroll (single rAF) --- */
function initScrollHandlers() {
  const header = document.getElementById('header');
  const timeline = document.getElementById('timeline');
  const progress = document.getElementById('timelineProgress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const timelineItems = timeline ? timeline.querySelectorAll('.timeline__item') : [];

  let ticking = false;

  function update() {
    ticking = false;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (header) {
      header.classList.toggle('header--scrolled', scrollY > 50);
    }

    let currentSection = '';
    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 100) {
        currentSection = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
    });

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
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
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

/* --- Hero Parallax --- */
function initHeroParallax() {
  if (PERF !== 'high') return;

  const core = document.getElementById('heroCore');
  const visual = document.getElementById('heroVisual');
  if (!core || !visual) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let lastMove = 0;
  let animating = false;
  let visualRect = visual.getBoundingClientRect();

  function onMove(e) {
    lastMove = performance.now();
    if (!animating) {
      animating = true;
      requestAnimationFrame(animate);
    }
    const cx = visualRect.left + visualRect.width / 2;
    const cy = visualRect.top + visualRect.height / 2;
    targetX = (e.clientX - cx) / visualRect.width * 12;
    targetY = (e.clientY - cy) / visualRect.height * 12;
  }

  function animate(now) {
    if (now - lastMove > 1800) {
      animating = false;
      currentX = 0;
      currentY = 0;
      core.style.transform = '';
      return;
    }

    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    core.style.transform = `rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
    requestAnimationFrame(animate);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      visualRect = visual.getBoundingClientRect();
    }, 150);
  }, { passive: true });

  document.addEventListener('mousemove', onMove, { passive: true });
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
