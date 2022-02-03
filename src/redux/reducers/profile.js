var data = {
  firstName: "Jane",
  lastName: "Doe",
  description: "I am a real person, I promise!",
};

const profileState = function (state = data, action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return action.payload;
    case "CLEAR_PROFILE":
      return data;
    default:
      return state;
  }
};

export default profileState;
