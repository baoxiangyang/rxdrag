import { ActivityType } from "@rxdrag/minions-schema";
import { createUuid } from "@rxdrag/shared";
import { DEFAULT_INPUT_NAME } from "@rxdrag/minions-runtime";
import { IQueryActivityMaterial } from "../types";
import { dataQueryIcon } from "../icons";
import { dataQuerySchema } from "./schema";
import { RestfulQuery } from "httpquery/activities";

export const dataQueryMaterial: IQueryActivityMaterial = {
  activityName: RestfulQuery.NAME,
  icon: dataQueryIcon,
  label: "$restfulQuery",
  activityType: ActivityType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createUuid(),
        name: DEFAULT_INPUT_NAME,
        label: "",
      },
    ],
    outPorts: [
      {
        id: createUuid(),
        name: RestfulQuery.OUTPUT_NAME_DATA,
        label: "$dataOut",
      },
      {
        id: createUuid(),
        name: RestfulQuery.OUTPUT_NAME_QUERYING,
        label: "$querying",
      },
      {
        id: createUuid(),
        name: RestfulQuery.OUTPUT_NAME_ERROR,
        label: "$error",
      },
    ],
  },
  schema: dataQuerySchema
}