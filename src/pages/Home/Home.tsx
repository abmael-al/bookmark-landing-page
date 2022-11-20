import { Hero } from './Hero/Hero';
import { Features } from './Features/Features';
import { CallToAction } from './CallToAction/CallToAction';
import { EmailCapture } from './EmailCapture/EmailCapture';
import { FrequentlyAskedQuestions } from './FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import { Footer } from './Footer/Footer';

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
  );
};
