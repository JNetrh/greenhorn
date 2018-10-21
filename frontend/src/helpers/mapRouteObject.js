export default routeObject =>
  Object.entries(routeObject)
    .map(([path, pathObject]) =>
      Object.entries(pathObject.sub).map(([subPath, subPathObject]) => ({
        path: `/${path}/${subPath}`,
        Component: subPathObject.Component,
        SideNav: routeObject,
      })),
    )
    .reduce((acc, curr) => [...acc, ...curr], []);
