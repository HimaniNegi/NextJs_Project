import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

const StatusCards = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "10px",
              borderLeft: "6px solid purple",
              borderRadius: " 10px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "0" }}
            >
              <CardContent
                sx={{
                  paddingBottom: "16px!important",
                }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    margin: "0",
                    // paddingBottom: "5px",
                    color: "#a900a9",
                  }}
                >
                  Earnings (Monthly)
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    padding: "0",
                    fontSize: "18px",
                    color: "#383838",
                    fontWeight: "600",
                  }}
                >
                  $40,000
                </Typography>
              </CardContent>
            </Box>
            <IconButton
              size="small"
              aria-label="settings"
              className="card-more-options"
              sx={{ color: "#383838" }}
            >
              <EventIcon />
            </IconButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "10px",
              borderLeft: "6px solid #00bd55",
              borderRadius: " 10px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "0" }}
            >
              <CardContent
                sx={{
                  paddingBottom: "16px!important",
                }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    margin: "0",
                    color: "#00bd55",
                  }}
                >
                  Earnings (Annual)
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    padding: "0",
                    fontSize: "18px",
                    color: "#383838",
                    fontWeight: "600",
                  }}
                >
                  $2,40,000
                </Typography>
              </CardContent>
            </Box>
            <IconButton
              size="small"
              aria-label="settings"
              className="card-more-options"
              sx={{ color: "#383838" }}
            >
              <CastForEducationOutlinedIcon />
            </IconButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "10px",
              borderLeft: "6px solid #e00080",
              borderRadius: " 10px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "0" }}
            >
              <CardContent
                sx={{
                  paddingBottom: "16px!important",
                }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    margin: "0",
                    color: "#e00080",
                  }}
                >
                  Tasks
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    padding: "0",
                    fontSize: "18px",
                    color: "#383838",
                    fontWeight: "600",
                  }}
                >
                  $1,40,000
                </Typography>
              </CardContent>
            </Box>
            <IconButton
              size="small"
              aria-label="settings"
              className="card-more-options"
              sx={{ color: "#383838" }}
            >
              <AssignmentOutlinedIcon />
            </IconButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "10px",
              borderLeft: "6px solid #ded10c",
              borderRadius: " 10px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "0" }}
            >
              <CardContent
                sx={{
                  paddingBottom: "16px!important",
                }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                    margin: "0",
                    color: "#d8cb00",
                  }}
                >
                  Pending Requests
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    padding: "0",
                    fontSize: "18px",
                    color: "#383838",
                    fontWeight: "600",
                  }}
                >
                  $50,000
                </Typography>
              </CardContent>
            </Box>
            <IconButton
              size="small"
              aria-label="settings"
              className="card-more-options"
              sx={{ color: "#383838" }}
            >
              <PendingActionsOutlinedIcon />
            </IconButton>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default StatusCards;
