import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextOutput = ({ txt }) => {
  return (
    <Box
      sx={{
        mx: "-330px",
        my: "100px",
        width: "550px",
        height: "150px",
        bgcolor: "primary.textBox",
      }}
    >
      <Typography
        sx={{
          color: "primary.background",
          fontWeight: "bolder",
          textAlign: "center",
          my: "55px",
        }}
        variant="h5"
      >
        {txt}
      </Typography>
    </Box>
  );
};

export default TextOutput;
