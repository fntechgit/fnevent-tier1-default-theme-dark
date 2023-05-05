import defaultConfig from "@openeventkit/event-site/src/cms/config";
import { collections as defaultCollections } from "@openeventkit/event-site/src/cms/config";
import pagesCollection from "./collections/pagesCollection";

export const collections = defaultCollections.concat([
  pagesCollection
]);

const config = structuredClone(defaultConfig);
// TODO: move to env var
config.backend.repo = "fntechgit/fnevent-roblox-theme";
config.collections = collections;

export default config;