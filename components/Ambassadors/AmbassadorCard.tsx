import React from 'react';
import { Ambassador } from '../../types';
import Button from '../base/Button';

interface AmbassadorCardProps {
    ambassador: Ambassador;
    onViewProfile: (ambassador: Ambassador) => void;
}

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
                        alt={ambassador.name}
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

            <Button
                variant="gold"
                size="full"
                onClick={() => onViewProfile(ambassador)}
            >
                View Profile
            </Button>
        </article>
    );
};

export default AmbassadorCard;
