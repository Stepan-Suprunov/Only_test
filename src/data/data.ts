import { IEventRegistryResponse } from './types';

export const data: IEventRegistryResponse = {
    "events": {
        "results": [
            {
                "id": "862148",
                "uri": "literature-1992-booker",
                "title": "Вручение Букеровской премии 1992 года",
                "summary": "Марк Харитонов стал первым русским писателем, получившим Букеровскую премию за роман 'Линия судьбы, или Сундучок Милашевича'",
                "eventDate": "1992-12-05",
                "location": {"label": "Москва, Россия"},
                "articles": [
                    {
                        "url": "https://example.com/culture/booker-1992",
                        "source": "Литературное обозрение",
                        "lang": "rus"
                    }
                ]
            },
            {
                "id": "968743",
                "uri": "literature-1994-fair",
                "title": "Московская международная книжная выставка-ярмарка",
                "summary": "Крупнейшее книжное событие года с участием международных издательств",
                "eventDate": "1994-09-03",
                "location": {"label": "Москва, Россия"},
                "articles": [
                    {
                        "url": "https://example.com/news/bookfair-1994",
                        "source": "Культурная хроника",
                        "lang": "rus"
                    }
                ]
            },
            {
                "id": "123456",
                "uri": "literature-1994-nobel",
                "title": "Кэнзабуро Оэ получил Нобелевскую премию по литературе",
                "summary": "Японский писатель Кэнзабуро Оэ удостоен Нобелевской премии 1994 года",
                "eventDate": "1994-10-13",
                "location": {
                    "label": "Стокгольм, Швеция",
                    "wikipediaUri": "https://ru.wikipedia.org/wiki/Стокгольм"
                },
                "articles": [
                    {
                        "url": "https://example.com/news/nobel-1994",
                        "source": "Литературная газета",
                        "lang": "rus"
                    }
                ]
            },
            {
                "id": "789012",
                "uri": "literature-1995-bookfair",
                "title": "Московская международная книжная ярмарка 1995",
                "summary": "В Москве прошла крупнейшая книжная выставка с участием 500 издательств",
                "eventDate": "1995-09-05",
                "location": {
                    "label": "Москва, Россия",
                    "wikipediaUri": "https://ru.wikipedia.org/wiki/Москва"
                },
                "articles": [
                    {
                        "url": "https://example.com/culture/bookfair-1995",
                        "source": "Культура",
                        "lang": "rus"
                    }
                ]
            },
            {
                "id": "854328",
                "uri": "literature-1996-pelevin",
                "title": "Выход романа 'Чапаев и Пустота' Виктора Пелевина",
                "summary": "Публикация культового романа, ставшего важным явлением в русской литературе 1990-х",
                "eventDate": "1996-04-12",
                "articles": [
                    {
                        "url": "https://example.com/books/pelevin-1996",
                        "source": "Книжное обозрение",
                        "lang": "rus"
                    }
                ]
            },
        ],
        "total": 5
    }
};