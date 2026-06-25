/* ============================================
   LAPIS VIVUS — Landing Page Scripts
   ============================================ */

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.modes': 'Modes',
    'nav.protocol': 'Ecosystem',
    'nav.community': 'Community',
    'nav.howItWorks': 'How to start',
    'nav.payment': 'Plans',
    'nav.investors': 'Investors',
    'nav.faq': 'FAQ',
    'cta.openBot': 'Open bot',
    'cta.startNow': 'Start now',

    'brand.tagline': 'Deep-analysis protocol',

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

    'proof.eyebrow': 'Three modes — one ecosystem',
    'proof.heading': 'Protocol, compatibility, and Oracle in one profile',
    'proof.lead': 'Each mode adds to the picture — progress, connections, and dialogs are saved in Telegram, no extra apps.',
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
    'services.protocol.link': 'See ecosystem →',
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
    'how.subtitle': 'From the first click to the first interpretation — a clear route without chaos. Every step leads to a result, not another riddle.',
    'how.step1.title': 'Open the bot',
    'how.step1.desc': 'Launch in Telegram — no third-party sign-ups or extra apps. You are immediately inside the Lapis Vivus premium ecosystem.',
    'how.step1.detail': '30 seconds — and you are in the bot',
    'how.step2.title': 'Create your profile',
    'how.step2.desc': 'Birth date, time, and place — the foundation of an accurate route. Data is saved and used across all three modes.',
    'how.step2.detail': 'One profile — protocol, pair, and Oracle',
    'how.step3.title': 'Choose your mode',
    'how.step3.desc': 'Protocol for yourself, compatibility for a pair, or Oracle for dialogue — switch tasks without starting from zero.',
    'how.step3.detail': 'Three scenarios · one bot · one balance',
    'how.step4.title': 'Go deeper',
    'how.step4.desc': 'Get interpretations, build progress, ask follow-ups. 24/7 support and a community of like-minded people stay with you.',
    'how.step4.detail': 'Your route grows — you are not alone',

    'ecosystem.eyebrow': 'Ecosystem',
    'ecosystem.title': 'Everything for deep work — in one place',
    'ecosystem.subtitle': 'Lapis Vivus is not a single «analysis mode» but a complete environment: profile, three scenarios, community, and support. You pay for depth, not scattered answers.',
    'ecosystem.c1.title': 'Growing profile',
    'ecosystem.c1.desc': 'Each session sharpens the picture. Stages, interpretations, and context are saved — analytics get more precise instead of resetting.',
    'ecosystem.c2.title': 'Protocol · 36 stages',
    'ecosystem.c2.desc': 'A personal route in 5 parts — from personality roots to strategy. Targeted request or full path — your choice.',
    'ecosystem.c3.title': 'Pair compatibility',
    'ecosystem.c3.desc': 'Two profiles, bond dynamics, and a final verdict — for relationships, family, business, or any context you define.',
    'ecosystem.c4.title': 'Oracle with memory',
    'ecosystem.c4.desc': 'AI dialogue that knows your route. Personal questions grounded in your chart and completed stages — not thin air.',
    'ecosystem.c5.title': 'Community + support',
    'ecosystem.c5.desc': 'Private @LapisVivus space and live 24/7 help — you are not left alone with the bot and hard questions.',
    'ecosystem.c6.title': 'In-bot payment',
    'ecosystem.c6.desc': 'Internal balance, YooKassa, transparent prices before payment. RU / EN — all in Telegram, no extra services.',
    'ecosystem.lead': 'One bot — three depths, people nearby, and a team on call. Start with the scenario that resonates now.',
    'ecosystem.cta': 'Start in bot',

    'forWhom.eyebrow': 'For whom',
    'forWhom.title': 'If you want depth — you\'re in the right place',
    'forWhom.subtitle': 'Lapis Vivus is for those tired of shallow answers who want a system that grows with them — in the bot, in pairs, and in dialogue with the Oracle.',
    'forWhom.c1.title': 'You want a system, not fragments',
    'forWhom.c1.desc': 'Tired of scattered answers and one-off readings. You need a route that becomes a whole picture and accumulates in your profile.',
    'forWhom.c2.title': 'You need a pair read with a verdict',
    'forWhom.c2.desc': 'Not a «compatibility percentage» but honest bond dynamics, risks, strengths, and a concrete recommendation for your context.',
    'forWhom.c3.title': 'You value dialogue with memory',
    'forWhom.c3.desc': 'The Oracle knows your protocol and completed stages — it does not start from zero and answers in the logic of your chart.',
    'forWhom.c4.title': 'You are ready to invest in yourself',
    'forWhom.c4.desc': 'You want a route, not a brush-off. Ready to go deep — with team support, community, and tools that do not abandon you halfway.',

    'why.eyebrow': 'Advantages',
    'why.title': 'Why Lapis Vivus',
    'why.subtitle': 'Not another bot with template answers — a premium ecosystem where analytics, people, and support work together.',
    'why.c1.title': 'Your route — not a template',
    'why.c1.desc': 'A personal code built from your data and questions — not someone else\'s boxed scenario.',
    'why.c2.title': '36 stages · synthesis',
    'why.c2.desc': 'Multiple analytical layers in one map — depth no one-off reading can match.',
    'why.c3.title': 'Flexible depth',
    'why.c3.desc': 'One question or a full run — you choose the pace and format of working with the bot.',
    'why.c4.title': 'Profile strengthens',
    'why.c4.desc': 'Each session adds detail — data and interpretations accumulate across modes.',
    'why.c5.title': 'Verdict, not numbers',
    'why.c5.desc': 'Pair compatibility with dynamics, risks, and a concrete recommendation — not an empty percentage.',
    'why.c6.title': 'People nearby 24/7',
    'why.c6.desc': '@LapisVivus community and live support — an environment around the product, not a bot in a vacuum.',

    'telegram.eyebrow': 'Bot interface',
    'telegram.title': 'Premium experience in Telegram',
    'telegram.desc': 'Step-by-step format, growing profile, paginated answers, and a team on call. Everything for deep self-work — without extra apps or complex setup.',
    'telegram.stat1': 'modes in bot',
    'telegram.stat2': 'support',
    'telegram.stat3': 'interface',
    'telegram.f1.title': 'Route at your pace',
    'telegram.f1.desc': 'Scroll long answers, return to stages, go deeper on your schedule — progress is saved.',
    'telegram.f2.title': '@LapisVivus community',
    'telegram.f2.desc': 'A private space of people «in the topic» — discussions, materials, and a living environment.',
    'telegram.f3.title': 'Support @nikitok_m',
    'telegram.f3.desc': 'Live help with the bot, modes, and payment — the team on your side when you need it.',
    'telegram.cta': 'Open bot',
    'telegram.botStatus': 'online',
    'telegram.chat1': 'Birth profile saved. Part I · stage 3. Run interpretation?',
    'telegram.chat2': 'Full route — continue',
    'telegram.chat3': 'Interpretation ready. Scroll pages ↓ Clarifying question or next stage?',
    'telegram.chat4': 'Oracle: answer based on completed stages and your chart.',
    'telegram.toast1.title': 'Stage 3 unlocked',
    'telegram.toast1.desc': 'Part I · interpretation ready',
    'telegram.toast2.title': 'Oracle replied',
    'telegram.toast2.desc': 'With memory of your route',

    'payment.eyebrow': 'Plans',
    'payment.title': 'Choose the depth for your task',
    'payment.subtitle': 'Three access levels in the bot — from starter to unlimited Oracle. Pay via YooKassa, activated right after top-up.',
    'payment.includes': "What's included",
    'payment.tier1.tagline': 'Your entry point',
    'payment.tier1.name': 'Premium',
    'payment.tier1.amount': '$20',
    'payment.tier1.period': '/ month',
    'payment.tier1.pitch': 'Full ecosystem access without overpaying: enough for a month of Protocol work, several pair readings, and regular Oracle sessions.',
    'payment.tier1.f1.title': '5 runs per month',
    'payment.tier1.f1.desc': 'Full Protocol route or individual stages — each run builds your profile and sharpens the next analysis.',
    'payment.tier1.f2.title': '10 pair connections',
    'payment.tier1.f2.desc': 'Compatibility reports with a verdict: partner, family, business — understand the dynamic, not just "matching signs".',
    'payment.tier1.f3.title': '5 Oracle chats',
    'payment.tier1.f3.desc': 'AI guide with memory of your route — answers grounded in your chart, not generic internet advice.',
    'payment.tier2.badge': 'Popular',
    'payment.tier2.tagline': 'Depth and volume balanced',
    'payment.tier2.name': 'Pro',
    'payment.tier2.amount': '$60',
    'payment.tier2.period': '/ month',
    'payment.tier2.pitch': 'For regular use: twice as many connections for your circle and twice as many Oracle dialogs — the sweet spot if you open the bot every week.',
    'payment.tier2.f1.title': '5 runs',
    'payment.tier2.f1.desc': 'Same deep Protocol — ideal when you need more people and dialogs rather than extra runs.',
    'payment.tier2.f2.title': '20 pair connections',
    'payment.tier2.f2.desc': 'Cover your close circle: partners, colleagues, family — compare dynamics and decide from structure, not guesswork.',
    'payment.tier2.f3.title': '10 Oracle chats',
    'payment.tier2.f3.desc': 'Enough for weekly sessions: clarify decisions, work through stages, return to context without fear of hitting the limit.',
    'payment.tier3.tagline': 'No limits',
    'payment.tier3.name': 'Ultimate',
    'payment.tier3.amount': '$100',
    'payment.tier3.period': '/ month',
    'payment.tier3.pitch': 'Maximum freedom when analytics is part of daily life: double the runs, unlimited connections and Oracle — pay once and work without a ceiling.',
    'payment.tier3.f1.title': '10 runs per month',
    'payment.tier3.f1.desc': 'Twice the depth: move through the route faster, revisit stages, and build a complete picture without pauses.',
    'payment.tier3.f2.title': 'Unlimited connections',
    'payment.tier3.f2.desc': 'As many pair readings as you need — for practitioners, consultants, and anyone mapping their whole environment.',
    'payment.tier3.f3.title': 'Unlimited Oracle',
    'payment.tier3.f3.desc': 'Dialogue without a cap: ask whenever you want — Oracle always draws on your profile and completed route.',
    'payment.cta': 'Choose in bot',
    'payment.note': 'Top-up via YooKassa · invoice valid 10 minutes · plan selected and managed in the bot',

    'investors.eyebrow': 'For investors',
    'investors.title': 'Early-stage opportunity',
    'investors.subtitle': 'Lapis Vivus is a premium AI ecosystem in Telegram: subscription revenue, a growing user profile, and three monetized modes in one product.',
    'investors.deckTitle': 'A product that already works and scales',
    'investors.lead': 'We are not building a one-off “astro chat” — but a personal deep-analysis protocol: 36 stages, pair compatibility, an Oracle with route memory, a private community, and 24/7 support. Users stay inside the ecosystem — profile, history, and LTV grow with every session.',
    'investors.m1.label': 'Distribution',
    'investors.m1.value': 'Telegram-native',
    'investors.m1.desc': 'No App Store friction — the product lives where the audience already is. RU / EN out of the box.',
    'investors.m2.label': 'Monetization',
    'investors.m2.value': 'Subscription + balance',
    'investors.m2.desc': 'Three plans (Premium / Pro / Ultimate), YooKassa payments, instant activation after top-up.',
    'investors.m3.label': 'Product depth',
    'investors.m3.value': '36 stages · 3 modes',
    'investors.m3.desc': 'Protocol, compatibility, and Oracle — not a one-shot answer, but an accumulating route in the profile.',
    'investors.m4.label': 'Retention',
    'investors.m4.value': 'Community 24/7',
    'investors.m4.desc': 'Private space, live materials, and support team — retention on top of analytics.',
    'investors.why.title': 'Why it matters for investors',
    'investors.why.l1': 'Premium positioning — depth and structure instead of mass-market “horoscope chat”',
    'investors.why.l2': 'Context-aware AI — Oracle uses profile and completed stages, not templates',
    'investors.why.l3': 'Recurring revenue — subscription model with clear tiers and upsell path',
    'investors.why.l4': 'Low-CAC channel — organic growth via Telegram, community, and niche word of mouth',
    'investors.why.l5': 'Scale without an app — one bot, one profile, expansion to EN and adjacent markets',
    'investors.roadmap.title': 'Roadmap',
    'investors.roadmap.y1.year': '2025',
    'investors.roadmap.y1.text': 'Bot MVP: protocol, birth profile, payments, and core scenarios',
    'investors.roadmap.y2.year': '2026',
    'investors.roadmap.y2.text': 'Plans, Oracle, compatibility, community, and 24/7 support',
    'investors.roadmap.y3.year': '2026+',
    'investors.roadmap.y3.text': 'Partner network, B2B integrations, geographic and product expansion',
    'investors.contact.label': 'For pitch deck and founder meetings',
    'investors.contact.note': 'Message on Telegram — we will share materials, metrics, and discuss participation format',
    'investors.cta': 'Contact on Telegram',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Common questions',
    'faq.subtitle': 'Answers about the community, modes, plans, and support — clear and to the point.',
    'faq.q1.tag': 'Community',
    'faq.q1': 'What does the Lapis Vivus community offer?',
    'faq.a1.lead': 'The bot delivers analysis; the community is the environment around it. You are not left alone with the results.',
    'faq.a1.l1': 'A private space of like-minded people — no noise or random advice',
    'faq.a1.l2': 'Materials, discussions, product updates, and live conversation',
    'faq.a1.l3': 'Direct connection with the team and 24/7 support',
    'faq.q2.tag': 'Getting started',
    'faq.q2': 'What do I need to start?',
    'faq.a2.lead': 'No extra apps or third-party sign-ups — everything in Telegram in a few minutes.',
    'faq.a2.l1': 'Open the bot and create your birth profile',
    'faq.a2.l2': 'Choose a mode: Protocol, pair compatibility, or Oracle',
    'faq.a2.l3': 'Support will guide you at any step if you get stuck',
    'faq.q3.tag': 'Protocol',
    'faq.q3': 'How long does the full protocol take?',
    'faq.a3.lead': '36 stages in 5 parts — you set the pace. It is a route, not a race against time.',
    'faq.a3.l1': 'Stages run sequentially, but there are no deadlines',
    'faq.a3.l2': 'Progress is saved in your profile — return after a day or a month',
    'faq.a3.l3': 'Each run adds to the picture and sharpens the next analysis',
    'faq.q4.tag': 'Protocol',
    'faq.q4': 'Can I ask one question without a full run?',
    'faq.a4.lead': 'Yes — use «Targeted request» mode. No need to complete the whole route for one answer.',
    'faq.a4.l1': 'You state your goal; the bot picks the right stage',
    'faq.a4.l2': 'Ideal for one specific question or situation',
    'faq.a4.l3': 'Results are saved in your profile like a full run',
    'faq.q5.tag': 'Oracle',
    'faq.q5': 'How is the Oracle different from ChatGPT?',
    'faq.a5.lead': 'The Oracle is not a generic chat — it is a guide inside your Lapis Vivus route.',
    'faq.a5.l1': 'Sees your profile, completed stages, and accumulated interpretations',
    'faq.a5.l2': 'Answers in the logic of your chart, not from generic templates',
    'faq.a5.l3': 'Chat limits depend on your plan — from 5 to unlimited',
    'faq.q6.tag': 'Plans',
    'faq.q6': 'How do I pay?',
    'faq.a6.lead': 'Three plans in the bot — choose depth for your task, pay via YooKassa, access activates immediately.',
    'faq.a6.l1': 'Premium — $20: starter, 5 runs, 10 connections, 5 chats',
    'faq.a6.l2': 'Pro — $60: 20 connections and 10 chats for regular use',
    'faq.a6.l3': 'Ultimate — $100: 10 runs, unlimited connections and Oracle',
    'faq.a6.note': 'Payment invoice is valid 10 minutes. Plan is selected and managed in the bot.',
    'faq.q7.tag': 'About',
    'faq.q7': 'Is this medicine or fortune-telling?',
    'faq.a7.lead': 'No. Lapis Vivus is an information and analytical service at the intersection of astrology, psychology, and AI.',
    'faq.a7.l1': 'Does not diagnose or prescribe treatment',
    'faq.a7.l2': 'Does not replace a doctor, lawyer, or financial advisor',
    'faq.a7.l3': 'Provides structured analytics for conscious decisions',
    'faq.q8.tag': 'Support',
    'faq.q8': 'Where is support?',
    'faq.a8.lead': 'Live support in Telegram — we help with the bot, plans, modes, and navigating the route.',
    'faq.a8.link': 'Message @nikitok_m →',
    'faq.cta.eyebrow': 'Did not find an answer?',
    'faq.cta.title': 'Ask in the bot or contact support',
    'faq.cta.desc': 'The team replies in Telegram — about payment, modes, and your first step in the Protocol.',
    'faq.cta.bot': 'Open bot',
    'faq.cta.support': 'Contact support',

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
    'ctaFinal.desc': '36 stages of depth, three modes, an Oracle that remembers your protocol, and a community of those who go deep. First step — in Telegram in minutes.',
    'ctaFinal.h1.value': '36',
    'ctaFinal.h1.label': 'protocol stages',
    'ctaFinal.h2.value': '3',
    'ctaFinal.h2.label': 'modes in one bot',
    'ctaFinal.h3.value': '24/7',
    'ctaFinal.h3.label': 'support and community',
    'ctaFinal.p1': 'Protocol, compatibility, and Oracle — in one profile',
    'ctaFinal.p2': 'A plan for your task: from starter to unlimited',
    'ctaFinal.p3': 'RU / EN · YooKassa · instant activation',
    'ctaFinal.ctaCommunity': 'Join community',
    'ctaFinal.ctaBot': 'Start in bot',
    'ctaFinal.note': '24/7 support · @nikitok_m · RU / EN in bot'
  },

  ru: {
    'nav.home': 'Главная',
    'nav.modes': 'Режимы',
    'nav.community': 'Сообщество',
    'nav.protocol': 'Экосистема',
    'nav.howItWorks': 'Как начать',
    'nav.payment': 'Тарифы',
    'nav.investors': 'Инвесторам',
    'nav.faq': 'FAQ',
    'cta.openBot': 'Открыть бот',
    'cta.startNow': 'Начать сейчас',

    'brand.tagline': 'Протокол глубинного анализа',

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

    'proof.eyebrow': 'Три режима — одна экосистема',
    'proof.heading': 'Протокол, совместимость и Оракул в одном профиле',
    'proof.lead': 'Каждый режим дополняет картину — прогресс, связи и диалоги сохраняются в Telegram, без лишних приложений.',
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
    'services.protocol.link': 'Смотреть экосистему →',
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
    'how.subtitle': 'От первого клика до первой интерпретации — понятный маршрут без хаоса. Каждый шаг ведёт к результату, а не к очередной «загадке».',
    'how.step1.title': 'Откройте бот',
    'how.step1.desc': 'Запуск в Telegram — без регистрации на сторонних сайтах и без установки приложений. Вы сразу внутри премиум-экосистемы Lapis Vivus.',
    'how.step1.detail': '30 секунд — и вы уже в интерфейсе бота',
    'how.step2.title': 'Создайте профиль',
    'how.step2.desc': 'Дата, время и место рождения — фундамент точного маршрута. Данные сохраняются и используются во всех трёх режимах.',
    'how.step2.detail': 'Один профиль — для протокола, пары и Оракула',
    'how.step3.title': 'Выберите режим',
    'how.step3.desc': 'Протокол для себя, совместимость для пары или Оракул для диалога — переключайтесь под задачу, не начиная с нуля.',
    'how.step3.detail': 'Три сценария · один бот · один баланс',
    'how.step4.title': 'Идите в глубину',
    'how.step4.desc': 'Получайте интерпретации, копите прогресс, задавайте уточнения. Рядом — поддержка 24/7 и сообщество людей «в теме».',
    'how.step4.detail': 'Маршрут растёт — вы не остаётесь один',

    'ecosystem.eyebrow': 'Экосистема',
    'ecosystem.title': 'Всё для глубокой работы — в одном месте',
    'ecosystem.subtitle': 'Lapis Vivus — не один «режим анализа», а цельная среда: профиль, три сценария, сообщество и команда поддержки. Вы платите за глубину, а не за разрозненные ответы.',
    'ecosystem.c1.title': 'Накопительный профиль',
    'ecosystem.c1.desc': 'Каждая сессия дополняет картину. Этапы, интерпретации и контекст сохраняются — аналитика становится точнее, а не обнуляется.',
    'ecosystem.c2.title': 'Протокол · 36 этапов',
    'ecosystem.c2.desc': 'Личный маршрут в 5 частях — от корней личности до стратегии. Точечный запрос или полный путь на ваш выбор.',
    'ecosystem.c3.title': 'Совместимость пары',
    'ecosystem.c3.desc': 'Два профиля, динамика связи и итоговый вердикт — для отношений, семьи, бизнеса или любого контекста, который задаёте вы.',
    'ecosystem.c4.title': 'Оракул с памятью',
    'ecosystem.c4.desc': 'ИИ-диалог, который знает ваш маршрут. Личные вопросы — с опорой на карту и пройденные этапы, не из воздуха.',
    'ecosystem.c5.title': 'Сообщество + поддержка',
    'ecosystem.c5.desc': 'Закрытая среда @LapisVivus и живая помощь 24/7 — вы не остаётесь один на один с ботом и сложными вопросами.',
    'ecosystem.c6.title': 'Оплата в боте',
    'ecosystem.c6.desc': 'Внутренний баланс, ЮKassa, прозрачные цены до оплаты. RU / EN — всё в Telegram, без лишних сервисов.',
    'ecosystem.lead': 'Один бот — три режима глубины, люди рядом и команда на связи. Начните с того сценария, который откликается сейчас.',
    'ecosystem.cta': 'Начать в боте',

    'forWhom.eyebrow': 'Для кого',
    'forWhom.title': 'Если вам нужна глубина — вы по адресу',
    'forWhom.subtitle': 'Lapis Vivus создан для тех, кто устал от поверхностных ответов и хочет систему, которая растёт вместе с вами — в боте, в паре и в диалоге с Оракулом.',
    'forWhom.c1.title': 'Хотите систему, а не обрывки',
    'forWhom.c1.desc': 'Устали от разрозненных ответов и «разовых разборов». Вам нужен маршрут, который складывается в целую картину и копится в профиле.',
    'forWhom.c2.title': 'Нужен разбор пары с выводом',
    'forWhom.c2.desc': 'Не «процент совместимости», а честная динамика связи, риски, сильные стороны и конкретная рекомендация — под ваш контекст.',
    'forWhom.c3.title': 'Цените диалог с памятью',
    'forWhom.c3.desc': 'Оракул знает ваш протокол и пройденные этапы — не начинает с нуля и отвечает в логике вашей карты, а не шаблонами.',
    'forWhom.c4.title': 'Готовы инвестировать в себя',
    'forWhom.c4.desc': 'Вы хотите маршрут, а не отписку. Готовы идти вглубь — с поддержкой команды, сообществом и инструментами, которые не бросают на полпути.',

    'why.eyebrow': 'Преимущества',
    'why.title': 'Почему Lapis Vivus',
    'why.subtitle': 'Не очередной бот с шаблонными ответами — а премиум-экосистема, где аналитика, люди и поддержка работают вместе.',
    'why.c1.title': 'Ваш маршрут — не шаблон',
    'why.c1.desc': 'Персональный код строится по вашим данным и вопросам — не чужой сценарий из коробки.',
    'why.c2.title': '36 этапов · синтез систем',
    'why.c2.desc': 'Несколько аналитических слоёв собраны в одну карту — глубина, которую не даёт разовый разбор.',
    'why.c3.title': 'Гибкость глубины',
    'why.c3.desc': 'Точечный вопрос или полный прогон — вы сами выбираете темп и формат работы с ботом.',
    'why.c4.title': 'Профиль усиливается',
    'why.c4.desc': 'Каждая сессия дополняет картину — данные и интерпретации накапливаются между режимами.',
    'why.c5.title': 'Вердикт, а не цифры',
    'why.c5.desc': 'Совместимость пары — с динамикой, рисками и конкретной рекомендацией, а не пустым «процентом».',
    'why.c6.title': 'Люди рядом 24/7',
    'why.c6.desc': 'Сообщество @LapisVivus и живая поддержка — среда вокруг продукта, а не бот в вакууме.',

    'telegram.eyebrow': 'Интерфейс бота',
    'telegram.title': 'Премиум-опыт в Telegram',
    'telegram.desc': 'Пошаговый формат, накопительный профиль, листаемые ответы и команда на связи. Всё для глубокой работы с собой — без лишних приложений и сложных настроек.',
    'telegram.stat1': 'режима в боте',
    'telegram.stat2': 'поддержка',
    'telegram.stat3': 'в интерфейсе',
    'telegram.f1.title': 'Маршрут без спешки',
    'telegram.f1.desc': 'Листайте длинные ответы, возвращайтесь к этапам, углубляйтесь в своём темпе — прогресс сохраняется.',
    'telegram.f2.title': 'Сообщество @LapisVivus',
    'telegram.f2.desc': 'Закрытая среда людей «в теме» — обсуждения, материалы и живое окружение вокруг продукта.',
    'telegram.f3.title': 'Поддержка @nikitok_m',
    'telegram.f3.desc': 'Живые ответы по боту, режимам и оплате — команда на вашей стороне, когда нужна помощь.',
    'telegram.cta': 'Открыть бот',
    'telegram.botStatus': 'онлайн',
    'telegram.chat1': 'Профиль рождения сохранён. Часть I · этап 3. Запустить интерпретацию?',
    'telegram.chat2': 'Полный маршрут — продолжаем',
    'telegram.chat3': 'Интерпретация готова. Листайте страницы ↓ Уточняющий вопрос или следующий этап?',
    'telegram.chat4': 'Оракул: ответ с учётом пройденных этапов и вашей карты.',
    'telegram.toast1.title': 'Этап 3 открыт',
    'telegram.toast1.desc': 'Часть I · интерпретация готова',
    'telegram.toast2.title': 'Оракул ответил',
    'telegram.toast2.desc': 'С памятью вашего маршрута',

    'payment.eyebrow': 'Тарифы',
    'payment.title': 'Выберите глубину под задачу',
    'payment.subtitle': 'Три уровня доступа в боте — от старта до безлимитного Оракула. Оплата через ЮKassa, активация сразу после пополнения.',
    'payment.includes': 'Что входит',
    'payment.tier1.tagline': 'Для первого погружения',
    'payment.tier1.name': 'Premium',
    'payment.tier1.amount': '2 000 ₽',
    'payment.tier1.period': '/ месяц',
    'payment.tier1.pitch': 'Стартовый доступ ко всей экосистеме без переплаты: хватает на месяц личной работы с Протоколом, несколько разборов пары и регулярные вопросы Оракулу.',
    'payment.tier1.f1.title': '5 прогонов в месяц',
    'payment.tier1.f1.desc': 'Полный маршрут Протокола или отдельные этапы — каждый прогон копится в профиле и делает следующий анализ точнее.',
    'payment.tier1.f2.title': '10 связей (совместимость)',
    'payment.tier1.f2.desc': 'Разборы пары с вердиктом: партнёр, семья, бизнес — понимаете динамику отношений, а не только «совпали ли знаки».',
    'payment.tier1.f3.title': '5 чатов с Оракулом',
    'payment.tier1.f3.desc': 'ИИ-проводник с памятью вашего маршрута — ответы в логике карты, а не общие фразы из интернета.',
    'payment.tier2.badge': 'Популярный',
    'payment.tier2.tagline': 'Баланс глубины и объёма',
    'payment.tier2.name': 'Pro',
    'payment.tier2.amount': '6 000 ₽',
    'payment.tier2.period': '/ месяц',
    'payment.tier2.pitch': 'Для регулярной работы: вдвое больше связей для окружения и вдвое больше диалогов с Оракулом — оптимальный выбор, если вы используете бот каждую неделю.',
    'payment.tier2.f1.title': '5 прогонов',
    'payment.tier2.f1.desc': 'Тот же глубинный Протокол — удобно, когда важнее расширить круг людей и диалоги, а не количество прогонов.',
    'payment.tier2.f2.title': '20 связей (совместимость)',
    'payment.tier2.f2.desc': 'Покройте близкий круг: партнёры, коллеги, семья — сравнивайте динамику и принимайте решения на основе структуры, а не догадок.',
    'payment.tier2.f3.title': '10 чатов с Оракулом',
    'payment.tier2.f3.desc': 'Достаточно для еженедельных сессий: уточняйте решения, прорабатывайте этапы и возвращайтесь к контексту без страха «закончится лимит».',
    'payment.tier3.tagline': 'Без ограничений',
    'payment.tier3.name': 'Ultimate',
    'payment.tier3.amount': '10 000 ₽',
    'payment.tier3.period': '/ месяц',
    'payment.tier3.pitch': 'Максимальная свобода для тех, кто встроил аналитику в жизнь: удвоенные прогоны, безлимит связей и неограниченный Оракул — платите один раз и работайте без потолка.',
    'payment.tier3.f1.title': '10 прогонов в месяц',
    'payment.tier3.f1.desc': 'Вдвое больше глубинной работы: проходите маршрут быстрее, возвращайтесь к этапам и накапливаете полную картину без пауз.',
    'payment.tier3.f2.title': 'Безлимит связей',
    'payment.tier3.f2.desc': 'Сколько угодно разборов пары — для практиков, консультантов и всех, кому важно видеть картину по всему окружению.',
    'payment.tier3.f3.title': 'Безлимит Оракула',
    'payment.tier3.f3.desc': 'Диалог без потолка: задавайте вопросы когда угодно — Оракул всегда опирается на ваш профиль и пройденный маршрут.',
    'payment.cta': 'Выбрать в боте',
    'payment.note': 'Пополнение через ЮKassa · счёт действует 10 минут · тариф выбирается и управляется в боте',

    'investors.eyebrow': 'Для инвесторов',
    'investors.title': 'Возможность войти на ранней стадии',
    'investors.subtitle': 'Lapis Vivus — премиальная AI-экосистема в Telegram: подписка, накопительный профиль пользователя и три режима монетизации в одном продукте.',
    'investors.deckTitle': 'Продукт, который уже работает и масштабируется',
    'investors.lead': 'Мы строим не разовый «астро-чат», а персональный протокол глубинного анализа: 36 этапов, совместимость пары, Оракул с памятью маршрута, закрытое сообщество и поддержка 24/7. Пользователь остаётся внутри экосистемы — профиль, история и LTV растут с каждой сессией.',
    'investors.m1.label': 'Канал дистрибуции',
    'investors.m1.value': 'Telegram-native',
    'investors.m1.desc': 'Без App Store и долгого онбординга — продукт там, где уже есть аудитория. RU / EN из коробки.',
    'investors.m2.label': 'Монетизация',
    'investors.m2.value': 'Подписка + баланс',
    'investors.m2.desc': 'Три тарифа (Premium / Pro / Ultimate), оплата через ЮKassa, активация сразу после пополнения.',
    'investors.m3.label': 'Глубина продукта',
    'investors.m3.value': '36 этапов · 3 режима',
    'investors.m3.desc': 'Протокол, совместимость и Оракул — не одноразовый ответ, а накапливаемый маршрут в профиле.',
    'investors.m4.label': 'Удержание',
    'investors.m4.value': 'Сообщество 24/7',
    'investors.m4.desc': 'Закрытая среда, живые материалы и команда поддержки — retention поверх аналитики.',
    'investors.why.title': 'Почему это интересно инвестору',
    'investors.why.l1': 'Премиум-позиционирование — глубина и структура вместо массового «гороскопа в чате»',
    'investors.why.l2': 'AI с контекстом — Оракул опирается на профиль и пройденные этапы, а не на шаблоны',
    'investors.why.l3': 'Повторяющаяся выручка — подписочная модель с понятными уровнями и апсейлом',
    'investors.why.l4': 'Низкий CAC-канал — органика через Telegram, сообщество и сарафан внутри ниши',
    'investors.why.l5': 'Масштаб без приложения — один бот, единый профиль, расширение на EN и смежные рынки',
    'investors.roadmap.title': 'Дорожная карта',
    'investors.roadmap.y1.year': '2025',
    'investors.roadmap.y1.text': 'MVP бота: протокол, профиль рождения, оплата и базовые сценарии',
    'investors.roadmap.y2.year': '2026',
    'investors.roadmap.y2.text': 'Тарифы, Оракул, совместимость, сообщество и поддержка 24/7',
    'investors.roadmap.y3.year': '2026+',
    'investors.roadmap.y3.text': 'Партнёрская сеть, B2B-интеграции, расширение географии и продуктовой линейки',
    'investors.contact.label': 'Для питча, deck и встречи с основателем',
    'investors.contact.note': 'Напишите в Telegram — пришлём материалы, метрики и обсудим формат участия',
    'investors.cta': 'Связаться в Telegram',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Частые вопросы',
    'faq.subtitle': 'Ответы о сообществе, режимах, тарифах и поддержке — без воды и без лишних шагов.',
    'faq.q1.tag': 'Сообщество',
    'faq.q1': 'Что даёт сообщество Lapis Vivus?',
    'faq.a1.lead': 'Бот даёт аналитику, сообщество — среду вокруг неё. Вы не остаётесь один на один с результатами.',
    'faq.a1.l1': 'Закрытая среда единомышленников без шума и случайных советов',
    'faq.a1.l2': 'Материалы, разборы, анонсы обновлений и живое общение',
    'faq.a1.l3': 'Прямая связь с командой и поддержка 24/7',
    'faq.q2.tag': 'Старт',
    'faq.q2': 'Что нужно для старта?',
    'faq.a2.lead': 'Никаких приложений и регистраций на сторонних сервисах — всё в Telegram за пару минут.',
    'faq.a2.l1': 'Откройте бота и создайте профиль рождения',
    'faq.a2.l2': 'Выберите режим: Протокол, совместимость или Оракул',
    'faq.a2.l3': 'Поддержка подскажет на любом шаге, если застрянете',
    'faq.q3.tag': 'Протокол',
    'faq.q3': 'Сколько длится полный протокол?',
    'faq.a3.lead': '36 этапов в 5 частях — темп задаёте вы. Это маршрут, а не гонка на время.',
    'faq.a3.l1': 'Этапы идут последовательно, но без дедлайнов',
    'faq.a3.l2': 'Прогресс сохраняется в профиле — можно вернуться через день или месяц',
    'faq.a3.l3': 'Каждый прогон дополняет картину и делает следующий анализ точнее',
    'faq.q4.tag': 'Протокол',
    'faq.q4': 'Можно один вопрос без полного прогона?',
    'faq.a4.lead': 'Да — для этого есть режим «Точечный запрос». Не нужно проходить весь маршрут, чтобы получить ответ.',
    'faq.a4.l1': 'Вы формулируете цель, бот подбирает нужный этап',
    'faq.a4.l2': 'Подходит для одного конкретного вопроса или ситуации',
    'faq.a4.l3': 'Результат сохраняется в профиле наравне с полным прогоном',
    'faq.q5.tag': 'Оракул',
    'faq.q5': 'Чем Оракул отличается от ChatGPT?',
    'faq.a5.lead': 'Оракул — не универсальный чат, а проводник внутри вашего маршрута Lapis Vivus.',
    'faq.a5.l1': 'Видит профиль, пройденные этапы и накопленные интерпретации',
    'faq.a5.l2': 'Отвечает в логике вашей карты, а не из общих шаблонов',
    'faq.a5.l3': 'Лимиты чатов зависят от тарифа — от 5 до безлимита',
    'faq.q6.tag': 'Тарифы',
    'faq.q6': 'Как оплатить?',
    'faq.a6.lead': 'Три тарифа в боте — выбираете глубину под задачу, оплачиваете через ЮKassa, доступ активируется сразу.',
    'faq.a6.l1': 'Premium — 2 000 ₽: старт, 5 прогонов, 10 связей, 5 чатов',
    'faq.a6.l2': 'Pro — 6 000 ₽: 20 связей и 10 чатов — для регулярной работы',
    'faq.a6.l3': 'Ultimate — 10 000 ₽: 10 прогонов, безлимит связей и Оракула',
    'faq.a6.note': 'Счёт на оплату действует 10 минут. Тариф меняется и управляется в боте.',
    'faq.q7.tag': 'О сервисе',
    'faq.q7': 'Это медицина или гадание?',
    'faq.a7.lead': 'Нет. Lapis Vivus — информационно-аналитический сервис на стыке астрологии, психологии и ИИ.',
    'faq.a7.l1': 'Не ставит диагнозы и не назначает лечение',
    'faq.a7.l2': 'Не заменяет врача, юриста или финансового консультанта',
    'faq.a7.l3': 'Даёт структурированную аналитику для осознанных решений',
    'faq.q8.tag': 'Поддержка',
    'faq.q8': 'Куда писать в поддержку?',
    'faq.a8.lead': 'Живая поддержка в Telegram — поможем с ботом, тарифом, режимами и навигацией по маршруту.',
    'faq.a8.link': 'Написать @nikitok_m →',
    'faq.cta.eyebrow': 'Не нашли ответ?',
    'faq.cta.title': 'Спросите в боте или у поддержки',
    'faq.cta.desc': 'Команда отвечает в Telegram — по оплате, режимам и первому шагу в Протоколе.',
    'faq.cta.bot': 'Перейти в бот',
    'faq.cta.support': 'Написать в поддержку',

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
    'ctaFinal.desc': '36 этапов глубины, три режима, Оракул с памятью протокола и сообщество тех, кто идёт вглубь. Первый шаг — в Telegram за пару минут.',
    'ctaFinal.h1.value': '36',
    'ctaFinal.h1.label': 'этапов протокола',
    'ctaFinal.h2.value': '3',
    'ctaFinal.h2.label': 'режима в одном боте',
    'ctaFinal.h3.value': '24/7',
    'ctaFinal.h3.label': 'поддержка и сообщество',
    'ctaFinal.p1': 'Протокол, совместимость и Оракул — в одном профиле',
    'ctaFinal.p2': 'Тариф под задачу: от старта до безлимита',
    'ctaFinal.p3': 'RU / EN · оплата через ЮKassa · активация сразу',
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
  'investors',
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
  const marker = window.scrollY + getNavScrollOffset() + 4;
  let activeId = NAV_SECTION_IDS[0];

  for (let i = 0; i < NAV_SECTION_IDS.length; i += 1) {
    const id = NAV_SECTION_IDS[i];
    const el = document.getElementById(id);
    if (!el) continue;

    const top = getSectionDocumentTop(el);
    const nextEl = document.getElementById(NAV_SECTION_IDS[i + 1]);
    const bottom = nextEl ? getSectionDocumentTop(nextEl) : Number.POSITIVE_INFINITY;

    if (marker >= top && marker < bottom) {
      return id;
    }

    if (marker >= top) {
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

function ensureNavSectionsLayout() {
  NAV_SECTION_IDS.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.contentVisibility = 'visible';
  });

  document.querySelectorAll('.section[id]').forEach(section => {
    section.style.contentVisibility = 'visible';
  });
}

function scrollToNavTarget(el) {
  ensureNavSectionsLayout();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
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

  const accordion = document.getElementById('accordion');
  if (accordion) {
    accordion.querySelectorAll('.accordion__item.active').forEach(item => {
      const panel = item.querySelector('.accordion__panel');
      if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
    });
  }

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
  const backdrop = document.getElementById('navBackdrop');

  if (!burger || !nav) return;

  function setMenuOpen(isOpen) {
    nav.classList.toggle('open', isOpen);
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (backdrop) {
      backdrop.classList.toggle('is-open', isOpen);
      backdrop.setAttribute('aria-hidden', !isOpen);
    }
  }

  burger.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('open'));
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => setMenuOpen(false));
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenuOpen(false);
    }
  });

  nav.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
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
function setAccordionPanelState(item, open) {
  const panel = item.querySelector('.accordion__panel');
  const trigger = item.querySelector('.accordion__trigger');
  if (!panel || !trigger) return;

  if (open) {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    item.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
  } else {
    panel.style.maxHeight = '0';
    item.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
  }
}

function initFAQ() {
  const accordion = document.getElementById('accordion');
  if (!accordion) return;

  accordion.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion__item');
      const isActive = item.classList.contains('active');

      accordion.querySelectorAll('.accordion__item').forEach(i => {
        setAccordionPanelState(i, false);
      });

      if (!isActive) {
        setAccordionPanelState(item, true);
      }
    });
  });

  window.addEventListener('resize', () => {
    accordion.querySelectorAll('.accordion__item.active').forEach(item => {
      const panel = item.querySelector('.accordion__panel');
      if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
    });
  });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (PERF === 'low' || reducedMotion) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, {
    threshold: [0, 0.14],
    rootMargin: '0px 0px -5% 0px'
  });

  reveals.forEach(el => {
    if (el.closest('.hero')) return;
    observer.observe(el);
  });
}

/* --- Hero Entrance --- */
function initHeroReveal() {
  const heroReveals = document.querySelectorAll('.hero .reveal');
  if (PERF === 'low' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroReveals.forEach(el => el.classList.add('visible'));
    return;
  }
  requestAnimationFrame(() => {
    heroReveals.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 140 + i * 95);
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
