import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BoxPaper = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ ...style, width: 400 }}>
            <Typography variant="h1">Text in a modal</Typography>
            <Typography>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={handleClose}>hello</Button>
            {/* <ChildModal /> */}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BoxPaper;
