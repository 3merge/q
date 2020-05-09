module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs', 
    '@storybook/addon-knobs/register',
  ],

  stories: [
    '../packages/q3-admin/**/containers/**/**.stories.jsx',
    '../packages/q3-admin/**/components/add/**.stories.jsx',
    '../packages/q3-admin/**/components/display/**.stories.jsx',
    '../packages/q3-admin/**/components/groups/**.stories.jsx',
    '../packages/q3-admin/**/components/main/**.stories.jsx',
    '../packages/q3-admin/**/components/menu/**.stories.jsx',
    '../packages/q3-admin/**/components/section/**.stories.jsx',
    '../packages/q3-admin/**/components/sidebar/**.stories.jsx',
    '../packages/q3-ui-cart/**.stories.jsx',
    '../packages/q3-ui-cart/**.stories.jsx',
    '../packages/q3-ui-datatables/**.stories.jsx',
    '../packages/q3-ui/**/address/**.stories.jsx',
    '../packages/q3-ui/**/alert/**.stories.jsx',
    '../packages/q3-ui/**/authorship/**.stories.jsx',
    '../packages/q3-ui/**/avatar/*.stories.jsx',
    '../packages/q3-ui/**/banner/**.stories.jsx',
    '../packages/q3-ui/**/bannerWithIntrusive/**.stories.jsx',
    '../packages/q3-ui/**/bannerWithOffset/**.stories.jsx',
    '../packages/q3-ui/**/breadcrumbs/**.stories.jsx',
    '../packages/q3-ui/**/card/*.stories.jsx',
    '../packages/q3-ui/**/creditCard/**.stories.jsx',
    '../packages/q3-ui/**/callToAction/*.stories.jsx',
    '../packages/q3-ui/**/clickableLogo/*.stories.jsx',
    '../packages/q3-ui/**/collapsibleFieldLabel/**.stories.jsx',
    '../packages/q3-ui/**/collapsiblePanel/**.stories.jsx',
    '../packages/q3-ui/**/loginPage/*.stories.jsx',
    '../packages/q3-ui/**/feature/**.stories.jsx',
    '../packages/q3-ui/**/gallery/**.stories.jsx',
    '../packages/q3-ui/**/header/*.stories.jsx',
    '../packages/q3-ui/**/iconMenu/*.stories.jsx',
    '../packages/q3-ui/**/list/*.stories.jsx',
    '../packages/q3-ui/**/map/*.stories.jsx',
    '../packages/q3-ui/**/nestedMenu/*.stories.jsx',
    '../packages/q3-ui/**/notice/*.stories.jsx',
    '../packages/q3-ui/**/notification/*.stories.jsx',
    '../packages/q3-ui/**/pagination/*.stories.jsx',
    '../packages/q3-ui/**/searchBar/**.stories.jsx',
    '../packages/q3-ui/**/slider/**.stories.jsx',
    '../packages/q3-ui/**/splitButton/*.stories.jsx',
    '../packages/q3-ui/**/subMenu/*.stories.jsx',
     '../packages/q3-ui/**/timeline/*.stories.jsx',
    '../packages/q3-ui/**/tour/**.stories.jsx',
    '../packages/q3-ui/**/upload/*.stories.jsx',
    '../packages/q3-ui-assets/**.stories.jsx',
    '../packages/q3-ui-forms/**/adapters/**/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/**/**.stories.jsx',
    '../packages/q3-ui-forms/**/fields/autocomplete.stories.jsx',
    '../packages/q3-ui-forms/**/fields/bool/**.stories.jsx',
    '../packages/q3-ui-forms/**/fields/chips.stories.jsx',
    '../packages/q3-ui-forms/**/fields/checkbox/**stories.jsx',
    '../packages/q3-ui-forms/**/fields/checkset/**stories.jsx',
    '../packages/q3-ui-forms/**/fields/optionsThreshold/**stories.jsx',
    '../packages/q3-ui-forms/**/fields/radio/**stories.jsx',
    '../packages/q3-ui-forms/**/fields/Text/**stories.jsx',
    '../packages/q3-ui-forms/**/fields/transfer.stories.jsx',
    '../packages/q3-ui-forms/**/fields/select.stories.jsx',
    '../packages/q3-ui-forms/**/presets/northAmericaRegionalSelect/*.stories.jsx',
    '../packages/q3-ui-forms/**/presets/provinceSelect/*.stories.jsx',
    '../packages/q3-ui-forms/**/presets/**.stories.jsx',
    '../packages/q3-components/**.stories.jsx',
    '../packages/q3-ui-permissions/**.stories.jsx',
    '../packages/q3-ui-repeater/**.stories.jsx',
  ],
};