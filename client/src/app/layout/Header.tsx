{/*import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4, width: '100%' }}>
      <Toolbar>
        <Typography variant="h6">
          Sports Center
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
*/}

{/* theme*/}
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
 darkMode: boolean;
 handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
 return (
   <AppBar position="static" sx={{mb:4}}>
     <Toolbar>
       <Typography variant="h6">
         Sports Center
       </Typography>
       <Switch checked={darkMode} onChange={handleThemeChange} />
     </Toolbar>
   </AppBar>
 );
}