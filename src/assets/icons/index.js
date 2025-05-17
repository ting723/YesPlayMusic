import SvgIcon from '../../components/SvgIcon.vue';

export default app => {
  app.component('svg-icon', SvgIcon);
  const icons = import.meta.glob('./*.svg', { eager: true });

  for (const iconPath in icons) {
    const iconName = iconPath.replace(/^\.\/(.*)\.svg$/, '$1');
    const iconComponent = icons[iconPath].default;
    app.component(`icon-${iconName}`, iconComponent);
  }
};
