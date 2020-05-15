import { getDestinyManifest } from './lib/destiny2/api.js';

const fakeHttp = async (config) => console.log(config.url);

getDestinyManifest(fakeHttp);
