import { ReactNode } from "react";

type SelectProps = {
  optionsList?: string[];
  searchParams: URLSearchParams;
  children?: ReactNode;
  name: string;
  stateValue: string | null;
  handleInputChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};
export default function FitlersSelectInput({
  optionsList,
  name,
  stateValue,
  handleInputChange,
  children,
}: SelectProps) {
  return (
    <select
      name={name}
      value={stateValue || undefined}
      onChange={handleInputChange}
    >
      {children
        ? children
        : optionsList?.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
    </select>
  );
}
