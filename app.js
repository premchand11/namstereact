/*
hmr=hot module reload
file watcher algorhthim- c++
bundeling
minification
clean our code
dev and prod build
superfast
image optimisarion
code splitting
caching while devlopment
compatible with older verrsion
https on dev
port number
consistant hashing algorthim
zero config
transitvi dependecies imppppppppppppppppppppppppppppppppppp
tree shaking - removing unwanted




*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { id: "title",key:"h1" }, "heading1");
// const heading2 = React.createElement("h2", { id: "title",key:"h2" }, "heading2");
// const div = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);
const heading = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);
// react.createElemnt gives us object then it converts into html(dom)

// jsx=> javascript xml it uses react.createElement then it converts into html

// react eleemnt
const Title = ()=>(
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

// react component
//functional - new
//class based -old

const HeaderComponent = () => {
  return (
    <div>
      {1+2}
      {heading}
      {Title()}
      <h2 id="title" key="h1">
        Namaste React header component
      </h2>
      <h2 id="title" key="h2">
        Namaste React header component2
      </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); 
