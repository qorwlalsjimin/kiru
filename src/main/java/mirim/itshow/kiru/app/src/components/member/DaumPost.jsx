import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';

const DaumPost = (props) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        
        const {addressType, bname, buildingName} = data
        if (addressType === 'R') {
            if (bname !== '') {
                extraAddress += bname;
            }
            if (buildingName !== '') {
                extraAddress += `${extraAddress !== '' && ', '}${buildingName}`;
            }
            fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`;
        }
        //fullAddress -> 전체 주소반환
        props.onComplete(fullAddress)
        
    }
    return (<DaumPostCode onComplete={handleComplete} className="post-code" />);
}
export default DaumPost;