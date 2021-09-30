import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import TextOutput from "./TextOutput";

const languages = [
  ["Somali", "so"],
  ["Arabic", "ar"],
  ["Japanese", "ja"],
  ["Bengali", "bn"],
  ["Haitian Creole", "ht"],
  ["Estonian", "et"],
];

const Dropdown = ({ onSubmit, txt }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [translatedText, setTranslatedText] = useState("");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const getTranslatorInfo = async () => {
      const translatorInfo = await fetchInfo();
    };

    getTranslatorInfo();
  }, [lang]);

  const fetchInfo = async () => {
    const res = await fetch(
      `https://nlp-translation.p.rapidapi.com/v1/translate?text=${onSubmit}&to=${lang}&from=en`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
          "x-rapidapi-key":
            "5df39e551amsh10b3e39bf748022p1c9430jsn82d48232afc4",
        },
      }
    );
    const data = await res.json();

    const { translated_text } = data;

    whatLang(translated_text);
  };

  const whatLang = (obj) => {
    if (obj.so) {
      setTranslatedText(obj.so);
    } else if (obj.ar) {
      setTranslatedText(obj.ar);
    } else if (obj.ja) {
      setTranslatedText(obj.ja);
    } else if (obj.bn) {
      setTranslatedText(obj.bn);
    } else if (obj.ht) {
      setTranslatedText(obj.ht);
    } else if (obj.et) {
      setTranslatedText(obj.et);
    } else return;
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setLang("en");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="primary"
          variant="outlined"
          sx={{ mt: "15px", width: "140px", mx: "auto" }}
        >
          Languages
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {languages.map(([language, langCode], i) => (
            <MenuItem
              onClick={() => {
                handleClose();
                setLang(langCode);
              }}
              sx={{ color: "#0a1929", fontWeight: "bolder" }}
              key={i}
            >
              {language}
            </MenuItem>
          ))}
        </Menu>
        <TextOutput txt={translatedText} />
      </Box>
    </>
  );
};

export default Dropdown;
