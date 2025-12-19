import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Instagram,
  Send,
  Minus,
  Plus,
  ArrowLeft,
  Target,
  Shield,
  Zap,
  X
} from 'lucide-react';

import imgHero from './images/IMG_1395.JPG';
import imgAbout from './images/IMG_0425.JPG';
import imgService1 from './images/IMG_0426.JPG';
import imgService2 from './images/IMG_0458.JPG';
import imgService3 from './images/IMG_0459.JPG';
import { Navigation } from './components/Navigation';
import { SectionHeading } from './components/SectionHeading';
import { SectionId, ServiceLevel, Review, FAQItem, Article, ArticleSection } from './types';

// --- Extended Data with Detailed Pages ---

const SERVICES: ServiceLevel[] = [
  {
    id: 1,
    level: "Level 1",
    title: "Клуб «YOUR ERA»",
    subtitle: "Массовый продукт, по подписке",
    description: "Это точка входа. Доступно всем, дает сообщество и систему.",
    detailedDescription: "Вам не хватает дисциплины, системы и окружения. Вам сложно двигаться в одиночку, вы быстро теряете фокус и мотивацию. Клуб дает готовую архитектуру развития и поддерживающую среду единомышленниц.",
    price: "$30/мес",
    image: imgService1,
    features: ["Годовая стратегия", "Регулярные практики", "Закрытое сообщество", "Групповые встречи"],
    forWhom: [
      "Вы хотите изменений, но вам не хватает дисциплины и системы",
      "Вам сложно двигаться в одиночку",
      "Вы быстро теряете фокус и мотивацию",
      "Нужно окружение единомышленниц"
    ],
    whatIsInside: [
      { title: "Годовая стратегия", text: "Карта развития на 12 месяцев, разбитая на понятные сезоны (Стратегия, Деньги, Тело, Самоценность и т.д.). Вы не придумываете, ЧТО делать, вы берете готовую архитектуру и внедряете." },
      { title: "Регулярные практики", text: "Задания и инструменты коучинга, которые легко встроить в жизнь." },
      { title: "Закрытое сообщество", text: "Поддержка единомышленниц, где можно быть собой, а не «успешным успехом»." },
      { title: "Групповые встречи", text: "Эфиры с ответами на вопросы и разборами." }
    ],
    results: [
      "Перестаете метаться и начинаете двигаться по четкому плану",
      "Появляется ясность и регулярность действий",
      "Получаете поддерживающую среду",
      "Внедряете системный подход к развитию"
    ],
    ctaText: "Вступить в клуб"
  },
  {
    id: 2,
    level: "Level 2",
    title: "Коучинговое сопровождение",
    subtitle: "Личная работа, ICF",
    description: "Классический формат. Для тех, кто хочет разобраться в себе и своих целях.",
    detailedDescription: "Вы чувствуете, что застряли. Есть много вопросов, но нет ответов. Вы не понимаете, чего хотите на самом деле, или знаете, но не можете начать. Вам нужен партнер, который поможет услышать себя.",
    price: "$30/сессия",
    image: imgService2,
    features: ["По стандартам ICF", "Встречи 1 на 1", "Работа с мышлением", "Безопасное пространство"],
    forWhom: [
      "Вы чувствуете, что застряли",
      "Есть много вопросов, но нет ответов",
      "Вы не понимаете, чего хотите на самом деле",
      "Вам нужен партнер, который поможет услышать себя"
    ],
    whatIsInside: [
      { title: "Встречи 1 на 1", text: "Онлайн, 60 минут, раз в неделю." },
      { title: "Фокус на вас", text: "Я не даю советов, не учу жизни. Я создаю безопасное пространство и задаю вопросы, которые помогают вам найти СВОИ ответы и решения." },
      { title: "Работа с мышлением", text: "Мы исследуем ваши убеждения, страхи и «слепые зоны», которые мешают движению." },
      { title: "Формат работы", text: "Работа начинается от пакета из 8 сессий." }
    ],
    results: [
      "Ясность в голове, контакт с собой",
      "Понимание своих истинных целей и внутренних опор",
      "Вы находите свои ресурсы для изменений",
      "Формируете навык самоанализа"
    ],
    ctaText: "Записаться на сессию"
  },
  {
    id: 3,
    level: "Level 3",
    title: "Личное менторство",
    subtitle: "Premium формат",
    description: "Самый глубокий уровень. Для тех, кому нужен не только коуч, но и стратег с бизнес-опытом.",
    detailedDescription: "Вам мало коучинга. Вы все понимаете, но все равно саботируете. Вы уперлись в финансовый потолок, боитесь масштаба или тонете в операционке. Вам нужен не только партнер для размышлений, но и опытный взгляд со стороны, стратегия и жесткая (но бережная) дисциплина.",
    price: "$50/сессия",
    image: imgService3,
    features: ["60% коучинга + 40% менторинга", "Активная обратная связь", "Чат-поддержка", "Стратегия и консалтинг"],
    forWhom: [
      "Вам мало коучинга — нужен стратег с бизнес-опытом",
      "Вы все понимаете, но все равно саботируете",
      "Уперлись в финансовый потолок или боитесь масштаба",
      "Тонете в операционке и нужна жесткая дисциплина"
    ],
    whatIsInside: [
      { title: "Я — активный участник", text: "Здесь я использую весь свой управленческий бэкграунд (5 лет в продюсировании и EdTech). Я даю обратную связь, делюсь инструментами и помогаю увидеть ошибки в вашей стратегии." },
      { title: "Микс методов", text: "60% коучинга (работа с головой) + 40% менторинга (стратегия и консалтинг)." },
      { title: "Чат-поддержка", text: "Связь между сессиями для оперативных вопросов и «волшебного пинка»." },
      { title: "Формат работы", text: "Работа начинается от пакета из 4 сессий." }
    ],
    results: [
      "Выход из тупика, кратный рост",
      "Рост в доходе, масштабе проектов или личной эффективности",
      "Работающая стратегия и уверенность для ее реализации",
      "Баланс между амбициями и ресурсами"
    ],
    ctaText: "Обсудить менторство"
  }
];

