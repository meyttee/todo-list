import { createContext } from "react";

import type { IContext } from "./interface";

const StateContext = createContext<IContext | undefined>(undefined);

export { StateContext };
