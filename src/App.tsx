import { useState, useEffect } from 'react'
import IAPage from './components/IAPage'
import CampaignPage from './components/CampaignPage'
import PRCampaignPage from './components/PRCampaignPage'
import B2BPolicyPage from './components/B2BPolicyPage'
import LandingPageProject from './components/LandingPageProject'
import NavMenu from './components/NavMenu'

function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash
}

function renderPage(route: string) {
  if (route === '/campaign') return <CampaignPage />
  if (route === '/merge-hl') return <PRCampaignPage />
  if (route === '/b2b-policy') return <B2BPolicyPage />
  if (route === '/landing-project') return <LandingPageProject />
  return <IAPage />
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <NavMenu />
      {renderPage(route)}
    </>
  )
}
