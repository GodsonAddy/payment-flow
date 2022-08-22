import React from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function Pay() {
  const navigate = useNavigate();
  return (
    <Box className="main-page">
      <CssBaseline />
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pt={10}
      >
        <Grid item>
          <Card>
            <CardContent>
              <Grid
                container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                py={5}
                px={10}
              >
                <Grid item>
                  <CheckIcon sx={{ color: "green" }} />
                </Grid>

                <Grid item mt={5}>
                  <Typography variant="h4" sx={{ color: "primary.main" }}>
                    Purchase Completed
                  </Typography>
                </Grid>
                <Grid item mt={3}>
                  <Typography variant="body2">
                    Please check your email for details concerning this
                    transaction
                  </Typography>
                </Grid>
                <Grid item mt={3}>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => navigate("/")}
                  >
                    Return home
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Pay;
