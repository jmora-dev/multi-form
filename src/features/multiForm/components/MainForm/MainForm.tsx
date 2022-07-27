import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { MainData } from "../../models/MainData";
import { SecondaryData } from "../../models/SecondaryData";
import { multiFormActionCreators } from "../../reducer/multiFormActionCreators";
import { api } from "../../service/multiFormApi";
import DataSelector from "../DataSelector/DataSelector";

enum formStep {
  main,
  dataSelector,
}

export default function MainForm() {
  const dispatch = useAppDispatch();
  const { secondaryData } = useAppSelector((state) => state.multiForm);
  const [step, setStep] = useState<formStep>(formStep.main);
  const [mainData, setMainData] = useState<MainData | null>(null);
  const [secondaryDataSelected, setSecondaryDataSelected] = useState<
    SecondaryData[]
  >([]);

  useEffect(() => {
    Promise.all([api.getSecondaryData(), api.getMainDataById(1)]).then(
      (results) => {
        dispatch(multiFormActionCreators.load(results[0]));
        setMainData(results[1] ? results[1] : null);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (mainData) {
      setSecondaryDataSelected(
        secondaryData.filter((data) => mainData.links.includes(data.id))
      );
    }
  }, [mainData?.links, secondaryData, mainData]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleChange = (name: string, value: string) => {
    if (mainData) {
      setMainData({ ...mainData, [name]: value });
    }
  };

  const addSecondaryData = () => {
    setStep(formStep.dataSelector);
  };

  const backToMainForm = () => {
    setStep(formStep.main);
  };

  const toggleSelectionSecondaryData = (id: number) => {
    if (mainData) {
      let links = [...mainData.links];
      console.log("secondaryDataIds", links);
      if (links.includes(id)) {
        links = links.filter((link) => link !== id);
      } else {
        links.push(id);
      }
      setMainData({ ...mainData, links });
    }
  };

  if (!mainData) {
    return <div>Loading...</div>;
  } else {
    switch (step) {
      case formStep.dataSelector:
        return (
          <div>
            <button onClick={backToMainForm}>Atrás</button>
            <DataSelector
              options={secondaryData}
              selectedOptions={mainData.links}
              toggleSelection={toggleSelectionSecondaryData}
            />
          </div>
        );

      case formStep.main:
      default:
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={mainData?.name}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <button type="button" onClick={addSecondaryData}>
                Agregar
              </button>
              {secondaryDataSelected.map((data) => (
                <div key={data.id}>{data.name}</div>
              ))}
            </form>
          </div>
        );
    }
  }
}
