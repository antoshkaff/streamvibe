import React from 'react';
import styles from './DevicesList.module.css';
import Device from '@/pages/Home/components/Devices/components/Device/Device.jsx';
import smartPhoneIcon from './assets/smartphone.svg';
import tabletIcon from './assets/tablet.svg';
import smartTvIcon from './assets/smartTv.svg';
import laptopIcon from './assets/laptop.svg';
import consoleIcon from './assets/console.svg';
import vrIcon from './assets/vr.svg';

const DevicesList = () => {
    const devices = [
        {
            iconSrc: smartPhoneIcon,
            title: 'Smartphones',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
        {
            iconSrc: tabletIcon,
            title: 'Tablet',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
        {
            iconSrc: smartTvIcon,
            title: 'Smart TV',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
        {
            iconSrc: laptopIcon,
            title: 'Laptops',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
        {
            iconSrc: consoleIcon,
            title: 'Gaming Consoles',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
        {
            iconSrc: vrIcon,
            title: 'VR Headsets',
            description:
                'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
        },
    ];

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {devices.map(({ iconSrc, title, description }, index) => (
                    <li key={index}>
                        <Device
                            iconSrc={iconSrc}
                            title={title}
                            description={description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DevicesList;
