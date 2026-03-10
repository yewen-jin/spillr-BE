function compareDate(date) {
  const today = new Date();
  const dateForComparison = new Date(date);
  if (dateForComparison > today) {
    return true;
  } else {
    return false;
  }
}

module.exports = compareDate;
