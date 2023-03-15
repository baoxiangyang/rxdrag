
import { useToolsTranslate } from "@rxdrag/react-core";
import { useCallback } from "react"

export function useTrans() {
  const t = useToolsTranslate();
  const trans = useCallback((message?: string) => {
    if (message?.startsWith('$')) {
      return t("ReactionsInput." + message?.substring(1))
    }
    return message
  }, [t])

  return trans
}