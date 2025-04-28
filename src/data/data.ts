import {IEventRegistryResponse} from './types';

// https://eventregistry.org/api/v1/event/getEvents?apiKey=0a0d3806-0582-49d5-b7bd-95b7fee77ea2&dateStart=1985-01-01&dateEnd=2025-12-31&lang=rus

// export const dataDepr: IEventRegistryResponse = {
//     "events": {
//         "results": [
//             {
//                 "id": "862148",
//                 "uri": "literature-1992-booker",
//                 "title": "Вручение Букеровской премии 1992 года",
//                 "summary": "Марк Харитонов стал первым русским писателем, получившим Букеровскую премию за роман 'Линия судьбы, или Сундучок Милашевича'",
//                 "eventDate": "1992-12-05",
//                 "location": {"label": "Москва, Россия"},
//                 "articles": [
//                     {
//                         "url": "https://example.com/culture/booker-1992",
//                         "source": "Литературное обозрение",
//                         "lang": "rus"
//                     }
//                 ]
//             },
//             {
//                 "id": "968743",
//                 "uri": "literature-1994-fair",
//                 "title": "Московская международная книжная выставка-ярмарка",
//                 "summary": "Крупнейшее книжное событие года с участием международных издательств",
//                 "eventDate": "1994-09-03",
//                 "location": {"label": "Москва, Россия"},
//                 "articles": [
//                     {
//                         "url": "https://example.com/news/bookfair-1994",
//                         "source": "Культурная хроника",
//                         "lang": "rus"
//                     }
//                 ]
//             },
//             {
//                 "id": "123456",
//                 "uri": "literature-1994-nobel",
//                 "title": "Кэнзабуро Оэ получил Нобелевскую премию по литературе",
//                 "summary": "Японский писатель Кэнзабуро Оэ удостоен Нобелевской премии 1994 года",
//                 "eventDate": "1994-10-13",
//                 "location": {
//                     "label": "Стокгольм, Швеция",
//                     "wikipediaUri": "https://ru.wikipedia.org/wiki/Стокгольм"
//                 },
//                 "articles": [
//                     {
//                         "url": "https://example.com/news/nobel-1994",
//                         "source": "Литературная газета",
//                         "lang": "rus"
//                     }
//                 ]
//             },
//             {
//                 "id": "789012",
//                 "uri": "literature-1995-bookfair",
//                 "title": "Московская международная книжная ярмарка 1995",
//                 "summary": "В Москве прошла крупнейшая книжная выставка с участием 500 издательств",
//                 "eventDate": "1995-09-05",
//                 "location": {
//                     "label": "Москва, Россия",
//                     "wikipediaUri": "https://ru.wikipedia.org/wiki/Москва"
//                 },
//                 "articles": [
//                     {
//                         "url": "https://example.com/culture/bookfair-1995",
//                         "source": "Культура",
//                         "lang": "rus"
//                     }
//                 ]
//             },
//             {
//                 "id": "854328",
//                 "uri": "literature-1996-pelevin",
//                 "title": "Выход романа 'Чапаев и Пустота' Виктора Пелевина",
//                 "summary": "Публикация культового романа, ставшего важным явлением в русской литературе 1990-х",
//                 "eventDate": "1996-04-12",
//                 "articles": [
//                     {
//                         "url": "https://example.com/books/pelevin-1996",
//                         "source": "Книжное обозрение",
//                         "lang": "rus"
//                     }
//                 ]
//             },
//         ],
//         "total": 5
//     }
// };

