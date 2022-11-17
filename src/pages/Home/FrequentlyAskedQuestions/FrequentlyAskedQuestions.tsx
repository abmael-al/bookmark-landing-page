import { GeneralContainer } from "../../../components"
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg"
import * as Accordion  from "@radix-ui/react-accordion"

import './frequentlyAskedQuestions.css';

interface AccordionItemBodyProps {
    question: string;
    answer: string;
}

const AccordionItemTriggerAndContent = ({ question, answer }: AccordionItemBodyProps) => {
    return (
        <>
            <Accordion.Header>
                <Accordion.Trigger className="accordion__trigger">
                    <p>{question}</p>
                    <ArrowIcon className="accordion__trigger__icon" />
                </ Accordion.Trigger>
            </ Accordion.Header>
            <Accordion.Content className="accordion__content">
                <p>{answer}</p>
            </ Accordion.Content>
        </>
    )
}

export const FrequentlyAskedQuestions = () => {
    return (
        <section className="faq">
            <GeneralContainer>
                <div className="faq__body">
                    <h2 className="heading heading-200">Frequently Asked Questions</h2>
                    <p className="faq__body__text">
                        Here are some of our FAQs. If you have any other 
                        questions you'd like answered please feel free to 
                        email us.
                    </p>
                </div>

                <Accordion.Root className="accordion__root" type="single" defaultValue="item-1" collapsible>
                    <Accordion.Item className="accordion__item" value="item-1">
                        <AccordionItemTriggerAndContent 
                            question="What is Bookmark?"
                            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Asperiores, sed assumenda accusantium dolores deserunt sapiente optio praesentium repellat, 
                            reiciendis necessitatibus sunt consequuntur impedit soluta ab eius error natus aliquam quis?"
                        />
                    </ Accordion.Item>
                    <Accordion.Item className="accordion__item" value="item-2">
                        <AccordionItemTriggerAndContent 
                            question="How can i request a new browser?"
                            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Asperiores, sed assumenda accusantium dolores deserunt sapiente optio praesentium repellat, 
                            reiciendis necessitatibus sunt consequuntur impedit soluta ab eius error natus aliquam quis?"
                        />
                    </ Accordion.Item>
                    <Accordion.Item className="accordion__item" value="item-3">
                        <AccordionItemTriggerAndContent 
                            question="Is there a mobile app?"
                            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Asperiores, sed assumenda accusantium dolores deserunt sapiente optio praesentium repellat, 
                            reiciendis necessitatibus sunt consequuntur impedit soluta ab eius error natus aliquam quis?"
                        />
                    </ Accordion.Item>
                    <Accordion.Item className="accordion__item" value="item-4">
                        <AccordionItemTriggerAndContent 
                            question="What about other Chromium browsers?"
                            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Asperiores, sed assumenda accusantium dolores deserunt sapiente optio praesentium repellat, 
                            reiciendis necessitatibus sunt consequuntur impedit soluta ab eius error natus aliquam quis?"
                        />
                    </ Accordion.Item>
                </ Accordion.Root>

                <a className="faq__action button button-thick button--primary--blue" href="/">More Info</a>
            </GeneralContainer>
        </section>
    )
}