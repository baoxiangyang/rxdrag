import { IComponentMaterial } from "@rxdrag/react-core";
import { locales, resourceLocales } from "./locales";
import { schema } from "./schema";
import { LSText } from "../../../components/basic";
import { icon } from "./icon";

const name = "LSText"
export const LSTextMaterial: IComponentMaterial = {
  componentName: "LSText",
  component: LSText,
  designer: LSText,
  propsSchema: schema,
  designerLocales: locales,
  resource: {
    name: name,
    icon: icon,
    color: "#dfa324",
    resourceLocales: resourceLocales,
    elements: [
      {
        componentName: name,
        props: {
          value: name,
        }
      }
    ]
  },
  behaviorRule: {
    droppable: true,
  },
}