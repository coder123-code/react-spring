{/* real import { Typography } from "@mui/material";
export default function HomePage() {
    
    
return (
<Typography variant="h2">Home Page</Typography>
)
}
*/}
import { Typography } from "@mui/material";
import { Page } from "../../layout/App";
  // Make sure this path matches your file structure

interface Props {
  onNavigate: (page: Page, productId?: number) => void;
}

export default function HomePage({ onNavigate }: Props) {    
  return (
    <Typography variant="h2">Home Page</Typography>
  );
}
