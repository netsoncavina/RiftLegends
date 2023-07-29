import axios from "axios";

export const getChampionsData = async (language: string) => {
  const response = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.14.1/data/${language}/champion.json`
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

export const getChampionData = async (championId: string, language: string) => {
  const response = await axios.get(
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/${language}/v1/champions/${championId}.json`
  );

  const championData = response.data;
  return championData;
};
