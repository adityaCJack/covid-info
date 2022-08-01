import React from 'react';
import {
    Box,
    Text,
    Flex,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,

    Container,
} from '@chakra-ui/react';

//importing faq.json
import FAQ_LIST from "./faq.json"


export default function Faq({ index, setIndex }) {
    return (

        <Flex direction="column" p={4} mt="5">
            <Container maxW="3xl">
                <Box mb="8">
                    <Heading size="md">Frequently Asked Questions</Heading>
                </Box>
                <Accordion allowToggle index={index}>
                    {
                        FAQ_LIST.map((faq) => {
                            return (
                                <AccordionItem key={faq.id} name={`AccordionPanel.item-${faq.id}`}>
                                    <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                                        <Box flex="1" textAlign="left">
                                            <Text fontWeight="semibold">{faq.question}</Text>
                                        </Box>
                                    </AccordionButton>
                                    <AccordionPanel pb="4">
                                        {faq.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </Container>
        </Flex>

    )
}
