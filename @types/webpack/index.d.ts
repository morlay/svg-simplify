declare module "webpack/lib/LoaderOptionsPlugin" {
  interface LoaderOptionsPlugin {
    new (o: any): LoaderOptionsPlugin;
  }
  const loaderOptionsPlugin: LoaderOptionsPlugin;
  export= loaderOptionsPlugin;
}
