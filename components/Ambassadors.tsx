import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Testimonial = {
    quote: string;
    author: string;
    image?: string;
    videoUrl?: string;
};

type Ambassador = {
    id: number;
    name: string;
    contact: string;
    image: string;
    bio: string;
    salesRank: number;
    totalSales: number | string;
    prcLicenseNo?: string;
    phoneNumber?: string;
    viberWhatsapp?: string;
    email?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    affiliations?: string;
    testimonials?: Testimonial[];
    surname?: string;
    since?: string;
};

function getEmbedUrl(url: string) {
    if (!url) return null;
    if (url.includes('youtube.com/shorts/')) {
        return url.replace('youtube.com/shorts/', 'youtube.com/embed/');
    }
    if (url.includes('youtube.com/watch?v=')) {
        return url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
    }
    if (url.includes('youtu.be/')) {
        return url.replace('youtu.be/', 'youtube.com/embed/');
    }
    if (url.includes('facebook.com')) {
        return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=500`;
    }
    return null;
}

const ambassadors: Ambassador[] = [
    {
        id: 1,
        name: 'Georgie Anunciacion ',
        contact: 'Get Housed',
        image: '/OLI Ambassadors/Georgie-1.png',
        bio: 'Passionate real estate professional ensuring smooth homebuying experiences.',
        salesRank: 1,
        totalSales: '250+',
        prcLicenseNo: 'NO. 0035543',
        phoneNumber: '+63 915 774 9350',
        email: 'anunciacion.ovialand@gmail.com',
        facebook: 'https://www.facebook.com/georgie.anunciacion.3',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@georgieanunciacion',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Moving to Ovialand was the best decision for our growing family. The community is safe and beautifully designed.',
                author: 'Maria Santos',
                image: '/OLI Ambassadors/Georgie-1.png',
                videoUrl: ''
            },
            {
                quote: 'Moving to Ovialand was the best decision for our growing family. The community is safe and beautifully designed.',
                author: 'Maria Santos',
                image: '/OLI Ambassadors/Desa-2.jpg',
                videoUrl: ''
            },
            {
                quote: 'Moving to Ovialand was the best decision for our growing family. The community is safe and beautifully designed.',
                author: 'Maria Santos',
                image: '/OLI Ambassadors/Jessa-3.png',
                videoUrl: ''
            },
        ],
        since: '2022'
    },
    {
        id: 2,
        name: 'Desa Angelyn Fermo',
        contact: 'Human Shelter Realty Corporation',
        image: '/OLI Ambassadors/Desa-3.png',
        bio: 'Dedicated member of the premier Ovialand sales force, committed to helping families find their dream homes.',
        salesRank: 2,
        totalSales: '150+',
        prcLicenseNo: 'NO. 0010116',
        phoneNumber: '+63 998 560 8213',
        email: 'angie.fermo18@gmail.com',
        facebook: 'https://www.facebook.com/share/1E5zrRXz2D/?mibextid=wwXIfr',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@ovialandangelynfermo?_r=1&_t=ZS-95hHsyrBW4N',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Finding a home in Central Luzon was made so much easier with Desa. She knows the area perfectly.',
                author: 'Elena Reyes',
                image: '/OLI Ambassadors/Desa-2.jpg',
                videoUrl: ''
            }
        ],
        since: '2021'
    },
    {
        id: 3,
        name: 'Jessabel Valera',
        contact: 'Featured Listing Reality Corporation',
        image: '/OLI Ambassadors/Jessa-3.png',
        bio: 'Experienced ambassador providing expert guidance in real estate investments.',
        salesRank: 3,
        totalSales: 110,
        prcLicenseNo: 'NO. 31719',
        phoneNumber: '+63 981 808 2735',
        email: 'valera.ovialand@gmail.com',
        facebook: 'https://www.facebook.com/share/18Z6LFy7au/?mibextid=wwXIfr',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@ovialand.valera?_r=1&_t=ZS-95h11nF1xm1',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2025'
    },
    {
        id: 4,
        name: 'Rhea Elise Villapando',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Rhea-3.png',
        bio: 'Committed to finding the perfect property match for every client.',
        salesRank: 4,
        totalSales: 102,
        prcLicenseNo: 'NO.',
        phoneNumber: '+63 917 456 7890',
        email: 'Placeholder',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        tiktok: 'https://tiktok.com/',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2020'
    },
    {
        id: 5,
        name: 'Ricel Austria',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Ricel-3.png',
        bio: 'A highly motivated individual focused on client satisfaction.',
        salesRank: 5,
        totalSales: 97,
        prcLicenseNo: 'PRC-13421',
        phoneNumber: '+63 917 567 8901',
        email: 'Placeholder',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
        tiktok: 'https://tiktok.com/',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2020'
    },
    {
        id: 6,
        name: 'Zaira Delos Santos',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Zaira-2.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 140,
        prcLicenseNo: '0010116-| DHSUD NO. NCR-B-1856',
        phoneNumber: '+63 919 006 7741',
        email: 'zairadelossantos.hsrc@gmail.com',
        facebook: 'https://www.facebook.com/zadelossantos2024',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@zaira.delossantos',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2023'
    },
    {
        id: 7,
        name: 'Trixie Dominique Marcelo',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Trixie-2.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 80,
        prcLicenseNo: 'NO. 1039',
        phoneNumber: '+63 908 383 3111',
        email: 'marcelotrixiedominique@gmail.com',
        facebook: 'https://www.facebook.com/share/1Ctxm5RySq/?mibextid=wwXIfr',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@realtor_trixiemarcelo?_r=1&_t=ZS-95htjuUJw4j',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2024'
    },
    {
        id: 8,
        name: 'Roselyn May Viñalon',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Roselyn-2.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 85,
        prcLicenseNo: 'NO. ',
        phoneNumber: '+63 951 298 4627',
        email: 'thesavvybroker.alta@gmail.com',
        facebook: 'https://www.facebook.com/share/1Cb8SHkXyf/?mibextid=wwXIfr',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@thesavvybroker?_r=1&_t=ZS-95hBOgkqgGC',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2023'
    },
    {
        id: 9,
        name: 'Cecille Raposas',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Cecille-2.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 50,
        prcLicenseNo: '0018640',
        phoneNumber: '+63 956 277 0726',
        email: 'cezmyrose@gmail.com',
        facebook: 'https://www.facebook.com/share/1ajVxF9nKc/?mibextid=wwXIfr',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@cheraposas?_r=1&_t=ZS-95hBTf7kZn8',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2020'
    },
    {
        id: 10,
        name: 'Kreishner Lance Deyro Uy',
        contact: 'Company Name',
        image: '/OLI Ambassadors/Lance-1.png',
        bio: 'Detail-oriented ambassador ensuring every transaction is handled with care.',
        salesRank: 6,
        totalSales: 37,
        prcLicenseNo: 'NO. 0018640',
        phoneNumber: '+63 991 274 2846',
        email: 'lance_uy32@yahoo.com',
        facebook: 'https://www.facebook.com/lance.d.uy',
        instagram: 'https://instagram.com/',
        tiktok: 'https://www.tiktok.com/@kreishnerlanceuy.rrct',
        affiliations: 'Accredited Ovialand Seller',
        testimonials: [
            {
                quote: 'Reviews here.',
                author: 'Verified Client',
                image: '',
                videoUrl: ''
            }
        ],
        since: '2024'
    },
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
                <h3 className="text-[20px] font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    {ambassador.name}
                </h3>
                <p className="mt-2 inline-flex items-center rounded-full border border-[#bb9c60]/48 bg-[#1b352d]/65 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[#f5efe4]/80">
                    OLI AMBASSADOR
                </p>
                <p className="mt-3 text-sm text-[#f5efe4]/86">{ambassador.contact}</p>
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
                        <h3 className="mt-3 text-[25px] font-semibold uppercase tracking-[0.06em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] flex flex-col gap-1">
                            <span>{ambassador.name}</span>
                            {ambassador.surname && <span>{ambassador.surname}</span>}
                        </h3>

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
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                                        {/* Row 1 */}
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Mobile Number</p>
                                                <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.phoneNumber ?? '—'}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Facebook</p>
                                                {ambassador.facebook ? (
                                                    <a href={ambassador.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.facebook}</a>
                                                ) : (
                                                    <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Row 2 */}
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Viber/WhatsApp</p>
                                                <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.viberWhatsapp ?? '—'}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.99 4.19-2.58 5.61-1.61 1.44-3.79 2.22-5.99 2.16-2.28-.05-4.49-.97-6.07-2.61-1.57-1.64-2.42-3.88-2.41-6.17.02-2.26.86-4.48 2.4-6.12 1.54-1.64 3.75-2.58 6.02-2.61h.02V11.2h-.03c-1.14.01-2.27.46-3.08 1.25-.8.81-1.26 1.95-1.25 3.1.02 1.13.48 2.25 1.28 3.05.82.8 1.95 1.26 3.1 1.25 1.17-.01 2.3-.5 3.1-1.34.8-.84 1.23-1.99 1.22-3.15V.02z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">TikTok</p>
                                                {ambassador.tiktok ? (
                                                    <a href={ambassador.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.tiktok}</a>
                                                ) : (
                                                    <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Row 3 */}
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Email</p>
                                                <p className="text-sm text-[#f5efe4] font-medium truncate">{ambassador.email ?? ambassador.contact}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center group">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bb9c60]/30 bg-[#bb9c60]/10 text-[#bb9c60] transition-all group-hover:bg-[#bb9c60] group-hover:text-[#152d25]">
                                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                            </div>
                                            <div className="ml-4 min-w-0">
                                                <p className="text-[0.65rem] uppercase tracking-wider text-[#f5efe4]/50">Instagram</p>
                                                {ambassador.instagram ? (
                                                    <a href={ambassador.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bb9c60] hover:underline font-medium truncate block">{ambassador.instagram}</a>
                                                ) : (
                                                    <p className="text-sm text-[#f5efe4] font-medium truncate">—</p>
                                                )}
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
                                    <div className="space-y-2 text-sm leading-relaxed text-[#f5efe4]/90">
                                        <p>{ambassador.contact}</p>
                                        <p>Accredited Ovialand Seller Since {ambassador.since ?? '20XX'}</p>
                                    </div>
                                </div>

                                {/* Testimonials */}
                                <div className="space-y-6">
                                    {ambassador.testimonials?.map((t, idx) => (
                                        <div key={idx} className="rounded-3xl border border-[#c9a961]/20 bg-linear-to-b from-[#1a3a2e] to-[#0d2818] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                                            {/* Decorative Serif 'f' Icon Background */}
                                            <div className="absolute -right-2 -top-4 font-serif text-8xl text-[#c9a961]/10 italic pointer-events-none">f</div>

                                            <div className="relative z-10">
                                                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a961] mb-8 flex items-center">
                                                    <span className="h-px w-6 bg-[#c9a961]/30 mr-3" />
                                                    Client Testimonials
                                                </h4>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                    <div className="space-y-6">
                                                        <div className="relative">
                                                            <div className="absolute -left-2 -top-2 h-8 w-8 text-[#c9a961]/20">
                                                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                                                                    <path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L19 16L19 14L16 14C14.899 14 14.017 13.101 14.017 12L14.017 9C14.017 7.899 14.899 7 16 7L19 7L19 2L16 2C12.134 2 9 5.134 9 9L9 12C9 12.899 8.101 12 7 12L4 12L4 14L7 14C8.101 14 9 14.899 9 16L9 19C9 20.101 8.101 21 7 21L4 21L4 24L7 24C10.866 24 14.017 20.866 14.017 17L14.017 21Z" />
                                                                </svg>
                                                            </div>
                                                            <p className="text-lg leading-relaxed text-white italic font-light relative z-10 pt-4">
                                                                "{t.quote}"
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            <div className="flex gap-0.5">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <svg key={i} className="w-3.5 h-3.5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                    </svg>
                                                                ))}
                                                            </div>
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a961]">{t.author}</span>
                                                        </div>
                                                    </div>

                                                    {(t.image || t.videoUrl) && (
                                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/20 group">
                                                            {t.videoUrl ? (
                                                                <div className="aspect-video w-full">
                                                                    <iframe
                                                                        src={getEmbedUrl(t.videoUrl) || ''}
                                                                        className="w-full h-full"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    />
                                                                </div>
                                                            ) : t.image ? (
                                                                <img src={t.image} alt="Testimonial" className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
                                                            ) : null}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                    <h2 className="text-4xl font-bold uppercase tracking-[0.08em] md:text-4xl">
                        Meet our OLI Ambassadors
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#152d25]/82 md:text-base">
                        Experience a more convenient, guided, and premier way to find your dream home with people you can trust. Our trusted partner brokers and sellers are here to help guide you throughout your homebuying journey.
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
