// hit the api in apiHandlers
export const registrationSuccess = () => {
  return {
    type: 'REGISTRATION_SUCCESS',
  };
};

export const registrationFailure = () => {
  return {
    type: 'REGISTRATION_FAILURE',
  };
};
