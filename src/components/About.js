//jo bhi commented he vo sb ek saath he

// import React, {useState} from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    // const handleDarkMode = () => {
    //     if(myStyle.color === 'black')
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    // <div className="container" style={myStyle}>
    <div className="container my-4" style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}>
        <h2 className="my-3">About Us</h2>
      {/* <div className="accordion" id="accordionExample" style={myStyle}> */}
      <div className="accordion" id="accordionExample" style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            //   style={myStyle}
              style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={myStyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}>
              TextUtills gives you a way to analyze your text quickly and efficiently. Be it word count, character count or few other functions. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            //   style={myStyle}
              style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}
            >
              <strong>Free to Use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={myStyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}>
              TextUtills is a free character counter tool that provides instant character count and word count statistics for a given text. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            //   style={myStyle}
              style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}
            >
              <strong>Browser compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            {/* <div className="accordion-body" style={myStyle}> */}
            <div className="accordion-body" style={{backgroundColor: props.color, color: props.mode==='light' ? 'black' : 'white'}}>
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button className="btn btn-primary mx-1" id="dark" onClick={handleDarkMode}>{btntext}</button>
      </div> */}
    </div>
  );
}
