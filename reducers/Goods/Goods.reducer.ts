import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGoodsState } from './Goods.reducer.types';

const initialState: IGoodsState = {
    items: [
        {
            id: 1,
            isRestoran: false,
            kcal: 23,
            restorants: ['Percini'],
            name: 'Tea',
            desc: 'Restaraunt and cafe which have this dish in your city',
        },
        {
            id: 2,
            isRestoran: true,
            kcal: 230,
            restorants: ['Percini', 'Globus', 'Matrew'],
            name: 'Pasta Carbonara',
            desc: 'Restaraunt and cafe which have this dish in your city',
        },
    ],
};

const GoodsSlice = createSlice({
    name: 'Goods',
    initialState,
    reducers: {},
});

export const GoodsReducer = GoodsSlice.reducer;
