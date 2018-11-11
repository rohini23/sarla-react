export let getContact = "target:contact";
export function passTarget(ref) {
  return dispatch => {
    return dispatch({
      type: getContact,
      payload: ref
    });
  };
}
