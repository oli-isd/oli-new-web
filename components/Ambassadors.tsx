import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Ambassador } from '../types';
import { AMBASSADORS } from '../data/ambassadors';
import Section from './base/Section';
import Container from './base/Container';
import AmbassadorCard from './Ambassadors/AmbassadorCard';
import AmbassadorModal from './Ambassadors/AmbassadorModal';

const Ambassadors: React.FC = () => {
    const [selectedAmbassador, setSelectedAmbassador] = useState<Ambassador | null>(null);

    const closeModal = () => setSelectedAmbassador(null);

    return (
        <Section bg="gradient" className="py-10 md:py-10">
            <Container>
                <div className="mx-auto mb-10 max-w-4xl text-center text-[#152d25] md:mb-14">
                    <h2 className="text-4xl font-bold uppercase tracking-[0.08em] md:text-4xl">
                        Meet our OLI Ambassadors
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#152d25]/82 md:text-base">
                        Experience a more convenient, guided, and premier way to find your dream home with people you can trust. Our trusted partner brokers and sellers are here to help guide you throughout your homebuying journey.
                    </p>
                </div>

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {AMBASSADORS.map((ambassador) => (
                        <AmbassadorCard
                            key={ambassador.id}
                            ambassador={ambassador}
                            onViewProfile={setSelectedAmbassador}
                        />
                    ))}
                </div>
            </Container>

            <AnimatePresence>
                {selectedAmbassador && (
                    <AmbassadorModal
                        ambassador={selectedAmbassador}
                        onClose={closeModal}
                    />
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Ambassadors;
