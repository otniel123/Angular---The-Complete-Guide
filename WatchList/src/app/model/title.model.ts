export interface TitleModel {
    name: string,
    gener: string,
    year: string,
    type: "Movie" | "Series" | "",
    status: "want-watch" | "watching" | "watched",
    rating: 0 | 1 | 2 | 3 | 4 | 5 | Object
}

