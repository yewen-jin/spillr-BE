function airstampToDateTime(airstamp) {
  const date = new Date(airstamp);
  const airdate = date.toISOString().split("T")[0];
  const airtime = date.toTimeString().split(" ")[0];
  return { airdate, airtime };
}

module.exports = airstampToDateTime;
