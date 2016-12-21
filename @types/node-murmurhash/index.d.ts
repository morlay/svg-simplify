declare module "node-murmurhash" {
  type hash = (str: string, seed: any) => string;

  const f: hash;
  export = f;
}
