import { title } from "process";

export const site = {
    home: {
        seo: {
            title: 'VCS. Центр визовых услуг',
            description: 'Нужна виза?<br/>Мы Вам поможем.',
        },
        hero: {
            title: 'VCS. Центр визовых услуг',
            subtitle: 'Нужна виза?<br/>Мы Вам поможем.',
            description: '<p><span class="text-primary">Visa Concierge Service</span> - компания объединившая самых квалифицированных специалистов. За нашими плечами тысячи одобренных виз разной сложности, и столько же довольных клиентов!</p><br/><p><span class="text-primary">Visa Concierge Service</span> - компания объединившая самых квалифицированных специалистов. За нашими плечами тысячи одобренных виз разной сложности, и столько же довольных клиентов!</p>',
            image: '/images/hero.png',
            links: [
                {
                    image: '/images/canada_flag.png',
                    label: 'КАНАДА',
                    name: 'canada_flag',
                    link: ''
                },
                {
                    image: '/images/usa_flag.png',
                    label: 'США',
                    name: 'usa_flag',
                    link: ''
                },
                {
                    image: '/images/euro_flag.png',
                    label: 'ЕВРОПА',
                    name: 'euro_flag',
                    link: ''
                },
                {
                    image: '/images/england_flag.png',
                    label: 'АНГЛИЯ',
                    name: 'england_flag',
                    link: ''
                }
            ]
        },
        approval: {
            title: 'Процент одобрений',
            description: 'Никаких мифических 99,98% "одобрений", а только реальная статистика! На каждую 1 000 сделок приходится:',
            list: [
                {
                    label: 'одобрений',
                    value: '93%',
                    image: '/images/approval-1.png'
                },
                {
                    label: 'отказов',
                    value: '7%',
                    image: '/images/approval-2.png'
                },
                {
                    label: 'одобрений после отказа',
                    value: '75%',
                    image: '/images/approval-3.png'
                }
            ]
        },
        featured_products: {
            title: 'Популярные направления',
            description: null,
            list: [
                {
                    thumbnail: '/images/visa-england.png',
                    title: 'Англия',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/visa-germany.png',
                    title: 'Германия',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/visa-usa.png',
                    title: 'Америка',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/visa-france.png',
                    title: 'Франция',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/'
                }
            ]
        },
        steps: {
            title: 'Как мы работаем',
            description: '*Для вашего удобства весь процесс может происходить как удаленно, так и в офисе нашей компании.<br/>*Подписывая с нами договор, вы получаете бесплатную поддержку наших специалистов в течение года.',
            list: [
                {
                    thumbnail: '/images/step-1.png',
                    title: 'ШАГ 1',
                    description: '<ul><li>Подпишем договор.</li><li>Примем оплату удобным для вас способом.</li><li>Оплатим сборы.</li><li>Заполним консульские формы и откроем личный кабинет.</li><li>Запишем на подачу/собеседование.</li></ul>',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/step-2.png',
                    title: 'ШАГ 2',
                    description: '<ul><li>Подпишем договор.</li><li>Примем оплату удобным для вас способом.</li><li>Оплатим сборы.</li><li>Заполним консульские формы и откроем личный кабинет.</li></ul>',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/step-3.png',
                    title: 'ШАГ 3',
                    description: '<ul><li>Подпишем договор.</li><li>Примем оплату удобным для вас способом.</li><li>Оплатим сборы.</li><li>Заполним консульские формы и откроем личный кабинет.</li><li>Запишем на подачу/собеседование.</li></ul>',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/step-4.png',
                    title: 'ШАГ 4',
                    description: '<ul><li>Подпишем договор.</li></ul>',
                    name: '',
                    link: '/'
                }
            ]
        },
        info: {
            title: 'Полезная информация',
            description: null,
            image: '/images/info-bg.png',
            list: [
                {
                    thumbnail: '/images/visa.png',
                    title: 'Изменения в визовом кодексе ЕС',
                    description: 'Время от времени Евросоюз пересматривает правила и условия выдачи шенгенских виз.',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/stamp.png',
                    title: 'Правило первого въезда ЕС',
                    description: 'Время от времени Евросоюз пересматривает правила и условия выдачи шенгенских виз.',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/checklist.png',
                    title: 'Как заполнить анкету DS-160',
                    description: 'Как корректно внести всю информацию в анкету',
                    name: '',
                    link: '/'
                },
                {
                    thumbnail: '/images/notes-doc.png',
                    title: 'Какие документы нужны на визу в США',
                    description: 'Время от времени Евросоюз пересматривает правила и условия выдачи шенгенских виз.',
                    name: '',
                    link: '/'
                }
            ]
        }
    },
    about: {
        hero: {
            pageTitle: 'О нас',
            title: 'Our designs solve problems',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            image: '/images/about-hero.png',
            link: ''
        },
        aboutus: {
            title: 'Who we are',
            image: '/images/about-about-us.png',
            content: [
                {
                    title: 'Goal focussed',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Continuous improvement',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                }
            ]
        },
        mission: {
            content: [
                {
                    subtitle: 'Our Mission ',
                    title: 'Inspire, Innovate, Share',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    image: '/images/about-mission-1.png',
                    link: ''
                },
                {
                    subtitle: 'Our Vision',
                    title: 'Laser focus',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    image: '/images/about-mission-2.png',
                    link: ''
                },
            ]
        },
        benefits: {
            title: 'The benefits of working with us',
            content: [
                {
                    image: '1',
                    title: 'Customize with ease',
                    description: 'Odio id qui corrupti ad neque odit nesciunt itaque. Assumenda ut velit ipsam excepturi temporibus doloribus temporibus. Ab nesciunt necessitatibus eum. Ut itaque et eos. Officia laudantium a placeat laborum iure.'
                },
                {
                    image: '2',
                    title: 'Perfectly Responsive',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
                },
                {
                    image: '3',
                    title: 'Friendly Support',
                    description: 'Fugit autem illo praesentium iure quo. Dolorem possimus vitae facere.'
                }
            ]
        },
    },
    features: {
        hero: {
            pageTitle: 'Технологии',
            title: 'All the features you need',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/features-hero.png'
        },
        content: [
            {
                subtitle: 'Use Client-first',
                title: 'Top agencies and freelancers around the world use Client-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                image: '/images/feature-1.png',
                link: ''
            },
            {
                subtitle: 'Free Revision Rounds',
                title: 'Get free Revisions and one week of free maintenance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-2.png',
                link: ''
            },
            {
                subtitle: '24/7 Support',
                title: 'Working with us, you will be getting 24/7 priority support',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-3.png',
                link: ''
            },
            {
                subtitle: 'Quick Delivery',
                title: 'Guranteed 1 week delivery for standard five pager website',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-4.png',
                link: ''
            },
        ]
    },
    visa: {
        seo: {
            title: 'Виза в Канаду',
            description: 'Получение визы в Канаду, по мнению многих, процесс не быстрый и достаточно сложный. Но специалисты нашей компании готовы доказать Вам обратное.',
        },
        hero: {
            title: 'Виза в Канаду',
            subtitle: 'Просто. Быстро. Доступно.',
            description: 'Получение визы в Канаду, по мнению многих, процесс не быстрый и достаточно сложный. Но специалисты нашей компании готовы доказать Вам обратное.',
            image: '/images/visa-hero.png',
        },
        info_important: {
            title: 'Важно знать:',
            description: 'У Канадской визы нет регламента сроков рассмотрения документов. Консульский отдел может одобрить визу за 3 рабочих дня или за 30. Также и срок действия визы в Канаду не предугадать. В большинстве своем разрешение на въезд действует до окончания срока действия паспорта. Но бывают и однократные визы, действующие не дольше заявленной поездки.',
            image: '/images/info-important-bg.png'
        },
        docs: {
            main: {
                title: 'Обязательные документы',
                description: 'Консульский отдел Посольства Канады принимает все документы, которые могут показать вашу связь с Родиной и туристические намерения.',
                list: [
                    {
                        thumbnail: '/images/passport_3.png',
                        title: 'общегражданский паспорт'
                    },
                    {
                        thumbnail: '/images/passport_travel_3.png',
                        title: 'заграничные паспорта за последние 10 лет'
                    },
                    {
                        thumbnail: '/images/database_3.png',
                        title: 'финансовые справки'
                    },
                ],
            },
            additional: {
                title: 'Дополнительные документы',
                description: '',
                list: [
                    {
                        thumbnail: '/images/passport_3.png',
                        title: 'общегражданский паспорт'
                    },
                    {
                        thumbnail: '/images/passport_travel_3.png',
                        title: 'заграничные паспорта за последние 10 лет'
                    },
                    {
                        thumbnail: '/images/database_3.png',
                        title: 'финансовые справки'
                    },
                ],
            },
            info: 'Заявку на канадскую визу рассматривают без заграничного паспорта.'
        },
        services: {
            title: 'В наши услуги по оформлению визы в Канаду входят',
            description: '',
            list: [
                {
                    title: 'Анкеты',
                    description: 'Заполнение всех анкет, программа пребывания',
                    thumbnail: '/images/visa-service-1.svg'
                },
                {
                    title: 'Подготовка документов',
                    description: 'Перевод и загрузка всех документов на портал Посольства Канады',
                    thumbnail: '/images/visa-service-2.svg'
                },
                {
                    title: 'Сборы',
                    description: 'Оплата всех сборов (Консульский сбор, Биометрия, Вклейка визы в паспорт)',
                    thumbnail: '/images/visa-service-3.svg'
                },
                {
                    title: 'Подача',
                    description: 'Подача и получение паспорта из Консульства',
                    thumbnail: '/images/visa-service-4.svg'
                },
            ]
        },
        info: {
            title: 'Полезная информация',
            list: [
                {
                    thumbnail: '/images/service-info-item-1.png',
                    title: 'Документы для визы в Канаду',
                },
                {
                    thumbnail: '/images/service-info-item-2.png',
                    title: 'Биометрические данные',
                }
            ]
        }
    }
};

export const navbar = [
    {
        label: 'Главная',
        route: '/',
    },
    {
        label: 'Визы',
        route: '/services',
        menu: 'services'
    },
    {
        label: 'О нас',
        route: '/about'
    },
    {
        label: 'Блог',
        route: '/posts'
    },
];

export const contacts = [
    {
        name: 'email',
        title: 'Пишите нам',
        href: 'mailto:contact@website.com',
        label: 'contact@website.com'
    },
    {
        name: 'phone',
        title: 'Позвоните нам',
        href: 'tel:0927627728525',
        label: '+927 6277 28525'
    },
];

export const socials = {
    instagram: {
        title: '#vcs_ru в instagram',
        link: 'https://www.instagram.com/',
        feed: [
            {
                thumbnail: '/images/instagram-feed-1.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
            {
                thumbnail: '/images/instagram-feed-2.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
            {
                thumbnail: '/images/instagram-feed-1.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
            {
                thumbnail: '/images/instagram-feed-3.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
            {
                thumbnail: '/images/instagram-feed-1.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
            {
                thumbnail: '/images/instagram-feed-2.png',
                description: '@starvisa: Ещё одна страна присоединилась к списку «разрешённых для въезда». Ещё одна страна присоединилась к списку «разрешённых для въезда».',
                link: 'https://www.instagram.com/'
            },
        ]
    }
}

export const projects = [
    {
        title: 'Дизайн сайта для Renovation Group',
        description: 'Новый стильный сайт Renovation Group - оцените онлайн!',
        thumbnail: '/images/project-1.png',
        link: '/'
    },
    {
        title: 'Таргетированная и контекстная реклама',
        description: 'Создание таргетированных и контекстных рекламных кампаний нацеленных на интересы вашей целевой аудитории.',
        thumbnail: '/images/project-2.png',
        link: '/'
    },
    {
        title: 'Разработка современных решений для бизнеса',
        description: 'Создание и оптимизация вашего сайта для эффективного развития в онлайн-среде.',
        thumbnail: '/images/project-3.png',
        link: '/'
    },
    {
        title: 'Дизайн',
        description: 'Создание адаптивного дизайна направленного на вашу целевую аудиторию',
        thumbnail: '/images/project-1.png',
        link: '/'
    },
    {
        title: 'SEO-оптимизация',
        description: 'Оптимизация сайта с учетом потребностей вашей целевой аудитории для максимальной эффективности в поисковых системах.',
        thumbnail: '/images/project-2.png',
        link: '/'
    }
];

export const FAQ = {
    title: 'Вы спрашиваете - мы отвечаем',
    description: '',
    link: {
        label: null,
        href: null
    },
    list: [
        {
            thumbnail: '/images/visa-france.png',
            title: 'Мне выдали визу во Францию на три года. Как долго я могу находиться в Европе?',
            description: 'Шенгенская виза - это не срок, сколько вы можете находиться безвыездно на территории Европы. Визы сроком действия более 6 месяцев, как правило, позволяют находиться на территории шенгенской зоны не более 90 дней в полугодие. Если вы сомневаетесь, просмотрите вашу визу. В разделе "Duration of stay" указано количество дней, сколько вы можете пребывать в ропе в течение полугода.'
        },
        {
            thumbnail: '/images/visa-england.png',
            title: 'Мне выдали визу в Англия на три года. Как долго я могу находиться в Европе?',
            description: 'Шенгенская виза - это не срок, сколько вы можете находиться безвыездно на территории Европы. Визы сроком действия более 6 месяцев, как правило, позволяют находиться на территории шенгенской зоны не более 90 дней в полугодие. Если вы сомневаетесь, просмотрите вашу визу. В разделе "Duration of stay" указано количество дней, сколько вы можете пребывать в ропе в течение полугода.'
        },
        {
            thumbnail: '/images/visa-usa.png',
            title: 'Мне выдали визу в Америка на три года. Как долго я могу находиться в Европе?',
            description: 'Шенгенская виза - это не срок, сколько вы можете находиться безвыездно на территории Европы. Визы сроком действия более 6 месяцев, как правило, позволяют находиться на территории шенгенской зоны не более 90 дней в полугодие. Если вы сомневаетесь, просмотрите вашу визу. В разделе "Duration of stay" указано количество дней, сколько вы можете пребывать в ропе в течение полугода.'
        },
        {
            thumbnail: '/images/visa-germany.png',
            title: 'Мне выдали визу в Германия на три года. Как долго я могу находиться в Европе?',
            description: 'Шенгенская виза - это не срок, сколько вы можете находиться безвыездно на территории Европы. Визы сроком действия более 6 месяцев, как правило, позволяют находиться на территории шенгенской зоны не более 90 дней в полугодие. Если вы сомневаетесь, просмотрите вашу визу. В разделе "Duration of stay" указано количество дней, сколько вы можете пребывать в ропе в течение полугода.'
        },
    ]
};

export const services = [
    {
        price: '$50+',
        subtitle: '',
        title: 'Канада',
        description: 'Beatae reiciendis necessitatibus dolor saepe.',
        features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
        link: '/services'
    },
]

export const testimonials = {
    title: 'Отзывы клиентов о нашей работе',
    description: 'Нам очень важно ваше мнение о нашей работе! Поделитесь своим опытом о сотрудничестве.<br> Вы всегда можете оставить о нас отзыв удобным для вас способом:',
    list: [
        {
            title: 'Александра С. на ',
            description: 'Сотрудники VCS - Профессионалы с большой буквы. У меня было два отказа при самостоятельных походах в посольство (виза США). Решила попробовать через агенство. Уже по телефону получила ответы на все интересующие вопросы, консультация исчерпывающая. В офисе Варвара заполнила анкету по моим данным, мы обговорили тонкие мест. Запись на собеседование была у меня уже на следующий день. За пару дней до отъезда еще раз встретились, чтобы подготовиться к собеседованию. Собеседование прошло на ура, виза получена. Без нервов и переживаний. Спасибо Варваре и всем сотрудникам агенства. Всегда на связи и готовы ответить на любые вопросы.',
            thumbnail: '/images/yandex.svg',
            rating: '⭐⭐⭐⭐⭐',
            link: 'https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&utm_source=main_stripe_big&z=12'
        },
        {
            title: 'Goryunova Ekaterina на ',
            description: 'Сотрудники VCS - Профессионалы с большой буквы. У меня было два отказа при самостоятельных походах в посольство (виза США). Решила попробовать через агенство. Уже по телефону получила ответы на все интересующие вопросы, консультация исчерпывающая. В офисе Варвара заполнила анкету по моим данным, мы обговорили тонкие мест. Запись на собеседование была у меня уже на следующий день. За пару дней до отъезда еще раз встретились, чтобы подготовиться к собеседованию. Собеседование прошло на ура, виза получена. Без нервов и переживаний. Спасибо Варваре и всем сотрудникам агенства. Всегда на связи и готовы ответить на любые вопросы.',
            thumbnail: 'https://static.tildacdn.com/tild3132-3032-4434-a433-353464616232/google.svg',
            rating: '⭐⭐⭐⭐⭐',
            link: 'https://static.tildacdn.com/tild3132-3032-4434-a433-353464616232/google.svg'
        },
        {
            title: 'Kate на ',
            description: 'Сотрудники VCS - Профессионалы с большой буквы. У меня было два отказа при самостоятельных походах в посольство (виза США). Решила попробовать через агенство. Уже по телефону получила ответы на все интересующие вопросы, консультация исчерпывающая. В офисе Варвара заполнила анкету по моим данным, мы обговорили тонкие мест. Запись на собеседование была у меня уже на следующий день. За пару дней до отъезда еще раз встретились, чтобы подготовиться к собеседованию. Собеседование прошло на ура, виза получена. Без нервов и переживаний. Спасибо Варваре и всем сотрудникам агенства. Всегда на связи и готовы ответить на любые вопросы.',
            thumbnail: '/images/yandex.svg',
            rating: '⭐⭐⭐⭐⭐',
            link: 'https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&utm_source=main_stripe_big&z=12'
        }
    ]
};