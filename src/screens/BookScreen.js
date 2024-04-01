import React from "react";
import { Box } from "@gluestack-ui/themed"
import BookList from "../components/BookList";
import sections from "../json/book_section.json";

const BookScreen = ({ navigation }) => {
    return (
        <Box bgColor="white" height="100%">
            <BookList
                sections={sections}
                navigation={navigation}
            />
        </Box>
    );
};

export default BookScreen;