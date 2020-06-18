import React from 'react';

const AboutComponent = () => {
    return ( 
        <Container>
            <Header>
                    Welcome to
                    HABBIT.
            </Header>
            <BodyText>
                {'\n'}
                Habbit is an interactive mobile game inspired by the legendary Tamagotchi, featuring a pet character that can grow and react based on user action and input. 
                {'\n'}{'\n'}
                Habbit’s aim is to promote healthy habits such as exercise, by making the pet’s growth and success dependent on your step count. 
                {'\n'}{'\n'}
                If you’re one of the millions who participate in a quest to hit the recommended 10,000 steps a day, your efforts won’t go unrewarded. 
                {'\n'}{'\n'}
                Regular activity, including walking, offers a number of health benefits, including a reduced risk of: 
                {'\n'}{'\n'}
            </BodyText>
            <ListText>
                Heart disease and stroke 
                {'\n'}{'\n'}
                High blood pressure 
                {'\n'}{'\n'}
                Diabetes 
                {'\n'}{'\n'}
                Obesity 
                {'\n'}{'\n'}
                Depression 
                {'\n'}{'\n'}
            </ListText>
            <BodyText>
                According to the American Council on Exercise, people who track their steps take an average of 2,500 more steps per day than those who don’t. Plus, with Habbit every step you take will help your Boi grow!
                {'\n'}{'\n'}
            </BodyText>
            <SubHeader>
                Enjoy looking after your Boi!
                {'\n'}
            </SubHeader>
            
        </Container>
     );
}
 
export default AboutComponent;