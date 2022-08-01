import React from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex bg="#264653" boxShadow="base" p="2" mb="2">
            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                <Box p="2">
                    <Heading color="#fff" size="lg">COVID-19 INFO</Heading>
                </Box>
            </div>

        </Flex>
    )
}
