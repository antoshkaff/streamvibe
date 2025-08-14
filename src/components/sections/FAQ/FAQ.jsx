import React from 'react';
import Section from '@/components/UI/Section/Section.jsx';
import Accordion from '@/components/features/Accordion/Accordion.jsx';
import SmartLink from '@/components/features/SmartLink/SmartLink.jsx';

const FAQ = () => {
    const FAQ = [
        {
            title: 'What is StreamVibe?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'How much does StreamVibe cost?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'What content is available on StreamVibe?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'How can I watch StreamVibe?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'How do I sign up for StreamVibe?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'What is the StreamVibe free trial?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'How do I contact StreamVibe customer support?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
        {
            title: 'What are the StreamVibe payment methods?',
            content:
                'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
        },
    ];

    return (
        <Section
            title={`Frequently Asked Questions`}
            subTitle={`Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.`}
            action={
                <SmartLink path={'/support#contact-us'} variant={'accent'}>
                    Ask a Question
                </SmartLink>
            }
            id={'faq'}
        >
            <Accordion items={FAQ} />
        </Section>
    );
};

export default FAQ;
