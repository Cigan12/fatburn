export interface IGoodsState {
    items: Array<IGood>;
}

export interface IGood {
    id: number;
    kcal: number;
    isRestoran: boolean;
    restorants: Array<string>;
    name: string;
    desc: string;
}
