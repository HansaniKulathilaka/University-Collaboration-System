import React from 'react';
import EmptyState from '../components/Groups/EmptyState';
import { Flag } from 'lucide-react';

const Clubs = () => {
    return (
        <div className="page-content">
            <EmptyState
                title="Clubs are coming soon!"
                description="Our team is working hard to bring you the best club discovery experience. Stay tuned!"
            />
        </div>
    );
};

export default Clubs;
