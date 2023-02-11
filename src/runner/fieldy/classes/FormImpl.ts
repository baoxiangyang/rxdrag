import { ErrorListener, IField, IFieldSchema, IFieldyEngine, IForm, Listener, Unsubscribe, ValueChangeListener } from "../interfaces";

export class FormImpl implements IForm{
  constructor(private enginge: IFieldyEngine, private formName:string) { }
  
  registerField(fieldSchema: IFieldSchema): IField {
    throw new Error("Method not implemented.");
  }
  unregisterField(path: number): void {
    throw new Error("Method not implemented.");
  }
  setValue(value: any): void {
    throw new Error("Method not implemented.");
  }
  setInitialValue(value: any): void {
    throw new Error("Method not implemented.");
  }
  inpuValue(value: any): void {
    throw new Error("Method not implemented.");
  }
  validate(): void {
    throw new Error("Method not implemented.");
  }
  onInit(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onMount(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onUnmount(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onValuesChange(): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onInitialValuesChange(): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onInput(listener: ValueChangeListener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onValidateStart(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onValidateEnd(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onValidateFailed(listener: ErrorListener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  onValidateSuccess(listener: Listener): Unsubscribe {
    throw new Error("Method not implemented.");
  }
  
}