export type MenuType = {
  icon: JSX.Element;
  name: string;
  path: string;
  submenu?: Array<MenuType>;
};
