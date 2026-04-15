import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Ambassador = {
    id: number;
    name: string;
    contact: string;
    image: string;
    bio: string;
    salesRank: number;
    totalSales: number;
};

const ambassadors: Ambassador[] = [
    {
        id: 1,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 1,
        totalSales: 127
    },
    {
        id: 2,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 2,
        totalSales: 118
    },
    {
        id: 3,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 3,
        totalSales: 110
    },
    {
        id: 4,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 4,
        totalSales: 102
    },
    {
        id: 5,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 5,
        totalSales: 97
    },
    {
        id: 6,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 6,
        totalSales: 91
    },
    {
        id: 7,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 7,
        totalSales: 86
    },
    {
        id: 8,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 8,
        totalSales: 82
    },
    {
        id: 9,
        name: 'Placeholder',
        contact: 'placeholder@oliambassadors.com',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 9,
        totalSales: 78
    },
    {
        id: 10,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 10,
        totalSales: 74
    },
    {
        id: 10,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 10,
        totalSales: 74
    },{
        id: 10,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/Ambassadors/Megan.png',
        bio: 'Placeholder',
        salesRank: 10,
        totalSales: 74
    }
    
];

type AmbassadorCardProps = {
    ambassador: Ambassador;
    onViewProfile: (ambassador: Ambassador) => void;
};

const AmbassadorCard: React.FC<AmbassadorCardProps> = ({ ambassador, onViewProfile }) => {
    return (
        <article className="group relative overflow-hidden rounded-4xl border border-[#bb9c60]/62 bg-linear-to-b from-[#152d25] via-[#3f5b4f] to-[#152d25] p-6 shadow-[0_22px_58px_-24px_rgba(8,22,18,0.86)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_72px_-22px_rgba(8,22,18,0.92)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(245,239,228,0.24),transparent_58%)]" />
            <div className="pointer-events-none absolute -right-14 top-10 h-28 w-72 rotate-12 bg-linear-to-r from-transparent via-[#bb9c60]/58 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute -left-12 bottom-16 h-24 w-56 bg-linear-to-r from-transparent via-[#bb9c60]/30 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute bottom-5 left-10 h-px w-44 bg-linear-to-r from-transparent via-[#bb9c60]/90 to-transparent" />
            <div className="pointer-events-none absolute right-8 top-8 h-2 w-2 rounded-full bg-[#bb9c60]/70 shadow-[0_0_14px_2px_rgba(187,156,96,0.65)]" />

            <div className="relative mx-auto mt-6 mb-5 flex w-[90%] max-w-72 justify-center">
                <div className="relative z-10 h-80 w-80 overflow-hidden rounded-full border border-[#bb9c60]/62 bg-[#eae1d0]/10 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.16),0_0_0_1px_rgba(187,156,96,0.22)]">
                    <img
                        src={ambassador.image}
                        alt={`${ambassador.name} placeholder`}
                        className="h-full w-full scale-[1.08] translate-y-10 object-cover object-top"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="mb-6 text-center text-[#f5efe4]">
                <h3 className="text-3xl font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    {ambassador.name}
                </h3>
                <p className="mt-1 text-sm text-[#f5efe4]/88">OLI Ambassador</p>
                <p className="mt-2 text-sm text-[#f5efe4]/86">{ambassador.contact}</p>
            </div>

            <button
                type="button"
                onClick={() => onViewProfile(ambassador)}
                className="inline-flex w-full items-center justify-center rounded-full border border-[#bb9c60]/88 bg-linear-to-r from-[#bb9c60]/66 via-[#bb9c60]/42 to-[#5f7960]/40 px-4 py-2.5 text-sm font-semibold text-[#f8f3e9] shadow-[inset_0_0_0_1px_rgba(245,239,228,0.28),0_10px_25px_-14px_rgba(187,156,96,0.6)] backdrop-blur transition-all duration-300 hover:from-[#bb9c60]/80 hover:via-[#bb9c60]/58 hover:to-[#5f7960]/55"
            >
                View Profile
            </button>
        </article>
    );
};

