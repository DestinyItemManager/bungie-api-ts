export const destinyManifestLanguages = [
  'de',
  'en',
  'es',
  'es-mx',
  'fr',
  'it',
  'ja',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'zh-chs',
  'zh-cht',
];
export function getAllDestinyManifestComponents(http, params) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net' + params.destinyManifest.jsonWorldContentPaths[params.language],
  });
}
export async function getDestinyManifestComponent(http, params) {
  const r = {
    method: 'GET',
    url:
      'https://www.bungie.net' +
      params.destinyManifest.jsonWorldComponentContentPaths[params.language][params.tableName],
  };
  try {
    return await http(r);
  } catch (e) {
    r.url += '?retry';
    try {
      return await http(r);
    } catch {
      throw e;
    }
  }
}
export async function getDestinyManifestSlice(http, params) {
  const downloadedTables = await Promise.all(
    params.tableNames.map(async (tableName) => {
      const tableContent = await getDestinyManifestComponent(http, {
        destinyManifest: params.destinyManifest,
        tableName,
        language: params.language,
      });
      return {
        tableName,
        tableContent,
      };
    })
  );
  const manifestSlice = {};
  for (const downloadedTable of downloadedTables) {
    manifestSlice[downloadedTable.tableName] = downloadedTable.tableContent;
  }
  return manifestSlice;
}
