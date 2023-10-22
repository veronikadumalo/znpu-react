import { createGlobalState } from "react-hooks-global-state";

interface InitialState {
  isLoading?: boolean;
  isError?: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
};

const { useGlobalState, setGlobalState } =
  createGlobalState<InitialState>(initialState);

export { useGlobalState, setGlobalState };
