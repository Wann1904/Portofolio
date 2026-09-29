import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import RepairCaseDetailPage from './pages/RepairCaseDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/repair/:slug" element={<RepairCaseDetailPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
