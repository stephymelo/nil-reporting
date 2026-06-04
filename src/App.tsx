import { useState, useEffect } from 'react'
import IAPage from './components/IAPage'
import CampaignPage from './components/CampaignPage'
import PRCampaignPage from './components/PRCampaignPage'
import B2BPolicyPage from './components/B2BPolicyPage'

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
  if (route === '/b2b-policy') return <B2BPolicyPage />
  return <IAPage />
}
