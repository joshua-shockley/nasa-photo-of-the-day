import React from 'react';
import styled from 'styled-components';
import logo from '../images/reactlogo.png';

function Footer() {
    const Linkh6 = styled.h6` 
    text-decoration: none;
    color: white;
    width: 50%;
    padding: 30px;
    margin: 10px auto;
    border-radius:15%;
    `;

    const Button = styled.button` 
    color: darkslategrey;
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

    const FooterImage = styled.img`
    width: 90px;
    height: auto;
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
                    <Button>
                        <a href="https://unsplash.com/@nypl?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge"f target="_blank" rel="noopener noreferrer" alt="link to the new yourk public library">Unsplash Link to New York Public Library</a>
                    </Button>
                    <p>This site is also brought to you by React!</p>
                   <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><FooterImage src={logo} alt="react logo"/></a>
                    <p>This page also brought to you by my undying love of SPACE</p>
                </Linkh6>
            </div>

        </div>
    );
}
export default Footer;