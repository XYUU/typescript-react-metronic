/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.scss' {
  const styles: any;
  export = styles;
}

declare module '@reach/router' {
  import ReachRouter from 'reach__router';
  export * from "reach__router";
  export interface RouterProps extends ReachRouter.RouterProps {
    mode?: 'hash' | 'history';
  }
  export class Router extends React.Component<RouterProps> { }
}