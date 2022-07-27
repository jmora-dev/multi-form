import { createReducer } from "@reduxjs/toolkit";
import { SecondaryData } from "../models/SecondaryData";
import { multiFormActionCreators } from "./multiFormActionCreators";

interface state {
  secondaryData: SecondaryData[];
}

const INITIAL_STATE: state = {
  secondaryData: [],
};

export const multiFormReducer = createReducer(INITIAL_STATE, (builder) => {
  return builder
    .addCase(multiFormActionCreators.load, (state, action) => {
      return { ...state, secondaryData: action.payload };
    })
    .addDefaultCase((state) => state);
});
