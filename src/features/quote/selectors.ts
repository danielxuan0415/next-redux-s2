import { RootState } from "../../app/store";

export const selectQuote = (state: RootState) => state.quote;