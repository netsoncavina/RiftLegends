import axios from "axios";

export const getChampionsData = async () => {
  const response = await axios.get(
    "http://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json"
  );

  const championsData = response.data.data;
  const championsArray = Object.keys(championsData).map((key) => {
    return {
      name: championsData[key].name,
      title: championsData[key].title,
      imageUri: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${championsData[
        key
      ].id.toLowerCase()}/skins/base/${championsData[
        key
      ].id.toLowerCase()}loadscreen.jpg`,
    };
  });
  return championsArray;
};
