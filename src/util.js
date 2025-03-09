// Convert '2025-03-21' -> 'Mar 2025', etc.
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};
