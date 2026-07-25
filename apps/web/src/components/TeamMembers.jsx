import React from 'react';

const TeamMembers = ({ members = [] }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-satash-blue-900 mb-6">Team members</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {members.length > 0 ? (
            members.map((m) => (
              <div key={m.name} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <img src={m.image} alt={m.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-satash-blue-900">{m.name}</p>
                  <p className="text-slate-600 text-sm">{m.role}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-600">No team members added yet. Edit this page to add members.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
