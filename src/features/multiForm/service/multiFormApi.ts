import { MainData } from "../models/MainData";
import { SecondaryData } from "../models/SecondaryData";
import { MAIN_DATA, SECONDARY_DATA } from "./data";

const getSecondaryData = (): Promise<SecondaryData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SECONDARY_DATA);
    }, 500);
  });
};

const getMainDataById = (id: number): Promise<MainData | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MAIN_DATA.find((data) => data.id === id));
    }, 500);
  });
};

export const api = {
  getSecondaryData,
  getMainDataById,
};
