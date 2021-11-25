import React, {useState, useEffect} from 'react';

const Student = ({ isThisFemale, firstName, lastName, house, initials }) => {
    const [jabbed, setJabbed] = useState(false);
    const [displayHouse, setDisplayHouse] = useState(false);

    const genderClassName = isThisFemale ? "item girls" : "item";
    const jabbedClassName = jabbed ? 'jabbed' : '';

    function onClickJabbed(event) {
        setJabbed(jabbed + 1);
    }

    useEffect(() => {
        if (jabbed > 0 && !displayHouse) {
            setTimeout(() => {
                console.log('HELLO', new Date())
                setDisplayHouse(true);
            }, 3000);
        }
    }, [jabbed, displayHouse])

    return (
        <li className={genderClassName + ' ' + jabbedClassName}>
            <div className='name'>
                {jabbed < 2 && <button onClick={onClickJabbed}>jab</button>}
                <div className='initials'>{initials}</div>
                <div>{firstName} {lastName}</div>
            </div>
            {displayHouse > 0 &&<div>{house}</div>}
        </li>
    )
}

export default Student;