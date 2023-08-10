"use client";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

const finalSpaceCharacters = [
  {
    name: "Earnings (Monthly)",
    amount: "$40,000",
    cardIcon: <EventIcon />,
    cardColor: "#a900a9",
  },
  {
    name: "EARNINGS (ANNUAL)",
    amount: "$2,40,000",
    cardIcon: <CastForEducationOutlinedIcon />,
    cardColor: "#00bd55",
  },
  {
    name: "TASKS",
    amount: "$1,40,000",
    cardIcon: <AssignmentOutlinedIcon />,
    cardColor: "#e00080",
  },
  {
    name: "PENDING REQUESTS",
    amount: "$50,000",
    cardIcon: <PendingActionsOutlinedIcon />,
    cardColor: "#d8cb00",
  },
];

const StatusCards = () => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  const theme = useTheme();
  return (
    <>
      <Grid container spacing={3} style={{ marginTop: "5px" }}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul
                style={{
                  display: "flex",
                  width: "100%",
                  paddingLeft: "24px",
                  margin: "0",
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(
                  ({ name, amount, cardIcon, cardColor }, index) => {
                    return (
                      <Draggable key={name} draggableId={name} index={index}>
                        {(provided) => (
                          <Grid
                            item
                            xs={12}
                            md={6}
                            lg={3}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingRight: "10px",
                                borderLeft: "6px solid",
                                borderColor: cardColor,
                                borderRadius: " 10px",
                                marginRight: "15px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  padding: "0",
                                }}
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
                                      color: cardColor,
                                    }}
                                  >
                                    {name}
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
                                    {amount}
                                  </Typography>
                                </CardContent>
                              </Box>
                              <IconButton
                                size="small"
                                aria-label="settings"
                                className="card-more-options"
                                sx={{ color: "#383838" }}
                              >
                                {cardIcon}
                              </IconButton>
                            </Card>
                          </Grid>
                        )}
                      </Draggable>
                    );
                  }
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </>
  );
};

export default StatusCards;
