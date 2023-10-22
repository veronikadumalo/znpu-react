import { builder } from "./builder";
import "./types/Deparments";
import "./types/Person";
import "./types/News";

export const schema = builder.toSchema();
