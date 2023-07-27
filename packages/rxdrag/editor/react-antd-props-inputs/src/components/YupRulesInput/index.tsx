import { Select, Switch } from "antd"
import { memo, useCallback } from "react"
import { IYupConfig, WhenType, YupRules, YupString, YupType, YupValidateRules } from "@rxdrag/fieldy-yup-validation"
import { useSettersTranslate } from "@rxdrag/react-core"
import { NumberRuleInput } from "./NumberRuleInput"
import { ArrayRuleInput } from "./ArrayRuleInput"
import { DateRuleInput } from "./DateRuleInput"
import { StringRuleInput } from "./StringRuleInput"
import { ObjectRuleInput } from "./ObjectRuleInput"
import { PropLayout } from "../PropLayout"
import { MessageInput } from "./MessageInput"
import { WhenInput } from "./WhenInput"

export const YupRulesInput = memo((
  props: {
    value?: YupValidateRules,
    onChange?: (value?: YupValidateRules) => void
  }
) => {
  const { value, onChange } = props;
  const t = useSettersTranslate()

  const handleRequiredChange = useCallback((checked: boolean) => {
    onChange?.({ ...value, rules: { ...value?.rules, required: { ...value?.rules?.required, value: checked } } })
  }, [onChange, value])

  const handleTypeChange = useCallback((typeValue: string) => {
    onChange?.({ ...value, type: { ...value?.type, value: typeValue } })
  }, [onChange, value])

  const handleWhenChange = useCallback((whenType?: WhenType) => {
    onChange?.({ ...value, rules: { ...value?.rules, when: whenType } })
  }, [onChange, value])

  const handleRulesChange = useCallback((rules?: YupRules) => {
    onChange?.({ ...value, rules: rules })
  }, [onChange, value])

  const handleRequiredConfigChange = useCallback((config?: IYupConfig<unknown>) => {
    onChange?.({ ...value, rules: { ...value?.rules, required: config as IYupConfig<boolean> } })
  }, [onChange, value])

  const handleTypeConfigChange = useCallback((config?: IYupConfig<unknown>) => {
    onChange?.({ ...value, type: config as IYupConfig<string | YupType> })
  }, [onChange, value])

  return (
    <>
      <PropLayout
        label={t('requried')}
        expressionSetter={
          <MessageInput
            value={value?.rules?.required}
            onChange={handleRequiredConfigChange}
          />}
      >
        <Switch
          checked={value?.rules?.required?.value as boolean | undefined}
          onChange={handleRequiredChange}
        />
      </PropLayout>
      <PropLayout
        label={t('validationType')}
        expressionSetter={
          <MessageInput
            value={value?.type}
            onChange={handleTypeConfigChange}
          />}
      >
        <Select
          allowClear
          value={value?.type?.value}
          onChange={handleTypeChange}
          options={[
            { value: 'email', label: t('email') },
            { value: 'url', label: t('url') },
            { value: 'uuid', label: t('UUID') },
            { value: 'string', label: t('string') },
            { value: 'number', label: t('number') },
            { value: 'date', label: t('date') },
            { value: 'boolean', label: t('boolean') },
            { value: 'array', label: t('array') },
            { value: 'object', label: t('object') },
          ]}
        />
      </PropLayout>
      {
        value?.type?.value === YupType.array &&
        <ArrayRuleInput />
      }
      {
        // value?.type?.value === YupType.boolean &&
        // <BooleanRuleInput />
      }
      {
        value?.type?.value === YupType.date &&
        <DateRuleInput />
      }
      {
        value?.type?.value === YupType.number &&
        <NumberRuleInput />
      }
      {
        value?.type?.value === YupType.object &&
        <ObjectRuleInput />
      }
      {
        value?.type?.value === YupType.string &&
        <StringRuleInput value={value?.rules as YupString | undefined} onChange={handleRulesChange} />
      }
      {
        <WhenInput value={value?.rules?.when} onChange={handleWhenChange} />
      }
    </>
  )
})