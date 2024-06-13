import React from "react";
import "./clinical-page.css";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const Button1 = styled("button")({
  color: "darkslategray",
  backgroundColor: "#faf7f1",
  padding: 8,
  borderRadius: 4,
});

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
      <Button1 aria-describedby={id} onClick={handleClick}>
        {name}
      </Button1>
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
