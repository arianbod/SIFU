import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import * as React from "react";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import Badge from "@mui/material/Badge";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsColor() {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 2,
        },
      }}
    >
      <Badge
        badgeContent={""}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <TwitterIcon sx={{ color: blue[500], fontSize: 60 }} />
      </Badge>

      <Badge
        badgeContent={"chat"}
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <TelegramIcon sx={{ color: blue[500], fontSize: 60 }} />
      </Badge>
      <Badge
        badgeContent={""}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <TelegramIcon sx={{ color: blue[500], fontSize: 60 }} />
      </Badge>
    </Box>
  );
}