const REVIEWS: Review[] = [
  {
    id: '1',
    name: "Анна С.",
    role: "CEO Agency",
    text: "Лидия не 'лечит', она вскрывает. За две сессии я поняла, почему сливаю миллионные контракты. Это было больно, но это лучшее вложение в моей жизни.",
  },
  {
    id: '2',
    name: "Мария К.",
    role: "Art Director",
    text: "Я пришла с запросом 'нет энергии', а ушла с пониманием, что я просто живу чужую жизнь. Уволилась, открыла студию. Страшно? Да. Жалею? Ни секунды.",
  },
  {
    id: '3',
    name: "Елена В.",
    role: "Founder IT",
    text: "Никакой эзотерики и дыхания маткой. Четко, жестко, по фактам. Мозг встал на место. Доход вырос х3 за полгода. Работаем дальше.",
  }
];

const FAQ_DATA: FAQItem[] = [
  {
    question: "ЧЕМ ТЫ ОТЛИЧАЕШЬСЯ ОТ ПСИХОЛОГА?",
    answer: "Психология чаще всего работает с прошлым: лечит травмы, ищет причины боли и «чинит» фундамент. Коучинг работает с будущим. Мы не копаемся в том, «почему так вышло», мы фокусируемся на том, «как сделать так, как я хочу». Я работаю со здоровой частью вашей личности, у которой есть амбиции и силы, но нет четкого плана или мешают страхи. Если я вижу, что запрос требует терапии, я честно скажу об этом и порекомендую специалиста."
  },
  {
    question: "КОУЧИНГ — ЭТО РАЗВЕ НЕ ИНФОЦЫГАНСТВО?",
    answer: "Инфоцыганство — это продажа «воздуха» и обещание волшебной таблетки («подыши маткой и миллион придет»). Я работаю по международным стандартам ICF (Level 2). Это строгая методология, этический кодекс и доказательные инструменты работы с мышлением. Плюс, я опираюсь на свой твердый бэкграунд в управлении и продюсировании. Здесь нет магии, здесь есть работа вашего мозга и конкретные действия."
  },
  {
    question: "ЕСТЬ ЛИ ГАРАНТИИ РЕЗУЛЬТАТА?",
    answer: "Коучинг — это партнерство 50/50. Я даю 100% гарантию на качество процесса: я использую профессиональные инструменты, создаю безопасное пространство и возвращаю вам то, что вы не видите сами. Но я не могу нести ответственность за ваши действия после сессии. Ваша жизнь — это ваша зона ответственности. Если вы готовы действовать — результат неизбежен."
  },
  {
    question: "ИЗ ЧЕГО СКЛАДЫВАЕТСЯ ЦЕНА?",
    answer: "Вы платите не за «час разговора». Вы платите за скорость вашей трансформации. В эту стоимость заложены: мое образование (ICF Level 2) и регулярные супервизии (контроль качества моей работы); мой 5-летний опыт в бизнесе и управлении, который позволяет мне видеть ваши процессы системно; экономия вашего времени — то, к чему вы могли бы идти годами методом проб и ошибок, мы проходим за несколько сессий."
  },
  {
    question: "А ЕСЛИ Я ЖИВУ В ДРУГОЙ СТРАНЕ?",
    answer: "Для коучинга нет границ. Я базируюсь в Ташкенте, но 80% моих клиентов живут по всему миру: Испания, Россия, Армения, ОАЭ. Мы работаем в Zoom. С оплатой сложностей нет: я принимаю переводы на карты разных стран и международные системы. Мы подберем удобный для вас способ."
  },
  {
    question: "МОЖНО ЛИ ВСТРЕТИТЬСЯ ОФФЛАЙН?",
    answer: "Я ценю время (и свое, и ваше), поэтому основной формат работы — онлайн. Это позволяет не тратить часы на дорогу и быть гибкими в расписании. Однако, если вы находитесь в Ташкенте и для вас критически важна живая энергия, мы можем обсудить формат личных встреч в индивидуальном порядке."
  },
  {
    question: "А ВДРУГ МНЕ НЕ ПОМОЖЕТ?",
    answer: "Коучинг устроен так, что все ответы уже есть внутри вас, моя задача — просто помочь вам их достать. Не бывает «неправильных» клиентов. Если вы чувствуете отклик на мои тексты и ценности — значит, мы сработаемся. К тому же, мы всегда можем начать с бесплатной сессии-знакомства."
  },
  {
    question: "СКОЛЬКО СЕССИЙ МНЕ ПОНАДОБИТСЯ?",
    answer: "Зависит от запроса. Для решения одной конкретной задачи (например, принять сложное решение) может хватить 1–3 сессий. Для глубокой трансформации (смена профессии, выход на новый уровень дохода) обычно требуется контракт на 2–3 месяца (8–12 сессий). Мы обсудим это на первой встрече."
  },
  {
    question: "НУЖНО ЛИ МНЕ ГОТОВИТЬСЯ К СЕССИИ?",
    answer: "Никакой сложной подготовки нет. Я советую своим клиентам выделить 10 минут и подумать, что им сейчас важно обсудить. Самое главное — обеспечить себе 60 минут тишины, где вас никто не побеспокоит, и стабильный интернет. Всё остальное мы сделаем в процессе."
  }
];

