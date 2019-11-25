import React, { useState, useEffect } from 'react';
import {
    MainWrapper,
    Button,
    WebsiteWrapper,
    UserWrapper,
    UserAttribute
} from './Main.style';
import { Spinner } from '../';
import fetchData from '../../services/APIService';

const Main = () => {
    const [data, setData] = useState({});
    const [userId, setUserId] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isDotCom, setIsDotCom] = useState(false);

    useEffect(() => {
        // TODO add here the fetchData, handling the loading and the error.
        // If the API returns an error we have to reset the userId to 1
        setIsLoading(true);
        fetchData(userId)
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(() => setUserId(1));
    }, [userId]);

    useEffect(() => {
        // TODO add here the check if the user has a .com website and
        // update the isDotCom state
        if (Object.values(data).length > 0) {
            const dotCom = Object.values(data).filter(
                value => value.indexOf && value.indexOf('.com') !== -1
            );
            setIsDotCom(dotCom.length > 0);
        }
    }, [data]);

    const setNewUserId = () => {
        // TODO inscrease the userId by 1
        setUserId(prevState => setUserId(prevState + 1));
    };

    return (
        <MainWrapper>
            <h2>EX6_useEffect_advanced</h2>
            <Button onClick={setNewUserId}>GET THE NEXT USER</Button>
            <WebsiteWrapper>{`has .com website: ${isDotCom}`}</WebsiteWrapper>
            {isLoading ? (
                <Spinner />
            ) : (
                <UserWrapper>
                    {Object.keys(data)
                        .filter(
                            element =>
                            element !== 'address' && element !== 'company'
                        )
                        .map(element => (
                            <UserAttribute key={element}>
                                {`${element}: ${data[element]}`}
                            </UserAttribute>
                        ))}
                </UserWrapper>
            )}
        </MainWrapper>
    );
};

export default Main;
