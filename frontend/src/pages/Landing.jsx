import React from 'react'
import HeaderLanding from '../components/landing/HeaderLanding'
import FeatureLanding from '../components/landing/FeatureLanding'
import ScriptGeneratorLanding from '../components/landing/ScriptGeneratorLanding'
import VideoProjectLanding from '../components/landing/VideoProjectLanding'
import VoggAnalyticsLanding from '../components/landing/VoggAnalyticsLanding'
import VoggStockLanding from '../components/landing/VoggStockLanding'
import VoggWorkingSteps from '../components/landing/VoggWorkingSteps'
import PricingLanding from '../components/landing/PricingLanding'
import JoinVoggLanding from '../components/landing/JoinVoggLanding'
import FooterLanding from '../components/landing/FooterLanding'

const Landing = () => {
  return (
    <div>

        <HeaderLanding />
        <FeatureLanding />
        <ScriptGeneratorLanding />
        <VideoProjectLanding />
        <VoggAnalyticsLanding />
        <VoggStockLanding />
        <VoggWorkingSteps />
        <PricingLanding />
        <JoinVoggLanding />
        <FooterLanding /> 



    </div>
  )
}

export default Landing