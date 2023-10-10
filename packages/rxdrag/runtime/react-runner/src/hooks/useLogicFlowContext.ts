import { IReactContext, IVariableContext, predefinedReactions } from "@rxdrag/minions-runtime-react";
import { useForm } from "@rxdrag/react-fieldy";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFxContext, ILoopScopeContext } from "@rxdrag/minions-runtime";
import { ControllerEngine } from "../LogicflowRuntime/ControllerEngine";

export type MergedLogicFlowContext = IReactContext & IVariableContext & IFxContext & ILoopScopeContext

export function useLogicFlowContext(engine: ControllerEngine | null) {
  const navigate = useNavigate()
  const form = useForm()
  const urlParams = useParams()
  const logicFlowContext: MergedLogicFlowContext = useMemo(() => ({
    controllers: engine?.controllers,
    navigate,
    form,
    urlParams,
    reactions: { ...predefinedReactions, ...engine?.reactions },
    variableController: engine?.variableController,
    fxFlows: engine?.fxFlows,
    loopScope: engine?.loopScope,
  }), [engine, form, navigate, urlParams])

  return logicFlowContext
}