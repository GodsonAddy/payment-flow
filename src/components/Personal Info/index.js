import React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

function PersonalInfo() {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={4} display="flex" flexDirection="column">
        <Grid item xs={12} sm={12}>
          <Typography>Name</Typography>

          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            autoFocus
            placeholder="Opara Linus Ahmed"
            sx={{ color: "white" }}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography>Email</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            The purchase receipt would be sent this address
          </Typography>
          <TextField
            name="email"
            required
            fullWidth
            id="email"
            autoFocus
            placeholder="OparaLinusAhmed@devmail.com"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Box sx={{ mb: 8 }} />

          <Typography>Address1</Typography>

          <TextField
            name="address1"
            required
            fullWidth
            id="address1"
            autoFocus
            placeholder="The address of the user goes here"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography>Address2</Typography>

          <TextField
            name="address2"
            required
            fullWidth
            id="address2"
            autoFocus
            placeholder="and here"
          />
        </Grid>

        <Grid item>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            spacing={4}
          >
            <Grid item>
              <Typography>Local Government</Typography>

              <TextField
                name="localgov"
                required
                id="localgov"
                autoFocus
                placeholder="Surulere"
              />
            </Grid>
            <Grid item>
              <Typography>State</Typography>

              <FormControl sx={{ minWidth: 120 }}>
                <Select
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="Lagos">
                    <em>Lagos</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mt={5}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
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

export default PersonalInfo;
