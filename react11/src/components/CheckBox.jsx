import React, { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  // checkbox grouping
  const [isSubject, setIsSubject] = useState({
    html: false,
    css: false,
    javascript: false
  });

  /*        FOR SELECT ALL       */

  // for select-all: we need to store the values of above Object into an array for mapping.
  // stores the all the values of each field of object isSubject
  // const arrayOfObjectValues = Object.values(isSubject);  // output: [false, false, false]

  // 'every()' returns a single boolean value if all the values inside the array is true; Boolean means truthy value
  const arrayOfObjectValues = Object.values(isSubject).every(Boolean);  // output: false
  
  function handleSelectAll(e) {
    setIsSubject({css: e.target.checked, html: e.target.checked, javascript: e.target.checked})
    // if(e.target.checked){
    //   setIsSubject({css:true, html: true, javascript: true})
    // }
    // else{
    //   setIsSubject({css:false, html: false, javascript: false})
    // }
    
  }



  //handle grouping
  function handleSubject(e) {
    const {name, checked} = e.target;
    setIsSubject({
        ...isSubject,
        [name]: checked
    })
  } 



   return (
    <div style={{ backgroundColor: "cyan", color: "black", userSelect: 'none'}}>
      <h1>Handling Checkboxes in React</h1>

      {/* checkbox id == htmlFor makes text clickable too */}
      <label htmlFor="tc">
        <input 
            type="checkbox" 
            name="tc" 
            id="tc" 
            checked={isChecked} 
            onChange={()=>{setIsChecked(!isChecked)}}
        />
        Terms & Conditions
      </label>
      {isChecked && <p>T&C applied!</p>}

        <br /><br />
      <h2>Multiple checkboxes as a group</h2>
      <div style={{userSelect:'none'}}>
        <label htmlFor="sa">
            <input type="checkbox" name="sa" id="sa" checked={arrayOfObjectValues} onChange={handleSelectAll}/>Select All
        </label>
        <label htmlFor="html">
            <input type="checkbox" name="html" id="html" checked={isSubject.html} onChange={handleSubject}/>HTML
        </label>
        <label htmlFor="css">
            <input type="checkbox" name="css" id="css" checked={isSubject.css} onChange={handleSubject}/>CSS
        </label>
        <label htmlFor="javascript">
            <input type="checkbox" name="javascript" id="javascript" checked={isSubject.javascript} onChange={handleSubject}/>JAVASCRIPT
        </label>

        {isSubject.html && <p>html is selected</p>}
        {isSubject.css && <p>css is selected</p>}
        {isSubject.javascript && <p>javascript is selected</p>}
      </div>
    </div>
  );
};

export default CheckBox;
