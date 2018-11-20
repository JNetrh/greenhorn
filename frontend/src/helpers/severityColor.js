export const getSeverityColor = severity => {
  let color = '#eee';
  if (severity.toLowerCase() === 'high') color = '#f50';
  if (severity.toLowerCase() === 'medium') color = '#fa8c16';
  if (severity.toLowerCase() === 'low') color = '#87d068';
  return color;
};
