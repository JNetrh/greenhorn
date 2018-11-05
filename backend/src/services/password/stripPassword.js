export const stripPassword = user => {
  const { password, ...rest } = user.toJSON();
  return rest;
};