export const data: IEventRegistryResponse = {
    events: {
        results: [
            {
                id: '100000',
                uri: 'literature-1988-4l08h1',
                title: 'Литературное событие 1988 года',
                summary: 'Знаменательное событие в литературе в 1988 году',
                eventDate: '1988-06-27',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/1988',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100001',
                uri: 'science-1988-dm5gl0',
                title: 'Научное открытие 1988 года',
                summary: 'Важное научное достижение в 1988 году',
                eventDate: '1988-06-21',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/1988',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100002',
                uri: 'cinema-1988-vgewu8',
                title: 'Кинофестиваль 1988 года',
                summary: 'Крупное событие в мире кино в 1988 году',
                eventDate: '1988-09-17',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1988',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100003',
                uri: 'theatre-1988-axatmi',
                title: 'Театральная премьера 1988 года',
                summary: 'Заметная театральная постановка 1988 года',
                eventDate: '1988-11-28',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1988',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100004',
                uri: 'politics-1988-9vdvek',
                title: 'Политическое событие 1988 года',
                summary: 'Политическое событие международного значения в 1988 году',
                eventDate: '1988-12-14',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/1988',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100005',
                uri: 'fashion-1988-vgaqna',
                title: 'Показ мод 1988 года',
                summary: 'Главное событие в мире моды в 1988 году',
                eventDate: '1988-10-02',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1988',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100006',
                uri: 'literature-1989-k1mof5',
                title: 'Литературное событие 1989 года',
                summary: 'Знаменательное событие в литературе в 1989 году',
                eventDate: '1989-04-04',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/1989',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100007',
                uri: 'science-1989-hszafq',
                title: 'Научное открытие 1989 года',
                summary: 'Важное научное достижение в 1989 году',
                eventDate: '1989-02-06',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/1989',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100008',
                uri: 'cinema-1989-h7lkn8',
                title: 'Кинофестиваль 1989 года',
                summary: 'Крупное событие в мире кино в 1989 году',
                eventDate: '1989-07-08',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1989',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100009',
                uri: 'theatre-1989-ardq69',
                title: 'Театральная премьера 1989 года',
                summary: 'Заметная театральная постановка 1989 года',
                eventDate: '1989-06-17',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1989',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100010',
                uri: 'politics-1989-djt0hs',
                title: 'Политическое событие 1989 года',
                summary: 'Политическое событие международного значения в 1989 году',
                eventDate: '1989-08-20',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/1989',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100011',
                uri: 'fashion-1989-i6whc7',
                title: 'Показ мод 1989 года',
                summary: 'Главное событие в мире моды в 1989 году',
                eventDate: '1989-07-23',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1989',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100012',
                uri: 'literature-1990-smo3gk',
                title: 'Литературное событие 1990 года',
                summary: 'Знаменательное событие в литературе в 1990 году',
                eventDate: '1990-05-24',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/literature/1990',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100013',
                uri: 'science-1990-1wv4jw',
                title: 'Научное открытие 1990 года',
                summary: 'Важное научное достижение в 1990 году',
                eventDate: '1990-08-03',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/1990',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100014',
                uri: 'cinema-1990-8gotjb',
                title: 'Кинофестиваль 1990 года',
                summary: 'Крупное событие в мире кино в 1990 году',
                eventDate: '1990-01-23',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1990',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100015',
                uri: 'theatre-1990-5nebta',
                title: 'Театральная премьера 1990 года',
                summary: 'Заметная театральная постановка 1990 года',
                eventDate: '1990-09-14',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1990',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100016',
                uri: 'politics-1990-f3133w',
                title: 'Политическое событие 1990 года',
                summary: 'Политическое событие международного значения в 1990 году',
                eventDate: '1990-07-07',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/1990',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100017',
                uri: 'fashion-1990-l1sysh',
                title: 'Показ мод 1990 года',
                summary: 'Главное событие в мире моды в 1990 году',
                eventDate: '1990-08-22',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1990',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100018',
                uri: 'literature-1991-xqsb8p',
                title: 'Литературное событие 1991 года',
                summary: 'Знаменательное событие в литературе в 1991 году',
                eventDate: '1991-05-25',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/1991',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100019',
                uri: 'science-1991-s0ste0',
                title: 'Научное открытие 1991 года',
                summary: 'Важное научное достижение в 1991 году',
                eventDate: '1991-09-20',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/1991',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100020',
                uri: 'cinema-1991-7w78fy',
                title: 'Кинофестиваль 1991 года',
                summary: 'Крупное событие в мире кино в 1991 году',
                eventDate: '1991-11-13',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1991',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100021',
                uri: 'theatre-1991-527dmq',
                title: 'Театральная премьера 1991 года',
                summary: 'Заметная театральная постановка 1991 года',
                eventDate: '1991-05-07',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1991',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100022',
                uri: 'politics-1991-gtm8ed',
                title: 'Политическое событие 1991 года',
                summary: 'Политическое событие международного значения в 1991 году',
                eventDate: '1991-12-15',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/politics/1991',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100023',
                uri: 'fashion-1991-xwckg6',
                title: 'Показ мод 1991 года',
                summary: 'Главное событие в мире моды в 1991 году',
                eventDate: '1991-07-18',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1991',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100024',
                uri: 'literature-1992-a7yn4v',
                title: 'Литературное событие 1992 года',
                summary: 'Знаменательное событие в литературе в 1992 году',
                eventDate: '1992-10-15',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/1992',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100025',
                uri: 'science-1992-lvct66',
                title: 'Научное открытие 1992 года',
                summary: 'Важное научное достижение в 1992 году',
                eventDate: '1992-01-14',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/1992',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100026',
                uri: 'cinema-1992-znbdbr',
                title: 'Кинофестиваль 1992 года',
                summary: 'Крупное событие в мире кино в 1992 году',
                eventDate: '1992-01-03',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1992',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100027',
                uri: 'theatre-1992-clghba',
                title: 'Театральная премьера 1992 года',
                summary: 'Заметная театральная постановка 1992 года',
                eventDate: '1992-03-05',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1992',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100028',
                uri: 'politics-1992-vw9gv1',
                title: 'Политическое событие 1992 года',
                summary: 'Политическое событие международного значения в 1992 году',
                eventDate: '1992-08-04',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/1992',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100029',
                uri: 'fashion-1992-3no3dz',
                title: 'Показ мод 1992 года',
                summary: 'Главное событие в мире моды в 1992 году',
                eventDate: '1992-05-27',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1992',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100030',
                uri: 'literature-1993-7e45fl',
                title: 'Литературное событие 1993 года',
                summary: 'Знаменательное событие в литературе в 1993 году',
                eventDate: '1993-08-16',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/1993',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100031',
                uri: 'science-1993-pflgmo',
                title: 'Научное открытие 1993 года',
                summary: 'Важное научное достижение в 1993 году',
                eventDate: '1993-10-18',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/1993',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100032',
                uri: 'cinema-1993-nt7m2p',
                title: 'Кинофестиваль 1993 года',
                summary: 'Крупное событие в мире кино в 1993 году',
                eventDate: '1993-04-09',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1993',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100033',
                uri: 'theatre-1993-pkjfgk',
                title: 'Театральная премьера 1993 года',
                summary: 'Заметная театральная постановка 1993 года',
                eventDate: '1993-04-27',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1993',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100034',
                uri: 'politics-1993-48uq1o',
                title: 'Политическое событие 1993 года',
                summary: 'Политическое событие международного значения в 1993 году',
                eventDate: '1993-03-07',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/politics/1993',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100035',
                uri: 'fashion-1993-a64eoq',
                title: 'Показ мод 1993 года',
                summary: 'Главное событие в мире моды в 1993 году',
                eventDate: '1993-04-22',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1993',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100036',
                uri: 'literature-1994-mnpoea',
                title: 'Литературное событие 1994 года',
                summary: 'Знаменательное событие в литературе в 1994 году',
                eventDate: '1994-04-17',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/1994',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100037',
                uri: 'science-1994-ilrq4r',
                title: 'Научное открытие 1994 года',
                summary: 'Важное научное достижение в 1994 году',
                eventDate: '1994-04-14',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/1994',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100038',
                uri: 'cinema-1994-qsrboc',
                title: 'Кинофестиваль 1994 года',
                summary: 'Крупное событие в мире кино в 1994 году',
                eventDate: '1994-10-07',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1994',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100039',
                uri: 'theatre-1994-jztmel',
                title: 'Театральная премьера 1994 года',
                summary: 'Заметная театральная постановка 1994 года',
                eventDate: '1994-04-04',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1994',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100040',
                uri: 'politics-1994-oss6va',
                title: 'Политическое событие 1994 года',
                summary: 'Политическое событие международного значения в 1994 году',
                eventDate: '1994-10-20',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/1994',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100041',
                uri: 'fashion-1994-ab2r87',
                title: 'Показ мод 1994 года',
                summary: 'Главное событие в мире моды в 1994 году',
                eventDate: '1994-10-01',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1994',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100042',
                uri: 'literature-1995-rmucla',
                title: 'Литературное событие 1995 года',
                summary: 'Знаменательное событие в литературе в 1995 году',
                eventDate: '1995-04-09',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/1995',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100043',
                uri: 'science-1995-1t7usu',
                title: 'Научное открытие 1995 года',
                summary: 'Важное научное достижение в 1995 году',
                eventDate: '1995-05-17',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/1995',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100044',
                uri: 'cinema-1995-48dv8q',
                title: 'Кинофестиваль 1995 года',
                summary: 'Крупное событие в мире кино в 1995 году',
                eventDate: '1995-07-22',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1995',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100045',
                uri: 'theatre-1995-el2oit',
                title: 'Театральная премьера 1995 года',
                summary: 'Заметная театральная постановка 1995 года',
                eventDate: '1995-05-02',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1995',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100046',
                uri: 'politics-1995-ztd3vf',
                title: 'Политическое событие 1995 года',
                summary: 'Политическое событие международного значения в 1995 году',
                eventDate: '1995-12-08',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/politics/1995',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100047',
                uri: 'fashion-1995-7ovoo8',
                title: 'Показ мод 1995 года',
                summary: 'Главное событие в мире моды в 1995 году',
                eventDate: '1995-09-01',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1995',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100048',
                uri: 'literature-1996-ept95m',
                title: 'Литературное событие 1996 года',
                summary: 'Знаменательное событие в литературе в 1996 году',
                eventDate: '1996-04-22',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/1996',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100049',
                uri: 'science-1996-ipx1ne',
                title: 'Научное открытие 1996 года',
                summary: 'Важное научное достижение в 1996 году',
                eventDate: '1996-01-23',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/1996',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100050',
                uri: 'cinema-1996-vfmeud',
                title: 'Кинофестиваль 1996 года',
                summary: 'Крупное событие в мире кино в 1996 году',
                eventDate: '1996-05-26',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1996',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100051',
                uri: 'theatre-1996-8ooh4f',
                title: 'Театральная премьера 1996 года',
                summary: 'Заметная театральная постановка 1996 года',
                eventDate: '1996-04-10',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1996',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100052',
                uri: 'politics-1996-34s1dm',
                title: 'Политическое событие 1996 года',
                summary: 'Политическое событие международного значения в 1996 году',
                eventDate: '1996-10-16',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/1996',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100053',
                uri: 'fashion-1996-ptcj9h',
                title: 'Показ мод 1996 года',
                summary: 'Главное событие в мире моды в 1996 году',
                eventDate: '1996-01-17',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1996',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100054',
                uri: 'literature-1997-tcgpno',
                title: 'Литературное событие 1997 года',
                summary: 'Знаменательное событие в литературе в 1997 году',
                eventDate: '1997-01-22',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/literature/1997',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100055',
                uri: 'science-1997-42i079',
                title: 'Научное открытие 1997 года',
                summary: 'Важное научное достижение в 1997 году',
                eventDate: '1997-09-21',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/1997',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100056',
                uri: 'cinema-1997-8ykue9',
                title: 'Кинофестиваль 1997 года',
                summary: 'Крупное событие в мире кино в 1997 году',
                eventDate: '1997-02-04',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1997',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100057',
                uri: 'theatre-1997-bzqsy0',
                title: 'Театральная премьера 1997 года',
                summary: 'Заметная театральная постановка 1997 года',
                eventDate: '1997-11-20',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1997',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100058',
                uri: 'politics-1997-2dw56f',
                title: 'Политическое событие 1997 года',
                summary: 'Политическое событие международного значения в 1997 году',
                eventDate: '1997-05-20',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/1997',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100059',
                uri: 'fashion-1997-onmjhe',
                title: 'Показ мод 1997 года',
                summary: 'Главное событие в мире моды в 1997 году',
                eventDate: '1997-04-18',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1997',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100060',
                uri: 'literature-1998-z0ng1u',
                title: 'Литературное событие 1998 года',
                summary: 'Знаменательное событие в литературе в 1998 году',
                eventDate: '1998-10-10',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/literature/1998',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100061',
                uri: 'science-1998-ivh93u',
                title: 'Научное открытие 1998 года',
                summary: 'Важное научное достижение в 1998 году',
                eventDate: '1998-03-01',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/1998',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100062',
                uri: 'cinema-1998-iwb9kl',
                title: 'Кинофестиваль 1998 года',
                summary: 'Крупное событие в мире кино в 1998 году',
                eventDate: '1998-06-18',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1998',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100063',
                uri: 'theatre-1998-fxetym',
                title: 'Театральная премьера 1998 года',
                summary: 'Заметная театральная постановка 1998 года',
                eventDate: '1998-09-25',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1998',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100064',
                uri: 'politics-1998-wf7d8r',
                title: 'Политическое событие 1998 года',
                summary: 'Политическое событие международного значения в 1998 году',
                eventDate: '1998-03-20',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/1998',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100065',
                uri: 'fashion-1998-jm3mck',
                title: 'Показ мод 1998 года',
                summary: 'Главное событие в мире моды в 1998 году',
                eventDate: '1998-10-09',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1998',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100066',
                uri: 'literature-1999-6unv2s',
                title: 'Литературное событие 1999 года',
                summary: 'Знаменательное событие в литературе в 1999 году',
                eventDate: '1999-12-13',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/literature/1999',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100067',
                uri: 'science-1999-vy3vv2',
                title: 'Научное открытие 1999 года',
                summary: 'Важное научное достижение в 1999 году',
                eventDate: '1999-12-23',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/1999',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100068',
                uri: 'cinema-1999-o0a41v',
                title: 'Кинофестиваль 1999 года',
                summary: 'Крупное событие в мире кино в 1999 году',
                eventDate: '1999-06-15',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/1999',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100069',
                uri: 'theatre-1999-15vf2l',
                title: 'Театральная премьера 1999 года',
                summary: 'Заметная театральная постановка 1999 года',
                eventDate: '1999-01-21',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/1999',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100070',
                uri: 'politics-1999-izaq5j',
                title: 'Политическое событие 1999 года',
                summary: 'Политическое событие международного значения в 1999 году',
                eventDate: '1999-05-16',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/1999',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100071',
                uri: 'fashion-1999-qshru4',
                title: 'Показ мод 1999 года',
                summary: 'Главное событие в мире моды в 1999 году',
                eventDate: '1999-02-03',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/1999',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100072',
                uri: 'literature-2000-w75wpz',
                title: 'Литературное событие 2000 года',
                summary: 'Знаменательное событие в литературе в 2000 году',
                eventDate: '2000-03-17',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2000',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100073',
                uri: 'science-2000-xmnbvc',
                title: 'Научное открытие 2000 года',
                summary: 'Важное научное достижение в 2000 году',
                eventDate: '2000-09-14',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/science/2000',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100074',
                uri: 'cinema-2000-2p00xd',
                title: 'Кинофестиваль 2000 года',
                summary: 'Крупное событие в мире кино в 2000 году',
                eventDate: '2000-06-02',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2000',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100075',
                uri: 'theatre-2000-w672df',
                title: 'Театральная премьера 2000 года',
                summary: 'Заметная театральная постановка 2000 года',
                eventDate: '2000-08-16',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2000',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100076',
                uri: 'politics-2000-p4exqv',
                title: 'Политическое событие 2000 года',
                summary: 'Политическое событие международного значения в 2000 году',
                eventDate: '2000-11-08',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2000',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100077',
                uri: 'fashion-2000-n12x5j',
                title: 'Показ мод 2000 года',
                summary: 'Главное событие в мире моды в 2000 году',
                eventDate: '2000-02-19',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2000',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100078',
                uri: 'literature-2001-p0vatr',
                title: 'Литературное событие 2001 года',
                summary: 'Знаменательное событие в литературе в 2001 году',
                eventDate: '2001-07-26',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2001',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100079',
                uri: 'science-2001-uzpwny',
                title: 'Научное открытие 2001 года',
                summary: 'Важное научное достижение в 2001 году',
                eventDate: '2001-08-22',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/2001',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100080',
                uri: 'cinema-2001-vk6cmk',
                title: 'Кинофестиваль 2001 года',
                summary: 'Крупное событие в мире кино в 2001 году',
                eventDate: '2001-03-08',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2001',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100081',
                uri: 'theatre-2001-7x5ack',
                title: 'Театральная премьера 2001 года',
                summary: 'Заметная театральная постановка 2001 года',
                eventDate: '2001-05-19',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2001',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100082',
                uri: 'politics-2001-8yaufj',
                title: 'Политическое событие 2001 года',
                summary: 'Политическое событие международного значения в 2001 году',
                eventDate: '2001-11-09',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2001',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100083',
                uri: 'fashion-2001-7r5rzu',
                title: 'Показ мод 2001 года',
                summary: 'Главное событие в мире моды в 2001 году',
                eventDate: '2001-11-15',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2001',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100084',
                uri: 'literature-2002-bx2sqw',
                title: 'Литературное событие 2002 года',
                summary: 'Знаменательное событие в литературе в 2002 году',
                eventDate: '2002-12-09',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2002',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100085',
                uri: 'science-2002-jt9p3s',
                title: 'Научное открытие 2002 года',
                summary: 'Важное научное достижение в 2002 году',
                eventDate: '2002-08-18',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2002',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100086',
                uri: 'cinema-2002-t7sjtw',
                title: 'Кинофестиваль 2002 года',
                summary: 'Крупное событие в мире кино в 2002 году',
                eventDate: '2002-05-17',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2002',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100087',
                uri: 'theatre-2002-fk53p9',
                title: 'Театральная премьера 2002 года',
                summary: 'Заметная театральная постановка 2002 года',
                eventDate: '2002-09-18',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2002',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100088',
                uri: 'politics-2002-g6gauw',
                title: 'Политическое событие 2002 года',
                summary: 'Политическое событие международного значения в 2002 году',
                eventDate: '2002-06-08',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/politics/2002',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100089',
                uri: 'fashion-2002-4rrv5z',
                title: 'Показ мод 2002 года',
                summary: 'Главное событие в мире моды в 2002 году',
                eventDate: '2002-04-14',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2002',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100090',
                uri: 'literature-2003-26fbg8',
                title: 'Литературное событие 2003 года',
                summary: 'Знаменательное событие в литературе в 2003 году',
                eventDate: '2003-01-27',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/literature/2003',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100091',
                uri: 'science-2003-9i3bfq',
                title: 'Научное открытие 2003 года',
                summary: 'Важное научное достижение в 2003 году',
                eventDate: '2003-12-25',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2003',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100092',
                uri: 'cinema-2003-6cnu2b',
                title: 'Кинофестиваль 2003 года',
                summary: 'Крупное событие в мире кино в 2003 году',
                eventDate: '2003-11-24',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2003',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100093',
                uri: 'theatre-2003-uik8un',
                title: 'Театральная премьера 2003 года',
                summary: 'Заметная театральная постановка 2003 года',
                eventDate: '2003-06-24',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2003',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100094',
                uri: 'politics-2003-nms3fy',
                title: 'Политическое событие 2003 года',
                summary: 'Политическое событие международного значения в 2003 году',
                eventDate: '2003-08-01',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2003',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100095',
                uri: 'fashion-2003-hp2ix2',
                title: 'Показ мод 2003 года',
                summary: 'Главное событие в мире моды в 2003 году',
                eventDate: '2003-04-01',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2003',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100096',
                uri: 'literature-2004-og6moh',
                title: 'Литературное событие 2004 года',
                summary: 'Знаменательное событие в литературе в 2004 году',
                eventDate: '2004-03-11',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/literature/2004',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100097',
                uri: 'science-2004-hahu10',
                title: 'Научное открытие 2004 года',
                summary: 'Важное научное достижение в 2004 году',
                eventDate: '2004-03-11',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/2004',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100098',
                uri: 'cinema-2004-ttsuv6',
                title: 'Кинофестиваль 2004 года',
                summary: 'Крупное событие в мире кино в 2004 году',
                eventDate: '2004-05-13',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2004',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100099',
                uri: 'theatre-2004-lcodzb',
                title: 'Театральная премьера 2004 года',
                summary: 'Заметная театральная постановка 2004 года',
                eventDate: '2004-07-18',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2004',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100100',
                uri: 'politics-2004-7afyoi',
                title: 'Политическое событие 2004 года',
                summary: 'Политическое событие международного значения в 2004 году',
                eventDate: '2004-01-08',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2004',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100101',
                uri: 'fashion-2004-qqztsd',
                title: 'Показ мод 2004 года',
                summary: 'Главное событие в мире моды в 2004 году',
                eventDate: '2004-08-04',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2004',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100102',
                uri: 'literature-2005-hmsby3',
                title: 'Литературное событие 2005 года',
                summary: 'Знаменательное событие в литературе в 2005 году',
                eventDate: '2005-01-09',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2005',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100103',
                uri: 'science-2005-hzka1o',
                title: 'Научное открытие 2005 года',
                summary: 'Важное научное достижение в 2005 году',
                eventDate: '2005-08-26',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2005',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100104',
                uri: 'cinema-2005-hg6hiv',
                title: 'Кинофестиваль 2005 года',
                summary: 'Крупное событие в мире кино в 2005 году',
                eventDate: '2005-06-24',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2005',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100105',
                uri: 'theatre-2005-jnjjin',
                title: 'Театральная премьера 2005 года',
                summary: 'Заметная театральная постановка 2005 года',
                eventDate: '2005-01-16',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2005',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100106',
                uri: 'politics-2005-kpjkjb',
                title: 'Политическое событие 2005 года',
                summary: 'Политическое событие международного значения в 2005 году',
                eventDate: '2005-11-26',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2005',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100107',
                uri: 'fashion-2005-ziuxpr',
                title: 'Показ мод 2005 года',
                summary: 'Главное событие в мире моды в 2005 году',
                eventDate: '2005-02-06',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2005',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100108',
                uri: 'literature-2006-dhb8hx',
                title: 'Литературное событие 2006 года',
                summary: 'Знаменательное событие в литературе в 2006 году',
                eventDate: '2006-02-23',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2006',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100109',
                uri: 'science-2006-ic18iy',
                title: 'Научное открытие 2006 года',
                summary: 'Важное научное достижение в 2006 году',
                eventDate: '2006-02-06',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2006',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100110',
                uri: 'cinema-2006-98ddx6',
                title: 'Кинофестиваль 2006 года',
                summary: 'Крупное событие в мире кино в 2006 году',
                eventDate: '2006-12-19',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2006',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100111',
                uri: 'theatre-2006-jbvvet',
                title: 'Театральная премьера 2006 года',
                summary: 'Заметная театральная постановка 2006 года',
                eventDate: '2006-10-24',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2006',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100112',
                uri: 'politics-2006-1c26a7',
                title: 'Политическое событие 2006 года',
                summary: 'Политическое событие международного значения в 2006 году',
                eventDate: '2006-07-12',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/politics/2006',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100113',
                uri: 'fashion-2006-0ogcqx',
                title: 'Показ мод 2006 года',
                summary: 'Главное событие в мире моды в 2006 году',
                eventDate: '2006-03-04',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2006',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100114',
                uri: 'literature-2007-lqbbl9',
                title: 'Литературное событие 2007 года',
                summary: 'Знаменательное событие в литературе в 2007 году',
                eventDate: '2007-11-24',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/literature/2007',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100115',
                uri: 'science-2007-vbpztr',
                title: 'Научное открытие 2007 года',
                summary: 'Важное научное достижение в 2007 году',
                eventDate: '2007-10-09',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2007',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100116',
                uri: 'cinema-2007-lu7mdd',
                title: 'Кинофестиваль 2007 года',
                summary: 'Крупное событие в мире кино в 2007 году',
                eventDate: '2007-05-19',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2007',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100117',
                uri: 'theatre-2007-yxclqx',
                title: 'Театральная премьера 2007 года',
                summary: 'Заметная театральная постановка 2007 года',
                eventDate: '2007-02-24',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2007',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100118',
                uri: 'politics-2007-n8i6qp',
                title: 'Политическое событие 2007 года',
                summary: 'Политическое событие международного значения в 2007 году',
                eventDate: '2007-02-08',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2007',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100119',
                uri: 'fashion-2007-cl4umf',
                title: 'Показ мод 2007 года',
                summary: 'Главное событие в мире моды в 2007 году',
                eventDate: '2007-07-26',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2007',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100120',
                uri: 'literature-2008-60kydi',
                title: 'Литературное событие 2008 года',
                summary: 'Знаменательное событие в литературе в 2008 году',
                eventDate: '2008-05-07',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/2008',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100121',
                uri: 'science-2008-d09rbh',
                title: 'Научное открытие 2008 года',
                summary: 'Важное научное достижение в 2008 году',
                eventDate: '2008-02-09',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2008',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100122',
                uri: 'cinema-2008-qg1l49',
                title: 'Кинофестиваль 2008 года',
                summary: 'Крупное событие в мире кино в 2008 году',
                eventDate: '2008-10-08',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2008',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100123',
                uri: 'theatre-2008-v7za87',
                title: 'Театральная премьера 2008 года',
                summary: 'Заметная театральная постановка 2008 года',
                eventDate: '2008-09-08',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2008',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100124',
                uri: 'politics-2008-hjp4eo',
                title: 'Политическое событие 2008 года',
                summary: 'Политическое событие международного значения в 2008 году',
                eventDate: '2008-07-13',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2008',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100125',
                uri: 'fashion-2008-ativuq',
                title: 'Показ мод 2008 года',
                summary: 'Главное событие в мире моды в 2008 году',
                eventDate: '2008-10-02',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2008',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100126',
                uri: 'literature-2009-5ja5az',
                title: 'Литературное событие 2009 года',
                summary: 'Знаменательное событие в литературе в 2009 году',
                eventDate: '2009-01-01',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/literature/2009',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100127',
                uri: 'science-2009-syod07',
                title: 'Научное открытие 2009 года',
                summary: 'Важное научное достижение в 2009 году',
                eventDate: '2009-10-01',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/2009',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100128',
                uri: 'cinema-2009-xwu2kb',
                title: 'Кинофестиваль 2009 года',
                summary: 'Крупное событие в мире кино в 2009 году',
                eventDate: '2009-10-02',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2009',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100129',
                uri: 'theatre-2009-pmxqhe',
                title: 'Театральная премьера 2009 года',
                summary: 'Заметная театральная постановка 2009 года',
                eventDate: '2009-03-24',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2009',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100130',
                uri: 'politics-2009-15u0vb',
                title: 'Политическое событие 2009 года',
                summary: 'Политическое событие международного значения в 2009 году',
                eventDate: '2009-03-05',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2009',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100131',
                uri: 'fashion-2009-uj7zgs',
                title: 'Показ мод 2009 года',
                summary: 'Главное событие в мире моды в 2009 году',
                eventDate: '2009-02-17',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2009',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100132',
                uri: 'literature-2010-njm5uh',
                title: 'Литературное событие 2010 года',
                summary: 'Знаменательное событие в литературе в 2010 году',
                eventDate: '2010-05-11',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2010',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100133',
                uri: 'science-2010-zympmj',
                title: 'Научное открытие 2010 года',
                summary: 'Важное научное достижение в 2010 году',
                eventDate: '2010-12-28',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/2010',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100134',
                uri: 'cinema-2010-5qbqkn',
                title: 'Кинофестиваль 2010 года',
                summary: 'Крупное событие в мире кино в 2010 году',
                eventDate: '2010-08-13',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2010',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100135',
                uri: 'theatre-2010-uotzj3',
                title: 'Театральная премьера 2010 года',
                summary: 'Заметная театральная постановка 2010 года',
                eventDate: '2010-12-05',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2010',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100136',
                uri: 'politics-2010-0r0gkf',
                title: 'Политическое событие 2010 года',
                summary: 'Политическое событие международного значения в 2010 году',
                eventDate: '2010-10-08',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/politics/2010',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100137',
                uri: 'fashion-2010-4t8fwj',
                title: 'Показ мод 2010 года',
                summary: 'Главное событие в мире моды в 2010 году',
                eventDate: '2010-02-15',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2010',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100138',
                uri: 'literature-2011-2sz1dd',
                title: 'Литературное событие 2011 года',
                summary: 'Знаменательное событие в литературе в 2011 году',
                eventDate: '2011-11-03',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2011',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100139',
                uri: 'science-2011-cmyn0z',
                title: 'Научное открытие 2011 года',
                summary: 'Важное научное достижение в 2011 году',
                eventDate: '2011-11-04',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2011',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100140',
                uri: 'cinema-2011-xgx9b7',
                title: 'Кинофестиваль 2011 года',
                summary: 'Крупное событие в мире кино в 2011 году',
                eventDate: '2011-03-24',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2011',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100141',
                uri: 'theatre-2011-pyw06d',
                title: 'Театральная премьера 2011 года',
                summary: 'Заметная театральная постановка 2011 года',
                eventDate: '2011-11-20',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2011',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100142',
                uri: 'politics-2011-bmev0f',
                title: 'Политическое событие 2011 года',
                summary: 'Политическое событие международного значения в 2011 году',
                eventDate: '2011-11-25',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2011',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100143',
                uri: 'fashion-2011-l9zx37',
                title: 'Показ мод 2011 года',
                summary: 'Главное событие в мире моды в 2011 году',
                eventDate: '2011-02-22',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2011',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100144',
                uri: 'literature-2012-2a9hqe',
                title: 'Литературное событие 2012 года',
                summary: 'Знаменательное событие в литературе в 2012 году',
                eventDate: '2012-04-18',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2012',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100145',
                uri: 'science-2012-ckcg6t',
                title: 'Научное открытие 2012 года',
                summary: 'Важное научное достижение в 2012 году',
                eventDate: '2012-03-19',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2012',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100146',
                uri: 'cinema-2012-zd0o99',
                title: 'Кинофестиваль 2012 года',
                summary: 'Крупное событие в мире кино в 2012 году',
                eventDate: '2012-12-28',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2012',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100147',
                uri: 'theatre-2012-gnq8pj',
                title: 'Театральная премьера 2012 года',
                summary: 'Заметная театральная постановка 2012 года',
                eventDate: '2012-12-21',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2012',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100148',
                uri: 'politics-2012-8x53na',
                title: 'Политическое событие 2012 года',
                summary: 'Политическое событие международного значения в 2012 году',
                eventDate: '2012-09-18',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2012',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100149',
                uri: 'fashion-2012-kt1ony',
                title: 'Показ мод 2012 года',
                summary: 'Главное событие в мире моды в 2012 году',
                eventDate: '2012-11-23',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2012',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100150',
                uri: 'literature-2013-a9qub4',
                title: 'Литературное событие 2013 года',
                summary: 'Знаменательное событие в литературе в 2013 году',
                eventDate: '2013-01-15',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2013',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100151',
                uri: 'science-2013-ahe0u4',
                title: 'Научное открытие 2013 года',
                summary: 'Важное научное достижение в 2013 году',
                eventDate: '2013-08-01',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2013',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100152',
                uri: 'cinema-2013-o0q5os',
                title: 'Кинофестиваль 2013 года',
                summary: 'Крупное событие в мире кино в 2013 году',
                eventDate: '2013-01-25',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2013',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100153',
                uri: 'theatre-2013-tx0p6o',
                title: 'Театральная премьера 2013 года',
                summary: 'Заметная театральная постановка 2013 года',
                eventDate: '2013-03-03',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2013',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100154',
                uri: 'politics-2013-y6zg6u',
                title: 'Политическое событие 2013 года',
                summary: 'Политическое событие международного значения в 2013 году',
                eventDate: '2013-01-17',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2013',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100155',
                uri: 'fashion-2013-e5wcts',
                title: 'Показ мод 2013 года',
                summary: 'Главное событие в мире моды в 2013 году',
                eventDate: '2013-08-28',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2013',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100156',
                uri: 'literature-2014-vgfasa',
                title: 'Литературное событие 2014 года',
                summary: 'Знаменательное событие в литературе в 2014 году',
                eventDate: '2014-05-06',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2014',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100157',
                uri: 'science-2014-9t0xvp',
                title: 'Научное открытие 2014 года',
                summary: 'Важное научное достижение в 2014 году',
                eventDate: '2014-02-15',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2014',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100158',
                uri: 'cinema-2014-yxdq12',
                title: 'Кинофестиваль 2014 года',
                summary: 'Крупное событие в мире кино в 2014 году',
                eventDate: '2014-06-12',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2014',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100159',
                uri: 'theatre-2014-5n2kcm',
                title: 'Театральная премьера 2014 года',
                summary: 'Заметная театральная постановка 2014 года',
                eventDate: '2014-06-14',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2014',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100160',
                uri: 'politics-2014-jmhq0d',
                title: 'Политическое событие 2014 года',
                summary: 'Политическое событие международного значения в 2014 году',
                eventDate: '2014-05-12',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2014',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100161',
                uri: 'fashion-2014-wjblcv',
                title: 'Показ мод 2014 года',
                summary: 'Главное событие в мире моды в 2014 году',
                eventDate: '2014-02-09',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2014',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100162',
                uri: 'literature-2015-jklw3b',
                title: 'Литературное событие 2015 года',
                summary: 'Знаменательное событие в литературе в 2015 году',
                eventDate: '2015-03-02',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/literature/2015',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100163',
                uri: 'science-2015-bybdrz',
                title: 'Научное открытие 2015 года',
                summary: 'Важное научное достижение в 2015 году',
                eventDate: '2015-06-06',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/2015',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100164',
                uri: 'cinema-2015-4n05p8',
                title: 'Кинофестиваль 2015 года',
                summary: 'Крупное событие в мире кино в 2015 году',
                eventDate: '2015-06-02',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2015',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100165',
                uri: 'theatre-2015-paprxw',
                title: 'Театральная премьера 2015 года',
                summary: 'Заметная театральная постановка 2015 года',
                eventDate: '2015-02-02',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2015',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100166',
                uri: 'politics-2015-77xw4v',
                title: 'Политическое событие 2015 года',
                summary: 'Политическое событие международного значения в 2015 году',
                eventDate: '2015-04-25',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2015',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100167',
                uri: 'fashion-2015-tl55mg',
                title: 'Показ мод 2015 года',
                summary: 'Главное событие в мире моды в 2015 году',
                eventDate: '2015-06-02',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2015',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100168',
                uri: 'literature-2016-fjt3ip',
                title: 'Литературное событие 2016 года',
                summary: 'Знаменательное событие в литературе в 2016 году',
                eventDate: '2016-07-01',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2016',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100169',
                uri: 'science-2016-pekgmi',
                title: 'Научное открытие 2016 года',
                summary: 'Важное научное достижение в 2016 году',
                eventDate: '2016-10-08',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2016',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100170',
                uri: 'cinema-2016-vhdvw2',
                title: 'Кинофестиваль 2016 года',
                summary: 'Крупное событие в мире кино в 2016 году',
                eventDate: '2016-08-24',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2016',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100171',
                uri: 'theatre-2016-9t142b',
                title: 'Театральная премьера 2016 года',
                summary: 'Заметная театральная постановка 2016 года',
                eventDate: '2016-12-06',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2016',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100172',
                uri: 'politics-2016-nrrmy0',
                title: 'Политическое событие 2016 года',
                summary: 'Политическое событие международного значения в 2016 году',
                eventDate: '2016-01-06',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2016',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100173',
                uri: 'fashion-2016-2j244j',
                title: 'Показ мод 2016 года',
                summary: 'Главное событие в мире моды в 2016 году',
                eventDate: '2016-06-19',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2016',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100174',
                uri: 'literature-2017-7gh0ku',
                title: 'Литературное событие 2017 года',
                summary: 'Знаменательное событие в литературе в 2017 году',
                eventDate: '2017-12-28',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2017',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100175',
                uri: 'science-2017-qvtk47',
                title: 'Научное открытие 2017 года',
                summary: 'Важное научное достижение в 2017 году',
                eventDate: '2017-12-10',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/2017',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100176',
                uri: 'cinema-2017-7a0wfo',
                title: 'Кинофестиваль 2017 года',
                summary: 'Крупное событие в мире кино в 2017 году',
                eventDate: '2017-09-19',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2017',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100177',
                uri: 'theatre-2017-lck4fm',
                title: 'Театральная премьера 2017 года',
                summary: 'Заметная театральная постановка 2017 года',
                eventDate: '2017-05-01',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2017',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100178',
                uri: 'politics-2017-td1nzr',
                title: 'Политическое событие 2017 года',
                summary: 'Политическое событие международного значения в 2017 году',
                eventDate: '2017-07-13',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2017',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100179',
                uri: 'fashion-2017-4t3rak',
                title: 'Показ мод 2017 года',
                summary: 'Главное событие в мире моды в 2017 году',
                eventDate: '2017-05-10',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2017',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100180',
                uri: 'literature-2018-puxp3q',
                title: 'Литературное событие 2018 года',
                summary: 'Знаменательное событие в литературе в 2018 году',
                eventDate: '2018-06-13',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2018',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100181',
                uri: 'science-2018-nqh78w',
                title: 'Научное открытие 2018 года',
                summary: 'Важное научное достижение в 2018 году',
                eventDate: '2018-03-28',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/2018',
                        source: 'Космос',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100182',
                uri: 'cinema-2018-htjw1b',
                title: 'Кинофестиваль 2018 года',
                summary: 'Крупное событие в мире кино в 2018 году',
                eventDate: '2018-04-17',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2018',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100183',
                uri: 'theatre-2018-khvdmz',
                title: 'Театральная премьера 2018 года',
                summary: 'Заметная театральная постановка 2018 года',
                eventDate: '2018-11-13',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2018',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100184',
                uri: 'politics-2018-refdga',
                title: 'Политическое событие 2018 года',
                summary: 'Политическое событие международного значения в 2018 году',
                eventDate: '2018-02-21',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/politics/2018',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100185',
                uri: 'fashion-2018-ux1o6b',
                title: 'Показ мод 2018 года',
                summary: 'Главное событие в мире моды в 2018 году',
                eventDate: '2018-06-01',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2018',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100186',
                uri: 'literature-2019-f7inkn',
                title: 'Литературное событие 2019 года',
                summary: 'Знаменательное событие в литературе в 2019 году',
                eventDate: '2019-06-06',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/2019',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100187',
                uri: 'science-2019-t07nsx',
                title: 'Научное открытие 2019 года',
                summary: 'Важное научное достижение в 2019 году',
                eventDate: '2019-04-09',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/science/2019',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100188',
                uri: 'cinema-2019-85gi45',
                title: 'Кинофестиваль 2019 года',
                summary: 'Крупное событие в мире кино в 2019 году',
                eventDate: '2019-07-06',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2019',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100189',
                uri: 'theatre-2019-3dzmkw',
                title: 'Театральная премьера 2019 года',
                summary: 'Заметная театральная постановка 2019 года',
                eventDate: '2019-06-09',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2019',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100190',
                uri: 'politics-2019-6gfxoj',
                title: 'Политическое событие 2019 года',
                summary: 'Политическое событие международного значения в 2019 году',
                eventDate: '2019-11-17',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/politics/2019',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100191',
                uri: 'fashion-2019-39t2w0',
                title: 'Показ мод 2019 года',
                summary: 'Главное событие в мире моды в 2019 году',
                eventDate: '2019-12-08',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2019',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100192',
                uri: 'literature-2020-o014hu',
                title: 'Литературное событие 2020 года',
                summary: 'Знаменательное событие в литературе в 2020 году',
                eventDate: '2020-12-12',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/literature/2020',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100193',
                uri: 'science-2020-7m754c',
                title: 'Научное открытие 2020 года',
                summary: 'Важное научное достижение в 2020 году',
                eventDate: '2020-06-21',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/science/2020',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100194',
                uri: 'cinema-2020-fb68ga',
                title: 'Кинофестиваль 2020 года',
                summary: 'Крупное событие в мире кино в 2020 году',
                eventDate: '2020-09-28',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2020',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100195',
                uri: 'theatre-2020-oa2zwk',
                title: 'Театральная премьера 2020 года',
                summary: 'Заметная театральная постановка 2020 года',
                eventDate: '2020-11-09',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2020',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100196',
                uri: 'politics-2020-i7lqgb',
                title: 'Политическое событие 2020 года',
                summary: 'Политическое событие международного значения в 2020 году',
                eventDate: '2020-07-05',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2020',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100197',
                uri: 'fashion-2020-flqmyh',
                title: 'Показ мод 2020 года',
                summary: 'Главное событие в мире моды в 2020 году',
                eventDate: '2020-02-08',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2020',
                        source: "Harper's Bazaar",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100198',
                uri: 'literature-2021-t4v7sv',
                title: 'Литературное событие 2021 года',
                summary: 'Знаменательное событие в литературе в 2021 году',
                eventDate: '2021-10-22',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/literature/2021',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100199',
                uri: 'science-2021-q69921',
                title: 'Научное открытие 2021 года',
                summary: 'Важное научное достижение в 2021 году',
                eventDate: '2021-01-26',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/science/2021',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100200',
                uri: 'cinema-2021-kxgjka',
                title: 'Кинофестиваль 2021 года',
                summary: 'Крупное событие в мире кино в 2021 году',
                eventDate: '2021-09-27',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2021',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100201',
                uri: 'theatre-2021-pvifpz',
                title: 'Театральная премьера 2021 года',
                summary: 'Заметная театральная постановка 2021 года',
                eventDate: '2021-02-25',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2021',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100202',
                uri: 'politics-2021-kb8qsq',
                title: 'Политическое событие 2021 года',
                summary: 'Политическое событие международного значения в 2021 году',
                eventDate: '2021-10-28',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/politics/2021',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100203',
                uri: 'fashion-2021-jd98l4',
                title: 'Показ мод 2021 года',
                summary: 'Главное событие в мире моды в 2021 году',
                eventDate: '2021-05-27',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2021',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100204',
                uri: 'literature-2022-9517i0',
                title: 'Литературное событие 2022 года',
                summary: 'Знаменательное событие в литературе в 2022 году',
                eventDate: '2022-10-14',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/2022',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100205',
                uri: 'science-2022-5ifa28',
                title: 'Научное открытие 2022 года',
                summary: 'Важное научное достижение в 2022 году',
                eventDate: '2022-11-04',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2022',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100206',
                uri: 'cinema-2022-e58les',
                title: 'Кинофестиваль 2022 года',
                summary: 'Крупное событие в мире кино в 2022 году',
                eventDate: '2022-09-10',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2022',
                        source: 'Кинопоиск',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100207',
                uri: 'theatre-2022-of4vto',
                title: 'Театральная премьера 2022 года',
                summary: 'Заметная театральная постановка 2022 года',
                eventDate: '2022-03-07',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2022',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100208',
                uri: 'politics-2022-770sdo',
                title: 'Политическое событие 2022 года',
                summary: 'Политическое событие международного значения в 2022 году',
                eventDate: '2022-02-26',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2022',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100209',
                uri: 'fashion-2022-j41fr2',
                title: 'Показ мод 2022 года',
                summary: 'Главное событие в мире моды в 2022 году',
                eventDate: '2022-09-26',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2022',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100210',
                uri: 'literature-2023-cg02nt',
                title: 'Литературное событие 2023 года',
                summary: 'Знаменательное событие в литературе в 2023 году',
                eventDate: '2023-02-19',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2023',
                        source: "Журнал 'Знамя'",
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100211',
                uri: 'science-2023-2voz7o',
                title: 'Научное открытие 2023 года',
                summary: 'Важное научное достижение в 2023 году',
                eventDate: '2023-05-06',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2023',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100212',
                uri: 'cinema-2023-ril1iv',
                title: 'Кинофестиваль 2023 года',
                summary: 'Крупное событие в мире кино в 2023 году',
                eventDate: '2023-01-11',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2023',
                        source: 'Искусство кино',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100213',
                uri: 'theatre-2023-zgo6fl',
                title: 'Театральная премьера 2023 года',
                summary: 'Заметная театральная постановка 2023 года',
                eventDate: '2023-08-03',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2023',
                        source: 'Театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100214',
                uri: 'politics-2023-lfcj5w',
                title: 'Политическое событие 2023 года',
                summary: 'Политическое событие международного значения в 2023 году',
                eventDate: '2023-07-16',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2023',
                        source: 'Ведомости',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100215',
                uri: 'fashion-2023-j2hcxw',
                title: 'Показ мод 2023 года',
                summary: 'Главное событие в мире моды в 2023 году',
                eventDate: '2023-05-04',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2023',
                        source: 'Vogue Россия',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100216',
                uri: 'literature-2024-yu69rg',
                title: 'Литературное событие 2024 года',
                summary: 'Знаменательное событие в литературе в 2024 году',
                eventDate: '2024-10-14',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/literature/2024',
                        source: 'Литературная газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100217',
                uri: 'science-2024-krqbf3',
                title: 'Научное открытие 2024 года',
                summary: 'Важное научное достижение в 2024 году',
                eventDate: '2024-04-27',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/science/2024',
                        source: 'Scientific Russian',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100218',
                uri: 'cinema-2024-phrteo',
                title: 'Кинофестиваль 2024 года',
                summary: 'Крупное событие в мире кино в 2024 году',
                eventDate: '2024-01-05',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2024',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100219',
                uri: 'theatre-2024-69dvrk',
                title: 'Театральная премьера 2024 года',
                summary: 'Заметная театральная постановка 2024 года',
                eventDate: '2024-04-19',
                location: { label: 'Нью-Йорк, США' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2024',
                        source: 'Культура',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100220',
                uri: 'politics-2024-boeeab',
                title: 'Политическое событие 2024 года',
                summary: 'Политическое событие международного значения в 2024 году',
                eventDate: '2024-12-21',
                location: { label: 'Париж, Франция' },
                articles: [
                    {
                        url: 'https://example.com/politics/2024',
                        source: 'РБК',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100221',
                uri: 'fashion-2024-700lv0',
                title: 'Показ мод 2024 года',
                summary: 'Главное событие в мире моды в 2024 году',
                eventDate: '2024-09-05',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2024',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100222',
                uri: 'literature-2025-9fyi0y',
                title: 'Литературное событие 2025 года',
                summary: 'Знаменательное событие в литературе в 2025 году',
                eventDate: '2025-12-03',
                location: { label: 'Лондон, Великобритания' },
                articles: [
                    {
                        url: 'https://example.com/literature/2025',
                        source: 'Книжное обозрение',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100223',
                uri: 'science-2025-an4vf9',
                title: 'Научное открытие 2025 года',
                summary: 'Важное научное достижение в 2025 году',
                eventDate: '2025-08-02',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/science/2025',
                        source: 'Наука и жизнь',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100224',
                uri: 'cinema-2025-487ubw',
                title: 'Кинофестиваль 2025 года',
                summary: 'Крупное событие в мире кино в 2025 году',
                eventDate: '2025-04-04',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/cinema/2025',
                        source: 'Кино-газета',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100225',
                uri: 'theatre-2025-itn79y',
                title: 'Театральная премьера 2025 года',
                summary: 'Заметная театральная постановка 2025 года',
                eventDate: '2025-05-28',
                location: { label: 'Москва, Россия' },
                articles: [
                    {
                        url: 'https://example.com/theatre/2025',
                        source: 'Петербургский театрал',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100226',
                uri: 'politics-2025-bi49dj',
                title: 'Политическое событие 2025 года',
                summary: 'Политическое событие международного значения в 2025 году',
                eventDate: '2025-05-23',
                location: { label: 'Санкт-Петербург, Россия' },
                articles: [
                    {
                        url: 'https://example.com/politics/2025',
                        source: 'Коммерсант',
                        lang: 'rus'
                    }
                ]
            },
            {
                id: '100227',
                uri: 'fashion-2025-6ar62z',
                title: 'Показ мод 2025 года',
                summary: 'Главное событие в мире моды в 2025 году',
                eventDate: '2025-02-05',
                location: { label: 'Токио, Япония' },
                articles: [
                    {
                        url: 'https://example.com/fashion/2025',
                        source: 'Elle',
                        lang: 'rus'
                    }
                ]
            }
        ],
        total: 240
    }
}