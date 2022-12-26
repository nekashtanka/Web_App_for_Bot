export const listCard = [
  {
    id: 1,
    name: "Коробка для медицинских центров",
    price: 3500,
    description:
      "Голосовой робот используется в медицинских клиниках и центрах здоровья для подтверждения записи на прием к врачу и напоминания о следующем визите.",
    list: [
      "распознавание речи. Бот N. умеет вести диалог и если нужно, переводить на администратора",
      "отчет со статусом ответа по каждому пациенту передается в CRM",
      "Робот позвонит с напоминанием и для подтверждения записи на прием к врачу за сутки или за 2 часа до начала приема",
      "Робот обратиться к пациенту по имени, назовет время приема, кабинет и фамилию врача",
    ],
    priceFull: "СТОИМОСТЬ оповещения пациентов МЕД.КЛИНИКИ от 3500 руб./мес.",
    connection: "individ",
    integration: "individ",
    addition: [],
    actual: true,
    hot: false,
  },
  {
    id: 2,
    name: "Коробка для банков",
    price: 3500,
    description: "В этой коробке умный голосовой робот Бот N. умеет и может:",
    list: [
      "выполнять функции коллектора, для напоминания клиентам об оплате или о задолженности по кредитному договору. Проговорит сумму долга и назовет Человека по имени",
      "записывает разговор с момента соединения (с момента ответа)",
      "учитывает часовые пояса при обзвоне",
    ],
    priceFull:
      "СТОИМОСТЬ маленькой коробки для БАНКА с оповещением до 1000 клиентов в день — 3500 руб. /мес.",
    connection: "free",
    integration: "absence",
    addition: [
      "Управление роботом через ЛК или он внедряется в CRM.",
      "Если клиентов у БАНКА много, можно подключить коробку с оповещением до 10 тысяч клиентов в день за 9500 руб./мес.",
    ],
    actual: false,
    hot: false,
  },
  {
    id: 3,
    name: "Коробка для лидогенерации и коллцентров",
    price: 6700,
    description: "Голосовой робот Бот N.:",
    list: [
      "помогает генерировать Лиды ",
      "выдаст конверсию",
      "распознает положительные, отрицательные и прочие ответы. Умеет вести диалог и если нужно, переводить на оператора",
      "запишет разговор с администратором/оператором при переводе звонка",
      "будет звонить точно в заданное время по совершенно разным базам контактов и озвучивать разные предложения – робот не запутается)",
    ],
    priceFull:
      "СТОИМОСТЬ ЛИДОГЕНЕРАЦИИ роботом от 6700 руб./мес. (от 5000 номеров/день) ",
    connection: "freeStorage",
    integration: "absence",
    addition: ["Можно включить автопредупреждение об окончании базы номеров"],
    actual: false,
    hot: true,
  },
  {
    id: 4,
    name: "Коробка для салонов красоты",
    price: 2100,
    description: "В этой коробке робот может помочь:",
    list: [
      "подтвердить запись к специалисту",
      "напомнить клиенту о визите в Салон",
      "массово информировать о специальных акциях салона",
      "для контроля качества предоставляемых услуг",
      "провести опрос или анкетирование по услугам Салона",
    ],
    priceFull:
      "СТОИМОСТЬ оповещения до 100 клиентов САЛОНА КРАСОТЫ в день – 2100 руб. в месяц!",
    connection: "free",
    integration: "absence",
    addition: [
      "Если у вас СЕТЬ САЛОНОВ КРАСОТЫ – напишите Боту, вышлем спец. условия)",
    ],
    actual: false,
    hot: false,
  },
  {
    id: 5,
    name: "Коробка для интернет-магазинов",
    price: 3500,
    description: "Дешевле, чем смс!",
    list: [
      "с сайта приходит заказ и падает в CRM — голосовой робот Бот N. должен забрать заказ (номер телефона, № заказа) — дозвонится и передать сообщение о том, что заказ сформирован и готов ли клиент его подтвердить. Если «да», то перевод на менеджера",
      "после разговора с менеджером и после оформления заказа, назначается дата и время доставки в CRM. Бот N. дозванивается и сообщает клиенту: № заказа, дату и время доставки, и спрашивает сможет ли клиент принять заказ",
    ],
    priceFull:
      "СТОИМОСТЬ — оповещение до 100 клиентов МАГАЗИНА в день + хранение записи разговоров 10 Гб — 3500 руб./мес.",
    connection: "free",
    integration: "individ",
    addition: [],
    actual: false,
    hot: false,
  },
  {
    id: 6,
    name: "Коробка для фитнес центров",
    price: 2500,
    description: "Робот в этой коробке будет использоваться для: ",
    list: [
      "уведомления клиентов об окончании срока действия абонемента",
      "приглашения на тренировку по индивидуальным данным клиента ",
      "массово информировать о специальных акциях клуба",
      "при входящих звонках – проведет небольшой опрос и предложит подходящий тариф на посещение тренировок, а если нужно – переведет на администратора",
    ],
    priceFull:
      "СТОИМОСТЬ коробки для ФИТНЕС-клуба от 2500 руб./мес. за обзвон до 1000 номеров в день",
    connection: "free",
    integration: "false",
    addition: [
      "Если у вас СЕТЬ ФИТНЕС-ЦЕНТРОВ – напишите Боту, вышлем спец. условия)",
    ],
    actual: false,
    hot: false,
  },
  {
    id: 7,
    name: "Коробка для ЖКХ и УК",
    price: 2400,
    description: "Голосовой робот Бот N. решает две задачи:",
    list: [
      "уведомляет о задолженности по оплате услуг ЖКХ. Периодически напоминает о необходимости погашения задолженности",
      "принимает показания приборов учета (счетчиков) и заносит их в CRM-систему УК или в 1С",
      "первая линия для обработки заявок",
    ],
    priceFull:
      "СТОИМОСТЬ коробки для Управляющих Компаний и ЖКХ от 2400 руб./мес. (от 500 номеров/день)",
    connection: "individ",
    integration: "individ",
    addition: ["Управление роботом через ЛК или он внедряется в CRM"],
    actual: true,
    hot: false,
  },
  {
    id: 8,
    name: "Коробка для автобизнеса",
    price: 2700,
    description:
      "В этой коробке голосовой робот Бот N. решает ЗАДАЧИ для автосалонов, автосервисов и СТО:",
    list: [
      "уведомление/напоминание о записи на ТО и подтверждение по дате и времени",
      "автоматические напоминания о сроках действия страховых полисов",
      "проведение опроса или анкетирования при получении обратной связи от клиента",
    ],
    priceFull:
      "СТОИМОСТЬ МАЛЕНЬКОЙ КОРОБКИ для АВТОБИЗНЕСА с оповещением до 100 клиентов в день – 2700 руб. в месяц ",
    connection: "freeStorage",
    integration: "absence",
    addition: [
      "Бот N. может действовать без контроля Человека, если будет настроена интеграция с CRM. Робот запишет разговор, и при необходимости соединит с оператором.",
    ],
    actual: false,
    hot: false,
  },
  {
    id: 9,
    name: "Коробка для логистики(доставка)",
    price: 3700,
    description: "Для удобства использования свяжите робота с СRM!",
    list: [
      "ежедневно многочисленным Клиентам отправляются грузы от разных компаний. Робот оповестит клиентов о доставке по заданным параметрам. Все данные передаются из CRM и обратно в режиме онлайн.",
      "Робот на «первой» линии распознает речь Человека и ведет диалог по заданному скрипту. Прописывается полная «ветка» сценария звонка. Все обработанные вызовы попадают в CRM либо переводятся на сотрудника.",
    ],
    priceFull: "СТОИМОСТЬ оповещения для задач ЛОГИСТИКИ— от 3700 руб./мес.",
    connection: "individ",
    integration: "individ",
    addition: [],
    actual: false,
    hot: false,
  },
  {
    id: 10,
    name: "Пакет-фильтр базы",
    price: 1800,
    description:
      "Бот N. актуализирует статус номера (действует/не действует), распознавание речи с высокой точностью определит статус «человек/автоответчик» и тем самым повышает количество обработанных вызовов в день.",
    list: [
      "без передачи голосового сообщения",
      "3 цикла повторов",
      "удобный отчёт со статусами номеров",
    ],
    priceFull:
      "СТОИМОСТЬ фильтрации базы номеров (от 1000 номеров в день) – от 1800 руб. в месяц",
    connection: "free",
    integration: "absence",
    addition: [],
    actual: true,
    hot: false,
  },
  {
    id: 11,
    name: "Коробка для EVENT-агентств",
    price: 2700,
    description: "Бот N. будет:",
    list: [
      "приглашать на событие или вебинар ",
      "оповещать о дате начала мероприятия ",
      "подтверждать участие или бронь ",
      "напоминать о необходимости зарегистрироваться на курс",
      "информировать об изменении времени проведения события",
    ],
    priceFull:
      "СТОИМОСТЬ оповещения до 1000 участников в день - 2700 руб./мес.",
    connection: "free",
    integration: "absence",
    addition: [
      "ВАЖНО! Интеграция с CRM позволит роботу получать данные для оповещений в режиме онлайн без контроля Человеком, что во многом упрощает работу с клиентами и автоматизирует рассылку ссылок.",
    ],
    actual: false,
    hot: false,
  },
  {
      id:12,
      name: "Коробка для онлайн-школ",
      price: 2700,
      description: "",
      list: [""],
      priceFull: "",
      connection: "absence/free/individ",
      integration: "absence/free/individ",
      addition: [],
      actual: false,
      hot: false,
  },
  {
    id: 13,
    name: "Умный IVR (Входящая связь)",
    price: 0,
    description: "Голосовой робот незаменим при потоке входящих обращений!",
    list: [
      "Для разгрузки операторов на первой линий",
      "Автосекретарь с переводом звонка на менеджера",
      "Консультирование по услугам вашей компании",
      "Анкетирование для HR",
      "Прием заказов с сайта",
      "Принимает показания приборов учета (для ЖКХ и УК)",
    ],
    priceFull:
      "СТОИМОСТЬ робота на входящую связь строго индивидуальна! Напишите боту, мы сделаем расчет для вас)",
    connection: "",
    integration: "",
    addition: [],
  },
];

