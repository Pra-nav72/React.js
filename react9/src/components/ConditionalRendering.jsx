import React, { useState } from 'react'
import ConditionalIf from './ConditionalIf'
import ConditionalTernary from './ConditionalTernary'
import ConditionalShortCircuiting from './ConditionalShortCircuiting'
import ConditionalCleanJSX from './ConditionalCleanJSX'

const ConditionalRendering = () => {

    const [toggleRender, setToggleRender] = useState(false);

    function handleToggle() {
        const btn = document.getElementById('btn');
        if (toggleRender) {
            setToggleRender(false)
            btn.textContent = "show conditional render type"
        }
        else{
            setToggleRender(true);
            btn.textContent = 'hide conditional render'
        }
    }
  return (
    <div className='bg-pink-200 text-black my-4 p-3'>
      <div className='bg-pink-500 p-2'>
            <h1 >Conditional Rendering</h1>
            <p>NEVER USE IF(conditional) INSIDE JSX</p><hr />

            <button 
            id='btn' 
            className='bg-cyan-300 px-4 py-2 my-4 rounded-md hover:bg-cyan-200 cursor-pointer' 
            onClick={handleToggle}>
                show conditional render type
            </button>
      </div>
      {
        toggleRender
        ?
        <div id='all-render'>
            <h2>conditional rendering using if</h2>
        <ConditionalIf /> <hr />
        <ConditionalTernary /> <hr />
        <ConditionalShortCircuiting /><hr />
        <ConditionalCleanJSX />
        <div>
            <p>you can do css conditional rendering. you can create light/dark theme using same conditional rendering by creating a class in css</p>
        </div>
        </div>
        :
        <div>...</div>
      }
    </div>
  )
}

export default ConditionalRendering
