import React from 'react';
import styled from 'styled-components';


function Footer() {
    const Linkh6 = styled.h6` 
    
    `;

    const Footerdiv = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 3%;
    `;

    return(
        <div>
            <Footerdiv>
                <h2>Can you feel the...(snickers to self)... <strong>SPACE</strong>?!</h2>
                <h3>We hope you enjoyed this! It was fun to be here.</h3>
                <h4>Thanks for viewing this page today!</h4>
                <h5>Shout out to Star Wars!!</h5>
                <h6>Have a good one..Bye!</h6>
            </Footerdiv>
            <div >
                <Linkh6 className="theVeryBottom">
                    <p>We'd like to thank Unsplash for allowing the use of contributions to sites like this see link below to checkout some of the amazing images they have that are open to the public for use.</p>
                    <a href="https://unsplash.com/@nypl?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"f target="_blank" rel="noopener noreferrer" alt="link to the new yourk public library">Unsplash Link to New York Public Library</a>
                </Linkh6>
            </div>

        </div>
    );
}
export default Footer;