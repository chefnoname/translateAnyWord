import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        my: "50px",
        width: "500px",
        borderBottom: "1px solid white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" color="secondary" sx={{ marginTop: "20px" }}>
        Translate Any Word!
      </Typography>
    </Box>
  );
};

export default Header;
