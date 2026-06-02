import { useState, useEffect } from 'react'
import IAPage from './components/IAPage'
import CampaignPage from './components/CampaignPage'
import PRCampaignPage from './components/PRCampaignPage'

function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === '/campaign') return <CampaignPage />
  if (route === '/pr-campaign') return <PRCampaignPage />
  return <IAPage />
}
