import React from 'react'
import ConditionalIf from './ConditionalIf'
import ConditionalRendering from './ConditionalRendering'
import ConditionalShortCircuiting from './ConditionalShortCircuiting'

const ConditionalCleanJSX = () => {
    const option = ''
    let content = <h1>option is null, not (a, b,c, d)</h1>

    //logic
    if (option=== 'a') {
        content = <ConditionalIf/>
    }
    else if (option === 'b') {
        content = <ConditionalRendering/>
    }else if(option === 'c'){content = <ConditionalShortCircuiting/>}
    
  return (
    <div>
        <h1>which component to render already in js. JSX is clean now</h1>
      {content}
    </div>
  )
}

export default ConditionalCleanJSX
