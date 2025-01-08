import { Container, Typography, Paper } from '@mui/material';

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center">
          Login Page
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
