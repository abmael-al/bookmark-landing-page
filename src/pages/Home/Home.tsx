import { Hero } from "./Hero/Hero"

const Footer = () => {
    return <h2>Footer</h2>
}

const EmailCapture = () => {
    return <h2>EmailCapture</h2>
}

const FrequentlyAskedQuestions = () => {
    return <h2>FAQ</h2>
}

const CallToAction = () => {
    return <h2>Call to Action</h2>
}

const Features = () => {
    return <h2>Features</h2>
}

export const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <CallToAction />
            <FrequentlyAskedQuestions />
            <EmailCapture />
            <Footer />
        </div>
    )
}