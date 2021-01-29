// src/CodeBlock.js
import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import styled from 'styled-components'

const AutoWrapPre = styled.pre`
    overflow: auto;
`

export default ({language, children}) => {
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <AutoWrapPre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </AutoWrapPre>
      )}
    </Highlight>
  )
}
