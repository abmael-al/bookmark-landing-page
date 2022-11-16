import { Hero } from "./Hero/Hero"
import { Features } from "./Features/Features"
import { CallToAction } from "./CallToAction/CallToAction"
import { EmailCapture } from "./EmailCapture/EmailCapture"
import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions/FrequentlyAskedQuestions"

const Footer = () => {
    return <h2>Footer</h2>
}

export const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <CallToAction />
            <FrequentlyAskedQuestions />
            <EmailCapture />
            <Footer />
        </>
    )
}