import { Dispatch, SetStateAction } from "react";

export interface ValueStateObject {
  value: string;
  label: string;
}

interface ValueStateObjectProps {
  value: ValueStateObject;
  setValue: Dispatch<SetStateAction<ValueStateObject>>;
}

interface ValueStateStringProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
