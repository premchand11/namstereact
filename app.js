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
consistant hashing
zero config
transitvi dependecies imppppppppppppppppppppppppppppppppppp


*/

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "heading1");
const heading2 = React.createElement("h2", { id: "title" }, "heading2");
const div = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
