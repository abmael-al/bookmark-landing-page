import { Hero } from "./Hero/Hero"
import { Features } from "./Features/Features"
import { CallToAction } from "./CallToAction/CallToAction"
import { EmailCapture } from "./EmailCapture/EmailCapture"

const Footer = () => {
    return <h2>Footer</h2>
}

const FrequentlyAskedQuestions = () => {
    return <h2>FAQ</h2>
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