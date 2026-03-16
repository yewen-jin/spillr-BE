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

function findShowIDByCountry(tvShows, seriesName, countryCode) {
  for (const tvshow of tvShows) {
    if (
      (tvshow.show.network?.country?.code === countryCode ||
        tvshow.show.webChannel?.country?.code === countryCode ||
        tvshow.show.officialSite?.includes("uk")) &&
      tvshow.show.name?.toLowerCase() === seriesName.toLowerCase()
    ) {
      return tvshow.show.id;
    }
  }
  const tvShowFiltered = [];
  for (const tvshow of tvShows) {
    if (
      tvshow.show.network?.country?.code === countryCode ||
      tvshow.show.webChannel?.country?.code === countryCode ||
      tvshow.show.officialSite?.includes("uk")
    ) {
      tvShowFiltered.push(tvshow);
    }
  }
  if (tvShowFiltered[0]?.show?.name?.toLowerCase().includes("uk")) {
    return tvShowFiltered[0]?.show.id;
  }
  for (const tvshow of tvShows) {
    if (
      tvshow.show.name?.toLowerCase() === seriesName.toLowerCase() &&
      tvshow.show.language.toLowerCase() === "english"
    ) {
      return tvshow.show.id;
    }
  }
  return tvShows[0]?.show.id;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
  airstampToDateTime,
  compareDate,
  findShowIDByCountry,
  sleep,
};
