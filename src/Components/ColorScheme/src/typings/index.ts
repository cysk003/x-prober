export interface colorSchemeProps {
  name: string
  isDark:boolean
  color: string
  fg: string
  bg: string
  'selection.fg': string
  'selection.bg': string
  'html.bg': string
  'body.fg': string
  'body.bg': string
  'a.fg': string
  'app.border': string
  'app.fg': string
  'app.bg': string
  'title.fg': string
  'title.bg': string
  'sysLoad.fg': string
  'sysLoad.bg': string
  'card.border': string
  'card.fg': string
  'card.bg': string
  'card.hover.bg': string
  'card.legend.fg': string
  'card.legend.bg': string
  'progress.fg': string
  'progress.bg': string
  'progress.value.fg': string
  'progress.value.bg': string
  'progress.value.after.bg': string
  'progress.value.before.bg': string
  'network.stats.upload': string
  'network.stats.download': string
  'network.node.fg': string
  'network.node.bg': string
  'network.node.border': string
  'network.node.row.bg': string
  'ping.button.fg': string
  'ping.button.bg': string
  'ping.result.fg': string
  'ping.result.bg': string
  'status.success.fg': string
  'status.success.bg': string
  'status.error.fg': string
  'status.error.bg': string
  'search.fg': string
  'search.bg': string
  'search.hover.fg': string
  'search.hover.bg': string
  'benchmark.ruby.fg': string
  'benchmark.ruby.bg': string
  'footer.fg': string
  'footer.bg': string
  'nav.fg': string
  'nav.bg': string
  'nav.hover.fg': string
  'nav.hover.bg': string
  'nav.border': string
  'starMe.fg': string
  'starMe.bg': string
  'starMe.hover.fg': string
  'starMe.hover.bg': string
  'toast.fg': string
  'toast.bg': string
}
export interface colorSchemesProps {
  [name: string]: colorSchemeProps
}
