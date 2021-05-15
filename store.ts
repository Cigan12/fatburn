import { configureStore } from '@reduxjs/toolkit';
import { EatingTimesReducer } from './reducers/EatingTimes/EatingTimes.reducer';
import { GoodsReducer } from './reducers/Goods/Goods.reducer';

export const Store = configureStore({
    reducer: { EatingTimesReducer, GoodsReducer },
});

export type TStore = ReturnType<typeof Store.getState>;
