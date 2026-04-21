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
    prcLicenseNo?: string;
    phoneNumber?: string;
    email?: string;
    socialMedia?: string;
    affiliations?: string;
    testimonials?: string;
};

const ambassadors: Ambassador[] = [
    {
        id: 1,
        name: 'Desa Angelyn',
        contact: 'desa.fermo@ovialand.com',
        image: '/OLI Ambassadors/Desa-2.jpg',
        bio: 'Dedicated member of the premier Ovialand sales force, committed to helping families find their dream homes.',
        salesRank: 1,
        totalSales: 127,
        prcLicenseNo: 'PRC-10293',
        phoneNumber: '+63 917 123 4567',
        email: 'desa.fermo@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Desa was instrumental in helping us secure our first home!'
    },
    {
        id: 2,
        name: 'Georgie',
        contact: 'georgie@ovialand.com',
        image: '/OLI Ambassadors/Georgie.jpg',
        bio: 'Passionate real estate professional ensuring smooth homebuying experiences.',
        salesRank: 2,
        totalSales: 118,
        prcLicenseNo: 'PRC-10442',
        phoneNumber: '+63 917 234 5678',
        email: 'georgie@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Georgie made the entire process seamless.'
    },
    {
        id: 3,
        name: 'Jessabel Valera',
        contact: 'jessabel.valera@ovialand.com',
        image: '/OLI Ambassadors/Jessa.jpg',
        bio: 'Experienced ambassador providing expert guidance in real estate investments.',
        salesRank: 3,
        totalSales: 110,
        prcLicenseNo: 'PRC-11589',
        phoneNumber: '+63 917 345 6789',
        email: 'jessabel.valera@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Highly recommend Jessabel for her professionalism.'
    },
    {
        id: 4,
        name: 'Rhea Elise',
        contact: 'rhea.villapando@ovialand.com',
        image: '/OLI Ambassadors/Rhea.jpg',
        bio: 'Committed to finding the perfect property match for every client.',
        salesRank: 4,
        totalSales: 102,
        prcLicenseNo: 'PRC-12054',
        phoneNumber: '+63 917 456 7890',
        email: 'rhea.villapando@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Rhea went above and beyond to help us.'
    },
    {
        id: 5,
        name: 'Ricel',
        contact: 'ricel@ovialand.com',
        image: '/OLI Ambassadors/Ricel.jpg',
        bio: 'A highly motivated individual focused on client satisfaction.',
        salesRank: 5,
        totalSales: 97,
        prcLicenseNo: 'PRC-13421',
        phoneNumber: '+63 917 567 8901',
        email: 'ricel@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Very accommodating and helpful.'
    },
    {
        id: 6,
        name: 'Zaira',
        contact: 'zaira@ovialand.com',
        image: '/OLI Ambassadors/Zaira.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 91,
        prcLicenseNo: 'PRC-14201',
        phoneNumber: '+63 917 678 9012',
        email: 'zaira@ovialand.com',
        socialMedia: 'LinkedIn, Facebook',
        affiliations: 'Ovialand Premier Sellers',
        testimonials: 'Zaira is fantastic at what she does!'
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
                        className="h-full w-full object-cover object-top"
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
                className="relative flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-4xl border border-[#bb9c60]/65 bg-linear-to-b from-[#11261f] via-[#2e4a3f] to-[#10231d] text-[#f5efe4] shadow-[0_44px_140px_-34px_rgba(0,0,0,0.78)]"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(245,239,228,0.26),transparent_58%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#f5efe4]/12 to-transparent" />
                <div className="pointer-events-none absolute -right-20 top-12 h-32 w-80 rotate-12 bg-linear-to-r from-transparent via-[#bb9c60]/60 to-transparent blur-2xl" />
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close ambassador profile"
                    className="absolute right-4 top-4 z-20 rounded-full border border-[#bb9c60]/70 bg-[#152d25]/75 p-2 text-[#f8f3e9] transition-colors hover:bg-[#152d25]/92"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-6 pt-14 md:px-8 md:pb-8 md:pt-16">
                    <div className="relative mx-auto mb-6 flex w-full max-w-sm justify-center">
                        <div className="pointer-events-none absolute left-1/2 top-3 h-64 w-64 -translate-x-1/2 rounded-full border border-[#bb9c60]/45 bg-[#eae1d0]/8 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.12),0_0_0_1px_rgba(187,156,96,0.16)] md:h-72 md:w-72" />
                        <div className="pointer-events-none absolute left-1/2 top-5 h-60 w-60 -translate-x-1/2 rounded-full border border-[#bb9c60]/22 bg-transparent md:h-68 md:w-68" />
                        <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-[#bb9c60]/62 bg-[#eae1d0]/10 shadow-[inset_0_0_0_1px_rgba(245,239,228,0.16),0_0_0_1px_rgba(187,156,96,0.22)] md:h-72 md:w-72">
                            <img
                                src={ambassador.image}
                                alt={`${ambassador.name} placeholder`}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>

                    <div className="relative text-center">
                        <p className="inline-flex items-center rounded-full border border-[#bb9c60]/48 bg-[#1b352d]/65 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#f5efe4]/80">
                            OLI Ambassador Profile
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">{ambassador.name}</h3>
                        <p className="mt-1 text-sm text-[#f5efe4]/88">OLI Ambassador</p>

                        <div className="mx-auto mt-8 max-w-2xl text-left">
                            {/* Key Stats Bar */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="relative overflow-hidden rounded-2xl border border-[#bb9c60]/30 bg-linear-to-br from-[#f5efe4]/5 to-transparent p-5 backdrop-blur-xs">
                                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#bb9c60]/10 blur-xl" />
                                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#bb9c60]">PRC License No.</p>
                                    <p className="mt-1.5 text-xl font-medium tracking-tight text-[#f8f3e9]">{ambassador.prcLicenseNo ?? 'N/A'}</p>
                                </div>
                                <div className="relative overflow-hidden rounded-2xl border border-[#bb9c60]/30 bg-linear-to-br from-[#f5efe4]/5 to-transparent p-5 backdrop-blur-xs">
                                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#bb9c60]/10 blur-xl" />
                                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#bb9c60]">Track Record</p>
                                    <p className="mt-1.5 text-xl font-medium tracking-tight text-[#f8f3e9]">{ambassador.totalSales} <span className="text-sm font-light text-[#f5efe4]/60 uppercase tracking-widest ml-1">Sales</span></p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Contact Grid */}
                                <div className="rounded-3xl border border-[#bb9c60]/20 bg-[#1a2e26]/40 p-6 md:p-8 shadow-inner">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#bb9c60] mb-6 flex items-center">
                                        <span className="h-px w-8 bg-[#bb9c60]/40 mr-3" />
                                        Contact Information
                                    </h4>
                                    <div className="grid gap-5">
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Mobile Number</p>
                                                <p className="text-sm text-[#f5efe4] font-medium">{ambassador.phoneNumber ?? '—'}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Email Address</p>
                                                <p className="text-sm text-[#f5efe4] font-medium">{ambassador.email ?? ambassador.contact}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Professional Network</p>
                                                <p className="text-sm text-[#f5efe4] font-medium">{ambassador.socialMedia ?? '—'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Affiliations */}
                                <div className="rounded-3xl border border-[#bb9c60]/10 bg-linear-to-r from-[#bb9c60]/5 to-transparent p-6 md:p-8">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-[#bb9c60] mb-4 flex items-center">
                                        <span className="h-px w-8 bg-[#bb9c60]/40 mr-3" />
                                        Professional Affiliations
                                    </h4>
                                    <p className="text-sm leading-relaxed text-[#f5efe4]/90">{ambassador.affiliations ?? 'Dedicated member of the premier Ovialand sales force.'}</p>
                                </div>

                                {/* Testimonials */}
                                <div className="relative pt-6">
                                    <div className="absolute left-0 top-0 h-10 w-10 text-[#bb9c60]/20">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L19 16L19 14L16 14C14.899 14 14.017 13.101 14.017 12L14.017 9C14.017 7.899 14.899 7 16 7L19 7L19 2L16 2C12.134 2 9 5.134 9 9L9 12C9 12.899 8.101 12 7 12L4 12L4 14L7 14C8.101 14 9 14.899 9 16L9 19C9 20.101 8.101 21 7 21L4 21L4 24L7 24C10.866 24 14.017 20.866 14.017 17L14.017 21Z" /></svg>
                                    </div>
                                    <div className="rounded-3xl bg-linear-to-b from-[#f5efe4]/5 to-transparent p-8 md:p-10 italic shadow-2xl">
                                        <p className="relative z-10 text-base leading-relaxed text-[#f5efe4]/95 before:content-['\201C'] after:content-['\201D'] before:text-[#bb9c60] after:text-[#bb9c60] before:mr-1 after:ml-1 before:text-2xl after:text-2xl">
                                            {ambassador.testimonials ?? ambassador.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        <section className="bg-linear-to-b from-[#eae1d0] via-[#f4efe5] to-[#eae1d0]/60 py-10 md:py-10">
            <div className="container mx-auto px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-4xl text-center text-[#152d25] md:mb-14">
                    <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
                        Meet our OLI Ambassadors
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#152d25]/82 md:text-base">
                        Experience a more convenient, guided, and premier way to find your future home with people you can trust. Our trusted partner brokers and sellers are here to help guide you through out your homebuying journey.
                    </p>
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