const PAIN_POINTS = [
  {
    title: "ПРОФЕССИОНАЛЬНЫЙ ТУПИК",
    description: "Ощущение, что ты переросла свое текущее место, но не видишь вектор для движения дальше. Вроде все есть, а удовлетворения нет."
  },
  {
    title: "ФИНАНСОВЫЙ ПОТОЛОК",
    description: "Работаешь много, но доход стоит на месте. Или растет, но такой ценой, что эти деньги уже не радуют."
  },
  {
    title: "ПОТЕРЯ ВНУТРЕННЕЙ ОПОРЫ",
    description: "Ты перестала слышать себя. Страх «что скажут люди» или «а вдруг не получится» громче твоих истинных желаний. Ты ищешь подтверждения своей нормальности извне, вместо того чтобы доверять себе."
  },
  {
    title: "САБОТАЖ ДЕЙСТВИЙ",
    description: "Ты точно знаешь, что нужно делать, чтобы вырасти. Но находишь сотни «важных» причин (уборка, обучение, помощь другим), чтобы этого не делать."
  },
  {
    title: "КРИЗИС СМЫСЛОВ И «КТО Я?»",
    description: "Внешне всё может быть хорошо, но внутри — фоновая неудовлетворенность. Ты не понимаешь, про что ты сейчас и в чем твоя миссия. Старые цели перестали драйвить, а новые еще не родились. Ощущение, что ты живешь не свою жизнь, а просто выполняешь функции."
  }
];

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Деньги не приходят на стыд",
    subtitle: "Почему вы боитесь назвать цену",
    description: "Почему вы боитесь назвать цену и как «взрослая работа по детским правилам» сливает ваш доход.",
    tags: ["Деньги", "Страх"],
    readTime: "5 мин",
    content: [
      { type: 'text', content: 'Знакомо? Вы называете цену — и внутри что-то сжимается. Голос становится тише. Вы начинаете оправдываться, объяснять, почему столько. Или сразу делаете скидку, хотя вас никто не просил.' },
      { type: 'quote', content: 'Деньги не приходят туда, где их стыдятся. Они приходят туда, где их ждут спокойно.' },
      { type: 'text', content: 'Это не про жадность. Это про то, что в детстве вам сказали: «Много хочешь — мало получишь», «Деньги — это грязь», «Богатые — плохие люди». И теперь взрослая вы делает взрослую работу по детским правилам.' },
      { type: 'text', content: 'Механика простая: когда вы называете цену, мозг вспоминает все эти установки и посылает сигнал опасности. Тело реагирует стыдом. Вы считываете это как «я прошу слишком много» — и сливаете.' },
      { type: 'list', content: ['Вы работаете больше всех, но зарабатываете меньше коллег', 'Вам сложно просить повышение или поднимать цены', 'Вы чувствуете вину, когда получаете большие деньги', 'Вы бесплатно помогаете, потому что «неудобно брать деньги»'] },
      { type: 'text', content: 'Что делать? Первый шаг — заметить момент стыда. Не бороться с ним, не подавлять. Просто сказать себе: «О, привет, детская программа. Я тебя вижу. Но решения сейчас принимаю взрослая я».' },
      { type: 'quote', content: 'Ваша ценность не определяется тем, сколько вы берёте. Она определяется тем, что вы даёте. А цена — это просто договорённость между взрослыми людьми.' }
    ],
    cta: { text: 'Разобрать мои денежные блоки', action: 'contacts' }
  },
  {
    id: 2,
    title: "3 типа застревания",
    subtitle: "Почему вы знаете, но не делаете",
    description: "Почему вы знаете, что делать, но не делаете. Вечный Планировщик, Хаотичный Искатель и Замороженный.",
    tags: ["Прокрастинация", "Саботаж"],
    readTime: "7 мин",
    content: [
      { type: 'text', content: 'Вы всё знаете. Прочитали книги, прошли курсы, составили планы. Но почему-то стоите на месте. Знакомо? Это не лень. Это один из трёх типов застревания.' },
      { type: 'quote', content: 'Саботаж — это не враг. Это защитный механизм, который когда-то вас спас. Просто он устарел.' },
      { type: 'text', content: 'ТИП 1: ВЕЧНЫЙ ПЛАНИРОВЩИК' },
      { type: 'text', content: 'Вы планируете идеально. Таблицы, графики, стратегии. Но до действия не доходит — всегда нужно ещё что-то доработать. Это страх ошибки. Пока вы планируете — вы не можете провалиться.' },
      { type: 'text', content: 'ТИП 2: ХАОТИЧНЫЙ ИСКАТЕЛЬ' },
      { type: 'text', content: 'Вы начинаете много всего одновременно. Курсы, проекты, идеи. Но ничего не доводите до конца — появляется что-то новое и интересное. Это страх выбора. Пока вы ищете — вам не нужно нести ответственность за выбор.' },
      { type: 'text', content: 'ТИП 3: ЗАМОРОЖЕННЫЙ' },
      { type: 'text', content: 'Вы знаете, что делать, но не можете заставить себя начать. Как будто парализованы. Это перегрузка нервной системы. Слишком много стресса — мозг выключает способность действовать.' },
      { type: 'list', content: ['Планировщику: сделайте первый шаг ДО того, как план будет идеальным', 'Искателю: закончите одно дело, прежде чем начать новое', 'Замороженному: начните с самого маленького действия, которое не вызывает сопротивления'] },
      { type: 'quote', content: 'Вы застряли не потому, что сломаны. Вы застряли потому, что используете старые карты для новой территории.' }
    ],
    cta: { text: 'Найти свой тип застревания', action: 'contacts' }
  },
  {
    id: 3,
    title: "О чём вы молчите, когда скроллите",
    subtitle: "Скроллинг как анестезия",
    description: "Скроллинг как анестезия. Что вы пытаетесь заглушить и как вернуть себе тишину.",
    tags: ["Тревога", "Осознанность"],
    readTime: "6 мин",
    content: [
      { type: 'text', content: 'Вечер. Вы устали. Берёте телефон «на пять минут» — и через два часа обнаруживаете себя в бесконечной ленте. Глаза болят, но остановиться не можете.' },
      { type: 'quote', content: 'Скроллинг — это не отдых. Это анестезия. Вы не расслабляетесь — вы убегаете.' },
      { type: 'text', content: 'От чего убегаете? От тишины. В тишине приходят мысли, которые вы не хотите думать. Чувства, которые не хотите чувствовать. Вопросы, на которые не хотите отвечать.' },
      { type: 'list', content: ['«Туда ли я иду?»', '«Почему я так устала?»', '«Чего я на самом деле хочу?»', '«Почему мне так пусто?»'] },
      { type: 'text', content: 'Эти вопросы пугают. И мозг услужливо подсовывает способ их избежать — бесконечный поток контента. Дофаминовые микродозы. Иллюзия занятости.' },
      { type: 'text', content: 'Но вопросы не исчезают. Они копятся. И однажды прорываются — обычно в 3 часа ночи или в виде необъяснимой тревоги.' },
      { type: 'text', content: 'Что делать? Не бороться со скроллингом — это бесполезно. Вместо этого — создать пространство для тишины. 10 минут утром без телефона. Прогулка без наушников. Просто побыть с собой.' },
      { type: 'quote', content: 'В тишине страшно. Но именно там живут ответы, которые вы ищете в чужих рилсах.' }
    ],
    cta: { text: 'Научиться слышать себя', action: 'contacts' }
  },
  {
    id: 4,
    title: "Ваш страх сейчас за рулём?",
    subtitle: "Техника пересаживания пассажира",
    description: "Техника пересаживания пассажира: как перестать бояться и начать управлять своей жизнью.",
    tags: ["Страх", "Техники"],
    readTime: "5 мин",
    content: [
      { type: 'text', content: 'Представьте: вы едете в машине. Но за рулём не вы — за рулём ваш страх. Он решает, куда ехать, когда тормозить, каких дорог избегать. А вы сидите на пассажирском и смотрите, как проносится мимо жизнь, которую хотели.' },
      { type: 'quote', content: 'Страх — это не враг. Это пассажир. Он может ехать с вами, но не должен вести машину.' },
      { type: 'text', content: 'Страх — нормальная реакция. Он нужен, чтобы защищать вас от реальной опасности. Проблема в том, что мозг не различает реальную опасность и воображаемую. Для него «выступить перед людьми» и «встретить тигра» — одинаково страшно.' },
      { type: 'text', content: 'ТЕХНИКА ПЕРЕСАЖИВАНИЯ:' },
      { type: 'list', content: ['ШАГ 1. ЗАМЕТИТЬ — Спросите себя: «Кто сейчас за рулём?» Если вы избегаете, откладываете, находите отговорки — за рулём страх.', 'ШАГ 2. ЛЕГАЛИЗОВАТЬ — Скажите страху: «Я тебя вижу. Ты пытаешься меня защитить. Спасибо. Но сейчас реальной опасности нет».', 'ШАГ 3. ПЕРЕСАДИТЬ — Мысленно пересадите страх на заднее сиденье. Он может ехать с вами. Может даже комментировать. Но руль — у вас.', 'ШАГ 4. ПОЕХАТЬ — Сделайте одно маленькое действие в сторону цели. Даже если страх кричит с заднего сиденья.'] },
      { type: 'text', content: 'Каждый раз, когда вы делаете что-то несмотря на страх, вы доказываете мозгу: это безопасно. И в следующий раз страх будет кричать тише.' },
      { type: 'quote', content: 'Смелость — это не отсутствие страха. Это решение, что за рулём буду я.' }
    ],
    cta: { text: 'Пересадить свой страх', action: 'contacts' }
  }
];

