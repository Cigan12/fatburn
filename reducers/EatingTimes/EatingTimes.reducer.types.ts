export interface IEatingTimesState {
    currentEating: keyof IEatingTimesState['eatings'];
    eatings: {
        breakfast: {
            kcal: number;
        };
        dinner: {
            kcal: number;
        };
        supper: {
            kcal: number;
        };
        snack: {
            kcal: number;
        };
    };
}
