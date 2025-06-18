type MultipleCategoryItem = {
  name: string;
  path: string;
};

export type MultipleCategoryProps = {
  trigger: MultipleCategoryItem;
  items: MultipleCategoryItem[];
  applyNavLinkStyle: (props: { isActive: boolean }) => string;
};
