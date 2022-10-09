export const formatAmount = (amount) => {
  if (!amount) return '$----';
  const cleanedAmount = Number(amount.replace(/[-$]*/g, ''));
  return `${isAmountNegative(amount) ? '-' : ''}$${cleanedAmount}`;
}

export const isAmountNegative = (amount) => {
  if (!amount) return false;
  return amount.includes('-');
}

export const formatDate = (date) => {
  const convertedDate = new Date(date);
  if (!date || convertedDate === 'Invalid date') return '';
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return convertedDate.toLocaleDateString('en-US', options);
}