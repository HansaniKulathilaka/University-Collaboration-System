import React from 'react';
import EmptyState from '../components/Groups/EmptyState';
import { FileText } from 'lucide-react';

const Notes = () => {
    return (
        <div className="page-content">
            <EmptyState
                title="Notes are coming soon!"
                description="A dedicated space for your study materials and personal notes. We're building it right now."
                icon={FileText}
            />
        </div>
    );
};

export default Notes;
