import { Tree } from "antd";
import { DataNode, DirectoryTreeProps } from "antd/es/tree";
import { memo, useCallback, useMemo } from "react"
import { TreeContainer } from "../../common/TreeContainer";
import { RootVarsLabel } from "./RootVarsLabel";
import { useModule } from "../../../hooks/useModule";
import { setPropIcon, listenPropIcon, variableIcon } from "../../icons";
import { RootFlowsLabel } from "./RootFlowsLabel";
import { NodeIndexOutlined } from "@ant-design/icons";
import { VariableLabel } from "./VariableLabel";
import { FlowLabel } from "./FlowLabel";
import { ID } from "@rxdrag/shared";
import { useQueryFlows } from "../../../../hooks/useQueryFlows";
import { LogicType } from "../../../../interfaces/flow";

const { DirectoryTree } = Tree;

export const Flows = memo((
  props: {
    selected?: ID,
    onSelect: (id: ID) => void,
    display?: boolean,
  }
) => {
  const { selected, onSelect, display } = props;
  const module = useModule()

  const { flows } = useQueryFlows(module?.id, LogicType.normal)

  const treeData: DataNode[] = useMemo(() => [
    {
      title: <RootFlowsLabel />,
      key: 'flows',
      selectable: false,
      children: flows?.map(flow => {
        return {
          key: flow.id,
          title: <FlowLabel flow={flow} />,
          icon: <NodeIndexOutlined />,
        }
      })
    },
    {
      title: <RootVarsLabel />,
      key: 'vars',
      selectable: false,
      children: module?.variables?.map(variable => {
        return {
          key: variable.id,
          title: <VariableLabel variable={variable} />,
          selectable: false,
          icon: variableIcon,
          children: [
            {
              key: variable.name + "set",
              title: "设置",
              isLeaf: true,
              icon: setPropIcon,
              selectable: false,
            },
            {
              key: variable.name + "listen",
              title: "监听",
              isLeaf: true,
              icon: listenPropIcon,
              selectable: false,
            },
          ]
        }
      })
    }
  ], [flows, module?.variables]);


  const handleSelect: DirectoryTreeProps['onSelect'] = useCallback((keys: React.Key[]) => {
    onSelect?.((keys?.[0] as ID | undefined) || "")
  }, [onSelect]);

  return (
    <>
      <TreeContainer
        className={!display ? "hidden" : undefined}
      >
        <DirectoryTree
          selectedKeys={[selected || ""]}
          onSelect={handleSelect}
          treeData={treeData}
        />
      </TreeContainer>
    </>
  )
})