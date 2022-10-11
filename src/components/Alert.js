import React from "react";

// Yha props.alert && <div> islie likha he kyuki hmare props.alert ki intial value null he. kyuki null ke koi type ya msg nhi  
// ho skte to props.alert.type and props.alert.msg error se rhe he.
// neeche wali cheez krne se agr alert null hoga to vo neexhe ke html pr jaega hi nhi or alert show hi nhi hoga or agr alert
// null nhi hua to html pr jaega or baaki cheeze execute hogi

export default function Alert(props) {

    //function to capitalize the first letter of any word
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    // props.alert && <div>
    //   <div
    //     className={`alert alert-${props.alert.type} alert-dismissible fade show`}
    //     role="alert"
    //   >
    //     <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
    //   </div>
    // </div>
    
    <div style={{height: '50px'}}>
      {props.alert && <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
        </div>
      </div>}
    </div>
  );
}