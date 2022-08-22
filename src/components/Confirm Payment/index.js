import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ConfirmPayment() {
  const navigate = useNavigate();
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={4} display="flex" flexDirection="column">
        <Grid item>
          <Card sx={{ maxWidth: 600 }}>
            <CardContent>
              <Box
                color="white"
                sx={{
                  width: 600,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  display="flex"
                  justifyContent="space-around"
                  sx={{
                    backgroundColor: "#2F80ED",
                  }}
                >
                  <Grid item>
                    <Typography>Item Name</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Price</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="space-around"
                mt={3}
              >
                <Grid item>
                  <Typography>Data science and usability</Typography>
                </Grid>
                <Grid item>
                  <Typography>50,000.00</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="space-around"
                mt={3}
              >
                <Grid item>
                  <Typography>Shipping</Typography>
                </Grid>
                <Grid item>
                  <Typography>0.00</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ mb: 5 }} />

              <TextField
                name="name"
                required
                id="name"
                autoFocus
                placeholder="Total 50,000.00"
                sx={{ color: "white" }}
                fullWidth
                mt={5}
              />
            </CardContent>
          </Card>
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
                onClick={() => navigate("/payment-flow/pay")}
              >
                Pay
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

export default ConfirmPayment;
