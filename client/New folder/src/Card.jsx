import React from 'react';
import styled from 'styled-components';

const LetterContainer = styled.div`
  padding: 16px;
  background-color: #fff;
  text-align: center;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Signature = styled.p`
  font-size: 14px;
  margin-top: 16px;
`;

const Letter = () => {
    return (
        <LetterContainer>
            <Heading>My dearest Cupcake 🧁</Heading>
            <Paragraph>Happy one-year anniversary! I made this heart-shaped necklace 💖 with the petals from our first rose 🌹, to show you how much you mean to me. I hope you wear it with pride, knowing that it was made with all the love in my heart ❤️.
</Paragraph>
            <Paragraph>I love you more than anything in the world 🌍, and I'm so grateful to have you as my partner in crime 👯‍♂️. Here's to many more years of fun, laughter, and love 💕.</Paragraph>
            <Signature>Yours always, Pumpkin</Signature>
        </LetterContainer>
    );
};

export default Letter;