/** @jsx jsx */
import { jsx } from 'theme-ui'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { Styled, ThemeProvider } from 'theme-ui'

import defaultTheme from '~theme'
import components from '~components'
import Notice from '../components/Notice'

const Theme = ({ children }) => {
  const config = useConfig()
  const allComponents = {
      ...components,
      Notice
  }
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={allComponents}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export const enhance = theme(
  defaultTheme,
  ({
    mode = 'light',
    showPlaygroundEditor = true,
    showLiveError = true,
    ...config
  }) => ({
    ...config,
    showLiveError,
    showPlaygroundEditor,
    initialColorMode: mode,
  })
)

export default enhance(Theme)
