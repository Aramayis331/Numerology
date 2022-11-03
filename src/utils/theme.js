import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorRight: {
          width: "500px",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        },
      },
    },
  },
});
