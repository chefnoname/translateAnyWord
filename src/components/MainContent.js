import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Dropdown from "./Dropdown";
import ThemeSwitchButton from "./ThemeSwitchButton";

const MainContent = () => {
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          mx: "330px",
          width: "800px",
          // height: "1000px",
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "pink",
          color: "primary.main",
        }}
      >
        <form
          style={{ marginRight: "30px", width: "300px", color: "inherit" }}
          onSubmit={submitHandler}
        >
          <TextField
            id="filled-basic"
            label="Type Here..."
            variant="filled"
            sx={{ width: "450px" }}
            autoFocus={true}
            inputProps={{
              style: { fontSize: 20, color: "#1976D2" },
            }}
            onChange={inputHandler}
            color="primary"
          />
        </form>
        <Dropdown onSubmit={textInput} />
      </Box>
    </>
  );
};

export default MainContent;
