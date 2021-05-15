import { IGood } from '../reducers/Goods/Goods.reducer.types';

export type TRootStackParamList = {
    SignIn: undefined;
    Home: undefined;
    Diary: undefined;
    Search: undefined;
    Good: IGood;
};
