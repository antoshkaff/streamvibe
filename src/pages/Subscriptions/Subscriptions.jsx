import React from 'react';
import PlanList from '@/components/features/PlanList/PlanList.jsx';
import SectionTabs from '@/components/features/SectionTabs/SectionTabs.jsx';
import Container from '@/components/UI/Container/Container.jsx';
import styles from './Subscriptions.module.css';
import Section from '@/components/UI/Section/Section.jsx';
import Table from '@/components/UI/Table/Table.jsx';
import { useBreakpoint } from '@/hooks/useBreakpoint.js';
import PlanCard from '@/pages/Subscriptions/components/PlanCard/PlanCard.jsx';

const Subscriptions = () => {
    const columns = [
        {
            value: 'Features',
            key: 'features',
        },
        {
            value: 'Basic',
            key: 'basic',
        },
        {
            value: 'Standard',
            label: 'Popular',
            key: 'standard',
        },
        {
            value: 'Premium',
            key: 'premium',
        },
    ];
    const rows = [
        {
            features: 'Price',
            basic: '$9.99/Month',
            standard: '$12.99/Month',
            premium: '$14.99/Month',
        },
        {
            features: 'Content',
            basic: 'Access to a wide selection of movies and shows, including some new releases.',
            standard:
                'Access to a wider selection of movies and shows, including most new releases and exclusive content',
            premium:
                'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        },
        {
            features: 'Devices',
            basic: 'Watch on one device simultaneously',
            standard: 'Watch on Two device simultaneously',
            premium: 'Watch on Four device simultaneously',
        },
        {
            features: 'Free Trail',
            basic: '7 Days',
            standard: '7 Days',
            premium: '7 Days',
        },
        {
            features: 'Cancel Anytime',
            basic: 'Yes',
            standard: 'Yes',
            premium: 'Yes',
        },
        {
            features: 'HDR',
            basic: 'No',
            standard: 'Yes',
            premium: 'Yes',
        },
        {
            features: 'Dolby Atmos',
            basic: 'No',
            standard: 'Yes',
            premium: 'Yes',
        },
        {
            features: 'Ad - Free',
            basic: 'No',
            standard: 'Yes',
            premium: 'Yes',
        },
        {
            features: 'Offline Viewing',
            basic: 'No',
            standard: 'Yes, for select titles.',
            premium: 'Yes, for all titles.',
        },
        {
            features: 'Family Sharing',
            basic: 'No',
            standard: 'Yes, up to 5 family members.',
            premium: 'Yes, up to 6 family members.',
        },
    ];
    const isLaptop = useBreakpoint(1024);

    return (
        <main>
            <Container className={styles.pageContent}>
                <SectionTabs
                    title={`Choose the plan that's right for you`}
                    subTitle={`Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}
                    tabs={[
                        {
                            label: 'Monthly',
                            component: <PlanList variant={'monthly'} />,
                        },
                        {
                            label: 'Yearly',
                            component: <PlanList variant={'yearly'} />,
                        },
                    ]}
                    id={'plans'}
                />
                {isLaptop ? (
                    <SectionTabs
                        title={`Compare our plans and find the right one for you`}
                        subTitle={`StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.`}
                        tabs={[
                            {
                                label: 'Basic',
                                component: <PlanCard variant={'basic'} />,
                            },
                            {
                                label: 'Standard',
                                component: <PlanCard variant={'standard'} />,
                            },
                            {
                                label: 'Premium',
                                component: <PlanCard variant={'premium'} />,
                            },
                        ]}
                        isWideButtons={true}
                        id={'features'}
                    />
                ) : (
                    <Section
                        title={`Compare our plans and find the right one for you`}
                        subTitle={`StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.`}
                        id={'features'}
                    >
                        <Table columns={columns} rows={rows} />
                    </Section>
                )}
            </Container>
        </main>
    );
};

export default Subscriptions;
