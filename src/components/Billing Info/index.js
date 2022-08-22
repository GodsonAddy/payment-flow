import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function BillingInfo() {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={4} display="flex" flexDirection="column">
        <Grid item xs={10} sm={10}>
          <Typography>Name on Card</Typography>

          <TextField
            name="name"
            required
            fullWidth
            id="name"
            autoFocus
            placeholder="Opara Linus Ahmed"
            sx={{ color: "white" }}
          />
        </Grid>
        <Grid item xs={10} sm={10}>
          <Typography>Card Type</Typography>

          <FormControl fullWidth>
            <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="Visa">
                <em>Visa</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item xs={6}>
              <Typography>Card Details</Typography>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                autoFocus
                placeholder="  44960  44960  44960  44960"
                sx={{ color: "white" }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography>Card Details</Typography>
              <TextField
                name="name"
                required
                id="name"
                autoFocus
                placeholder="  04  /  23"
                sx={{ color: "white" }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography>Card Details</Typography>
              <TextField
                name="name"
                required
                id="name"
                autoFocus
                placeholder="923"
                sx={{ color: "white" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item mt={5}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
          >
            <Grid item xs={6} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ color: "white" }}
              >
                Next
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button variant="text" color="primary" fullWidth>
                Cancel Payment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BillingInfo;
