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
        name: 'Ms. Georgie Anunciacion',
        contact: 'Placeholder',
        image: '/Ambassadors/Georgie.jpg',
        bio: 'Placeholder',
        salesRank: 1,
        totalSales: 127
    },
    {
        id: 2,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 2,
        totalSales: 118
    },
    {
        id: 3,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 3,
        totalSales: 110
    },
    {
        id: 4,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 4,
        totalSales: 102
    },
    {
        id: 5,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 5,
        totalSales: 97
    },
    {
        id: 6,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 6,
        totalSales: 91
    },
    {
        id: 7,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 7,
        totalSales: 86
    },
    {
        id: 8,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 8,
        totalSales: 82
    },
    {
        id: 9,
        name: 'Placeholder',
        contact: 'placeholder@oliambassadors.com',
        image: '/placeholder-profile.svg',
        bio: 'Placeholder',
        salesRank: 9,
        totalSales: 78
    },
    {
        id: 10,
        name: 'Placeholder',
        contact: 'Placeholder',
        image: '/placeholder-profile.svg',
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
        <article className="group relative overflow-hidden rounded-4xl border border-green-300/20 bg-linear-to-b from-green-700 via-green-600 to-green-700 p-6 shadow-[0_20px_55px_-24px_rgba(10,45,15,0.9)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_-20px_rgba(10,45,15,0.95)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(255,255,255,0.22),transparent_56%)]" />

            <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-green-100/25 bg-green-700/75 px-3 py-1 text-xs font-semibold text-white shadow">
                Top {ambassador.salesRank}
            </span>

            

            <div className="relative mx-auto mb-6 w-[90%] max-w-72 rounded-4xl border border-white/20 bg-white/10 p-3.5">
                <div className="absolute inset-0 rounded-4xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]" />
                <div className="absolute -inset-2 rounded-[2.2rem] border border-white/15" />
                <img
                    src={ambassador.image}
                    alt={`${ambassador.name} placeholder`}
                    className="h-72 w-full rounded-[1.45rem] object-cover"
                    loading="lazy"
                />
            </div>

            <div className="mb-6 text-center text-white">
                <h3 className="text-3xl font-semibold uppercase tracking-wider">{ambassador.name}</h3>
                <p className="mt-1 text-sm text-white/90">OLI Ambassador</p>
                <p className="mt-2 text-sm text-white/75">{ambassador.contact}</p>
            </div>

            <button
                type="button"
                onClick={() => onViewProfile(ambassador)}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/25"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-green-700/75 px-4 py-8 backdrop-blur-sm"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[2.25rem] border border-green-200/20 bg-linear-to-b from-green-700 via-green-600 to-green-700 p-6 text-white shadow-[0_40px_120px_-32px_rgba(0,0,0,0.75)] md:p-8"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.28),transparent_58%)]" />
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close ambassador profile"
                    className="absolute right-4 top-4 rounded-full border border-white/35 bg-green-700/70 p-2 text-white transition-colors hover:bg-green-700/85"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <p className="relative mb-5 text-center text-xs uppercase tracking-[0.45em] text-white/85">Welcome On Board</p>

                <div className="relative mx-auto mb-7 w-full max-w-sm rounded-4xl border border-white/20 bg-white/10 p-3">
                    <div className="absolute -inset-2 rounded-[2.2rem] border border-white/15" />
                    <img
                        src={ambassador.image}
                        alt={`${ambassador.name} placeholder`}
                        className="h-72 w-full rounded-3xl object-cover"
                    />
                </div>

                <div className="relative text-center">
                    <p className="text-sm tracking-wide text-white/90">Top {ambassador.salesRank} Seller</p>
                    <h3 className="mt-1 text-3xl font-semibold uppercase tracking-wide">{ambassador.name}</h3>
                    <p className="mt-1 text-sm text-white/85">OLI Ambassador</p>

                    <div className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/25 bg-green-700/40 p-4">
                            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/75">Contact</p>
                            <p className="mt-1 text-sm text-white">{ambassador.contact}</p>
                        </div>
                        <div className="rounded-2xl border border-white/25 bg-green-700/40 p-4">
                            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/75">Sales</p>
                            <p className="mt-1 text-sm text-white">{ambassador.totalSales} closed sales</p>
                        </div>
                    </div>

                    <p className="mx-auto mt-5 max-w-xl text-sm italic leading-relaxed text-white/90">
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
        <section className="bg-linear-to-b from-green-50 via-[#f6faef] to-white py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-6">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-600">OLI Elite Network</p>
                    <h2 className="mb-4 text-3xl font-bold text-green-700 md:text-5xl">Meet Our Top 10 Ovialand Ambassadors</h2>
                </div>

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
