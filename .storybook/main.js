module.exports = {
  addons: ['@storybook/addon-docs'],
  stories: [
    '../packages/q3-admin/**/containers/**/**.stories.jsx',
    '../packages/q3-admin/**/components/display/**.stories.jsx',
    '../packages/q3-admin/**/components/groups/**.stories.jsx',
    '../packages/q3-admin/**/components/main/**.stories.jsx',
    '../packages/q3-admin/**/components/menu/**.stories.jsx',
    '../packages/q3-admin/**/components/section/**.stories.jsx',
    '../packages/q3-admin/**/components/sidebar/**.stories.jsx',
    '../packages/q3-ui-cart/**.stories.jsx',
    '../packages/q3-ui-datatables/**.stories.jsx',
    '../packages/q3-ui-filters/**.stories.jsx',
    '../packages/q3-ui/**/authorship/**.stories.jsx',
    '../packages/q3-ui/**/breadcrumbs/**.stories.jsx',
    '../packages/q3-ui/**/card/*.stories.jsx',
    '../packages/q3-ui/**/collapsibleFieldLabel/**.stories.jsx',
    '../packages/q3-ui/**/list/*.stories.jsx',
    '../packages/q3-ui/**/map/*.stories.jsx',
    '../packages/q3-ui/**/searchBar/**.stories.jsx',
    '../packages/q3-ui/**/slider/**.stories.jsx',
    '../packages/q3-ui/**/splitButton/*.stories.jsx',
    '../packages/q3-ui-forms/**/builders/multistep.stories.jsx',
    '../packages/q3-ui-forms/**/builders/form/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/notify/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/persist/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/persistWatcher/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/validate/**.stories.jsx',
    '../packages/q3-ui-forms/**/builders/wrapper/**.stories.jsx',
    '../packages/q3-ui-forms/**/fields/autocomplete.stories.jsx',
    '../packages/q3-ui-forms/**/fields/chips.stories.jsx',
    '../packages/q3-ui-forms/**/fields/checkset.stories.jsx',
    '../packages/q3-ui-forms/**/fields/text.stories.jsx',
    '../packages/q3-ui-forms/**/fields/transfer.stories.jsx',
    '../packages/q3-ui-forms/**/fields/select.stories.jsx',
    '../packages/q3-ui-forms/**/presets/northAmericaRegionalSelect/*.stories.jsx',
    '../packages/q3-ui-forms/**/presets/provinceSelect/*.stories.jsx',
    '../packages/q3-ui-permissions/**.stories.jsx',
  ],
};