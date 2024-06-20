import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import backgroundImage from "../../assets/images/background.png";

const EmptyLayout = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: "100vh",
                backgroundRepeat: "repeat",
            }}
        >
            <Outlet />
        </Box>

    );
};

export default EmptyLayout;
