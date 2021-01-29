import React from 'react'

import styled from 'styled-components'

const HistoryBlock = styled.blockquote`
  padding: 10px 30px 10px 30px;
  margin: 30px 0;
  border-radius: 5px;
  background: lightgreen;
  color: black;
  p {
    margin: 5px 0 10px;
  }
`

export default (props) => {
    const {type, title, children} = props;
    const jsx = children
    if (type === "tip") {
        return (<HistoryBlock>
                <div>
                    <em>{title}</em>
                </div>
                {jsx}
            </HistoryBlock>);
    } else {
        return jsx;
    }
}
