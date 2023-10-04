import { PropsListener, UnListener, VariableListener, PropListener } from "../interfaces";
import { IComponentController } from "../interfaces/component-contoller";

//构造函数传入当前form跟当前field
export class ListController implements IComponentController{
  
  subscribeToPropsChange(listener: PropsListener): UnListener {
    throw new Error("Method not implemented.");
  }
  destroy(): void {
    throw new Error("Method not implemented.");
  }
  setVariable(name: string, value: unknown): void {
    throw new Error("Method not implemented.");
  }
  getVariable(name: string): unknown {
    throw new Error("Method not implemented.");
  }
  subscribeToVariableChange(name: string, listener: VariableListener): UnListener {
    throw new Error("Method not implemented.");
  }
  setProp(name: string, value: unknown): void {
    throw new Error("Method not implemented.");
  }
  getProp(name: string): unknown {
    throw new Error("Method not implemented.");
  }
  subscribeToPropChange(name: string, listener: PropListener): UnListener {
    throw new Error("Method not implemented.");
  }
  
}