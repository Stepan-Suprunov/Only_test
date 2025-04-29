export interface IEventRegistryResponse {
    events: {
        results: IEvent[];
        total: number;
    };
};

export interface IEvent {
    id: string;
    uri: string;
    title: string;
    summary: string;
    eventDate: string;
    location?: ILocation;
    articles: IArticle[];
};

interface ILocation {
    label: string;
    wikipediaUri?: string;
};

interface IArticle {
    url: string;
    source: string;
    lang: string;
};