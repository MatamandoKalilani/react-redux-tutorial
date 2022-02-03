export const updateProfile = (firstName, lastName, description) => {
  return {
    type: "UPDATE_PROFILE",
    payload: { firstName, lastName, description },
  };
};

export const clearProfile = () => {
  return { type: "CLEAR_PROFILE" };
};
