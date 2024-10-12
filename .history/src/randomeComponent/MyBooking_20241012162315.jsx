import Image from 'next/image';
import React from 'react';

const MyBooking = () => {
    return (
        <div>
            <Image
                src="www.mubo.com"
                width={100}
                height={100}
            />



<Image
                      className="rounded p-2"
                      src="https://i.postimg.cc/mZ0QPCKj/thai-8.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
        </div>
    );
};

export default MyBooking;