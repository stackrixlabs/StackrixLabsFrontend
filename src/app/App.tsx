import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { appTheme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
