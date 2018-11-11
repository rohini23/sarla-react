import { getContact } from "../action/SetTargetA";
export function PassTargetReduser(state = [], action) {
  return action.type === getContact ? action.payload : state;
}
