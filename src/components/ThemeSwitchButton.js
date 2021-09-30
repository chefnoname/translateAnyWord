import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ThemeSwitchButton = ({ onClick }) => {
  return (
    <Box sx={{ width: "200px", margin: "auto" }}>
      <FormGroup>
        <FormControlLabel
          control={<Switch onClick={onClick} defaultChecked />}
          label="Switch Theme"
          sx={{ marginRight: "30px" }}
        />
      </FormGroup>
    </Box>
  );
};

export default ThemeSwitchButton;
