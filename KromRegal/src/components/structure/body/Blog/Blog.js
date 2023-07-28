import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import * as React from "react";
import { Box, Link, CardActionArea } from "@mui/material";
import { blue } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import Badge from "@mui/material/Badge";
import Lang from "../../../../lang/en.json";
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
            <Link href="https://twitter.com/KromSec" underline="none">
                <Badge
                    badgeContent={Lang.Connect.Buttons.Twitter} color="primary"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <CardActionArea>
                        <TwitterIcon sx={{ color: blue[500], fontSize: 60 }} />
                    </CardActionArea>
                </Badge>
            </Link>
            <Link href="https://t.me/KromSec404" underline="none">
                <Badge
                    badgeContent={Lang.Connect.Buttons.TelegramChannel}
                    color="primary"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <CardActionArea>
                        <TelegramIcon sx={{ color: blue[500], fontSize: 60 }} />
                    </CardActionArea>
                </Badge>
            </Link>
            <Link href="https://t.me/KromSecBot" underline="none">
                <Badge
                    badgeContent={Lang.Connect.Buttons.TelegramGroup} color="primary"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <CardActionArea>
                        <TelegramIcon sx={{ color: blue[500], fontSize: 60 }} />
                    </CardActionArea>
                </Badge>
            </Link>
        </Box>
    );
}
