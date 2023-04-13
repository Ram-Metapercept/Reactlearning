import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function RecursiveComponent({ data}) {
    const [showNested, setShowNested] = useState({});
 console.log(data)
    // handle show/hide functionality
    const toggleNested = (id) => {
      setShowNested({ ...showNested, [id]: !showNested[id] });
    };
 
    return (
      <div style={{ paddingLeft: "20px" }}>
        {data.map((parent) => {
          return (
            <div key={parent.id}>
              <button onClick={() => toggleNested(parent.id)}>
                {parent.name}
              </button>
 
              {/* Updating the display property using the showNested state */}
              <div style={{ display: !showNested[parent.id] ? "none" : "block" }}>
                {parent.children && (
                  <RecursiveComponent data={parent.children} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
 




// export default function RecursiveComponent({ data }) {
//   const [showNested, setShowNested] = useState({});


//   // handle show/hide functionality
//   const toggleNested = (id) => {
//     setShowNested({ ...showNested, [id]: !showNested[id] });
//   };


//   return (
//     <Accordion>
//       {data.map((parent) => (
//         <Card key={parent.id}>
//           <Card.Header>
//             <Accordion.Toggle
//               as={Button}
//               variant="link"
//               eventKey={parent.id}
//               onClick={() => toggleNested(parent.id)}
//             >
//               {parent.name}
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey={parent.id}>
//             <Card.Body>
//               {parent.children && (
//                 <RecursiveComponent data={parent.children} />
//               )}
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       ))}
//     </Accordion>
//   );
// }
