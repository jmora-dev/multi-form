import { createAction } from "@reduxjs/toolkit";
import { SecondaryData } from "../models/SecondaryData";

const ACTION_TYPES = {
  LOAD: "MULTI_FORM_LOAD",
};

export const multiFormActionCreators = {
  load: createAction<SecondaryData[]>(ACTION_TYPES.LOAD),
};
