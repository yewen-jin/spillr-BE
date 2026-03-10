function airstampToDateTime(airstamp) {
  const date = new Date(airstamp);
  const airdate = date.toISOString().split("T")[0];
  const airtime = date.toTimeString().split(" ")[0];
  return { airdate, airtime };
}

function compareDate(date) {
  const today = new Date();
  const dateForComparison = new Date(date);
  if (dateForComparison > today) {
    return true;
  } else {
    return false;
  }
}

function findShowIDByCountry(tvShows, countryCode) {
  for (const tvshow of tvShows) {
    if (tvshow.show.network?.country?.code === countryCode) {
      return tvshow.show.id;
    }
  }
  return null;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
  airstampToDateTime,
  compareDate,
  findShowIDByCountry,
  sleep,
};
