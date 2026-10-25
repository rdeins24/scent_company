const MONTHS_RO = [
  "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
  "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
];

// "2022-03-16" -> "16 martie 2022" (determinist, fără diferențe server/client)
export const formatDateRo = (iso) => {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS_RO[month - 1]} ${year}`;
};
