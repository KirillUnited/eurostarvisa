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
                    image: '/images/canada_flag.svg',
                    label: 'КАНАДА',
                    name: 'canada_flag',
                    link: '/services'
                },
                {
                    image: '/images/usa_flag.svg',
                    label: 'США',
                    name: 'usa_flag',
                    link: '/services'
                },
                {
                    image: '/images/euro_flag.svg',
                    label: 'ЕВРОПА',
                    name: 'euro_flag',
                    link: '/services'
                },
                {
                    image: '/images/england_flag.svg',
                    label: 'АНГЛИЯ',
                    name: 'england_flag',
                    link: '/services'
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
                    image: '/images/approval-1.png',
                    name: 'approvals'
                },
                {
                    label: 'отказов',
                    value: '7%',
                    image: '/images/approval-2.png',
                    name: 'rejects'
                },
                {
                    label: 'одобрений после отказа',
                    value: '75%',
                    image: '/images/approval-3.png',
                    name: 'rejects_approvals'
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
                    link: '/services'
                },
                {
                    thumbnail: '/images/visa-germany.png',
                    title: 'Германия',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/services'
                },
                {
                    thumbnail: '/images/visa-usa.png',
                    title: 'Америка',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/services'
                },
                {
                    thumbnail: '/images/visa-france.png',
                    title: 'Франция',
                    description: 'От 5 рабочих дней',
                    price: 'от 16 500 ₽',
                    name: '',
                    link: '/services'
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
                    slug: 'blog-post-1',
                    thumbnail: '/images/info-visa.svg',
                    title: 'Изменения в визовом кодексе ЕС',
                    description: 'Время от времени Евросоюз пересматривает правила и условия выдачи шенгенских виз.',
                    name: '',
                    link: '/'
                },
                {
                    slug: 'blog-post-1',
                    thumbnail: '/images/info-stamp.svg',
                    title: 'Правило первого въезда ЕС',
                    description: 'Время от времени Евросоюз пересматривает правила и условия выдачи шенгенских виз.',
                    name: '',
                    link: '/'
                },
                {
                    slug: 'blog-post-1',
                    thumbnail: '/images/info-checklist.svg',
                    title: 'Как заполнить анкету DS-160',
                    description: 'Как корректно внести всю информацию в анкету',
                    name: '',
                    link: '/'
                },
                {
                    slug: 'blog-post-1',
                    thumbnail: '/images/info-docs.svg',
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
            links: [
                {
                    image: '/images/visa-service-2.svg',
                    label: 'Подготовим пакет документов и подадим без Вашего присутствия',
                    name: '',
                    link: ''
                },
                {
                    image: '/images/visa-service-3.svg',
                    label: 'Единая цена вне зависимости от срока действия визы',
                    name: '',
                    link: ''
                },
                {
                    image: '/images/checklist.png',
                    label: 'Максимальный срок визы, за минимальное время',
                    name: '',
                    link: ''
                },
            ],
            type_links: [
                {
                    type: 'tour',
                    label: 'Туристическая виза',
                    name: '',
                    link: '#'
                },
                {
                    type: 'business',
                    label: 'Бизнес виза',
                    name: '',
                    link: '#'
                },
                {
                    type: 'study',
                    label: 'Учебная виза',
                    name: '',
                    link: '#'
                },
            ]
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
                        thumbnail: '/images/docs-passport.svg',
                        title: 'общегражданский паспорт',
                        name: 'docs_passport'
                    },
                    {
                        thumbnail: '/images/docs-passport-travel.svg',
                        title: 'заграничные паспорта за последние 10 лет',
                        name: 'docs_passport_travel'
                    },
                    {
                        thumbnail: '/images/docs-finance.svg',
                        title: 'финансовые справки',
                        name: 'docs_finance'
                    },
                ],
            },
            additional: {
                title: 'Дополнительные документы',
                description: '',
                list: [
                    {
                        thumbnail: '/images/docs-assets.svg',
                        title: 'движимое/недвижимое имущество',
                        name: 'docs_assets'
                    },
                    {
                        thumbnail: '/images/docs-wedding.svg',
                        title: 'свидетельство о регистрации брака и рождении детей',
                        name: 'docs_wedding'
                    },
                    {
                        thumbnail: '/images/docs-file.svg',
                        title: 'документы подтверждающие связь с родиной',
                        name: 'docs_file'
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
                    slug: 'dokumenty-na-vizu-v-kanadu',
                    thumbnail: '/images/service-info-item-1.png',
                    title: 'Документы для визы в Канаду',
                    date: '2023-08-29T10:36:16.845Z',
                    category: 'КАНАДА',
                    content: '<p>31 июля 2018 года посольство Канады ввело обязательную сдачу биометрических данных для получения визы. Сдать отпечатки пальцев можно только в Визовом Центре Канады по адресу: 115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4</p>'
                },
                {
                    slug: 'biometricheskie-dannie',
                    thumbnail: '/images/service-info-item-2.png',
                    title: 'Биометрические данные',
                    date: '2023-08-29T10:36:16.845Z',
                    category: 'КАНАДА',
                    content: '<p>31 июля 2018 года посольство Канады ввело обязательную сдачу биометрических данных для получения визы. Сдать отпечатки пальцев можно только в Визовом Центре Канады по адресу: 115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4</p> <p>31 июля 2018 года посольство Канады ввело обязательную сдачу биометрических данных для получения визы. Сдать отпечатки пальцев можно только в Визовом Центре Канады по адресу: 115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4</p>'
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
        route: '/blog'
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

export const blog = {
    title: 'Наш блог',
    description: 'просто о визах',
    image: 'https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
        {
            slug: 'blog-post-1',            
            category: 'США',
            author: 'Dewayne',
            title: 'За американской визой теперь только в Минск!',
            description: 'Большинство белорусов обращается за американскими визами в Минск. А так ли там хорошо? Разбираемся, куда податься белорусу!',
            thumbnail: '/images/blog-post-image-1.jpg',
            date: '2023-08-29T10:36:16.845Z',
            link: '/blog/',
            content: '<h2>Начнем с того, что предположение "за американской визой только в Минск" - это достаточно распространенное заблуждение.</h2><p>Действительно, в начале 2018 года Посольство США в Минске наконец-то расширило список типов виз, которые белорусы могут получить у себя на Родине. Обратиться за визой теперь стало проще: не нужно ждать несколько месяцев, сбор оплачивается наличными в день интервью, беседовать с офицером можно на русском. На этом список преимуществ обращения в Посольство в Минске заканчивается. Но как быть, если в Америку очень надо, а через Минск обращаться нет желания?</p>'
        },
        {
            slug: 'blog-post-2',            
            category: 'КАНАДА',
            author: 'Tanya',
            title: 'Regional Division Strategist',
            description: 'Blanditiis nostrum quidem corrupti necessitatibus enim et in aut. Repellat amet necessitatibus minima ad deleniti et sed. Quo at perferendis maxime et voluptatem expedita sunt. Dolorem deleniti quis cumque quibusdam.',
            thumbnail: 'https://plus.unsplash.com/premium_photo-1673241100156-2e04fca1a4af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: 'Mon Dec 18 2023 22:12:09 GMT+0300 (Arabian Standard Time)',
            link: '/blog/',
            content: '<h2>Regional Division Strategist</h2><p>Nulla dolorem nobis. Dolorem quam dolores consequuntur omnis vel. Facere qui cupiditate non est voluptatibus omnis et totam. Quaerat mollitia inventore ut necessitatibus quos consequatur dolores dolor.</p><p>Occaecati quaerat consequatur alias perferendis aut ut. Est enim eaque fugit aut nemo iure ratione. Id officia rerum architecto quasi est eum vitae. Numquam deserunt cumque blanditiis cupiditate delectus quis sint deserunt.</p>'
        },
        {
            slug: 'blog-post-3',            
            category: 'ЕВРОПА',
            author: 'Elisabeth',
            title: 'Chief Integration Liaison',
            description: 'Quo nisi deleniti et non. Officiis laborum at eum voluptatem blanditiis distinctio explicabo.',
            thumbnail: 'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: 'Mon Feb 12 2024 02:57:35 GMT+0300 (Arabian Standard Time)',
            link: '/blog/',
            content: '<h2>Chief Integration Liaison</h2><p>Voluptate impedit a quia aut. Delectus fuga provident mollitia aut iusto aut at. Similique repudiandae iste aut voluptates enim harum. Aut saepe perferendis voluptas. Labore beatae maiores dolorem in sapiente aut voluptatem aliquid.</p><p>Ut officiis explicabo omnis vero. Cumque adipisci nihil tenetur. Corrupti iure labore fugit omnis deserunt ea nulla voluptates modi. Atque ut illo veniam repellendus facere sunt. Quae ut neque soluta fugiat ut. Sit sit dolor est corrupti eius ducimus.</p><p>Est magni beatae omnis molestiae ullam dolor est libero quisquam. Et provident veritatis aperiam fuga et exercitationem nulla consequatur consectetur. Quia est officia deserunt sed neque. Nisi incidunt est consequatur sit. Neque eos illum.</p>'
        },
        {
            slug: 'blog-post-4',            
            category: 'АНГЛИЯ',
            author: 'Stanford',
            title: 'Lead Interactions Supervisor',
            description: 'Quae et provident dolor libero aliquam. Laboriosam asperiores voluptatem. Voluptatum aliquid architecto velit nisi unde. Impedit sit voluptates vel.',
            thumbnail: 'https://plus.unsplash.com/premium_photo-1673240845247-5d694500ddf8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: 'Sat Aug 05 2023 04:29:32 GMT+0300 (Arabian Standard Time)',
            link: '/blog/',
            content: '<h2>Chief Integration Liaison</h2><p>Minus eum neque repudiandae est quis omnis et. Error recusandae dicta illo et sequi delectus delectus nihil. Ad amet deleniti vitae aperiam dolor deleniti repellat omnis.</p>'
        },
    ]
}