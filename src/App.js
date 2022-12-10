import { Button, styled, Typography } from "@mui/material";
import { Settings, Add } from "@mui/icons-material";
function App() {
  const BlButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#fff",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  });

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add New Post
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>

      {/* <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#fff",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
          },
        }}
      >
        My Button
      </Button> */}

      <BlButton>My Button</BlButton>
      <BlButton>Another Button</BlButton>
    </div>
  );
}

export default App;
