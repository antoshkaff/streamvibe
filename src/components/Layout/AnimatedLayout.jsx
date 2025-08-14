import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';

const AnimatedLayout = ({ children }) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
                type: 'spring',
                stiffness: 50,
                mass: 1,
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedLayout;
