import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} exact/>
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;