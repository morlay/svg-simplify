import * as path from "path";
import * as fs from "fs";
import * as _ from "lodash";
import * as packageJSON from "../package.json";
import * as lerna from "../lerna.json";

interface IPackageJSON {
  version: string;
  name: string;
  main: string;
  bin: {
    [key: string]: string;
  };
  dependencies: {
    [key: string]: string | boolean;
  };
  packages?: {
    [key: string]: IPackageJSON;
  };
}

const sortObject = (obj: Object) =>
  _.pick(obj, _.sortBy(_.keys(obj)));

const generatePackages = (pkgJSON: IPackageJSON) =>
  _.mapValues(pkgJSON.packages, (subPkgJSON: IPackageJSON, name: string) =>
    sortObject({
      name,
      version: lerna.version,
      ..._.pick(pkgJSON, ["license", "engines"]),
      ...subPkgJSON,
      dependencies: _.pick(pkgJSON.dependencies, _.keys(subPkgJSON.dependencies)),
    }));

const packages = generatePackages(packageJSON);

_.forEach(packages, (pkgJSON: IPackageJSON, key: string) => {
  fs.writeFileSync(
    path.join(process.cwd(), "packages", key, "package.json"),
    new Buffer(JSON.stringify(pkgJSON, null, 2)),
  );
});
