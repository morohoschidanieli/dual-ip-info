import type { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistedStore, store } from "@store";

export interface ReduxProps {
  children: React.JSX.Element;
}

export const ReduxProvider: FC<ReduxProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};
