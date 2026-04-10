import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PitchPage from './pages/template/PitchPage';
import TaxbitPage from './pages/companies/TaxbitPage';
import RakutenPage from './pages/companies/RakutenPage';
import RyuPage from './pages/companies/RyuPage';
import StudioPage from './pages/companies/StudioPage';
import TalkiatryPage from './pages/companies/TalkiatryPage';
import EverantPage from './pages/companies/EverantPage';
import GcaiPage from './pages/companies/GcaiPage';
import MmcPage from './pages/companies/MmcPage';
import DesignPage from './pages/DesignPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PitchPage />} />
        <Route path="/taxbit" element={<TaxbitPage />} />
        <Route path="/rakuten" element={<RakutenPage />} />
        <Route path="/ryu" element={<RyuPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/talkiatry" element={<TalkiatryPage />} />
        <Route path="/everant" element={<EverantPage />} />
        <Route path="/gcai" element={<GcaiPage />} />
        <Route path="/mmc" element={<MmcPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}
