import '../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/components/Form.css';

import { FormProvider } from '../contexts/FormContext';

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;