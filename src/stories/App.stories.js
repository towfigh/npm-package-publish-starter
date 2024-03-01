import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { Button } from "../components";
import { Input } from "../components";

// const stories = storiesOf("My App Stories", module);

// stories.add("App", () => {
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");

//   return (
//     <div>
//       <h1>App Story Example</h1>

//       <Input
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <Button>Publish Your Package</Button>
//     </div>
//   );
// });

// stories.add("Story #2", () => {
//   return (
//     <div className="form">
//       <h1>Story #2 Example</h1>
//     </div>
//   );
// });

export default {
  component: Button,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
