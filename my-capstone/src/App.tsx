import { GlobalStyle } from './styles/globalStyle';

import { Article } from './pages/Article';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <GlobalStyle />
      <Article />
    </div>
  );
}

export default App;
