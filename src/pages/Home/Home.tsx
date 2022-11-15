import { Hero } from "./Hero/Hero"
import { Features } from "./Features/Features"
import { CallToAction } from "./CallToAction/CallToAction"
import { GeneralContainer } from "../../components"

const Footer = () => {
    return <h2>Footer</h2>
}

const EmailCapture = () => {
    return <h2>EmailCapture</h2>
}

const FrequentlyAskedQuestions = () => {
    return <h2>FAQ</h2>
}

export const Home = () => {
    return (
        <GeneralContainer>
            <Hero />
            <Features />
            <CallToAction />
            <FrequentlyAskedQuestions />
            <EmailCapture />
            <Footer />
        </GeneralContainer>
    )
}