type AmbassadorModalProps = {
    ambassador: Ambassador;
    onClose: () => void;
};

const AmbassadorModal: React.FC<AmbassadorModalProps> = ({ ambassador, onClose }) => {
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#152d25]/78 px-4 py-8 backdrop-blur-sm"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[2.25rem] border border-[#bb9c60]/62 bg-linear-to-b from-[#152d25] via-[#3f5b4f] to-[#152d25] p-6 text-[#f5efe4] shadow-[0_40px_120px_-32px_rgba(0,0,0,0.7)] md:p-8"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(245,239,228,0.26),transparent_58%)]" />
                <div className="pointer-events-none absolute -right-20 top-12 h-32 w-80 rotate-12 bg-linear-to-r from-transparent via-[#bb9c60]/60 to-transparent blur-2xl" />
                <div className="pointer-events-none absolute left-12 top-10 h-px w-40 bg-linear-to-r from-transparent via-[#bb9c60]/95 to-transparent" />
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close ambassador profile"
                    className="absolute right-4 top-4 rounded-full border border-[#bb9c60]/70 bg-[#152d25]/75 p-2 text-[#f8f3e9] transition-colors hover:bg-[#152d25]/92"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative mx-auto mt-6 mb-7 flex w-full max-w-sm justify-center">
                    <div className="pointer-events-none absolute left-1/2 top-3 h-72 w-72 -translate-x-1/2 rounded-full border border-[#bb9c60]/45 bg-[#eae1d0]/8 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.12),0_0_0_1px_rgba(187,156,96,0.16)]" />
                    <div className="pointer-events-none absolute left-1/2 top-5 h-68 w-68 -translate-x-1/2 rounded-full border border-[#bb9c60]/22 bg-transparent" />
                    <div className="relative z-10 h-80 w-80 overflow-hidden rounded-full border border-[#bb9c60]/62 bg-[#eae1d0]/10 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.16),0_0_0_1px_rgba(187,156,96,0.22)]">
                        <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-linear-to-r from-transparent via-[#bb9c60]/95 to-transparent" />
                        <img
                            src={ambassador.image}
                            alt={`${ambassador.name} placeholder`}
                            className="h-full w-full scale-[1.08] translate-y-10 object-cover object-top"
                        />
                    </div>
                </div>

                <div className="relative text-center">
                    <h3 className="text-3xl font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">{ambassador.name}</h3>
                    <p className="mt-1 text-sm text-[#f5efe4]/88">OLI Ambassador</p>
                    <p className="mt-2 text-sm text-[#f5efe4]/86">{ambassador.contact}</p>

                    <div className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">
                        <div className="rounded-2xl border border-[#bb9c60]/38 bg-[#2f463d]/44 p-4">
                            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#f5efe4]/76">Contact</p>
                            <p className="mt-1 text-sm text-[#f5efe4]">{ambassador.contact}</p>
                        </div>
                        <div className="rounded-2xl border border-[#bb9c60]/38 bg-[#2f463d]/44 p-4">
                            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#f5efe4]/76">Sales</p>
                            <p className="mt-1 text-sm text-[#f5efe4]">{ambassador.totalSales} closed sales</p>
                        </div>
                    </div>

                    <p className="mx-auto mt-5 max-w-xl text-sm italic leading-relaxed text-[#f5efe4]/90">
                        {ambassador.bio}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Ambassadors: React.FC = () => {
    const [selectedAmbassador, setSelectedAmbassador] = useState<Ambassador | null>(null);

    const closeModal = () => setSelectedAmbassador(null);

    useEffect(() => {
        const onEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', onEsc);
        return () => window.removeEventListener('keydown', onEsc);
    }, []);

    return (
        <section className="bg-linear-to-b from-[#eae1d0] via-[#f4efe5] to-[#eae1d0]/60 py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-6">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {ambassadors.map((ambassador) => (
                        <AmbassadorCard
                            key={ambassador.id}
                            ambassador={ambassador}
                            onViewProfile={setSelectedAmbassador}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedAmbassador && (
                    <AmbassadorModal
                        ambassador={selectedAmbassador}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Ambassadors;
