import React from 'react';
import spring2023squarelogo from '../images/spring2023squarelogo.png'

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>To Be Announced</h1>
                      
                <br/>
                <h2> schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'>October 20, 2023 - 9:00 AM PST </p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'>October 22, 2023 -  9:00 PM PST </p>
                    <br/>
                    <p className=''> Winners Announced:</p>
                    <p className='orange-body-text'>November 5, 2023 at 5:00 PM PST</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    <p className='orange-body-text'></p>
                    
                <h2> judges</h2>
                    <br/> 
                    <p className='orange-body-text'>TBA </p> 
                    <br/> 

                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> theme </h2>
                    <br/> 
                    <p className='orange-body-text'>Education</p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
