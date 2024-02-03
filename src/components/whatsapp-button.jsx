'use client'

import contact from "@/data/contact";
import { FaWhatsapp } from 'react-icons/fa'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function WhatsAppButton() {

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${contact.phoneNumber}`, '_blank');
    };

    return (
        <div>
            <div
                className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full cursor-pointer hover:bg-green-600 shadow-md"
                onClick={handleWhatsAppClick}
                data-tip="Chat on WhatsApp"
            >
                <FaWhatsapp size={30} />
            </div>
            <ReactTooltip place="left" effect="solid" />
        </div>
    );
};