// --- Helper Components ---

// Popup для записи на диагностику (маркетинговая воронка)
// Показывается на всех страницах с контекстными сообщениями
const DiagnosticsPopup: React.FC<{ context: 'home' | 'service' | 'article' }> = ({ context }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [triggerType, setTriggerType] = useState<'scroll' | 'exit' | 'time'>('scroll');

  useEffect(() => {
    // Проверяем, был ли popup уже закрыт в этой сессии
    const wasDismissed = sessionStorage.getItem('diagnostics_popup_dismissed');
    if (wasDismissed) {
      setIsDismissed(true);
      return;
    }

    let triggered = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    // Триггер 1: Scroll (после 20% прокрутки)
    const handleScroll = () => {
      if (triggered) return;

      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent > 20) {
        triggered = true;
        setTriggerType('scroll');
        setShowPopup(true);
      }
    };

    // Триггер 2: Exit Intent (мышь уходит вверх)
    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;

      if (e.clientY <= 0) {
        triggered = true;
        setTriggerType('exit');
        setShowPopup(true);
      }
    };

    // Триггер 3: Время (20 секунд)
    timeoutId = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setTriggerType('time');
        setShowPopup(true);
      }
    }, 20000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [context]);

  const handleDismiss = () => {
    setIsClosing(true);
    sessionStorage.setItem('diagnostics_popup_dismissed', 'true');

    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
      setIsDismissed(true);
    }, 300);
  };

  const handleCtaClick = () => {
    sessionStorage.setItem('diagnostics_cta_clicked', 'true');
  };

  // Постоянная кнопка быстрой связи (всегда видна после закрытия попапа)
  if (isDismissed && !showPopup) {
    return (
      <a
        href="https://t.me/lydiaeguy"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 group"
        aria-label="Написать Лидии в Telegram"
      >
        <div className="relative">
          {/* Пульсирующий эффект */}
          <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-25"></div>

          {/* Основная кнопка */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
            <Send size={22} />
          </div>

          {/* Подсказка при наведении */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Написать Лидии
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-black rotate-45"></div>
          </div>
        </div>
      </a>
    );
  }

  if (!showPopup) return null;

  // Контекстные сообщения в зависимости от страницы и триггера
  const getContent = () => {
    if (context === 'article') {
      return {
        headline: triggerType === 'exit' ? 'Уходишь?' : 'Откликнулось?',
        subheadline: 'Бесплатная диагностика',
        description: 'Если статья зацепила — значит, пора действовать. 30 минут честного разговора о твоей ситуации.',
        cta: 'Обсудить с Лидией'
      };
    }

    if (context === 'service') {
      return {
        headline: triggerType === 'exit' ? 'Есть сомнения?' : 'Подходит тебе?',
        subheadline: 'Бесплатная диагностика',
        description: 'Не уверена, какой формат выбрать? Давай разберемся вместе за 30 минут.',
        cta: 'Подобрать формат'
      };
    }

    // home
    switch (triggerType) {
      case 'exit':
        return {
          headline: 'Не чувствуешь опоры?',
          subheadline: 'Бесплатная диагностика',
          description: 'Иногда нужен просто честный разговор, чтобы понять, куда двигаться дальше.',
          cta: 'Написать Лидии'
        };
      case 'time':
        return {
          headline: 'Хочешь поговорить?',
          subheadline: 'Бесплатная диагностика',
          description: '30 минут, чтобы разобраться, что мешает двигаться вперед.',
          cta: 'Написать Лидии'
        };
      default:
        return {
          headline: 'Чувствуешь отклик?',
          subheadline: 'Бесплатная диагностика',
          description: 'Это может быть первый шаг. 30 минут без давления — просто честный разговор.',
          cta: 'Написать Лидии'
        };
    }
  };

  const content = getContent();

  return (
    <div className={`fixed right-4 bottom-4 z-50 ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
      <div className="bg-white shadow-2xl rounded-2xl border-l-4 border-l-red-600 border border-gray-100 p-6 w-80 relative">
        {/* Кнопка закрытия */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-400 hover:text-black transition-colors p-1"
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>

        {/* Аватар Лидии */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-oswald font-bold text-lg">
            Л
          </div>
          <div>
            <p className="font-medium text-gray-900">Лидия Эгай</p>
            <p className="text-xs text-gray-500">Профессиональный коуч ICF</p>
          </div>
        </div>

        {/* Контент */}
        <p className="text-red-600 font-medium text-lg mb-1">
          {content.headline}
        </p>

        <h3 className="font-oswald font-bold text-xl uppercase leading-tight mb-3">
          {content.subheadline}
        </h3>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {content.description}
        </p>

        {/* Социальное доказательство */}
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-red-200 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-red-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
          </div>
          <span>150+ уже прошли диагностику</span>
        </div>

        <a
          href="https://t.me/lydiaeguy"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="block w-full py-3 bg-red-600 text-white text-center font-bold font-oswald uppercase tracking-widest text-sm hover:bg-black transition-colors rounded-lg"
        >
          {content.cta}
        </a>

        <p className="text-center text-xs text-gray-400 mt-3">
          Без обязательств · Отвечу лично
        </p>
      </div>
    </div>
  );
};

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-black">
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      className="w-full py-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset group hover:bg-gray-50 transition-colors px-4"
    >
      <span className={`text-xl md:text-2xl pr-8 font-oswald uppercase font-bold transition-colors duration-300 ${isOpen ? 'text-red-600' : 'text-black'}`}>
        {item.question}
      </span>
      <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? <Minus size={24} className="text-red-600" /> : <Plus size={24} className="text-black" />}
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
    >
      <p className="text-gray-700 leading-relaxed text-lg font-light px-4 max-w-3xl">
        {item.answer}
      </p>
    </div>
  </div>
);

// --- VIEWS ---

// 1. HOME VIEW
const HomeView: React.FC<{ onServiceClick: (serviceId: number) => void; onArticleClick: (articleId: number) => void }> = ({ onServiceClick, onArticleClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-red-600 hidden lg:block skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 lg:hidden z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-3/5 mb-16 lg:mb-0 fade-in-up">
              <div className="inline-block bg-black text-white px-4 py-1 mb-6 text-sm font-bold uppercase tracking-widest font-oswald">
                Профессиональный коуч
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-oswald text-black leading-[0.95] mb-8 uppercase">
                Жить свою жизнь — <br />
                <span className="text-red-600">это навык.</span> <br />
                Я помогаю его освоить
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-xl leading-relaxed mb-12 border-l-4 border-red-600 pl-6">
                Трансформационный коучинг для тех, кто готов перейти от саботажа к действиям. Мой метод основан на международных стандартах ICF и 5 годах управления реальными проектами в бизнесе и медиа.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 bg-black text-white text-base font-bold tracking-widest uppercase hover:bg-red-600 transition-all duration-300 font-oswald shadow-lg hover:shadow-red-600/20">
                  Выбрать путь
                </button>
                <button onClick={() => document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' })} className="px-12 py-5 border-2 border-black text-black text-base font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 font-oswald">
                  Кто я такая
                </button>
              </div>
            </div>

            <div className="lg:w-2/5 relative fade-in-up delay-200">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-black z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-red-600 z-0"></div>

                <img
                  src={imgHero}
                  alt="Лидия Эгай — профессиональный коуч ICF, помогает пробить финансовый потолок и победить синдром самозванца"
                  className="w-full h-full object-cover object-top relative z-10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  fetchPriority="high"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IDENTIFICATION (PROBLEM) --- */}
      <section id={SectionId.PROBLEMS} className="py-32 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase leading-none mb-6 text-center">
              Тебе ко мне, <br /><span className="text-red-600">если у тебя:</span>
            </h2>

            {/* Первый ряд - 3 блока */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {PAIN_POINTS.slice(0, 3).map((point, idx) => (
                <div key={idx} className="group cursor-default p-6 md:p-8 border border-white/10 hover:border-red-600 transition-all duration-300 bg-white/5">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-600 font-oswald font-bold text-base flex-shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl md:text-2xl font-oswald uppercase font-bold text-white leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base pl-14">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Второй ряд - 2 блока по центру */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
              {PAIN_POINTS.slice(3, 5).map((point, idx) => (
                <div key={idx + 3} className="group cursor-default p-6 md:p-8 border border-white/10 hover:border-red-600 transition-all duration-300 bg-white/5">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-600 font-oswald font-bold text-base flex-shrink-0">
                      {idx + 4}
                    </div>
                    <h3 className="text-xl md:text-2xl font-oswald uppercase font-bold text-white leading-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-base pl-14">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border-l-4 border-red-600 bg-white/5">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                Я знаю, как с этим работать. Мы не будем тратить время на бесконечный анализ прошлого. Мы найдем ту самую «слепую зону», которая прямо сейчас тормозит твое развитие, и выстроим четкий маршрут к твоему результату.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (TIERS) --- */}
      <section id={SectionId.SERVICES} className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="ВЫБРАТЬ ПУТЬ"
            subtitle="Чем выше уровень, тем больше моего личного участия в твоем результате."
            centered
            accent
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative h-[550px] overflow-hidden cursor-pointer border border-black bg-gray-200" onClick={() => onServiceClick(service.id)}>
                <img
                  src={service.image}
                  alt={`${service.title} — ${service.subtitle}, коучинг услуга от профессионального коуча Лидии Эгай`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                  <div className="absolute top-8 left-8 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 font-oswald">
                    {service.level}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-oswald font-bold mb-2 uppercase leading-none group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg font-light text-gray-300 mb-4 font-oswald uppercase tracking-wide">
                    {service.subtitle}
                  </p>

                  <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-gray-200 font-light mb-6 text-sm leading-relaxed border-l-2 border-red-600 pl-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-2">
                    <span className="font-oswald text-lg">{service.price}</span>
                    <button className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
                      Что внутри <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Приписка про совмещение форматов */}
          <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg max-w-3xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold">Важно:</span> Форматы можно совмещать. Идеальное комбо для скорости — это <span className="text-red-600 font-medium">Клуб</span> (чтобы держать ритм и быть в среде) + <span className="text-red-600 font-medium">Личная работа</span> (чтобы точечно решать глубокие запросы).
            </p>
          </div>
        </div>
      </section>

      {/* --- ABOUT / METHOD --- */}
      <section id={SectionId.ABOUT} className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/5] bg-black">
                <img
                  src={imgAbout}
                  alt="Лидия Эгай — профессиональный коуч ICF Level 2, работает с синдромом самозванца и финансовым потолком"
                  className="w-full h-full object-cover object-top opacity-80 mix-blend-screen"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-600 rounded-full flex items-center justify-center hidden md:flex">
                <span className="text-white font-oswald font-bold text-center leading-tight text-lg">
                  ICF LEVEL 2
                </span>
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionHeading title="Кто я такая" accent />
              <p className="text-xl text-gray-800 mb-6 font-light leading-relaxed">
                Меня зовут Лидия. Я пришла в коучинг с 5-ти летним опытом в продюсировании и управлении проектами (реклама, EdTech). Я знаю цену хаосу, выгоранию и потере фокуса. Мой опыт научил меня превращать идеи в работающие системы, а проблемы — в задачи.
              </p>
              <p className="text-xl text-gray-800 mb-10 font-light leading-relaxed">
                В работе с клиентами я объединяю этот управленческий подход с глубинной психологией коучинга. Мы не просто «разговариваем», мы перестраиваем ваше мышление под ваши новые цели.
              </p>

              <h3 className="text-xl font-oswald font-bold uppercase mb-6 text-red-600">Моя квалификация:</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-6">
                    <Shield size={32} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-oswald font-bold uppercase mb-1">Профессиональный коуч (ICF, Level 2)</h4>
                    <p className="text-gray-600">Углубленное международное образование. Это золотой стандарт в индустрии, гарантирующий качество и этику работы.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <Target size={32} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-oswald font-bold uppercase mb-1">150+ часов практики</h4>
                    <p className="text-gray-600">Работаю с предпринимателями, экспертами и теми, кто ищет свой путь.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-6">
                    <Zap size={32} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-oswald font-bold uppercase mb-1">Управленец-практик</h4>
                    <p className="text-gray-600">Понимаю бизнес-контекст и реальные проблемы роста.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section id={SectionId.REVIEWS} className="py-32 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="КЕЙСЫ" subtitle="Слова моих клиентов" light centered accent />

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/5 p-10 border border-white/10 hover:border-red-600 transition-all duration-300 flex flex-col relative group">
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 group-hover:bg-red-600 transition-colors flex items-center justify-center">
                  <span className="text-2xl font-serif">"</span>
                </div>
                <p className="text-gray-300 font-light leading-relaxed text-lg flex-grow mb-8 group-hover:text-white transition-colors">
                  {review.text}
                </p>
                <div>
                  <p className="font-oswald text-xl uppercase font-bold text-white mb-1">{review.name}</p>
                  <p className="text-xs text-red-500 uppercase tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id={SectionId.FAQ} className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading title="ВОПРОСЫ" subtitle="Всё, что ты стеснялась спросить" accent />

          <div className="mt-12">
            {FAQ_DATA.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- ARTICLES --- */}
      <section id={SectionId.ARTICLES} className="py-32 bg-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="ИНСАЙТЫ"
            subtitle="Разбираю то, о чем вы боитесь думать"
            accent
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => onArticleClick(article.id)}
                className="bg-white p-8 border border-black hover:border-red-600 transition-colors group cursor-pointer"
              >
                <div className="flex gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold uppercase tracking-widest text-red-600 font-oswald"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase mb-4 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-oswald">{article.readTime}</span>
                  <span className="text-black font-oswald font-bold uppercase text-sm tracking-widest group-hover:text-red-600 transition-colors flex items-center">
                    Читать <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// 2. ARTICLE DETAIL VIEW (UX/UI 2025)
const ArticleView: React.FC<{
  article: Article;
  onBack: () => void;
  onNavigateToSection: (sectionId: string) => void;
  allArticles: Article[];
  onArticleClick: (id: number) => void;
}> = ({ article, onBack, onNavigateToSection: _onNavigateToSection, allArticles, onArticleClick }) => {
  const [readProgress, setReadProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const element = contentRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate how much of the article has been scrolled
      const scrolled = scrollTop - elementTop + windowHeight;
      const total = elementHeight + windowHeight;
      const progress = Math.min(Math.max((scrolled / total) * 100, 0), 100);

      setReadProgress(progress);
      setShowStickyCta(progress > 40 && progress < 95);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get related articles (same tags, different article)
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .filter(a => a.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 2);

  // If no tag matches, just get other articles
  const otherArticles = relatedArticles.length > 0
    ? relatedArticles
    : allArticles.filter(a => a.id !== article.id).slice(0, 2);

  const renderContent = (section: ArticleSection, index: number, totalSections: number) => {
    // Insert mid-article CTA after ~40% of content
    const midPoint = Math.floor(totalSections * 0.4);
    const showMidCta = index === midPoint;

    const midCtaElement = showMidCta ? (
      <div key={`mid-cta-${index}`} className="my-16 p-8 bg-gray-50 border-l-4 border-red-600 rounded-r-lg">
        <p className="text-lg font-medium text-gray-800 mb-4">
          Узнали себя? Это только верхушка айсберга.
        </p>
        <a
          href="https://t.me/lydiaeguy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-600 font-bold font-oswald uppercase tracking-widest text-sm hover:text-black transition-colors group"
        >
          Обсудить вашу ситуацию
          <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    ) : null;

    let contentElement: React.ReactNode = null;

    switch (section.type) {
      case 'quote':
        contentElement = (
          <blockquote key={index} className="my-16 relative">
            <div className="absolute -left-4 top-0 text-red-600 text-8xl font-serif leading-none opacity-20">"</div>
            <div className="pl-8 md:pl-12 border-l-4 border-red-600">
              <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed italic">
                {section.content as string}
              </p>
            </div>
          </blockquote>
        );
        break;
      case 'list':
        contentElement = (
          <ul key={index} className="my-10 space-y-5 bg-gray-50 p-8 rounded-lg">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="flex items-start group">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
        break;
      default:
        const text = section.content as string;
        // Section headers
        if (text.length < 50 && text === text.toUpperCase()) {
          contentElement = (
            <h3 key={index} className="mt-16 mb-6 text-2xl md:text-3xl font-oswald font-bold uppercase text-black flex items-center">
              <div className="w-8 h-1 bg-red-600 mr-4"></div>
              {text}
            </h3>
          );
        } else {
          // Regular paragraph with better typography
          contentElement = (
            <p key={index} className="my-8 text-xl text-gray-700 leading-[1.8]">
              {text}
            </p>
          );
        }
    }

    return (
      <React.Fragment key={`content-${index}`}>
        {contentElement}
        {midCtaElement}
      </React.Fragment>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div
          className="h-full bg-red-600 transition-all duration-150 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Sticky CTA (appears after 40% read) */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        showStickyCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <a
          href="https://t.me/lydiaeguy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-8 py-4 bg-black text-white font-bold font-oswald uppercase tracking-widest text-sm hover:bg-red-600 transition-colors shadow-2xl rounded-full"
        >
          <span className="mr-3">Хочу так же</span>
          <Send size={18} />
        </a>
      </div>

      {/* --- HEADER --- */}
      <div className="relative bg-black pt-24 pb-32 md:pt-28 md:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-black/50"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-red-600/20 rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-red-600/10 hidden lg:block"></div>

        <div className="absolute top-20 left-0 w-full p-6 z-20 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 hover:bg-red-600 transition-all uppercase tracking-widest font-bold font-oswald text-sm group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Назад
          </button>
          <span className="text-white/80 font-oswald font-bold text-lg hidden md:block">LYDIA EGUY</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-red-600 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest font-oswald rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-oswald font-bold text-white mb-8 uppercase leading-[0.95]">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              {article.subtitle}
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-sm uppercase tracking-widest font-oswald">
              <span>{article.readTime} чтения</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Лидия Эгай</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div ref={contentRef} className="container mx-auto px-6 max-w-3xl py-16 md:py-24">
        <article>
          {article.content.map((section, index) => renderContent(section, index, article.content.length))}
        </article>

        {/* Final CTA */}
        <div className="mt-20 p-10 md:p-16 bg-black text-white text-center rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <p className="text-red-500 font-oswald uppercase tracking-widest text-sm mb-4">Следующий шаг</p>
            <h3 className="text-3xl md:text-4xl font-oswald font-bold uppercase mb-6">
              Узнали себя в этой статье?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              Это значит, что вы готовы к изменениям. Давайте обсудим, как я могу помочь именно вам.
            </p>
            <a
              href="https://t.me/lydiaeguy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-5 bg-red-600 text-white font-bold font-oswald uppercase tracking-widest hover:bg-white hover:text-black transition-colors group"
            >
              {article.cta.text}
              <Send size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {otherArticles.length > 0 && (
          <div className="mt-24">
            <h3 className="text-2xl font-oswald font-bold uppercase mb-8 flex items-center">
              <div className="w-8 h-1 bg-red-600 mr-4"></div>
              Читайте также
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherArticles.map((relatedArticle) => (
                <article
                  key={relatedArticle.id}
                  onClick={() => onArticleClick(relatedArticle.id)}
                  className="p-6 border border-gray-200 hover:border-red-600 transition-colors cursor-pointer group bg-white hover:shadow-lg"
                >
                  <div className="flex gap-2 mb-3">
                    {relatedArticle.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-widest text-red-600 font-oswald">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-oswald font-bold uppercase mb-2 group-hover:text-red-600 transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedArticle.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-400 font-oswald">
                    <span>{relatedArticle.readTime}</span>
                    <ArrowRight size={14} className="ml-auto group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 text-center text-gray-400 text-xs font-oswald uppercase tracking-widest border-t border-gray-200">
        &copy; {new Date().getFullYear()} Lydia Eguy
      </footer>
    </div>
  );
};

// 3. SERVICE DETAIL VIEW
const ServiceView: React.FC<{ service: ServiceLevel; onBack: () => void; onNavigateToSection: (sectionId: string) => void }> = ({ service, onBack, onNavigateToSection: _onNavigateToSection }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  return (
    <div className="bg-white min-h-screen pb-24 fade-in-up">
      {/* --- HEADER --- */}
      <div className="relative h-[60vh] md:h-[70vh] bg-black">
        <img
          src={service.image}
          alt={`${service.title} — ${service.subtitle}, услуга профессионального коуча Лидии Эгай`}
          className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <div className="absolute top-20 left-0 w-full p-6 z-20 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-red-600 transition-all uppercase tracking-widest font-bold font-oswald text-sm">
            <ArrowLeft size={20} className="mr-2" /> Назад
          </button>
          <span className="text-white font-oswald font-bold text-xl hidden md:block">LYDIA EGUY</span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 z-10">
          <div className="max-w-4xl">
            <div className="bg-red-600 text-white inline-block px-4 py-1 mb-6 font-oswald font-bold uppercase tracking-widest text-sm">
              {service.level}
            </div>
            <h1 className="text-5xl md:text-8xl font-oswald font-bold text-white mb-6 uppercase leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-light font-oswald uppercase tracking-wide max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl -mt-12 relative z-20">
        <div className="bg-white p-6 md:p-12 border border-black shadow-2xl">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase mb-6">О формате</h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
                {service.detailedDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-oswald font-bold uppercase text-lg mb-4 border-b-2 border-red-600 pb-2 inline-block">Для кого</h4>
                  <ul className="space-y-3">
                    {service.forWhom.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-black mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-800 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-oswald font-bold uppercase text-lg mb-4 border-b-2 border-red-600 pb-2 inline-block">Результаты</h4>
                  <ul className="space-y-3">
                    {service.results.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 space-y-6">
              <div className="bg-gray-50 p-6 border border-gray-200">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-bold font-oswald">Стоимость</p>
                <p className="text-3xl md:text-4xl font-oswald font-bold text-black mb-4">{service.price}</p>
                <a
                  href="https://t.me/lydiaeguy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-red-600 text-white font-bold font-oswald uppercase tracking-widest hover:bg-black transition-colors text-center"
                >
                  {service.ctaText}
                </a>
              </div>

              <div>
                <h4 className="font-oswald font-bold uppercase text-lg mb-4">Что внутри:</h4>
                <div className="space-y-4">
                  {service.whatIsInside.map((feat, i) => (
                    <div key={i}>
                      <p className="font-bold text-black uppercase text-base mb-1">{feat.title}</p>
                      <p className="text-base text-gray-700">{feat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Simple for detail page */}
      <footer className="bg-white py-12 text-center text-gray-400 text-xs mt-12 font-oswald uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Lydia Eguy
      </footer>
    </div>
  );
}


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  // View State
  const [currentView, setCurrentView] = useState<'home' | 'service' | 'article'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service');
  };

  const handleArticleClick = (articleId: number) => {
    setSelectedArticleId(articleId);
    setCurrentView('article');
  };

  const handleNavigate = (_view: 'home', sectionId?: string) => {
    setCurrentView('home');
    setSelectedServiceId(null);
    setSelectedArticleId(null);

    if (sectionId) {
      // Small delay to allow render
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);
  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />

      {/* Popup диагностики - показывается на всех страницах с контекстом */}
      <DiagnosticsPopup context={currentView} />

      {currentView === 'home' && (
        <HomeView onServiceClick={handleServiceClick} onArticleClick={handleArticleClick} />
      )}

      {currentView === 'service' && selectedService && (
        <ServiceView
          service={selectedService}
          onBack={() => handleNavigate('home')}
          onNavigateToSection={(sectionId) => handleNavigate('home', sectionId)}
        />
      )}

      {currentView === 'article' && selectedArticle && (
        <ArticleView
          article={selectedArticle}
          onBack={() => handleNavigate('home', SectionId.ARTICLES)}
          onNavigateToSection={(sectionId) => handleNavigate('home', sectionId)}
          allArticles={ARTICLES}
          onArticleClick={handleArticleClick}
        />
      )}

      {/* Global Footer */}
      {currentView === 'home' && (
        <footer id={SectionId.CONTACTS} className="bg-black text-white py-24 border-t-4 border-red-600">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-16 md:mb-0 max-w-xl">
                <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase leading-none mb-8">
                  Не знаешь, <br /> <span className="text-red-600">с чего начать?</span>
                </h2>
                <p className="text-gray-400 font-light text-xl mb-12">
                  Тебе не нужно готовиться к разговору или искать «идеальный запрос». Просто напиши мне, и мы вместе поймем, какой формат работы подойдет именно тебе.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://t.me/lydiaeguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Написать в Telegram"
                    className="flex items-center justify-center px-10 py-5 bg-white text-black font-bold font-oswald uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Send size={20} className="mr-3" />
                    Telegram
                  </a>
                  <a
                    href="https://www.instagram.com/dusyevich/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Открыть Instagram"
                    className="flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold font-oswald uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
                  >
                    <Instagram size={20} className="mr-3" />
                    Instagram
                  </a>
                </div>
              </div>

              <div className="text-right w-full md:w-auto self-end">
                <div className="text-4xl font-oswald font-bold mb-8">LYDIA EGUY</div>
                <div className="text-gray-700 text-xs uppercase tracking-widest">
                  &copy; {new Date().getFullYear()} Lydia Eguy. <br />
                  All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;