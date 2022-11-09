const Footer = () => {
    return <h1>Footer</h1>
}

const EmailCapture = () => {
    return <h1>EmailCapture</h1>
}

const FrequentlyAskedQuestions = () => {
    return <h1>FAQ</h1>
}

const CallToAction = () => {
    return <h1>Call to Action</h1>
}

const Features = () => {
    return <h1>Features</h1>
}

const Hero = () => {
    return <h1>Hero</h1>
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