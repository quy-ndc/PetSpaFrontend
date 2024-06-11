import React, { useState } from "react";
import "./clinical-page.css";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface ClinicalPageServiceProp {
  name: string;
  desc: string;
}

const ClinicalPageSerive: React.FC<ClinicalPageServiceProp> = ({
  name,
  desc,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
    {/* <button></button> */}
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              {name}
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>{desc}</Typography>
            </Popover>

    </>
  );
};

export default ClinicalPageSerive;
