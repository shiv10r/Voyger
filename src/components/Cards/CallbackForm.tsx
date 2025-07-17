import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import { LocationOn, Phone, Person, CalendarMonth } from "@mui/icons-material";
import styles from "./CallbackForm.module.css";

interface CallbackFormProps {
  open: boolean;
  handleClose: () => void;
}

const CallbackForm: React.FC<CallbackFormProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle className={styles.title}>📞 Request a Callback</DialogTitle>
      <DialogContent>
        <Card className={styles.card}>
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Full Name"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Pick-up Location"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Drop-off Location"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Preferred Date & Time"
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonth />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions className={styles.actions}>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CallbackForm;
