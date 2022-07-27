import { MainData } from "../models/MainData";
import { SecondaryData } from "../models/SecondaryData";

export const SECONDARY_DATA: SecondaryData[] = [
  {
    id: 1,
    name: "Data 1",
    description: "Data 1 description",
  },
  {
    id: 2,
    name: "Data 2",
    description: "Data 2 description",
  },
  {
    id: 3,
    name: "Data 3",
    description: "Data 3 description",
  },
  {
    id: 4,
    name: "Data 4",
    description: "Data 4 description",
  },
  {
    id: 5,
    name: "Data 5",
    description: "Data 5 description",
  },
];

export const MAIN_DATA: MainData[] = [
  {
    id: 1,
    name: "Main 1",
    links: [1, 4],
  },
];