export const hotOffer = [
  {
    id: 0,
    name: "Горячее предложение",
    mainInfo: `Программа FREE рассчитана на бесплатное пользование любой коробкой с голосовым роботом для автообзвона на выбор в течении 15 дней. 
      \nОграничение: загрузка и обзвон до 1000 номеров в день`,

    secondaryInfo: `К любому голосовому роботу Бот N. предоставляется возможность подключения своего провайдера связи для исходящих и входящих звонков.
      \nВ случае необходимости ANNACOM.RU обеспечивает исходящую и входящую связь. Стоимость минуты голосового вызова составляет 2,5 руб. с посекундной тарификацией.
      \nОграничение: обязательная предоплата за услуги связи в случае использования ANNACOM.RU для исходящих звонков.`,

    freePeriod: `По истечении Free-периода допускается использование робота для автоматических вызовов бесплатно и навсегда.
      \nОграничение: не более 50 номеров в день. Ограничение применяется автоматически.`,

    premiumTitle: "Переход на Premium-доступ позволяет:",
    premiumInfo: [
      "получать расширенную статистику по обработанным номерам;",

      "формировать отчет по лидогенерации с расчетом % конверсии;",

      "осуществлять мониторинг ежедневных затрат;",

      "получать уведомления через Telegram об остатке базы номеров и о завершении обработки загруженной базы;",

      "загружать в систему автообзвона черный список номеров (на номера из черного списка дозвон производится не будет);",

      "запись и хранение разговоров;",

      "подключать и отключать различные;",
    ],
  },
];

export const checkList = [
  "Валидация/Фильтрация", "Предиктивный набор", "HLR запросы", "Передача голоса", `Диалог "робот-Человек"`, "Робот на входящую связь"
]

export const telCheck = [
  "своя телефония", "нужна телефония"
]

export const replyList = [
  "Произнести ответ", "Нажать клавишу для ответа"
]

export const scriptList = [
  "напоминание об оплате долга", "прием входящих звонков для передачи показаний"
]