import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEatingTimesState } from './EatingTimes.reducer.types';

const initialState: IEatingTimesState = {
    currentEating: 'breakfast',
    eatings: {
        breakfast: {
            kcal: 0,
        },
        dinner: {
            kcal: 0,
        },
        snack: {
            kcal: 0,
        },
        supper: {
            kcal: 0,
        },
    },
};

const EatingTimesSlice = createSlice({
    name: 'EatingTimes',
    initialState,
    reducers: {
        setEatingAction(
            state,
            action: PayloadAction<{
                field: keyof IEatingTimesState['eatings'];
                value: number;
            }>
        ) {
            state.eatings[action.payload.field].kcal = action.payload.value;
        },
        setCurrentEatingAction(
            state,
            action: PayloadAction<keyof IEatingTimesState['eatings']>
        ) {
            state.currentEating = action.payload;
        },
    },
});

export const EatingTimesReducer = EatingTimesSlice.reducer;
export const { setEatingAction, setCurrentEatingAction } =
    EatingTimesSlice.actions;
